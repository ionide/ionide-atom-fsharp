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
let min3 a b c = min a (min b c)

let editDistance (a:string) (b:string) =
    let a,b = if a.Length > b.Length then a,b else b,a
    let m = b.Length + 1
    let mutable lastLine = Array.init m id
    let mutable lastLastLine = Array.zeroCreate m
    let mutable actLine = Array.zeroCreate m
    for i in 1..a.Length do
        actLine.[0] <- i
        for j in 1..b.Length do
            let cost = if a.[i-1] = b.[j-1] then 0 else 1
            let deletion = lastLine.[j] + 1
            let insertion = actLine.[j-1] + 1
            let substitution = lastLine.[j-1] + cost
            actLine.[j] <- 
                let x = min3 deletion insertion substitution
                if i > 1 && j > 1 && a.[i-1] = b.[j-2] && a.[i-2] = b.[j-1] then
                    let transposition = lastLastLine.[j-2] + cost  
                    min x transposition
                else
                    x
        // swap lines
        let temp = lastLastLine
        lastLastLine <- lastLine
        lastLine <- actLine
        actLine <- temp
    lastLine.[b.Length]

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
        }
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
        }
    )

