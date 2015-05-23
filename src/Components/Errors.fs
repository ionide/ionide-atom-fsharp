namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom

[<ReflectedDefinition>]
module ErrorPanel =
    
    let mutable private panel : IPanel option = None
    let private subscriptions = ResizeArray()

    let private create () =
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

    let private createRow (editor : IEditor) (e : DTO.Error)  =
        let t = sprintf "<tr><td>%d : %d</td><td>%s</td><td>%s</td><td>%s</td></tr>"
                    e.StartLineAlternate
                    e.StartColumn
                    e.Message
                    e.Severity
                    e.Subcategory
                |> jq
        t.click(fun x -> editor.setCursorBufferPosition [|e.StartLine; e.StartColumn |])

    let private handleEditorChange (panel : IPanel) (editor : AtomCore.IEditor)  =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            panel.show()
        else
            panel.hide()

    let private handle (o : DTO.ParseResult) =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
            let list = jq("#errorList")
            list.children().remove() |> ignore
            o.Data |> Array.iter(fun e -> let t = e |> createRow editor
                                          let r = t |> list.append
                                          ())

    let activate () =
        let p =
            let t = create ()
            Globals.atom.workspace.addBottomPanel (unbox<AnonymousType499>{PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = false})
        panel <- Some p
        Globals.atom.workspace.getActiveTextEditor() |>  handleEditorChange p
        let t1 = Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> handleEditorChange p ed)
        let t2 = unbox<Function> handle |> Events.on Events.Errors
        subscriptions.Add t1
        subscriptions.Add t2 
        ()

    let deactivate () =
        panel |> Option.iter( fun p -> p.destroy())
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        ()
