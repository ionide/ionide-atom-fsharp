namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.path

open Atom
open Atom.FSharp

[<ReflectedDefinition>]
module Parser =
    let private subscriptions = ResizeArray() 
    let mutable private h : Disposable option = None

    let private parseProjectForEditor (editor: IEditor) =
        if JS.isDefined editor && JS.isPropertyDefined editor "buffer" && unbox<obj>(editor.buffer) <> null && JS.isPropertyDefined editor.buffer "file" && unbox<obj>(editor.buffer.file) <> null && isFSharpEditor editor then
            let rec findFsProj dir =
                if Globals.lstatSync(dir).isDirectory() then
                    let files = Globals.readdirSync dir
                    let projfile = files |> Array.tryFind(fun s -> s.EndsWith(".fsproj"))
                    match projfile with
                    | None ->
                        let parent = if dir.LastIndexOf(Globals.sep) > 0 then dir.Substring(0, dir.LastIndexOf Globals.sep) else ""
                        if System.String.IsNullOrEmpty parent then None else findFsProj parent
                    | Some p -> dir + Globals.sep + p |> Some
                else None

            let p = editor.buffer.file.path
            if JS.isDefined p then
                p |> Globals.dirname
                  |> findFsProj
                  |> Option.iter LanguageService.project
            else Events.emit Events.Status "Waiting for F# file"

    let activate () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor |> parseProjectForEditor
        LanguageService.parseEditor editor

        Globals.atom.workspace.onDidChangeActivePaneItem ((fun ed ->
            ed |> parseProjectForEditor
            h |> Option.iter(fun h' -> h'.dispose ())

        ) |> unbox<Function>
        ) |> subscriptions.Add




    let deactivate () =
        Events.emit Events.Status "Off"
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
