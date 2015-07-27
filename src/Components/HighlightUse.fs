namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module HighlightUse =
    let mutable private ed  = createEmpty<IEditor>()
    let mutable private marked = Array.empty<IDisplayBufferMarker>
    let private subscriptions = ResizeArray()
    let mutable cursorSubscription : Disposable option = None

    let private clearHighlight () =
        marked |> Array.iter(fun m -> m.destroy() |> ignore)
        marked <- Array.empty<IDisplayBufferMarker>

    let private showHighlight (data : DTO.SymbolUseResult) =
        clearHighlight ()
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let action (item : DTO.SymbolUse) =
            if JS.isPropertyDefined editor "markBufferRange" then
                let marker = editor.markBufferRange([|[|float (item.StartLine - 1);float (item.StartColumn - 1)|];[|float (item.EndLine - 1);  float (item.EndColumn - 1)|]|])
                let cls = if item.IsFromDefinition then "highlight-symboluse-declaration" else "highlight-symboluse"
                marked <- Array.append [|marker|] marked
                decorateMarker(editor, marker, cls)
            ()
        data.Data.Uses |> Array.iter(action)
        ()

    let private getCursor (editor:IEditor) =
        let bufferPt = editor.getCursorBufferPosition()
        { row = bufferPt.row; column = bufferPt.column }

    /// Makes request for symbol uses
    let private askForSymbolUse (editor : IEditor) =
        clearHighlight ()
        if unbox<obj>(editor.buffer.file) <> null then
            let pos = getCursor editor
            let path = editor.buffer.file.path
            LanguageService.symbolUse path (int pos.row + 1) (int pos.column + 1)
        ()

    let private remove () =
        cursorSubscription |> Option.iter (fun cs ->
            cs.dispose()
            cursorSubscription <- None
        )

    let private initialize (editor : IEditor) =
        remove()
        clearHighlight()
        if isFSharpEditor editor then
            ed <- editor
            cursorSubscription <- (OnCursorStopMoving editor 300.  (fun n -> askForSymbolUse ed)) |> Some

    let activate () =
        Globals.atom.workspace.getActiveTextEditor() |> initialize
        Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> initialize ed) |> unbox<Function>  ) |> ignore
        let tb = unbox<Function> showHighlight |> Events.on Events.SymbolUse
        subscriptions.Add tb

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        cursorSubscription |> Option.iter (fun cs -> cs.dispose())
