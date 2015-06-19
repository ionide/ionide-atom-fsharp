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
    let mutable private File : (string * string) option = None
    let mutable private taskListView : (atom.SelectListView * IPanel) option = None

    let private viewForItem (desc : ListView.ItemDescription) =
        if JS.isDefined desc then
            sprintf "<li>%s</li>" desc.data |> jq
        else
            "<li></li>" |> jq

    let private registerTaskList () =
        let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
        let cancelledCallback = Func<_>(fun _ -> taskListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
        let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ListView.ItemDescription) ->
                                    taskListView |> Option.iter (fun (model, view) -> view.hide())
                                    File |> Option.iter( fun (build, fake) ->
                                        Process.spawnWithNotifications build "sh" packageDescription.data |> ignore
                                    )
            )
        ListView.regiterListView stopChangingCallback cancelledCallback confirmedCallback viewForItem false

    let private BuildTask () =
        taskListView |> Option.iter(fun (model, view) ->
        File |> Option.iter(fun (build, fake) ->
        view.show()
        model.focusFilterEditor() |> ignore
        let script = fake |> Globals.readFileSync
                          |> fun n -> n.toString()
        let matches = Regex.Matches(script, "Target \"([\\w.]+)\"") |> Seq.cast<Match> |> Seq.toArray
        let m = matches |> Array.map(fun m -> {ListView.data = m.Groups.[1].Value} :> obj)
        model.setItems m |> ignore
        ()
        ))

    let private FAKENotFound () =
        Process.notice (ref None) true "FAKE error" "FAKE script not found"

    let activate () =
        taskListView <- registerTaskList () |> Some
        let p = Globals.atom.project.getPaths().[0]
        let proj (ex : NodeJS.ErrnoException) (arr : string array) =
            let ext = if Process.isWin() then "cmd" else "sh"
            let projExist = arr |> Array.tryFind(fun a -> a.Split('.') |> fun n -> n.[n.Length - 1]  = ext)
            match projExist with
            | Some a ->
                let path = p + "/" + a
                let file = path |> Globals.readFileSync
                                |> fun n -> n.toString()
                let regex = Regex.Match(file, "FAKE.exe.* ([\w]+\.fsx)")
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
