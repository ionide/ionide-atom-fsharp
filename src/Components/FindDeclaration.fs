namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module FindDeclaration =

    let private openDec (data : DTO.FindDeclarationResult) =
        Globals.atom.workspace._open(data.Data.File, {OpenOptions.initialColumn = (data.Data.Column - 1); OpenOptions.initialLine = (data.Data.Line - 1) })

    let private handle e =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let name = editor.buffer.file.path;
        let position = editor.getCursorBufferPosition()
        LanguageService.findDeclaration name (int position.row + 1) (int position.column + 1)
        Events.once Events.FindDecl openDec

    let activate () =
        Globals.setTimeout((fun _ -> Globals.atom.commands.add("atom-text-editor", "symbols-view:go-to-declaration", handle |> unbox<Function> ) |> ignore), 500.)
        |> ignore

    let deactivate () =
        ()
