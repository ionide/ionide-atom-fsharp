namespace Atom.FSharp


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.util

open Atom
open Atom.FSharp

module Util =
    [<JSEmitInline("util.format.apply(util, {0})")>]
    let format (args:obj[]) : string = failwith "!"
    [<JSEmitInline("console.log.apply(console, {0})")>]
    let log (args:obj[]) : unit = failwith "!"

[<ReflectedDefinition>]
module DeveloperMode =

    let mutable editor : IEditor option = None
    let mutable log = ""
    let private subscriptions = ResizeArray()
    let mutable logToConsole = true

    let activate () =
        let p = Globals.atom.project.getPaths().[0]
        let s = Logger.subscribe (fun (category : string, message, data : obj[]) ->

            if logToConsole then
                let msg = "[" + (category.ToUpper()) + "] " + message
                if data.Length = 0 then Globals.console.log(msg)
                else Util.log (Array.append [| box msg |] data)

            let timeString = System.DateTime.Now.ToLongTimeString().Replace("\\",".").Replace("/", ".")

            let msg = "[" + timeString + "] " + (category.ToUpper()) + "\n  " + (message.Replace("%O", "%s"))
            let logLine = (Util.format (Array.append [| box msg |] data)) + "\n"
            Globals.appendFile (p + "/.ionide.debug", logLine)

            editor |> Option.iter (fun e ->
              e.scrollToBufferPosition([| e.getLastBufferRow(); 0.0 |], null) |> ignore
              e.getBuffer().append logLine |> ignore)
            log <- log + logLine)

        subscriptions.Add s

        let s2 = Globals.atom.commands.add("atom-workspace", "Debug:Show Log", (unbox<Function> (fun _ ->
                    Globals.atom.workspace._open("Debug log", {split = "right"})._done((fun (ed : IEditor) ->
                        editor <- Some ed
                        ed.onDidDestroy((fun _ -> editor <- None) |> unbox<Function>) |> ignore
                        ed.insertText log |> ignore
                        let view = Globals.atom.views.getView ed
                        setComponentEnabled(view, false)) |> unbox<Function>)
                    )))
        subscriptions.Add s2
        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
