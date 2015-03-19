AutocompleteHandler = require './autocomplete-handler'
AutocompleteProvider = require './autocomplete-provider'
{CompositeDisposable} = require 'atom'

module.exports = Autocomplete =
  subscriptions: null
  autocompleteHandler: null

  activate: (state) ->
    @autocompleteHandler = new AutocompleteHandler()
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.commands.add 'atom-workspace', 'FSharp.Atom.Autocomplete:toggle': => @toggle()

  deactivate: ->
    @subscriptions.dispose()
  provide: ->
    AutocompleteProvider

  serialize: ->

  toggle: ->
    console.log 'Autocomplete was toggled!'
    @autocompleteHandler.toggle()
