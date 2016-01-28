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

    let private emitter = Emitter.create()

    type Event<'T> = 
      { Name : string }
      static member Create<'R>(name) : Event<'R> = { Name = name }

    let ServerStart = Event.Create<unit>("Fsharp_start")
    let ServerStop = Event.Create<unit>("Fsharp_stop")
    let ServerError = Event.Create<unit>("Fsharp_error")
    let Project = Event.Create<unit>("Fsharp_project")
    let Errors = Event.Create<DTO.ParseResult>("Fsharp_errors")
    let Completion = Event.Create<DTO.CompletionResult>("Fsharp_completion")
    let SymbolUse = Event.Create<DTO.SymbolUseResult>("Fsharp_symboluse")
    let Tooltips = Event.Create<DTO.TooltipResult>("FSharp_tooltips")
    let Toolbars = Event.Create<DTO.TooltipResult>("FSharp_toolbars")
    let FindDecl = Event.Create<DTO.FindDeclarationResult>("FSharp_finddecl")
    let Status = Event.Create<string>("Fsharp_status")
    let CompilerLocation = Event.Create<DTO.CompilerLocationResult>("Fsharp_compiler")
    let Helptext = Event.Create<DTO.HelptextResult>("Fsharp_helptext")
    let Log = Event.Create<string * string * obj[]>("Fsharp_log")
    let Lint = Event.Create<DTO.LintResult>("Fsharp_lint")

    let getName { Name = name } = name

    let log category msg = 
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug then emitter.emit("Fsharp_log", (category, msg, [||]))

    let logf category format (o:obj[]) = 
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug then emitter.emit("Fsharp_log", (category, format, o))

    let emitEmpty (t:Event<unit>) =
        let name = getName t
        emitter.emit(name, ())

    let emit (t:Event<'T>) (v:'T) =
        let name = getName t
        emitter.emit(name, v :> obj)

    let emitUnsafe (t:Event<'T>) (v:obj) =
        let name = getName t
        emitter.emit(name, v)

    let once (t:Event<'T>) (func:'T -> unit) =
        let name = getName t
        let s : Disposable option ref = ref None
        s := (emitter.on(name, unbox<Function>(fun o -> !s |> Option.iter(fun s' -> s'.dispose())
                                                        func o) ) |> Some)

    let add (t:Event<'T>) (func:'T -> unit) =
        let name = getName t
        emitter.on(name, unbox<Function> func) |> ignore

    let subscribe (t:Event<'T>) (func:'T -> unit) =
        let name = getName t
        emitter.on(name, unbox<Function> func)

    let guardedAwaitEvent t f = 
      Async.FromContinuations(fun (cont, _, _) -> 
        once t cont
        f () )