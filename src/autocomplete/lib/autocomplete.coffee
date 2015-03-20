AutocompleteHandler = require './autocomplete-handler'
AutocompleteProvider = require './autocomplete-provider'
HighlighterHandler = require './highlighter-handler'
ErrorPaneView = require './error-pane-view'
{CompositeDisposable} = require 'atom'

module.exports = Autocomplete =
  subscriptions: null
  autocompleteHandler: null
  highlighterHandler: null
  errorPaneView: null

  activate: (state) ->
    @autocompleteHandler = new AutocompleteHandler
    @subscriptions = new CompositeDisposable
    @highlighterHandler = new HighlighterHandler
    @errorPaneView = new ErrorPaneView
    @subscriptions.add atom.commands.add 'atom-workspace', 'FSharp.Atom.Autocomplete:toggle': => @toggle()
    @subscriptions.add atom.commands.add 'atom-workspace', 'FSharp.Atom.ErrorPanel:toggle': => @errorPaneView.toggle()

  deactivate: ->
    @subscriptions.dispose()
  provide: ->
    AutocompleteProvider

  serialize: ->

  toggle: ->
    console.log 'Autocomplete was toggled!'
    @autocompleteHandler.toggle()
