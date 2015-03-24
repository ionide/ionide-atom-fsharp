[<ReflectedDefinition>]
module Autocomplete 

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process

#load "funscript-atom.fsx"
#load "atom-bindings.fsx"

open Atom
open Atom.Editor
open Atom.Promise

module AutocompleteResults = 
    type CompletionResult = {Kind : string; Data : string []}
    

    type Error = {
        StartLine : int 
        StartLineAlternate : int
        StartColumn : int
        StartColumnAlternate : int
        EndLine : int 
        EndLineAlternate : int
        EndColumn : int
        EndColumnAlternate : int
        Message : string
        Severity : string
        Subcategory : string
        }

    type ParseResult = {Kind : string; Data : Error []}

module AutocompleteService = 
    type State = 
        | On
        | Off
        | Error
                
    type T = { State : State; PreviousState : State; Child : ChildProcess option }
                
    let location () = (getCurrentPackagePath()) + "\\autocomplete\\bin\\fsautocomplete.exe"
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
        //Wierd behaviour
        //let str = sprintf "parse \"%s\"\n%s\n<<EOF>>\n" path text 
        let str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
        service |> AutocompleteService.ask str 2 cb

    let parseEditor (editor : Editor) cb service = 
        if getEditorGrammarName editor = "F#" then
            let path = editor |> getEditorPath
            let text = editor |> getEditorText
            let action (s : string) = 
                let split = s.Split('\n')
                if split.Length > 1 then
                    try
                        let o = unbox<AutocompleteResults.ParseResult>(Globals.JSON.parse split.[1])
                        if o.Kind = "errors" then emit("FSharp.Atom:Highlight", o.Data)
                    with
                    | ex -> ()
                cb s

            service |> parse path text action
        else
            cb "Error"
            service

    let parseCurrent cb service = 
        let editor = getActiveTextEditor ()
        parseEditor editor cb service

    let completion fn line col cb service = 
        let str = sprintf "completion \"%s\" %d %d\n" fn line col 
        service |> AutocompleteService.ask str 2 cb

    let tooltip fn line col cb service = 
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        service |> AutocompleteService.ask str 1 cb

module AutocompleteProvider = 
    
    type Provider = {selector : string; inclusionPriority : int; excludeLowerPriority: bool; getSuggestions : Options.Options -> Promise  }
    


    let getSuggestion service options =
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
                            |> Seq.where(fun t -> t.Contains(pref))
                            |> Seq.map(fun t -> Atom.Promise.result t pref)
                            |> Seq.toArray 
                            |> Atom.Promise.resolve        
                        else 
                            Atom.Promise.resolve [||]        
                    with
                    | ex -> Atom.Promise.resolve [||]
            service |> AutocompleteHandler.parseCurrent (fun _ -> service |> AutocompleteHandler.completion path row col action |> ignore) |> ignore)


    let create service = { selector = ".source.fsharp"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion service}

module HighlighterHandler = 
    let mutable marked = Array.empty<Marker>
    
    let handle lst = 
        marked |> Array.iter(destroyMarker)
        marked <- Array.empty<Marker>
        let editor = getActiveTextEditor()
        let action item = 
            let range = item |> createRange 
            let marker = createMarker(editor, range)
            let cls = if getItemSeverity(item) = "Warning" then "highlight-warning" else "highlight-error"
            marked <- Array.append [|marker|] marked
            decorateMarker(editor, marker, cls)
        lst |> Array.iter(action)
        ()

module Views = 
    let jq(selector : string) = Globals.Dollar.Invoke selector
    let (?) jq name = jq("#" + name)
    
    module ErrorRowView = 
        let create (e : AutocompleteResults.Error) = 
            sprintf "<tr><td>%d : %d</td><td>%s</td><td>%s</td><td>%s</td></tr>" 
                e.StartLineAlternate
                e.StartColumn
                e.Message
                e.Severity
                e.Subcategory
            |> jq


    module ErrorPanelView = 
        let handle lst = 
            let list = jq("#errorList")
            list.children().remove() |> ignore
            lst |> Array.iter(fun e -> let t = e |> ErrorRowView.create 
                                       let r = t |> list.append 
                                       ())

        let create () =
            "<div class='tool-panel panel-bottom error-pane' id='pane'><div class='inset-panel'><div class='panel-heading clearfix'>Errors</div><table class='error-table'><thead><th>Position</th><th>Message</th><th>Type</th><th>Category</th></thead><tbody id='errorList'></table></div></div>"
            |> jq

        let hadnleEditorChange panel editor = 
            if editor |> getEditorGrammarName = "F#" then Workspace.showPanel panel else Workspace.hidePanel panel
                       
type Autocomplete() = 
    let cd = CompositeDisposable.create()        
    let service = AutocompleteService.create
                  |> AutocompleteService.start
                  |> AutocompleteService.send "outputmode json\n"   

    let panel = 
        let t = Views.ErrorPanelView.create () 
        Workspace.addBotomPanel {Workspace.item = t; Workspace.priority = 100; Workspace.visible = false}

    member x.provide ()= 
        AutocompleteProvider.create service

    member x.activate(state:obj) =     
        onDidChangeActivePaneItem (fun ed -> AutocompleteHandler.parseEditor ed (fun _ -> ()) service |> ignore)
        onDidChangeActivePaneItem (Views.ErrorPanelView.hadnleEditorChange panel)
        on("FSharp.Atom:Highlight", HighlighterHandler.handle)
        on("FSharp.Atom:Highlight", Views.ErrorPanelView.handle)
        ()

    member x.deactivate() = 
        CompositeDisposable.dispose(cd)