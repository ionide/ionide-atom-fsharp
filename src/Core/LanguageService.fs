namespace Atom.FSharp

open System
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom
open Atom.FSharp
open Atom.FSharp.Control
open DTO

[<ReflectedDefinition>]
module LanguageService =

    let genPort () =
        let r = Globals.Math.random ()
        let r' = r * (8999. - 8100.) + 8100.
        r'.ToString().Substring(0,4)

    let port = genPort ()


    let url s = sprintf @"http://localhost:%s/%s" port s
    // flag to send tooltip response to the proper event stream
    let mutable private toolbarFlag = false

    let mutable private service : ChildProcess option =  None

    let request<'T> (url : string) (data: 'T)  = async {
        Events.logf "Service" "Sending request: %O" [| data |]
        let r = System.Net.WebRequest.Create url
        let req: FunScript.Core.Web.WebRequest = unbox r
        req.Headers.Add("Accept", "application/json")
        req.Headers.Add("Content-Type", "application/json")
        req.Method <- "POST"

        let str = Globals.JSON.stringify data
        let data = System.Text.Encoding.UTF8.GetBytes str
        let stream = req.GetRequestStream()
        stream.Write (data, 0, data.Length )
        let! res = req.AsyncGetResponse ()
        let stream =  res.GetResponseStream()
        let data = System.Text.Encoding.UTF8.GetString stream.Contents
        let d = Globals.JSON.parse data
        let res = unbox<string[]>(d)
        return res
    }

    let tryParse<'T> s =
        try unbox<'T>(Globals.JSON.parse s) |> Some
        with ex -> None

    type Request = { Kind : string }

    let private parseResponse (response : string[]) =
        response |> Seq.iter (fun s ->
          match tryParse s with
          | None -> Events.logf "Service" "Invalid response from FSAC: %s" [| s |]
          | Some event ->
          let o = box event
          Events.logf "Service" "Got '%s': %O" [| box event.Kind; o |]
          match event.Kind with
          | "error" -> Events.emitEmpty Events.ServerError
          | "project" -> Events.emitEmpty Events.Project
          | "errors" -> Events.emitUnsafe Events.Errors o
          | "completion" -> Events.emitUnsafe Events.Completion o
          | "symboluse" -> Events.emitUnsafe Events.SymbolUse o
          | "helptext" -> Events.emitUnsafe Events.Helptext o
          | "tooltip" when toolbarFlag -> Events.emitUnsafe Events.Toolbars o
          | "tooltip" -> Events.emitUnsafe Events.Tooltips o
          | "finddecl" -> Events.emitUnsafe Events.FindDecl o
          | "compilerlocation" -> Events.emitUnsafe Events.CompilerLocation o
          | "lint" -> Events.emitUnsafe Events.Lint o
          | s -> Events.logf "Service" "Received unexpected event '%s': %O" [| box s; o |])

    let send req =
        async {
            try
                let! r = req
                r |> parseResponse
            with e ->
                Events.logf "ERROR" "Parsing response failed: %O" [| e |] }
        |> Async.StartImmediate

    let project s =
        {ProjectRequest.FileName = s}
        |> request (url "project")
        |> send

    let parse path (text : string) =
        let lines = text.Replace("\uFEFF", "").Split('\n')
        {ParseRequest.FileName = path; ParseRequest.Lines = lines; ParseRequest.IsAsync = true }
        |> request (url "parse")
        |> send

    let helptext s =
        {HelptextRequest.Symbol = s}
        |> request (url "helptext")
        |> send

    let parseEditor (editor : IEditor) =
        if isFSharpEditor editor && unbox<obj>(editor.buffer.file) <> null then
            let path = editor.buffer.file.path
            let text = editor.getText()
            parse path text

    let completion fn line col =
        {PositionRequest.Line = line; FileName = fn; Column = col; Filter = ""}
        |> request (url "completion")
        |> send

    let symbolUse fn line col =
        {PositionRequest.Line = line; FileName = fn; Column = col; Filter = ""}
        |> request (url "symboluse")
        |> send

    let tooltip fn line col =
        toolbarFlag <- false
        {PositionRequest.Line = line; FileName = fn; Column = col; Filter = ""}
        |> request (url "tooltip")
        |> send

    let toolbar fn line col =
        toolbarFlag <- true
        {PositionRequest.Line = line; FileName = fn; Column = col; Filter = ""}
        |> request (url "tooltip")
        |> send


    let findDeclaration fn line col =
        {PositionRequest.Line = line; FileName = fn; Column = col; Filter = ""}
        |> request (url "finddeclaration")
        |> send

    let compilerLocation () =
        () |> request (url "compilerlocation") |> send

    let lint editor =
        if isFSharpEditor editor && unbox<obj>(editor.buffer.file) <> null then
            {LintRequest.FileName = editor.buffer.file.path }
            |> request (url "lint")
            |> send

    let start () =
        try
            let pth = if Process.isWin () then
                        @"\ionide-fsharp\bin\FsAutoComplete.Suave.exe"
                      else
                        @"/ionide-fsharp/bin/FsAutoComplete.Suave.exe"
            let location = Globals.atom.packages.packageDirPaths.[0] + pth
            let child = Process.spawn location (Process.fromPath "mono") port
            service <- Some child
            Events.emitEmpty Events.ServerStart
            compilerLocation ()
            child.stderr.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore
            ()
        with
        | exc ->
            Globals.console.error exc
            service <- None
            let opt = createEmpty<INotificationsOptions> ()
            opt.detail <- "Language services could not be spawned"
            opt.dismissable <- true
            Globals.atom.notifications.addError("Critical error", opt) |> ignore

    let stop () =
        service |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- None
        Events.emitEmpty Events.ServerStop