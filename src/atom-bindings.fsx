[<ReflectedDefinition>]
module Atom

#load "funscript-atom.fsx"


open FunScript
open FunScript.TypeScript
    

module Promise = 
    type Promise = class end

    [<JSEmitInline("new Promise(function(resolve){{0}()})")>]
    let create( cb : unit -> unit) : Promise = failwith "JS"

    [<JSEmitInline("resolve({0})")>]
    let resolve (o : obj) : unit = failwith "JS"

    [<JSEmitInline("{text: {0}, replacementPrefix: {1}}")>]
    let result (t : string) (prefix : string) : obj = failwith "JS"

module JS =
    [<JSEmitInline("({1}[{0}])")>]
    let getProperty<'T> (prop:string) (o:obj) : 'T = failwith "JS"
