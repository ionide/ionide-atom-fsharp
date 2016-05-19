// --------------------------------------------------------------------------------------
// FAKE build script
// --------------------------------------------------------------------------------------

#I "packages/FAKE/tools"
#r "packages/FAKE/tools/FakeLib.dll"
open System
open System.Diagnostics
open System.IO
open Fake
open Fake.Git
open Fake.ProcessHelper
open Fake.ReleaseNotesHelper
open Fake.ZipHelper

#if MONO
#else
#load   "src/atom-bindings.fsx"
        "src/Core/Control.fs"
        "src/Core/DTO.fs"
        "src/Core/Logging.fs"
        "src/Core/LanguageService.fs"
        "src/Components/Parser.fs"
        "src/Components/CompletionHelpers.fs"
        "src/Components/UnicodeGlyphs.fs"
        "src/Components/Autocomplete.fs"
        "src/Components/Tooltips.fs"
        "src/Components/HighlightUse.fs"
        "src/Components/Toolbar.fs"
        "src/Components/Errors.fs"
        "src/Components/FindDeclaration.fs"
        "src/Components/Format.fs"
        "src/FSharpIDE.fs"
        "src/main.fs"
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


let run cmd args dir =
    if execProcess( fun info ->
        info.FileName <- cmd
        if not( String.IsNullOrWhiteSpace dir) then
            info.WorkingDirectory <- dir
        info.Arguments <- args
    ) System.TimeSpan.MaxValue = false then
        traceError <| sprintf "Error while running '%s' with args: %s" cmd args

let atomPath = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) </> "atom" </> "bin" 

let apmTool, atomTool =
    #if MONO
        "apm", atom 
    #else
        atomPath </> "apm.cmd" , atomPath </> "atom.cmd"
    #endif


// --------------------------------------------------------------------------------------
// Build the Generator project and run it
// --------------------------------------------------------------------------------------

Target "Clean" (fun _ ->
    CopyFiles "release" ["README.md"; "LICENSE"; "RELEASE_NOTES.md"]
    CleanDir tempReleaseDir
)


let fsgrammarDir = "paket-files/github.com/ionide/ionide-fsgrammar"
let fsgrammarRelease = "release/grammars"

Target "CopyGrammar" (fun _ ->
    ensureDirectory fsgrammarRelease
    CleanDir fsgrammarRelease
    CopyFiles fsgrammarRelease [
        fsgrammarDir </> "fsharp.fsi.json"
        fsgrammarDir </> "fsharp.fsl.json"
        fsgrammarDir </> "fsharp.fsx.json"
        fsgrammarDir </> "fsharp.json"
    ]
)


let fantomasBin     = "release/bin-fantomas" 
let fantomasPkgDir  = "packages/FantomasCLI/lib"

Target "CopyFantomas" (fun _ ->
    ensureDirectory fantomasBin
    CleanDir fantomasBin
    CopyFiles fantomasBin [
        fantomasPkgDir  </> "Fantomas.exe"        
        fantomasPkgDir  </> "FantomasLib.dll"       
        fantomasPkgDir  </> "FSharp.Core.dll"       
        fantomasPkgDir  </> "FSharp.Compiler.Service.dll"
    ]
)

let releaseBin  = "release/bin"
let fsacBin     = "paket-files/github.com/ionide/FsAutoComplete/bin/release"

Target "CopyFSAC" (fun _ ->
    ensureDirectory releaseBin
    CleanDir releaseBin

    !! (fsacBin + "/*")
    |> CopyFiles  releaseBin 
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

// Installs npm dependencies defined in "release\package.json" to "release\node_modules"
Target "InstallDependencies" (fun _ ->
    run apmTool "install" "release"
)

// Creates symbolic link between "release" folder and `Users\XXX\.atom\packages" for the Ionide-FSharp plugin
Target "ApmLink"(fun _ ->
    run apmTool "link" "releases"
)

// This should not be the long term way to test out our packages
// TODO switch this target to install to dev and launch atom in dev mode
Target "TryPackage"( fun _ ->
    killProcess "atom"
    run apmTool "uninstall ionide-fsharp" ""
    run apmTool "link" "release"
    run atomTool __SOURCE_DIRECTORY__ ""
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
)

Target "Release" (fun _ ->
    let args = sprintf "publish %s" release.NugetVersion
    run apmTool args tempReleaseDir
    DeleteDir tempReleaseDir
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
    ==> "CopyGrammar"
    ==> "CopyFantomas"
    ==> "CopyFSAC"
    ==> "InstallDependencies"
#endif

"InstallDependencies"
    ==> "Default"
    ==> "TagDevelopBranch"
    ==> "PushToMaster"
    ==> "Release"


"InstallDependencies"
    ==> "TryPackage"

RunTargetOrDefault "Default"
