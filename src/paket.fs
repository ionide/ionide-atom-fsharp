[<ReflectedDefinition>]
module Paket 

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore

open Atom

module PaketService = 
    let location () = Globals.atom.packages.packageDirPaths.[0] + "\\paket\\bin\\paket.exe"
    let bootstraperLocation () = Globals.atom.packages.packageDirPaths.[0] + "\\paket\\bin\\paket.bootstrapper.exe"
    
    let handle (error : Error) (stdout : Buffer) (stderr : Buffer) =
        Globals.atom.emit("FSharp:Output", stdout.toString())
        Globals.console.log(stdout.toString())  

    type Options = {cwd : string}

    let exec opt = 
        let cmd = location() + " " + opt 
        let options = {cwd = Globals.atom.project.getPath()}
        Globals.exec(cmd,unbox<AnonymousType600>options, System.Func<_,_,_,_>(handle)) |> ignore

    let UpdatePaket () = 
        let cmd = bootstraperLocation()
        Globals.exec(cmd, System.Func<_,_,_,_>(handle)) |> ignore

    let Init () = "init" |> exec
    let Install () = "install" |> exec
    let Update () = "update" |> exec
    let Outdated () = "outdated" |> exec




type Paket() = 


    member x.activate(state:obj) =    
        Atom.addCommand("atom-workspace", "Paket: Update Paket", PaketService.UpdatePaket)
        Atom.addCommand("atom-workspace", "Paket: Init", PaketService.Init)
        Atom.addCommand("atom-workspace", "Paket: Install", PaketService.Install)
        Atom.addCommand("atom-workspace", "Paket: Update", PaketService.Update)
        Atom.addCommand("atom-workspace", "Paket: Outdated", PaketService.Outdated)
        ()

    member x.deactivate() = 
        ()