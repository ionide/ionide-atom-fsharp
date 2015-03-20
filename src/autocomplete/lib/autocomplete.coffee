AutocompleteHandler = require './autocomplete-handler'
AutocompleteProvider = require './autocomplete-provider'
HighlighterHandler = require './highlighter-handler'
{CompositeDisposable} = require 'atom'

module.exports = Autocomplete =
  subscriptions: null
  autocompleteHandler: null
  highlighterHandler: null

  activate: (state) ->
    @autocompleteHandler = new AutocompleteHandler
    @subscriptions = new CompositeDisposable
    @highlighterHandler = new HighlighterHandler
    @subscriptions.add atom.commands.add 'atom-workspace', 'FSharp.Atom.Autocomplete:toggle': => @toggle()

  deactivate: ->
    @subscriptions.dispose()
  provide: ->
    AutocompleteProvider

  serialize: ->

  toggle: ->
    console.log 'Autocomplete was toggled!'
    @autocompleteHandler.toggle()
