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

    let start cb =
        let location = Globals.atom.packages.packageDirPaths.[0] + "/FSharp/bin/fsautocomplete.exe"
        let child = if Globals._process.platform.StartsWith("win") then
                        Globals.spawn(location)
                    else
                        Globals.spawn("mono", [| location |])
        child.stdin.setEncoding( encoding);
        service <- { service with State = State.On; PreviousState = service.State; Child = Some child }
        do cb ()


    let stop cb =
        service.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- { service with State = State.Off; PreviousState = service.State; Child = None }
        do cb ()



    let ask (msg' : string) no cb =
        let msg = msg'.Replace("\uFEFF", "")
        //Globals.console.log ("ASKED: " + msg)
        service.Child |> Option.iter (fun c ->
                        let s = ref ""
                        let action (data : obj) =
                            let t = !s
                            s := t + data.ToString()
                            let a = !s
                            let len = a.Split('\n').Length - 1
                            if len = no || a.Contains "\"Kind\":\"ERROR\"" then
                                //Globals.console.log ("RECIVED: " + a)
                                c.stdout.removeAllListeners "data" |> ignore
                                cb a

                        c.stdin.write( msg, encoding)
                        c.stdout.on ("data", unbox<Function> (action)) |> ignore)

    let send (msg' : string) =
        let msg = msg'.Replace("\uFEFF", "")
        //Globals.console.log ("SEND: " + msg)
        do service.Child |> Option.iter (fun c -> c.stdin.write( msg, encoding) |> ignore)

    let project s cb =
        let str = sprintf "project \"%s\"\n" s
        ask str 1 cb


    let parse path text cb =
        let str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
        ask str 2 cb


    let parseEditor (editor : IEditor) cb =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" && unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            let text = editor.getText()
            let action (s : string) =
                let split = s.Split('\n')
                if split.Length > 1 then
                    try
                        let o = unbox<DTO.ParseResult>(Globals.JSON.parse split.[1])
                        if o.Kind = "errors" then Globals.atom.emit("FSharp:Highlight", o.Data)
                    with
                    | ex -> ()
                cb s

            parse path text action
        else
            cb "Error"



    let parseCurrent cb =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        parseEditor editor cb

    let completion fn line col cb =
        let str = sprintf "completion \"%s\" %d %d\n" fn line col
        ask str 2 cb

    let tooltip fn line col cb =
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        ask str 1 cb

    let findDeclaration fn line col cb =
        let str = sprintf "finddecl \"%s\" %d %d\n" fn line col
        ask str 1 cb
