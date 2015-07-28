namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom



[<ReflectedDefinition>]
module AddFileHandler =

    let mutable dialogOpen = false

    let activate () =
        Globals.atom.emitter.on("advanced-new-file-created", (fun (n : string) -> Globals.console.log n) |> unbox<Function> )
        |> ignore
        ()
