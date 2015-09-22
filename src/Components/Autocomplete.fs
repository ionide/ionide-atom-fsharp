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
module AutocompleteProvider =
    [<JSEmitInline("atom.commands.dispatch(atom.views.getView(atom.workspace.getActiveTextEditor()),'autocomplete-plus:activate');")>]
    let dispatchAutocompleteCommand () : unit = failwith "JS"


    let mutable isForced = false
    let mutable lastResult : DTO.CompletionResult option = None
    let mutable emitter : IEmitter option = None
    let mutable lastRow = 0

    type GetSuggestionOptions = {
        editor          : AtomCore.IEditor
        bufferPosition  : TextBuffer.IPoint
        prefix          : string
        scopeDescriptor : string[] }

    type Provider = {
        selector             : string;
        disableForSelector   : string
        inclusionPriority    : int
        excludeLowerPriority : bool
        getSuggestions       : GetSuggestionOptions -> Atom.Promise.Promise  }

    type SuggestionList = { emitter             : IEmitter }
    type Manager =        { suggestionList      : SuggestionList }
    type Module =         { autocompleteManager : Manager }
    type Package =        { mainModule          : Module }

    type Suggestion = {
        text              : string
        replacementPrefix : string
        rightLabel        : string
        ``type``          : string
    }

    /// Find the minimun of three three terms that support comparison
    let inline min3 one two three =
        if   one < two && one < three then one
        elif two < three then two
        else three


    /// The Edit Distance between two strings S and T is
    /// the minimum number of single character insertions, deletions,
    /// and substitutions needed to transform S to T.
    // Wagner Fischer Algorithm
    let editDistance (s: string) (t: string) =
        let m, n = s.Length, t.Length
        let index i j = j * m + i
        let d = Array.create ((m+1)*(n+1)) -1
        let rec dist m n =
            match m,n with
            | i, 0 -> i
            | 0, j -> j
            | i, j when d.[index i j] <> -1 -> d.[index i j]
            | i, j ->
                let dval =
                    if s.[i-1] = t.[j-1] then dist (i-1) (j-1)
                    else
                        min3
                            (dist (i-1) (j)   + 1) // a deletion
                            (dist (i)   (j-1) + 1) // an insertion
                            (dist (i-1) (j-1) + 1) // a substitution
                d.[index i j] <- dval; dval
        dist m n


    let getSuggestion (options:GetSuggestionOptions) =
        if unbox<obj>(options.editor.buffer.file) <> null then
            let path = options.editor.buffer.file.path
            let row = int options.bufferPosition.row + 1
            let col = int options.bufferPosition.column + 1
            let prefix = if options.prefix = "." || options.prefix = "=" then "" else options.prefix
            Atom.Promise.create(fun () ->
                if isForced || lastResult.IsNone || prefix = "" || lastRow <> row  then
                    Events.once Events.Errors (fun result ->
                        Events.once Events.Completion (fun result ->
                            lastRow <- row
                            lastResult <- Some result
                            isForced <- false
                            let r = result.Data
                                    |> Seq.where(fun t -> t.Name.ToLower().Contains(prefix.ToLower()))
                                    |> Seq.sortBy(fun t -> editDistance prefix t.Name)
                                    |> Seq.map(fun t -> { text = t.Name
                                                          replacementPrefix = prefix
                                                          rightLabel = t.Glyph
                                                          ``type`` = t.GlyphChar
                                                        } :> obj)
                                    |> Seq.toArray
                            if r.Length > 0 then LanguageService.helptext (r.[0] :?> Suggestion).text
                            r |> Atom.Promise.resolve)
                        LanguageService.completion path row col)
                    LanguageService.parseEditor options.editor
                else
                    isForced <- false
                    let r = lastResult.Value.Data
                            |> Seq.where(fun t ->  t.Name.ToLower().Contains(prefix.ToLower()))
                            |> Seq.sortBy(fun t -> editDistance prefix t.Name)
                            |> Seq.map(fun t -> { text = t.Name
                                                  replacementPrefix = prefix
                                                  rightLabel = t.Glyph
                                                  ``type`` = t.GlyphChar
                                                } :> obj)
                            |> Seq.toArray
                    if r.Length > 0 then LanguageService.helptext (r.[0] :?> Suggestion).text
                    r |> Atom.Promise.resolve)
        else Atom.Promise.create(fun () -> Atom.Promise.resolve [||])


    let private createHelptext () =
        "<div class='type-tooltip tooltip'>
            <div class='tooltip-inner'>TEST</div>
        </div>" |> jq

    let private helptext = createHelptext ()
    let mutable private helptextList : DTO.OverloadSignature list  = []
    let mutable private currentHelptext = 0

    let private helptextSetText (i : int) =
        currentHelptext <- i
        let el = jq' helptext.[0].firstElementChild
        let text = helptextList.[i].Signature
        el.empty() |> ignore
        (text |> jq("<div/>").text)
        |> fun n -> n.html()
        |> fun n -> n.Replace("\\n", "</br>")
        |> fun n -> n.Replace("\n" , "</br>")
        |> fun n -> if helptextList.Length > 1 then
                        (sprintf "<div class='tooltip-counter'>%d of %d</div>" (i + 1) helptextList.Length) + n
                    else n
        |> el.append |> ignore

    let private previousHelptext _ =
        if helptextList.Length > 1 then
            if currentHelptext + 1 = 1 then
                helptextSetText (helptextList.Length - 1)
            else helptextSetText (currentHelptext - 1)

    let private nextHelptext _ =
        if helptextList.Length > 1 then
            if currentHelptext + 1 = helptextList.Length then
                helptextSetText 0
            else helptextSetText (currentHelptext + 1)

    let mutable private  subscription : Disposable option = None

    let private initialize (editor : IEditor) =
        if subscription.IsSome then subscription.Value.dispose ()
        if isFSharpEditor editor then
            subscription <- editor.onDidChangeCursorPosition ((fun _ -> helptext.fadeOut() |> ignore) |> unbox<Function> ) |> Some

    let create () =
        jq(".panes").append helptext |> ignore
        helptext.fadeOut () |> ignore
        Globals.atom.commands.add("atom-text-editor","fsharp:autocomplete", (fun _ ->
            let package = Globals.atom.packages.getLoadedPackage("autocomplete-plus") |> unbox<Package>
            let e = package.mainModule.autocompleteManager.suggestionList.emitter
            if emitter.IsNone then
                let handler flag =
                    let selected = if flag then (jq "li.selected").prev().find(" span.word-container .word")
                                   else (jq "li.selected").next().find(" span.word-container .word")

                    let text = if selected.length > 0. then
                                    selected.text()
                               else
                                    if flag then
                                        (jq ".suggestion-list-scroller .list-group li").last().find(" span.word-container .word").text()
                                    else
                                        (jq ".suggestion-list-scroller .list-group li").first().find(" span.word-container .word").text()
                    LanguageService.helptext text

                    () :> obj
                e.on("did-select-next", (fun _ -> handler false) |> unbox<Function>) |> ignore
                e.on("did-select-previous", (fun _ -> handler true) |> unbox<Function>) |> ignore
                e.on("did-cancel",(fun _ -> helptext.fadeOut() |> ignore) |> unbox<Function>) |> ignore
                emitter <- Some e
            dispatchAutocompleteCommand ()
            isForced <- true) |> unbox<Function>) |> ignore

        Events.on Events.Helptext ((fun (n : DTO.HelptextResult) ->
            let li = (jq ".suggestion-list-scroller .list-group li.selected")
            let o = li.offset()
            let list = jq "autocomplete-suggestion-list"


            if JS.isDefined o && li.length > 0. then
                o.left <- o.left + list.width() + 10.
                o.top <- o.top - li.height() - 10.
                helptext.offset(o) |> ignore
                helptextList <- n.Data.Overloads |> Array.fold (fun acc n -> (n |> Array.toList) @ acc ) []
                helptextSetText 0
                helptext.show() |> ignore
                ()
                ) |> unbox<Function>) |> ignore

        Globals.atom.commands.add("atom-text-editor","fsharp:helptext-next", nextHelptext |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-text-editor","fsharp:helptext-previous", previousHelptext |> unbox<Function>) |> ignore

        Globals.atom.workspace.getActiveTextEditor() |> initialize
        Globals.atom.workspace.onDidChangeActivePaneItem((fun ed -> initialize ed) |> unbox<Function>  ) |> ignore



        { selector = ".source.fsharp"; disableForSelector = ".source.fsharp .string, .source.fsharp .comment"; inclusionPriority = 1; excludeLowerPriority = true; getSuggestions = getSuggestion}
