var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var path = require('path');
var Emitter = require('event-kit').Emitter;

function wrappedFunScript() { 
var position___ctor$, position__GeneratedCompareTo, list_1_String____NilString___, list_1_String____ConsString___, list_1_String__NilString, list_1_String__ConsString, list_1_OverloadSignature__NilOverloadSignature_, list_1_OverloadSignature__ConsOverloadSignature_, cords___ctor$, ViewsHelpers__stopMovingHandler$Object_Object_, ViewsHelpers__pixelPositionFromMouseEvent$, ViewsHelpers__jq_$, ViewsHelpers__jq$, ViewsHelpers__isFSharpEditor$, ViewsHelpers__getElementsByClass$Element_Element_, ViewsHelpers__clearTimer$Timer_Timer_, ViewsHelpers__bufferPositionFromMouseEvent$, ViewsHelpers__OnCursorStopMoving$Object_Object_, UnfoldEnumerator_2_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String___ctor$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, UnfoldEnumerator_2_Int32__Completion___ctor$Int32_Completion_, UnfoldEnumerator_2_IEnumerator_1_Completion__Object___ctor$IEnumerator_1_Completion__Object_, UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_, UnfoldEnumerator_2_FSharpOption_1_String__String___ctor$FSharpOption_1_String__String, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, UnfoldEnumerator_2_FSharpList_1_String__String___ctor$FSharpList_1_String__String, UnfoldEnumerator_2_Boolean__String___ctor$Boolean_String, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, TupleString_String, TupleString_Int32, TupleString_FSharpOption_1_String_, TupleString_FSharpList_1_String_, TupleObject__IEnumerator_1_Completion_, TupleLazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, TupleInt32_Int32, TupleError__String, TupleDisposable__Int32, TupleCompletion__Int32, TupleCompletion__IEnumerator_1_Completion_, TooltipHandler__tooltip, TooltipHandler__timer, TooltipHandler__subscriptions, TooltipHandler__remove$, TooltipHandler__reg$, TooltipHandler__mouseHandler$, TooltipHandler__matchError$, TooltipHandler__lastMousePosition, TooltipHandler__initialize$, TooltipHandler__get_tooltip$, TooltipHandler__get_timer$, TooltipHandler__get_subscriptions$, TooltipHandler__get_lastMousePosition$, TooltipHandler__get_event$, TooltipHandler__get_errorArr$, TooltipHandler__get_ed$, TooltipHandler__getPosition$, TooltipHandler__event, TooltipHandler__errorHandler$, TooltipHandler__errorArr, TooltipHandler__ed, TooltipHandler__deactivate$, TooltipHandler__dashes$, TooltipHandler__createTooltip$, TooltipHandler__clearTimer$, TooltipHandler__activate$, ToolbarHandler__subscriptions, ToolbarHandler__remove$, ToolbarHandler__initialize$, ToolbarHandler__handleEditorChange$, ToolbarHandler__get_subscriptions$, ToolbarHandler__get_ed$, ToolbarHandler__get_cursorSubscription$, ToolbarHandler__get_bar$, ToolbarHandler__getCursor$, ToolbarHandler__format_data$, ToolbarHandler__ed, ToolbarHandler__deactivate$, ToolbarHandler__cursorSubscription, ToolbarHandler__cursorHandler$, ToolbarHandler__createToolbar$, ToolbarHandler__bar, ToolbarHandler__askForToolbar$, ToolbarHandler__activate$, T___ctor$, Suggestion___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, String__EndsWith$, State__On, State__Off, Seq__Where$Completion_Completion_, Seq__Unfold$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String_1Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__Unfold$Int32__Completion_Int32_Completion_, Seq__Unfold$IEnumerator_1_Completion__Object_IEnumerator_1_Completion__Object_, Seq__Unfold$IEnumerator_1_Completion__Completion_IEnumerator_1_Completion__Completion_, Seq__Unfold$FSharpOption_1_String__String_1FSharpOption_1_String__String, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__Unfold$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__Unfold$Boolean__String_1Boolean_String, Seq__ToList$String_1String, Seq__ToArray$String___String___, Seq__ToArray$String_1String, Seq__ToArray$Object_Object_, Seq__ToArray$Completion_Completion_, Seq__SortBy$Completion__Int32_Completion__Int32, Seq__Singleton$String_1String, Seq__OfList$String___String___, Seq__OfList$String_1String, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__OfArray$Completion_Completion_, Seq__Map$Completion__Object_Completion__Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$String_1String, Seq__IterateIndexed$Object_Object_, Seq__IterateIndexed$Completion_Completion_, Seq__Iterate$String_1String, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Object_Object_, Seq__FromFactory$Disposable_Disposable_, Seq__FromFactory$Completion_Completion_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__String_1Unit__String, Seq__FoldIndexedAux$Unit__Object_Unit__Object_, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexedAux$Unit__Completion_Unit__Completion_, Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$String_1_Unit_String_Unit_, Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__FoldIndexed$Object__Unit_Object__Unit_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__FoldIndexed$Completion__Unit_Completion__Unit_, Seq__Fold$String_1_Unit_String_Unit_, Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__Filter$Completion_Completion_, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Object_Object_, Seq__Enumerator$Disposable_Disposable_, Seq__Enumerator$Completion_Completion_, Seq__Empty$String_1String, Seq__Delay$String_1String, Seq__Delay$Object_Object_, Seq__Delay$Completion_Completion_, Seq__Append$String_1String, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Provider___ctor$, Provider_1__ctor$, Process__spawnSimple$, Process__isWin$, Process__fromPath$, Process__exec$, Parser__subscriptions, Parser__parseProjectForEditor$, Parser__h, Parser__get_subscriptions$, Parser__get_h$, Parser__deactivate$, Parser__activate$, PanelOptions___ctor$, Options___ctor$, Option__Map$NodeList__JQuery_NodeList__JQuery_, Option__Map$NodeList__Element_NodeList__Element_, Option__Map$NodeList__Coordinates_NodeList__Coordinates_, Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_, Option__Map$Element__HTMLElement_Element__HTMLElement_, Option__Iterate$TooltipResult_TooltipResult_, Option__Iterate$Timer_Timer_, Option__Iterate$SymbolUseResult_SymbolUseResult_, Option__Iterate$String_1String, Option__Iterate$ParseResult_ParseResult_, Option__Iterate$JQuery_JQuery_, Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_, Option__Iterate$IPoint_IPoint_, Option__Iterate$IEditor_IEditor_, Option__Iterate$HelptextResult_HelptextResult_, Option__Iterate$Element_Element_, Option__Iterate$Disposable_Disposable_, Option__Iterate$CompletionResult_CompletionResult_, Option__Iterate$CompilerLocationResult_CompilerLocationResult_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__IsSome$IEmitter_IEmitter_, Option__IsSome$FSharpOption_1_String_FSharpOption_1_String_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__IsSome$FSharpList_1_String_FSharpList_1_String_, Option__IsSome$Error_Error_, Option__IsSome$Disposable_Disposable_, Option__IsSome$CompletionResult_CompletionResult_, Option__IsSome$Boolean_Boolean, Option__IsNone$IEmitter_IEmitter_, Option__IsNone$Error_Error_, Option__IsNone$CompletionResult_CompletionResult_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_String__FSharpOption_1_String_Tuple_2_String__FSharpOption_1_String_, Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_, Option__GetValue$Tuple_2_String__Boolean_Tuple_2_String__Boolean_, Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_, Option__GetValue$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_, Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_, Option__GetValue$TooltipResult_TooltipResult_, Option__GetValue$Timer_Timer_, Option__GetValue$SymbolUseResult_SymbolUseResult_, Option__GetValue$String_1String, Option__GetValue$ParseResult_ParseResult_, Option__GetValue$OverloadSignature_OverloadSignature_, Option__GetValue$NodeList_NodeList_, Option__GetValue$JQuery_JQuery_, Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_, Option__GetValue$Int32_Int32, Option__GetValue$IPoint_IPoint_, Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__GetValue$IEditor_IEditor_, Option__GetValue$HelptextResult_HelptextResult_, Option__GetValue$HTMLElement_HTMLElement_, Option__GetValue$FSharpOption_1_String_FSharpOption_1_String_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$FSharpList_1_String_FSharpList_1_String_, Option__GetValue$Error_Error_, Option__GetValue$Element_Element_, Option__GetValue$Disposable_Disposable_, Option__GetValue$Coordinates_Coordinates_, Option__GetValue$CompletionResult_CompletionResult_, Option__GetValue$CompilerLocationResult_CompilerLocationResult_, Option__GetValue$ChildProcess_ChildProcess_, Option__GetValue$Boolean_Boolean, OpenOptions___ctor$, OpenEditorOptions___ctor$, List__TryPickIndexedAux$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_, List__TryPickIndexed$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_, List__TryFindIndexed$OverloadSignature_OverloadSignature_, List__ToArray$String_1String, List__Tail$String___String___, List__Tail$String_1String, List__Reverse$String_1String, List__Reverse$OverloadSignature_OverloadSignature_, List__OfArray$OverloadSignature_OverloadSignature_, List__Length$String_1String, List__Length$OverloadSignature_OverloadSignature_, List__IterateIndexed$String_1String, List__Head$String___String___, List__Head$String_1String, List__Head$OverloadSignature_OverloadSignature_, List__Get$OverloadSignature_OverloadSignature_, List__FoldIndexedAux$list_1_String__String_1list_1_String__String, List__FoldIndexedAux$list_1_OverloadSignature__OverloadSignature_list_1_OverloadSignature__OverloadSignature_, List__FoldIndexedAux$Unit__String_1Unit__String, List__FoldIndexedAux$Int32__String_1Int32_String, List__FoldIndexedAux$Int32__OverloadSignature_Int32_OverloadSignature_, List__FoldIndexed$String_1_list_1_String_String_list_1_String_, List__FoldIndexed$String_1_Unit_String_Unit_, List__FoldIndexed$String_1_Int32_String_Int32, List__FoldIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, List__FoldIndexed$OverloadSignature__Int32_OverloadSignature__Int32, List__Fold$String_1_list_1_String_String_list_1_String_, List__Fold$String_1_Int32_String_Int32, List__Fold$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, List__Fold$OverloadSignature__Int32_OverloadSignature__Int32, List__FindIndexed$OverloadSignature_OverloadSignature_, List__Empty$String___String___, List__Empty$String_1String, List__Empty$OverloadSignature_OverloadSignature_, List__CreateCons$String___String___, List__CreateCons$String_1String, List__Append$OverloadSignature_OverloadSignature_, LintResult___ctor$, Lazy_1_Object__get_Value$Object_, Lazy_1_Object___ctor$Object_, Lazy_1_Object__Create$Object_, LanguageService__tooltip$, LanguageService__toolbarFlag, LanguageService__toolbar$, LanguageService__symbolUse$, LanguageService__stop$, LanguageService__start$, LanguageService__service, LanguageService__send$, LanguageService__project$, LanguageService__parseResponse$, LanguageService__parseEditor$, LanguageService__parse$, LanguageService__last, LanguageService__helptext$, LanguageService__get_toolbarFlag$, LanguageService__get_service$, LanguageService__get_last$, LanguageService__get_encoding$, LanguageService__findDeclaration$, LanguageService__encoding, LanguageService__completion$, LanguageService__ask$, HighlightUse__subscriptions, HighlightUse__showHighlight$, HighlightUse__remove$, HighlightUse__marked, HighlightUse__initialize$, HighlightUse__get_subscriptions$, HighlightUse__get_marked$, HighlightUse__get_ed$, HighlightUse__get_cursorSubscription$, HighlightUse__getCursor$, HighlightUse__ed, HighlightUse__deactivate$, HighlightUse__cursorSubscription, HighlightUse__clearHighlight$, HighlightUse__askForSymbolUse$, HighlightUse__activate$, FormatHandler__format$, FormatHandler__activate$, FindDeclaration__openDec$, FindDeclaration__lastPosition, FindDeclaration__lastFile, FindDeclaration__handle$Object_Object_, FindDeclaration__goBack$, FindDeclaration__get_lastPosition$, FindDeclaration__get_lastFile$, FindDeclaration__deactivate$, FindDeclaration__activate$, FSharpString__emptyIfNull$, FSharpString__Replicate$, FSharpString__Initialize$, FSharpString__Concat$, FSharpIDE__provideErrors$, FSharpIDE__provide$, FSharpIDE__getSuggestion$, FSharpIDE__deactivate$, FSharpIDE__activate$, FSharpIDE___ctor$, Events__tryParse$TooltipResult_TooltipResult_, Events__tryParse$SymbolUseResult_SymbolUseResult_, Events__tryParse$ParseResult_ParseResult_, Events__tryParse$HelptextResult_HelptextResult_, Events__tryParse$CompletionResult_CompletionResult_, Events__tryParse$CompilerLocationResult_CompilerLocationResult_, Events__parseAndEmit$TooltipResult_TooltipResult_, Events__parseAndEmit$SymbolUseResult_SymbolUseResult_, Events__parseAndEmit$ParseResult_ParseResult_, Events__parseAndEmit$HelptextResult_HelptextResult_, Events__parseAndEmit$CompletionResult_CompletionResult_, Events__parseAndEmit$CompilerLocationResult_CompilerLocationResult_, Events__once$ParseResult__Unit_ParseResult__Unit_, Events__once$Object__Unit_Object__Unit_, Events__once$FindDeclarationResult__OpenPromise_FindDeclarationResult__OpenPromise_, Events__once$CompletionResult__Unit_CompletionResult__Unit_, Events__on$, Events__log$String_1_String_1String_String, Events__last, Events__get_last$, Events__get_emitter$, Events__getName$, Events__emitter, Events__emitEmpty$String_1String, Events__emit$String_1String, EventType__Tooltips, EventType__Toolbars, EventType__SymbolUse, EventType__Status, EventType__ServerStop, EventType__ServerStart, EventType__ServerError, EventType__Project, EventType__Log, EventType__Helptext, EventType__FindDecl, EventType__Errors, EventType__Completion, EventType__CompilerLocation, ErrorLinterProvider__lint$, ErrorLinterProvider__create$, DeveloperMode__subscriptions, DeveloperMode__log, DeveloperMode__get_subscriptions$, DeveloperMode__get_log$, DeveloperMode__get_editor$, DeveloperMode__editor, DeveloperMode__deactivate$, DeveloperMode__activate$, DateTime__get_Now$, DateTime__createUnsafe$, DateTime__ToLongTimeString$, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, CreateEnumerable_1_Disposable___ctor$Disposable_, CreateEnumerable_1_Completion___ctor$Completion_, AutocompleteProvider__subscription, AutocompleteProvider__previousHelptext$Object_Object_, AutocompleteProvider__nextHelptext$Object_Object_, AutocompleteProvider__min3$Int32_Int32, AutocompleteProvider__lastRow, AutocompleteProvider__lastResult, AutocompleteProvider__isForced, AutocompleteProvider__initialize$, AutocompleteProvider__helptextSetText$, AutocompleteProvider__helptextList, AutocompleteProvider__helptext, AutocompleteProvider__get_subscription$, AutocompleteProvider__get_lastRow$, AutocompleteProvider__get_lastResult$, AutocompleteProvider__get_isForced$, AutocompleteProvider__get_helptextList$, AutocompleteProvider__get_helptext$, AutocompleteProvider__get_emitter$, AutocompleteProvider__get_currentHelptext$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__emitter, AutocompleteProvider__editDistance$, AutocompleteProvider__currentHelptext, AutocompleteProvider__createHelptext$, AutocompleteProvider__create$, Array__ZeroCreate$String___String___, Array__ZeroCreate$String_1String, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Int32_Int32, Array__ZeroCreate$Completion_Completion_, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexedAux$Error__Error_Error__Error_, Array__TryPickIndexed$String_1_String_1String_String, Array__TryPickIndexed$Error__Error_Error__Error_, Array__TryFind$String_1String, Array__TryFind$Error_Error_, Array__SortInPlaceWith$Completion_Completion_, Array__SortInPlaceBy$Completion__Int32_Completion__Int32, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Error__Object_Error__Object_, Array__Map$String_1_String___String_String___, Array__Map$Error__Object_Error__Object_, Array__Length$SymbolUse_SymbolUse_, Array__Length$String_1String, Array__Length$OverloadSignature___OverloadSignature___, Array__Length$OverloadSignature_OverloadSignature_, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Iterate$SymbolUse_SymbolUse_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Initialize$String_1String, Array__FoldIndexed$Unit__SymbolUse_Unit__SymbolUse_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$String____String_1String____String, Array__FoldIndexed$FSharpList_1_OverloadSignature__OverloadSignature___FSharpList_1_OverloadSignature__OverloadSignature___, Array__FoldBackIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, Array__FoldBack$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, Array__Fold$SymbolUse__Unit_SymbolUse__Unit_, Array__Fold$String_1_String___String_String___, Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Create$Int32_Int32, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_;
Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(xs,ys)
{
    return xs.concat(ys);;
});
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Concat$String_1String = (function(xs)
{
    return Array__ConcatImpl$String_1String(Seq__ToArray$String___String___(xs));
});
Array__ConcatImpl$String_1String = (function(xss)
{
    return [].concat.apply([], xss);;
});
Array__Create$Int32_Int32 = (function(n,x)
{
    var xs = Array__ZeroCreate$Int32_Int32(0);
    for (var i = 0; i <= (n - 1); i++)
    {
      xs[i] = x;
      null;
    };
    return xs;
});
Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_ = (function()
{
    return [];
});
Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$FSharpList_1_OverloadSignature__OverloadSignature___FSharpList_1_OverloadSignature__OverloadSignature___((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__Fold$String_1_String___String_String___ = (function(f,seed,xs)
{
    return Array__FoldIndexed$String____String_1String____String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__Fold$SymbolUse__Unit_SymbolUse__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__SymbolUse_Unit__SymbolUse_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldBack$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_ = (function(f,xs,seed)
{
    return Array__FoldBackIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_((function(_arg1)
    {
      return (function(x)
      {
        return (function(acc)
        {
          return f(x)(acc);
        });
      });
    }), xs, seed);
});
Array__FoldBackIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_ = (function(f,xs,seed)
{
    var acc = seed;
    var size = Array__Length$OverloadSignature_OverloadSignature_(xs);
    for (var i = 1; i <= size; i++)
    {
      acc = f((i - 1))(xs[(size - i)])(acc);
      null;
    };
    return acc;
});
Array__FoldIndexed$FSharpList_1_OverloadSignature__OverloadSignature___FSharpList_1_OverloadSignature__OverloadSignature___ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$OverloadSignature___OverloadSignature___(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__FoldIndexed$String____String_1String____String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__FoldIndexed$Unit__SymbolUse_Unit__SymbolUse_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$SymbolUse_SymbolUse_(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Initialize$String_1String = (function(n,f)
{
    var xs = Array__ZeroCreate$String_1String(0);
    for (var i = 0; i <= (n - 1); i++)
    {
      xs[i] = f(i);
      null;
    };
    return xs;
});
Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(f,xs)
{
    var _2692;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _2692, xs);
});
Array__Iterate$SymbolUse_SymbolUse_ = (function(f,xs)
{
    var _2851;
    return Array__Fold$SymbolUse__Unit_SymbolUse__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _2851, xs);
});
Array__Length$Error_Error_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(xs)
{
    return xs.length;;
});
Array__Length$OverloadSignature_OverloadSignature_ = (function(xs)
{
    return xs.length;;
});
Array__Length$OverloadSignature___OverloadSignature___ = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Length$SymbolUse_SymbolUse_ = (function(xs)
{
    return xs.length;;
});
Array__Map$Error__Object_Error__Object_ = (function(f,xs)
{
    return Array__MapIndexed$Error__Object_Error__Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__Map$String_1_String___String_String___ = (function(f,xs)
{
    return Array__MapIndexed$String_1_String___String_String___((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$Error__Object_Error__Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Object_Object_(Array__Length$Error_Error_(xs));
    for (var i = 0; i <= (Array__Length$Error_Error_(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__MapIndexed$String_1_String___String_String___ = (function(f,xs)
{
    var ys = Array__ZeroCreate$String___String___(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__SortInPlaceBy$Completion__Int32_Completion__Int32 = (function(f,xs)
{
    return Array__SortInPlaceWith$Completion_Completion_((function(x)
    {
      return (function(y)
      {
        var _x = f(x);
        var _y = f(y);
        return (_x < _y ? -1 : (_x == _y ? 0 : 1));
      });
    }), xs);
});
Array__SortInPlaceWith$Completion_Completion_ = (function(f,xs)
{
    xs.sort(function($a,$b) { return f($a)($b); });;
});
Array__TryFind$Error_Error_ = (function(f,xs)
{
    return Array__TryPickIndexed$Error__Error_Error__Error_((function(_arg1)
    {
      return (function(x)
      {
        if (f(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
Array__TryFind$String_1String = (function(f,xs)
{
    return Array__TryPickIndexed$String_1_String_1String_String((function(_arg1)
    {
      return (function(x)
      {
        if (f(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
Array__TryPickIndexed$Error__Error_Error__Error_ = (function(f,xs)
{
    return Array__TryPickIndexedAux$Error__Error_Error__Error_(f, 0, xs);
});
Array__TryPickIndexed$String_1_String_1String_String = (function(f,xs)
{
    return Array__TryPickIndexedAux$String_1_String_1String_String(f, 0, xs);
});
Array__TryPickIndexedAux$Error__Error_Error__Error_ = (function(f,i,xs)
{
    if ((i == Array__Length$Error_Error_(xs))) 
    {
      return {Tag: 0.000000};
    }
    else
    {
      var result = f(i)(xs[i]);
      if ((result.Tag == 0.000000)) 
      {
        return Array__TryPickIndexedAux$Error__Error_Error__Error_(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    };
});
Array__TryPickIndexedAux$String_1_String_1String_String = (function(f,i,xs)
{
    if ((i == Array__Length$String_1String(xs))) 
    {
      return {Tag: 0.000000};
    }
    else
    {
      var result = f(i)(xs[i]);
      if ((result.Tag == 0.000000)) 
      {
        return Array__TryPickIndexedAux$String_1_String_1String_String(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    };
});
Array__ZeroCreate$Completion_Completion_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Int32_Int32 = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Object_Object_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String_1String = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
AutocompleteProvider__create$ = (function(unitVar0)
{
    var ignored0 = (ViewsHelpers__jq$(".panes").append(AutocompleteProvider__helptext));
    var _ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:autocomplete", (function(_arg4)
    {
      var _package = (((window.atom).packages).getLoadedPackage("autocomplete-plus"));
      var e = _package.mainModule.autocompleteManager.suggestionList.emitter;
      if (Option__IsNone$IEmitter_IEmitter_(AutocompleteProvider__emitter)) 
      {
        var handler = (function(flag)
        {
          var _4725;
          if (flag) 
          {
            _4725 = ((ViewsHelpers__jq$("li.selected").prev()).find(" span.word-container .word"));
          }
          else
          {
            _4725 = ((ViewsHelpers__jq$("li.selected").next()).find(" span.word-container .word"));
          };
          var selected = _4725;
          var _4735;
          if (((selected.length) > 0.000000)) 
          {
            _4735 = (selected.text());
          }
          else
          {
            if (flag) 
            {
              _4735 = (((ViewsHelpers__jq$(".suggestion-list-scroller .list-group li").last()).find(" span.word-container .word")).text());
            }
            else
            {
              _4735 = (((ViewsHelpers__jq$(".suggestion-list-scroller .list-group li").first()).find(" span.word-container .word")).text());
            };
          };
          var text = _4735;
          LanguageService__helptext$(text);
        });
        var __ignored0 = (e.on("did-select-next", (function(_arg1)
        {
          return handler(false);
        })));
        var ___ignored0 = (e.on("did-select-previous", (function(_arg2)
        {
          return handler(true);
        })));
        var ____ignored0 = (e.on("did-cancel", (function(_arg3)
        {
          var _____ignored0 = (AutocompleteProvider__helptext.fadeOut());
        })));
        AutocompleteProvider__emitter = {Tag: 1.000000, Value: e};
      }
      else
      {
        ;
      };
      atom.commands.dispatch(atom.views.getView(atom.workspace.getActiveTextEditor()),'autocomplete-plus:activate');;
      AutocompleteProvider__isForced = true;
    })));
    var __ignored0 = Events__on$((new EventType__Helptext()), (function(n)
    {
      var li = ViewsHelpers__jq$(".suggestion-list-scroller .list-group li.selected");
      var o = (li.offset());
      var list = ViewsHelpers__jq$("autocomplete-suggestion-list");
      if (((o != undefined) && ((li.length) > 0.000000))) 
      {
        (o.left) = (((o.left) + (list.width())) + 10.000000);
        null;
        (o.top) = (((o.top) - (li.height())) - 10.000000);
        null;
        var ___ignored0 = (AutocompleteProvider__helptext.offset(o));
        var folder = (function(acc)
        {
          return (function(_n)
          {
            return List__Append$OverloadSignature_OverloadSignature_(List__OfArray$OverloadSignature_OverloadSignature_(_n), acc);
          });
        });
        var state = List__Empty$OverloadSignature_OverloadSignature_();
        AutocompleteProvider__helptextList = (function(array)
        {
          return Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_(folder, state, array);
        })(n.Data.Overloads);
        AutocompleteProvider__helptextSetText$(0);
        var ____ignored0 = (AutocompleteProvider__helptext.show());
      }
      else
      {
        ;
      };
    }));
    var ___ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:helptext-next", (function(arg00_)
    {
      return AutocompleteProvider__nextHelptext$Object_Object_(arg00_);
    })));
    var ____ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:helptext-previous", (function(arg00_)
    {
      return AutocompleteProvider__previousHelptext$Object_Object_(arg00_);
    })));
    AutocompleteProvider__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var _____ignored0 = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return AutocompleteProvider__initialize$(ed);
    })));
    return (new Provider___ctor$(".source.fsharp", ".source.fsharp .string, .source.fsharp .comment", 1, true, (function(options)
    {
      return AutocompleteProvider__getSuggestion$(options);
    })));
});
AutocompleteProvider__createHelptext$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027type-tooltip tooltip\u0027\u003e\r\n            \u003cdiv class=\u0027tooltip-inner\u0027\u003eTEST\u003c/div\u003e\r\n        \u003c/div\u003e");
});
AutocompleteProvider__editDistance$ = (function(s,t)
{
    var patternInput = (new TupleInt32_Int32(s.length, t.length));
    var n = patternInput.Items[1.000000];
    var m = patternInput.Items[0.000000];
    var index = (function(i)
    {
      return (function(j)
      {
        return ((j * m) + i);
      });
    });
    var d = Array__Create$Int32_Int32(((m + 1) * (n + 1)), -1);
    var dist;
    dist = (function(_m)
    {
      return (function(_n)
      {
        var matchValue = (new TupleInt32_Int32(_m, _n));
        if ((matchValue.Items[1.000000] == 0)) 
        {
          var i = matchValue.Items[0.000000];
          return i;
        }
        else
        {
          if ((matchValue.Items[0.000000] == 0)) 
          {
            var j = matchValue.Items[1.000000];
            return j;
          }
          else
          {
            var _j = matchValue.Items[1.000000];
            var _i = matchValue.Items[0.000000];
            if ((d[index(_i)(_j)] != -1)) 
            {
              var __j = matchValue.Items[1.000000];
              var __i = matchValue.Items[0.000000];
              return d[index(__i)(__j)];
            }
            else
            {
              var ___j = matchValue.Items[1.000000];
              var ___i = matchValue.Items[0.000000];
              var _3877;
              if ((s.charAt((___i - 1)) == t.charAt((___j - 1)))) 
              {
                _3877 = dist((___i - 1))((___j - 1));
              }
              else
              {
                _3877 = AutocompleteProvider__min3$Int32_Int32((dist((___i - 1))(___j) + 1), (dist(___i)((___j - 1)) + 1), (dist((___i - 1))((___j - 1)) + 1));
              };
              var dval = _3877;
              d[index(___i)(___j)] = dval;
              null;
              return dval;
            };
          };
        };
      });
    });
    return dist(m)(n);
});
AutocompleteProvider__getSuggestion$ = (function(options)
{
    if ((((options.editor.buffer).file) != null)) 
    {
      var path = (((options.editor.buffer).file).path);
      var row = ((options.bufferPosition.row) + 1);
      var col = ((options.bufferPosition.column) + 1);
      var _3735;
      if (((options.prefix == ".") || (options.prefix == "="))) 
      {
        _3735 = "";
      }
      else
      {
        _3735 = options.prefix;
      };
      var prefix = _3735;
      return new Promise(function(resolve){(function(unitVar0)
      {
        if ((((AutocompleteProvider__isForced || Option__IsNone$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult)) || (prefix == "")) || (AutocompleteProvider__lastRow != row))) 
        {
          Events__once$Object__Unit_Object__Unit_((new EventType__Errors()), (function(result)
          {
            Events__once$CompletionResult__Unit_CompletionResult__Unit_((new EventType__Completion()), (function(_result)
            {
              AutocompleteProvider__lastRow = row;
              AutocompleteProvider__lastResult = {Tag: 1.000000, Value: _result};
              AutocompleteProvider__isForced = false;
              var r = Seq__ToArray$Object_Object_(Seq__Map$Completion__Object_Completion__Object_((function(t)
              {
                return (new Suggestion___ctor$(t.Name, prefix, t.Glyph, t.GlyphChar));
              }), Seq__SortBy$Completion__Int32_Completion__Int32((function(t)
              {
                return AutocompleteProvider__editDistance$(prefix, t.Name);
              }), Seq__Where$Completion_Completion_((function(t)
              {
                return (t.Name.toLowerCase().indexOf(prefix.toLowerCase()) >= 0);
              }), Seq__OfArray$Completion_Completion_(_result.Data)))));
              if ((Array__BoxedLength$(r) > 0)) 
              {
                LanguageService__helptext$(r[0].text);
              }
              else
              {
                ;
              };
              return resolve(r);
            }));
            return LanguageService__completion$(path, row, col);
          }));
          return LanguageService__parseEditor$(options.editor);
        }
        else
        {
          AutocompleteProvider__isForced = false;
          var r = Seq__ToArray$Object_Object_(Seq__Map$Completion__Object_Completion__Object_((function(t)
          {
            return (new Suggestion___ctor$(t.Name, prefix, t.Glyph, t.GlyphChar));
          }), Seq__SortBy$Completion__Int32_Completion__Int32((function(t)
          {
            return AutocompleteProvider__editDistance$(prefix, t.Name);
          }), Seq__Where$Completion_Completion_((function(t)
          {
            return (t.Name.toLowerCase().indexOf(prefix.toLowerCase()) >= 0);
          }), Seq__OfArray$Completion_Completion_(Option__GetValue$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult).Data)))));
          if ((Array__BoxedLength$(r) > 0)) 
          {
            LanguageService__helptext$(r[0].text);
          }
          else
          {
            ;
          };
          return resolve(r);
        };
      })()});
    }
    else
    {
      return new Promise(function(resolve){(function(unitVar0)
      {
        return resolve([]);
      })()});
    };
});
AutocompleteProvider__get_currentHelptext$ = (function()
{
    return 0;
});
AutocompleteProvider__get_emitter$ = (function()
{
    return {Tag: 0.000000};
});
AutocompleteProvider__get_helptext$ = (function()
{
    return AutocompleteProvider__createHelptext$();
});
AutocompleteProvider__get_helptextList$ = (function()
{
    return List__Empty$OverloadSignature_OverloadSignature_();
});
AutocompleteProvider__get_isForced$ = (function()
{
    return false;
});
AutocompleteProvider__get_lastResult$ = (function()
{
    return {Tag: 0.000000};
});
AutocompleteProvider__get_lastRow$ = (function()
{
    return 0;
});
AutocompleteProvider__get_subscription$ = (function()
{
    return {Tag: 0.000000};
});
AutocompleteProvider__helptextSetText$ = (function(i)
{
    AutocompleteProvider__currentHelptext = i;
    var el = ViewsHelpers__jq_$(((AutocompleteProvider__helptext[0]).firstElementChild));
    var text = List__Get$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList, i).Signature;
    var ignored0 = (el.empty());
    var _ignored0 = (el.append((function(n)
    {
      if ((List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList) > 1)) 
      {
        var clo1 = String__PrintFormatToString$("\u003cdiv class=\u0027tooltip-counter\u0027\u003e%d of %d\u003c/div\u003e");
        return ((function(arg10)
        {
          var clo2 = clo1(arg10);
          return (function(arg20)
          {
            return clo2(arg20);
          });
        })((i + 1))(List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList)) + n);
      }
      else
      {
        return n;
      };
    })(String__Replace$(String__Replace$(((ViewsHelpers__jq$("\u003cdiv/\u003e").text(text)).html()), "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e"))));
});
AutocompleteProvider__initialize$ = (function(editor)
{
    if (Option__IsSome$Disposable_Disposable_(AutocompleteProvider__subscription)) 
    {
      (Option__GetValue$Disposable_Disposable_(AutocompleteProvider__subscription).dispose());
    }
    else
    {
      ;
    };
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      AutocompleteProvider__subscription = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((editor.onDidChangeCursorPosition((function(_arg1)
      {
        var ignored0 = (AutocompleteProvider__helptext.fadeOut());
      }))));
    }
    else
    {
      ;
    };
});
AutocompleteProvider__min3$Int32_Int32 = (function(one,two,three)
{
    if (((one < two) && (one < three))) 
    {
      return one;
    }
    else
    {
      if ((two < three)) 
      {
        return two;
      }
      else
      {
        return three;
      };
    };
});
AutocompleteProvider__nextHelptext$Object_Object_ = (function(_arg1)
{
    if ((List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList) > 1)) 
    {
      if (((AutocompleteProvider__currentHelptext + 1) == List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList))) 
      {
        return AutocompleteProvider__helptextSetText$(0);
      }
      else
      {
        return AutocompleteProvider__helptextSetText$((AutocompleteProvider__currentHelptext + 1));
      };
    }
    else
    {
      ;
    };
});
AutocompleteProvider__previousHelptext$Object_Object_ = (function(_arg1)
{
    if ((List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList) > 1)) 
    {
      if (((AutocompleteProvider__currentHelptext + 1) == 1)) 
      {
        return AutocompleteProvider__helptextSetText$((List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList) - 1));
      }
      else
      {
        return AutocompleteProvider__helptextSetText$((AutocompleteProvider__currentHelptext - 1));
      };
    }
    else
    {
      ;
    };
});
CreateEnumerable_1_Completion___ctor$Completion_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Disposable___ctor$Disposable_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Object___ctor$Object_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_String___ctor$String = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
DateTime__ToLongTimeString$ = (function(dt,unitVar1)
{
    return dt['to'+"LocaleTime"+'String']();
});
DateTime__createUnsafe$ = (function(value,kind)
{
    var date = value == null ? new Date() : new Date(value);
    if (isNaN(date)) { throw "The string was not recognized as a valid DateTime." }
    date.kind = kind;
    return date;
});
DateTime__get_Now$ = (function(unitVar0)
{
    return DateTime__createUnsafe$(null, 2);
});
DeveloperMode__activate$ = (function(unitVar0)
{
    var s = Events__on$((new EventType__Log()), (function(tupledArg)
    {
      var name = tupledArg.Items[0.000000];
      var data = tupledArg.Items[1.000000];
      var copyOfStruct = DateTime__get_Now$();
      var timeString = String__Replace$(String__Replace$(DateTime__ToLongTimeString$(copyOfStruct), "\\", "."), "/", ".");
      var clo1 = String__PrintFormatToString$("[%s] %s: \n");
      var t = (((function(arg10)
      {
        var clo2 = clo1(arg10);
        return (function(arg20)
        {
          return clo2(arg20);
        });
      })(timeString)(name) + data) + "\n");
      Option__Iterate$IEditor_IEditor_((function(e)
      {
        var ignored0 = ((e.getBuffer()).append(t));
      }), DeveloperMode__editor);
      DeveloperMode__log = (DeveloperMode__log + t);
    }));
    DeveloperMode__subscriptions.push(s);
    var s2 = (((window.atom).commands).add("atom-workspace", "Debug:Show Log", (function(_arg2)
    {
      return ((((window.atom).workspace).open("Debug log", (new OpenEditorOptions___ctor$("right")))).done((function(ed)
      {
        DeveloperMode__editor = {Tag: 1.000000, Value: ed};
        var ignored0 = (ed.onDidDestroy((function(_arg1)
        {
          DeveloperMode__editor = {Tag: 0.000000};
        })));
        var _ignored0 = (ed.insertText(DeveloperMode__log));
        var view = (((window.atom).views).getView(ed));
        return view.component.setInputEnabled(false);
      })));
    })));
    DeveloperMode__subscriptions.push(s2);
});
DeveloperMode__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(DeveloperMode__subscriptions));
    return (DeveloperMode__subscriptions = []);
});
DeveloperMode__get_editor$ = (function()
{
    return {Tag: 0.000000};
});
DeveloperMode__get_log$ = (function()
{
    return "";
});
DeveloperMode__get_subscriptions$ = (function()
{
    return [];
});
ErrorLinterProvider__create$ = (function(unitVar0)
{
    var lint = (function(editor)
    {
      return ErrorLinterProvider__lint$(editor);
    });
    return (new Provider_1__ctor$(["source.fsharp"], "file", true, lint));
});
ErrorLinterProvider__lint$ = (function(editor)
{
    return new Promise(function(resolve){(function(unitVar0)
    {
      Events__once$ParseResult__Unit_ParseResult__Unit_((new EventType__Errors()), (function(n)
      {
        var map = (function(item)
        {
          var range = [[(item.StartLine - 1), (item.StartColumn - 1)], [(item.EndLine - 1), (item.EndColumn - 1)]];
          return (new LintResult___ctor$(item.Severity, String__Replace$(item.Message, "\n", ""), (((editor.buffer).file).path), range));
        });
        return resolve(Array__Map$Error__Object_Error__Object_(map, n.Data));
      }));
      return LanguageService__parseEditor$(editor);
    })()});
});
EventType__CompilerLocation = (function()
{
    var __this = this;
    __this.Tag = 11.000000;
    __this._CaseName = "CompilerLocation";
});
EventType__Completion = (function()
{
    var __this = this;
    __this.Tag = 5.000000;
    __this._CaseName = "Completion";
});
EventType__Errors = (function()
{
    var __this = this;
    __this.Tag = 4.000000;
    __this._CaseName = "Errors";
});
EventType__FindDecl = (function()
{
    var __this = this;
    __this.Tag = 9.000000;
    __this._CaseName = "FindDecl";
});
EventType__Helptext = (function()
{
    var __this = this;
    __this.Tag = 12.000000;
    __this._CaseName = "Helptext";
});
EventType__Log = (function()
{
    var __this = this;
    __this.Tag = 13.000000;
    __this._CaseName = "Log";
});
EventType__Project = (function()
{
    var __this = this;
    __this.Tag = 3.000000;
    __this._CaseName = "Project";
});
EventType__ServerError = (function()
{
    var __this = this;
    __this.Tag = 2.000000;
    __this._CaseName = "ServerError";
});
EventType__ServerStart = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "ServerStart";
});
EventType__ServerStop = (function()
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "ServerStop";
});
EventType__Status = (function()
{
    var __this = this;
    __this.Tag = 10.000000;
    __this._CaseName = "Status";
});
EventType__SymbolUse = (function()
{
    var __this = this;
    __this.Tag = 6.000000;
    __this._CaseName = "SymbolUse";
});
EventType__Toolbars = (function()
{
    var __this = this;
    __this.Tag = 8.000000;
    __this._CaseName = "Toolbars";
});
EventType__Tooltips = (function()
{
    var __this = this;
    __this.Tag = 7.000000;
    __this._CaseName = "Tooltips";
});
Events__emit$String_1String = (function(t,v)
{
    var name = Events__getName$(t);
    return (Events__emitter.emit(name, v));
});
Events__emitEmpty$String_1String = (function(t,s)
{
    var name = Events__getName$(t);
    var _283;
    return (Events__emitter.emit(name, _283));
});
Events__getName$ = (function(t)
{
    if ((t.Tag == 1.000000)) 
    {
      return "Fsharp_stop";
    }
    else
    {
      if ((t.Tag == 2.000000)) 
      {
        return "Fsharp_error";
      }
      else
      {
        if ((t.Tag == 4.000000)) 
        {
          return "Fsharp_errors";
        }
        else
        {
          if ((t.Tag == 5.000000)) 
          {
            return "Fsharp_completion";
          }
          else
          {
            if ((t.Tag == 6.000000)) 
            {
              return "Fsharp_symboluse";
            }
            else
            {
              if ((t.Tag == 7.000000)) 
              {
                return "FSharp_tooltips";
              }
              else
              {
                if ((t.Tag == 8.000000)) 
                {
                  return "FSharp_toolbars";
                }
                else
                {
                  if ((t.Tag == 9.000000)) 
                  {
                    return "FSharp_finddecl";
                  }
                  else
                  {
                    if ((t.Tag == 3.000000)) 
                    {
                      return "Fsharp_project";
                    }
                    else
                    {
                      if ((t.Tag == 10.000000)) 
                      {
                        return "Fsharp_status";
                      }
                      else
                      {
                        if ((t.Tag == 11.000000)) 
                        {
                          return "Fsharp_compiler";
                        }
                        else
                        {
                          if ((t.Tag == 12.000000)) 
                          {
                            return "Fsharp_helptext";
                          }
                          else
                          {
                            if ((t.Tag == 13.000000)) 
                            {
                              return "Fsharp_log";
                            }
                            else
                            {
                              return "Fsharp_start";
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
});
Events__get_emitter$ = (function()
{
    return new Emitter();
});
Events__get_last$ = (function()
{
    return "";
});
Events__log$String_1_String_1String_String = (function(name,o)
{
    var debug = (((window.atom).config).get("ionide-fsharp.DeveloperMode"));
    if (debug) 
    {
      return (Events__emitter.emit("Fsharp_log", (new TupleString_String(name, o))));
    }
    else
    {
      ;
    };
});
Events__on$ = (function(t,func)
{
    var name = Events__getName$(t);
    return (Events__emitter.on(name, func));
});
Events__once$CompletionResult__Unit_CompletionResult__Unit_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((Events__emitter.on(name, (function(o)
    {
      Option__Iterate$Disposable_Disposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    }))));
});
Events__once$FindDeclarationResult__OpenPromise_FindDeclarationResult__OpenPromise_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((Events__emitter.on(name, (function(o)
    {
      Option__Iterate$Disposable_Disposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    }))));
});
Events__once$Object__Unit_Object__Unit_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((Events__emitter.on(name, (function(o)
    {
      Option__Iterate$Disposable_Disposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    }))));
});
Events__once$ParseResult__Unit_ParseResult__Unit_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((Events__emitter.on(name, (function(o)
    {
      Option__Iterate$Disposable_Disposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    }))));
});
Events__parseAndEmit$CompilerLocationResult_CompilerLocationResult_ = (function(t,s)
{
    return Option__Iterate$CompilerLocationResult_CompilerLocationResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$CompilerLocationResult_CompilerLocationResult_(s));
});
Events__parseAndEmit$CompletionResult_CompletionResult_ = (function(t,s)
{
    return Option__Iterate$CompletionResult_CompletionResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$CompletionResult_CompletionResult_(s));
});
Events__parseAndEmit$HelptextResult_HelptextResult_ = (function(t,s)
{
    return Option__Iterate$HelptextResult_HelptextResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$HelptextResult_HelptextResult_(s));
});
Events__parseAndEmit$ParseResult_ParseResult_ = (function(t,s)
{
    return Option__Iterate$ParseResult_ParseResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$ParseResult_ParseResult_(s));
});
Events__parseAndEmit$SymbolUseResult_SymbolUseResult_ = (function(t,s)
{
    return Option__Iterate$SymbolUseResult_SymbolUseResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$SymbolUseResult_SymbolUseResult_(s));
});
Events__parseAndEmit$TooltipResult_TooltipResult_ = (function(t,s)
{
    return Option__Iterate$TooltipResult_TooltipResult_((function(o)
    {
      var name = Events__getName$(t);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$TooltipResult_TooltipResult_(s));
});
Events__tryParse$CompilerLocationResult_CompilerLocationResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
Events__tryParse$CompletionResult_CompletionResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
Events__tryParse$HelptextResult_HelptextResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
Events__tryParse$ParseResult_ParseResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
Events__tryParse$SymbolUseResult_SymbolUseResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
Events__tryParse$TooltipResult_TooltipResult_ = (function(s)
{
    try
    {
      var res = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((window.JSON).parse(s)));
      Events__last = "";
      return res;
    }
    catch(ex){
      try
      {
        var s_ = (Events__last + s);
        var _res = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((window.JSON).parse(s_)));
        Events__last = "";
        return _res;
      }
      catch(_ex){
        Events__last = (Events__last + s);
        return {Tag: 0.000000};
      };
    };
});
FSharpIDE___ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.subscriptions = [];
});
FSharpIDE__activate$ = (function(x,state)
{
    var show = (((window.atom).config).get("ionide-fsharp.ShowQuickInfoPanel"));
    var highlight = (((window.atom).config).get("ionide-fsharp.ShowUseHighlights"));
    var debug = (((window.atom).config).get("ionide-fsharp.DeveloperMode"));
    if (debug) 
    {
      DeveloperMode__activate$();
    }
    else
    {
      ;
    };
    LanguageService__start$();
    Parser__activate$();
    TooltipHandler__activate$();
    if (show) 
    {
      ToolbarHandler__activate$();
    }
    else
    {
      ;
    };
    FindDeclaration__activate$();
    if (highlight) 
    {
      HighlightUse__activate$();
    }
    else
    {
      ;
    };
    FormatHandler__activate$();
    var s = (((window.atom).config).onDidChange("ionide-fsharp.ShowQuickInfoPanel", (function(n)
    {
      if (n.newValue) 
      {
        return ToolbarHandler__activate$();
      }
      else
      {
        return ToolbarHandler__deactivate$();
      };
    })));
    var s2 = (((window.atom).config).onDidChange("ionide-fsharp.ShowUseHighlights", (function(n)
    {
      if (n.newValue) 
      {
        return HighlightUse__activate$();
      }
      else
      {
        return HighlightUse__deactivate$();
      };
    })));
    var s3 = (((window.atom).config).onDidChange("ionide-fsharp.DeveloperMode", (function(n)
    {
      if (n.newValue) 
      {
        return DeveloperMode__activate$();
      }
      else
      {
        return DeveloperMode__deactivate$();
      };
    })));
    x.subscriptions.push(s);
    x.subscriptions.push(s2);
    x.subscriptions.push(s3);
});
FSharpIDE__deactivate$ = (function(x,unitVar1)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(x.subscriptions));
    (x.subscriptions = []);
    var show = (((window.atom).config).get("ionide-fsharp.ShowQuickInfoPanel"));
    Parser__deactivate$();
    TooltipHandler__deactivate$();
    if (show) 
    {
      ToolbarHandler__deactivate$();
    }
    else
    {
      ;
    };
    FindDeclaration__deactivate$();
    HighlightUse__deactivate$();
    LanguageService__stop$();
    DeveloperMode__activate$();
});
FSharpIDE__getSuggestion$ = (function(x,options)
{
    return AutocompleteProvider__getSuggestion$(options);
});
FSharpIDE__provide$ = (function(x,unitVar1)
{
    return AutocompleteProvider__create$();
});
FSharpIDE__provideErrors$ = (function(x,unitVar1)
{
    return ErrorLinterProvider__create$();
});
FSharpString__Concat$ = (function(sep,strings)
{
    return Seq__ToArray$String_1String(strings).join(sep);
});
FSharpString__Initialize$ = (function(count,initializer)
{
    if ((count < 0)) 
    {
      throw ("String length must be non-negative");
      null;
    }
    else
    {
      ;
    };
    return FSharpString__Concat$("", Seq__OfArray$String_1String(Array__Initialize$String_1String(count, initializer)));
});
FSharpString__Replicate$ = (function(count,str)
{
    if ((count < 0)) 
    {
      throw ("String length must be non-negative");
      null;
    }
    else
    {
      ;
    };
    var _str = FSharpString__emptyIfNull$(str);
    return FSharpString__Initialize$(count, (function(_arg1)
    {
      return _str;
    }));
});
FSharpString__emptyIfNull$ = (function(str)
{
    return str==null?"":str;;
});
FindDeclaration__activate$ = (function(unitVar0)
{
    var ignored0 = (window.setTimeout((function(_arg1)
    {
      var _ignored0 = (((window.atom).commands).add("atom-text-editor", "symbols-view:go-to-declaration", (function(e)
      {
        return FindDeclaration__handle$Object_Object_(e);
      })));
    }), 500.000000));
    var _ignored0 = (window.setTimeout((function(_arg2)
    {
      var __ignored0 = (((window.atom).commands).add("atom-text-editor", "symbols-view:return-from-declaration", (function(arg00_)
      {
        return FindDeclaration__goBack$();
      })));
    }), 500.000000));
});
FindDeclaration__deactivate$ = (function(unitVar0)
{
    ;
});
FindDeclaration__get_lastFile$ = (function()
{
    return {Tag: 0.000000};
});
FindDeclaration__get_lastPosition$ = (function()
{
    return {Tag: 0.000000};
});
FindDeclaration__goBack$ = (function(unitVar0)
{
    return Option__Iterate$String_1String((function(lf)
    {
      return Option__Iterate$IPoint_IPoint_((function(lp)
      {
        var initialColumn = (lp.column);
        var ignored0 = (((window.atom).workspace).open(lf, (new OpenOptions___ctor$((lp.row), initialColumn))));
      }), FindDeclaration__lastPosition);
    }), FindDeclaration__lastFile);
});
FindDeclaration__handle$Object_Object_ = (function(e)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var name = (((editor.buffer).file).path);
    var position = (editor.getCursorBufferPosition());
    FindDeclaration__lastFile = {Tag: 1.000000, Value: name};
    FindDeclaration__lastPosition = {Tag: 1.000000, Value: position};
    LanguageService__findDeclaration$(name, ((position.row) + 1), ((position.column) + 1));
    return Events__once$FindDeclarationResult__OpenPromise_FindDeclarationResult__OpenPromise_((new EventType__FindDecl()), (function(data)
    {
      return FindDeclaration__openDec$(data);
    }));
});
FindDeclaration__openDec$ = (function(data)
{
    var initialColumn = (data.Data.Column - 1);
    return (((window.atom).workspace).open(data.Data.File, (new OpenOptions___ctor$((data.Data.Line - 1), initialColumn))));
});
FormatHandler__activate$ = (function(unitVar0)
{
    var ignored0 = (window.setTimeout((function(_arg1)
    {
      var _ignored0 = (((window.atom).commands).add("atom-text-editor", "editor:format-document", (function(arg00_)
      {
        return FormatHandler__format$();
      })));
    }), 500.000000));
});
FormatHandler__format$ = (function(unitVar0)
{
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/ionide-fsharp/bin-fantomas/fantomas.exe");
    var editor = (((window.atom).workspace).getActiveTextEditor());
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      var p = (((editor.buffer).file).path);
      var _arguments = List__ToArray$String_1String(Seq__ToList$String_1String(Seq__Delay$String_1String((function(unitVar)
      {
        return Seq__Append$String_1String(Seq__Singleton$String_1String(p), Seq__Delay$String_1String((function(_unitVar)
        {
          return Seq__Append$String_1String(Seq__Singleton$String_1String("--indent"), Seq__Delay$String_1String((function(__unitVar)
          {
            return Seq__Append$String_1String(Seq__Singleton$String_1String((((window.atom).config).get("editor.tabLength")).toString()), Seq__Delay$String_1String((function(___unitVar)
            {
              return Seq__Append$String_1String(Seq__Singleton$String_1String("--pageWidth"), Seq__Delay$String_1String((function(____unitVar)
              {
                return Seq__Append$String_1String(Seq__Singleton$String_1String((((window.atom).config).get("editor.preferredLineLength")).toString()), Seq__Delay$String_1String((function(_____unitVar)
                {
                  var _3029;
                  if ((((window.atom).config).get("ionide-fsharp.FormatDocument.SemicolonAtEndOfLine"))) 
                  {
                    _3029 = Seq__Singleton$String_1String("--semicolonEOL");
                  }
                  else
                  {
                    _3029 = Seq__Empty$String_1String();
                  };
                  return Seq__Append$String_1String(_3029, Seq__Delay$String_1String((function(______unitVar)
                  {
                    var _3101;
                    if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceBeforeArgument"))) 
                    {
                      _3101 = Seq__Singleton$String_1String("--noSpaceBeforeArgument");
                    }
                    else
                    {
                      _3101 = Seq__Empty$String_1String();
                    };
                    return Seq__Append$String_1String(_3101, Seq__Delay$String_1String((function(_______unitVar)
                    {
                      var _3114;
                      if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceBeforeColon"))) 
                      {
                        _3114 = Seq__Singleton$String_1String("--noSpaceBeforeColon");
                      }
                      else
                      {
                        _3114 = Seq__Empty$String_1String();
                      };
                      return Seq__Append$String_1String(_3114, Seq__Delay$String_1String((function(________unitVar)
                      {
                        var _3127;
                        if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAfterComma"))) 
                        {
                          _3127 = Seq__Singleton$String_1String("--noSpaceAfterComma");
                        }
                        else
                        {
                          _3127 = Seq__Empty$String_1String();
                        };
                        return Seq__Append$String_1String(_3127, Seq__Delay$String_1String((function(_________unitVar)
                        {
                          var _3140;
                          if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAfterSemiColon"))) 
                          {
                            _3140 = Seq__Singleton$String_1String("--noSpaceAfterSemiColon");
                          }
                          else
                          {
                            _3140 = Seq__Empty$String_1String();
                          };
                          return Seq__Append$String_1String(_3140, Seq__Delay$String_1String((function(__________unitVar)
                          {
                            var _3153;
                            if ((((window.atom).config).get("ionide-fsharp.FormatDocument.IndentOnTryWith"))) 
                            {
                              _3153 = Seq__Singleton$String_1String("--indentOnTryWith");
                            }
                            else
                            {
                              _3153 = Seq__Empty$String_1String();
                            };
                            return Seq__Append$String_1String(_3153, Seq__Delay$String_1String((function(___________unitVar)
                            {
                              var _3166;
                              if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAroundDelimiter"))) 
                              {
                                _3166 = Seq__Singleton$String_1String("--noSpaceAroundDelimiter");
                              }
                              else
                              {
                                _3166 = Seq__Empty$String_1String();
                              };
                              return Seq__Append$String_1String(_3166, Seq__Delay$String_1String((function(____________unitVar)
                              {
                                var _3179;
                                if ((((window.atom).config).get("ionide-fsharp.FormatDocument.ReorderOpenDeclaration"))) 
                                {
                                  _3179 = Seq__Singleton$String_1String("--reorderOpenDeclaration");
                                }
                                else
                                {
                                  _3179 = Seq__Empty$String_1String();
                                };
                                return Seq__Append$String_1String(_3179, Seq__Delay$String_1String((function(_____________unitVar)
                                {
                                  if ((((window.atom).config).get("ionide-fsharp.FormatDocument.StrictMode"))) 
                                  {
                                    return Seq__Singleton$String_1String("--strictMode");
                                  }
                                  else
                                  {
                                    return Seq__Empty$String_1String();
                                  };
                                })));
                              })));
                            })));
                          })));
                        })));
                      })));
                    })));
                  })));
                })));
              })));
            })));
          })));
        })));
      }))));
      var child = Process__exec$(location, "mono", _arguments);
      var ignored0 = ((child.stdout).on("data", (function(n)
      {
        return ((window.console).error(n.toString()));
      })));
      var _ignored0 = ((child.stderr).on("data", (function(n)
      {
        return ((window.console).error(n.toString()));
      })));
    }
    else
    {
      ;
    };
});
HighlightUse__activate$ = (function(unitVar0)
{
    HighlightUse__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var ignored0 = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return HighlightUse__initialize$(ed);
    })));
    var tb = Events__on$((new EventType__SymbolUse()), (function(data)
    {
      return HighlightUse__showHighlight$(data);
    }));
    return HighlightUse__subscriptions.push(tb);
});
HighlightUse__askForSymbolUse$ = (function(editor)
{
    HighlightUse__clearHighlight$();
    if ((((editor.buffer).file) != null)) 
    {
      var pos = HighlightUse__getCursor$(editor);
      var path = (((editor.buffer).file).path);
      LanguageService__symbolUse$(path, (pos.row + 1), (pos.column + 1));
    }
    else
    {
      ;
    };
});
HighlightUse__clearHighlight$ = (function(unitVar0)
{
    Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_((function(m)
    {
      var ignored0 = (m.destroy());
    }), HighlightUse__marked);
    HighlightUse__marked = Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_();
});
HighlightUse__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(HighlightUse__subscriptions));
    (HighlightUse__subscriptions = []);
    return Option__Iterate$Disposable_Disposable_((function(cs)
    {
      return (cs.dispose());
    }), HighlightUse__cursorSubscription);
});
HighlightUse__getCursor$ = (function(editor)
{
    var bufferPt = (editor.getCursorBufferPosition());
    return (new position___ctor$((bufferPt.row), (bufferPt.column)));
});
HighlightUse__get_cursorSubscription$ = (function()
{
    return {Tag: 0.000000};
});
HighlightUse__get_ed$ = (function()
{
    return ({});
});
HighlightUse__get_marked$ = (function()
{
    return Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_();
});
HighlightUse__get_subscriptions$ = (function()
{
    return [];
});
HighlightUse__initialize$ = (function(editor)
{
    HighlightUse__remove$();
    HighlightUse__clearHighlight$();
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      HighlightUse__ed = editor;
      HighlightUse__cursorSubscription = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(ViewsHelpers__OnCursorStopMoving$Object_Object_(editor, 300.000000, (function(n)
      {
        return HighlightUse__askForSymbolUse$(HighlightUse__ed);
      })));
    }
    else
    {
      ;
    };
});
HighlightUse__remove$ = (function(unitVar0)
{
    return Option__Iterate$Disposable_Disposable_((function(cs)
    {
      (cs.dispose());
      HighlightUse__cursorSubscription = {Tag: 0.000000};
    }), HighlightUse__cursorSubscription);
});
HighlightUse__showHighlight$ = (function(data)
{
    HighlightUse__clearHighlight$();
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var action = (function(item)
    {
      if ((editor["markBufferRange"] != undefined)) 
      {
        var marker = (editor.markBufferRange([[(item.StartLine - 1), (item.StartColumn - 1)], [(item.EndLine - 1), (item.EndColumn - 1)]]));
        var _2825;
        if (item.IsFromDefinition) 
        {
          _2825 = "highlight-symboluse-declaration";
        }
        else
        {
          _2825 = "highlight-symboluse";
        };
        var cls = _2825;
        HighlightUse__marked = Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_([marker], HighlightUse__marked);
        editor.decorateMarker(marker, {type: 'highlight', class: cls});
      }
      else
      {
        ;
      };
    });
    Array__Iterate$SymbolUse_SymbolUse_(action, data.Data.Uses);
});
LanguageService__ask$ = (function(msg_)
{
    Events__log$String_1_String_1String_String("REQUEST", msg_);
    var msg = String__Replace$(msg_, "﻿", "");
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      return ((c.stdin).write(msg, LanguageService__encoding));
    }), LanguageService__service.Child);
});
LanguageService__completion$ = (function(fn,line,col)
{
    var clo1 = String__PrintFormatToString$("completion \"%s\" %d %d filter\n");
    var str = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          return clo3(arg30);
        });
      });
    })(fn)(line)(col);
    return LanguageService__ask$(str);
});
LanguageService__findDeclaration$ = (function(fn,line,col)
{
    var clo1 = String__PrintFormatToString$("finddecl \"%s\" %d %d\n");
    var str = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          return clo3(arg30);
        });
      });
    })(fn)(line)(col);
    return LanguageService__ask$(str);
});
LanguageService__get_encoding$ = (function()
{
    return "utf-8";
});
LanguageService__get_last$ = (function()
{
    return (new EventType__ServerError());
});
LanguageService__get_service$ = (function()
{
    return (new T___ctor$((new State__Off()), (new State__Off()), {Tag: 0.000000}));
});
LanguageService__get_toolbarFlag$ = (function()
{
    return false;
});
LanguageService__helptext$ = (function(s)
{
    var clo1 = String__PrintFormatToString$("helptext %s\n");
    var str = (function(arg10)
    {
      return clo1(arg10);
    })(s);
    return LanguageService__ask$(str);
});
LanguageService__parse$ = (function(path,text)
{
    var str = (((("parse \"" + path) + "\"\n") + text) + "\n\u003c\u003cEOF\u003e\u003e\n");
    return LanguageService__ask$(str);
});
LanguageService__parseEditor$ = (function(editor)
{
    if ((ViewsHelpers__isFSharpEditor$(editor) && (((editor.buffer).file) != null))) 
    {
      var path = (((editor.buffer).file).path);
      var text = (editor.getText());
      return LanguageService__parse$(path, text);
    }
    else
    {
      ;
    };
});
LanguageService__parseResponse$ = (function(data)
{
    if ((data != null)) 
    {
      var response = String__SplitWithoutOptions$(data.toString(), ["\n"]);
      return Seq__Iterate$String_1String((function(s)
      {
        if ((s.indexOf("\"Kind\":\"error\"") >= 0)) 
        {
          Events__emitEmpty$String_1String((new EventType__ServerError()), s);
          LanguageService__last = (new EventType__ServerError());
        }
        else
        {
          if ((s.indexOf("\"Kind\":\"project\"") >= 0)) 
          {
            Events__emitEmpty$String_1String((new EventType__Project()), s);
            LanguageService__last = (new EventType__Project());
          }
          else
          {
            if ((s.indexOf("\"Kind\":\"errors\"") >= 0)) 
            {
              Events__parseAndEmit$ParseResult_ParseResult_((new EventType__Errors()), s);
              LanguageService__last = (new EventType__Errors());
            }
            else
            {
              if ((s.indexOf("\"Kind\":\"completion\"") >= 0)) 
              {
                Events__parseAndEmit$CompletionResult_CompletionResult_((new EventType__Completion()), s);
                LanguageService__last = (new EventType__Completion());
              }
              else
              {
                if ((s.indexOf("\"Kind\":\"symboluse\"") >= 0)) 
                {
                  Events__parseAndEmit$SymbolUseResult_SymbolUseResult_((new EventType__SymbolUse()), s);
                  LanguageService__last = (new EventType__SymbolUse());
                }
                else
                {
                  if ((s.indexOf("\"Kind\":\"helptext\"") >= 0)) 
                  {
                    Events__parseAndEmit$HelptextResult_HelptextResult_((new EventType__Helptext()), s);
                    LanguageService__last = (new EventType__Helptext());
                  }
                  else
                  {
                    if ((s.indexOf("\"Kind\":\"tooltip\"") >= 0)) 
                    {
                      if (LanguageService__toolbarFlag) 
                      {
                        Events__parseAndEmit$TooltipResult_TooltipResult_((new EventType__Toolbars()), s);
                        LanguageService__last = (new EventType__Toolbars());
                      }
                      else
                      {
                        Events__parseAndEmit$TooltipResult_TooltipResult_((new EventType__Tooltips()), s);
                        LanguageService__last = (new EventType__Tooltips());
                      };
                    }
                    else
                    {
                      if ((s.indexOf("\"Kind\":\"finddecl\"") >= 0)) 
                      {
                        Events__parseAndEmit$TooltipResult_TooltipResult_((new EventType__FindDecl()), s);
                        LanguageService__last = (new EventType__FindDecl());
                      }
                      else
                      {
                        if ((s.indexOf("\"Kind\":\"compilerlocation\"") >= 0)) 
                        {
                          Events__parseAndEmit$CompilerLocationResult_CompilerLocationResult_((new EventType__CompilerLocation()), s);
                          LanguageService__last = (new EventType__CompilerLocation());
                        }
                        else
                        {
                          if ((s.indexOf("\"Kind\":\"info\"") >= 0)) 
                          {
                            ;
                          }
                          else
                          {
                            if ((s != "")) 
                            {
                              if ((LanguageService__last.Tag == 4.000000)) 
                              {
                                return Events__parseAndEmit$ParseResult_ParseResult_((new EventType__Errors()), s);
                              }
                              else
                              {
                                if ((LanguageService__last.Tag == 5.000000)) 
                                {
                                  return Events__parseAndEmit$CompletionResult_CompletionResult_((new EventType__Completion()), s);
                                }
                                else
                                {
                                  ;
                                };
                              };
                            }
                            else
                            {
                              ;
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      }), Seq__OfArray$String_1String(response));
    }
    else
    {
      ;
    };
});
LanguageService__project$ = (function(s)
{
    var clo1 = String__PrintFormatToString$("project \"%s\"\n");
    var str = (function(arg10)
    {
      return clo1(arg10);
    })(s);
    return LanguageService__ask$(str);
});
LanguageService__send$ = (function(msg_)
{
    var msg = String__Replace$(msg_, "﻿", "");
    Events__log$String_1_String_1String_String("REQUEST", msg_);
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var ignored0 = ((c.stdin).write(msg, LanguageService__encoding));
    }), LanguageService__service.Child);
});
LanguageService__start$ = (function(unitVar0)
{
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/ionide-fsharp/bin/fsautocomplete.exe");
    var child = Process__spawnSimple$(location, Process__fromPath$("mono"));
    ((child.stdin).setEncoding(LanguageService__encoding));
    LanguageService__service = (new T___ctor$((new State__On()), LanguageService__service.State, {Tag: 1.000000, Value: child}));
    Events__emitEmpty$String_1String((new EventType__ServerStart()), "");
    LanguageService__send$("outputmode json\n");
    LanguageService__send$("compilerlocation\n");
    var ignored0 = ((child.stdout).on("readable", (function(x)
    {
      return LanguageService__parseResponse$(((child.stdout).read(x)));
    })));
    var _ignored0 = ((child.stderr).on("data", (function(n)
    {
      return ((window.console).error(n.toString()));
    })));
});
LanguageService__stop$ = (function(unitVar0)
{
    Option__Iterate$ChildProcess_ChildProcess_((function(n)
    {
      return (n.kill("SIGKILL"));
    }), LanguageService__service.Child);
    LanguageService__service = (new T___ctor$((new State__Off()), LanguageService__service.State, {Tag: 0.000000}));
    Events__emitEmpty$String_1String((new EventType__ServerStop()), "");
});
LanguageService__symbolUse$ = (function(fn,line,col)
{
    var clo1 = String__PrintFormatToString$("symboluse \"%s\" %d %d\n");
    var str = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          return clo3(arg30);
        });
      });
    })(fn)(line)(col);
    return LanguageService__ask$(str);
});
LanguageService__toolbar$ = (function(fn,line,col)
{
    LanguageService__toolbarFlag = true;
    var clo1 = String__PrintFormatToString$("tooltip \"%s\" %d %d\n");
    var str = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          return clo3(arg30);
        });
      });
    })(fn)(line)(col);
    return LanguageService__ask$(str);
});
LanguageService__tooltip$ = (function(fn,line,col)
{
    LanguageService__toolbarFlag = false;
    var clo1 = String__PrintFormatToString$("tooltip \"%s\" %d %d\n");
    var str = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          return clo3(arg30);
        });
      });
    })(fn)(line)(col);
    return LanguageService__ask$(str);
});
Lazy_1_Object__Create$Object_ = (function(f)
{
    return (new Lazy_1_Object___ctor$Object_(null, f));
});
Lazy_1_Object___ctor$Object_ = (function(value,factory)
{
    var __this = this;
    {};
    __this.factory = factory;
    __this.isCreated = false;
    __this.value_24 = value;
});
Lazy_1_Object__get_Value$Object_ = (function(x,unitVar1)
{
    if ((!x.isCreated)) 
    {
      var _3238;
      x.value_24 = x.factory(_3238);
      x.isCreated = true;
    }
    else
    {
      ;
    };
    return x.value_24;
});
LintResult___ctor$ = (function(type,text,filePath,range)
{
    var __this = this;
    __this.type = type;
    __this.text = text;
    __this.filePath = filePath;
    __this.range = range;
});
List__Append$OverloadSignature_OverloadSignature_ = (function(xs,ys)
{
    return List__Fold$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_OverloadSignature__ConsOverloadSignature_(x, acc));
      });
    }), ys, List__Reverse$OverloadSignature_OverloadSignature_(xs));
});
List__CreateCons$String_1String = (function(x,xs)
{
    return (new list_1_String__ConsString(x, xs));
});
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__Empty$OverloadSignature_OverloadSignature_ = (function()
{
    return (new list_1_OverloadSignature__NilOverloadSignature_());
});
List__Empty$String_1String = (function()
{
    return (new list_1_String__NilString());
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
});
List__FindIndexed$OverloadSignature_OverloadSignature_ = (function(f,xs)
{
    var matchValue = List__TryFindIndexed$OverloadSignature_OverloadSignature_(f, xs);
    if ((matchValue.Tag == 1.000000)) 
    {
      var x = Option__GetValue$OverloadSignature_OverloadSignature_(matchValue);
      return x;
    }
    else
    {
      throw ("List did not contain any matching elements");
      return null;
    };
});
List__Fold$OverloadSignature__Int32_OverloadSignature__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$OverloadSignature__Int32_OverloadSignature__Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_ = (function(f,seed,xs)
{
    return List__FoldIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$String_1_Int32_String_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$String_1_Int32_String_Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$String_1_list_1_String_String_list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexed$String_1_list_1_String_String_list_1_String_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$OverloadSignature__Int32_OverloadSignature__Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__OverloadSignature_Int32_OverloadSignature_(f, 0, seed, xs);
});
List__FoldIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_OverloadSignature__OverloadSignature_list_1_OverloadSignature__OverloadSignature_(f, 0, seed, xs);
});
List__FoldIndexed$String_1_Int32_String_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__String_1Int32_String(f, 0, seed, xs);
});
List__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__String_1Unit__String(f, 0, seed, xs);
});
List__FoldIndexed$String_1_list_1_String_String_list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_String__String_1list_1_String__String(f, 0, seed, xs);
});
List__FoldIndexedAux$Int32__OverloadSignature_Int32_OverloadSignature_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__OverloadSignature_Int32_OverloadSignature_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Int32__String_1Int32_String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__String_1Int32_String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__String_1Unit__String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__String_1Unit__String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_OverloadSignature__OverloadSignature_list_1_OverloadSignature__OverloadSignature_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_OverloadSignature__OverloadSignature_list_1_OverloadSignature__OverloadSignature_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_String__String_1list_1_String__String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_String__String_1list_1_String__String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Get$OverloadSignature_OverloadSignature_ = (function(xs,n)
{
    return List__FindIndexed$OverloadSignature_OverloadSignature_((function(i)
    {
      return (function(_arg1)
      {
        return (n == i);
      });
    }), xs);
});
List__Head$OverloadSignature_OverloadSignature_ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Head$String_1String = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Head$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__IterateIndexed$String_1String = (function(f,xs)
{
    var _3482;
    return List__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _3482, xs);
});
List__Length$OverloadSignature_OverloadSignature_ = (function(xs)
{
    return List__Fold$OverloadSignature__Int32_OverloadSignature__Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__Length$String_1String = (function(xs)
{
    return List__Fold$String_1_Int32_String_Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__OfArray$OverloadSignature_OverloadSignature_ = (function(xs)
{
    return Array__FoldBack$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_((function(x)
    {
      return (function(acc)
      {
        return (new list_1_OverloadSignature__ConsOverloadSignature_(x, acc));
      });
    }), xs, (new list_1_OverloadSignature__NilOverloadSignature_()));
});
List__Reverse$OverloadSignature_OverloadSignature_ = (function(xs)
{
    return List__Fold$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_OverloadSignature__ConsOverloadSignature_(x, acc));
      });
    }), (new list_1_OverloadSignature__NilOverloadSignature_()), xs);
});
List__Reverse$String_1String = (function(xs)
{
    return List__Fold$String_1_list_1_String_String_list_1_String_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_String__ConsString(x, acc));
      });
    }), (new list_1_String__NilString()), xs);
});
List__Tail$String_1String = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Tail$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__ToArray$String_1String = (function(xs)
{
    var size = List__Length$String_1String(xs);
    var ys = Array__ZeroCreate$String_1String(size);
    List__IterateIndexed$String_1String((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
List__TryFindIndexed$OverloadSignature_OverloadSignature_ = (function(f,xs)
{
    return List__TryPickIndexed$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_((function(i)
    {
      return (function(x)
      {
        if (f(i)(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
List__TryPickIndexed$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_ = (function(f,xs)
{
    return List__TryPickIndexedAux$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_(f, 0, xs);
});
List__TryPickIndexedAux$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_ = (function(f,i,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      var result = f(i)(x);
      if ((result.Tag == 0.000000)) 
      {
        return List__TryPickIndexedAux$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    }
    else
    {
      return {Tag: 0.000000};
    };
});
OpenEditorOptions___ctor$ = (function(split)
{
    var __this = this;
    __this.split = split;
});
OpenOptions___ctor$ = (function(initialLine,initialColumn)
{
    var __this = this;
    __this.initialLine = initialLine;
    __this.initialColumn = initialColumn;
});
Option__GetValue$Boolean_Boolean = (function(option)
{
    return option.Value;;
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$CompilerLocationResult_CompilerLocationResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$CompletionResult_CompletionResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Coordinates_Coordinates_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Disposable_Disposable_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Element_Element_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Error_Error_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_String_FSharpList_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpOption_1_String_FSharpOption_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$HTMLElement_HTMLElement_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$HelptextResult_HelptextResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEditor_IEditor_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IPoint_IPoint_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$JQuery_JQuery_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$NodeList_NodeList_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$OverloadSignature_OverloadSignature_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$ParseResult_ParseResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$String_1String = (function(option)
{
    return option.Value;;
});
Option__GetValue$SymbolUseResult_SymbolUseResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Timer_Timer_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$TooltipResult_TooltipResult_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__Boolean_Tuple_2_String__Boolean_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__FSharpOption_1_String_Tuple_2_String__FSharpOption_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsNone$CompletionResult_CompletionResult_ = (function(option)
{
    return (!Option__IsSome$CompletionResult_CompletionResult_(option));
});
Option__IsNone$Error_Error_ = (function(option)
{
    return (!Option__IsSome$Error_Error_(option));
});
Option__IsNone$IEmitter_IEmitter_ = (function(option)
{
    return (!Option__IsSome$IEmitter_IEmitter_(option));
});
Option__IsSome$Boolean_Boolean = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$CompletionResult_CompletionResult_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Disposable_Disposable_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Error_Error_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_String_FSharpList_1_String_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpOption_1_String_FSharpOption_1_String_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEmitter_IEmitter_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__Iterate$ChildProcess_ChildProcess_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$ChildProcess_ChildProcess_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$CompilerLocationResult_CompilerLocationResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$CompilerLocationResult_CompilerLocationResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$CompletionResult_CompletionResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$CompletionResult_CompletionResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Disposable_Disposable_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Disposable_Disposable_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Element_Element_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Element_Element_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$HelptextResult_HelptextResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$HelptextResult_HelptextResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IEditor_IEditor_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IEditor_IEditor_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IPoint_IPoint_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IPoint_IPoint_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$JQuery_JQuery_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$JQuery_JQuery_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$ParseResult_ParseResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$ParseResult_ParseResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$String_1String = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$String_1String(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$SymbolUseResult_SymbolUseResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$SymbolUseResult_SymbolUseResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Timer_Timer_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Timer_Timer_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$TooltipResult_TooltipResult_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$TooltipResult_TooltipResult_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Map$Element__HTMLElement_Element__HTMLElement_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Element_Element_(inp);
      return {Tag: 1.000000, Value: f(x)};
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$HTMLElement_HTMLElement_(inp);
      return {Tag: 1.000000, Value: f(x)};
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Option__Map$NodeList__Coordinates_NodeList__Coordinates_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$NodeList_NodeList_(inp);
      return {Tag: 1.000000, Value: f(x)};
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Option__Map$NodeList__Element_NodeList__Element_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$NodeList_NodeList_(inp);
      return {Tag: 1.000000, Value: f(x)};
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Option__Map$NodeList__JQuery_NodeList__JQuery_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$NodeList_NodeList_(inp);
      return {Tag: 1.000000, Value: f(x)};
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
PanelOptions___ctor$ = (function(item,visible,priority)
{
    var __this = this;
    __this.item = item;
    __this.visible = visible;
    __this.priority = priority;
});
Parser__activate$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    Parser__parseProjectForEditor$(editor);
    LanguageService__parseEditor$(editor);
    return Parser__subscriptions.push((((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      Parser__parseProjectForEditor$(ed);
      return Option__Iterate$Disposable_Disposable_((function(h_)
      {
        return (h_.dispose());
      }), Parser__h);
    }))));
});
Parser__deactivate$ = (function(unitVar0)
{
    Events__emit$String_1String((new EventType__Status()), "Off");
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(Parser__subscriptions));
    (Parser__subscriptions = []);
});
Parser__get_h$ = (function()
{
    return {Tag: 0.000000};
});
Parser__get_subscriptions$ = (function()
{
    return [];
});
Parser__parseProjectForEditor$ = (function(editor)
{
    if (((((((editor != undefined) && (editor["buffer"] != undefined)) && ((editor.buffer) != null)) && ((editor.buffer)["file"] != undefined)) && (((editor.buffer).file) != null)) && ViewsHelpers__isFSharpEditor$(editor))) 
    {
      var findFsProj;
      findFsProj = (function(dir)
      {
        if (((fs.lstatSync(dir)).isDirectory())) 
        {
          var files = (fs.readdirSync(dir));
          var projfile = Array__TryFind$String_1String((function(s)
          {
            return String__EndsWith$(s, ".fsproj");
          }), files);
          if ((projfile.Tag == 1.000000)) 
          {
            var p = Option__GetValue$String_1String(projfile);
            return (function(arg0)
            {
              return {Tag: 1.000000, Value: arg0};
            })(((dir + (path.sep)) + p));
          }
          else
          {
            var _1355;
            if ((dir.lastIndexOf((path.sep)) > 0)) 
            {
              _1355 = dir.substring(0, 0 + dir.lastIndexOf((path.sep)));
            }
            else
            {
              _1355 = "";
            };
            var parent = _1355;
            if ((parent==null)||(parent=="")) 
            {
              return {Tag: 0.000000};
            }
            else
            {
              return findFsProj(parent);
            };
          };
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
      var p = (((editor.buffer).file).path);
      if ((p != undefined)) 
      {
        return Option__Iterate$String_1String((function(s)
        {
          return LanguageService__project$(s);
        }), findFsProj((path.dirname(p))));
      }
      else
      {
        return Events__emit$String_1String((new EventType__Status()), "Waiting for F# file");
      };
    }
    else
    {
      ;
    };
});
Process__exec$ = (function(location,linuxCmd,cmd)
{
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _3519;
    if (Process__isWin$()) 
    {
      _3519 = (child_process.execFile(location, cmd, options, (function(_arg3)
      {
        return (function(_arg2)
        {
          return (function(_arg1)
          {
            return ((window.console).log("aaa"));
          });
        });
      })));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd, List__Empty$String___String___()))));
      _3519 = (child_process.execFile(linuxCmd, prms, options, (function(_arg6)
      {
        return (function(_arg5)
        {
          return (function(_arg4)
          {
            ;
          });
        });
      })));
    };
    var procs = _3519;
    return procs;
});
Process__fromPath$ = (function(name)
{
    if (Process__isWin$()) 
    {
      return name;
    }
    else
    {
      var path = (((window.atom).config).get("ionide-fsharp.MonoPath"));
      return ((path + "/") + name);
    };
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__spawnSimple$ = (function(location,linuxCmd)
{
    if (Process__isWin$()) 
    {
      return (child_process.spawn(location));
    }
    else
    {
      return (child_process.spawn(linuxCmd, [location]));
    };
});
Provider_1__ctor$ = (function(grammarScopes,scope,lintOnFly,lint)
{
    var __this = this;
    __this.grammarScopes = grammarScopes;
    __this.scope = scope;
    __this.lintOnFly = lintOnFly;
    __this.lint = lint;
});
Provider___ctor$ = (function(selector,disableForSelector,inclusionPriority,excludeLowerPriority,getSuggestions)
{
    var __this = this;
    __this.selector = selector;
    __this.disableForSelector = disableForSelector;
    __this.inclusionPriority = inclusionPriority;
    __this.excludeLowerPriority = excludeLowerPriority;
    __this.getSuggestions = getSuggestions;
});
ResizeArray_1_Object__get_Count$Object_ = (function(xs,unitVar1)
{
    return xs.length;
});
ResizeArray_1_Object__get_Item$Object_ = (function(xs,index)
{
    return xs[index];
});
ResizeArray__ToSeq$Disposable_Disposable_ = (function(xs)
{
    return Seq__Unfold$Int32__Disposable_Int32_Disposable_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleDisposable__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__Append$String_1String = (function(xs,ys)
{
    return Seq__Delay$String_1String((function(unitVar0)
    {
      var enums = (new TupleLazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(Lazy_1_Object__Create$Object_((function(unitVar)
      {
        return Seq__Enumerator$String_1String(xs);
      })), Lazy_1_Object__Create$Object_((function(unitVar)
      {
        return Seq__Enumerator$String_1String(ys);
      }))));
      return Seq__Unfold$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String_1Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String((function(_arg1)
      {
        var next = _arg1.Items[1.000000];
        var _enums = _arg1;
        var curr = _arg1.Items[0.000000];
        if (Lazy_1_Object__get_Value$Object_(curr).MoveNext()) 
        {
          var _next = _arg1.Items[1.000000];
          var __enums = _arg1;
          var _curr = _arg1.Items[0.000000];
          return {Tag: 1.000000, Value: (new TupleString_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(Lazy_1_Object__get_Value$Object_(_curr).get_Current(), __enums))};
        }
        else
        {
          var __next = _arg1.Items[1.000000];
          var __curr = _arg1.Items[0.000000];
          if (Lazy_1_Object__get_Value$Object_(__next).MoveNext()) 
          {
            var ___next = _arg1.Items[1.000000];
            var ___curr = _arg1.Items[0.000000];
            return {Tag: 1.000000, Value: (new TupleString_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(Lazy_1_Object__get_Value$Object_(___next).get_Current(), (new TupleLazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(___next, ___curr))))};
          }
          else
          {
            return {Tag: 0.000000};
          };
        };
      }), enums);
    }));
});
Seq__Delay$Completion_Completion_ = (function(f)
{
    return Seq__FromFactory$Completion_Completion_((function(unitVar0)
    {
      var _4108;
      return Seq__Enumerator$Completion_Completion_(f(_4108));
    }));
});
Seq__Delay$Object_Object_ = (function(f)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var _4279;
      return Seq__Enumerator$Object_Object_(f(_4279));
    }));
});
Seq__Delay$String_1String = (function(f)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var _3201;
      return Seq__Enumerator$String_1String(f(_3201));
    }));
});
Seq__Empty$String_1String = (function()
{
    return Seq__Unfold$Boolean__String_1Boolean_String((function(_arg1)
    {
      return {Tag: 0.000000};
    }), false);
});
Seq__Enumerator$Completion_Completion_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Object_Object_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String_1String = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Filter$Completion_Completion_ = (function(f,xs)
{
    var trySkipToNext;
    trySkipToNext = (function(_enum)
    {
      if (_enum.MoveNext()) 
      {
        if (f(_enum.get_Current())) 
        {
          return {Tag: 1.000000, Value: (new TupleCompletion__IEnumerator_1_Completion_(_enum.get_Current(), _enum))};
        }
        else
        {
          return trySkipToNext(_enum);
        };
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    return Seq__Delay$Completion_Completion_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_Completion__Completion_IEnumerator_1_Completion__Completion_(trySkipToNext, Seq__Enumerator$Completion_Completion_(xs));
    }));
});
Seq__Fold$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__Fold$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$String_1_Unit_String_Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$Completion__Unit_Completion__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Completion_Unit__Completion_(f, seed, Seq__Enumerator$Completion_Completion_(xs));
});
Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_(f, seed, Seq__Enumerator$Disposable_Disposable_(xs));
});
Seq__FoldIndexed$Object__Unit_Object__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Object_Unit__Object_(f, seed, Seq__Enumerator$Object_Object_(xs));
});
Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String_1Unit__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Completion_Unit__Completion_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Object_Unit__Object_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__String_1Unit__String = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__String___Unit__String___ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$Completion_Completion_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Completion___ctor$Completion_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _4036;
        return __.factory(_4036);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Disposable_Disposable_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Disposable___ctor$Disposable_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _94;
        return __.factory(_94);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Object_Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Object___ctor$Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _4271;
        return __.factory(_4271);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String_1String = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String___ctor$String(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _1123;
        return __.factory(_1123);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _618;
        return __.factory(_618);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Disposable_Disposable_ = (function(f,xs)
{
    var _102;
    return Seq__Fold$Disposable__Unit_Disposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _102, xs);
});
Seq__Iterate$String_1String = (function(f,xs)
{
    var _1131;
    return Seq__Fold$String_1_Unit_String_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1131, xs);
});
Seq__IterateIndexed$Completion_Completion_ = (function(f,xs)
{
    var _4136;
    return Seq__FoldIndexed$Completion__Unit_Completion__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _4136, xs);
});
Seq__IterateIndexed$Object_Object_ = (function(f,xs)
{
    var _4293;
    return Seq__FoldIndexed$Object__Unit_Object__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _4293, xs);
});
Seq__IterateIndexed$String_1String = (function(f,xs)
{
    var _1939;
    return Seq__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1939, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _638;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _638, xs);
});
Seq__Map$Completion__Object_Completion__Object_ = (function(f,xs)
{
    return Seq__Delay$Object_Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_Completion__Object_IEnumerator_1_Completion__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleObject__IEnumerator_1_Completion_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$Completion_Completion_(xs));
    }));
});
Seq__OfArray$Completion_Completion_ = (function(xs)
{
    return Seq__Unfold$Int32__Completion_Int32_Completion_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleCompletion__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$String_1String = (function(xs)
{
    return Seq__Unfold$Int32__String_1Int32_String((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString_Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$String___String___ = (function(xs)
{
    return Seq__Unfold$Int32__String___Int32_String___((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString____Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfList$String_1String = (function(xs)
{
    return Seq__Unfold$FSharpList_1_String__String_1FSharpList_1_String__String((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$String_1String(_arg1);
        var x = List__Head$String_1String(_arg1);
        return {Tag: 1.000000, Value: (new TupleString_FSharpList_1_String_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__OfList$String___String___ = (function(xs)
{
    return Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$String___String___(_arg1);
        var x = List__Head$String___String___(_arg1);
        return {Tag: 1.000000, Value: (new TupleString____FSharpList_1_String___(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__Singleton$String_1String = (function(x)
{
    return Seq__Unfold$FSharpOption_1_String__String_1FSharpOption_1_String__String((function(_arg1)
    {
      if ((_arg1.Tag == 0.000000)) 
      {
        return {Tag: 0.000000};
      }
      else
      {
        var _x = Option__GetValue$String_1String(_arg1);
        return {Tag: 1.000000, Value: (new TupleString_FSharpOption_1_String_(_x, {Tag: 0.000000}))};
      };
    }), {Tag: 1.000000, Value: x});
});
Seq__SortBy$Completion__Int32_Completion__Int32 = (function(f,xs)
{
    var ys = Seq__ToArray$Completion_Completion_(xs);
    Array__SortInPlaceBy$Completion__Int32_Completion__Int32(f, ys);
    return Seq__OfArray$Completion_Completion_(ys);
});
Seq__ToArray$Completion_Completion_ = (function(xs)
{
    var ys = Array__ZeroCreate$Completion_Completion_(0);
    Seq__IterateIndexed$Completion_Completion_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$Object_Object_ = (function(xs)
{
    var ys = Array__ZeroCreate$Object_Object_(0);
    Seq__IterateIndexed$Object_Object_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$String_1String = (function(xs)
{
    var ys = Array__ZeroCreate$String_1String(0);
    Seq__IterateIndexed$String_1String((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$String___String___ = (function(xs)
{
    var ys = Array__ZeroCreate$String___String___(0);
    Seq__IterateIndexed$String___String___((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToList$String_1String = (function(xs)
{
    return List__Reverse$String_1String(Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$String_1String(x, acc);
      });
    }), List__Empty$String_1String(), xs));
});
Seq__Unfold$Boolean__String_1Boolean_String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Boolean__String___ctor$Boolean_String(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Boolean_Boolean(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__Boolean_Tuple_2_String__Boolean_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__Boolean_Tuple_2_String__Boolean_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Boolean_Boolean(__.acc) && (function()
          {
            var _3076;
            return next(_3076);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$FSharpList_1_String__String_1FSharpList_1_String__String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_String__String___ctor$FSharpList_1_String__String(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_String_FSharpList_1_String_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_String_FSharpList_1_String_(__.acc) && (function()
          {
            var _2017;
            return next(_2017);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_String___FSharpList_1_String___(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_String___FSharpList_1_String___(__.acc) && (function()
          {
            var _3610;
            return next(_3610);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$FSharpOption_1_String__String_1FSharpOption_1_String__String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpOption_1_String__String___ctor$FSharpOption_1_String__String(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpOption_1_String_FSharpOption_1_String_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__FSharpOption_1_String_Tuple_2_String__FSharpOption_1_String_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__FSharpOption_1_String_Tuple_2_String__FSharpOption_1_String_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpOption_1_String_FSharpOption_1_String_(__.acc) && (function()
          {
            var _2964;
            return next(_2964);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$IEnumerator_1_Completion__Completion_IEnumerator_1_Completion__Completion_ = (function(f,seed)
{
    return Seq__FromFactory$Completion_Completion_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_(__.acc) && (function()
          {
            var _4085;
            return next(_4085);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$IEnumerator_1_Completion__Object_IEnumerator_1_Completion__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Completion__Object___ctor$IEnumerator_1_Completion__Object_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_(__.acc) && (function()
          {
            var _4249;
            return next(_4249);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Completion_Int32_Completion_ = (function(f,seed)
{
    return Seq__FromFactory$Completion_Completion_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Completion___ctor$Int32_Completion_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _4014;
            return next(_4014);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Disposable_Int32_Disposable_ = (function(f,seed)
{
    return Seq__FromFactory$Disposable_Disposable_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _72;
            return next(_72);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String_1Int32_String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String___ctor$Int32_String(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _1101;
            return next(_1101);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String___Int32_String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _596;
            return next(_596);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String_1Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String___ctor$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_(__.acc) && (function()
          {
            var _3311;
            return next(_3311);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Where$Completion_Completion_ = (function(f,xs)
{
    return Seq__Filter$Completion_Completion_(f, xs);
});
State__Off = (function()
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Off";
});
State__On = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "On";
});
String__EndsWith$ = (function(s,search)
{
    var offset = (s.length - search.length);
    var index = s.indexOf(search, offset);
    return ((index != -1) && (index == offset));
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
});
String__Replace$ = (function(s,search,replace)
{
    var splits = s.split(search);
    return splits.join(replace);
});
String__SplitWithoutOptions$ = (function(s,delimiters)
{
    var folder = (function(inputs)
    {
      return (function(delimiter)
      {
        return Array__Concat$String_1String(Seq__OfArray$String___String___(Array__Map$String_1_String___String_String___((function(inp)
        {
          return inp.split(delimiter);
        }), inputs)));
      });
    });
    var state = [s];
    return (function(array)
    {
      return Array__Fold$String_1_String___String_String___(folder, state, array);
    })(delimiters);
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
Suggestion___ctor$ = (function(text,replacementPrefix,rightLabel,type)
{
    var __this = this;
    __this.text = text;
    __this.replacementPrefix = replacementPrefix;
    __this.rightLabel = rightLabel;
    __this.type = type;
});
T___ctor$ = (function(State,PreviousState,Child)
{
    var __this = this;
    __this.State = State;
    __this.PreviousState = PreviousState;
    __this.Child = Child;
});
ToolbarHandler__activate$ = (function(unitVar0)
{
    var t = ToolbarHandler__createToolbar$();
    var priority = 100;
    var b = (((window.atom).workspace).addBottomPanel((new PanelOptions___ctor$(t, true, priority))));
    ToolbarHandler__bar = b;
    ToolbarHandler__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var ignored0 = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return ToolbarHandler__initialize$(ed);
    })));
    var tp = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return ToolbarHandler__handleEditorChange$(b, ed);
    })));
    ToolbarHandler__subscriptions.push(tp);
    var tb = Events__on$((new EventType__Toolbars()), (function(o)
    {
      return ToolbarHandler__cursorHandler$(o);
    }));
    ToolbarHandler__subscriptions.push(tb);
});
ToolbarHandler__askForToolbar$ = (function(editor)
{
    if ((((editor.buffer).file) != null)) 
    {
      var tb = ViewsHelpers__jq$(".toolbar-inner");
      var ignored0 = (tb.empty());
      var pos = ToolbarHandler__getCursor$(editor);
      var path = (((editor.buffer).file).path);
      LanguageService__toolbar$(path, (pos.row + 1), (pos.column + 1));
    }
    else
    {
      ;
    };
});
ToolbarHandler__createToolbar$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027type-toolbar panel-bottom type-pane\u0027 id=\u0027pane\u0027 style=\u0027height: 20px\u0027\u003e\r\n            \u003cdiv class=\u0027toolbar-inner\u0027\u003e\u003c/div\u003e\r\n        \u003c/div\u003e");
});
ToolbarHandler__cursorHandler$ = (function(o)
{
    var tb = ViewsHelpers__jq$(".toolbar-inner");
    var ignored0 = (tb.empty());
    var folder = (function(acc)
    {
      return (function(n)
      {
        return List__Append$OverloadSignature_OverloadSignature_(List__OfArray$OverloadSignature_OverloadSignature_(n), acc);
      });
    });
    var state = List__Empty$OverloadSignature_OverloadSignature_();
    var data = List__Head$OverloadSignature_OverloadSignature_((function(array)
    {
      return Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_(folder, state, array);
    })(o.Data)).Signature;
    if ((data != "No tooltip information")) 
    {
      var _ignored0 = (tb.append(ToolbarHandler__format_data$(data)));
    }
    else
    {
      ;
    };
});
ToolbarHandler__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(ToolbarHandler__subscriptions));
    (ToolbarHandler__subscriptions = []);
    Option__Iterate$Disposable_Disposable_((function(cs)
    {
      return (cs.dispose());
    }), ToolbarHandler__cursorSubscription);
    (ToolbarHandler__bar.destroy());
});
ToolbarHandler__format_data$ = (function(tinfo)
{
    return ("\u003e " + String__SplitWithoutOptions$(tinfo.trim(), ["\n"])[0]);
});
ToolbarHandler__getCursor$ = (function(editor)
{
    var bufferPt = (editor.getCursorBufferPosition());
    return (new position___ctor$((bufferPt.row), (bufferPt.column)));
});
ToolbarHandler__get_bar$ = (function()
{
    return ({});
});
ToolbarHandler__get_cursorSubscription$ = (function()
{
    return {Tag: 0.000000};
});
ToolbarHandler__get_ed$ = (function()
{
    return ({});
});
ToolbarHandler__get_subscriptions$ = (function()
{
    return [];
});
ToolbarHandler__handleEditorChange$ = (function(panel,editor)
{
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      (panel.show());
      return (ToolbarHandler__bar.show());
    }
    else
    {
      (panel.hide());
      return (ToolbarHandler__bar.hide());
    };
});
ToolbarHandler__initialize$ = (function(editor)
{
    ToolbarHandler__remove$();
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      ToolbarHandler__ed = editor;
      ToolbarHandler__cursorSubscription = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(ViewsHelpers__OnCursorStopMoving$Object_Object_(editor, 300.000000, (function(n)
      {
        return ToolbarHandler__askForToolbar$(ToolbarHandler__ed);
      })));
    }
    else
    {
      ;
    };
});
ToolbarHandler__remove$ = (function(unitVar0)
{
    return Option__Iterate$Disposable_Disposable_((function(cs)
    {
      (cs.dispose());
      ToolbarHandler__cursorSubscription = {Tag: 0.000000};
    }), ToolbarHandler__cursorSubscription);
});
TooltipHandler__activate$ = (function(unitVar0)
{
    TooltipHandler__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var ignored0 = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return TooltipHandler__initialize$(ed);
    })));
    var tt = Events__on$((new EventType__Tooltips()), (function(o)
    {
      return TooltipHandler__mouseHandler$(o);
    }));
    TooltipHandler__subscriptions.push(tt);
    var err = Events__on$((new EventType__Errors()), (function(o)
    {
      return TooltipHandler__errorHandler$(o);
    }));
    TooltipHandler__subscriptions.push(err);
});
TooltipHandler__clearTimer$ = (function(unitVar0)
{
    var ignored0 = (TooltipHandler__tooltip.fadeOut());
    Option__Iterate$Timer_Timer_((function(arg00)
    {
      return (window.clearTimeout(arg00));
    }), TooltipHandler__timer);
    TooltipHandler__timer = {Tag: 0.000000};
});
TooltipHandler__createTooltip$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027type-tooltip tooltip\u0027\u003e\r\n            \u003cdiv class=\u0027tooltip-inner\u0027\u003e\u003c/div\u003e\r\n        \u003c/div\u003e");
});
TooltipHandler__dashes$ = (function(s1,s2)
{
    var _1879;
    if ((s2.length > s1.length)) 
    {
      _1879 = s2.length;
    }
    else
    {
      _1879 = s1.length;
    };
    return FSharpString__Concat$("", Seq__OfList$String_1String(List__CreateCons$String_1String("\n", List__CreateCons$String_1String(FSharpString__Replicate$(_1879, "-"), List__CreateCons$String_1String("\n", List__Empty$String_1String())))));
});
TooltipHandler__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(TooltipHandler__subscriptions));
    (TooltipHandler__subscriptions = []);
});
TooltipHandler__errorHandler$ = (function(o)
{
    TooltipHandler__errorArr = o.Data;
});
TooltipHandler__getPosition$ = (function(e,editor)
{
    var bufferPt = ViewsHelpers__bufferPositionFromMouseEvent$(e, editor);
    return (new position___ctor$((bufferPt.row), (bufferPt.column)));
});
TooltipHandler__get_ed$ = (function()
{
    return ({});
});
TooltipHandler__get_errorArr$ = (function()
{
    return [];
});
TooltipHandler__get_event$ = (function()
{
    return {Tag: 0.000000};
});
TooltipHandler__get_lastMousePosition$ = (function()
{
    return (new position___ctor$(0.000000, 0.000000));
});
TooltipHandler__get_subscriptions$ = (function()
{
    return [];
});
TooltipHandler__get_timer$ = (function()
{
    return {Tag: 0.000000};
});
TooltipHandler__get_tooltip$ = (function()
{
    return TooltipHandler__createTooltip$();
});
TooltipHandler__initialize$ = (function(editor)
{
    TooltipHandler__remove$();
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      TooltipHandler__ed = editor;
      return Option__Iterate$Element_Element_((function(n)
      {
        return TooltipHandler__reg$(editor, 500.000000, n);
      }), Option__Map$NodeList__Element_NodeList__Element_((function(n)
      {
        return (n[0]);
      }), ViewsHelpers__getElementsByClass$Element_Element_(".scroll-view", (((window.atom).views).getView(editor)))));
    }
    else
    {
      ;
    };
});
TooltipHandler__matchError$ = (function(pos,err)
{
    return ((((err.StartLine <= (pos.row)) && (err.EndLine >= (pos.row))) && (err.StartColumn <= (pos.column))) && (err.EndColumn >= (pos.column)));
});
TooltipHandler__mouseHandler$ = (function(o)
{
    return Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_((function(e)
    {
      return (function(n)
      {
        if (((ViewsHelpers__jq$("body /deep/ span.fsharp:hover").length) > 0.000000)) 
        {
          var bufpos = ViewsHelpers__bufferPositionFromMouseEvent$(e, TooltipHandler__ed);
          var err = Array__TryFind$Error_Error_((function(_err)
          {
            return TooltipHandler__matchError$(bufpos, _err);
          }), TooltipHandler__errorArr);
          var n_ = ViewsHelpers__jq_$(n);
          var ignored0 = (n_.empty());
          var errTip = (function(s)
          {
            if (Option__IsNone$Error_Error_(err)) 
            {
              return "";
            }
            else
            {
              var patternInput = (new TupleError__String(Option__GetValue$Error_Error_(err), Option__GetValue$Error_Error_(err).Message));
              var _err = patternInput.Items[0.000000];
              var emsg = patternInput.Items[1.000000];
              return FSharpString__Concat$("", Seq__OfList$String_1String(List__CreateCons$String_1String(TooltipHandler__dashes$(s, emsg), List__CreateCons$String_1String(":: Error - ", List__CreateCons$String_1String(_err.Subcategory, List__CreateCons$String_1String(" ::\n", List__CreateCons$String_1String(emsg, List__Empty$String_1String())))))));
            };
          });
          var folder = (function(acc)
          {
            return (function(_n)
            {
              return List__Append$OverloadSignature_OverloadSignature_(List__OfArray$OverloadSignature_OverloadSignature_(_n), acc);
            });
          });
          var state = List__Empty$OverloadSignature_OverloadSignature_();
          var data = List__Head$OverloadSignature_OverloadSignature_((function(array)
          {
            return Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_(folder, state, array);
          })(o.Data)).Signature;
          var _2210;
          if ((data != "No tooltip information")) 
          {
            _2210 = ((ViewsHelpers__jq$("\u003cdiv/\u003e").text(data)).append(errTip(data)));
          }
          else
          {
            _2210 = (ViewsHelpers__jq$("\u003cdiv/\u003e").text(errTip("")));
          };
          var _ignored0 = (n_.append(String__Replace$(String__Replace$((_2210.html()), "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e")));
          var j = ViewsHelpers__jq$(".panes");
          var x = ((e.pageX) - ((j.offset()).left));
          var y = ((e.pageY) - ((j.offset()).top));
          var __ignored0 = (TooltipHandler__tooltip.css("left", x));
          var ___ignored0 = (TooltipHandler__tooltip.css("top", (y - 20.000000)));
          var ____ignored0 = (TooltipHandler__tooltip.fadeTo(300.000000, 60.000000));
        }
        else
        {
          ;
        };
      })(((TooltipHandler__tooltip[0]).firstElementChild));
    }), TooltipHandler__event);
});
TooltipHandler__reg$ = (function(editor,time,element)
{
    var ignored0 = (ViewsHelpers__jq$(".panes").append(TooltipHandler__tooltip));
    return (function(n)
    {
      var _ignored0 = (n.mousemove((function(e)
      {
        var pos = TooltipHandler__getPosition$(e, editor);
        if ((position__GeneratedCompareTo(pos)(TooltipHandler__lastMousePosition) == 0)) 
        {
          ;
        }
        else
        {
          TooltipHandler__clearTimer$();
          TooltipHandler__lastMousePosition = pos;
          TooltipHandler__timer = {Tag: 1.000000, Value: (window.setTimeout((function(_arg1)
          {
            if ((((editor.buffer).file) != null)) 
            {
              var path = (((editor.buffer).file).path);
              TooltipHandler__event = {Tag: 1.000000, Value: e};
              return LanguageService__tooltip$(path, (pos.row + 1), (pos.column + 1));
            }
            else
            {
              ;
            };
          }), time))};
        };
      })));
      var __ignored0 = (n.mouseleave((function(_arg2)
      {
        return TooltipHandler__clearTimer$();
      })));
      var ___ignored0 = (n.scroll((function(_arg3)
      {
        return TooltipHandler__clearTimer$();
      })));
    })(ViewsHelpers__jq_$(element));
});
TooltipHandler__remove$ = (function(unitVar0)
{
    if ((((TooltipHandler__ed != undefined) && (TooltipHandler__ed["getGrammar"] != undefined)) && (((TooltipHandler__ed.getGrammar()).name) == "F#"))) 
    {
      return Option__Iterate$JQuery_JQuery_((function(n)
      {
        var ignored0 = (n.unbind());
      }), Option__Map$NodeList__JQuery_NodeList__JQuery_((function(n)
      {
        return ViewsHelpers__jq_$((n[0]));
      }), ViewsHelpers__getElementsByClass$Element_Element_(".scroll-view", (((window.atom).views).getView(TooltipHandler__ed)))));
    }
    else
    {
      ;
    };
});
TupleCompletion__IEnumerator_1_Completion_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleCompletion__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleDisposable__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleError__String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleLazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleObject__IEnumerator_1_Completion_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_FSharpList_1_String_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_FSharpOption_1_String_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____FSharpList_1_String___ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_Boolean__String___ctor$Boolean_String = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpList_1_String__String___ctor$FSharpList_1_String__String = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpOption_1_String__String___ctor$FSharpOption_1_String__String = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_Completion__Object___ctor$IEnumerator_1_Completion__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Completion___ctor$Int32_Completion_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String___ctor$Int32_String = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String___ctor$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
ViewsHelpers__OnCursorStopMoving$Object_Object_ = (function(editor,timeout,callback)
{
    var timer = {contents: {Tag: 0.000000}};
    return (editor.onDidChangeCursorPosition((function(n)
    {
      return ViewsHelpers__stopMovingHandler$Object_Object_(timer, timeout, callback, n);
    })));
});
ViewsHelpers__bufferPositionFromMouseEvent$ = (function(e,editor)
{
    return (editor.bufferPositionForScreenPosition((editor.screenPositionForPixelPosition((function(n)
    {
      var t = n;
      t.top = (t.top + ((editor.displayBuffer).getScrollTop()));
      null;
      t.left = (t.left + ((editor.displayBuffer).getScrollLeft()));
      null;
      return t;
    })(ViewsHelpers__pixelPositionFromMouseEvent$(e)(editor))))));
});
ViewsHelpers__clearTimer$Timer_Timer_ = (function(timer)
{
    Option__Iterate$Timer_Timer_((function(arg00)
    {
      return (window.clearTimeout(arg00));
    }), timer.contents);
    timer.contents = {Tag: 0.000000};
});
ViewsHelpers__getElementsByClass$Element_Element_ = (function(cls,e)
{
    var prop = "rootElement";
    return Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_((function(n)
    {
      return (n.querySelectorAll(cls));
    }), Option__Map$Element__HTMLElement_Element__HTMLElement_((function(o)
    {
      return (o[prop]);
    }), (function(n)
    {
      if ((n != undefined)) 
      {
        return {Tag: 1.000000, Value: n};
      }
      else
      {
        return {Tag: 0.000000};
      };
    })(e)));
});
ViewsHelpers__isFSharpEditor$ = (function(editor)
{
    return (((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"));
});
ViewsHelpers__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
ViewsHelpers__jq_$ = (function(selector)
{
    return ((window.$)(selector));
});
ViewsHelpers__pixelPositionFromMouseEvent$ = (function(e)
{
    return (function(x)
    {
      return (function(n_)
      {
        if ((n_.Tag == 0.000000)) 
        {
          return (new cords___ctor$(0.000000, 0.000000));
        }
        else
        {
          var n = Option__GetValue$Coordinates_Coordinates_(n_);
          return (new cords___ctor$(((e.clientY) - n.top), ((e.clientX) - n.left)));
        };
      })((function(_x)
      {
        return Option__Map$NodeList__Coordinates_NodeList__Coordinates_((function(n)
        {
          return (n[0]).getBoundingClientRect();
        }), (function(__x)
        {
          return ViewsHelpers__getElementsByClass$Element_Element_(".lines", atom.views.getView(__x));
        })(_x));
      })(x));
    });
});
ViewsHelpers__stopMovingHandler$Object_Object_ = (function(timer,timeout,callback,n)
{
    ViewsHelpers__clearTimer$Timer_Timer_(timer);
    timer.contents = {Tag: 1.000000, Value: (window.setTimeout((function(_arg1)
    {
      return callback(n);
    }), timeout))};
});
cords___ctor$ = (function(top,left)
{
    var __this = this;
    __this.top = top;
    __this.left = left;
});
list_1_OverloadSignature__ConsOverloadSignature_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_OverloadSignature__NilOverloadSignature_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_String__ConsString = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String__NilString = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_String____ConsString___ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String____NilString___ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
position__GeneratedCompareTo = (function(a)
{
    return (function(b)
    {
      var diff = (a.row < b.row ? -1 : (a.row == b.row ? 0 : 1));
      if ((diff != 0)) 
      {
        return diff;
      }
      else
      {
        var _diff = (a.column < b.column ? -1 : (a.column == b.column ? 0 : 1));
        if ((_diff != 0)) 
        {
          return _diff;
        }
        else
        {
          return 0;
        };
      };
    });
});
position___ctor$ = (function(row,column)
{
    var __this = this;
    __this.row = row;
    __this.column = column;
});
Events__emitter = Events__get_emitter$();
Parser__subscriptions = Parser__get_subscriptions$();
TooltipHandler__subscriptions = TooltipHandler__get_subscriptions$();
ToolbarHandler__subscriptions = ToolbarHandler__get_subscriptions$();
ToolbarHandler__cursorSubscription = ToolbarHandler__get_cursorSubscription$();
ToolbarHandler__bar = ToolbarHandler__get_bar$();
HighlightUse__subscriptions = HighlightUse__get_subscriptions$();
HighlightUse__cursorSubscription = HighlightUse__get_cursorSubscription$();
LanguageService__service = LanguageService__get_service$();
DeveloperMode__editor = DeveloperMode__get_editor$();
DeveloperMode__log = DeveloperMode__get_log$();
DeveloperMode__subscriptions = DeveloperMode__get_subscriptions$();
LanguageService__encoding = LanguageService__get_encoding$();
LanguageService__last = LanguageService__get_last$();
Events__last = Events__get_last$();
LanguageService__toolbarFlag = LanguageService__get_toolbarFlag$();
Parser__h = Parser__get_h$();
TooltipHandler__ed = TooltipHandler__get_ed$();
TooltipHandler__tooltip = TooltipHandler__get_tooltip$();
TooltipHandler__lastMousePosition = TooltipHandler__get_lastMousePosition$();
TooltipHandler__timer = TooltipHandler__get_timer$();
TooltipHandler__event = TooltipHandler__get_event$();
TooltipHandler__errorArr = TooltipHandler__get_errorArr$();
ToolbarHandler__ed = ToolbarHandler__get_ed$();
FindDeclaration__lastFile = FindDeclaration__get_lastFile$();
FindDeclaration__lastPosition = FindDeclaration__get_lastPosition$();
HighlightUse__marked = HighlightUse__get_marked$();
HighlightUse__ed = HighlightUse__get_ed$();
AutocompleteProvider__isForced = AutocompleteProvider__get_isForced$();
AutocompleteProvider__lastResult = AutocompleteProvider__get_lastResult$();
AutocompleteProvider__lastRow = AutocompleteProvider__get_lastRow$();
AutocompleteProvider__helptext = AutocompleteProvider__get_helptext$();
AutocompleteProvider__emitter = AutocompleteProvider__get_emitter$();
AutocompleteProvider__helptextList = AutocompleteProvider__get_helptextList$();
AutocompleteProvider__currentHelptext = AutocompleteProvider__get_currentHelptext$();
AutocompleteProvider__subscription = AutocompleteProvider__get_subscription$();
return [(function(ign)
{
    return (new FSharpIDE___ctor$());
}), (function(_this)
{
    return FSharpIDE__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return FSharpIDE__activate$(_this, p0);
    });
}), (function(_this)
{
    return (function(p0)
    {
      return FSharpIDE__getSuggestion$(_this, p0);
    });
}), (function(_this)
{
    return FSharpIDE__provideErrors$(_this);
}), (function(_this)
{
    return FSharpIDE__provide$(_this);
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = IonideFSharp = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
getSuggestion: function(p1) {
  return _funcs[3](_self)(p1); },
provideErrors: function() {
  return _funcs[4](_self); },
provide: function() {
  return _funcs[5](_self); },
config:  {
            ShowQuickInfoPanel: {type: 'boolean', 'default': true},
            ShowUseHighlights: {type: 'boolean', 'default': true},
            DeveloperMode: {type: 'boolean', 'default': false},
            MonoPath: {type: 'string', 'default': '/usr/bin'},
FormatDocument: {type: 'object', properties: {
                SemicolonAtEndOfLine : {type: 'boolean', 'default': false},
                NoSpaceBeforeArgument : {type: 'boolean', 'default': true},
                NoSpaceBeforeColon : {type: 'boolean', 'default': true},
                NoSpaceAfterComma : {type: 'boolean', 'default': true},
                NoSpaceAfterSemiColon : {type: 'boolean', 'default': true},
                IndentOnTryWith : {type: 'boolean', 'default': false},
                NoSpaceAroundDelimiter : {type: 'boolean', 'default': true},
                ReorderOpenDeclaration : {type: 'boolean', 'default': false},
                StrictMode : {type: 'boolean', 'default': false}
            }}
}
};