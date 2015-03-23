[<ReflectedDefinition>]
module Atom

#load "funscript-atom.fsx"


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
    
[<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
let addCommand (name : string, cmdName : string, func : unit -> unit) = failwith "JS"

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

module Promise = 
    type Promise = class end

    [<JSEmitInline("new Promise(function(resolve){{0}()})")>]
    let create( cb : unit -> unit) : Promise = failwith "JS"

    [<JSEmitInline("resolve({0})")>]
    let resolve (o : obj) : unit = failwith "JS"

    [<JSEmitInline("{text: {0}, replacementPrefix: {1}}")>]
    let result (t : string) (prefix : string) : obj = failwith "JS"

    module Options = 
        type Options = class end
            
        [<JSEmitInline("{0}.editor.buffer.file.path")>]
        let getPath(o : Options) : string = failwith "JS"

        [<JSEmitInline("{0}.bufferPosition.column")>]
        let getColumn( o : Options) : int = failwith "JS"

        [<JSEmitInline("{0}.bufferPosition.row")>]
        let getRow (o: Options) : int = failwith "JS"
            
        [<JSEmitInline("{0}.prefix")>]
        let getPrefix (o : Options) : string = failwith "JS"