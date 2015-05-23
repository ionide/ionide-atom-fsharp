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


    let private getNameFromGlyph i =
        match i with
        | 0 ->  "Class"
        | 18 ->  "Enum"
        | 108 -> "Struct"
        | 144 -> "Struct" (* value type *)
        | 12 ->  "Delegate"
        | 48 ->  "Interface"
        | 84 ->  "Module" (* module *)
        | 90 ->  "Namespace"
        | 72 ->  "Method"
        | 74 ->  "Method"
        | 78 ->  "Extension Method" (* method2 ? *)
        | 102 -> "Property"
        | 30 ->  "Event"
        | 42 ->  "Field" (* fieldblue ? *)
        | 192 ->  "Field" (* fieldyellow ? *)
        | 6 ->  "Field" (* const *)
        | 24 ->  "Property" (* enummember *)
        | 36 ->  "Exception" (* exception *)
        | 54 ->  "Text-file-icon" (* TextLine *)
        | 60 ->  "Regular-file" (* Script *)
        | 66 ->  "Script" (* Script2 *)
        | 98 ->  "Tip-of-the-day" (* Formula *)
        | 112 -> "Class" (* Template *)
        | 120 -> "Class" (* Typedef *)
        | 126 -> "Type" (* Type *)
        | 132 -> "Type" (* Union *)
        | 138 -> "Field" (* Variable *)
        | 150 -> "Class" (* Intrinsic *)
        | 156 -> "Breakpint" (* error *)
        | 168 -> "Misc-files" (* Misc1 *)
        | 174 ->  "Misc-files" (* Misc2 *)
        | 180 -> "Misc-files" (* Misc3 *)
        | _ -> ""


    let getSuggestion (options:GetSuggestionOptions) =
        if unbox<obj>(options.editor.buffer.file) <> null then
            let path = options.editor.buffer.file.path
            let row = int options.bufferPosition.row + 1
            let col = int options.bufferPosition.column
            let prefix = if options.prefix = "." || options.prefix = "=" then "" else options.prefix
            Atom.Promise.create(fun () ->
                Events.once Events.Completion (fun (result :DTO.CompletionResult) ->
                    result.Data
                    |> Seq.where(fun t -> t.Name.Contains(prefix))
                    |> Seq.map(fun t -> { Promise.Suggestion.text =  t.Name
                                          Promise.Suggestion.replacementPrefix = prefix
                                          Promise.Suggestion.rightLabel = t.Glyph |> getNameFromGlyph
                                         // Promise.Suggestion.``type`` = t.Glyph |> getNameFromGlyph |> fun n -> n.ToLower().Replace(" ","")
                                        })
                    |> Seq.toArray
                    |> Atom.Promise.resolve )
                )
            else Atom.Promise.create(fun () -> Atom.Promise.resolve [||])


    let create () = { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion}
