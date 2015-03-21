{View} = require 'atom'

module.exports =
class ErrorPaneView extends View

  @content: ->
    @div class: 'tool-panel panel-bottom error-pane', outlet: 'pane', =>
      @div class: "inset-panel", =>
        @div class: "panel-heading clearfix", "Errors"
        @table class: 'error-table', =>
          @thead =>
            @th 'Position'
            @th 'Message'
            @th 'Type'
            @th 'Category'
          @tbody outlet: 'errorList'

  initialize: =>
    atom.on "FSharp.Atom:Highlight", @handle
    atom.workspace.onDidChangeActivePaneItem (pane) => if (pane.getGrammar().name == "F#") then @show() else @hide()


  handle: (lst) =>
    @errorList.empty()
    for r in lst
      @errorList.append (new ErrorRowView(r))

  destroy: -> @detach()
  show: ->
    if (@hasParent() == false)
      editor = atom.workspace.getActiveTextEditor()
      if (editor and editor.getGrammar().name == "F#")
        atom.workspaceView.prependToBottom(this)

  hide: -> @detach()

class ErrorRowView extends View
  @content: (r) ->
    @tr =>
      @td "#{r.StartLineAlternate} : #{r.StartColumn}"
      @td "#{r.Message}"
      @td "#{r.Severity}"
      @td "#{r.Subcategory}"
