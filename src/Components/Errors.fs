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

    let lint (editor : IEditor) =
        async {
            let! result = LanguageService.parseEditor editor
            return
                match result with
                | None -> [||]
                | Some n ->
                let map (item : DTO.Error) =
                    let range = [|[|float (item.StartLine - 1); float (item.StartColumn - 1)|];
                                  [|float (item.EndLine - 1);  float (item.EndColumn - 1)|]|]
                    { ``type`` = item.Severity
                      text = item.Message.Replace("\n", "")
                      filePath = editor.buffer.file.path
                      range = range
                    } :> obj
                n.Data
                |> Array.map map
        } |> Async.StartAsPromise


    let lintWarning (editor: IEditor) =
        async {
            let! result = LanguageService.lint editor
            return
                match result with
                | None -> [||]
                | Some n ->
                let map (item : DTO.Lint) =
                    let range = [|[|float (item.Range.StartLine - 1); float (item.Range.StartColumn - 1)|];
                                  [|float (item.Range.EndLine - 1);  float (item.Range.EndColumn - 1)|]|]
                    { ``type`` = "Trace"
                      text = item.Info.Replace("\n", "")
                      filePath = editor.buffer.file.path
                      range = range
                    } :> obj
                n.Data
                |> Array.map map
        } |> Async.StartAsPromise

    let create () =
        [|
          { grammarScopes = [| "source.fsharp"; "source.fsharp.fsi"; "source.fsharp.fsx"; "source.fsharp.fsl"|]; scope = "file"; lint = lint; lintOnFly = true}
        //  { grammarScopes = [| "source.fsharp"; "source.fsharp.fsi"; "source.fsharp.fsx"; "source.fsharp.fsl"|]; scope = "file"; lint = lintWarning; lintOnFly = true}
        |]
