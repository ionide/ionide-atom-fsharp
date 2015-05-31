namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer


open Atom

[<ReflectedDefinition>]
module HighlighterHandler =
    let mutable private marked = Array.empty<IDisplayBufferMarker>
    let private subscriptions = ResizeArray()

    let private handle (o : DTO.ParseResult) =
        marked |> Array.iter(fun m -> m.destroy() |> ignore)
        marked <- Array.empty<IDisplayBufferMarker>
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let action (item : DTO.Error) =
            let marker = editor.markBufferRange(unbox<TextBuffer.IRange>([|[|float item.StartLine;float item.StartColumn|];[|float item.EndLine;  float item.EndColumn|]|]))
            let cls = if item.Severity = "Warning" then "highlight-warning" else "highlight-error"
            marked <- Array.append [|marker|] marked
            decorateMarker(editor, marker, cls)
            ()
        o.Data |> Array.iter(action)
        ()

    let activate () =
        let s = unbox<Function>(handle) |> Events.on Events.Errors
        subscriptions.Add s
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
