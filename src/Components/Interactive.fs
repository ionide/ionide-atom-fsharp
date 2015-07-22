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
    let mutable private fsiEditor : IEditor option = None
    let mutable private fsiProc   : ChildProcess option = None

    let private handle (data : obj) =
        if data <> null then
            let response = data.ToString().Replace("\\","/") 
            fsiEditor |> Option.iter (fun ed ->
                ed.insertText response |> ignore
                )


    /// Starts the Fsi Process with a listener on its standard out stream
    let private startFsi () =
        let fs = Process.spawnSame fsipath ""
        fsiProc <- fs |> Some
        fs.stdout.on ("data", unbox<Function> (handle)) |> ignore

    /// Kills the Fsi Process and reloads the REPL pane
    let private resetFsi() =
        if fsiProc.IsSome then fsiProc.Value.kill()
        if fsiEditor.IsSome then
            startFsi()
            fsiEditor.Value.buffer.reload() |> ignore


    /// Opens the REPL pane and starts an Fsi Process if needed
    let private openFsi () =
        let edit = Globals.atom.workspace.getActiveTextEditor()
        let g = Globals.atom.grammars.grammarForScopeName("source.fsharp")
        Globals.atom.workspace._open("F# Interactive", {split = "right"})._done((fun ed ->
            fsiEditor <- Some ed
            ed.setGrammar g
            let view = Globals.atom.views.getView ed
            setComponentEnabled(view, false)
            if fsipath <> "" then
                resetFsi ()
            ) |> unbox<Function>)

    /// Send a block of text to FSI
    // TODO - trying to get it to open the repl if it's not already open
    let private sendToFsi (msg' : string) =
        if fsiProc.IsNone then openFsi()
        let msg = msg'.Replace("\uFEFF", "") + ";;\n"
        fsiEditor |> Option.iter( fun ed ->
            ed.insertText msg |> ignore
            )
        fsiProc |> Option.iter( fun cproc ->
            cproc.stdin.write(msg, "utf-8")
            )


    /// Finds FSI on the system
    let private handleLocation (n : DTO.CompilerLocationResult) =
        fsipath <-  if Process.isWin() then
                        Globals.joinOverload2 (n.Data, "fsi.exe")
                    else
                        "fsharpi"
        resetFsi ()
        ()

    /// Send the current line at the cursor's position to FSI
    let private sendLine () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.lineTextForBufferRow(editor.getCursorBufferPosition().row).Trim()
        |> sendToFsi
        editor.moveDown(1.)
        editor.moveToBeginningOfLine()
        ()

    /// Send the currently selected text to FSI
    let private sendSelection () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.getSelectedText () |> sendToFsi
        editor.moveDown(1.)
        editor.moveToBeginningOfLine()
        ()


    /// Send all of the text of the active editor window to FSI
    let private sendFile () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.getText() |> sendToFsi
        ()


    let activate () =
        let s = unbox<Function>(handleLocation) |> Events.on Events.CompilerLocation
        Globals.atom.commands.add("atom-workspace", "FSI:Open", openFsi |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Line", sendLine |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Selection", sendSelection |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-File", sendFile |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Reset-REPL", resetFsi |> unbox<Function>)  |> ignore
        subscriptions.Add s
        Globals.atom.workspace.getTextEditors() |> Array.iter(fun e ->
            if e.getTitle() = "F# Interactive" then
                openFsi()
            )
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
