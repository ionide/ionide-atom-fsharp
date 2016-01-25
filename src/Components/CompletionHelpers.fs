[<ReflectedDefinition>]
module Atom.FSharp.CompletionHelpers

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp
open Atom.FSharp.DTO


[<JSEmitInline("atom.commands.dispatch(atom.views.getView(atom.workspace.getActiveTextEditor()),'autocomplete-plus:activate');")>]
let dispatchAutocompleteCommand () : unit = failwith "JS"

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

type SuggestionList = { emitter             : IEmitter }
type Manager =        { suggestionList      : SuggestionList }
type Module =         { autocompleteManager : Manager }
type Package =        { mainModule          : Module }

//  Autocomplete-Plus reference for suggestions
//  https://github.com/atom/autocomplete-plus/wiki/Provider-API

type Suggestion =
    {   text              : string
        //snippet           : string
        displayText       : string
        replacementPrefix : string
        ``type``          : string
        leftLabel         : string
        //leftlabelHTML     : string
        rightLabel        : string
        //rightLabelHTML    : string
        //className         : string
        //iconHTML          : string
        //description       : string
        //descriptionMoreURL: string
    }
    static member Default =
        {   text              = ""
            //snippet           = ""
            displayText       = ""
            replacementPrefix = ""
            ``type``          = ""
            leftLabel         = ""
            //leftlabelHTML     = ""
            rightLabel        = ""
            //rightLabelHTML    = ""
            //className         = ""
            //iconHTML          = ""
            //description       = ""
            //descriptionMoreURL= ""
        }


/// Find the minimun of three three terms that support comparison
let inline min3(a, b, c) = min a (min b c)

let inline distanceCalc (m, u) (n, v) =
    let d1 = Array.init n id
    let d0 = Array.create n 0
    for i=1 to m-1 do
        d0.[0] <- i
        let ui = u i
        for j=1 to n-1 do
            d0.[j] <- 1 + min3(d1.[j], d0.[j-1], d1.[j-1] + if ui = v j then -1 else 0)
        Array.blit d0 0 d1 0 n
    d0.[n-1]

let editDistance (s: string) (t: string) =
    distanceCalc (s.Length, fun i -> s.[i]) (t.Length, fun i -> t.[i])

//====================================
//  Autocomplete Tooltip Generators
//====================================


/// Filters a colection of possible completions based on whether prefix is a substring
/// of the keyword mapped to a particular unicode glyph. Reorders the results based on
//  the edit distance from the prefix
/// Returns the results in a tooltip that shows the keyword and rendered Unicode Glyph
let glyph_completion (prefix:string) (data:Completion []) =
    let upperPrefix = prefix.ToUpper()
    data |> Array.filter(fun t -> t.Name.ToUpper().Contains(upperPrefix))
    |> Array.sortBy( fun t -> editDistance prefix t.Name)
    |> Array.map( fun t ->
        { Suggestion.Default with
            text = t.Glyph
            displayText = t.Name
            replacementPrefix = "\\"+prefix
            rightLabel = t.Glyph
            ``type``   = t.GlyphChar
        } :> obj
    )

/// Filters a colection of possible completions based on whether prefix is a substring
/// of the completion and reorders the results based on the edit distance from the prefix
/// Returns the results in a tooltip format appropriate for F# language constructs
let fsharp_completion (prefix:string) (data:Completion []) =
    let upperPrefix = prefix.ToUpper()
    data |> Array.filter(fun t -> t.Name.ToUpper().Contains(upperPrefix))
    |> Array.sortBy( fun t -> editDistance prefix t.Name)
    |> Array.map( fun t ->
        { Suggestion.Default with
            text = t.ReplacementText
            displayText = t.Name
            replacementPrefix = prefix
            rightLabel = t.Glyph
            ``type`` = t.GlyphChar
        } :> obj
    )


//=========================
//  SELECTOR STRINGS
//=========================

/// .suggestion-list-scroller .list-group li
let list_item = ".suggestion-list-scroller .list-group li"
/// .suggestion-list-scroller .list-group li.selected
let list_item_selected = ".suggestion-list-scroller .list-group li.selected"
/// span.word-container .word
let span_word = " span.word-container .word"
/// li.selected
let li_selected = "li.selected"


//=========================
//  NAME STRINGS
//=========================

/// atom-text-editor
let atom_text_editor = "atom-text-editor"
/// autocomplete-suggestion-list
let autocomplete_suggestion_list = "autocomplete-suggestion-list"
/// autocomplete-plus
let autocomplete_plus = "autocomplete-plus"

//=========================
//  Autocomplete Dispatch
//=========================


/// select the word from the list to use during completion
let handler flag =
    let selected =
        if flag then (jq li_selected).prev().find(span_word)
        else (jq li_selected).next().find(span_word)
    let text =
        if selected.length > 0. then selected.text()
        elif flag then
            (jq list_item).last().find(span_word).text()
        else
            (jq list_item).first().find(span_word).text()
    LanguageService.helptext text
    () :> obj


/// Connect to the autocomplete-plus service and dispact commmands to it
let dispatch_completion_setup (helptext : JQuery) (emitter:IEmitter option ref) _ =
    let package = Globals.atom.packages.getLoadedPackage autocomplete_plus |> unbox<Package>
    let e = package.mainModule.autocompleteManager.suggestionList.emitter
    if (!emitter) = None then
        e.on("did-select-next", (fun _ -> handler false) |> unbox<Function>) |> ignore
        e.on("did-select-previous", (fun _ -> handler true) |> unbox<Function>) |> ignore
        e.on("did-cancel",(fun _ -> helptext.fadeOut() |> ignore) |> unbox<Function>) |> ignore
        emitter := Some e
    dispatchAutocompleteCommand ()



/// setup function designed to generate the `present_helptext` function
/// via partial application.  helptext, helptextlist and helptestSettext are
/// the configuration arguments
let present_helptextSetup   (helptext:JQuery )
                            (helptextList: DTO.OverloadSignature list ref)
                            (helptextSettext:int->unit)
                            (n : DTO.HelptextResult) =
    let li   = jq list_item_selected
    let o    = li.offset()
    let list = jq autocomplete_suggestion_list

    if JS.isDefined o && li.length > 0. then
        o.left <- o.left + list.width() + 10.
        o.top  <- o.top  - li.height() - 10.
        helptext.offset(o) |> ignore
        helptextList := (n.Data.Overloads |> Array.fold (fun acc n -> (n |> Array.toList) @ acc ) [])
        helptextSettext 0
        helptext.show() |> ignore
