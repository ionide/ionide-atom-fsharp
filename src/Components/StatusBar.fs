namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module StatusBar = 
    let mutable private statusbar : IStatusBar option = None
    let mutable private notification : ITile option = None
    let private subscriptions = ResizeArray()
    
    let private addStatusNotification status =
        notification |> Option.iter (fun n -> n.destroy())
        statusbar |> Option.iter(fun s ->
            let el = sprintf "<span class='fsharp-status'>F# Status - %s</span>" status |> jq
            notification <- s.addLeftTile({item =el ; priority = 100}) |> Some

        )

    let activate (sb : IStatusBar) = 
        statusbar <- Some sb
        addStatusNotification "Loading"

        let t = unbox<Function> addStatusNotification |> Events.on Events.Status 
        subscriptions.Add t

        ()

    let deactivete () = 
        notification |> Option.iter (fun n -> n.destroy())
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear ()
        ()
        

