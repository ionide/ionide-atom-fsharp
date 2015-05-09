namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom


[<ReflectedDefinition>]
module AutocompleteProvider =
    type GetSuggestionOptions = {
        editor : AtomCore.IEditor
        bufferPosition : TextBuffer.IPoint
        prefix : string
        scopeDescriptor : string[] }


    type Provider = {
        selector : string
        disableForSelector: string
        inclusionPriority : int 
        excludeLowerPriority: bool 
        getSuggestions : GetSuggestionOptions -> Atom.Promise.Promise  }

    let getSuggestion service (options:GetSuggestionOptions) =
        let path = options.editor.buffer.file.path
        let row = int options.bufferPosition.row + 1
        let col = int options.bufferPosition.column
        let prefix = options.prefix
        Atom.Promise.create(fun () ->
            let action = fun (s : string) ->
                let msplit = s.Split('\n')
                if msplit.Length > 1 then
                    let msg = msplit.[1]
                    try
                        let result = unbox<DTO.CompletionResult>(Globals.JSON.parse msg)
                        let pref = if prefix = "." || prefix = "=" then "" else prefix
                        if result.Kind = "completion" then
                            result.Data
                            |> Seq.where(fun t -> t.Contains(pref))
                            |> Seq.map(fun t -> Atom.Promise.result t pref)
                            |> Seq.toArray
                            |> Atom.Promise.resolve
                        else
                            Atom.Promise.resolve [||]
                    with
                    | ex -> Atom.Promise.resolve [||]
            service |> LanguageService.completion path row col action |> ignore)


    let create service = { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion service}


