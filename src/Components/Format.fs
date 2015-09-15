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
module FormatHandler =

    let format () =
        let location = Globals.atom.packages.packageDirPaths.[0] + "/atom-fsharp/bin-fantomas/fantomas.exe"
        let editor = Globals.atom.workspace.getActiveTextEditor()
        if isFSharpEditor editor then
            let p = editor.buffer.file.path
            let arguments = [
                yield p
                yield "--indent"
                yield Globals.atom.config.get("editor.tabLength").ToString()
                yield "--pageWidth"
                yield Globals.atom.config.get("editor.preferredLineLength").ToString()
                if Globals.atom.config.get("atom-fsharp.FormatDocument.SemicolonAtEndOfLine") |> unbox<bool> then yield "--semicolonEOL"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.NoSpaceBeforeArgument") |> unbox<bool> then yield "--noSpaceBeforeArgument"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.NoSpaceBeforeColon") |> unbox<bool> then yield "--noSpaceBeforeColon"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.NoSpaceAfterComma") |> unbox<bool> then yield "--noSpaceAfterComma"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.NoSpaceAfterSemiColon") |> unbox<bool> then yield "--noSpaceAfterSemiColon"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.IndentOnTryWith") |> unbox<bool> then yield "--indentOnTryWith"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.NoSpaceAroundDelimiter") |> unbox<bool> then yield "--noSpaceAroundDelimiter"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.ReorderOpenDeclaration") |> unbox<bool> then yield "--reorderOpenDeclaration"
                if Globals.atom.config.get("atom-fsharp.FormatDocument.StrictMode") |> unbox<bool> then yield "--strictMode" ]  |> List.toArray

            let child = Process.exec location "mono" arguments
            child.stdout.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore
            child.stderr.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore


    let activate () =
        Globals.setTimeout((fun _ -> Globals.atom.commands.add("atom-text-editor", "editor:format-document", format |> unbox<Function> ) |> ignore), 500.)
        |> ignore

    let deactivate () =
        ()
