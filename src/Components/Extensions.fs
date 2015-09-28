[<ReflectedDefinition; AutoOpen>]
module Atom.FSharp.Extensions

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp

type JQuery with
    static member html (jq:JQuery): string =
        jq.html()

type String with
    static member Replace (oldsub:string) (newsub:string) (str:string) =
        str.Replace(oldsub, newsub)
