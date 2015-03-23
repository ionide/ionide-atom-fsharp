[<ReflectedDefinition>]
module AtomDemo
#load "funscript-atom.fsx"

// --------------------------------------------------------------------------------------
// Add some ad-hoc mappings for atom that we need in this demo
// (ideally, we should get these for free from atom.d.ts!)
// --------------------------------------------------------------------------------------

open FunScript
open FunScript.TypeScript

module CompositeDisposable =
  type CompositeDisposable = class end
  [<JSEmit("return new CompositeDisposable;")>]
  let create() : CompositeDisposable = failwith "JS"
  [<JSEmit("return {0}.add({1});")>]
  let subscribe(cd:CompositeDisposable, cmd:obj) : unit = failwith "JS"
  [<JSEmit("return {0}.dispose();")>]
  let dispose(cd:CompositeDisposable) : unit = failwith "JS"

module Atom =
  [<JSEmit("var cmd = {}; cmd[{1}]=function() { return {2}(); }; return atom.commands.add({0}, cmd);")>]
  let addCommand(name:string, cmdName:string, func:unit -> unit) = failwith "JS"

  type Editor = class end
  [<JSEmit("return atom.workspace.getActiveTextEditor();")>]
  let getActiveTextEditor() : Editor = failwith "JS"

  [<JSEmit("return {0}.getText();")>]
  let getEditorText(ed:Editor) : string = failwith "JS"

// --------------------------------------------------------------------------------------
// A package is a type with methods required by atom (activate, deactivate, etc.)
// The build script automatically wraps this in a module that atom understands
// (as a post-processig step). Aside from that, you should be able to define and use
// other modules and types as needed...
// --------------------------------------------------------------------------------------

type WordCount() =
  let mutable count = 0
  let cd = CompositeDisposable.create()

  let showAndIncrement(msg, by) =
    count <- count + by
    let text = Atom.getEditorText(Atom.getActiveTextEditor())
    let textLength = string text.Length
    Globals.window.alert("Command: " + msg + "\nCount: " + string count + "\nText length: " + textLength)

  member x.activate(state:obj) =
    CompositeDisposable.subscribe
      (cd, Atom.addCommand("atom-workspace", "funscript-wc:toggle", fun () ->
        showAndIncrement("toggle", 1)))

  member x.deactivate() =
    CompositeDisposable.dispose(cd)
