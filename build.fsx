// --------------------------------------------------------------------------------------
// FAKE build script
// --------------------------------------------------------------------------------------

#I "packages/FAKE/tools"
#r "packages/FAKE/tools/FakeLib.dll"
open System
open System.IO
open Fake
open Fake.Git
open Fake.ProcessHelper
open Fake.ZipHelper

#if MONO
#else
#load "src/atom-bindings.fsx"
#load "src/atom-extra.fs"
#load "src/core.fs"
#load "src/paket.fs"
#load "src/main.fs"
#endif

// --------------------------------------------------------------------------------------
// Build the Generator project and run it
// --------------------------------------------------------------------------------------

Target "BuildGenerator" (fun () ->
    [ __SOURCE_DIRECTORY__ @@ "src" @@ "FSharp.Atom.Generator.fsproj" ]
    |> MSBuildDebug "" "Rebuild"
    |> Log "AppBuild-Output: "
)

Target "RunGenerator" (fun () -> 
    
        (TimeSpan.FromMinutes 5.0)
        |> ProcessHelper.ExecProcess (fun p ->
            p.FileName <- __SOURCE_DIRECTORY__ @@ "src" @@ "bin" @@ "Debug" @@ "FSharp.Atom.Generator.exe" )
        |> ignore    
)
#if MONO
#else
Target "RunScript" (fun () -> 
    FSharp.Atom.Generator.translateModules()  
)
#endif


// --------------------------------------------------------------------------------------
// Generate FunScript bindings from the *.d.ts files in the 'typings' folder
// --------------------------------------------------------------------------------------

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

    (TimeSpan.FromMinutes 15.0)
    |> ProcessHelper.ExecProcess (fun p ->
      p.FileName <- typings @@ "FunScript.TypeScript" @@ "FunScript.TypeScript.exe"
      p.WorkingDirectory <- typings @@ "FunScript.TypeScript")
    |> ignore
)

// --------------------------------------------------------------------------------------
// Run generator by default. Invoke 'build <Target>' to override
// --------------------------------------------------------------------------------------

#if MONO
"BuildGenerator" ==> "RunGenerator"
RunTargetOrDefault "RunGenerator"
#else
RunTargetOrDefault "RunScript"
#endif