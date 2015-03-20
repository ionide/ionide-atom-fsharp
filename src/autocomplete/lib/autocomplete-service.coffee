spawn = require('child_process').spawn
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
    console.log "ASK: " + msg
    @child.stdin.write msg
    s = ""
    action = (data) =>
                s = s + data.toString()
                len = s.split(/\r\n|\r|\n/).length - 1
                if len == number or s.contains "\"Kind\":\"ERROR\""
                  console.log "RECIVED: " + s
                  @child.stdout.removeListener "data", action
                  callback s

    @child.stdout.on "data", action

  start: () =>
      options = {cwd: atom.project.getPath()}
      @child = spawn location, [], options
      @changeState "on"
      @child.stdin.setEncoding = 'utf-8';

  stop: () =>
    @changeState "off"
    @child?.kill "SIGKILL"
    @child = null

  toggle: () => if @child then @stop() else @start()
