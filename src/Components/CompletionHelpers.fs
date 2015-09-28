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
let inline min3 one two three =
    if   one < two && one < three then one
    elif two < three then two
    else three


let editDistance (s: string) (t: string) : int =
    let m, n = s.Length, t.Length
    let index i j = j * m + i
    let d = Array.create ((m+1)*(n+1)) -1
    let rec dist m n =
        match m,n with
        | i, 0 -> i
        | 0, j -> j
        | i, j when d.[index i j] <> -1 -> d.[index i j]
        | i, j ->
            let dval =
                if s.[i-1] = t.[j-1] then dist (i-1) (j-1)
                else
                    min3
                        (dist (i-1) (j)   + 1) // a deletion
                        (dist (i)   (j-1) + 1) // an insertion
                        (dist (i-1) (j-1) + 1) // a substitution
            d.[index i j] <- dval; dval
    dist m n


//====================================
//  Autocomplete Tooltip Generators
//====================================


/// Filters a colection of possible completions based on whether prefix is a substring
/// of the keyword mapped to a particular unicode glyph. Reorders the results based on
//  the edit distance from the prefix
/// Returns the results in a tooltip that shows the keyword and rendered Unicode Glyph
let glyph_completion (prefix:string) (data:Completion []) =
    data |> Array.filter( fun t -> t.Name.ToLower().Contains(prefix.ToLower()))
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
    data |> Array.filter( fun t -> t.Name.ToLower().Contains(prefix.ToLower()))
    |> Array.sortBy( fun t -> editDistance prefix t.Name)
    |> Array.map( fun t ->
        { Suggestion.Default with
            text = t.Name
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
//  Help Text Management
//=========================

// help text is the tooltips that pop up to the side of the autocomplete window

let createHelptext () =
    "<div class='type-tooltip tooltip'>
        <div class='tooltip-inner'>TEST</div>
    </div>" |> jq


/// setup function designed to generate the `helptextSettext` function
/// via partial application.  helptext, currentHelptext, and helptextlist are
/// the configuration arguments
let helptextSettextSetup
                    (helptext : JQuery)
                    (currentHelptext : int ref)
                    (helptextList : DTO.OverloadSignature list)
                    (i : int): unit =
    currentHelptext := i
    let el = jq' helptext.[0].firstElementChild
    let text = helptextList.[i].Signature
    el.empty() |> ignore
    (text |> jq("<div/>").text)
    |> JQuery.html
    |> String.Replace "\\n" "</br>"
    |> String.Replace "\n"  "</br>"
    |> fun n -> if helptextList.Length > 1 then
                    (sprintf "<div class='tooltip-counter'>%d of %d</div>" (i + 1) helptextList.Length) + n
                else n
    |> el.append |> ignore


/// setup function designed to generate the `previousHelptext` function
/// via partial application.  helptext, currentHelptext, and helptextlist are
/// the configuration arguments
let previousHelptextSetup (helptext : JQuery)
                          (currentHelptext : int ref)
                          (helptextList : DTO.OverloadSignature list)
                           _ : unit =
    let helptextSettext = // partially apply the args to config the setter
        helptextSettextSetup helptext currentHelptext helptextList
    if helptextList.Length > 1 then
        if !currentHelptext + 1 = 1 then
            helptextSettext (helptextList.Length - 1)
        else helptextSettext (!currentHelptext - 1)


/// setup function designed to generate the `nextHelptext` function
/// via partial application.  helptext, currentHelptext, and helptextlist are
/// the configuration arguments
let nextHelptextSetup (helptext : JQuery)
                      (currentHelptext : int ref)
                      (helptextList : DTO.OverloadSignature list)
                       _ : unit =
    let helptextSettext = // partially apply the args to config the setter
        helptextSettextSetup helptext currentHelptext helptextList
    if helptextList.Length > 1 then
        if !currentHelptext + 1 = helptextList.Length then
            helptextSettext 0
        else helptextSettext (!currentHelptext + 1)


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
