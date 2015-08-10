namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp

[<ReflectedDefinition>]
module ToolbarHandler =

    let mutable private ed  = createEmpty<IEditor>()
    let mutable private bar = createEmpty<IPanel>()
    let private subscriptions = ResizeArray()
    let mutable cursorSubscription : Disposable option = None


    // Create toolbar to display the type signature of the symbol under the cursor
    let private createToolbar () =
        "<div class='type-toolbar panel-bottom type-pane' id='pane' style='height: 20px'>
            <div class='toolbar-inner'></div>
        </div>"
        |> jq

    let private getCursor (editor:IEditor) =
        let bufferPt = editor.getCursorBufferPosition()
        { row = bufferPt.row; column = bufferPt.column }

    /// Makes request for toolbar informations
    let private askForToolbar (editor : IEditor)  =
        if unbox<obj>(editor.buffer.file) <> null then
            let pos = getCursor editor
            let path = editor.buffer.file.path
            LanguageService.toolbar path (int pos.row + 1) (int pos.column + 1)
        ()

    // Because the type signature for classes is multiple lines and will not fit
    // within the toolbar we cut out the list of members and properties
    let format_data (tinfo:string) =
        let ti  = tinfo.Trim().Replace('\r',' ').Replace('\n',' ')
        let ti' =
            if ti.StartsWith("Multiple") then
                let idx = ti.IndexOf("type")
                ti.Substring(idx)
            else ti
        if ti'.StartsWith("type") then
            let idx = ti'.IndexOf('=')
            ti'.Substring(0,idx-1)
        else ti'
        |> (+) "> "


    let private cursorHandler (o: DTO.TooltipResult) =
        let tb = jq(".toolbar-inner")
        tb.empty() |> ignore
        if o.Data <> "No tooltip information" then
            tb.append(format_data o.Data) |> ignore
        ()


    // Controls whether the type signature toolbar is displayed by checking the syntax grammar in Atom
    let private handleEditorChange (panel : IPanel) (editor : AtomCore.IEditor)  =
        if isFSharpEditor editor then
            panel.show()
            bar.show()
        else
            panel.hide()
            bar.hide()

    let private remove () =
        cursorSubscription |> Option.iter (fun cs ->
            cs.dispose()
            cursorSubscription <- None
        )

    let private initialize (editor : IEditor) =
        remove()
        if isFSharpEditor editor then
            ed <- editor
            cursorSubscription <- (OnCursorStopMoving editor 300. (fun n -> askForToolbar ed)) |> Some

    let activate () =
        let b =
            let t = createToolbar ()
            Globals.atom.workspace.addBottomPanel({PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = true})
        bar <- b
        Globals.atom.workspace.getActiveTextEditor() |> initialize
        Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> initialize ed) |> unbox<Function>  ) |> ignore

        let tp = Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> handleEditorChange b ed) |> unbox<Function>  )
        subscriptions.Add tp

        let tb = unbox<Function> cursorHandler |> Events.on Events.Toolbars
        subscriptions.Add tb

        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        cursorSubscription |> Option.iter (fun cs -> cs.dispose())
        bar.destroy ()
        ()
