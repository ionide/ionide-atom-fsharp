AutocompleteHandler = require './autocomplete-handler'

module.exports =
  selector: '.source.fsharp'
  inclusionPriority: 1
  excludeLowerPriority: true
  getSuggestions: (options) =>
    autocompleteHandler = new AutocompleteHandler()
    path = atom.project.relativize options.editor.buffer.file.path
    row = options.bufferPosition.row + 1
    col = options.bufferPosition.column
    new Promise (resolve) =>
      action = (s) =>
          msplit = s.split("\n")
          if msplit.length > 1
            msg = msplit[1]
            try
              obj = JSON.parse(msg)
              prefix = options.prefix
              if(prefix == '.' or prefix == '=')
                prefix = ''
              if obj.Kind == "completion"
                result = ({text: item, replacementPrefix: prefix } for item in obj.Data when item.contains(prefix))
                resolve(result)
              else
                resolve([])
            catch error
              console.log(error)
              resolve([])
          else
            resolve([])
      autocompleteHandler.parseCurrent(=> autocompleteHandler.completion(path, row, col, action))
