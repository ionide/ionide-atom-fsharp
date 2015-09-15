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
module FindDeclaration =

    let mutable lastFile : string option = None
    let mutable lastPosition : TextBuffer.IPoint option = None

    let private openDec (data : DTO.FindDeclarationResult) =
        Globals.atom.workspace._open(data.Data.File, {OpenOptions.initialColumn = (data.Data.Column - 1); OpenOptions.initialLine = (data.Data.Line - 1) })

    let private goBack () =
        lastFile |> Option.iter (fun lf ->
        lastPosition |> Option.iter (fun lp ->
            Globals.atom.workspace._open(lf, {OpenOptions.initialColumn = int lp.column; OpenOptions.initialLine = int lp.row })
            |> ignore
                 )
            )

    let private handle e =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let name = editor.buffer.file.path;
        let position = editor.getCursorBufferPosition()
        lastFile <- Some name
        lastPosition <- Some position

        LanguageService.findDeclaration name (int position.row + 1) (int position.column + 1)
        Events.once Events.FindDecl openDec

    let activate () =
        Globals.setTimeout((fun _ -> Globals.atom.commands.add("atom-text-editor", "symbols-view:go-to-declaration", handle |> unbox<Function> ) |> ignore), 500.)
        |> ignore

        Globals.setTimeout((fun _ -> Globals.atom.commands.add("atom-text-editor", "symbols-view:return-from-declaration", goBack |> unbox<Function> ) |> ignore), 500.)
        |> ignore

    let deactivate () =
        ()
