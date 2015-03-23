[<ReflectedDefinition>]
module Autocomplete 

#load "funscript-atom.fsx"


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
    

module CompositeDisposable = 
    type CompositeDisposable = class end
        
    [<JSEmit("return new CompositeDisposable;")>]
    let create() : CompositeDisposable = failwith "JS"
        
    [<JSEmit("return {0}.add({1});")>]
    let subscribe (cd : CompositeDisposable, cmd : obj) : unit = failwith "JS"
        
    [<JSEmit("return {0}.dispose();")>]
    let dispose (cd : CompositeDisposable) : unit = failwith "JS"
        
module Atom = 
    [<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
    let addCommand (name : string, cmdName : string, func : unit -> unit) = failwith "JS"
            
    type Editor = class end
            
    [<JSEmit("return atom.workspace.getActiveTextEditor();")>]
    let getActiveTextEditor() : Editor = failwith "JS"
            
    [<JSEmit("return {0}.getText();")>]
    let getEditorText (ed : Editor) : string = failwith "JS"

    [<JSEmit("return {0}.getGrammar().name;")>]
    let getEditorGrammarName(ed : Editor) : string = failwith "JS"

    [<JSEmit("return {0}.buffer.file.path;")>]
    let getEditorPath (ed : Editor) : string = failwith "JS"
            
    [<JSEmit("return atom.packages.packageDirPaths[0];")>]
    let getCurrentPackagePath() : string = failwith "JS"
            
    [<JSEmit("return atom.project.getPath();")>]
    let getCurrentProjectPath() : string = failwith "JS"

    [<JSEmitInline("atom.workspace.onDidChangeActivePaneItem({0})")>]
    let onDidChangeActivePaneItem(cb : Editor -> unit ) : unit = failwith "JS"

    module Promise = 
        type Promise = class end

        [<JSEmitInline("new Promise(function(resolve){{0}()})")>]
        let create( cb : unit -> unit) : Promise = failwith "JS"

        [<JSEmitInline("resolve({0})")>]
        let resolve (o : obj) : unit = failwith "JS"

        [<JSEmitInline("{text: {0}, replacementPrefix: {1}}")>]
        let result (t : string) (prefix : string) : obj = failwith "JS"

        module Options = 
            type Options = class end
            
            [<JSEmitInline("{0}.editor.buffer.file.path")>]
            let getPath(o : Options) : string = failwith "JS"

            [<JSEmitInline("{0}.bufferPosition.column")>]
            let getColumn( o : Options) : int = failwith "JS"

            [<JSEmitInline("{0}.bufferPosition.row")>]
            let getRow (o: Options) : int = failwith "JS"
            
            [<JSEmitInline("{0}.prefix")>]
            let getPrefix (o : Options) : string = failwith "JS"

module AutocompleteResults = 
    type CompletionResult = {Kind : string; Data : string []}

module AutocompleteService = 
    type State = 
        | On
        | Off
        | Error
                
    type T = { State : State; PreviousState : State; Child : ChildProcess option }
                
    let location () = (Atom.getCurrentPackagePath()) + "\\autocomplete\\bin\\fsautocomplete.exe"
    let isOn t = t.State = State.On
    let isOff t = t.State = State.Off
    let isNotOff t = t.State <> State.Off
    let isError t = t.State = State.Error
    let isNotError t = t.State <> State.Error
    let isOffOrError t = isError t || isOff t
                
    let create = { State = State.Off; PreviousState = State.Off; Child = None }
                
    let start t = 
        let child =  location () |> Globals.spawn
        { t with State = State.On; PreviousState = t.State; Child = Some child }
                
    let stop t = 
        t.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        { t with State = State.Off; PreviousState = t.State; Child = None }
                
    let ask msg no cb state = 
        Globals.console.log ("ASKED: " + msg)
        state.Child |> Option.iter (fun c -> 
                        let s = ref ""                                   
                        let action = 
                            fun (data : obj) -> 
                                let t = !s
                                s := t + data.ToString()
                                let a = !s
                                let len = a.Split('\n').Length - 1
                                if len = no || a.Contains "\"Kind\":\"ERROR\"" then 
                                    Globals.console.log ("RECIVED: " + a)
                                    c.stdout.removeAllListeners "data" |> ignore
                                    cb a

                        c.stdin.write msg |> ignore
                        c.stdout.on ("data", unbox<Function> (action)) |> ignore)
        state
                
    let send msg t = 
        Globals.console.log ("SEND: " + msg)
        t.Child |> Option.iter (fun c -> c.stdin.write msg |> ignore)
        t

module AutocompleteHandler = 
    let project s cb service = 
        let str = sprintf "project \"%s\"\n" s 
        service |> AutocompleteService.ask str 1 cb

    let parse path text cb service = 
        let str = sprintf "parse \"%s\"\n%s\n<<EOF>>\n" path text 
        service |> AutocompleteService.ask str 2 cb

    let parseEditor (editor : Atom.Editor) cb service = 
        if Atom.getEditorGrammarName editor = "F#" then
            let path = editor |> Atom.getEditorPath
            let text = editor |> Atom.getEditorText
            service |> parse path text cb
        else
            cb "Error"
            service

    let parseCurrent cb service = 
        let editor = Atom.getActiveTextEditor ()
        parseEditor editor cb service

    let completion fn line col cb service = 
        let str = sprintf "completion \"%s\" %d %d\n" fn line col 
        service |> AutocompleteService.ask str 2 cb

    let tooltip fn line col cb service = 
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        service |> AutocompleteService.ask str 1 cb


                       
type Autocomplete() = 
    let cd = CompositeDisposable.create()        
    let service = AutocompleteService.create
                  |> AutocompleteService.start
                  |> AutocompleteService.send "outputmode json\n"   
    
    member x.getSuggestion(options : Atom.Promise.Options.Options) = 
        let path = options |> Atom.Promise.Options.getPath
        let row = (options |> Atom.Promise.Options.getRow) + 1
        let col = options |> Atom.Promise.Options.getColumn
        let prefix = options |> Atom.Promise.Options.getPrefix
        Atom.Promise.create(fun () ->
            let action = fun (s : string) ->
                let msplit = s.Split('\n')
                if msplit.Length > 1 then
                    let msg = msplit.[1]
                    try
                        let result = unbox<AutocompleteResults.CompletionResult>(Globals.JSON.parse msg)
                        let pref = if prefix = "." || prefix = "=" then "" else prefix
                        if result.Kind = "completion" then
                            result.Data 
                            |> Seq.where(fun t -> t.ToLower().StartsWith(pref.ToLower()))
                            |> Seq.map(fun t -> Atom.Promise.result t pref)
                            |> Seq.toArray 
                            |> Atom.Promise.resolve        
                        else 
                            Atom.Promise.resolve [||]        
                    with
                    | ex -> Atom.Promise.resolve [||]
            service |> AutocompleteHandler.parseCurrent (fun _ -> service |> AutocompleteHandler.completion path row col action |> ignore) |> ignore)



    member x.activate(state:obj) =       

        do Atom.onDidChangeActivePaneItem (fun ed -> AutocompleteHandler.parseEditor ed (fun _ -> ()) service |> ignore)

    member x.deactivate() = 
        CompositeDisposable.dispose(cd)