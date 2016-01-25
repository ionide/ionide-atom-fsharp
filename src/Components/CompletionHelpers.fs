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

