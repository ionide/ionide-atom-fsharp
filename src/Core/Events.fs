namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module Events =

    let emitter = Emitter.create()


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
        | CompilerLocation

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
        | CompilerLocation -> "Fsharp_compiler"

    let private log name o =
        Globals.console.log (name, System.DateTime.Now, o)

    let mutable last = ""

    let parseAndEmit<'T> t s =
        try
            let s' = last + s
            let name = getName t
            let o = unbox<'T>(Globals.JSON.parse s')
            log name o
            emitter.emit(name, o)
            last <- ""
        with
        | ex -> last <- last + s

    let emitEmpty t s =
        let name = getName t
        log name s
        emitter.emit(name, ())

    let emit t v =
        let name = getName t
        log name v
        emitter.emit(name, v :> obj)

    let once t func =
        let name = getName t
        let s : IDisposable option ref = ref None
        s := (emitter.on'(name, unbox<Function>(fun o -> !s |> Option.iter(fun s' -> s'.dispose())
                                                         func o) ) |> Some)

    let on t func =
        let name = getName t
        emitter.on'(name, func)
