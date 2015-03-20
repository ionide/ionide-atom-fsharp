AutocompleteService = require './autocomplete-service'
fs = require('fs')

module.exports =
class AutocompleteHandler
  instance = null
  service = null

  constructor:  ->
    if instance
      return instance
    else
      service = new AutocompleteService()
      @parsed = []

      atom.workspace.onDidChangeActivePaneItem (pane) => @parseEditor(pane, (=> return))


      instance = this

  project: (s, callback) ->
    str = "project \"" + s + "\"\n"
    service.ask str, 1, callback

  parse: (path, text, callback) ->
    str = "parse \"" + path + "\"\n" + text + "\n<<EOF>>\n"
    service.ask str, 2, callback


  parseFile: (path, callback) ->
    @parsed.push path
    text = fs.readFileSync(atom.project.getPath() + "\\" + path, "utf8")
    @parse path, text, callback

  parseEditor: (editor, callback) ->
    if (editor and editor.getGrammar().name == "F#")
      path = editor.buffer.file.path
      text = editor.getText()
      action = (s) =>
        split = s.split /\r\n|\r|\n/
        if(split.length > 1)
          try
            obj = JSON.parse split[1]
            if(obj.Kind == "errors")
              atom.emit "FSharp.Atom:Highlight", obj.Data
          catch error
            console.log(error)
        callback s

      @parse(path,text, action)
    else
      callback "ERROR"

  parseCurrent: (callback) ->
    editor = atom.workspace.getActiveTextEditor()
    @parseEditor(editor, callback)

  completion: (fn, line, col, callback) ->
    str = "completion \"" + fn + "\" " + line + " " + col + "\n"
    service.ask str, 2, callback

  completionP: (fn,line,col) =>
    return (callback) => @completion fn, line, col, callback

  tooltip: (fn, line, col, callback) ->
    str = "tooltip \"" + fn + "\" " + line + " " + col + "\n"
    service.ask str, 1, callback

  tooltipP: (fn, line, col) =>
    return (callback) => @tooltip fn, line, col, callback


  test: () ->
    service.send("outputmode json\n")
    pr = @projectP "Test\\Test1.fsproj"
    prs1 = @parseP "Test\\FileTwo.fs"
    prs2 = @parseP "Test\\Script.fsx"
    prs3 = @parseP "Test\\Program.fs"
    com1 = @completionP "Test\\Script.fsx", 6, 15
    com2 = @completionP "Test\\Program.fs", 8, 19
    com3 = @completionP "Test\\Program.fs", 4, 22
    com4 = @completionP "Test\\Program.fs", 6, 13
    com5 = @completionP "Test\\Program.fs", 10, 19
    tlt1 = @tooltipP "Test\\FileTwo.fs", 9, 6
    tlt2 = @tooltipP "Test\\Program.fs", 6, 15
    tlt3 = @tooltipP "Test\\Program.fs", 4, 8
    tlt4 = @tooltipP "Test\\Script.fsx", 4, 9
    end = (=> return)
    pr ( => prs1 (=> prs2 (=> prs3 (=> com1 (=> com2 (=> com3 (=> com4 (=> com5 (=> tlt1 (=> tlt2 (=> tlt3 (=> tlt4 (=> end)))))))))))))


  toggle: () ->
    service.toggle()
    if service.state == "on"
      service.send("outputmode json\n")
      @parseCurrent(=> return)
