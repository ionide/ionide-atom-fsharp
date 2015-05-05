[<ReflectedDefinition>]
module Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.AtomCore
    
    
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

type ViewRegistry = interface end

[<AutoOpen>]
module Bindings = 
    

    type PanelOptions =
        { item: JQuery;
          visible : bool;
          priority : int}

    type Coordinates = {top : float; left : float}

    type BufferChangeEvent = {newText : string }


    type IWorkspace with
        
        [<FunScript.JSEmitInline("{0}.addModalPanel({1})")>]
        member __.addModalPanel(o: obj) : IPanel = failwith "JS"

    type IAtom with
        [<FunScript.JSEmitInline("({0}.views)")>]
        member __.views with get () : ViewRegistry = failwith "never"

    type ViewRegistry with 
        [<FunScript.JSEmitInline("({0}.getView({1}))")>]
        member __.getView(o : obj) : Element = failwith "never"

    type TextBuffer.ITextBuffer with
        [<FunScript.JSEmitInline("({0}.onDidStopChanging({1}))")>]
        member __.onDidStopChanging(cb: unit -> unit) : unit = failwith "JS"


    [<JSEmitInline("new atomSpaceView.SelectListView()")>]
    let SelectListViewCtor () : FunScript.TypeScript.atom.SelectListView = failwith "JS"

    [<JSEmitInline("atom.views.getView({0})")>]
    let getView(editor : IEditor) : Element = failwith "JS"

    [<JSEmitInline("{0}.getBoundingClientRect()")>]
    let getBoundingClientRect(o : obj) : Coordinates = failwith "JS"
    
        


