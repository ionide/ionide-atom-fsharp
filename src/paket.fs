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

    let jq(selector : string) = Globals.Dollar.Invoke selector

    let notice (kind : string, text : string) =
        let div = jq("#paketnotice")
        if div.length = 0. then
            let overlay = Globals.document.createElement("div")
            overlay.setAttribute("class","overlay paket from-top")
            overlay.setAttribute("id","paketnotice")
            overlay.setAttribute("style","text-align: left")
            overlay.innerText <- text

            Globals.atom.workspaceView.appendToBottom(overlay) |> ignore
        else
            div.append("<br/>" + text) |> ignore


    let handle error input =
        let output = input.ToString()
        Globals.console.log(output)
        Globals.atom.emit("FSharp:Output", output)
        if error then
            notice("error", "Error: " + output)
        else
            notice("", output)
        ()

    let handleExit code =
        let div = jq("#paketnotice")
        if div.length <> 0. then            
            Globals.setTimeout(System.Func<_,_>(fun _ -> div.addClass("fade-out") |> ignore),4000.0) |> ignore
            Globals.setTimeout(System.Func<_,_>(fun _ -> div.remove() |> ignore),4500.0) |> ignore
        // TODO: Do something if the exit code indicates an error


    let exec location cmd =
        let options = {cwd = Globals.atom.project.getPath()} |> unbox<AnonymousType599>
        let procs = if Globals._process.platform.StartsWith("win") then
                          Globals.spawn(location, [|cmd|], options)
                    else
                          Globals.spawn("mono",  [|location; cmd |], options)

        procs.on("exit",unbox<Function>(handleExit)) |> ignore
        procs.stdout.on("data", unbox<Function>(handle false )) |> ignore
        procs.stderr.on("data", unbox<Function>(handle true )) |> ignore

        
        ()




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
