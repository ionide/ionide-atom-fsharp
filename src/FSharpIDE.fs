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
    let service = AutocompleteService.create
                  |> AutocompleteService.start
                  |> AutocompleteService.send "outputmode json\n"

    let projInit () =
        let p = Globals.atom.project.getPaths().[0]
        Globals.console.log p
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
            match projExist with
            | Some a ->
                let path = Globals.atom.project.resolve a
                service |> AutocompleteHandler.project path (fun _ -> service |> AutocompleteHandler.parseCurrent (fun _ -> ()) |> ignore)
                |> ignore
            | None -> service |> AutocompleteHandler.parseCurrent (fun _ -> ()) |> ignore

        if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))

    let register panel =
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>( fun ed -> AutocompleteHandler.parseEditor ed (fun _ -> ()) service |> ignore))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(fun ed -> ErrorPanelView.handleEditorChange panel ed))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(fun ed -> Globals.setTimeout((fun _ -> TooltipHandler.initialize service ed), 500.)))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(HighlighterHandler.handle))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(ErrorPanelView.handle))
        Globals.atom.project.onDidChangePaths(fun _ -> projInit ())

    

    let initialize panel =
        projInit()
        Globals.atom.workspace.getActiveTextEditor() |> ErrorPanelView.handleEditorChange panel
        Globals.atom.workspace.getActiveTextEditor() |> TooltipHandler.initialize service
        ErrorPanelView.addButtonHandlers ()
        ErrorPanelView.addOutputHandle ()

    member x.provide ()=
        AutocompleteProvider.create service

    member x.getSuggestion(options : AutocompleteProvider.GetSuggestionOptions) =
        AutocompleteProvider.getSuggestion service options

    member x.activate(state:obj) =
        let panel =
            let t = ErrorPanelView.create ()
            Globals.atom.workspace.addBottomPanel (unbox<AnonymousType499>{PanelOptions.item = t; PanelOptions.priority = 100; PanelOptions.visible = false})

        Globals.setTimeout((fun _ -> panel |> register), 500.) |> ignore
        Globals.setTimeout((fun _ -> panel |> initialize), 500.) |> ignore
        ()

    member x.deactivate() =
        service |> AutocompleteService.stop |> ignore 
        ()
