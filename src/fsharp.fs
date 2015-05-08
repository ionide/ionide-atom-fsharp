[<ReflectedDefinition>]
module FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom



[<AutoOpen>]
module ViewsHelpers =

    

    let jq(selector : string) = Globals.Dollar.Invoke selector
    let jq'(selector : Element) = Globals.Dollar.Invoke selector
    let (?) jq name = jq("#" + name)

    let getElementsByClass cls e =
        e
        |> fun n -> if JS.isDefined n then Some n else None
        |> Option.map( Atom.JS.getProperty<HTMLElement>("rootElement") )
        |> Option.map (fun n -> n.querySelectorAll(cls) )

    let pixelPositionFromMouseEvent (e : JQueryMouseEventObject) =
        getView
        >> getElementsByClass ".lines"
        >> Option.map( fun n -> n.[0] |> getBoundingClientRect)
        >> fun n' -> match n' with
                     | Some n -> { top = e.clientY - n.top; left =  e.clientX - n.left}
                     | None  -> {top = 0.; left = 0.}

    let screenPositionFromMouseEvent (e : JQueryMouseEventObject) (editor : IEditor) =
        editor.screenPositionForPixelPosition(pixelPositionFromMouseEvent e editor)

    let bufferPositionFromMouseEvent (e : JQueryMouseEventObject) (editor : IEditor) =
        pixelPositionFromMouseEvent e editor
        |> editor.screenPositionForPixelPosition
        |> editor.bufferPositionForScreenPosition

module AutocompleteResults =
    type CompletionResult = {Kind : string; Data : string []}

    type TooltipResult = {Kind : string; Data : string}

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
    let encoding = "utf-8"

    type State =
        | On
        | Off
        | Error

    type T = { State : State; PreviousState : State; Child : ChildProcess option }

    let isOn t = t.State = State.On
    let isOff t = t.State = State.Off
    let isNotOff t = t.State <> State.Off
    let isError t = t.State = State.Error
    let isNotError t = t.State <> State.Error
    let isOffOrError t = isError t || isOff t

    let create = { State = State.Off; PreviousState = State.Off; Child = None }

    /// Starts the 'fsautocomplete.exe' process. If we are
    /// running on Windows, just start it. On Mac, use mono!
    let start t =
        let location =
            Globals.atom.packages.packageDirPaths.[0] + "/fsharp/bin/fsautocomplete.exe"
        let child =
            if Globals._process.platform.StartsWith("win") then
                Globals.spawn(location)
            else
                Globals.spawn("mono", [| location |])
        child.stdin.setEncoding( encoding);

        { t with State = State.On; PreviousState = t.State; Child = Some child }

    let stop t =
        t.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        { t with State = State.Off; PreviousState = t.State; Child = None }

    let ask (msg' : string) no cb state =
        let msg = msg'.Replace("\uFEFF", "")
        Globals.console.log ("ASKED: " + msg)
        state.Child |> Option.iter (fun c ->
                        let s = ref ""
                        let action (data : obj) =
                            let t = !s
                            s := t + data.ToString()
                            let a = !s
                            let len = a.Split('\n').Length - 1
                            if len = no || a.Contains "\"Kind\":\"ERROR\"" then
                                Globals.console.log ("RECIVED: " + a)
                                c.stdout.removeAllListeners "data" |> ignore
                                cb a

                        c.stdin.write( msg, encoding)
                        c.stdout.on ("data", unbox<Function> (action)) |> ignore)
        state

    let send (msg' : string) t =
        let msg = msg'.Replace("\uFEFF", "")
        Globals.console.log ("SEND: " + msg)
        t.Child |> Option.iter (fun c -> c.stdin.write( msg, encoding) |> ignore)
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

    let parseEditor (editor : IEditor) cb service =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            let path = editor.buffer.file.path
            let text = editor.getText()
            let action (s : string) =
                let split = s.Split('\n')
                if split.Length > 1 then
                    try
                        let o = unbox<AutocompleteResults.ParseResult>(Globals.JSON.parse split.[1])
                        if o.Kind = "errors" then Globals.atom.emit("FSharp:Highlight", o.Data)
                    with
                    | ex -> ()
                cb s

            service |> parse path text action
        else
            cb "Error"
            service

    let parseCurrent cb service =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        parseEditor editor cb service

    let completion fn line col cb service =
        let str = sprintf "completion \"%s\" %d %d\n" fn line col
        service |> AutocompleteService.ask str 2 cb

    let tooltip fn line col cb service =
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        service |> AutocompleteService.ask str 1 cb

type GetSuggestionOptions =
  { editor : AtomCore.IEditor
    bufferPosition : TextBuffer.IPoint
    prefix : string
    scopeDescriptor : string[] }

module AutocompleteProvider =
    type Provider = {
        selector : string
        disableForSelector: string
        inclusionPriority : int 
        excludeLowerPriority: bool 
        getSuggestions : GetSuggestionOptions -> Atom.Promise.Promise  }

    let getSuggestion service (options:GetSuggestionOptions) =
        let path = options.editor.buffer.file.path
        let row = int options.bufferPosition.row + 1
        let col = int options.bufferPosition.column
        let prefix = options.prefix
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


    let create service = { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion service}

module HighlighterHandler =
    type DecorationOption =
        { ``type`` : string
          ``class``: string } // not working, JS result -> _class

    [<JSEmitInline("{0}.decorateMarker({1}, {type: 'highlight', class: {2}})")>]
    let decorateMarker(ed : IEditor, marker : IDisplayBufferMarker, cls : string) : unit = failwith "JS"


    let mutable marked = Array.empty<IDisplayBufferMarker>

    let handle lst =
        marked |> Array.iter(fun m -> m.destroy() |> ignore)
        marked <- Array.empty<IDisplayBufferMarker>
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let action (item : AutocompleteResults.Error) =
            let marker = editor.markBufferRange(unbox<TextBuffer.IRange>([|[|float item.StartLine;float item.StartColumn|];[|float item.EndLine;  float item.EndColumn|]|]))
            let cls = if item.Severity = "Warning" then "highlight-warning" else "highlight-error"
            marked <- Array.append [|marker|] marked
            decorateMarker(editor, marker, cls)
            ()
        lst |> Array.iter(action)
        ()

module TooltipHandler =
    type position = {row : float; column : float}

    let create () =
       "<div class='type-tooltip tooltip'><div class='tooltip-inner'></div></div>" |> jq

    let getPosition e editor =
        let bufferPt = bufferPositionFromMouseEvent e editor
        {row = bufferPt.row; column = bufferPt.column}

    let mutable lastPosition = {row = 0.; column = 0.}
    let mutable timer : NodeJS.Timer option = None
    let tooltip = create ()

    let clearTimer () =
        tooltip.fadeOut() |> ignore
        timer |> Option.iter (Globals.clearTimeout)
        timer <- None

    let register service editor time element =

        jq(".panes").append tooltip |> ignore

        element |> jq'
        |> fun n -> n.mousemove(fun e ->
            let pos = getPosition e editor
            if pos = lastPosition then
                () :> obj
            else
                clearTimer()
                lastPosition <- pos
                timer <- Some ( Globals.setTimeout((fun _ -> let path = editor.buffer.file.path
                                                             service
                                                             |> AutocompleteHandler.tooltip path (int pos.row + 1) (int pos.column)
                                                                (fun s -> tooltip.[0].firstElementChild
                                                                          |> fun n -> try
                                                                                        if (jq "body /deep/ span.fsharp:hover").length > 0. then
                                                                                            let o = unbox<AutocompleteResults.TooltipResult>(Globals.JSON.parse s)
                                                                                            if o.Data <> "No tooltip information" then
                                                                                                Globals.document.elementFromPoint(e.clientX, e.clientY)
                                                                                                |> Globals.console.log
                                                                                                let position = pixelPositionFromMouseEvent e editor
                                                                                                let n' = jq'(n)
                                                                                                n'.empty() |> ignore
                                                                                                o.Data.Replace("\\n", "</br>")
                                                                                                |> fun n ->  n.Replace("\n", "</br>")
                                                                                                |>  n'.append |> ignore
                                                                                                tooltip.css("left", position.left + 40.) |> ignore
                                                                                                tooltip.css("top", e.clientY + 20.) |> ignore
                                                                                                tooltip.fadeTo(300., 60.) |> ignore
                                                                                      with
                                                                                      | ex -> ()
                                                                )
                                                            |> ignore
                                                ), time))
                () :> obj) |> ignore
                    n.mouseleave(fun e -> clearTimer () :> obj) |> ignore
                    n.scroll(fun e -> clearTimer() :> obj) |> ignore

    let initialize (service : AutocompleteService.T) (editor : IEditor) =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            editor
            |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map (fun n -> n.[0] |> unbox<Element>)
            |> Option.iter (fun n -> register service editor 500. n)


module ErrorPanelView =
    let create () =
        "<div class='tool-panel panel-bottom error-pane' id='pane'>
                <div class='inset-panel'>
                <div class='panel-heading clearfix'>
                    <div class='btn-toolbar pull-left'>
                        <div class='btn-group btn-toggle'>
                            <button id='btnError' class='btn toggle'>Errors</button>
                            <button id='btnOutput' class='btn' >Output</button>
                        </div>
                    </div>
                </div>
                <table id='panelError' class='error-table outputPanel' >
                    <thead><th>Position</th><th>Message</th><th>Type</th><th>Category</th></thead>
                    <tbody id='errorList'>
                </table>
                <div id='panelOutput' class='error-table outputPanel' style='display : none'></span>

            </div>
            </div>"
        |> jq

    let createRow (editor : IEditor) (e : AutocompleteResults.Error)  =
        let t = sprintf "<tr><td>%d : %d</td><td>%s</td><td>%s</td><td>%s</td></tr>"
                    e.StartLineAlternate
                    e.StartColumn
                    e.Message
                    e.Severity
                    e.Subcategory
                |> jq
        t.click(fun x -> editor.setCursorBufferPosition [|e.StartLine; e.StartColumn |])


    let addButtonHandlers () =
        let btns = jq(".btn-toggle button")
        let panels = jq(".outputPanel")
        btns.click(fun e -> let j = jq'( e.target)
                            btns.removeClass("toggle") |> ignore
                            panels.hide() |> ignore
                            match j.attr("id") with
                            | "btnError" -> jq("#panelError").show() |> ignore
                            | "btnOutput" -> jq("#panelOutput").show() |> ignore
                            | _ -> ()


                            j.addClass("toggle") :> obj ) |> ignore

    let addOutputHandle () =
        Globals.atom.on("FSharp:Output", unbox<Function>(fun (msg : string) ->
            let msg' = msg.Replace("\n", "</br>")
            do jq("#panelOutput").append ( sprintf "<span>%s</span>" msg' ) |> ignore
            if jq("#panelOutput").isVisible () then
               let n = jq("#pane")
               do n.scrollTop(n.height()) |> ignore


            ))

    let handleEditorChange (panel : IPanel) (editor : AtomCore.IEditor) =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then panel.show() else panel.hide()

    let handle lst =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            let list = jq("#errorList")
            list.children().remove() |> ignore
            lst |> Array.iter(fun e -> let t = e |> createRow editor
                                       let r = t |> list.append
                                       ())


    

type FSharpIDE() =
    let service = AutocompleteService.create
                  |> AutocompleteService.start
                  |> AutocompleteService.send "outputmode json\n"

    let projInit () =
        let p = Globals.atom.project.getPaths().[0]
        Globals.console.log p
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
            match projExist with
            | Some a ->
                let path = Globals.atom.project.resolve a
                service |> AutocompleteHandler.project path (fun _ -> service |> AutocompleteHandler.parseCurrent (fun _ -> ()) |> ignore)
                |> ignore
            | None -> service |> AutocompleteHandler.parseCurrent (fun _ -> ()) |> ignore

        if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))

    let register panel =
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>( fun ed -> AutocompleteHandler.parseEditor ed (fun _ -> ()) service |> ignore))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(ErrorPanelView.handleEditorChange  panel))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(fun ed -> Globals.setTimeout((fun _ -> TooltipHandler.initialize service ed), 1000.)))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(HighlighterHandler.handle))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(ErrorPanelView.handle))
        Globals.atom.project.onDidChangePaths(fun _ -> projInit ())

    

    let initialize panel =
        projInit()
        Globals.atom.workspace.getActiveTextEditor() |> ErrorPanelView.handleEditorChange panel
        Globals.atom.workspace.getActiveTextEditor() |> TooltipHandler.initialize service
        ErrorPanelView.addButtonHandlers ()
        ErrorPanelView.addOutputHandle ()

    member x.provide ()=
        AutocompleteProvider.create service

    member x.getSuggestion(options : GetSuggestionOptions) =
        AutocompleteProvider.getSuggestion service options

    member x.activate(state:obj) =
        let panel =
            let t = ErrorPanelView.create ()
            Globals.atom.workspace.addBottomPanel (unbox<AnonymousType499>{PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = false})

        panel |> register
        panel |> initialize
        

        ()

    member x.deactivate() =
        service |> AutocompleteService.stop |> ignore 
        ()
