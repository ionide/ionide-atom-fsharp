#Ionide-FSharp

It's part of [Ionide](http://ionide.io) plugin suite.
F# IDE-like possibilities in Atom editor

Plugin is using [linter](https://atom.io/packages/linter) plugin to handle error highlighting and error list display. Installation of this plugin is required.
Required plugin is installed automatically if `ionide-installer` is used. Otherwise You need to install required plugin on Your own/.

## Features

- Syntax highlighting
- Auto completions
- Error highlighting and error list in bottom panel (linter plugin required)
- Tooltips
- Commenting
- Go to Declaration
- Support for script files or F# projects (if plugin does not detect `.fsproj` file, just open it ).
- Highlighting usages
- Quick Info panel

[![Join the chat at https://gitter.im/ionide/ionide-project](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/ionide/ionide-project?utm_source=share-link&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) --  [Need Help? You can find us on Gitter](https://gitter.im/ionide/ionide-project)   


## Build

* Clone this repository
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Max) to build projects
* Go to `release` folder and run `apm link` to create symbolic link between plugin and Atom's plugins folder
* Run Atom

## Contributing and copyright

The project is hosted on [GitHub](https://github.com/ionide/ionide-fsharp) where you can [report issues](https://github.com/ionide/ionide-fsharp/issues), fork
the project and submit pull requests.

The library is available under [MIT license](https://github.com/ionide/ionide-fsharp/blob/master/LICENSE.md), which allows modification and
redistribution for both commercial and non-commercial purposes.
