namespace FSharp.Atom

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
    let mutable ed = createEmpty<IEditor>()

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

    let register editor time element =
        jq(".panes").append tooltip |> ignore

        element |> jq'
        |> fun n -> n.mousemove(fun e ->
            let pos = getPosition e editor
            if pos = lastPosition then
                () :> obj
            else
                clearTimer()
                lastPosition <- pos
                timer <- Some ( Globals.setTimeout((fun _ -> if unbox<obj>(editor.buffer.file) <> null then
                                                                 let path = editor.buffer.file.path
                                                                 LanguageService.tooltip path (int pos.row + 1) (int pos.column)
                                                                    (fun s -> tooltip.[0].firstElementChild
                                                                              |> fun n -> try
                                                                                            if (jq "body /deep/ span.fsharp:hover").length > 0. then
                                                                                                let o = unbox<DTO.TooltipResult>(Globals.JSON.parse s)
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

    let remove () =
        if JS.isDefined ed && JS.isPropertyDefined ed "getGrammar" && ed.getGrammar().name = "F#" then
            ed
            |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map (fun n -> n.[0] |> unbox<Element> |> jq')
            |> Option.iter (fun n -> n.unbind() |> ignore)

    let initialize (editor : IEditor) =
        remove ()
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            ed <- editor
            editor
            |> Globals.atom.views.getView
            |> getElementsByClass ".scroll-view"
            |> Option.map (fun n -> n.[0] |> unbox<Element>)
            |> Option.iter (fun n -> register editor 500. n)
