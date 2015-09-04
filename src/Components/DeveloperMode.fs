namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module DeveloperMode =

    let mutable editor : IEditor option = None
    let mutable log = ""
    let private subscriptions = ResizeArray()

    let activate () =
        let s = Events.on Events.Log (unbox<Function> (fun (name,data) ->
            let timeString = System.DateTime.Now.ToLongTimeString().Replace("\\",".").Replace("/", ".")
            let t = sprintf "[%s] %s: \n %s \n" timeString name data
            editor |> Option.iter (fun e -> e.getBuffer().append t |> ignore)
            log <- log + t))
        subscriptions.Add s

        let s2 = Globals.atom.commands.add("atom-workspace", "Debug:Show Log", (unbox<Function> (fun _ ->
                    Globals.atom.workspace._open("Debug log", {split = "right"})._done((fun (ed : IEditor) ->
                        editor <- Some ed
                        ed.onDidDestroy((fun _ -> editor <- None) |> unbox<Function>) |> ignore
                        ed.insertText log |> ignore
                        let view = Globals.atom.views.getView ed
                        setComponentEnabled(view, false)) |> unbox<Function>)
                    )))
        subscriptions.Add s2
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
