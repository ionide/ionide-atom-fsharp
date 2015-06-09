namespace Atom.FSharp

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

    let getSuggestion (options:GetSuggestionOptions) =
        if unbox<obj>(options.editor.buffer.file) <> null then
            let path = options.editor.buffer.file.path
            let row = int options.bufferPosition.row + 1
            let col = int options.bufferPosition.column + 1
            let prefix = if options.prefix = "." || options.prefix = "=" then "" else options.prefix
            Atom.Promise.create(fun () ->
                Events.once Events.Completion (fun (result :DTO.CompletionResult) ->
                    result.Data
                    |> Seq.where(fun t -> t.Name.Contains(prefix))
                    |> Seq.map(fun t -> { Promise.Suggestion.text =  t.Name
                                          Promise.Suggestion.replacementPrefix = prefix
                                          Promise.Suggestion.rightLabel = t.Glyph
                                          Promise.Suggestion.``type`` = t.GlyphChar
                                        })
                    |> Seq.toArray
                    |> Atom.Promise.resolve )
                LanguageService.completion path row col
                )


        else Atom.Promise.create(fun () -> Atom.Promise.resolve [||])

    let create () = { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion}
