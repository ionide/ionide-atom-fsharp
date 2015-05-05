[<ReflectedDefinition>]
module Paket

open System
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

    let handleExit (code:string) =
        let div = jq("#paketnotice")

        if code <> "0" then
            div.addClass("highlight-error") |> ignore

        if div.length <> 0. then
            Globals.setTimeout(Func<_,_>(fun _ -> div.addClass("fade-out") |> ignore),4000.0) |> ignore
            Globals.setTimeout(Func<_,_>(fun _ -> div.remove() |> ignore),4500.0) |> ignore

    let spawn location (cmd : string) =
        let cmd' = cmd.Split(' ');
        let options = {cwd = Globals.atom.project.getPath()} |> unbox<AnonymousType599>
        let procs = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        Globals.spawn("mono", prms, options)

        procs.on("exit",unbox<Function>(handleExit)) |> ignore
        procs.stdout.on("data", unbox<Function>(handle false )) |> ignore
        procs.stderr.on("data", unbox<Function>(handle true )) |> ignore
        ()

    let exec location cmd handler = 
        let options = {cwd = Globals.atom.project.getPath()} |> unbox<AnonymousType600>
        
        let child =
            if Globals._process.platform.StartsWith("win") then
                Globals.exec(location + " " + cmd, options, handler )
            else
                Globals.exec("mono " + location + " " + cmd, options, handler )
        ()

    let execPaket cmd handler = exec location cmd handler
    let spawnPaket cmd = spawn location cmd




    

    module PackageView =
        let mutable packagesListView : (atom.SelectListView * IPanel) option = None
      
        type PackageDescription = {
            name : string
        }

        let handlerAddItems (lv : atom.SelectListView) (error : Error) (stdout : Buffer) (stderr : Buffer) = 
            stdout.toString().Split('\n')
            |> Array.map(fun n -> {name = n} :> obj)
            |> lv.setItems
            |> ignore
            ()

        

        let viewForItem desc = 
            if JS.isDefined desc then
                sprintf "<li>%s</li>" desc.name |> jq
            else
             "<li></li>" |> jq

        let regiterPackagesListView () =
            let t = SelectListViewCtor ()
            let editorView = t |> unbox<JQuery>
                               |> fun t' -> t'.[0].firstChild 
                               |> unbox<FunScript.TypeScript.atom.EditorView> 
                               |> fun n -> n.getModel()

            editorView.getBuffer().stoppedChangingDelay <- 200.
            editorView.getBuffer().onDidStopChanging(fun _-> 
                let txt = editorView.getText()
                if txt <> "" then
                    let cmd = "find-packages searchtext " + txt + " -s"
                    execPaket cmd (Func<_,_,_,_>(handlerAddItems t)))


            let p =  Globals.atom.workspace.addModalPanel({PanelOptions.item = unbox<JQuery>(t); PanelOptions.priority = 100; PanelOptions.visible = false})
            
            do t.``getFilterQuery <-``(Func<_>(fun _ -> ""))
            do t.``viewForItem <-``(unbox<Func<_,_>>(viewForItem) )
            do t.``cancelled <-``(Func<_>(fun _ -> packagesListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj))
            do t.``confirmed <-``(unbox<Func<_,_>>(fun (a : PackageDescription) -> "add nuget " + a.name |> spawnPaket
                                                                                   packagesListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj) )
            do packagesListView <- Some (t,p)
            ()


    let UpdatePaket () = spawn bootstrapperLocation ""
    let Init () = "init" |> spawnPaket
    let Install () = "install" |> spawnPaket
    let Update () = "update" |> spawnPaket
    let Outdated () = "outdated" |> spawnPaket
    let Restore () = "restore" |> spawnPaket
    let Add () = PackageView.packagesListView |> Option.iter(fun (model, view) ->
        view.show()
        model.focusFilterEditor() |> ignore)


type Paket() =


    member x.activate(state:obj) =
        PaketService.PackageView.regiterPackagesListView()
        PaketService.UpdatePaket()
        Atom.addCommand("atom-workspace", "Paket: Update Paket", PaketService.UpdatePaket)
        Atom.addCommand("atom-workspace", "Paket: Init", PaketService.Init)
        Atom.addCommand("atom-workspace", "Paket: Install", PaketService.Install)
        Atom.addCommand("atom-workspace", "Paket: Update", PaketService.Update)
        Atom.addCommand("atom-workspace", "Paket: Restore", PaketService.Restore)
        Atom.addCommand("atom-workspace", "Paket: Outdated", PaketService.Outdated)
        Atom.addCommand("atom-workspace", "Paket: Add", PaketService.Add)
        ()

    member x.deactivate() =
        ()
