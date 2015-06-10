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
module Interactive =
    let mutable private fsipath = ""
    let private subscriptions = ResizeArray()
    let mutable private editor : IEditor option = None
    let mutable private fsi : ChildProcess option = None

    let private handle (data : obj) =
        if data <> null then
            let response = data.ToString()
            editor |> Option.iter (fun ed ->
                ed.insertText response |> ignore
                )

    let private sendToFsi (msg' : string) =
        let msg = msg'.Replace("\uFEFF", "") + ";;\n"
        editor |> Option.iter (fun ed ->
            ed.insertText msg |> ignore
            )
        fsi |> Option.iter (fun c ->
            c.stdin.write(msg, "utf-8")
            )

    let private startFsi () =
        let p = Globals.atom.project.getPaths().[0]

        let fs = Globals.spawn( fsipath, [||], unbox<AnonymousType599> {cwd = p })
        fsi <- fs |> Some
        fs.stdout.on ("data", unbox<Function> (handle)) |> ignore

    let private openFsi () =
        let edit = Globals.atom.workspace.getActiveTextEditor()
        let g = edit.getGrammar()
        Globals.atom.workspace.openEditor("F# Interactive", {split = "right"}).created(fun ed ->
            editor <- Some ed
            ed.setGrammar g
            let view = Globals.atom.views.getView ed
            setComponentEnabled(view, false)
            if fsi.IsNone && fsipath <> "" then
                startFsi ()


            )

    let private handleLocation (n : DTO.CompilerLocationResult) =
        let name = if Globals._process.platform.StartsWith("win") then "fsi.exe" else "fsharpi"
        fsipath <- Globals.joinOverload2 (n.Data, name)
        ()

    let sendLine () =
        ()

    let sendSelection () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.getSelectedText () |> sendToFsi
        ()

    let sendFile () =
        ()

    let activate () =
        let s = unbox<Function>(handleLocation) |> Events.on Events.CompilerLocation
        Atom.addCommand("atom-workspace", "FSI:Open", openFsi)
        Atom.addCommand("atom-text-editor", "FSI:Send-Line", sendLine)
        Atom.addCommand("atom-text-editor", "FSI:Send-Selection", sendSelection)
        Atom.addCommand("atom-text-editor", "FSI:Send-File", sendFile)
        subscriptions.Add s
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
