[<ReflectedDefinition>]
module Atom.FSharp.AutocompleteProvider

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp
open Atom.FSharp.DTO
open Atom.FSharp.GlyphMaps
open Atom.FSharp.CompletionHelpers

let mutable isForced = false
let mutable lastResult : DTO.CompletionResult option = None
let mutable emitter : IEmitter option  = None
let mutable lastRow = 0


let getSuggestion (options:GetSuggestionOptions) =
    if unbox<obj>(options.editor.buffer.file) <> null then
        Globals.console.log("autocomplete")
        let path = options.editor.buffer.file.path
        let row = int options.bufferPosition.row + 1
        let col = int options.bufferPosition.column + 1
        // row' & col' are for finding the position of `\` before a prefix that the autocomplete doesn't find by default
        let row' = if row-1 >= 0 then row-1 else row
        // shift back to the character before the prefix to check if it is a `\` for a glyph completion
        let col' = if col-2-options.prefix.Length >= 0 then col-2-options.prefix.Length else col
        let prefix = if options.prefix = "." || options.prefix = "=" then "" else options.prefix
        Atom.Promise.create(fun () ->
            if isForced || lastResult.IsNone || prefix = "" || lastRow <> row  then
                Events.once Events.Errors (fun result ->
                    Events.once Events.Completion (fun result ->
                        Globals.console.log("prefix - "+ prefix)
                        lastRow    <- row
                        isForced   <- false
                        let r =
                            // Autocomplete format for Unicode Glyphs \d
                            // shift back to the character before the prefix to check if it is a `\` for a glyph completion
                            if options.editor.buffer.lines.[row'].[col'] = '\\' then
                                lastResult <- Some{ Kind = ""
                                                    Data = unicode_map  }
                                glyph_completion prefix unicode_map
                            else
                                lastResult <- Some result
                                fsharp_completion prefix result.Data
                        if r.Length > 0 then LanguageService.helptext (r.[0] :?> Suggestion).text
                        r |> Atom.Promise.resolve
                    )
                    LanguageService.completion path row col
                )
                LanguageService.parseEditor options.editor
            else
                isForced <- false
                let r =
                    if options.editor.buffer.lines.[row'].[col'] = '\\' then
                        glyph_completion prefix lastResult.Value.Data
                    else
                        fsharp_completion prefix lastResult.Value.Data
                if r.Length > 0 then LanguageService.helptext (r.[0] :?> Suggestion).text
                r |> Atom.Promise.resolve)
    else Atom.Promise.create(fun () -> Atom.Promise.resolve [||])


let private helptext = createHelptext ()
let mutable private helptextList : DTO.OverloadSignature list  = []
let mutable private currentHelptext = 0

let private helptextSetText (i : int) =
    currentHelptext <- i
    let el = jq' helptext.[0].firstElementChild
    let text = helptextList.[i].Signature
    el.empty() |> ignore
    (text |> jq("<div/>").text)
    |> JQuery.html
    |> String.Replace "\\n"  "</br>"
    |> String.Replace "\n" "</br>"
    |> fun n -> if helptextList.Length > 1 then
                    (sprintf "<div class='tooltip-counter'>%d of %d</div>" (i + 1) helptextList.Length) + n
                else n
    |> el.append |> ignore

let private previousHelptext _ =
    if helptextList.Length > 1 then
        if currentHelptext + 1 = 1 then
            helptextSetText (helptextList.Length - 1)
        else helptextSetText (currentHelptext - 1)

let private nextHelptext _ =
    if helptextList.Length > 1 then
        if currentHelptext + 1 = helptextList.Length then
            helptextSetText 0
        else helptextSetText (currentHelptext + 1)

let mutable private  subscription : Disposable option = None

let private initialize (editor : IEditor) =
    if subscription.IsSome then subscription.Value.dispose ()
    if isFSharpEditor editor then
        subscription <- editor.onDidChangeCursorPosition ((fun _ -> helptext.fadeOut() |> ignore) |> unbox<Function> ) |> Some

let create () =
    jq(".panes").append helptext |> ignore
    helptext.fadeOut () |> ignore
    Globals.atom.commands.add("atom-text-editor","fsharp:autocomplete", (fun _ ->
        let package = Globals.atom.packages.getLoadedPackage("autocomplete-plus") |> unbox<Package>
        let e = package.mainModule.autocompleteManager.suggestionList.emitter
        if emitter.IsNone then
            let handler flag =
                let selected = if flag then (jq "li.selected").prev().find(" span.word-container .word")
                               else (jq "li.selected").next().find(" span.word-container .word")

                let text = if selected.length > 0. then
                                selected.text()
                           else
                                if flag then
                                    (jq ".suggestion-list-scroller .list-group li").last().find(" span.word-container .word").text()
                                else
                                    (jq ".suggestion-list-scroller .list-group li").first().find(" span.word-container .word").text()
                LanguageService.helptext text

                () :> obj
            e.on("did-select-next", (fun _ -> handler false) |> unbox<Function>) |> ignore
            e.on("did-select-previous", (fun _ -> handler true) |> unbox<Function>) |> ignore
            e.on("did-cancel",(fun _ -> helptext.fadeOut() |> ignore) |> unbox<Function>) |> ignore
            emitter <- Some e
        dispatchAutocompleteCommand ()
        isForced <- true) |> unbox<Function>) |> ignore

    Events.on Events.Helptext ((fun (n : DTO.HelptextResult) ->
        let li = (jq ".suggestion-list-scroller .list-group li.selected")
        let o = li.offset()
        let list = jq "autocomplete-suggestion-list"


        if JS.isDefined o && li.length > 0. then
            o.left <- o.left + list.width() + 10.
            o.top <- o.top - li.height() - 10.
            helptext.offset(o) |> ignore
            helptextList <- n.Data.Overloads |> Array.fold (fun acc n -> (n |> Array.toList) @ acc ) []
            helptextSetText 0
            helptext.show() |> ignore
            ()
            ) |> unbox<Function>) |> ignore

    Globals.atom.commands.add("atom-text-editor","fsharp:helptext-next", nextHelptext |> unbox<Function>) |> ignore
    Globals.atom.commands.add("atom-text-editor","fsharp:helptext-previous", previousHelptext |> unbox<Function>) |> ignore

    Globals.atom.workspace.getActiveTextEditor() |> initialize
    Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> initialize ed) |> unbox<Function>  ) |> ignore
    // Provider for Unicode  Glyph Autocompletion Service
    {   selector = ".source.fsharp"
        //disableForSelector = ".source.fsharp .string, .source.fsharp .comment"
        disableForSelector = " "
        inclusionPriority = 4
        excludeLowerPriority = false
        getSuggestions = getSuggestion
    }
