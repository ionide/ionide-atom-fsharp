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


// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitOwner = "ionide"
let gitHome = "https://github.com/" + gitOwner

// The name of the project on GitHub
let gitName = "ionide-helpers"

// The url for the raw files hosted
let gitRaw = environVarOrDefault "gitRaw" "https://raw.github.com/ionide"

// Read additional information from the release notes document
let releaseNotesData =
    File.ReadAllLines "RELEASE_NOTES.md"
    |> parseAllReleaseNotes

let release = List.head releaseNotesData

let msg =  release.Notes |> List.fold (fun r s -> r + s + "\n") ""
let releaseMsg = (sprintf "Release %s\n" release.NugetVersion) + msg



Target "Clean" (fun _ ->
    CleanDir "release"
    CleanDir "temp"
)

Target "Build" (fun _ ->
    !! "src/*.fsproj"
    |> MSBuildRelease "temp" "Rebuild"
    |> ignore
    [   "temp/FunScript.TypeScript.Binding.atom.dll"
        "temp/FunScript.TypeScript.Binding.jquery.dll"
        "temp/FunScript.TypeScript.Binding.lib.dll"
        "temp/FunScript.TypeScript.Binding.node.dll"
        "temp/Ionide.Helpers.dll"
    ] |> Copy "release"
    DeleteDir "temp"
)

Target "Default" DoNothing

"Clean"
==> "Build"
==> "Default"

RunTargetOrDefault "Default"
