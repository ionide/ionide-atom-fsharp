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
    let service = LanguageService.create
                  |> LanguageService.start
                  |> LanguageService.send "outputmode json\n"

    let projInit () =
        let p = Globals.atom.project.getPaths().[0]
        Globals.console.log p
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
            match projExist with
            | Some a ->
                let path = Globals.atom.project.getDirectories().[0].resolve()
                service |> LanguageService.project path (fun _ -> service |> LanguageService.parseCurrent (fun _ -> ()) |> ignore)
                |> ignore
            | None -> service |> LanguageService.parseCurrent (fun _ -> ()) |> ignore

        if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))

    let register panel =

        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>( fun ed -> LanguageService.parseEditor ed (fun _ -> ()) service |> ignore))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(fun ed -> ErrorPanelView.handleEditorChange panel service ed))
        Globals.atom.workspace.onDidChangeActivePaneItem (unbox<Function>(fun ed -> Globals.setTimeout((fun _ -> TooltipHandler.initialize service ed), 500.)))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(HighlighterHandler.handle))
        Globals.atom.on("FSharp:Highlight", unbox<Function>(ErrorPanelView.handle))
        Globals.atom.project.onDidChangePaths(fun _ -> projInit ())

    

    let initialize panel =
        projInit()
        Globals.atom.workspace.getActiveTextEditor() |> ErrorPanelView.handleEditorChange panel service
        Globals.atom.workspace.getActiveTextEditor() |> TooltipHandler.initialize service
        ErrorPanelView.addButtonHandlers ()
        ErrorPanelView.addOutputHandle ()
        FAKE.register ()

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
        Globals.setTimeout((fun _ -> addCommand'("atom-text-editor", "symbols-view:go-to-declaration", FindDeclaration.handle service )), 500.) |> ignore
        
        
        ()

    member x.deactivate() =
        service |> LanguageService.stop |> ignore 
        ()
