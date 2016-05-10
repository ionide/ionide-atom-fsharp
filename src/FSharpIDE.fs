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
open Atom.FSharp.Control

[<AutoOpen>]
module FSharpCommands =

    let openSettings() =
        // sometimes this will crash if settings-view hasn't been opened already
        Globals.atom.workspace._open ("atom://config/packages/ionide-fsharp", ())


type FSharpIDE() =
    let subscriptions = ResizeArray()

    member __.provide () =
        [| AutocompleteProvider.create() |]

    member __.provideErrors () =
        ErrorLinterProvider.create ()

    member __.getSuggestion(options : CompletionHelpers.GetSuggestionOptions) =
        [| AutocompleteProvider.getSuggestion options|]

    member x.activate(state:obj) =

        let show = Globals.atom.config.get("ionide-fsharp.ShowQuickInfoPanel") |> unbox<bool>
        let highlight = Globals.atom.config.get("ionide-fsharp.ShowUseHighlights") |> unbox<bool>
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>

        if debug then Logger.activate ("F# IDE")
        LanguageService.start ()
        Parser.activate ()
        TooltipHandler.activate ()
        if show then ToolbarHandler.activate()
        FindDeclaration.activate ()
        if highlight then HighlightUse.activate ()
        FormatHandler.activate ()

        // Subscriptions to monitor whether F# IDE functionality should be activated
        Globals.atom.config.onDidChange("ionide-fsharp.ShowQuickInfoPanel", fun n -> 
          if n.newValue then ToolbarHandler.activate() 
          else ToolbarHandler.deactivate() ) |> subscriptions.Add

        Globals.atom.config.onDidChange("ionide-fsharp.ShowUseHighlights", fun n -> 
          if n.newValue then HighlightUse.activate() 
          else HighlightUse.deactivate() ) |> subscriptions.Add

        Globals.atom.config.onDidChange("ionide-fsharp.DeveloperMode", fun n -> 
          if n.newValue then Logger.activate("F# IDE") 
          else Logger.deactivate()  ) |> subscriptions.Add

        // Commands that will be accessible through the Atom command palette
        Globals.atom.commands.add("atom-workspace", "Ionide-FSharp:Settings",openSettings |> unbox<Function>) |> ignore

    member x.deactivate() =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        let show = Globals.atom.config.get("ionide-fsharp.ShowQuickInfoPanel") |> unbox<bool>

        Parser.deactivate ()
        TooltipHandler.deactivate ()
        if show then ToolbarHandler.deactivate()
        FindDeclaration.deactivate ()
        HighlightUse.deactivate ()
        LanguageService.stop ()
        Logger.deactivate ()
