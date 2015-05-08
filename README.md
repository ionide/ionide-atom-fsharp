##FSharp.Atom
![FSharp.Atom](https://raw.githubusercontent.com/fsprojects/FSharp.Atom/develop/gifs/ErrorPanel.png)

## Installation

Using APM or Atom UI:

* install ["language-fsharp"](https://atom.io/packages/language-fsharp) package
* install ["autocomplete-plus"](https://atom.io/packages/autocomplete-plus) package (disable build-in atom autocomplete for best experience)
* install ["fsharp"](https://atom.io/packages/fsharp) package

## Features

- Auto completions
- Error highlighting and error list in bottom panel
- Tooltips
- Support for script files or F# projects.

## Contributing and copyright

The project is hosted on [GitHub](https://github.com/fsprojects/FSharp.Atom) where you can [report issues](https://github.com/fsprojects/FSharp.Atom/issues), fork
the project and submit pull requests on the [develop branch](https://github.com/fsprojects/FSharp.Atom/tree/develop).

The library is available under [Apache 2 license](https://github.com/fsprojects/FSharp.Atom/blob/master/LICENSE.md), which allows modification and
redistribution for both commercial and non-commercial purposes.

### Build

* Install "language-fsharp" package using APM or Atom UI
* Install "autocomplete-plus" package using APM or Atom UI (disable build-in atom autocomplete for best experience)
* Clone this repository
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Mac ) to build project
* Copy `src/core` to Atom package folder OR (for easy development) create symbolic directory link beween `src/core` and Atom package folder. It can be done with following command:  
    ``apm develop core <full path to src/core folder>``
* Open ``src/core`` folder in separate Atom window, press ``Cmd+Shift+P`` (on Mac) or ``Ctrl+Shift+P`` (on Windows or Linux) and select ``Update package dependencies: Update``. It is necessary to install package dependencies specified in ``package.json``
* Type ``atom -d`` in command line to run Atom in development mode. If you open any F# file errors panel in the bottom should appear.

### Maintainer(s)

- [@Krzysztof-Cieslak](https://github.com/Krzysztof-Cieslak)
