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
    let private subscriptions = ResizeArray()

    let private create () =
        "<div class='type-tooltip tooltip'><div class='tooltip-inner'></div></div>" |> jq

    let private getPosition e editor =
        let bufferPt = bufferPositionFromMouseEvent e editor
        {row = bufferPt.row; column = bufferPt.column}

    let mutable private lastPosition = {row = 0.; column = 0.}
    let mutable private errorArr : DTO.Error [] = [||]
    let mutable private timer : NodeJS.Timer option = None
    let private tooltip = create ()

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
                lastPosition then () :> obj else
                clearTimer()
                lastPosition <- pos
                timer <- Some ( Globals.setTimeout(( fun _ -> 
                    if unbox<obj>(editor.buffer.file) <> null then
                        let path = editor.buffer.file.path
                        event <- Some e
                        LanguageService.tooltip path (int pos.row + 1) (int pos.column + 1)), time))
                () :> obj) |> ignore
                    n.mouseleave(fun e -> clearTimer () :> obj) |> ignore
                    n.scroll(fun e -> clearTimer() :> obj) |> ignore


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
        

    let private handler (o : DTO.TooltipResult) =
        event |> Option.iter(fun e ->
        tooltip.[0].firstElementChild
        |> fun n -> 
            if (jq "body /deep/ span.fsharp:hover").length > 0. then
                let pixpos = pixelPositionFromMouseEvent e ed
                let bufpos = bufferPositionFromMouseEvent e ed
                let err = errorArr |> Array.tryFind (matchError bufpos) 
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
                tooltip.css("left"  , pixpos.left + 40.) |> ignore
                tooltip.css("top"   , e.clientY   + 20.) |> ignore
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
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            ed <- editor
            editor |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map  (fun n -> n.[0] |> unbox<Element>)
            |> Option.iter (fun n -> reg editor 500. n)


    let activate () =
        Globals.atom.workspace.getActiveTextEditor() |> initialize
        Globals.atom.workspace.onDidChangeActivePaneItem(fun ed -> initialize ed) |> ignore
        let t = unbox<Function> handler |> Events.on Events.Tooltips
        subscriptions.Add t
        let e = unbox<Function> errorHandler |> Events.on Events.Errors
        subscriptions.Add e
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        ()
