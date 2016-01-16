[<ReflectedDefinition; AutoOpen>]
module Atom.FSharp.Extensions

open System
open FunScript.TypeScript
open Atom.FSharp

type JQuery with
    static member html (jq:JQuery): string =
        jq.html()

type String with
    static member Contains (target:string) (text:string) = 
        text.IndexOf(target, StringComparison.OrdinalIgnoreCase) >= 0

    static member Replace (oldsub:string) (newsub:string) (str:string) =
        str.Replace(oldsub, newsub)

