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

  toggle: () ->
    service.toggle()
    if service.state == "on"
      service.send("outputmode json\n")
      @parseCurrent(=> return)
