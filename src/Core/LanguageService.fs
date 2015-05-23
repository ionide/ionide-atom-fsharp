namespace FSharp.Atom

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom

[<ReflectedDefinition>]
module LanguageService =
    let private encoding = "utf-8"

    type private State =
        | On
        | Off
        | Error

    type private T = { State : State; PreviousState : State; Child : ChildProcess option }

    let mutable private service = { State = State.Off; PreviousState = State.Off; Child = None }

    let isOn () = service.State = State.On
    let isOff () = service.State = State.Off
    let isNotOff () = service.State <> State.Off
    let isError () = service.State = State.Error
    let isNotError () = service.State <> State.Error
    let isOffOrError () = isError () || isOff ()

    let ask (msg' : string) =
        let msg = msg'.Replace("\uFEFF", "")
        service.Child |> Option.iter (fun c ->
            let action (data : obj) =
                let s = data.ToString()
                if s.Contains "\"Kind\":\"ERROR\"" then
                    Events.ServerError|> Events.emitEmpty
                elif s.Contains "\"Kind\":\"project\"" then
                    Events.Project |> Events.emitEmpty
                elif s.Contains "\"Kind\":\"errors\"" then
                    s |> Events.parseAndEmit<DTO.ParseResult> Events.Errors
                elif s.Contains "\"Kind\":\"completion\"" then
                    s |> Events.parseAndEmit<DTO.CompletionResult> Events.Completion
                elif s.Contains "\"Kind\":\"tooltip\"" then
                    s |> Events.parseAndEmit<DTO.TooltipResult> Events.Tooltips
                elif s.Contains "\"Kind\":\"finddecl\"" then
                    s |> Events.parseAndEmit<DTO.TooltipResult> Events.FindDecl

            c.stdin.write( msg, encoding)
            c.stdout.on ("data", unbox<Function> (action)) |> ignore)

    let send (msg' : string) =
        let msg = msg'.Replace("\uFEFF", "")
        do service.Child |> Option.iter (fun c -> c.stdin.write( msg, encoding) |> ignore)

    let start () =
        let location = Globals.atom.packages.packageDirPaths.[0] + "/FSharp/bin/fsautocomplete.exe"
        let child = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location)
                    else
                        Globals.spawn("mono", [| location |])
        child.stdin.setEncoding( encoding);
        service <- { service with State = State.On; PreviousState = service.State; Child = Some child }
        Events.ServerStart |> Events.emitEmpty
        send "outputmode json\n"
        ()

    let stop () =
        service.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- { service with State = State.Off; PreviousState = service.State; Child = None }
        Events.ServerStop |> Events.emitEmpty
        ()

    let project s =
        let str = sprintf "project \"%s\"\n" s
        ask str

    let parse path text =
        let str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
        ask str

    let parseEditor (editor : IEditor) =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" && unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            let text = editor.getText()
            parse path text

    let completion fn line col =
        let str = sprintf "completion \"%s\" %d %d\n" fn line col
        ask str

    let tooltip fn line col =
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        ask str

    let findDeclaration fn line col =
        let str = sprintf "finddecl \"%s\" %d %d\n" fn line col
        ask str
