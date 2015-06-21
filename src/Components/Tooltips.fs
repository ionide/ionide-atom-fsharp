namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module TooltipHandler =
    type position = {row : float; column : float}
    let mutable private ed = createEmpty<IEditor>()
    let mutable private event : JQueryMouseEventObject option = None
    //let mutable private bar = None : IPanel option
    let mutable private bar = createEmpty<IPanel>()
    let private subscriptions = ResizeArray()

    let private createTooltip () =
        "<div class='type-tooltip tooltip'>
            <div class='tooltip-inner'></div>
        </div>" |> jq

    // Create toolbar to display the type signature of the symbol under the cursor
    let private createToolbar () =
        "<div class='type-toolbar panel-bottom type-pane' id='pane' style='height: 20px'> 
            <div class='toolbar-inner'></div>
        </div>"
        |> jq


    let private getPosition e editor =
        let bufferPt = bufferPositionFromMouseEvent e editor
        { row = bufferPt.row; column = bufferPt.column }

    let private getCursor (editor:IEditor) =
        let bufferPt = editor.getCursorBufferPosition()
        { row = bufferPt.row; column = bufferPt.column }


    let mutable private lastMousePosition  = {row = 0.; column = 0.}
    let mutable private lastCursorPosition = {row = 0.; column = 0.}
    let mutable private errorArr    = [||] : DTO.Error []
    let mutable private timer       = None : NodeJS.Timer option 
    let private tooltip = createTooltip ()
    let private toolbar = createToolbar ()

    let private clearTimer () =
        tooltip.fadeOut() |> ignore
        timer |> Option.iter (Globals.clearTimeout)
        timer <- None

    let private reg editor time element =
        jq(".panes").append tooltip |> ignore
        element |> jq'
        |> fun n -> n.mousemove( fun e ->
            let pos = getPosition e editor
            if pos  =
                lastMousePosition then () :> obj else
                clearTimer()
                lastMousePosition <- pos
                timer <- Some ( Globals.setTimeout(( fun _ ->
                    if unbox<obj>(editor.buffer.file) <> null then
                        let path = editor.buffer.file.path
                        event <- Some e
                        LanguageService.tooltip path (int pos.row + 1) (int pos.column + 1)), time))
                () :> obj) |> ignore
                    n.mouseleave(fun _ -> clearTimer () :> obj) |> ignore
                    n.scroll(fun _ -> clearTimer() :> obj) |> ignore
        let pos = getCursor  editor
        if pos  = lastCursorPosition then ()  else
        lastCursorPosition <- pos
        if unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            LanguageService.toolbar path (int pos.row + 1) (int pos.column + 1)
            () 


    // Register the context when the language service will ask for toolbar information
    let private reg2 editor  =
        //jq(".panes").append toolbar |> ignore
        let pos = getCursor  editor
        if pos  = lastCursorPosition then ()  else
        lastCursorPosition <- pos
        if unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            LanguageService.toolbar path (int pos.row + 1) (int pos.column + 1)
            () 



    /// Check if the position of the cursor over the textbuffer is within
    /// the bounds of the error block
    let private matchError (pos:TextBuffer.IPoint) (err: DTO.Error) =
        float err.StartLine    <=  pos.row     &&
        float err.EndLine      >=  pos.row     &&
        float err.StartColumn  <=  pos.column  &&
        float err.EndColumn    >=  pos.column

    /// Draw a line of dashes the same length as the longer string
    let dashes (s1:string) (s2:string) =
        String.concat "" ["\n"; String.replicate (max s1.Length s2.Length) "-";"\n"]



    let private mouseHandler (o : DTO.TooltipResult) =
        event |> Option.iter(fun e ->
        tooltip.[0].firstElementChild
        |> fun n ->
            if (jq "body /deep/ span.fsharp:hover").length > 0. then
                let bufpos = bufferPositionFromMouseEvent e ed
                let err = errorArr |> Array.tryFind (matchError bufpos)  // Check if the position in the buffer has any errors associated with it
                let n' = jq'(n)
                n'.empty() |> ignore
                let errTip s =
                    if err.IsNone then "" else
                    let err, emsg = err.Value, err.Value.Message
                    String.concat "" [(dashes s emsg);":: Error - ";err.Subcategory;" ::\n"; emsg ]
                if o.Data <> "No tooltip information" then
                    (o.Data |> jq("<div/>").text).append(errTip o.Data)
                else (errTip "" |> jq("<div/>").text)
                |> fun n -> n.html()
                |> fun n -> n.Replace("\\n", "</br>")
                |> fun n -> n.Replace("\n" , "</br>")
                |>  n'.append |> ignore
                let j = jq(".panes")
                let x = e.pageX - j.offset().left
                let y = e.pageY - j.offset().top
                tooltip.css("left" , x) |> ignore
                tooltip.css("top"  , y) |> ignore
                tooltip.fadeTo(300., 60.) |> ignore
        )


    let private cursorHandler (o: DTO.TooltipResult) =
        toolbar.[0].firstElementChild
        |> fun n ->
            let n' = jq'(n)
            n'.empty() |> ignore
            if o.Data <> "No tooltip information" then
                //let str = o.Data.Substring(0, o.Data.IndexOf('\n'))
                let str = o.Data  //.Substring(0, o.Data.IndexOf('\n'))
                (str |> jq("<div/>").text)
                |> fun n -> n.html()
                |>  n'.append |> ignore
                


    let private errorHandler (o : DTO.ParseResult) = errorArr <- o.Data


    // Controls whether the type signature toolbar is displayed by checking the syntax grammar in Atom
    let private handleEditorChange (panel : IPanel) (editor : AtomCore.IEditor)  =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            panel.show()
            reg2 editor
        else
            panel.hide()


    let private remove () =
        if JS.isDefined ed && JS.isPropertyDefined ed "getGrammar" && ed.getGrammar().name = "F#" then
            ed |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map  (fun n -> n.[0] |> unbox<Element> |> jq')
            |> Option.iter (fun n -> n.unbind() |> ignore)


    let private initialize (editor : IEditor) =
        remove ()
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            ed <- editor
            editor |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map  (fun n -> n.[0] |> unbox<Element>)
            |> Option.iter (fun n -> reg editor 500. n )


    let activate () =
        let b =
            let t = createToolbar ()
            Globals.atom.workspace.addBottomPanel(unbox<AnonymousType499>{PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = false})
        bar <- b
        let editor = Globals.atom.workspace.getActiveTextEditor() 
        editor |> initialize
        editor |> handleEditorChange b

        //editor.getBuffer().onDidStopChanging(fun () -> reg2 editor) |> ignore
       // editor.cursorMoved(fun () -> reg2 editor)

        Globals.atom.workspace.onDidChangeActivePaneItem(fun ed -> initialize ed) |> ignore
        
        let tp = Globals.atom.workspace.onDidChangeActivePaneItem(fun ed -> handleEditorChange b ed)
        subscriptions.Add tp


        //Globals.atom.workspace.getActiveTextEditor().cu
        let tt = unbox<Function> mouseHandler |> Events.on Events.Tooltips
        subscriptions.Add tt
        let err = unbox<Function> errorHandler |> Events.on Events.Errors
        subscriptions.Add err
        let tb = unbox<Function> cursorHandler |> Events.on Events.Toolbars
        subscriptions.Add tb
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        ()

