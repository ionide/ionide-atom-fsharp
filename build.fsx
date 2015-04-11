// --------------------------------------------------------------------------------------
// FAKE build script
// --------------------------------------------------------------------------------------

#I "packages/FAKE/tools"
#r "packages/FAKE/tools/FakeLib.dll"
open System
open Fake
open Fake.Git
open Fake.ReleaseNotesHelper
open Fake.AssemblyInfoFile

// --------------------------------------------------------------------------------------
// Load the F# implementation and specify parameters for the translator
// --------------------------------------------------------------------------------------

#load "src/atom-bindings.fsx"
#load "src/atom-extra.fsx"
#load "src/paket.fsx"
#load "src/core.fsx"

// Translate the type given as #1 using module name #2
// and save the result to a file specified in #3
let atomModules =
  [ typeof<Core.Core>, "AtomFSharpCore", "src/core/lib/core.js";
    typeof<Paket.Paket>, "AtomFSharpPaket", "src/paket/lib/paket.js" ]

// --------------------------------------------------------------------------------------
// Compile F# type to an atom module
// --------------------------------------------------------------------------------------

// TODO: This only "requires" CompositeDisposable!
// (So if you're using other things from atom, they need to be added)

open System.Reflection
open Microsoft.FSharp.Quotations
open FunScript.Compiler

let translateModules() =
  for typ, moduleName, fileName in atomModules do

    // We generate F# quotation that returns all the methods that we want to expose
    // from the class. This way, we can then wrap it into simple JS code that
    // creates the module. The generated quotation looks something like this:
    //
    //   [| box (fun () -> new WordCount());
    //      box (fun (self:WordCount) a1 .. an -> self.activate(a1, .., an))
    //      ... and so on for all other methods .. |]
    //
    let ctor = typ.GetConstructor([||])
    let meths = typ.GetMethods(BindingFlags.DeclaredOnly ||| BindingFlags.Public ||| BindingFlags.Instance)

    /// Creates "(fun p1 .. pn -> <body>)" and "[p1; ..; pn]"
    /// (which is used when generating boxed lambdas that pass parameters to the actual function)
    let createParameterPassing (m:MethodBase) =
      let paramVars = m.GetParameters() |> Array.mapi (fun i p -> Var(sprintf "p%d" i, p.ParameterType))
      let paramArgs = [ for v in paramVars -> Expr.Var(v) ]
      let lambdaConstr = paramVars |> Seq.fold (fun fn var -> fun body -> Expr.Lambda(var, fn body)) id
      lambdaConstr, paramArgs

    let exportFunctions =
      [ for m in meths ->
          let tv = new Var("this", typ)
          let lambdaConstr, paramArgs = createParameterPassing m
          Expr.Lambda(tv, lambdaConstr (Expr.Call(Expr.Var(tv), m, paramArgs))) ]

    let exportCtor =
      Expr.Coerce
        ( Expr.Lambda(Var("ign", typeof<unit>), Expr.NewObject(typ.GetConstructor [||], [])),
          typeof<obj> )

    let functionArray =
      Expr.NewArray(typeof<obj>, exportCtor::[ for f in exportFunctions -> Expr.Coerce(f, typeof<obj>)])

    let coreJS = Compiler.Compile(functionArray)

    // Now we just wrap the generated JavaScript into 'wrappedFunScript' function
    // Then we call the function and create a module export with all the public methods
    // from the provided type (just by calling one of the functions from the array)
    let moduleJS =
      [ yield "var CompositeDisposable = require('atom').CompositeDisposable;"
        yield "var child_process = require('child_process');"
        yield "window.$ = require('jquery');"
        yield ""
        yield "function wrappedFunScript() { \n" + coreJS + "\n }"
        yield "var _funcs = wrappedFunScript();"
        yield "var _self = _funcs[0]();"
        yield ""
        yield "module.exports = " + moduleName + " = {"
        for i, m in Seq.zip [1 .. meths.Length] meths do
          let parNames = String.concat "" [ for j in 1 .. m.GetParameters().Length -> sprintf "p%i" j ]
          let parArgs = String.concat "" [ for j in 1 .. m.GetParameters().Length -> sprintf "(p%i)" j ]
          yield m.Name + ": function(" + parNames + ") {"
          yield "  return _funcs[" + string i + "](_self)" + parArgs + "; }" +
                 ( if i = meths.Length then "" else "," )
        yield "};" ]
      |> String.concat "\n"
    System.IO.File.WriteAllText(__SOURCE_DIRECTORY__ @@ fileName, moduleJS)


// --------------------------------------------------------------------------------------
// Generate FunScript bindings from the *.d.ts files in the 'typings' folder
// --------------------------------------------------------------------------------------

open System.IO
open Fake.ProcessHelper
open Fake.ZipHelper

let typings = __SOURCE_DIRECTORY__ @@ "typings"
let typesZip = typings @@ "FunScript.TypeScript" @@ "Types.zip"
let noInline = set [ "jquery.d.ts"; "node.d.ts"; "atom.d.ts" ]

let fsharpBin =
  [ "/Library/Frameworks/Mono.framework/Versions/3.10.0/lib/mono/4.0"
    (* TODO: This needs to list many more locations where fsc.exe can be? *) ]
  |> List.tryFind (fun p -> File.Exists(p @@ "fsc.exe"))


Target "GenerateBindings" (fun () ->
    // Clean the 'temp' filder and 'Types.zip' file for FunScript
    DeleteFile typesZip
    CleanDir (typings @@ "temp")

    // Get all definitions and their dependencies (and source code without <reference> tags)
    let tsDefinitions =
      let reg = System.Text.RegularExpressions.Regex("reference.*path=\"([^\"]*)\"") // "
      let defs = Directory.EnumerateFiles(typings, "*.d.ts", SearchOption.AllDirectories)
      [ for def in defs ->
          let lines = File.ReadAllLines(def)
          let deps, lines =
            [ for line in lines do
                let mtch = reg.Match(line)
                if mtch.Success then
                  let depName = Path.GetFileName(mtch.Groups.[1].Value)
                  if not (noInline.Contains depName) then yield true, depName
                 else yield false, line ] |> List.partition fst
          Path.GetFileName(def), List.map snd lines :> seq<_>, List.map snd deps ]

    // Inline all dependencies, except for those that are in 'noInline' set
    let sources = dict [ for fn, src, _ in tsDefinitions -> fn, src ]
    for fn, src, deps in tsDefinitions do
       if noInline.Contains fn then
         let lines =
           [| yield! src
              for dep in deps do yield! sources.[dep] |]
         File.WriteAllLines(typings @@ "temp" @@ fn, lines)

    // ZIP everything in the temp folder (inlined definitions)
    Directory.EnumerateFiles(typings @@ "temp", "*.d.ts")
    |> CreateZip (typings @@ "temp") (typings @@ "FunScript.TypeScript" @@ "Types.zip") "" 1 false
    CleanDir (typings @@ "temp")

    // Set the FSHARP_BIN variable and run FunScript codegen!
    fsharpBin |> Option.iter (fun fsharpBin ->
      System.Environment.SetEnvironmentVariable("FSHARP_BIN", fsharpBin))

    (TimeSpan.FromMinutes 5.0)
    |> ProcessHelper.ExecProcess (fun p ->
      p.FileName <- typings @@ "FunScript.TypeScript" @@ "FunScript.TypeScript.exe"
      p.WorkingDirectory <- typings @@ "FunScript.TypeScript")
    |> ignore
)

// --------------------------------------------------------------------------------------
// Run all targets by default. Invoke 'build <Target>' to override

Target "GenerateModules" (fun () ->
    translateModules()
)

RunTargetOrDefault "GenerateModules"
