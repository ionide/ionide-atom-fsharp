[<ReflectedDefinition>]
module FSharpIDE

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.path

open Atom
open Atom.FSharp

type FSharpIDE() =
    member x.provide ()=
        AutocompleteProvider.create ()

    member x.consumeStatusBar (sb : IStatusBar) =
        StatusBar.activate sb

    member x.getSuggestion(options : AutocompleteProvider.GetSuggestionOptions) =
        AutocompleteProvider.getSuggestion options

    member x.activate(state:obj) =
        do LanguageService.start ()

        Parser.activate ()
        TooltipHandler.activate ()
        HighlighterHandler.activate ()
        ErrorPanel.activate ()
        FindDeclaration.activate ()
        FAKE.activate ()
        ()

    member x.deactivate() =
        Parser.deactivate ()
        TooltipHandler.deactivate ()
        HighlighterHandler.deactivate ()
        ErrorPanel.deactivate ()
        FindDeclaration.deactivate ()
        FAKE.deactivate ()

        LanguageService.stop ()
        ()
