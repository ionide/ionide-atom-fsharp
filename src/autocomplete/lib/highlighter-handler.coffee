module.exports =
class HighlighterHandler
  instance = null

  constructor:  ->
    if instance
      return instance
    else
      @marked = []

      atom.on "FSharp.Atom:Highlight", @handle


      instance = this

  handle: (lst) =>
    (item.destroy() for item in @marked)
    @marked = []
    editor = atom.workspace.getActiveTextEditor()
    action = (item) =>
      console.log(item)
      range = [[item.StartLine, item.StartColumn],[item.EndLine, item.EndColumn]]
      marker = editor.markBufferRange range, invalidate: 'never'
      cls = "highlight-error"
      if (item.Severity == "Warning")
        cls = "highlight-warning"
      @marked.push marker
      editor.decorateMarker(marker, type: 'highlight', class: cls)
    (action(item) for item in lst)
