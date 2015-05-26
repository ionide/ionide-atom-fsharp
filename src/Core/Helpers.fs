namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<AutoOpen>]
[<ReflectedDefinition>]
module ViewsHelpers =
    let jq(selector : string) = Globals.Dollar.Invoke selector
    let jq'(selector : Element) = Globals.Dollar.Invoke selector
    let (?) jq name = jq("#" + name)

    let getElementsByClass cls e =
        e
        |> fun n -> if JS.isDefined n then Some n else None
        |> Option.map( Atom.JS.getProperty<HTMLElement>("rootElement") )
        |> Option.map (fun n -> n.querySelectorAll(cls) )

    let pixelPositionFromMouseEvent (e : JQueryMouseEventObject) =
        getView
        >> getElementsByClass ".lines"
        >> Option.map( fun n -> n.[0] |> getBoundingClientRect)
        >> fun n' -> match n' with
                     | Some n -> { top = e.clientY - n.top; left =  e.clientX - n.left}
                     | None  -> {top = 0.; left = 0.}

    let screenPositionFromMouseEvent (e : JQueryMouseEventObject) (editor : IEditor) =
        editor.screenPositionForPixelPosition(pixelPositionFromMouseEvent e editor)

    let bufferPositionFromMouseEvent (e : JQueryMouseEventObject) (editor : IEditor) =
        pixelPositionFromMouseEvent e editor
        |> editor.screenPositionForPixelPosition
        |> editor.bufferPositionForScreenPosition

[<ReflectedDefinition>]
module DTO =

    type Error = {
        StartLine : int
        StartLineAlternate : int
        StartColumn : int
        StartColumnAlternate : int
        EndLine : int
        EndLineAlternate : int
        EndColumn : int
        EndColumnAlternate : int
        Message : string
        Severity : string
        Subcategory : string
        }

    type Declaration = {
        File : string
        Line : int
        Column : int
    }

    type Completion = {
        Name : string
        Glyph : string
        GlyphChar: string
    }

    type CompletionResult = {Kind : string; Data : Completion []}
    type TooltipResult = {Kind : string; Data : string}
    type ParseResult = {Kind : string; Data : Error []}
    type FindDeclarationResult = {Kind : string; Data: Declaration}
