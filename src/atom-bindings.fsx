[<ReflectedDefinition>]
module Atom

#load "funscript-atom.fsx"


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
    
[<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
let addCommand (name : string, cmdName : string, func : unit -> unit) = failwith "JS"

[<JSEmitInline("atom.on({0},{1})")>]
let on (name : string, func : 'a -> 'b) : unit = failwith "JS"

[<JSEmitInline("atom.emit({0},{1})")>]
let emit(name : string, data : obj) : unit = failwith "JS"

[<JSEmitInline("for (i = 0, len = {0}.length; i < len; i++) {var item = {0}[i]; {1}(item); }")>]
let iter(lst : 't [], action : 't -> unit ) : unit = failwith "JS"

module CompositeDisposable = 
    type CompositeDisposable = class end
        
    [<JSEmit("return new CompositeDisposable;")>]
    let create() : CompositeDisposable = failwith "JS"
        
    [<JSEmit("return {0}.add({1});")>]
    let subscribe (cd : CompositeDisposable, cmd : obj) : unit = failwith "JS"
        
    [<JSEmit("return {0}.dispose();")>]
    let dispose (cd : CompositeDisposable) : unit = failwith "JS"

module Editor =     
            
    type Editor = class end
    type Marker = class end
    type Range = class end

    type Item = class end

    [<JSEmit("return atom.workspace.getActiveTextEditor();")>]
    let getActiveTextEditor() : Editor = failwith "JS"
            
    [<JSEmit("return {0}.getText();")>]
    let getEditorText (ed : Editor) : string = failwith "JS"

    [<JSEmit("return {0}.getGrammar().name;")>]
    let getEditorGrammarName(ed : Editor) : string = failwith "JS"

    [<JSEmit("return {0}.buffer.file.path;")>]
    let getEditorPath (ed : Editor) : string = failwith "JS"
            
    [<JSEmit("return atom.packages.packageDirPaths[0];")>]
    let getCurrentPackagePath() : string = failwith "JS"
            
    [<JSEmit("return atom.project.getPath();")>]
    let getCurrentProjectPath() : string = failwith "JS"

    [<JSEmitInline("atom.workspace.onDidChangeActivePaneItem({0})")>]
    let onDidChangeActivePaneItem(cb : Editor -> unit ) : unit = failwith "JS"

    [<JSEmitInline("[[{0}.StartLine, {0}.StartColumn], [{0}.EndLine, {0}.EndColumn]];")>]
    let createRange (o : Item) : Range = failwith "JS"

    [<JSEmitInline("{0}.markBufferRange({1}, {invalidate: 'never' });")>]
    let createMarker(editor : Editor, range : Range) : Marker = failwith "JS"

    [<JSEmitInline("{0}.destroy();")>]
    let destroyMarker(mrk : Marker) : unit = failwith "JS"

    [<JSEmitInline("{0}.Severity")>]
    let getItemSeverity(o : Item) : string = failwith "JS"

    [<JSEmitInline("{0}.decorateMarker({1}, { type: 'highlight', \"class\": {2} });")>]
    let decorateMarker(editor : Editor, marker : Marker, cls : string) : unit = failwith "JS"

module Promise = 
    type Promise = class end

    [<JSEmitInline("new Promise(function(resolve){{0}()})")>]
    let create( cb : unit -> unit) : Promise = failwith "JS"

    [<JSEmitInline("resolve({0})")>]
    let resolve (o : obj) : unit = failwith "JS"

    [<JSEmitInline("{text: {0}, replacementPrefix: {1}}")>]
    let result (t : string) (prefix : string) : obj = failwith "JS"

module JS =
    [<JSEmitInline("({0}[{1}])")>]
    let getProperty<'T> (prop:string) (o:obj) : 'T = failwith "JS"
