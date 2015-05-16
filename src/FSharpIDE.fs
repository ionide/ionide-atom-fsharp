[<ReflectedDefinition>]
module FSharpIDE

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open FSharp.Atom  

type FSharpIDE() =
    let mutable panel : IPanel option = None
    let mutable statusbar : IStatusBar option = None
    let mutable notification : ITile option = None
    let subscriptions = ResizeArray()

    let addStatusNotification status = 
        notification |> Option.iter (fun n -> n.destroy())
        statusbar |> Option.iter(fun s -> 
            let el = sprintf "<span class='fsharp-status'>F# Status - %s</span>" status |> jq
            notification <- s.addLeftTile({item =el ; priority = 100}) |> Some

        )
    

    let projInit () =
        
        let p = Globals.atom.project.getPaths().[0]
        Globals.console.log p
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
            match projExist with
            | Some a ->
                let path = Globals.atom.project.getDirectories().[0].resolve()
                LanguageService.project path (fun _ -> LanguageService.parseCurrent (fun _ -> addStatusNotification "Ready" ))
            | None -> LanguageService.parseCurrent (fun _ -> addStatusNotification "Ready" )

        if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))

    let register panel =
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> LanguageService.parseEditor ed (fun _ -> ())) |> subscriptions.Add
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> ErrorPanel.handleEditorChange panel ed) |> subscriptions.Add
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> Globals.setTimeout((fun _ -> TooltipHandler.initialize ed), 500.) |> ignore) |> subscriptions.Add
        Globals.atom.on'("FSharp:Highlight", unbox<Function>(HighlighterHandler.handle)) |> subscriptions.Add
        Globals.atom.on'("FSharp:Highlight", unbox<Function>(ErrorPanel.handle)) |> subscriptions.Add
        Globals.atom.project.onDidChangePaths(fun _ -> projInit ()) |> subscriptions.Add

    

    let initialize panel =
        projInit()
        Globals.atom.workspace.getActiveTextEditor() |> ErrorPanel.handleEditorChange panel 
        Globals.atom.workspace.getActiveTextEditor() |> TooltipHandler.initialize
        FAKE.register ()

    member x.provide ()=
        AutocompleteProvider.create () 

    member x.consumeStatusBar (sb : IStatusBar) = 
        statusbar <- Some sb
        addStatusNotification "Loading"

        ()

    member x.getSuggestion(options : AutocompleteProvider.GetSuggestionOptions) =
        AutocompleteProvider.getSuggestion options

    member x.activate(state:obj) =
        do LanguageService.start (fun _ -> ())
        do LanguageService.send "outputmode json\n"

        let p =
            let t = ErrorPanel.create ()
            Globals.atom.workspace.addBottomPanel (unbox<AnonymousType499>{PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = false})
        panel <- Some p

        Globals.setTimeout((fun _ -> p |> register), 500.) |> ignore
        Globals.setTimeout((fun _ -> p |> initialize), 500.) |> ignore
        Globals.setTimeout((fun _ -> addCommand'("atom-text-editor", "symbols-view:go-to-declaration", FindDeclaration.handle )), 500.) |> ignore
        ()

    member x.deactivate() =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        LanguageService.stop (fun _ -> addStatusNotification "Off")
        panel |> Option.iter( fun p -> p.destroy())
        ()
