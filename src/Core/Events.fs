namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module Events =

    type EventType =
        | ServerStart
        | ServerStop
        | ServerError
        | Project
        | Errors
        | Completion
        | Tooltips
        | FindDecl
        | Status 

    let private getName t =
        match t with
        | ServerStart -> "Fsharp_start"
        | ServerStop -> "Fsharp_stop"
        | ServerError -> "Fsharp_error"
        | Errors -> "Fsharp_errors"
        | Completion -> "Fsharp_completion"
        | Tooltips -> "FSharp_tooltips"
        | FindDecl -> "FSharp_finddecl"
        | Project -> "Fsharp_project"
        | Status -> "Fsharp_status"

    let parseAndEmit<'T> t s =
        try
            let name = getName t
            let o = unbox<'T>(Globals.JSON.parse s)
            Globals.atom.emit(name, o)
        with
        | ex -> ()

    let emitEmpty t =
        let name = getName t
        Globals.atom.emit(name, ())

    let emit t v = 
        let name = getName t
        Globals.atom.emit(name, v :> obj)

    let once t func =
        let name = getName t
        let s : IDisposable option ref = ref None
        s := (Globals.atom.on'(name, unbox<Function>(fun o -> !s |> Option.iter(fun s' -> s'.dispose())
                                                              func o) ) |> Some)

    let on t func =
        let name = getName t
        Globals.atom.on'(name, func)