##FSharp.Atom
![FSharp.Atom](https://raw.githubusercontent.com/Krzysztof-Cieslak/FSharp.Atom/master/gifs/ErrorPanel.png)

## Installation

* install "language-fsharp" package using APM or Atom UI
* install "autocomplete-plus" package using APM or Atom UI (disable build-in atom autocomplete for best experience)
* clone / download this repository
* Open `src/core` with Atom and run Update Package Dependencies" from Atom command palette. Do the same for `src\paket`
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Mac ) to build project
* copy `src/core` and `src/paket` to Atom package folder

OR (for easy development)

* create symbolic directory link beween both `src/core` and `src/paket` and Atom package folder

## Features

- Auto completions
- Error highlighting and error list in bottom panel
- Tooltips
- Support for script files or F# projects
- Basic support for [Paket](http://fsprojects.github.io/Paket/).