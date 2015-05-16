namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module FindDeclaration =

    let handle e = 
        let editor = Globals.atom.workspace.getActiveTextEditor()
        let name = editor.buffer.file.path;
        let position = editor.getCursorBufferPosition()
        LanguageService.findDeclaration name (int position.row + 1) (int position.column + 1) 
            (fun n -> let data = unbox<DTO.FindDeclarationResult>(Globals.JSON.parse n)
                      Globals.atom.workspace.open'(data.Data.File, {OpenOptions.initialColumn = (data.Data.Column - 1); OpenOptions.initialLine = (data.Data.Line - 1) })
                    
            )
                