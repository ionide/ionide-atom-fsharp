namespace Atom.FSharp

open System
open System.Text.RegularExpressions
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module Process =
    type Options = {cwd : string}


    ///Checks if current OS is windows
    let isWin () =
        Globals._process.platform.StartsWith "win"

    let fromPath name =
        if isWin () then
            name
        else
            let path = Globals.atom.config.get "ionide-fsharp.MonoPath" |> unbox<string>
            path + "/" + name

    ///Create new notification or append text to existing notification
    let notice (currentNotification: INotification option ref) isError text details =
        match !currentNotification with
        | Some n -> let view = Globals.atom.views.getView n
                    let t = ".content .detail .detail-content" |> jqC view
                    let line = "<div class='line'>" + details + "</div>"
                    t.append line |> ignore
                    ()
        | None -> let n = if isError then
                            Globals.atom.notifications.addError(text, { detail = details; dismissable = true } |> unbox<INotificationsOptions> )
                          else
                            Globals.atom.notifications.addInfo(text, { detail = details; dismissable = true } |> unbox<INotificationsOptions>)
                  currentNotification := Some n

    ///Handle process output for spawnWithNotifications
    let private handle currentNotification error input =
        let output = input.ToString()
        Globals.console.log output
        if error then
            notice currentNotification true "FAKE Error" output
        else
            notice currentNotification false "" output
        ()

    ///Handle process exit for spawnWithNotifications
    let private handleExit currentNotification (code:string) =
        !currentNotification |> Option.iter (fun n ->
            let view = Globals.atom.views.getView n |> jq'
            view.removeClass "info" |> ignore
            view.removeClass "icon-info" |> ignore
            if code = "0" && view.hasClass "error" |> not then
                view.addClass "success" |> ignore
                view.addClass "icon-check" |> ignore
            else
                view.addClass "error" |> ignore
                view.addClass "icon-flame" |> ignore
        )

    let private getCwd () =
        try
            let t = Globals.atom.project.getPaths().[0]
            if Globals.existsSync t then
                t
            else
                null
        with
        | _ -> null

    ///Spawn process
    let spawn location linuxCmd (cmd : string) =
        let cmd' = if cmd = "" then [||] else cmd.Split ' '
        let cwd = getCwd ()

        let options =
            try
                {cwd = cwd} |> unbox<AnonymousType598>
            with
            | _ -> {cwd = null} |> unbox<AnonymousType598>
        let procs = if isWin () then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        Globals.spawn (linuxCmd, prms, options)
        procs

    let exec location linuxCmd cmd =
        let options = {cwd = getCwd()} |> unbox<AnonymousType599>
        let procs = if isWin () then
                        execFile (location, cmd, options, fun _ _ _ -> Globals.console.log "aaa")
                    else
                        let prms = Array.concat [ [|location|]; cmd]
                        execFile (linuxCmd, prms, options, fun _ _ _ -> ())
        procs

    ///Simple process spawn - just location of executable file
    let spawnSimple location linuxCmd =
        if isWin () then
            Globals.spawn (location)
        else
            Globals.spawn (linuxCmd, [|location|])

    ///Spawn process - same way on Windows and non-Windows
    let spawnSame location (cmd : string) =
        let cmd' = if cmd = "" then [||] else cmd.Split ' '
        let options = {cwd = getCwd()} |> unbox<AnonymousType598>
        Globals.spawn(location, cmd', options)

    //Spawn process - add default notification handlers
    let spawnWithNotifications location linuxCmd (cmd : string) =
        let cmd' = if cmd = "" then [||] else cmd.Split ' '
        let options = {cwd = getCwd ()} |> unbox<AnonymousType598>
        let procs = if isWin () then
                        Globals.spawn(location, cmd', options)
                    else
                        let prms = Array.concat [ [|location|]; cmd']
                        Globals.spawn (linuxCmd, prms, options)

        let currentNotification = ref None
        procs.on ("exit",unbox<Function>(handleExit currentNotification)) |> ignore
        procs.stdout.on ("data", unbox<Function> (handle currentNotification false)) |> ignore
        procs.stderr.on ("data", unbox<Function> (handle currentNotification true)) |> ignore
        procs
