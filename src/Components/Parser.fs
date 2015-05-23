namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.path

open Atom

[<ReflectedDefinition>]
module Parser = 
    let private projects = ResizeArray<string>()
    let private subscriptions = ResizeArray()
    let mutable private h : IDisposable option = None

    let private parseProjectForEditor (editor: IEditor) =
        let parseProj p =
            let proj (ex : NodeJS.ErrnoException) (arr : string array) =
                let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj")
                match projExist with
                | Some a -> let path = p + "/" + a
                            if projects.Contains path |> not then
                                projects.Add path
                                LanguageService.project path
                | None -> Events.emit Events.Status "Ready (.fsproj not found)"
            if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))
            else Events.emit Events.Status "Ready (.fsproj not found)"

        if JS.isDefined editor && JS.isPropertyDefined editor "buffer" && unbox<obj>(editor.buffer) <> null && JS.isPropertyDefined editor.buffer "file" && unbox<obj>(editor.buffer.file) <> null then
            let p = editor.buffer.file.path
            if (p.Split('.') |> fun n -> n.[n.Length - 1]  = "fsproj") || ( JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#") then
                if JS.isDefined p then
                    p |> Globals.dirname
                      |> parseProj
                else Events.emit Events.Status "Waiting for F# file"
            else Events.emit Events.Status "Waiting for F# file"

    let activate () = 
        unbox<Function>(fun () -> Events.emit Events.Status "Ready"
                                  Globals.atom.workspace.getActiveTextEditor() |> LanguageService.parseEditor) 
        |> Events.on Events.Project
        |> subscriptions.Add

        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor |> parseProjectForEditor
        LanguageService.parseEditor editor
        if JS.isDefined editor && JS.isPropertyDefined editor "buffer" && unbox<obj>(editor.buffer) <> null && JS.isPropertyDefined editor.buffer "file" && unbox<obj>(editor.buffer.file) <> null then
            h <- ( editor.buffer.onDidStopChanging(fun _ -> LanguageService.parseEditor editor) |> Some  )

        Globals.atom.workspace.onDidChangeActivePaneItem (fun ed -> 
            ed |> LanguageService.parseEditor 
            ed |> parseProjectForEditor
            h |> Option.iter(fun h' -> h'.dispose ())
            if JS.isDefined ed && JS.isPropertyDefined ed "buffer" && unbox<obj>(ed.buffer) <> null && JS.isPropertyDefined ed.buffer "file" && unbox<obj>(ed.buffer.file) <> null then
                h <- ( ed.buffer.onDidStopChanging(fun _ -> LanguageService.parseEditor ed) |> Some  )
        
        ) |> subscriptions.Add



       
    let deactivate () = 
        Events.emit Events.Status "Off" 
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()

