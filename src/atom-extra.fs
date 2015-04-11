[<ReflectedDefinition>]
module Atom

open FunScript
open FunScript.TypeScript
    
    
[<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
let addCommand(name:string, cmdName:string, func:unit -> unit) = failwith "JS"

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

    [<JSEmitInline("({0}[{1}] != undefined)")>]
    let isPropertyDefined (o: obj) (key: string) : bool = failwith "JS"

    [<JSEmitInline("(global[{0}] != undefined)")>]
    let isGloballyDefined (key: string) : bool = failwith "never"

    [<JSEmitInline("({0} != undefined)")>]
    let isDefined (o: obj) : bool = failwith "never"
