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

    let parseProjectForEditor (editor: IEditor) = 
        let parseProj p = 
            let proj (ex : NodeJS.ErrnoException) (arr : string array) =
                let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
                match projExist with
                | Some a -> let path = p + "/" + a
                            LanguageService.project path (fun _ -> addStatusNotification "Ready")
                | None -> addStatusNotification "Ready (.fsproj not found)"
            if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))
            else addStatusNotification "Ready (.fsproj not found)"

        if JS.isDefined editor && JS.isPropertyDefined editor "buffer" && unbox<obj>(editor.buffer) <> null && JS.isPropertyDefined editor.buffer "file" && unbox<obj>(editor.buffer.file) <> null then
            let p = editor.buffer.file.path
            if (p.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj") || ( JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#") then
                if JS.isDefined p then
                    p |> Globals.dirname
                      |> parseProj 

    let register panel =
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> LanguageService.parseEditor ed (fun _ -> ())) |> subscriptions.Add
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> ErrorPanel.handleEditorChange panel ed) |> subscriptions.Add
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> Globals.setTimeout((fun _ -> TooltipHandler.initialize ed), 500.) |> ignore) |> subscriptions.Add
        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> ed |> parseProjectForEditor) |> subscriptions.Add        
        Globals.atom.on'("FSharp:Highlight", unbox<Function>(HighlighterHandler.handle)) |> subscriptions.Add
        Globals.atom.on'("FSharp:Highlight", unbox<Function>(ErrorPanel.handle)) |> subscriptions.Add
    

    let initialize panel =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor |> parseProjectForEditor
        LanguageService.parseEditor editor (fun _ -> ())
        editor |> ErrorPanel.handleEditorChange panel 
        editor |> TooltipHandler.initialize
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
