namespace Atom.FSharp

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
    let private subscriptions = ResizeArray()
    let mutable private h : Disposable option = None

    let private parseProjectForEditor (editor: IEditor) =
        if JS.isDefined editor && JS.isPropertyDefined editor "buffer" && unbox<obj>(editor.buffer) <> null && JS.isPropertyDefined editor.buffer "file" && unbox<obj>(editor.buffer.file) <> null then
            let p = editor.buffer.file.path
            let rec findFsProj dir =
                let files = Globals.readdirSync dir
                let projfile = files |> Array.tryFind(fun s -> s.EndsWith(".fsproj"))
                match projfile with
                | None ->
                    let parent = if dir.LastIndexOf(Globals.sep) > 0 then dir.Substring(0, dir.LastIndexOf Globals.sep) else ""
                    if System.String.IsNullOrEmpty parent then None else findFsProj parent
                | Some p -> dir + Globals.sep + p |> Some

            let findProjFile p =
                if JS.isDefined p then
                    p |> Globals.dirname
                      |> findFsProj
                      |> Option.iter LanguageService.project
                else Events.emit Events.Status "Waiting for F# file"
            findProjFile p

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

        Globals.atom.workspace.onDidChangeActivePaneItem ((fun ed ->
            ed |> LanguageService.parseEditor
            ed |> parseProjectForEditor
            h |> Option.iter(fun h' -> h'.dispose ())
            if JS.isDefined ed && JS.isPropertyDefined ed "buffer" && unbox<obj>(ed.buffer) <> null && JS.isPropertyDefined ed.buffer "file" && unbox<obj>(ed.buffer.file) <> null then
                h <- ( ed.buffer.onDidStopChanging(fun _ -> LanguageService.parseEditor ed) |> Some  )
        ) |> unbox<Function>
        ) |> subscriptions.Add




    let deactivate () =
        Events.emit Events.Status "Off"
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
