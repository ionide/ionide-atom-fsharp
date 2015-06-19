namespace Atom.FSharp

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
    let jqC (context: Element) (selector : string) = Globals.Dollar.Invoke (selector,context)
    
    type cords = {
        mutable top : float
        mutable left : float
    }

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
        |> fun n -> let t = unbox<cords>(n) //TEMPORARY BUG FIX
                    t.top <- t.top + editor.displayBuffer.getScrollTop()
                    t.left <- t.left + editor.displayBuffer.getScrollLeft()
                    t
        |> editor.screenPositionForPixelPosition
        |> editor.bufferPositionForScreenPosition
