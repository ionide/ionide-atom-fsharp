namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp
open Atom.FSharp.Control

[<ReflectedDefinition>]
module ErrorLinterProvider =
    type Provider = {
        grammarScopes : string[]
        scope         : string
        lintOnFly     : bool
        lint          : IEditor -> Atom.Promise.Promise  }

    type LintResult = {
        ``type`` : string
        text     : string
        filePath : string
        range    : float[][]
    }

    let mapError (editor : IEditor) (item : DTO.Error)  =
        let range = [|[|float (item.StartLine - 1); float (item.StartColumn - 1)|];
                      [|float (item.EndLine - 1);  float (item.EndColumn - 1)|]|]
        { ``type`` = item.Severity
          text = item.Message.Replace("\n", "")
          filePath = editor.buffer.file.path
          range = range
        } :> obj

    let mapLint (editor : IEditor)  (item : DTO.Lint) =
        let range = [|[|float (item.Range.StartLine - 1); float (item.Range.StartColumn - 1)|];
                        [|float (item.Range.EndLine - 1);  float (item.Range.EndColumn - 1)|]|]
        { ``type`` = "Trace"
          text = item.Info.Replace("\n", "")
          filePath = editor.buffer.file.path
          range = range
        } :> obj

    let lint (editor : IEditor) =
        async {
            let! result = LanguageService.parseEditor editor
            let! result' = LanguageService.lint editor
            let linter = Globals.atom.config.get("ionide-fsharp.UseLinter") |> unbox<bool>
            return
                match result, result' with
                | Some n, Some n' ->
                    let r = n.Data.Errors |> Array.map (mapError editor)
                    let r' = if linter then n'.Data |> Array.map (mapLint editor) else [||]
                    Array.concat [r; r']
                | Some n, None -> n.Data.Errors |> Array.map (mapError editor)
                | None, Some n -> if linter then n.Data |> Array.map (mapLint editor) else [||]
                | None, None -> [||]
        } |> Async.StartAsPromise

    let create () =
        [|
          { grammarScopes = [| "source.fsharp"; "source.fsharp.fsi"; "source.fsharp.fsx"; "source.fsharp.fsl"|]; scope = "file"; lint = lint; lintOnFly = true}
        |]
