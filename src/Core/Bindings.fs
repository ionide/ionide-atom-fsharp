namespace Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.atom

module Promise =
    type Promise = class end

    [<JSEmitInline("new Promise(function(resolve){{0}()})")>]
    let create( cb : unit -> unit) : Promise = failwith "JS"

    [<JSEmitInline("resolve({0})")>]
    let resolve (o : obj[]) : unit = failwith "JS"

module JS =
    [<JSEmitInline("({1}[{0}])")>]
    let getProperty<'T> (prop:string) (o:obj) : 'T = failwith "JS"

    [<JSEmitInline("({0}[{1}] != undefined)")>]
    let isPropertyDefined (o: obj) (key: string) : bool = failwith "JS"

    [<JSEmitInline("(global[{0}] != undefined)")>]
    let isGloballyDefined (key: string) : bool = failwith "never"

    [<JSEmitInline("({0} != undefined)")>]
    let isDefined (o: obj) : bool = failwith "never"

module Emitter =
    [<FunScript.JSEmitInline("new Emitter()")>]
    let create () : IEmitter = failwith "JS"


[<AutoOpen>]
module HelperStructures =
    type StatusBarOptions = {
        item     : JQuery;
        priority : int
    }

    type ConfigChange<'T> = {
        oldValue : 'T
        newValue : 'T
    }

    type PanelOptions = {
        item     : JQuery
        visible  : bool
        priority : int
    }

    type Coordinates = {
        top  : float
        left : float
    }

    type Point = {
        row  : float
        column : float
    }

    type BufferChangeEvent = {
        newText : string
    }

    type AddTextEditorEvent = {
        textEditor : IEditor
        pane       : IPane
        index      : int
    }

    type NotificationsOptions = {
        detail: string
        dismissable : bool
    }

    type OpenOptions = {
        initialLine : int
        initialColumn : int
    }

    type OpenEditorOptions = {
        split : string
    }

    type SpawnOption = {
        cwd : string
    }

[<AutoOpen>]
module Bindings =

    type IAtom with

        [<FunScript.JSEmitInline("({0}.emitter)")>]
        member __.emitter with get() : IEmitter = failwith "JS"


    type TextBuffer.ITextBuffer with
        [<FunScript.JSEmitInline("({0}.onDidStopChanging({1}))")>]
        member __.onDidStopChanging(cb: unit -> unit) : Disposable = failwith "JS"

    [<JSEmitInline("{0}.decorateMarker({1}, {type: 'highlight', class: {2}})")>]
    let decorateMarker(ed : IEditor, marker : IDisplayBufferMarker, cls : string) : unit = failwith "JS"

    [<JSEmitInline("new atomSpaceView.SelectListView()")>]
    let SelectListViewCtor () : FunScript.TypeScript.atom.SelectListView = failwith "JS"

    [<JSEmitInline("atom.views.getView({0})")>]
    let getView(editor : IEditor) : Element = failwith "JS"

    [<JSEmitInline("{0}.getBoundingClientRect()")>]
    let getBoundingClientRect(o : obj) : Coordinates = failwith "JS"

    [<JSEmitInline("{0}.component.setInputEnabled({1})")>]
    let setComponentEnabled(e : Element, f : bool) = failwith "JS"

    [<FunScript.JSEmitInline("(child_process.execFile({0}, {1}, {2}, {3}))")>]
    let execFile(file : string, args : string[], options : child_process.AnonymousType599, cb: Error -> Buffer -> Buffer -> unit) : child_process.ChildProcess = failwith "JS"


    type stream.Writable with
        [<FunScript.JSEmitInline("({0}.setEncoding({1}))")>]
        member __.setEncoding(v : string) : unit = failwith "JS"

        [<FunScript.JSEmitInline("({0}.write({1}, {2}))")>]
        member __.write (v : string, encoding : string)  : unit = failwith "JS"
