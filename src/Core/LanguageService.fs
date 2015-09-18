namespace Atom.FSharp

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer

open Atom
open Atom.FSharp

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

    let mutable private last = Events.ServerError

    // flag to send tooltip response to the proper event stream
    let mutable private toolbarFlag = false

    let private parseResponse (data : obj) =
        if data <> null then
            let response = data.ToString().Split('\n')
            response |> Seq.iter(fun s ->
                if s.Contains "\"Kind\":\"error\"" then
                    s |> Events.emitEmpty Events.ServerError
                    last <- Events.ServerError
                elif s.Contains "\"Kind\":\"project\"" then
                    s |> Events.emitEmpty Events.Project
                    last <- Events.Project
                elif s.Contains "\"Kind\":\"errors\"" then
                    s |> Events.parseAndEmit<DTO.ParseResult> Events.Errors
                    last <- Events.Errors
                elif s.Contains "\"Kind\":\"completion\"" then
                    s |> Events.parseAndEmit<DTO.CompletionResult> Events.Completion
                    last <- Events.Completion
                elif s.Contains "\"Kind\":\"symboluse\"" then
                    s |> Events.parseAndEmit<DTO.SymbolUseResult> Events.SymbolUse
                    last <- Events.SymbolUse
                elif s.Contains "\"Kind\":\"helptext\"" then
                    s |> Events.parseAndEmit<DTO.HelptextResult> Events.Helptext
                    last <- Events.Helptext
                elif s.Contains "\"Kind\":\"tooltip\"" then
                    if toolbarFlag then
                        s |> Events.parseAndEmit<DTO.TooltipResult> Events.Toolbars
                        last <- Events.Toolbars
                    else
                        s |> Events.parseAndEmit<DTO.TooltipResult> Events.Tooltips
                        last <- Events.Tooltips
                elif s.Contains "\"Kind\":\"finddecl\"" then
                    s |> Events.parseAndEmit<DTO.TooltipResult> Events.FindDecl
                    last <- Events.FindDecl
                elif s.Contains "\"Kind\":\"compilerlocation\"" then
                    s |> Events.parseAndEmit<DTO.CompilerLocationResult> Events.CompilerLocation
                    last <- Events.CompilerLocation
                elif s.Contains "\"Kind\":\"info\"" then
                    ()
                elif s <> "" then
                    match last with
                    | Events.Errors -> s |> Events.parseAndEmit<DTO.ParseResult> Events.Errors
                    | Events.Completion -> s |> Events.parseAndEmit<DTO.CompletionResult> Events.Completion
                    | _ -> ()
            )

    let ask (msg' : string) =
        Events.log "REQUEST" msg'
        let msg = msg'.Replace("\uFEFF", "")
        service.Child |> Option.iter (fun c ->
            c.stdin.write( msg, encoding)
            )

    let send (msg' : string) =
        let msg = msg'.Replace("\uFEFF", "")
        Events.log "REQUEST" msg'
        do service.Child |> Option.iter (fun c -> c.stdin.write( msg, encoding) |> ignore)

    let rec read (stream : stream.Readable) s =
        match stream.read () with
        | null -> s
        | res -> res.ToString() + s |> read stream

    let start () =
        let location = Globals.atom.packages.packageDirPaths.[0] + "/ionide-fsharp/bin/fsautocomplete.exe"
        let child = Process.fromPath "mono" |> Process.spawnSimple location
        child.stdin.setEncoding( encoding);
        service <- { service with State = State.On; PreviousState = service.State; Child = Some child }
        "" |> Events.emitEmpty Events.ServerStart
        send "outputmode json\n"
        send "compilerlocation\n"
        child.stdout.on ("readable", unbox<Function> (child.stdout.read >> parseResponse )) |> ignore
        child.stderr.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore
        ()

    let stop () =
        service.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- { service with State = State.Off; PreviousState = service.State; Child = None }
        "" |> Events.emitEmpty Events.ServerStop

        ()

    let project s =
        let str = sprintf "project \"%s\"\n" s
        ask str

    let parse path text =
        let str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
        ask str

    let helptext s =
        let str = sprintf "helptext %s\n" s
        ask str

    let parseEditor (editor : IEditor) =
        if isFSharpEditor editor && unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            let text = editor.getText()
            parse path text

    let completion fn line col =
        let str = sprintf "completion \"%s\" %d %d filter\n" fn line col
        ask str

    let symbolUse fn line col =
        let str = sprintf "symboluse \"%s\" %d %d\n" fn line col
        ask str

    let tooltip fn line col =
        toolbarFlag <- false
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        ask str

    let toolbar fn line col =
        toolbarFlag <- true
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        ask str


    let findDeclaration fn line col =
        let str = sprintf "finddecl \"%s\" %d %d\n" fn line col
        ask str
