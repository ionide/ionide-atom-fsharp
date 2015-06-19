namespace Atom.FSharp

[<ReflectedDefinition>]
module DTO =

    type Error = {
        /// 0-indexed first line of the error block
        StartLine : int
        /// 1-indexed first line of the error block
        StartLineAlternate : int
        /// 0-indexed first column of the error block
        StartColumn : int
        /// 1-indexed first column of the error block
        StartColumnAlternate : int
        /// 0-indexed last line of the error block
        EndLine : int
        /// 1-indexed last line of the error block
        EndLineAlternate : int
        /// 0-indexed last column of the error block
        EndColumn : int
        /// 1-indexed last column of the error block
        EndColumnAlternate : int
        /// Description of the error
        Message : string
        Severity : string
        /// Type of the Error
        Subcategory : string
        }

    type Declaration = {
        File : string
        Line : int
        Column : int
    }

    type Completion = {
        Name : string
        Glyph : string
        GlyphChar: string
    }

    type CompilerLocationResult = {Kind : string; Data : string}

    type CompletionResult = {Kind : string; Data : Completion []}
    type TooltipResult = {Kind : string; Data : string}
    type ParseResult = {Kind : string; Data : Error []}
    type FindDeclarationResult = {Kind : string; Data: Declaration}