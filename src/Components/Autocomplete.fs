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
    [<JSEmitInline("atom.commands.dispatch(atom.views.getView(atom.workspace.getActiveTextEditor()),'autocomplete-plus:activate');")>]
    let dispatchAutocompleteCommand () : unit = failwith "JS"


    let mutable isForced = false
    let mutable lastResult : DTO.CompletionResult option = None
    let mutable emitter : IEmitter option = None


    type GetSuggestionOptions = {
        editor          : AtomCore.IEditor
        bufferPosition  : TextBuffer.IPoint
        prefix          : string
        scopeDescriptor : string[] }

    type Provider = {
        selector             : string
        disableForSelector   : string
        inclusionPriority    : int
        excludeLowerPriority : bool
        getSuggestions       : GetSuggestionOptions -> Atom.Promise.Promise  }

    type SuggestionList = { emitter             : IEmitter}
    type Manager =        { suggestionList      : SuggestionList }
    type Module =         { autocompleteManager : Manager }
    type Package =        { mainModule          : Module }

    type Suggestion = {
        text              : string
        replacementPrefix : string
        rightLabel        : string
        ``type``          : string
        description       : string
    }

    let getSuggestion (options:GetSuggestionOptions) =
        if unbox<obj>(options.editor.buffer.file) <> null then
            let path = options.editor.buffer.file.path
            let row = int options.bufferPosition.row + 1
            let col = int options.bufferPosition.column + 1
            let prefix = if options.prefix = "." || options.prefix = "=" then "" else options.prefix
            Atom.Promise.create(fun () ->
                if isForced || lastResult.IsNone || options.prefix = "." then
                    Events.once Events.Completion (fun result ->
                        lastResult <- Some result
                        isForced <- false
                        result.Data
                        |> Seq.where(fun t -> t.Name.Contains(prefix))
                        |> Seq.map(fun t -> { text =  t.Name
                                              replacementPrefix = prefix
                                              rightLabel = t.Glyph
                                              ``type`` = t.GlyphChar
                                              description = ""
                                            } :> obj)
                        |> Seq.toArray
                        |> Atom.Promise.resolve)
                    LanguageService.completion path row col
                else
                    isForced <- false
                    lastResult.Value.Data
                    |> Seq.where(fun t -> t.Name.Contains(prefix))
                    |> Seq.map(fun t -> { text =  t.Name
                                          replacementPrefix = prefix
                                          rightLabel = t.Glyph
                                          ``type`` = t.GlyphChar
                                          description = ""
                                        } :> obj)
                    |> Seq.toArray
                    |> Atom.Promise.resolve)
        else Atom.Promise.create(fun () -> Atom.Promise.resolve [||])


    let create () =
        Globals.atom.commands.add("atom-text-editor","fsharp:autocomplete", (fun _ ->
            if emitter.IsNone then
                let package = Globals.atom.packages.getLoadedPackage("autocomplete-plus") |> unbox<Package>
                let e = package.mainModule.autocompleteManager.suggestionList.emitter
                let handler () =
                    let selected = jq "li.selected span.word-container .word"
                    let text = selected.text()
                    LanguageService.helptext text
                    () :> obj
                e.on("did-select-next", handler |> unbox<Function>) |> ignore
                e.on("did-select-previous", handler |> unbox<Function>) |> ignore
                emitter <- Some e
            dispatchAutocompleteCommand ()
            isForced <- true) |> unbox<Function>) |> ignore
        { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string, .source.fsharp .comment"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion}
