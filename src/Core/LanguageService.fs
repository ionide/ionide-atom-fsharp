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
open DTO  

[<ReflectedDefinition>]
module LanguageService =
    let url s = sprintf @"http://localhost:8088/%s" s
    // flag to send tooltip response to the proper event stream
    let mutable private toolbarFlag = false

    let mutable private service : ChildProcess option =  None

    let request<'T> (url : string) (data: 'T)  = async {
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

    let private parseResponse (response : string[]) =
        response |> Seq.iter(fun s ->
            Events.log "RESPONSE" s
            if s.Contains "\"Kind\":\"error\"" then
                s |> Events.emitEmpty Events.ServerError
            elif s.Contains "\"Kind\":\"project\"" then
                s |> Events.emitEmpty Events.Project
            elif s.Contains "\"Kind\":\"errors\"" then
                s |> Events.parseAndEmit<DTO.ParseResult> Events.Errors
            elif s.Contains "\"Kind\":\"completion\"" then
                s |> Events.parseAndEmit<DTO.CompletionResult> Events.Completion
            elif s.Contains "\"Kind\":\"symboluse\"" then
                s |> Events.parseAndEmit<DTO.SymbolUseResult> Events.SymbolUse
            elif s.Contains "\"Kind\":\"helptext\"" then
                s |> Events.parseAndEmit<DTO.HelptextResult> Events.Helptext
            elif s.Contains "\"Kind\":\"tooltip\"" then
                if toolbarFlag then
                    s |> Events.parseAndEmit<DTO.TooltipResult> Events.Toolbars
                else
                    s |> Events.parseAndEmit<DTO.TooltipResult> Events.Tooltips
            elif s.Contains "\"Kind\":\"finddecl\"" then
                s |> Events.parseAndEmit<DTO.TooltipResult> Events.FindDecl
            elif s.Contains "\"Kind\":\"compilerlocation\"" then
                s |> Events.parseAndEmit<DTO.CompilerLocationResult> Events.CompilerLocation
            else
                ()
        )

    let send req =
        async {
            let! r = req
            r |> parseResponse
        } |> Async.StartImmediate

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

    let start () =
        let location = Globals.atom.packages.packageDirPaths.[0] + "/ionide-fsharp/bin/fsautocomplete.suave.exe"
        let child = Process.fromPath "mono" |> Process.spawnSimple location
        service <- Some child
        "" |> Events.emitEmpty Events.ServerStart
        compilerLocation ()
        child.stderr.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore
        ()

    let stop () =
        service |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- None
        "" |> Events.emitEmpty Events.ServerStop

        ()
