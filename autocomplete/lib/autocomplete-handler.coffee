AutocompleteService = require './autocomplete-service'
fs = require('fs')
Q = require('q')

module.exports =
class AutocompleteHandler
  instance = null
  service = null

  constructor:  ->
    if instance
      return instance
    else
      service = new AutocompleteService()

      instance = this

  project: (s, callback) ->
    str = "project \"" + s + "\"\n"
    service.ask str, 1, callback

  projectP: (s) =>
    return (callback) => @project s, callback

  parse: (path, callback) ->
    p = atom.project.getPath() + "\\" + path
    text = fs.readFileSync(p, "utf8")
    str = "parse \"" + path + "\" sync\n" + text + "\n<<EOF>>\n"
    service.ask str, 2, callback

  parseP: (path) =>
    return (callback) => @parse path, callback

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
      @test()
