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

        if code = "0" then
            div.addClass("highlight-success") |> ignore
        else
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
        let mutable name = "";
        let mutable isVersioned = false 
        let mutable packagesListView : (atom.SelectListView * IPanel) option = None
        let mutable versionsListView : (atom.SelectListView * IPanel) option = None
      
        type ItemDescription = {
            data : string
        }

        let handlerAddItems (lv : atom.SelectListView) (error : Error) (stdout : Buffer) (stderr : Buffer) = 
            stdout.toString().Split('\n')
            |> Array.map(fun n -> {data = n} :> obj)
            |> lv.setItems
            |> ignore

        let viewForItem desc = 
            if JS.isDefined desc then
                sprintf "<li>%s</li>" desc.data |> jq
            else
                "<li></li>" |> jq
                 
        let regiterListView stopChangingCallback cancelledCallback confirmedCallback removeFiler=
            let listView = SelectListViewCtor ()
            let editorView = 
                listView
                |> unbox<JQuery>
                |> fun t' -> t'.[0].firstChild
                |> unbox<FunScript.TypeScript.atom.EditorView>
                |> fun n -> n.getModel()

            editorView.getBuffer().stoppedChangingDelay <- 200.
            editorView.getBuffer().onDidStopChanging(stopChangingCallback editorView listView )

            let panel = 
                { PanelOptions.item = unbox<JQuery> (listView)
                  PanelOptions.priority = 100
                  PanelOptions.visible = false }
                |> Globals.atom.workspace.addModalPanel 

            do listView.``getFilterKey <-``(Func<_>(fun _ -> "name" :> obj))
            if removeFiler then listView.``getFilterQuery <-``(Func<_>(fun _ -> ""))
            do listView.``viewForItem <-``(unbox<Func<_,_>>(viewForItem) )
            do listView.``cancelled <-``(cancelledCallback)
            do listView.``confirmed <-`` (confirmedCallback)

            Some (listView,panel)

        let regiterPackagesListView () = 
            let stopChangingCallback (ev : IEditor) lv = fun () -> 
                let txt = ev.getText()
                if txt.Length > 2 then
                    let cmd = "find-packages searchtext " + txt + " -s"
                    execPaket cmd (Func<_,_,_,_>(handlerAddItems lv))

            let cancelledCallback = Func<_>(fun _ -> packagesListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)

            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) -> 
                                        name <- packageDescription.data.Trim()
                                        packagesListView |> Option.iter (fun (model, view) -> view.hide())
                                        if isVersioned then
                                            versionsListView |> Option.iter ( fun (model, view) ->
                                                view.show()
                                                model.focusFilterEditor() |> ignore
                                                let cmd = "find-package-versions name " + name + " -s"
                                                execPaket cmd (Func<_,_,_,_>(handlerAddItems model))


                                            ) :> obj
                                        else
                                            "add nuget " + name|> spawnPaket :> obj)

            regiterListView stopChangingCallback cancelledCallback confirmedCallback true

        let registerVersionListView () = 
            let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
            let cancelledCallback = Func<_>(fun _ -> versionsListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
            let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) -> 
                                        versionsListView |> Option.iter (fun (model, view) -> view.hide())
                                        "add nuget " + name + " version " + packageDescription.data |> spawnPaket :> obj
                )
            regiterListView stopChangingCallback cancelledCallback confirmedCallback false



    let UpdatePaket () = spawn bootstrapperLocation ""
    let UpdatePaketSilent () = spawn bootstrapperLocation "-s"
    let Init () = "init" |> spawnPaket
    let Install () = "install" |> spawnPaket
    let Update () = "update" |> spawnPaket
    let Outdated () = "outdated" |> spawnPaket
    let Restore () = "restore" |> spawnPaket

    let Add () = 
        PackageView.isVersioned <- false
        PackageView.packagesListView |> Option.iter(fun (model, view) ->
        view.show()
        model.focusFilterEditor() |> ignore)

    let AddVersioned () = 
        PackageView.isVersioned <- true
        PackageView.packagesListView |> Option.iter(fun (model, view) ->
        view.show()
        model.focusFilterEditor() |> ignore)


type Paket() =


    member x.activate(state:obj) =
        PaketService.PackageView.packagesListView <- PaketService.PackageView.regiterPackagesListView ()
        PaketService.PackageView.versionsListView <- PaketService.PackageView.registerVersionListView ()
        PaketService.UpdatePaketSilent()
        Atom.addCommand("atom-workspace", "Paket: Update Paket", PaketService.UpdatePaket)
        Atom.addCommand("atom-workspace", "Paket: Init", PaketService.Init)
        Atom.addCommand("atom-workspace", "Paket: Install", PaketService.Install)
        Atom.addCommand("atom-workspace", "Paket: Update", PaketService.Update)
        Atom.addCommand("atom-workspace", "Paket: Restore", PaketService.Restore)
        Atom.addCommand("atom-workspace", "Paket: Outdated", PaketService.Outdated)
        Atom.addCommand("atom-workspace", "Paket: Add NuGet Package", PaketService.Add)
        Atom.addCommand("atom-workspace", "Paket: Add NuGet Package Version", PaketService.AddVersioned)
        ()

    member x.deactivate() =
        ()
