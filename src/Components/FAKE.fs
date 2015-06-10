namespace Atom.FSharp

open System
open System.Text.RegularExpressions
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module FAKE =

    type Options = {cwd : string}
    type ItemDescription = {data : string}

    let mutable private currentNotification : Notification option = None
    let mutable private File : (string * string) option = None
    let mutable private taskListView : (atom.SelectListView * IPanel) option = None

    let private jq (selector : string) = Globals.Dollar.Invoke selector
    let private jq'(selector : Element) = Globals.Dollar.Invoke selector
    let private jqC (context: Element) (selector : string) = Globals.Dollar.Invoke (selector,context)

    let private notice isError text details =
        match currentNotification with
        | Some n -> let view = Globals.atom.views.getView (n)
                    let t = ".content .detail .detail-content" |> jqC view
                    let line = "<div class='line'>" + details + "</div>"
                    t.append(line) |> ignore
                    ()
        | None -> let n = if isError then
                            Globals.atom.notifications.addError(text, { detail = details; dismissable = true })
                          else
                            Globals.atom.notifications.addInfo(text, { detail = details; dismissable = true })
                  currentNotification <- Some n



    let private handle error input =
        let output = input.ToString()
        Globals.console.log(output)
        if error then
            notice true "Paket error" output
        else
            notice false "" output
        ()

    let private handleExit (code:string) =
        currentNotification |> Option.iter (fun n ->
            let view = Globals.atom.views.getView (n) |> jq'
            view.removeClass("info") |> ignore
            view.removeClass("icon-info") |> ignore
            if code = "0" && view.hasClass("error") |> not then
                view.addClass("success") |> ignore
                view.addClass("icon-check") |> ignore
            else
                view.addClass("error") |> ignore
                view.addClass("icon-flame") |> ignore
        )


    let private spawn location (cmd : string) =
        let cmd' = cmd.Split(' ');
        let options = {cwd = Globals.atom.project.getPaths().[0]} |> unbox<AnonymousType599>
        let procs = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        Globals.spawn("mono", prms, options)

        currentNotification <- None
        procs.on("exit",unbox<Function>(handleExit)) |> ignore
        procs.stdout.on("data", unbox<Function>(handle false )) |> ignore
        procs.stderr.on("data", unbox<Function>(handle true )) |> ignore
        ()

    let private exec location cmd handler =
        let options = {cwd = Globals.atom.project.getPaths().[0]} |> unbox<AnonymousType600>

        let child =
            if Globals._process.platform.StartsWith("win") then
                Globals.exec(location + " " + cmd, options, handler )
            else
                Globals.exec("mono " + location + " " + cmd, options, handler )
        ()


    let private handlerAddItems (lv : atom.SelectListView) (error : Error) (stdout : Buffer) (stderr : Buffer) =
        stdout.toString().Split('\n')
        |> Array.map(fun n -> {data = n} :> obj)
        |> lv.setItems
        |> ignore

    let private viewForItem desc =
        if JS.isDefined desc then
            sprintf "<li>%s</li>" desc.data |> jq
        else
            "<li></li>" |> jq

    let private regiterListView stopChangingCallback cancelledCallback confirmedCallback removeFiler=
        let listView = SelectListViewCtor ()
        let editorView =
            listView
            |> unbox<JQuery>
            |> fun t' -> t'.[0].firstChild
            |> unbox<FunScript.TypeScript.atom.EditorView>
            |> fun n -> n.getModel()

        editorView.getBuffer().stoppedChangingDelay <- 200.
        editorView.getBuffer().onDidStopChanging(stopChangingCallback editorView listView ) |> ignore

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

        listView,panel

    let private registerTaskList () =
        let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
        let cancelledCallback = Func<_>(fun _ -> taskListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
        let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ItemDescription) ->
                                    taskListView |> Option.iter (fun (model, view) -> view.hide())
                                    File |> Option.iter( fun (build, fake) ->
                                        spawn build packageDescription.data
                                    )
            )
        regiterListView stopChangingCallback cancelledCallback confirmedCallback false

    let private BuildTask () =
        taskListView |> Option.iter(fun (model, view) ->
        File |> Option.iter(fun (build, fake) ->
        view.show()
        model.focusFilterEditor() |> ignore
        let script = fake |> Globals.readFileSync
                          |> fun n -> n.toString()
        let matches = Regex.Matches(script, "Target \"([\\w.]+)\"") |> Seq.cast<Match> |> Seq.toArray
        let m = matches |> Array.map(fun m -> {data = m.Groups.[1].Value} :> obj)
        model.setItems m |> ignore
        ()


        ))

    let private FAKENotFound () =
        ()

    let activate () =
        taskListView <- registerTaskList () |> Some
        let p = Globals.atom.project.getPaths().[0]
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = "cmd")
            match projExist with
            | Some a ->
                let path = p + "/" + a
                let file = path |> Globals.readFileSync
                                |> fun n -> n.toString()
                let regex = Regex.Match(file, "FAKE.exe ([\w.]+)")
                if regex.Success then
                    let build = p + "/" + regex.Groups.[1].Value
                    File <- Some (path, build )
                    Atom.addCommand("atom-workspace", "FAKE: Build", BuildTask)
                else
                    Atom.addCommand("atom-workspace", "FAKE: Build", FAKENotFound)
                Globals.console.log File
            | None -> Atom.addCommand("atom-workspace", "FAKE: Build", FAKENotFound)

        if JS.isDefined p then Globals.readdir(p, System.Func<NodeJS.ErrnoException, string array, unit>(proj))

    let deactivate () =
        ()
