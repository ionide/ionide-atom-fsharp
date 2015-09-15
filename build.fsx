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
#load "src/Components/Format.fs"
#load "src/Components/DeveloperMode.fs"
#load "src/FSharpIDE.fs"
#load "src/main.fs"
#endif

// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitOwner = "ionide"
let gitHome = "https://github.com/" + gitOwner

// The name of the project on GitHub
let gitName = "ionide-fsharp"

// The url for the raw files hosted
let gitRaw = environVarOrDefault "gitRaw" "https://raw.github.com/ionide"

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
    CopyFiles "release" ["Readme.md"; "LICENSE"; "RELEASE_NOTES.md"]
    CleanDir tempReleaseDir
)

Target "BuildGenerator" (fun () ->
    [ __SOURCE_DIRECTORY__ @@ "src" @@ "Ionide.FSharp.fsproj" ]
    |> MSBuildDebug "" "Rebuild"
    |> Log "AppBuild-Output: "
)

Target "RunGenerator" (fun () ->
    (TimeSpan.FromMinutes 5.0)
    |> ProcessHelper.ExecProcess (fun p ->
        p.FileName <- __SOURCE_DIRECTORY__ @@ "src" @@ "bin" @@ "Debug" @@ "Ionide.FSharp.exe" )
    |> ignore
)
#if MONO
#else
Target "RunScript" (fun () ->
    Atom.FSharp.Generator.translateModules "../release/lib/fsharp.js"
)
#endif

Target "InstallDependencies" (fun _ ->
    let args = "install"

    let srcDir = "release"
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
    CopyRecursive "release" tempReleaseDir true |> tracefn "%A"

    StageAll tempReleaseDir
    Git.Commit.Commit tempReleaseDir releaseMsg
    Branches.push tempReleaseDir
    DeleteDir tempReleaseDir
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
