namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp

type position = {row : float; column : float}


[<ReflectedDefinition>]
module TooltipHandler =
    let mutable private ed = createEmpty<IEditor>()
    let mutable private event : JQueryMouseEventObject option = None
    let mutable private bar = createEmpty<IPanel>()
    let private subscriptions = ResizeArray()
    let mutable cursorSubscription : Disposable option = None

    let private createTooltip () =
        "<div class='type-tooltip tooltip'>
            <div class='tooltip-inner'></div>
        </div>" |> jq



    let private getPosition e editor =
        let bufferPt = bufferPositionFromMouseEvent e editor
        { row = bufferPt.row; column = bufferPt.column }



    let mutable private lastMousePosition  = {row = 0.; column = 0.}
    //let mutable private lastCursorPosition = {row = 0.; column = 0.}
    let mutable private errorArr    = [||] : DTO.Error []
    let mutable private timer       = None : NodeJS.Timer option
    let private tooltip = createTooltip ()
    //let private toolbar = createToolbar ()

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
                let data = (o.Data |> Array.fold (fun acc n -> (n |> Array.toList) @ acc ) []).Head.Signature

                if data <> "No tooltip information" then
                    (data |> jq("<div/>").text).append(errTip data)
                else (errTip "" |> jq("<div/>").text)
                |> fun n -> n.html()
                |> fun n -> n.Replace("\\n", "</br>")
                |> fun n -> n.Replace("\n" , "</br>")
                |>  n'.append |> ignore
                let j = jq(".panes")
                let x = e.pageX - j.offset().left
                let y = e.pageY - j.offset().top
                tooltip.css("left" , x) |> ignore
                tooltip.css("top"  , y - 20.) |> ignore
                tooltip.fadeTo(300., 60.) |> ignore
        )


    let private errorHandler (o : DTO.ParseResult) = errorArr <- o.Data


    let private remove () =
        if JS.isDefined ed && JS.isPropertyDefined ed "getGrammar" && ed.getGrammar().name = "F#" then
            ed |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map  (fun n -> n.[0] |> unbox<Element> |> jq')
            |> Option.iter (fun n -> n.unbind() |> ignore)


    let private initialize (editor : IEditor) =
        remove ()

        if isFSharpEditor editor then
            ed <- editor
            editor |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map  (fun n -> n.[0] |> unbox<Element>)
            |> Option.iter (fun n -> reg editor 500. n )


    let activate () =
        Globals.atom.workspace.getActiveTextEditor() |> initialize
        Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> initialize ed ) |> unbox<Function>) |> ignore
        let tt = unbox<Function> mouseHandler |> Events.on Events.Tooltips
        subscriptions.Add tt
        let err = unbox<Function> errorHandler |> Events.on Events.Errors
        subscriptions.Add err
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        ()
