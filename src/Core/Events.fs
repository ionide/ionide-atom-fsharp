namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module Logger =

    let private emitter = Emitter.create()

    let log category msg =
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug then emitter.emit("Fsharp_log", (category, msg, [||]))

    let logf category format (o:obj[]) =
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug then emitter.emit("Fsharp_log", (category, format, o))

    let subscribe (func:'T -> unit) =
        emitter.on("Fsharp_log", unbox<Function> func)
