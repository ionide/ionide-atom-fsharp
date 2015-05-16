namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module HighlighterHandler =
    let mutable marked = Array.empty<IDisplayBufferMarker>

    let handle lst =
        marked |> Array.iter(fun m -> m.destroy() |> ignore)
        marked <- Array.empty<IDisplayBufferMarker>
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let action (item : DTO.Error) =
            let marker = editor.markBufferRange(unbox<TextBuffer.IRange>([|[|float item.StartLine;float item.StartColumn|];[|float item.EndLine;  float item.EndColumn|]|]))
            let cls = if item.Severity = "Warning" then "highlight-warning" else "highlight-error"
            marked <- Array.append [|marker|] marked
            decorateMarker(editor, marker, cls)
            ()
        lst |> Array.iter(action)
        ()

[<ReflectedDefinition>]
module ErrorPanel =
    let create () =
        "<div class='tool-panel panel-bottom error-pane' id='pane'>
                <div class='inset-panel'>
                <div class='panel-heading clearfix' style='height: 30px'>
                  <span>Errors</span>
                </div>
                <div class='scrollable' style='height: 120px'>
                    <table id='panelError' class='error-table outputPanel' >
                        <thead><th>Position</th><th>Message</th><th>Type</th><th>Category</th></thead>
                        <tbody id='errorList'>
                    </table>
                </div>
            </div>"
        |> jq

    let createRow (editor : IEditor) (e : DTO.Error)  =
        let t = sprintf "<tr><td>%d : %d</td><td>%s</td><td>%s</td><td>%s</td></tr>"
                    e.StartLineAlternate
                    e.StartColumn
                    e.Message
                    e.Severity
                    e.Subcategory
                |> jq
        t.click(fun x -> editor.setCursorBufferPosition [|e.StartLine; e.StartColumn |])

    let handleEditorChange (panel : IPanel) (service : LanguageService.T) (editor : AtomCore.IEditor)  =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            panel.show()
            editor.buffer.onDidStopChanging(fun _ -> service |> LanguageService.parseCurrent (fun _ -> ()) |> ignore) |> ignore
        else
            panel.hide()

    let handle lst =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            let list = jq("#errorList")
            list.children().remove() |> ignore
            lst |> Array.iter(fun e -> let t = e |> createRow editor
                                       let r = t |> list.append
                                       ())
