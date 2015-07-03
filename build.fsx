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
open Fake.ReleaseNotesHelper
open Fake.ZipHelper

#if MONO
#else
#load "src/atom-bindings.fsx"
#load "src/Core/Bindings.fs"
#load "src/Core/ViewHelpers.fs"
#load "src/Core/ProcessHelpers.fs"
#load "src/Core/ListViewHelpers.fs"
#load "src/Core/Events.fs"
#load "src/Core/DTO.fs"
#load "src/Core/LanguageService.fs"
#load "src/Components/Parser.fs"
#load "src/Components/Autocomplete.fs"
#load "src/Components/Tooltips.fs"
#load "src/Components/HighlightUse.fs"
#load "src/Components/Toolbar.fs"
#load "src/Components/Errors.fs"
#load "src/Components/FindDeclaration.fs"
#load "src/Components/FAKE.fs"
#load "src/Components/StatusBar.fs"
#load "src/Components/Interactive.fs"
#load "src/FSharpIDE.fs"
#load "src/main.fs"
#endif

// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitOwner = "fsprojects"
let gitHome = "https://github.com/" + gitOwner

// The name of the project on GitHub
let gitName = "atom-fsharp"

// The url for the raw files hosted
let gitRaw = environVarOrDefault "gitRaw" "https://raw.github.com/fsprojects"

let tempReleaseDir = "temp/release"

// Read additional information from the release notes document
let releaseNotesData =
    File.ReadAllLines "RELEASE_NOTES.md"
    |> parseAllReleaseNotes

let release = List.head releaseNotesData

let msg =  release.Notes |> List.fold (fun r s -> r + s + "\n") ""
let releaseMsg = (sprintf "Release %s\n" release.NugetVersion) + msg

#if MONO
let apmTool = "apm"
#else
let apmTool = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) </> "atom" </> "bin" </> "apm.cmd"
#endif

// --------------------------------------------------------------------------------------
// Build the Generator project and run it
// --------------------------------------------------------------------------------------

Target "Clean" (fun _ ->
    CopyFile "src/atom-fsharp" "README.md"
)

Target "BuildGenerator" (fun () ->
    [ __SOURCE_DIRECTORY__ @@ "src" @@ "Atom.FSharp.Generator.fsproj" ]
    |> MSBuildDebug "" "Rebuild"
    |> Log "AppBuild-Output: "
)

Target "RunGenerator" (fun () ->

        (TimeSpan.FromMinutes 5.0)
        |> ProcessHelper.ExecProcess (fun p ->
            p.FileName <- __SOURCE_DIRECTORY__ @@ "src" @@ "bin" @@ "Debug" @@ "Atom.FSharp.Generator.exe" )
        |> ignore
)
#if MONO
#else
Target "RunScript" (fun () ->
    Atom.FSharp.Generator.translateModules()
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

    let result = (TimeSpan.FromMinutes 15.0)
                 |> ProcessHelper.ExecProcess (fun p ->
                      p.FileName <- typings @@ "FunScript.TypeScript" @@ "FunScript.TypeScript.exe"
                      p.WorkingDirectory <- typings @@ "FunScript.TypeScript")
    if result = 0 then
        !! (typings @@ "FunScript.TypeScript" @@ "Output" @@ "*.dll" ) |>
        CopyFiles "lib"
    ()
)

Target "InstallDependencies" (fun _ ->
    let args = "install"

    let srcDir = "src/atom-fsharp"
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- srcDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
)

Target "TagDevelopBranch" (fun _ ->
    StageAll ""
    Git.Commit.Commit "" releaseMsg
    Branches.pushBranch "" "origin" "develop"

    let tagName = "develop-" + release.NugetVersion
    Branches.tag "" tagName
    Branches.pushTag "" "origin" tagName
)


Target "PushToMaster" (fun _ ->
    CleanDir tempReleaseDir
    Repository.cloneSingleBranch "" (gitHome + "/" + gitName + ".git") "master" tempReleaseDir

    let cleanEverythingFromLastCheckout() =
        let tempGitDir = Path.GetTempPath() </> "gitrelease"
        CleanDir tempGitDir
        CopyRecursive (tempReleaseDir </> ".git") tempGitDir true |> ignore
        CleanDir tempReleaseDir
        CopyRecursive tempGitDir (tempReleaseDir  </> ".git") true |> ignore

    cleanEverythingFromLastCheckout()
    CopyRecursive "src/atom-fsharp" tempReleaseDir true |> tracefn "%A"

    StageAll tempReleaseDir
    Git.Commit.Commit tempReleaseDir releaseMsg
    Branches.push tempReleaseDir
)

Target "Release" (fun _ ->
    let args = sprintf "publish %s" release.NugetVersion
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- tempReleaseDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
)

// --------------------------------------------------------------------------------------
// Run generator by default. Invoke 'build <Target>' to override
// --------------------------------------------------------------------------------------

Target "Default" DoNothing

#if MONO
"Clean"
  ==> "BuildGenerator"
  ==> "RunGenerator"
  ==> "InstallDependencies"
#else
"Clean"
  ==> "RunScript"
  ==> "InstallDependencies"
#endif

"InstallDependencies"
  ==> "Default"
  ==> "TagDevelopBranch"
  ==> "PushToMaster"
  ==> "Release"

RunTargetOrDefault "Default"
