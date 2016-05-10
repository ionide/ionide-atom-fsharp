namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom.FSharp.Control

open Atom

module Util =
    [<JSEmitInline("util.format.apply(util, {0})")>]
    let format (args:obj[]) : string = failwith "!"
    [<JSEmitInline("console.log.apply(console, {0})")>]
    let log (args:obj[]) : unit = failwith "!"

[<ReflectedDefinition>]
module Logger =
    /// Are we currently activated?
    let mutable private active = false
    /// Full log used when debug window is opened
    let mutable private fullLog = ""
    /// Path of the .ionide.debug file (location of editted file)
    let mutable private logPath = None
    /// Editor window displaying debug output 
    let mutable private editor : IEditor option = None
    /// Event subscriptions for commands
    let mutable private subscriptions = ResizeArray()    
    
    let emitLog (category:string) message (data:obj[]) =      
        // Log event to Atom console
        let msg = "[" + (category.ToUpper()) + "] " + message
        if data.Length = 0 then Globals.console.log(msg)
        else Util.log (Array.append [| box msg |] data)

        // Build a decent log string using native JS features
        let timeString = System.DateTime.Now.ToLongTimeString().Replace("\\",".").Replace("/", ".")
        let msg = "[" + timeString + "] " + (category.ToUpper()) + "\n  " + (message.Replace("%O", "%s"))
        let logLine = (Util.format (Array.append [| box msg |] data)) + "\n"
        fullLog <- fullLog + logLine

        // Log event to .ionide.debug file & editor window (if displayed)
        logPath |> Option.iter (fun p -> Globals.appendFile(p + "/.ionide.debug", logLine))
        editor |> Option.iter (fun e ->
            e.scrollToBufferPosition([| e.getLastBufferRow(); 0.0 |], null) |> ignore
            e.getBuffer().append logLine |> ignore)
 
    let activate name =
        active <- true
        logPath <- Some (Globals.atom.project.getPaths().[0])
        Globals.atom.commands.subscribe("atom-workspace", "Debug:Show " + name + " Log", fun _ ->
            Globals.atom.workspace._open("Debug log", {split = "right"})._done((fun (ed:IEditor) ->
                editor <- Some ed
                ed.onDidDestroy((fun _ -> editor <- None) |> unbox<Function>) |> ignore
                ed.insertText fullLog |> ignore
                let view = Globals.atom.views.getView ed
                setComponentEnabled(view, false)) |> unbox<Function>) )
        |> subscriptions.Add 

    let deactivate () =
        active <- false
        logPath <- None
        editor <- None
        subscriptions |> Seq.iter (fun s -> s.dispose() |> ignore)
        subscriptions.Clear()

    let log category msg =
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug && active then emitLog category msg [||]

    let logf category format (o:obj[]) =
        let debug = Globals.atom.config.get("ionide-fsharp.DeveloperMode") |> unbox<bool>
        if debug && active then emitLog category format o
