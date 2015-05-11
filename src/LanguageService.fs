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

    type State =
        | On
        | Off
        | Error

    type T = { State : State; PreviousState : State; Child : ChildProcess option }

    let isOn t = t.State = State.On
    let isOff t = t.State = State.Off
    let isNotOff t = t.State <> State.Off
    let isError t = t.State = State.Error
    let isNotError t = t.State <> State.Error
    let isOffOrError t = isError t || isOff t

    let create = { State = State.Off; PreviousState = State.Off; Child = None }

    /// Starts the 'fsautocomplete.exe' process. If we are
    /// running on Windows, just start it. On Mac, use mono!
    let start t =
        let location =
            Globals.atom.packages.packageDirPaths.[0] + "/fsharp/bin/fsautocomplete.exe"
        let child =
            if Globals._process.platform.StartsWith("win") then
                Globals.spawn(location)
            else
                Globals.spawn("mono", [| location |])
        child.stdin.setEncoding( encoding);

        { t with State = State.On; PreviousState = t.State; Child = Some child }

    let stop t =
        t.Child |> Option.iter (fun n -> n.kill "SIGKILL")
        { t with State = State.Off; PreviousState = t.State; Child = None }

    let ask (msg' : string) no cb state =
        let msg = msg'.Replace("\uFEFF", "")
        Globals.console.log ("ASKED: " + msg)
        state.Child |> Option.iter (fun c ->
                        let s = ref ""
                        let action (data : obj) =
                            let t = !s
                            s := t + data.ToString()
                            let a = !s
                            let len = a.Split('\n').Length - 1
                            if len = no || a.Contains "\"Kind\":\"ERROR\"" then
                                Globals.console.log ("RECIVED: " + a)
                                c.stdout.removeAllListeners "data" |> ignore
                                cb a

                        c.stdin.write( msg, encoding)
                        c.stdout.on ("data", unbox<Function> (action)) |> ignore)
        state

    let send (msg' : string) t =
        let msg = msg'.Replace("\uFEFF", "")
        Globals.console.log ("SEND: " + msg)
        t.Child |> Option.iter (fun c -> c.stdin.write( msg, encoding) |> ignore)
        t

    let project s cb service =
        let str = sprintf "project \"%s\"\n" s
        service |> ask str 1 cb

    let parse path text cb service =
        //Wierd behaviour
        //let str = sprintf "parse \"%s\"\n%s\n<<EOF>>\n" path text
        let str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
        service |> ask str 2 cb

    let parseEditor (editor : IEditor) cb service =
        if JS.isDefined editor && JS.isPropertyDefined editor "getGrammar" && editor.getGrammar().name = "F#" then
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

            service |> parse path text action
        else
            cb "Error"
            service

    let parseCurrent cb service =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        parseEditor editor cb service

    let completion fn line col cb service =
        let str = sprintf "completion \"%s\" %d %d\n" fn line col
        service |> ask str 2 cb

    let tooltip fn line col cb service =
        let str = sprintf "tooltip \"%s\" %d %d\n" fn line col
        service |> ask str 1 cb

    let findDeclaration fn line col cb service =
        let str = sprintf "finddecl \"%s\" %d %d\n" fn line col
        service |> ask str 1 cb