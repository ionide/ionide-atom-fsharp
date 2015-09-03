namespace Atom.FSharp

[<ReflectedDefinition>]
module DTO =

    type Error = {
        /// 1-indexed first line of the error block
        StartLine : int
        /// 1-indexed first column of the error block
        StartColumn : int
        /// 1-indexed last line of the error block
        EndLine : int
        /// 1-indexed last column of the error block
        EndColumn : int
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

    type SymbolUse = {
      Filename : string
      StartLine : int
      StartColumn : int
      EndLine : int
      EndColumn : int
      IsFromDefinition : bool
      IsFromAttribute : bool
      IsFromComputationExpression : bool
      IsFromDispatchSlotImplementation : bool
      IsFromPattern : bool
      IsFromType : bool
    }

    type SymbolUses = {
        Name : string
        Uses : SymbolUse array
    }

    type Helptext = {
        Name : string
        Text : string
    }

    type CompilerLocation = {
        Fcs : string
        Fsi : string
        MSBuild : string
    }

    type CompilerLocationResult = {Kind : string; Data : CompilerLocation}
    type HelptextResult = {Kind : string; Data : Helptext}

    type CompletionResult = {Kind : string; Data : Completion []}
    type SymbolUseResult = {Kind : string; Data : SymbolUses }
    type TooltipResult = {Kind : string; Data : string}
    type ParseResult = {Kind : string; Data : Error []}
    type FindDeclarationResult = {Kind : string; Data: Declaration}
