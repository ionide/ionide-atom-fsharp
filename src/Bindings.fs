[<ReflectedDefinition>]
module Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.AtomCore
    
    
[<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
let addCommand(name:string, cmdName:string, func:unit -> unit) = failwith "JS"

[<JSEmitInline("atom.commands.add({0}, {1}, {2});")>]
let addCommand'(name:string, context: string, func:unit -> unit) = failwith "JS"

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
type NotificationManager = interface end 
type Notification = interface end
type IDirectory = interface end

[<AutoOpen>]
module Bindings = 
    

    type PanelOptions =
        { item: JQuery;
          visible : bool;
          priority : int}

    type Coordinates = {top : float; left : float}

    type BufferChangeEvent = {newText : string}

    type NotificationsOptions = {
        detail: string
        dismissable : bool
        }

    type OpenOptions = {
        initialLine : int
        initialColumn : int
    }

    type IDirectory with
        [<FunScript.JSEmitInline("({0}.resolve())")>]
        member __.resolve() : string = failwith "never"

    type IProject with
        [<FunScript.JSEmitInline("({0}.getPaths())")>]
        member __.getPaths() : string [] = failwith "never"

        [<FunScript.JSEmitInline("({0}.getDirectories())")>]
        member __.getDirectories() : IDirectory [] = failwith "never"

        [<FunScript.JSEmitInline("({0}.onDidChangePaths({1}))")>]
        member __.onDidChangePaths(cb: string[] -> unit) : unit = failwith "JS"


    type IWorkspace with
        
        [<FunScript.JSEmitInline("{0}.addModalPanel({1})")>]
        member __.addModalPanel(o: obj) : IPanel = failwith "JS"
        [<FunScript.JSEmitInline("{0}.open({1}, {2})")>]
        member __.open'(fn : string, op : OpenOptions) : unit = failwith "JS"

    type IAtom with
        [<FunScript.JSEmitInline("({0}.views)")>]
        member __.views with get () : ViewRegistry = failwith "never"

        [<FunScript.JSEmitInline("({0}.notifications)")>]
        member __.notifications with get () : NotificationManager = failwith "never"

    type NotificationManager with 
        [<FunScript.JSEmitInline("{0}.addSuccess({1}, {2})")>]
        member __.addSuccess(message: string, options: NotificationsOptions) : Notification = failwith "JS"

        [<FunScript.JSEmitInline("{0}.addInfo({1}, {2})")>]
        member __.addInfo(message: string, options: NotificationsOptions) : Notification = failwith "JS"

        [<FunScript.JSEmitInline("{0}.addWarning({1}, {2})")>]
        member __.addWarning(message: string, options: NotificationsOptions) : Notification = failwith "JS"

        [<FunScript.JSEmitInline("{0}.addError({1}, {2})")>]
        member __.addError(message: string, options: NotificationsOptions) : Notification = failwith "JS"

        [<FunScript.JSEmitInline("{0}.addFatalError({1}, {2})")>]
        member __.addFatalError(message: string, options: NotificationsOptions) : Notification = failwith "JS"


    type ViewRegistry with 
        [<FunScript.JSEmitInline("({0}.getView({1}))")>]
        member __.getView(o : obj) : Element = failwith "never"

    type TextBuffer.ITextBuffer with
        [<FunScript.JSEmitInline("({0}.onDidStopChanging({1}))")>]
        member __.onDidStopChanging(cb: unit -> unit) : unit = failwith "JS"

    [<JSEmitInline("{0}.decorateMarker({1}, {type: 'highlight', class: {2}})")>]
    let decorateMarker(ed : IEditor, marker : IDisplayBufferMarker, cls : string) : unit = failwith "JS"


    [<JSEmitInline("new atomSpaceView.SelectListView()")>]
    let SelectListViewCtor () : FunScript.TypeScript.atom.SelectListView = failwith "JS"

    [<JSEmitInline("atom.views.getView({0})")>]
    let getView(editor : IEditor) : Element = failwith "JS"

    [<JSEmitInline("{0}.getBoundingClientRect()")>]
    let getBoundingClientRect(o : obj) : Coordinates = failwith "JS"


    type stream.Writable with
        [<FunScript.JSEmitInline("({0}.setEncoding({1}))")>]
        member __.setEncoding(v : string) : unit = failwith "JS"

        [<FunScript.JSEmitInline("({0}.write({1}, {2}))")>]
        member __.write (v : string, encoding : string)  : unit = failwith "JS"
    
        


