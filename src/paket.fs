[<ReflectedDefinition>]
module Paket

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore

open Atom

module PaketService =
    type Options = {cwd : string}

    let location = Globals.atom.packages.packageDirPaths.[0] + "/paket/bin/paket.exe"
    let bootstrapperLocation = Globals.atom.packages.packageDirPaths.[0] + "/paket/bin/paket.bootstrapper.exe"

    let notice (kind : string, text : string) =
        let overlay = Globals.document.createElement("div")
        overlay.setAttribute("class","overlay paket from-top from-right")
        overlay.innerText <- text
        Globals.atom.workspaceView.appendToBottom(overlay) |> ignore
        Globals.setTimeout(System.Func<_,_>(fun _ -> overlay.classList.add("fade-out")),4000.0) |> ignore
        Globals.setTimeout(System.Func<_,_>(fun _ -> overlay.parentElement.removeChild(overlay) |> ignore),4500.0) |> ignore

    let handle (error : Error) (stdout : Buffer) (stderr : Buffer) =
        let output = stdout.toString()
        let errorText = stderr.toString()
        notice("", output)
        Globals.atom.emit("FSharp:Output", output)
        Globals.console.log(output)
        if errorText <> "" then
            notice("error", "Error: " + errorText)

    let exec location cmd =
        let cmd' = location + " " + cmd
        let options = {cwd = Globals.atom.project.getPath()}
        if Globals._process.platform.StartsWith("win") then
            Globals.exec(cmd', unbox<AnonymousType600>options,  System.Func<_,_,_,_>(handle)) |> ignore
        else
            Globals.exec("mono" + cmd', unbox<AnonymousType600>options,  System.Func<_,_,_,_>(handle)) |> ignore




    let UpdatePaket () = exec bootstrapperLocation ""

    let execPaket cmd = exec location cmd

    let Init () = "init" |> execPaket
    let Install () = "install" |> execPaket
    let Update () = "update" |> execPaket
    let Outdated () = "outdated" |> execPaket
    let Restore () = "restore" |> execPaket


type Paket() =


    member x.activate(state:obj) =
        PaketService.UpdatePaket()
        Atom.addCommand("atom-workspace", "Paket: Update Paket", PaketService.UpdatePaket)
        Atom.addCommand("atom-workspace", "Paket: Init", PaketService.Init)
        Atom.addCommand("atom-workspace", "Paket: Install", PaketService.Install)
        Atom.addCommand("atom-workspace", "Paket: Update", PaketService.Update)
        Atom.addCommand("atom-workspace", "Paket: Restore", PaketService.Restore)
        Atom.addCommand("atom-workspace", "Paket: Outdated", PaketService.Outdated)
        ()

    member x.deactivate() =
        ()
