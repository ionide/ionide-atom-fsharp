spawn = require('child_process').spawn
Q = require('q')
EventEmitter  = require('events').EventEmitter

module.exports =
class AutocompleteService
  instance = null
  location = atom.packages.packageDirPaths[0] + "\\autocomplete\\bin\\fsautocomplete.exe";


  constructor: ->
    if instance
      return instance
    else
      @event = new EventEmitter
      @index = 0
      @isOff = true
      @isOn = false
      @isNotOff = false

      @isNotError = true
      @isError = false

      @state = "off"
      @previousState = "off"
      instance = this

  changeState: (state) =>
    @previousState = @state
    @state = state

    @isOn = state == "on"
    @isOff = state == "off"
    @isNotOff = state != "off"

    @isError = state == "error"
    @isNotError = !@isError
    @isOffOrError = @isError || @isOff

  send: (msg) =>
    #console.log "SEND: " + msg
    @child.stdin.write msg

  ask: (msg, number, callback) =>
    #console.log "ASK: " + msg
    @child.stdin.write msg
    s = ""
    action = (data) =>
                s = s + data.toString()
                len = s.split(/\r\n|\r|\n/).length - 1
                if len == number
                  console.log "RECIVED: " + s
                  @child.stdout.removeListener "data", action
                  callback s
    @child.stdout.on "data", action

  start: () =>
      options = {cwd: atom.project.getPath()}

      @child = spawn location, [], options
      @changeState "on"
      @child.stdin.setEncoding = 'utf-8';
      #@child.stdout.on 'data', @out
      @child.stderr.on 'data', @err
      @child.on 'close', @close
      @child.on 'error', @err


  out: (data) =>
    s = data.toString()
    console.log "RECIVED: " + s
    atom.emit "FSharp.Atom.AutocompleteService:out", s

  err: (data) =>
    s = data.toString()
    console.log "ERROR: " + s
    @changeState "error"
    atom.emit "FSharp.Atom.AutocompleteService:err", s

  close: (data) =>
    atom.emit "FSharp.Atom.AutocompleteService:close", data
    @changeState "off"

  stop: () =>
    @changeState "off"
    @child?.kill "SIGKILL"
    @child = null

  toggle: () => if @child then @stop() else @start()
