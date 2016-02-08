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
module ListView =
    type ItemDescription = {data : string}

    ///Helper function for registrating ListView modal panels
    let registerListView stopChangingCallback cancelledCallback confirmedCallback viewFunction removeFiler=
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
            { PanelOptions.item = unbox<JQuery> listView
              PanelOptions.priority = 100
              PanelOptions.visible = false }
            |> Globals.atom.workspace.addModalPanel

        do listView.``getFilterKey <-``(Func<_>(fun _ -> "name" :> obj))
        if removeFiler then listView.``getFilterQuery <-``(Func<_>(fun _ -> ""))
        do listView.``viewForItem <-``(unbox<Func<_,_>> viewFunction)
        do listView.``cancelled <-`` cancelledCallback
        do listView.``confirmed <-`` confirmedCallback

        listView,panel
