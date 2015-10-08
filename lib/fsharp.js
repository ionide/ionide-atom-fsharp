var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var path = require('path');
var Emitter = require('event-kit').Emitter;

function wrappedFunScript() { 
var position___ctor$, position__GeneratedCompareTo, list_1_String____NilString___, list_1_String____ConsString___, list_1_String__NilString, list_1_String__ConsString, list_1_OverloadSignature__NilOverloadSignature_, list_1_OverloadSignature__ConsOverloadSignature_, cords___ctor$, ViewsHelpers__stopMovingHandler$Object_Object_, ViewsHelpers__pixelPositionFromMouseEvent$, ViewsHelpers__jq_$, ViewsHelpers__jq$, ViewsHelpers__isFSharpEditor$, ViewsHelpers__getElementsByClass$Element_Element_, ViewsHelpers__clearTimer$Timer_Timer_, ViewsHelpers__bufferPositionFromMouseEvent$, ViewsHelpers__OnCursorStopMoving$Object_Object_, UnfoldEnumerator_2_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String___ctor$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, UnfoldEnumerator_2_FSharpOption_1_String__String___ctor$FSharpOption_1_String__String, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, UnfoldEnumerator_2_FSharpList_1_String__String___ctor$FSharpList_1_String__String, UnfoldEnumerator_2_Boolean__String___ctor$Boolean_String, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, TupleString_String, TupleString_Int32, TupleString_FSharpOption_1_String_, TupleString_FSharpList_1_String_, TupleLazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, TupleInt32_Int32, TupleError__String, TupleDisposable__Int32, TooltipHandler__tooltip, TooltipHandler__timer, TooltipHandler__subscriptions, TooltipHandler__remove$, TooltipHandler__reg$, TooltipHandler__mouseHandler$, TooltipHandler__matchError$, TooltipHandler__lastMousePosition, TooltipHandler__initialize$, TooltipHandler__get_tooltip$, TooltipHandler__get_timer$, TooltipHandler__get_subscriptions$, TooltipHandler__get_lastMousePosition$, TooltipHandler__get_event$, TooltipHandler__get_errorArr$, TooltipHandler__get_ed$, TooltipHandler__getPosition$, TooltipHandler__event, TooltipHandler__errorHandler$, TooltipHandler__errorArr, TooltipHandler__ed, TooltipHandler__deactivate$, TooltipHandler__dashes$, TooltipHandler__createTooltip$, TooltipHandler__clearTimer$, TooltipHandler__activate$, ToolbarHandler__subscriptions, ToolbarHandler__remove$, ToolbarHandler__initialize$, ToolbarHandler__handleEditorChange$, ToolbarHandler__get_subscriptions$, ToolbarHandler__get_ed$, ToolbarHandler__get_cursorSubscription$, ToolbarHandler__get_bar$, ToolbarHandler__getCursor$, ToolbarHandler__format_data$, ToolbarHandler__ed, ToolbarHandler__deactivate$, ToolbarHandler__cursorSubscription, ToolbarHandler__cursorHandler$, ToolbarHandler__createToolbar$, ToolbarHandler__bar, ToolbarHandler__askForToolbar$, ToolbarHandler__activate$, T___ctor$, Suggestion__get_Default$, Suggestion___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, String__EndsWith$, State__On, State__Off, Seq__Unfold$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String_1Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String__String, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__Unfold$FSharpOption_1_String__String_1FSharpOption_1_String__String, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__Unfold$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__Unfold$Boolean__String_1Boolean_String, Seq__ToList$String_1String, Seq__ToArray$String___String___, Seq__ToArray$String_1String, Seq__Singleton$String_1String, Seq__OfList$String___String___, Seq__OfList$String_1String, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$String_1String, Seq__Iterate$String_1String, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Disposable_Disposable_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__String_1Unit__String, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$String_1_Unit_String_Unit_, Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__Fold$String_1_Unit_String_Unit_, Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Disposable_Disposable_, Seq__Empty$String_1String, Seq__Delay$String_1String, Seq__Append$String_1String, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Provider___ctor$, Provider_1__ctor$, Process__spawnSimple$, Process__isWin$, Process__fromPath$, Process__exec$, Parser__subscriptions, Parser__parseProjectForEditor$, Parser__h, Parser__get_subscriptions$, Parser__get_h$, Parser__deactivate$, Parser__activate$, PanelOptions___ctor$, Options___ctor$, Option__Map$NodeList__JQuery_NodeList__JQuery_, Option__Map$NodeList__Element_NodeList__Element_, Option__Map$NodeList__Coordinates_NodeList__Coordinates_, Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_, Option__Map$Element__HTMLElement_Element__HTMLElement_, Option__Iterate$TooltipResult_TooltipResult_, Option__Iterate$Timer_Timer_, Option__Iterate$SymbolUseResult_SymbolUseResult_, Option__Iterate$String_1String, Option__Iterate$ParseResult_ParseResult_, Option__Iterate$JQuery_JQuery_, Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_, Option__Iterate$IPoint_IPoint_, Option__Iterate$IEditor_IEditor_, Option__Iterate$HelptextResult_HelptextResult_, Option__Iterate$Element_Element_, Option__Iterate$Disposable_Disposable_, Option__Iterate$CompletionResult_CompletionResult_, Option__Iterate$CompilerLocationResult_CompilerLocationResult_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__IsSome$Int32_Int32, Option__IsSome$IEmitter_IEmitter_, Option__IsSome$FSharpOption_1_String_FSharpOption_1_String_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__IsSome$FSharpList_1_String_FSharpList_1_String_, Option__IsSome$Error_Error_, Option__IsSome$Disposable_Disposable_, Option__IsSome$CompletionResult_CompletionResult_, Option__IsSome$Boolean_Boolean, Option__IsNone$IEmitter_IEmitter_, Option__IsNone$Error_Error_, Option__IsNone$CompletionResult_CompletionResult_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_String__Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_String__FSharpOption_1_String_Tuple_2_String__FSharpOption_1_String_, Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_, Option__GetValue$Tuple_2_String__Boolean_Tuple_2_String__Boolean_, Option__GetValue$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$TooltipResult_TooltipResult_, Option__GetValue$Timer_Timer_, Option__GetValue$SymbolUseResult_SymbolUseResult_, Option__GetValue$String_1String, Option__GetValue$ParseResult_ParseResult_, Option__GetValue$OverloadSignature_OverloadSignature_, Option__GetValue$NodeList_NodeList_, Option__GetValue$JQuery_JQuery_, Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_, Option__GetValue$Int32_Int32, Option__GetValue$IPoint_IPoint_, Option__GetValue$IEditor_IEditor_, Option__GetValue$HelptextResult_HelptextResult_, Option__GetValue$HTMLElement_HTMLElement_, Option__GetValue$FSharpOption_1_String_FSharpOption_1_String_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$FSharpList_1_String_FSharpList_1_String_, Option__GetValue$Error_Error_, Option__GetValue$Element_Element_, Option__GetValue$Disposable_Disposable_, Option__GetValue$Coordinates_Coordinates_, Option__GetValue$CompletionResult_CompletionResult_, Option__GetValue$CompilerLocationResult_CompilerLocationResult_, Option__GetValue$ChildProcess_ChildProcess_, Option__GetValue$Boolean_Boolean, OpenOptions___ctor$, OpenEditorOptions___ctor$, List__TryPickIndexedAux$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_, List__TryPickIndexed$OverloadSignature__OverloadSignature_OverloadSignature__OverloadSignature_, List__TryFindIndexed$OverloadSignature_OverloadSignature_, List__ToArray$String_1String, List__Tail$String___String___, List__Tail$String_1String, List__Reverse$String_1String, List__Reverse$OverloadSignature_OverloadSignature_, List__OfArray$OverloadSignature_OverloadSignature_, List__Length$String_1String, List__Length$OverloadSignature_OverloadSignature_, List__IterateIndexed$String_1String, List__Head$String___String___, List__Head$String_1String, List__Head$OverloadSignature_OverloadSignature_, List__Get$OverloadSignature_OverloadSignature_, List__FoldIndexedAux$list_1_String__String_1list_1_String__String, List__FoldIndexedAux$list_1_OverloadSignature__OverloadSignature_list_1_OverloadSignature__OverloadSignature_, List__FoldIndexedAux$Unit__String_1Unit__String, List__FoldIndexedAux$Int32__String_1Int32_String, List__FoldIndexedAux$Int32__OverloadSignature_Int32_OverloadSignature_, List__FoldIndexed$String_1_list_1_String_String_list_1_String_, List__FoldIndexed$String_1_Unit_String_Unit_, List__FoldIndexed$String_1_Int32_String_Int32, List__FoldIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, List__FoldIndexed$OverloadSignature__Int32_OverloadSignature__Int32, List__Fold$String_1_list_1_String_String_list_1_String_, List__Fold$String_1_Int32_String_Int32, List__Fold$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, List__Fold$OverloadSignature__Int32_OverloadSignature__Int32, List__FindIndexed$OverloadSignature_OverloadSignature_, List__Empty$String___String___, List__Empty$String_1String, List__Empty$OverloadSignature_OverloadSignature_, List__CreateCons$String___String___, List__CreateCons$String_1String, List__Append$OverloadSignature_OverloadSignature_, LintResult___ctor$, Lazy_1_Object__get_Value$Object_, Lazy_1_Object___ctor$Object_, Lazy_1_Object__Create$Object_, LanguageService__tooltip$, LanguageService__toolbarFlag, LanguageService__toolbar$, LanguageService__symbolUse$, LanguageService__stop$, LanguageService__start$, LanguageService__service, LanguageService__send$, LanguageService__project$, LanguageService__parseResponse$, LanguageService__parseEditor$, LanguageService__parse$, LanguageService__last, LanguageService__helptext$, LanguageService__get_toolbarFlag$, LanguageService__get_service$, LanguageService__get_last$, LanguageService__get_encoding$, LanguageService__findDeclaration$, LanguageService__encoding, LanguageService__completion$, LanguageService__ask$, HighlightUse__subscriptions, HighlightUse__showHighlight$, HighlightUse__remove$, HighlightUse__marked, HighlightUse__initialize$, HighlightUse__get_subscriptions$, HighlightUse__get_marked$, HighlightUse__get_ed$, HighlightUse__get_cursorSubscription$, HighlightUse__getCursor$, HighlightUse__ed, HighlightUse__deactivate$, HighlightUse__cursorSubscription, HighlightUse__clearHighlight$, HighlightUse__askForSymbolUse$, HighlightUse__activate$, GlyphMaps__unicode_map, GlyphMaps__get_unicode_map$, FormatHandler__format$, FormatHandler__activate$, FindDeclaration__openDec$, FindDeclaration__lastPosition, FindDeclaration__lastFile, FindDeclaration__handle$Object_Object_, FindDeclaration__goBack$, FindDeclaration__get_lastPosition$, FindDeclaration__get_lastFile$, FindDeclaration__deactivate$, FindDeclaration__activate$, FSharpString__emptyIfNull$, FSharpString__Replicate$, FSharpString__Initialize$, FSharpString__Concat$, FSharpIDE__provideErrors$, FSharpIDE__provide$, FSharpIDE__getSuggestion$, FSharpIDE__deactivate$, FSharpIDE__activate$, FSharpIDE___ctor$, FSharpCommands__openSettings$, Extensions__String_Replace_Static$, Extensions__JQuery_html_Static$, Events__tryParse$TooltipResult_TooltipResult_, Events__tryParse$SymbolUseResult_SymbolUseResult_, Events__tryParse$ParseResult_ParseResult_, Events__tryParse$HelptextResult_HelptextResult_, Events__tryParse$CompletionResult_CompletionResult_, Events__tryParse$CompilerLocationResult_CompilerLocationResult_, Events__parseAndEmit$TooltipResult_TooltipResult_, Events__parseAndEmit$SymbolUseResult_SymbolUseResult_, Events__parseAndEmit$ParseResult_ParseResult_, Events__parseAndEmit$HelptextResult_HelptextResult_, Events__parseAndEmit$CompletionResult_CompletionResult_, Events__parseAndEmit$CompilerLocationResult_CompilerLocationResult_, Events__once$ParseResult__Unit_ParseResult__Unit_, Events__once$Object__Unit_Object__Unit_, Events__once$FindDeclarationResult__OpenPromise_FindDeclarationResult__OpenPromise_, Events__once$CompletionResult__Unit_CompletionResult__Unit_, Events__on$, Events__log$String_1_String_1String_String, Events__last, Events__get_last$, Events__get_emitter$, Events__getName$, Events__emitter, Events__emitEmpty$String_1String, Events__emit$String_1String, EventType__Tooltips, EventType__Toolbars, EventType__SymbolUse, EventType__Status, EventType__ServerStop, EventType__ServerStart, EventType__ServerError, EventType__Project, EventType__Log, EventType__Helptext, EventType__FindDecl, EventType__Errors, EventType__Completion, EventType__CompilerLocation, ErrorLinterProvider__lint$, ErrorLinterProvider__create$, DeveloperMode__subscriptions, DeveloperMode__log, DeveloperMode__get_subscriptions$, DeveloperMode__get_log$, DeveloperMode__get_editor$, DeveloperMode__editor, DeveloperMode__deactivate$, DeveloperMode__activate$, DateTime__get_Now$, DateTime__createUnsafe$, DateTime__ToLongTimeString$, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Disposable___ctor$Disposable_, Completion___ctor$, CompletionResult___ctor$, CompletionHelpers__min3$Int32_Int32, CompletionHelpers__glyph_completion$, CompletionHelpers__fsharp_completion$, CompletionHelpers__editDistance$, CompletionHelpers__createHelptext$, AutocompleteProvider__subscription, AutocompleteProvider__previousHelptext$Object_Object_, AutocompleteProvider__nextHelptext$Object_Object_, AutocompleteProvider__lastRow, AutocompleteProvider__lastResult, AutocompleteProvider__isForced, AutocompleteProvider__initialize$, AutocompleteProvider__helptextSetText$, AutocompleteProvider__helptextList, AutocompleteProvider__helptext, AutocompleteProvider__get_subscription$, AutocompleteProvider__get_lastRow$, AutocompleteProvider__get_lastResult$, AutocompleteProvider__get_isForced$, AutocompleteProvider__get_helptextList$, AutocompleteProvider__get_helptext$, AutocompleteProvider__get_emitter$, AutocompleteProvider__get_currentHelptext$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__emitter, AutocompleteProvider__currentHelptext, AutocompleteProvider__create$, Array__ZeroCreate$String___String___, Array__ZeroCreate$String_1String, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Int32_Int32, Array__ZeroCreate$Completion_Completion_, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexedAux$Error__Error_Error__Error_, Array__TryPickIndexed$String_1_String_1String_String, Array__TryPickIndexed$Error__Error_Error__Error_, Array__TryFind$String_1String, Array__TryFind$Error_Error_, Array__SortInPlaceWith$Completion_Completion_, Array__SortInPlaceBy$Completion__Int32_Completion__Int32, Array__SortBy$Completion__Int32_Completion__Int32, Array__MapIndexed$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Error__Object_Error__Object_, Array__MapIndexed$Completion__Object_Completion__Object_, Array__Map$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_, Array__Map$String_1_String___String_String___, Array__Map$Error__Object_Error__Object_, Array__Map$Completion__Object_Completion__Object_, Array__Length$Tuple_2_String__String_Tuple_2_String__String_, Array__Length$SymbolUse_SymbolUse_, Array__Length$String_1String, Array__Length$OverloadSignature___OverloadSignature___, Array__Length$OverloadSignature_OverloadSignature_, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Length$Completion_Completion_, Array__Iterate$SymbolUse_SymbolUse_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Initialize$String_1String, Array__FoldIndexed$Unit__SymbolUse_Unit__SymbolUse_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$String____String_1String____String, Array__FoldIndexed$FSharpList_1_OverloadSignature__OverloadSignature___FSharpList_1_OverloadSignature__OverloadSignature___, Array__FoldBackIndexed$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, Array__FoldBack$OverloadSignature__list_1_OverloadSignature_OverloadSignature__list_1_OverloadSignature_, Array__Fold$SymbolUse__Unit_SymbolUse__Unit_, Array__Fold$String_1_String___String_String___, Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Filter$Completion_Completion_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Create$Int32_Int32, Array__Copy$Completion_Completion_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_;
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
Array__Copy$Completion_Completion_ = (function(xs)
{
    return xs.slice(0);;
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
Array__Filter$Completion_Completion_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Completion_Completion_(0);
    var j = 0;
    for (var i = 0; i <= (Array__Length$Completion_Completion_(xs) - 1); i++)
    {
      if (f(xs[i])) 
      {
        ys[j] = xs[i];
        null;
        j = (j + 1);
        null;
      }
      else
      {
        ;
      };
    };
    return ys;
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
    var _2712;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _2712, xs);
});
Array__Iterate$SymbolUse_SymbolUse_ = (function(f,xs)
{
    var _2871;
    return Array__Fold$SymbolUse__Unit_SymbolUse__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _2871, xs);
});
Array__Length$Completion_Completion_ = (function(xs)
{
    return xs.length;;
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
Array__Length$Tuple_2_String__String_Tuple_2_String__String_ = (function(xs)
{
    return xs.length;;
});
Array__Map$Completion__Object_Completion__Object_ = (function(f,xs)
{
    return Array__MapIndexed$Completion__Object_Completion__Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
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
Array__Map$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_ = (function(f,xs)
{
    return Array__MapIndexed$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$Completion__Object_Completion__Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Object_Object_(Array__Length$Completion_Completion_(xs));
    for (var i = 0; i <= (Array__Length$Completion_Completion_(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
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
Array__MapIndexed$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Completion_Completion_(Array__Length$Tuple_2_String__String_Tuple_2_String__String_(xs));
    for (var i = 0; i <= (Array__Length$Tuple_2_String__String_Tuple_2_String__String_(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__SortBy$Completion__Int32_Completion__Int32 = (function(f,xs)
{
    var ys = Array__Copy$Completion_Completion_(xs);
    Array__SortInPlaceBy$Completion__Int32_Completion__Int32(f, ys);
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
    var _ignored0 = (AutocompleteProvider__helptext.fadeOut());
    var __ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:autocomplete", (function(_arg4)
    {
      var _package = (((window.atom).packages).getLoadedPackage("autocomplete-plus"));
      var e = _package.mainModule.autocompleteManager.suggestionList.emitter;
      if (Option__IsNone$IEmitter_IEmitter_(AutocompleteProvider__emitter)) 
      {
        var handler = (function(flag)
        {
          var _12330;
          if (flag) 
          {
            _12330 = ((ViewsHelpers__jq$("li.selected").prev()).find(" span.word-container .word"));
          }
          else
          {
            _12330 = ((ViewsHelpers__jq$("li.selected").next()).find(" span.word-container .word"));
          };
          var selected = _12330;
          var _12340;
          if (((selected.length) > 0.000000)) 
          {
            _12340 = (selected.text());
          }
          else
          {
            if (flag) 
            {
              _12340 = (((ViewsHelpers__jq$(".suggestion-list-scroller .list-group li").last()).find(" span.word-container .word")).text());
            }
            else
            {
              _12340 = (((ViewsHelpers__jq$(".suggestion-list-scroller .list-group li").first()).find(" span.word-container .word")).text());
            };
          };
          var text = _12340;
          LanguageService__helptext$(text);
        });
        var ___ignored0 = (e.on("did-select-next", (function(_arg1)
        {
          return handler(false);
        })));
        var ____ignored0 = (e.on("did-select-previous", (function(_arg2)
        {
          return handler(true);
        })));
        var _____ignored0 = (e.on("did-cancel", (function(_arg3)
        {
          var ______ignored0 = (AutocompleteProvider__helptext.fadeOut());
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
    var ___ignored0 = Events__on$((new EventType__Helptext()), (function(n)
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
        var ____ignored0 = (AutocompleteProvider__helptext.offset(o));
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
        if ((List__Length$OverloadSignature_OverloadSignature_(AutocompleteProvider__helptextList) > 0)) 
        {
          AutocompleteProvider__helptextSetText$(0);
          var _____ignored0 = (AutocompleteProvider__helptext.show());
        }
        else
        {
          ;
        };
      }
      else
      {
        ;
      };
    }));
    var ____ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:helptext-next", (function(arg00_)
    {
      return AutocompleteProvider__nextHelptext$Object_Object_(arg00_);
    })));
    var _____ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:helptext-previous", (function(arg00_)
    {
      return AutocompleteProvider__previousHelptext$Object_Object_(arg00_);
    })));
    AutocompleteProvider__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var ______ignored0 = (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return AutocompleteProvider__initialize$(ed);
    })));
    return (new Provider___ctor$(".source.fsharp", " ", 4, false, (function(options)
    {
      return AutocompleteProvider__getSuggestion$(options);
    })));
});
AutocompleteProvider__getSuggestion$ = (function(options)
{
    if ((((options.editor.buffer).file) != null)) 
    {
      ((window.console).log("autocomplete"));
      var path = (((options.editor.buffer).file).path);
      var row = ((options.bufferPosition.row) + 1);
      var col = ((options.bufferPosition.column) + 1);
      var _3768;
      if (((row - 1) >= 0)) 
      {
        _3768 = (row - 1);
      }
      else
      {
        _3768 = row;
      };
      var row_ = _3768;
      var _3776;
      if ((((col - 2) - options.prefix.length) >= 0)) 
      {
        _3776 = ((col - 2) - options.prefix.length);
      }
      else
      {
        _3776 = col;
      };
      var col_ = _3776;
      var _3796;
      if (((options.prefix == ".") || (options.prefix == "="))) 
      {
        _3796 = "";
      }
      else
      {
        _3796 = options.prefix;
      };
      var prefix = _3796;
      return new Promise(function(resolve){(function(unitVar0)
      {
        if ((((AutocompleteProvider__isForced || Option__IsNone$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult)) || (prefix == "")) || (AutocompleteProvider__lastRow != row))) 
        {
          Events__once$Object__Unit_Object__Unit_((new EventType__Errors()), (function(result)
          {
            Events__once$CompletionResult__Unit_CompletionResult__Unit_((new EventType__Completion()), (function(_result)
            {
              ((window.console).log(("prefix - " + prefix)));
              AutocompleteProvider__lastRow = row;
              AutocompleteProvider__isForced = false;
              var _3834;
              if ((((options.editor.buffer).lines)[row_].charAt(col_) == "\\")) 
              {
                AutocompleteProvider__lastResult = {Tag: 1.000000, Value: (new CompletionResult___ctor$("", GlyphMaps__unicode_map))};
                _3834 = CompletionHelpers__glyph_completion$(prefix, GlyphMaps__unicode_map);
              }
              else
              {
                AutocompleteProvider__lastResult = {Tag: 1.000000, Value: _result};
                _3834 = CompletionHelpers__fsharp_completion$(prefix, _result.Data);
              };
              var r = _3834;
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
          var _12092;
          if ((((options.editor.buffer).lines)[row_].charAt(col_) == "\\")) 
          {
            _12092 = CompletionHelpers__glyph_completion$(prefix, Option__GetValue$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult).Data);
          }
          else
          {
            _12092 = CompletionHelpers__fsharp_completion$(prefix, Option__GetValue$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult).Data);
          };
          var r = _12092;
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
    return CompletionHelpers__createHelptext$();
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
    })((function(arg00)
    {
      return (function(arg10)
      {
        return (function(arg20)
        {
          return Extensions__String_Replace_Static$(arg00, arg10, arg20);
        });
      });
    })("\n")("\u003c/br\u003e")((function(arg00)
    {
      return (function(arg10)
      {
        return (function(arg20)
        {
          return Extensions__String_Replace_Static$(arg00, arg10, arg20);
        });
      });
    })("\\n")("\u003c/br\u003e")(Extensions__JQuery_html_Static$((ViewsHelpers__jq$("\u003cdiv/\u003e").text(text))))))));
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
CompletionHelpers__createHelptext$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027type-tooltip tooltip\u0027\u003e\r\n        \u003cdiv class=\u0027tooltip-inner\u0027\u003eTEST\u003c/div\u003e\r\n    \u003c/div\u003e");
});
CompletionHelpers__editDistance$ = (function(s,t)
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
              var _11769;
              if ((s.charAt((___i - 1)) == t.charAt((___j - 1)))) 
              {
                _11769 = dist((___i - 1))((___j - 1));
              }
              else
              {
                _11769 = CompletionHelpers__min3$Int32_Int32((dist((___i - 1))(___j) + 1), (dist(___i)((___j - 1)) + 1), (dist((___i - 1))((___j - 1)) + 1));
              };
              var dval = _11769;
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
CompletionHelpers__fsharp_completion$ = (function(prefix,data)
{
    return Array__Map$Completion__Object_Completion__Object_((function(t)
    {
      var inputRecord = Suggestion__get_Default$();
      var rightLabel = t.Glyph;
      return (new Suggestion___ctor$(t.Name, t.Name, prefix, t.GlyphChar, inputRecord.leftLabel, rightLabel));
    }), Array__SortBy$Completion__Int32_Completion__Int32((function(t)
    {
      return CompletionHelpers__editDistance$(prefix, t.Name);
    }), Array__Filter$Completion_Completion_((function(t)
    {
      return (t.Name.toLowerCase().indexOf(prefix.toLowerCase()) >= 0);
    }), data)));
});
CompletionHelpers__glyph_completion$ = (function(prefix,data)
{
    return Array__Map$Completion__Object_Completion__Object_((function(t)
    {
      var inputRecord = Suggestion__get_Default$();
      var rightLabel = t.Glyph;
      return (new Suggestion___ctor$(t.Glyph, t.Name, ("\\" + prefix), t.GlyphChar, inputRecord.leftLabel, rightLabel));
    }), Array__SortBy$Completion__Int32_Completion__Int32((function(t)
    {
      return CompletionHelpers__editDistance$(prefix, t.Name);
    }), Array__Filter$Completion_Completion_((function(t)
    {
      return (t.Name.toLowerCase().indexOf(prefix.toLowerCase()) >= 0);
    }), data)));
});
CompletionHelpers__min3$Int32_Int32 = (function(one,two,three)
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
CompletionResult___ctor$ = (function(Kind,Data)
{
    var __this = this;
    __this.Kind = Kind;
    __this.Data = Data;
});
Completion___ctor$ = (function(Name,Glyph,GlyphChar)
{
    var __this = this;
    __this.Name = Name;
    __this.Glyph = Glyph;
    __this.GlyphChar = GlyphChar;
});
CreateEnumerable_1_Disposable___ctor$Disposable_ = (function(factory)
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
    var p = (((window.atom).project).getPaths())[0];
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
      (fs.appendFile((p + "/.ionide.debug"), t));
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
    return (new Provider_1__ctor$(["source.fsharp", "source.fsharp.fsi", "source.fsharp.fsx"], "file", true, lint));
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
Extensions__JQuery_html_Static$ = (function(jq)
{
    return (jq.html());
});
Extensions__String_Replace_Static$ = (function(oldsub,newsub,str)
{
    return String__Replace$(str, oldsub, newsub);
});
FSharpCommands__openSettings$ = (function(unitVar0)
{
    return (((window.atom).workspace).open("atom://config/packages/ionide-fsharp"));
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
    var ignored0 = (((window.atom).commands).add("atom-workspace", "Ionide-FSharp:Settings", (function(arg00_)
    {
      return FSharpCommands__openSettings$();
    })));
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
FSharpIDE__getSuggestion$ = (function(__,options)
{
    return [AutocompleteProvider__getSuggestion$(options)];
});
FSharpIDE__provide$ = (function(__,unitVar1)
{
    return [AutocompleteProvider__create$()];
});
FSharpIDE__provideErrors$ = (function(__,unitVar1)
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
                  var _3049;
                  if ((((window.atom).config).get("ionide-fsharp.FormatDocument.SemicolonAtEndOfLine"))) 
                  {
                    _3049 = Seq__Singleton$String_1String("--semicolonEOL");
                  }
                  else
                  {
                    _3049 = Seq__Empty$String_1String();
                  };
                  return Seq__Append$String_1String(_3049, Seq__Delay$String_1String((function(______unitVar)
                  {
                    var _3121;
                    if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceBeforeArgument"))) 
                    {
                      _3121 = Seq__Singleton$String_1String("--noSpaceBeforeArgument");
                    }
                    else
                    {
                      _3121 = Seq__Empty$String_1String();
                    };
                    return Seq__Append$String_1String(_3121, Seq__Delay$String_1String((function(_______unitVar)
                    {
                      var _3134;
                      if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceBeforeColon"))) 
                      {
                        _3134 = Seq__Singleton$String_1String("--noSpaceBeforeColon");
                      }
                      else
                      {
                        _3134 = Seq__Empty$String_1String();
                      };
                      return Seq__Append$String_1String(_3134, Seq__Delay$String_1String((function(________unitVar)
                      {
                        var _3147;
                        if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAfterComma"))) 
                        {
                          _3147 = Seq__Singleton$String_1String("--noSpaceAfterComma");
                        }
                        else
                        {
                          _3147 = Seq__Empty$String_1String();
                        };
                        return Seq__Append$String_1String(_3147, Seq__Delay$String_1String((function(_________unitVar)
                        {
                          var _3160;
                          if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAfterSemiColon"))) 
                          {
                            _3160 = Seq__Singleton$String_1String("--noSpaceAfterSemiColon");
                          }
                          else
                          {
                            _3160 = Seq__Empty$String_1String();
                          };
                          return Seq__Append$String_1String(_3160, Seq__Delay$String_1String((function(__________unitVar)
                          {
                            var _3173;
                            if ((((window.atom).config).get("ionide-fsharp.FormatDocument.IndentOnTryWith"))) 
                            {
                              _3173 = Seq__Singleton$String_1String("--indentOnTryWith");
                            }
                            else
                            {
                              _3173 = Seq__Empty$String_1String();
                            };
                            return Seq__Append$String_1String(_3173, Seq__Delay$String_1String((function(___________unitVar)
                            {
                              var _3186;
                              if ((((window.atom).config).get("ionide-fsharp.FormatDocument.NoSpaceAroundDelimiter"))) 
                              {
                                _3186 = Seq__Singleton$String_1String("--noSpaceAroundDelimiter");
                              }
                              else
                              {
                                _3186 = Seq__Empty$String_1String();
                              };
                              return Seq__Append$String_1String(_3186, Seq__Delay$String_1String((function(____________unitVar)
                              {
                                var _3199;
                                if ((((window.atom).config).get("ionide-fsharp.FormatDocument.ReorderOpenDeclaration"))) 
                                {
                                  _3199 = Seq__Singleton$String_1String("--reorderOpenDeclaration");
                                }
                                else
                                {
                                  _3199 = Seq__Empty$String_1String();
                                };
                                return Seq__Append$String_1String(_3199, Seq__Delay$String_1String((function(_____________unitVar)
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
GlyphMaps__get_unicode_map$ = (function()
{
    return Array__Map$Tuple_2_String__String__Completion_Tuple_2_String__String__Completion_((function(tupledArg)
    {
      var name = tupledArg.Items[0.000000];
      var unicode = tupledArg.Items[1.000000];
      return (new Completion___ctor$(name, unicode, "variable"));
    }), [(new TupleString_String("exclam", "!")), (new TupleString_String("octothorpe", "#")), (new TupleString_String("mathdollar", "$")), (new TupleString_String("percent", "%")), (new TupleString_String("ampersand", "\u0026")), (new TupleString_String("lparen", "(")), (new TupleString_String("rparen", ")")), (new TupleString_String("plus", "+")), (new TupleString_String("comma", ",")), (new TupleString_String("period", ".")), (new TupleString_String("mathslash", "/")), (new TupleString_String("mathcolon", ":")), (new TupleString_String("semicolon", ";")), (new TupleString_String("less", "\u003c")), (new TupleString_String("equal", "=")), (new TupleString_String("greater", "\u003e")), (new TupleString_String("question", "?")), (new TupleString_String("atsign", "@")), (new TupleString_String("lbrack", "[")), (new TupleString_String("backslash", "\\")), (new TupleString_String("rbrack", "]")), (new TupleString_String("lbrace", "{")), (new TupleString_String("vert", "|")), (new TupleString_String("rbrace", "}")), (new TupleString_String("sterling", "£")), (new TupleString_String("yen", "¥")), (new TupleString_String("neg", "¬")), (new TupleString_String("pm", "±")), (new TupleString_String("cdotp", "·")), (new TupleString_String("times", "×")), (new TupleString_String("matheth", "ð")), (new TupleString_String("div", "÷")), (new TupleString_String("Zbar", "Ƶ")), (new TupleString_String("grave", "̀")), (new TupleString_String("acute", "́")), (new TupleString_String("hat", "̂")), (new TupleString_String("tilde", "̃")), (new TupleString_String("bar", "̄")), (new TupleString_String("overbar", "̅")), (new TupleString_String("breve", "̆")), (new TupleString_String("dot", "̇")), (new TupleString_String("ddot", "̈")), (new TupleString_String("ovhook", "̉")), (new TupleString_String("ocirc", "̊")), (new TupleString_String("check", "̌")), (new TupleString_String("candra", "̐")), (new TupleString_String("oturnedcomma", "̒")), (new TupleString_String("ocommatopright", "̕")), (new TupleString_String("droang", "̚")), (new TupleString_String("wideutilde", "̰")), (new TupleString_String("underbar", "̱")), (new TupleString_String("not", "̸")), (new TupleString_String("upAlpha", "Α")), (new TupleString_String("upBeta", "Β")), (new TupleString_String("upGamma", "Γ")), (new TupleString_String("upDelta", "Δ")), (new TupleString_String("upEpsilon", "Ε")), (new TupleString_String("upZeta", "Ζ")), (new TupleString_String("upEta", "Η")), (new TupleString_String("upTheta", "Θ")), (new TupleString_String("upIota", "Ι")), (new TupleString_String("upKappa", "Κ")), (new TupleString_String("upLambda", "Λ")), (new TupleString_String("upMu", "Μ")), (new TupleString_String("upNu", "Ν")), (new TupleString_String("upXi", "Ξ")), (new TupleString_String("upOmicron", "Ο")), (new TupleString_String("upPi", "Π")), (new TupleString_String("upRho", "Ρ")), (new TupleString_String("upSigma", "Σ")), (new TupleString_String("upTau", "Τ")), (new TupleString_String("upUpsilon", "Υ")), (new TupleString_String("upPhi", "Φ")), (new TupleString_String("upChi", "Χ")), (new TupleString_String("upPsi", "Ψ")), (new TupleString_String("upOmega", "Ω")), (new TupleString_String("upalpha", "α")), (new TupleString_String("upbeta", "β")), (new TupleString_String("upgamma", "γ")), (new TupleString_String("updelta", "δ")), (new TupleString_String("upepsilon", "ε")), (new TupleString_String("upzeta", "ζ")), (new TupleString_String("upeta", "η")), (new TupleString_String("uptheta", "θ")), (new TupleString_String("upiota", "ι")), (new TupleString_String("upkappa", "κ")), (new TupleString_String("uplambda", "λ")), (new TupleString_String("upmu", "μ")), (new TupleString_String("upnu", "ν")), (new TupleString_String("upxi", "ξ")), (new TupleString_String("upomicron", "ο")), (new TupleString_String("uppi", "π")), (new TupleString_String("uprho", "ρ")), (new TupleString_String("upvarsigma", "ς")), (new TupleString_String("upsigma", "σ")), (new TupleString_String("uptau", "τ")), (new TupleString_String("upupsilon", "υ")), (new TupleString_String("upvarphi", "φ")), (new TupleString_String("upchi", "χ")), (new TupleString_String("uppsi", "ψ")), (new TupleString_String("upomega", "ω")), (new TupleString_String("upvarbeta", "ϐ")), (new TupleString_String("upvartheta", "ϑ")), (new TupleString_String("upphi", "ϕ")), (new TupleString_String("upvarpi", "ϖ")), (new TupleString_String("upoldKoppa", "Ϙ")), (new TupleString_String("upoldkoppa", "ϙ")), (new TupleString_String("upStigma", "Ϛ")), (new TupleString_String("upstigma", "ϛ")), (new TupleString_String("upDigamma", "Ϝ")), (new TupleString_String("updigamma", "ϝ")), (new TupleString_String("upKoppa", "Ϟ")), (new TupleString_String("upkoppa", "ϟ")), (new TupleString_String("upSampi", "Ϡ")), (new TupleString_String("upsampi", "ϡ")), (new TupleString_String("upvarkappa", "ϰ")), (new TupleString_String("upvarrho", "ϱ")), (new TupleString_String("upvarTheta", "ϴ")), (new TupleString_String("upvarepsilon", "ϵ")), (new TupleString_String("upbackepsilon", "϶")), (new TupleString_String("horizbar", "―")), (new TupleString_String("Vert", "‖")), (new TupleString_String("twolowline", "‗")), (new TupleString_String("dagger", "†")), (new TupleString_String("ddagger", "‡")), (new TupleString_String("smblkcircle", "•")), (new TupleString_String("enleadertwodots", "‥")), (new TupleString_String("unicodeellipsis", "…")), (new TupleString_String("prime", "′")), (new TupleString_String("dprime", "″")), (new TupleString_String("trprime", "‴")), (new TupleString_String("backprime", "‵")), (new TupleString_String("backdprime", "‶")), (new TupleString_String("backtrprime", "‷")), (new TupleString_String("caretinsert", "‸")), (new TupleString_String("Exclam", "‼")), (new TupleString_String("tieconcat", "⁀")), (new TupleString_String("hyphenbullet", "⁃")), (new TupleString_String("fracslash", "⁄")), (new TupleString_String("Question", "⁇")), (new TupleString_String("closure", "⁐")), (new TupleString_String("qprime", "⁗")), (new TupleString_String("euro", "€")), (new TupleString_String("leftharpoonaccent", "⃐")), (new TupleString_String("rightharpoonaccent", "⃑")), (new TupleString_String("vertoverlay", "⃒")), (new TupleString_String("overleftarrow", "⃖")), (new TupleString_String("vec", "⃗")), (new TupleString_String("dddot", "⃛")), (new TupleString_String("ddddot", "⃜")), (new TupleString_String("enclosecircle", "⃝")), (new TupleString_String("enclosesquare", "⃞")), (new TupleString_String("enclosediamond", "⃟")), (new TupleString_String("overleftrightarrow", "⃡")), (new TupleString_String("enclosetriangle", "⃤")), (new TupleString_String("annuity", "⃧")), (new TupleString_String("threeunderdot", "⃨")), (new TupleString_String("widebridgeabove", "⃩")), (new TupleString_String("underrightharpoondown", "⃬")), (new TupleString_String("underleftharpoondown", "⃭")), (new TupleString_String("underleftarrow", "⃮")), (new TupleString_String("underrightarrow", "⃯")), (new TupleString_String("asteraccent", "⃰")), (new TupleString_String("BbbC", "ℂ")), (new TupleString_String("Eulerconst", "ℇ")), (new TupleString_String("mscrg", "ℊ")), (new TupleString_String("mscrH", "ℋ")), (new TupleString_String("mfrakH", "ℌ")), (new TupleString_String("BbbH", "ℍ")), (new TupleString_String("Planckconst", "ℎ")), (new TupleString_String("hslash", "ℏ")), (new TupleString_String("mscrI", "ℐ")), (new TupleString_String("Im", "ℑ")), (new TupleString_String("mscrL", "ℒ")), (new TupleString_String("ell", "ℓ")), (new TupleString_String("BbbN", "ℕ")), (new TupleString_String("wp", "℘")), (new TupleString_String("BbbP", "ℙ")), (new TupleString_String("BbbQ", "ℚ")), (new TupleString_String("mscrR", "ℛ")), (new TupleString_String("Re", "ℜ")), (new TupleString_String("BbbR", "ℝ")), (new TupleString_String("BbbZ", "ℤ")), (new TupleString_String("mho", "℧")), (new TupleString_String("mfrakZ", "ℨ")), (new TupleString_String("turnediota", "℩")), (new TupleString_String("Angstrom", "Å")), (new TupleString_String("mscrB", "ℬ")), (new TupleString_String("mfrakC", "ℭ")), (new TupleString_String("mscre", "ℯ")), (new TupleString_String("mscrE", "ℰ")), (new TupleString_String("mscrF", "ℱ")), (new TupleString_String("Finv", "Ⅎ")), (new TupleString_String("mscrM", "ℳ")), (new TupleString_String("mscro", "ℴ")), (new TupleString_String("aleph", "ℵ")), (new TupleString_String("beth", "ℶ")), (new TupleString_String("gimel", "ℷ")), (new TupleString_String("daleth", "ℸ")), (new TupleString_String("Bbbpi", "ℼ")), (new TupleString_String("Bbbgamma", "ℽ")), (new TupleString_String("BbbGamma", "ℾ")), (new TupleString_String("BbbPi", "ℿ")), (new TupleString_String("Bbbsum", "⅀")), (new TupleString_String("Game", "⅁")), (new TupleString_String("sansLturned", "⅂")), (new TupleString_String("sansLmirrored", "⅃")), (new TupleString_String("Yup", "⅄")), (new TupleString_String("mitBbbD", "ⅅ")), (new TupleString_String("mitBbbd", "ⅆ")), (new TupleString_String("mitBbbe", "ⅇ")), (new TupleString_String("mitBbbi", "ⅈ")), (new TupleString_String("mitBbbj", "ⅉ")), (new TupleString_String("PropertyLine", "⅊")), (new TupleString_String("upand", "⅋")), (new TupleString_String("leftarrow", "←")), (new TupleString_String("uparrow", "↑")), (new TupleString_String("rightarrow", "→")), (new TupleString_String("downarrow", "↓")), (new TupleString_String("leftrightarrow", "↔")), (new TupleString_String("updownarrow", "↕")), (new TupleString_String("nwarrow", "↖")), (new TupleString_String("nearrow", "↗")), (new TupleString_String("searrow", "↘")), (new TupleString_String("swarrow", "↙")), (new TupleString_String("nleftarrow", "↚")), (new TupleString_String("nrightarrow", "↛")), (new TupleString_String("leftwavearrow", "↜")), (new TupleString_String("rightwavearrow", "↝")), (new TupleString_String("twoheadleftarrow", "↞")), (new TupleString_String("twoheaduparrow", "↟")), (new TupleString_String("twoheadrightarrow", "↠")), (new TupleString_String("twoheaddownarrow", "↡")), (new TupleString_String("leftarrowtail", "↢")), (new TupleString_String("rightarrowtail", "↣")), (new TupleString_String("mapsfrom", "↤")), (new TupleString_String("mapsup", "↥")), (new TupleString_String("mapsto", "↦")), (new TupleString_String("mapsdown", "↧")), (new TupleString_String("updownarrowbar", "↨")), (new TupleString_String("hookleftarrow", "↩")), (new TupleString_String("hookrightarrow", "↪")), (new TupleString_String("looparrowleft", "↫")), (new TupleString_String("looparrowright", "↬")), (new TupleString_String("leftrightsquigarrow", "↭")), (new TupleString_String("nleftrightarrow", "↮")), (new TupleString_String("downzigzagarrow", "↯")), (new TupleString_String("Lsh", "↰")), (new TupleString_String("Rsh", "↱")), (new TupleString_String("Ldsh", "↲")), (new TupleString_String("Rdsh", "↳")), (new TupleString_String("linefeed", "↴")), (new TupleString_String("carriagereturn", "↵")), (new TupleString_String("curvearrowleft", "↶")), (new TupleString_String("curvearrowright", "↷")), (new TupleString_String("barovernorthwestarrow", "↸")), (new TupleString_String("barleftarrowrightarrowbar", "↹")), (new TupleString_String("acwopencirclearrow", "↺")), (new TupleString_String("cwopencirclearrow", "↻")), (new TupleString_String("leftharpoonup", "↼")), (new TupleString_String("leftharpoondown", "↽")), (new TupleString_String("upharpoonright", "↾")), (new TupleString_String("upharpoonleft", "↿")), (new TupleString_String("rightharpoonup", "⇀")), (new TupleString_String("rightharpoondown", "⇁")), (new TupleString_String("downharpoonright", "⇂")), (new TupleString_String("downharpoonleft", "⇃")), (new TupleString_String("rightleftarrows", "⇄")), (new TupleString_String("updownarrows", "⇅")), (new TupleString_String("leftrightarrows", "⇆")), (new TupleString_String("leftleftarrows", "⇇")), (new TupleString_String("upuparrows", "⇈")), (new TupleString_String("rightrightarrows", "⇉")), (new TupleString_String("downdownarrows", "⇊")), (new TupleString_String("leftrightharpoons", "⇋")), (new TupleString_String("rightleftharpoons", "⇌")), (new TupleString_String("nLeftarrow", "⇍")), (new TupleString_String("nLeftrightarrow", "⇎")), (new TupleString_String("nRightarrow", "⇏")), (new TupleString_String("Leftarrow", "⇐")), (new TupleString_String("Uparrow", "⇑")), (new TupleString_String("Rightarrow", "⇒")), (new TupleString_String("Downarrow", "⇓")), (new TupleString_String("Leftrightarrow", "⇔")), (new TupleString_String("Updownarrow", "⇕")), (new TupleString_String("Nwarrow", "⇖")), (new TupleString_String("Nearrow", "⇗")), (new TupleString_String("Searrow", "⇘")), (new TupleString_String("Swarrow", "⇙")), (new TupleString_String("Lleftarrow", "⇚")), (new TupleString_String("Rrightarrow", "⇛")), (new TupleString_String("leftsquigarrow", "⇜")), (new TupleString_String("rightsquigarrow", "⇝")), (new TupleString_String("nHuparrow", "⇞")), (new TupleString_String("nHdownarrow", "⇟")), (new TupleString_String("leftdasharrow", "⇠")), (new TupleString_String("updasharrow", "⇡")), (new TupleString_String("rightdasharrow", "⇢")), (new TupleString_String("downdasharrow", "⇣")), (new TupleString_String("barleftarrow", "⇤")), (new TupleString_String("rightarrowbar", "⇥")), (new TupleString_String("leftwhitearrow", "⇦")), (new TupleString_String("upwhitearrow", "⇧")), (new TupleString_String("rightwhitearrow", "⇨")), (new TupleString_String("downwhitearrow", "⇩")), (new TupleString_String("whitearrowupfrombar", "⇪")), (new TupleString_String("circleonrightarrow", "⇴")), (new TupleString_String("downuparrows", "⇵")), (new TupleString_String("rightthreearrows", "⇶")), (new TupleString_String("nvleftarrow", "⇷")), (new TupleString_String("nvrightarrow", "⇸")), (new TupleString_String("nvleftrightarrow", "⇹")), (new TupleString_String("nVleftarrow", "⇺")), (new TupleString_String("nVrightarrow", "⇻")), (new TupleString_String("nVleftrightarrow", "⇼")), (new TupleString_String("leftarrowtriangle", "⇽")), (new TupleString_String("rightarrowtriangle", "⇾")), (new TupleString_String("leftrightarrowtriangle", "⇿")), (new TupleString_String("forall", "∀")), (new TupleString_String("complement", "∁")), (new TupleString_String("partial", "∂")), (new TupleString_String("exists", "∃")), (new TupleString_String("nexists", "∄")), (new TupleString_String("varnothing", "∅")), (new TupleString_String("increment", "∆")), (new TupleString_String("nabla", "∇")), (new TupleString_String("in", "∈")), (new TupleString_String("notin", "∉")), (new TupleString_String("smallin", "∊")), (new TupleString_String("ni", "∋")), (new TupleString_String("nni", "∌")), (new TupleString_String("smallni", "∍")), (new TupleString_String("QED", "∎")), (new TupleString_String("prod", "∏")), (new TupleString_String("coprod", "∐")), (new TupleString_String("sum", "∑")), (new TupleString_String("minus", "−")), (new TupleString_String("mp", "∓")), (new TupleString_String("dotplus", "∔")), (new TupleString_String("divslash", "∕")), (new TupleString_String("smallsetminus", "∖")), (new TupleString_String("ast", "∗")), (new TupleString_String("vysmwhtcircle", "∘")), (new TupleString_String("vysmblkcircle", "∙")), (new TupleString_String("sqrt", "√")), (new TupleString_String("cuberoot", "∛")), (new TupleString_String("fourthroot", "∜")), (new TupleString_String("propto", "∝")), (new TupleString_String("infty", "∞")), (new TupleString_String("rightangle", "∟")), (new TupleString_String("angle", "∠")), (new TupleString_String("measuredangle", "∡")), (new TupleString_String("sphericalangle", "∢")), (new TupleString_String("mid", "∣")), (new TupleString_String("nmid", "∤")), (new TupleString_String("parallel", "∥")), (new TupleString_String("nparallel", "∦")), (new TupleString_String("wedge", "∧")), (new TupleString_String("vee", "∨")), (new TupleString_String("cap", "∩")), (new TupleString_String("cup", "∪")), (new TupleString_String("int", "∫")), (new TupleString_String("iint", "∬")), (new TupleString_String("iiint", "∭")), (new TupleString_String("oint", "∮")), (new TupleString_String("oiint", "∯")), (new TupleString_String("oiiint", "∰")), (new TupleString_String("intclockwise", "∱")), (new TupleString_String("varointclockwise", "∲")), (new TupleString_String("ointctrclockwise", "∳")), (new TupleString_String("therefore", "∴")), (new TupleString_String("because", "∵")), (new TupleString_String("mathratio", "∶")), (new TupleString_String("Colon", "∷")), (new TupleString_String("dotminus", "∸")), (new TupleString_String("dashcolon", "∹")), (new TupleString_String("dotsminusdots", "∺")), (new TupleString_String("kernelcontraction", "∻")), (new TupleString_String("sim", "∼")), (new TupleString_String("backsim", "∽")), (new TupleString_String("invlazys", "∾")), (new TupleString_String("sinewave", "∿")), (new TupleString_String("wr", "≀")), (new TupleString_String("nsim", "≁")), (new TupleString_String("eqsim", "≂")), (new TupleString_String("simeq", "≃")), (new TupleString_String("nsime", "≄")), (new TupleString_String("cong", "≅")), (new TupleString_String("simneqq", "≆")), (new TupleString_String("ncong", "≇")), (new TupleString_String("approx", "≈")), (new TupleString_String("napprox", "≉")), (new TupleString_String("approxeq", "≊")), (new TupleString_String("approxident", "≋")), (new TupleString_String("backcong", "≌")), (new TupleString_String("asymp", "≍")), (new TupleString_String("Bumpeq", "≎")), (new TupleString_String("bumpeq", "≏")), (new TupleString_String("doteq", "≐")), (new TupleString_String("Doteq", "≑")), (new TupleString_String("fallingdotseq", "≒")), (new TupleString_String("risingdotseq", "≓")), (new TupleString_String("coloneq", "≔")), (new TupleString_String("eqcolon", "≕")), (new TupleString_String("eqcirc", "≖")), (new TupleString_String("circeq", "≗")), (new TupleString_String("arceq", "≘")), (new TupleString_String("wedgeq", "≙")), (new TupleString_String("veeeq", "≚")), (new TupleString_String("stareq", "≛")), (new TupleString_String("triangleq", "≜")), (new TupleString_String("eqdef", "≝")), (new TupleString_String("measeq", "≞")), (new TupleString_String("questeq", "≟")), (new TupleString_String("ne", "≠")), (new TupleString_String("equiv", "≡")), (new TupleString_String("nequiv", "≢")), (new TupleString_String("Equiv", "≣")), (new TupleString_String("leq", "≤")), (new TupleString_String("geq", "≥")), (new TupleString_String("leqq", "≦")), (new TupleString_String("geqq", "≧")), (new TupleString_String("lneqq", "≨")), (new TupleString_String("gneqq", "≩")), (new TupleString_String("ll", "≪")), (new TupleString_String("gg", "≫")), (new TupleString_String("between", "≬")), (new TupleString_String("nasymp", "≭")), (new TupleString_String("nless", "≮")), (new TupleString_String("ngtr", "≯")), (new TupleString_String("nleq", "≰")), (new TupleString_String("ngeq", "≱")), (new TupleString_String("lesssim", "≲")), (new TupleString_String("gtrsim", "≳")), (new TupleString_String("nlesssim", "≴")), (new TupleString_String("ngtrsim", "≵")), (new TupleString_String("lessgtr", "≶")), (new TupleString_String("gtrless", "≷")), (new TupleString_String("nlessgtr", "≸")), (new TupleString_String("ngtrless", "≹")), (new TupleString_String("prec", "≺")), (new TupleString_String("succ", "≻")), (new TupleString_String("preccurlyeq", "≼")), (new TupleString_String("succcurlyeq", "≽")), (new TupleString_String("precsim", "≾")), (new TupleString_String("succsim", "≿")), (new TupleString_String("nprec", "⊀")), (new TupleString_String("nsucc", "⊁")), (new TupleString_String("subset", "⊂")), (new TupleString_String("supset", "⊃")), (new TupleString_String("nsubset", "⊄")), (new TupleString_String("nsupset", "⊅")), (new TupleString_String("subseteq", "⊆")), (new TupleString_String("supseteq", "⊇")), (new TupleString_String("nsubseteq", "⊈")), (new TupleString_String("nsupseteq", "⊉")), (new TupleString_String("subsetneq", "⊊")), (new TupleString_String("supsetneq", "⊋")), (new TupleString_String("cupleftarrow", "⊌")), (new TupleString_String("cupdot", "⊍")), (new TupleString_String("uplus", "⊎")), (new TupleString_String("sqsubset", "⊏")), (new TupleString_String("sqsupset", "⊐")), (new TupleString_String("sqsubseteq", "⊑")), (new TupleString_String("sqsupseteq", "⊒")), (new TupleString_String("sqcap", "⊓")), (new TupleString_String("sqcup", "⊔")), (new TupleString_String("oplus", "⊕")), (new TupleString_String("ominus", "⊖")), (new TupleString_String("otimes", "⊗")), (new TupleString_String("oslash", "⊘")), (new TupleString_String("odot", "⊙")), (new TupleString_String("circledcirc", "⊚")), (new TupleString_String("circledast", "⊛")), (new TupleString_String("circledequal", "⊜")), (new TupleString_String("circleddash", "⊝")), (new TupleString_String("boxplus", "⊞")), (new TupleString_String("boxminus", "⊟")), (new TupleString_String("boxtimes", "⊠")), (new TupleString_String("boxdot", "⊡")), (new TupleString_String("vdash", "⊢")), (new TupleString_String("dashv", "⊣")), (new TupleString_String("top", "⊤")), (new TupleString_String("bot", "⊥")), (new TupleString_String("assert", "⊦")), (new TupleString_String("models", "⊧")), (new TupleString_String("vDash", "⊨")), (new TupleString_String("Vdash", "⊩")), (new TupleString_String("Vvdash", "⊪")), (new TupleString_String("VDash", "⊫")), (new TupleString_String("nvdash", "⊬")), (new TupleString_String("nvDash", "⊭")), (new TupleString_String("nVdash", "⊮")), (new TupleString_String("nVDash", "⊯")), (new TupleString_String("prurel", "⊰")), (new TupleString_String("scurel", "⊱")), (new TupleString_String("vartriangleleft", "⊲")), (new TupleString_String("vartriangleright", "⊳")), (new TupleString_String("trianglelefteq", "⊴")), (new TupleString_String("trianglerighteq", "⊵")), (new TupleString_String("origof", "⊶")), (new TupleString_String("imageof", "⊷")), (new TupleString_String("multimap", "⊸")), (new TupleString_String("hermitmatrix", "⊹")), (new TupleString_String("intercal", "⊺")), (new TupleString_String("veebar", "⊻")), (new TupleString_String("barwedge", "⊼")), (new TupleString_String("barvee", "⊽")), (new TupleString_String("measuredrightangle", "⊾")), (new TupleString_String("varlrtriangle", "⊿")), (new TupleString_String("bigwedge", "⋀")), (new TupleString_String("bigvee", "⋁")), (new TupleString_String("bigcap", "⋂")), (new TupleString_String("bigcup", "⋃")), (new TupleString_String("smwhtdiamond", "⋄")), (new TupleString_String("cdot", "⋅")), (new TupleString_String("star", "⋆")), (new TupleString_String("divideontimes", "⋇")), (new TupleString_String("bowtie", "⋈")), (new TupleString_String("ltimes", "⋉")), (new TupleString_String("rtimes", "⋊")), (new TupleString_String("leftthreetimes", "⋋")), (new TupleString_String("rightthreetimes", "⋌")), (new TupleString_String("backsimeq", "⋍")), (new TupleString_String("curlyvee", "⋎")), (new TupleString_String("curlywedge", "⋏")), (new TupleString_String("Subset", "⋐")), (new TupleString_String("Supset", "⋑")), (new TupleString_String("Cap", "⋒")), (new TupleString_String("Cup", "⋓")), (new TupleString_String("pitchfork", "⋔")), (new TupleString_String("equalparallel", "⋕")), (new TupleString_String("lessdot", "⋖")), (new TupleString_String("gtrdot", "⋗")), (new TupleString_String("lll", "⋘")), (new TupleString_String("ggg", "⋙")), (new TupleString_String("lesseqgtr", "⋚")), (new TupleString_String("gtreqless", "⋛")), (new TupleString_String("eqless", "⋜")), (new TupleString_String("eqgtr", "⋝")), (new TupleString_String("curlyeqprec", "⋞")), (new TupleString_String("curlyeqsucc", "⋟")), (new TupleString_String("npreccurlyeq", "⋠")), (new TupleString_String("nsucccurlyeq", "⋡")), (new TupleString_String("nsqsubseteq", "⋢")), (new TupleString_String("nsqsupseteq", "⋣")), (new TupleString_String("sqsubsetneq", "⋤")), (new TupleString_String("sqsupsetneq", "⋥")), (new TupleString_String("lnsim", "⋦")), (new TupleString_String("gnsim", "⋧")), (new TupleString_String("precnsim", "⋨")), (new TupleString_String("succnsim", "⋩")), (new TupleString_String("nvartriangleleft", "⋪")), (new TupleString_String("nvartriangleright", "⋫")), (new TupleString_String("ntrianglelefteq", "⋬")), (new TupleString_String("ntrianglerighteq", "⋭")), (new TupleString_String("vdots", "⋮")), (new TupleString_String("unicodecdots", "⋯")), (new TupleString_String("adots", "⋰")), (new TupleString_String("ddots", "⋱")), (new TupleString_String("disin", "⋲")), (new TupleString_String("varisins", "⋳")), (new TupleString_String("isins", "⋴")), (new TupleString_String("isindot", "⋵")), (new TupleString_String("varisinobar", "⋶")), (new TupleString_String("isinobar", "⋷")), (new TupleString_String("isinvb", "⋸")), (new TupleString_String("isinE", "⋹")), (new TupleString_String("nisd", "⋺")), (new TupleString_String("varnis", "⋻")), (new TupleString_String("nis", "⋼")), (new TupleString_String("varniobar", "⋽")), (new TupleString_String("niobar", "⋾")), (new TupleString_String("bagmember", "⋿")), (new TupleString_String("diameter", "⌀")), (new TupleString_String("house", "⌂")), (new TupleString_String("varbarwedge", "⌅")), (new TupleString_String("vardoublebarwedge", "⌆")), (new TupleString_String("lceil", "⌈")), (new TupleString_String("rceil", "⌉")), (new TupleString_String("lfloor", "⌊")), (new TupleString_String("rfloor", "⌋")), (new TupleString_String("invnot", "⌐")), (new TupleString_String("sqlozenge", "⌑")), (new TupleString_String("profline", "⌒")), (new TupleString_String("profsurf", "⌓")), (new TupleString_String("viewdata", "⌗")), (new TupleString_String("turnednot", "⌙")), (new TupleString_String("ulcorner", "⌜")), (new TupleString_String("urcorner", "⌝")), (new TupleString_String("llcorner", "⌞")), (new TupleString_String("lrcorner", "⌟")), (new TupleString_String("inttop", "⌠")), (new TupleString_String("intbottom", "⌡")), (new TupleString_String("frown", "⌢")), (new TupleString_String("smile", "⌣")), (new TupleString_String("varhexagonlrbonds", "⌬")), (new TupleString_String("conictaper", "⌲")), (new TupleString_String("topbot", "⌶")), (new TupleString_String("obar", "⌽")), (new TupleString_String("APLnotslash", "⌿")), (new TupleString_String("APLnotbackslash", "⍀")), (new TupleString_String("APLboxupcaret", "⍓")), (new TupleString_String("APLboxquestion", "⍰")), (new TupleString_String("rangledownzigzagarrow", "⍼")), (new TupleString_String("hexagon", "⎔")), (new TupleString_String("lparenuend", "⎛")), (new TupleString_String("lparenextender", "⎜")), (new TupleString_String("lparenlend", "⎝")), (new TupleString_String("rparenuend", "⎞")), (new TupleString_String("rparenextender", "⎟")), (new TupleString_String("rparenlend", "⎠")), (new TupleString_String("lbrackuend", "⎡")), (new TupleString_String("lbrackextender", "⎢")), (new TupleString_String("lbracklend", "⎣")), (new TupleString_String("rbrackuend", "⎤")), (new TupleString_String("rbrackextender", "⎥")), (new TupleString_String("rbracklend", "⎦")), (new TupleString_String("lbraceuend", "⎧")), (new TupleString_String("lbracemid", "⎨")), (new TupleString_String("lbracelend", "⎩")), (new TupleString_String("vbraceextender", "⎪")), (new TupleString_String("rbraceuend", "⎫")), (new TupleString_String("rbracemid", "⎬")), (new TupleString_String("rbracelend", "⎭")), (new TupleString_String("intextender", "⎮")), (new TupleString_String("harrowextender", "⎯")), (new TupleString_String("lmoustache", "⎰")), (new TupleString_String("rmoustache", "⎱")), (new TupleString_String("sumtop", "⎲")), (new TupleString_String("sumbottom", "⎳")), (new TupleString_String("overbracket", "⎴")), (new TupleString_String("underbracket", "⎵")), (new TupleString_String("bbrktbrk", "⎶")), (new TupleString_String("sqrtbottom", "⎷")), (new TupleString_String("lvboxline", "⎸")), (new TupleString_String("rvboxline", "⎹")), (new TupleString_String("varcarriagereturn", "⏎")), (new TupleString_String("overparen", "⏜")), (new TupleString_String("underparen", "⏝")), (new TupleString_String("overbrace", "⏞")), (new TupleString_String("underbrace", "⏟")), (new TupleString_String("obrbrak", "⏠")), (new TupleString_String("ubrbrak", "⏡")), (new TupleString_String("trapezium", "⏢")), (new TupleString_String("benzenr", "⏣")), (new TupleString_String("strns", "⏤")), (new TupleString_String("fltns", "⏥")), (new TupleString_String("accurrent", "⏦")), (new TupleString_String("elinters", "⏧")), (new TupleString_String("blanksymbol", "␢")), (new TupleString_String("mathvisiblespace", "␣")), (new TupleString_String("bdtriplevdash", "┆")), (new TupleString_String("blockuphalf", "▀")), (new TupleString_String("blocklowhalf", "▄")), (new TupleString_String("blockfull", "█")), (new TupleString_String("blocklefthalf", "▌")), (new TupleString_String("blockrighthalf", "▐")), (new TupleString_String("blockqtrshaded", "░")), (new TupleString_String("blockhalfshaded", "▒")), (new TupleString_String("blockthreeqtrshaded", "▓")), (new TupleString_String("mdlgblksquare", "■")), (new TupleString_String("mdlgwhtsquare", "□")), (new TupleString_String("squoval", "▢")), (new TupleString_String("blackinwhitesquare", "▣")), (new TupleString_String("squarehfill", "▤")), (new TupleString_String("squarevfill", "▥")), (new TupleString_String("squarehvfill", "▦")), (new TupleString_String("squarenwsefill", "▧")), (new TupleString_String("squareneswfill", "▨")), (new TupleString_String("squarecrossfill", "▩")), (new TupleString_String("smblksquare", "▪")), (new TupleString_String("smwhtsquare", "▫")), (new TupleString_String("hrectangleblack", "▬")), (new TupleString_String("hrectangle", "▭")), (new TupleString_String("vrectangleblack", "▮")), (new TupleString_String("vrectangle", "▯")), (new TupleString_String("parallelogramblack", "▰")), (new TupleString_String("parallelogram", "▱")), (new TupleString_String("bigblacktriangleup", "▲")), (new TupleString_String("bigtriangleup", "△")), (new TupleString_String("blacktriangle", "▴")), (new TupleString_String("vartriangle", "▵")), (new TupleString_String("blacktriangleright", "▶")), (new TupleString_String("triangleright", "▷")), (new TupleString_String("smallblacktriangleright", "▸")), (new TupleString_String("smalltriangleright", "▹")), (new TupleString_String("blackpointerright", "►")), (new TupleString_String("whitepointerright", "▻")), (new TupleString_String("bigblacktriangledown", "▼")), (new TupleString_String("bigtriangledown", "▽")), (new TupleString_String("blacktriangledown", "▾")), (new TupleString_String("triangledown", "▿")), (new TupleString_String("blacktriangleleft", "◀")), (new TupleString_String("triangleleft", "◁")), (new TupleString_String("smallblacktriangleleft", "◂")), (new TupleString_String("smalltriangleleft", "◃")), (new TupleString_String("blackpointerleft", "◄")), (new TupleString_String("whitepointerleft", "◅")), (new TupleString_String("mdlgblkdiamond", "◆")), (new TupleString_String("mdlgwhtdiamond", "◇")), (new TupleString_String("blackinwhitediamond", "◈")), (new TupleString_String("fisheye", "◉")), (new TupleString_String("mdlgwhtlozenge", "◊")), (new TupleString_String("mdlgwhtcircle", "○")), (new TupleString_String("dottedcircle", "◌")), (new TupleString_String("circlevertfill", "◍")), (new TupleString_String("bullseye", "◎")), (new TupleString_String("mdlgblkcircle", "●")), (new TupleString_String("circlelefthalfblack", "◐")), (new TupleString_String("circlerighthalfblack", "◑")), (new TupleString_String("circlebottomhalfblack", "◒")), (new TupleString_String("circletophalfblack", "◓")), (new TupleString_String("circleurquadblack", "◔")), (new TupleString_String("blackcircleulquadwhite", "◕")), (new TupleString_String("blacklefthalfcircle", "◖")), (new TupleString_String("blackrighthalfcircle", "◗")), (new TupleString_String("inversebullet", "◘")), (new TupleString_String("inversewhitecircle", "◙")), (new TupleString_String("invwhiteupperhalfcircle", "◚")), (new TupleString_String("invwhitelowerhalfcircle", "◛")), (new TupleString_String("ularc", "◜")), (new TupleString_String("urarc", "◝")), (new TupleString_String("lrarc", "◞")), (new TupleString_String("llarc", "◟")), (new TupleString_String("topsemicircle", "◠")), (new TupleString_String("botsemicircle", "◡")), (new TupleString_String("lrblacktriangle", "◢")), (new TupleString_String("llblacktriangle", "◣")), (new TupleString_String("ulblacktriangle", "◤")), (new TupleString_String("urblacktriangle", "◥")), (new TupleString_String("smwhtcircle", "◦")), (new TupleString_String("squareleftblack", "◧")), (new TupleString_String("squarerightblack", "◨")), (new TupleString_String("squareulblack", "◩")), (new TupleString_String("squarelrblack", "◪")), (new TupleString_String("boxbar", "◫")), (new TupleString_String("trianglecdot", "◬")), (new TupleString_String("triangleleftblack", "◭")), (new TupleString_String("trianglerightblack", "◮")), (new TupleString_String("lgwhtcircle", "◯")), (new TupleString_String("squareulquad", "◰")), (new TupleString_String("squarellquad", "◱")), (new TupleString_String("squarelrquad", "◲")), (new TupleString_String("squareurquad", "◳")), (new TupleString_String("circleulquad", "◴")), (new TupleString_String("circlellquad", "◵")), (new TupleString_String("circlelrquad", "◶")), (new TupleString_String("circleurquad", "◷")), (new TupleString_String("ultriangle", "◸")), (new TupleString_String("urtriangle", "◹")), (new TupleString_String("lltriangle", "◺")), (new TupleString_String("mdwhtsquare", "◻")), (new TupleString_String("mdblksquare", "◼")), (new TupleString_String("mdsmwhtsquare", "◽")), (new TupleString_String("mdsmblksquare", "◾")), (new TupleString_String("lrtriangle", "◿")), (new TupleString_String("bigstar", "★")), (new TupleString_String("bigwhitestar", "☆")), (new TupleString_String("astrosun", "☉")), (new TupleString_String("danger", "☡")), (new TupleString_String("blacksmiley", "☻")), (new TupleString_String("sun", "☼")), (new TupleString_String("rightmoon", "☽")), (new TupleString_String("leftmoon", "☾")), (new TupleString_String("female", "♀")), (new TupleString_String("male", "♂")), (new TupleString_String("spadesuit", "♠")), (new TupleString_String("heartsuit", "♡")), (new TupleString_String("diamondsuit", "♢")), (new TupleString_String("clubsuit", "♣")), (new TupleString_String("varspadesuit", "♤")), (new TupleString_String("varheartsuit", "♥")), (new TupleString_String("vardiamondsuit", "♦")), (new TupleString_String("varclubsuit", "♧")), (new TupleString_String("quarternote", "♩")), (new TupleString_String("eighthnote", "♪")), (new TupleString_String("twonotes", "♫")), (new TupleString_String("flat", "♭")), (new TupleString_String("natural", "♮")), (new TupleString_String("sharp", "♯")), (new TupleString_String("acidfree", "♾")), (new TupleString_String("dicei", "⚀")), (new TupleString_String("diceii", "⚁")), (new TupleString_String("diceiii", "⚂")), (new TupleString_String("diceiv", "⚃")), (new TupleString_String("dicev", "⚄")), (new TupleString_String("dicevi", "⚅")), (new TupleString_String("circledrightdot", "⚆")), (new TupleString_String("circledtwodots", "⚇")), (new TupleString_String("blackcircledrightdot", "⚈")), (new TupleString_String("blackcircledtwodots", "⚉")), (new TupleString_String("Hermaphrodite", "⚥")), (new TupleString_String("mdwhtcircle", "⚪")), (new TupleString_String("mdblkcircle", "⚫")), (new TupleString_String("mdsmwhtcircle", "⚬")), (new TupleString_String("neuter", "⚲")), (new TupleString_String("checkmark", "✓")), (new TupleString_String("maltese", "✠")), (new TupleString_String("circledstar", "✪")), (new TupleString_String("varstar", "✶")), (new TupleString_String("dingasterisk", "✽")), (new TupleString_String("lbrbrak", "❲")), (new TupleString_String("rbrbrak", "❳")), (new TupleString_String("draftingarrow", "➛")), (new TupleString_String("threedangle", "⟀")), (new TupleString_String("whiteinwhitetriangle", "⟁")), (new TupleString_String("perp", "⟂")), (new TupleString_String("subsetcirc", "⟃")), (new TupleString_String("supsetcirc", "⟄")), (new TupleString_String("lbag", "⟅")), (new TupleString_String("rbag", "⟆")), (new TupleString_String("veedot", "⟇")), (new TupleString_String("bsolhsub", "⟈")), (new TupleString_String("suphsol", "⟉")), (new TupleString_String("longdivision", "⟌")), (new TupleString_String("diamondcdot", "⟐")), (new TupleString_String("wedgedot", "⟑")), (new TupleString_String("upin", "⟒")), (new TupleString_String("pullback", "⟓")), (new TupleString_String("pushout", "⟔")), (new TupleString_String("leftouterjoin", "⟕")), (new TupleString_String("rightouterjoin", "⟖")), (new TupleString_String("fullouterjoin", "⟗")), (new TupleString_String("bigbot", "⟘")), (new TupleString_String("bigtop", "⟙")), (new TupleString_String("DashVDash", "⟚")), (new TupleString_String("dashVdash", "⟛")), (new TupleString_String("multimapinv", "⟜")), (new TupleString_String("vlongdash", "⟝")), (new TupleString_String("longdashv", "⟞")), (new TupleString_String("cirbot", "⟟")), (new TupleString_String("lozengeminus", "⟠")), (new TupleString_String("concavediamond", "⟡")), (new TupleString_String("concavediamondtickleft", "⟢")), (new TupleString_String("concavediamondtickright", "⟣")), (new TupleString_String("whitesquaretickleft", "⟤")), (new TupleString_String("whitesquaretickright", "⟥")), (new TupleString_String("lBrack", "⟦")), (new TupleString_String("rBrack", "⟧")), (new TupleString_String("langle", "⟨")), (new TupleString_String("rangle", "⟩")), (new TupleString_String("lAngle", "⟪")), (new TupleString_String("rAngle", "⟫")), (new TupleString_String("Lbrbrak", "⟬")), (new TupleString_String("Rbrbrak", "⟭")), (new TupleString_String("lgroup", "⟮")), (new TupleString_String("rgroup", "⟯")), (new TupleString_String("UUparrow", "⟰")), (new TupleString_String("DDownarrow", "⟱")), (new TupleString_String("acwgapcirclearrow", "⟲")), (new TupleString_String("cwgapcirclearrow", "⟳")), (new TupleString_String("rightarrowonoplus", "⟴")), (new TupleString_String("longleftarrow", "⟵")), (new TupleString_String("longrightarrow", "⟶")), (new TupleString_String("longleftrightarrow", "⟷")), (new TupleString_String("Longleftarrow", "⟸")), (new TupleString_String("Longrightarrow", "⟹")), (new TupleString_String("Longleftrightarrow", "⟺")), (new TupleString_String("longmapsfrom", "⟻")), (new TupleString_String("longmapsto", "⟼")), (new TupleString_String("Longmapsfrom", "⟽")), (new TupleString_String("Longmapsto", "⟾")), (new TupleString_String("longrightsquigarrow", "⟿")), (new TupleString_String("nvtwoheadrightarrow", "⤀")), (new TupleString_String("nVtwoheadrightarrow", "⤁")), (new TupleString_String("nvLeftarrow", "⤂")), (new TupleString_String("nvRightarrow", "⤃")), (new TupleString_String("nvLeftrightarrow", "⤄")), (new TupleString_String("twoheadmapsto", "⤅")), (new TupleString_String("Mapsfrom", "⤆")), (new TupleString_String("Mapsto", "⤇")), (new TupleString_String("downarrowbarred", "⤈")), (new TupleString_String("uparrowbarred", "⤉")), (new TupleString_String("Uuparrow", "⤊")), (new TupleString_String("Ddownarrow", "⤋")), (new TupleString_String("leftbkarrow", "⤌")), (new TupleString_String("rightbkarrow", "⤍")), (new TupleString_String("leftdbkarrow", "⤎")), (new TupleString_String("dbkarow", "⤏")), (new TupleString_String("drbkarow", "⤐")), (new TupleString_String("rightdotarrow", "⤑")), (new TupleString_String("baruparrow", "⤒")), (new TupleString_String("downarrowbar", "⤓")), (new TupleString_String("nvrightarrowtail", "⤔")), (new TupleString_String("nVrightarrowtail", "⤕")), (new TupleString_String("twoheadrightarrowtail", "⤖")), (new TupleString_String("nvtwoheadrightarrowtail", "⤗")), (new TupleString_String("nVtwoheadrightarrowtail", "⤘")), (new TupleString_String("lefttail", "⤙")), (new TupleString_String("righttail", "⤚")), (new TupleString_String("leftdbltail", "⤛")), (new TupleString_String("rightdbltail", "⤜")), (new TupleString_String("diamondleftarrow", "⤝")), (new TupleString_String("rightarrowdiamond", "⤞")), (new TupleString_String("diamondleftarrowbar", "⤟")), (new TupleString_String("barrightarrowdiamond", "⤠")), (new TupleString_String("nwsearrow", "⤡")), (new TupleString_String("neswarrow", "⤢")), (new TupleString_String("hknwarrow", "⤣")), (new TupleString_String("hknearrow", "⤤")), (new TupleString_String("hksearow", "⤥")), (new TupleString_String("hkswarow", "⤦")), (new TupleString_String("tona", "⤧")), (new TupleString_String("toea", "⤨")), (new TupleString_String("tosa", "⤩")), (new TupleString_String("towa", "⤪")), (new TupleString_String("rdiagovfdiag", "⤫")), (new TupleString_String("fdiagovrdiag", "⤬")), (new TupleString_String("seovnearrow", "⤭")), (new TupleString_String("neovsearrow", "⤮")), (new TupleString_String("fdiagovnearrow", "⤯")), (new TupleString_String("rdiagovsearrow", "⤰")), (new TupleString_String("neovnwarrow", "⤱")), (new TupleString_String("nwovnearrow", "⤲")), (new TupleString_String("rightcurvedarrow", "⤳")), (new TupleString_String("uprightcurvearrow", "⤴")), (new TupleString_String("downrightcurvedarrow", "⤵")), (new TupleString_String("leftdowncurvedarrow", "⤶")), (new TupleString_String("rightdowncurvedarrow", "⤷")), (new TupleString_String("cwrightarcarrow", "⤸")), (new TupleString_String("acwleftarcarrow", "⤹")), (new TupleString_String("acwoverarcarrow", "⤺")), (new TupleString_String("acwunderarcarrow", "⤻")), (new TupleString_String("curvearrowrightminus", "⤼")), (new TupleString_String("curvearrowleftplus", "⤽")), (new TupleString_String("cwundercurvearrow", "⤾")), (new TupleString_String("ccwundercurvearrow", "⤿")), (new TupleString_String("acwcirclearrow", "⥀")), (new TupleString_String("cwcirclearrow", "⥁")), (new TupleString_String("rightarrowshortleftarrow", "⥂")), (new TupleString_String("leftarrowshortrightarrow", "⥃")), (new TupleString_String("shortrightarrowleftarrow", "⥄")), (new TupleString_String("rightarrowplus", "⥅")), (new TupleString_String("leftarrowplus", "⥆")), (new TupleString_String("rightarrowx", "⥇")), (new TupleString_String("leftrightarrowcircle", "⥈")), (new TupleString_String("twoheaduparrowcircle", "⥉")), (new TupleString_String("leftrightharpoonupdown", "⥊")), (new TupleString_String("leftrightharpoondownup", "⥋")), (new TupleString_String("updownharpoonrightleft", "⥌")), (new TupleString_String("updownharpoonleftright", "⥍")), (new TupleString_String("leftrightharpoonupup", "⥎")), (new TupleString_String("updownharpoonrightright", "⥏")), (new TupleString_String("leftrightharpoondowndown", "⥐")), (new TupleString_String("updownharpoonleftleft", "⥑")), (new TupleString_String("barleftharpoonup", "⥒")), (new TupleString_String("rightharpoonupbar", "⥓")), (new TupleString_String("barupharpoonright", "⥔")), (new TupleString_String("downharpoonrightbar", "⥕")), (new TupleString_String("barleftharpoondown", "⥖")), (new TupleString_String("rightharpoondownbar", "⥗")), (new TupleString_String("barupharpoonleft", "⥘")), (new TupleString_String("downharpoonleftbar", "⥙")), (new TupleString_String("leftharpoonupbar", "⥚")), (new TupleString_String("barrightharpoonup", "⥛")), (new TupleString_String("upharpoonrightbar", "⥜")), (new TupleString_String("bardownharpoonright", "⥝")), (new TupleString_String("leftharpoondownbar", "⥞")), (new TupleString_String("barrightharpoondown", "⥟")), (new TupleString_String("upharpoonleftbar", "⥠")), (new TupleString_String("bardownharpoonleft", "⥡")), (new TupleString_String("leftharpoonsupdown", "⥢")), (new TupleString_String("upharpoonsleftright", "⥣")), (new TupleString_String("rightharpoonsupdown", "⥤")), (new TupleString_String("downharpoonsleftright", "⥥")), (new TupleString_String("leftrightharpoonsup", "⥦")), (new TupleString_String("leftrightharpoonsdown", "⥧")), (new TupleString_String("rightleftharpoonsup", "⥨")), (new TupleString_String("rightleftharpoonsdown", "⥩")), (new TupleString_String("leftharpoonupdash", "⥪")), (new TupleString_String("dashleftharpoondown", "⥫")), (new TupleString_String("rightharpoonupdash", "⥬")), (new TupleString_String("dashrightharpoondown", "⥭")), (new TupleString_String("updownharpoonsleftright", "⥮")), (new TupleString_String("downupharpoonsleftright", "⥯")), (new TupleString_String("rightimply", "⥰")), (new TupleString_String("equalrightarrow", "⥱")), (new TupleString_String("similarrightarrow", "⥲")), (new TupleString_String("leftarrowsimilar", "⥳")), (new TupleString_String("rightarrowsimilar", "⥴")), (new TupleString_String("rightarrowapprox", "⥵")), (new TupleString_String("ltlarr", "⥶")), (new TupleString_String("leftarrowless", "⥷")), (new TupleString_String("gtrarr", "⥸")), (new TupleString_String("subrarr", "⥹")), (new TupleString_String("leftarrowsubset", "⥺")), (new TupleString_String("suplarr", "⥻")), (new TupleString_String("leftfishtail", "⥼")), (new TupleString_String("rightfishtail", "⥽")), (new TupleString_String("upfishtail", "⥾")), (new TupleString_String("downfishtail", "⥿")), (new TupleString_String("Vvert", "⦀")), (new TupleString_String("mdsmblkcircle", "⦁")), (new TupleString_String("typecolon", "⦂")), (new TupleString_String("lBrace", "⦃")), (new TupleString_String("rBrace", "⦄")), (new TupleString_String("lParen", "⦅")), (new TupleString_String("rParen", "⦆")), (new TupleString_String("llparenthesis", "⦇")), (new TupleString_String("rrparenthesis", "⦈")), (new TupleString_String("llangle", "⦉")), (new TupleString_String("rrangle", "⦊")), (new TupleString_String("lbrackubar", "⦋")), (new TupleString_String("rbrackubar", "⦌")), (new TupleString_String("lbrackultick", "⦍")), (new TupleString_String("rbracklrtick", "⦎")), (new TupleString_String("lbracklltick", "⦏")), (new TupleString_String("rbrackurtick", "⦐")), (new TupleString_String("langledot", "⦑")), (new TupleString_String("rangledot", "⦒")), (new TupleString_String("lparenless", "⦓")), (new TupleString_String("rparengtr", "⦔")), (new TupleString_String("Lparengtr", "⦕")), (new TupleString_String("Rparenless", "⦖")), (new TupleString_String("lblkbrbrak", "⦗")), (new TupleString_String("rblkbrbrak", "⦘")), (new TupleString_String("fourvdots", "⦙")), (new TupleString_String("vzigzag", "⦚")), (new TupleString_String("measuredangleleft", "⦛")), (new TupleString_String("rightanglesqr", "⦜")), (new TupleString_String("rightanglemdot", "⦝")), (new TupleString_String("angles", "⦞")), (new TupleString_String("angdnr", "⦟")), (new TupleString_String("gtlpar", "⦠")), (new TupleString_String("sphericalangleup", "⦡")), (new TupleString_String("turnangle", "⦢")), (new TupleString_String("revangle", "⦣")), (new TupleString_String("angleubar", "⦤")), (new TupleString_String("revangleubar", "⦥")), (new TupleString_String("wideangledown", "⦦")), (new TupleString_String("wideangleup", "⦧")), (new TupleString_String("measanglerutone", "⦨")), (new TupleString_String("measanglelutonw", "⦩")), (new TupleString_String("measanglerdtose", "⦪")), (new TupleString_String("measangleldtosw", "⦫")), (new TupleString_String("measangleurtone", "⦬")), (new TupleString_String("measangleultonw", "⦭")), (new TupleString_String("measangledrtose", "⦮")), (new TupleString_String("measangledltosw", "⦯")), (new TupleString_String("revemptyset", "⦰")), (new TupleString_String("emptysetobar", "⦱")), (new TupleString_String("emptysetocirc", "⦲")), (new TupleString_String("emptysetoarr", "⦳")), (new TupleString_String("emptysetoarrl", "⦴")), (new TupleString_String("circlehbar", "⦵")), (new TupleString_String("circledvert", "⦶")), (new TupleString_String("circledparallel", "⦷")), (new TupleString_String("obslash", "⦸")), (new TupleString_String("operp", "⦹")), (new TupleString_String("obot", "⦺")), (new TupleString_String("olcross", "⦻")), (new TupleString_String("odotslashdot", "⦼")), (new TupleString_String("uparrowoncircle", "⦽")), (new TupleString_String("circledwhitebullet", "⦾")), (new TupleString_String("circledbullet", "⦿")), (new TupleString_String("olessthan", "⧀")), (new TupleString_String("ogreaterthan", "⧁")), (new TupleString_String("cirscir", "⧂")), (new TupleString_String("cirE", "⧃")), (new TupleString_String("boxdiag", "⧄")), (new TupleString_String("boxbslash", "⧅")), (new TupleString_String("boxast", "⧆")), (new TupleString_String("boxcircle", "⧇")), (new TupleString_String("boxbox", "⧈")), (new TupleString_String("boxonbox", "⧉")), (new TupleString_String("triangleodot", "⧊")), (new TupleString_String("triangleubar", "⧋")), (new TupleString_String("triangles", "⧌")), (new TupleString_String("triangleserifs", "⧍")), (new TupleString_String("rtriltri", "⧎")), (new TupleString_String("ltrivb", "⧏")), (new TupleString_String("vbrtri", "⧐")), (new TupleString_String("lfbowtie", "⧑")), (new TupleString_String("rfbowtie", "⧒")), (new TupleString_String("fbowtie", "⧓")), (new TupleString_String("lftimes", "⧔")), (new TupleString_String("rftimes", "⧕")), (new TupleString_String("hourglass", "⧖")), (new TupleString_String("blackhourglass", "⧗")), (new TupleString_String("lvzigzag", "⧘")), (new TupleString_String("rvzigzag", "⧙")), (new TupleString_String("Lvzigzag", "⧚")), (new TupleString_String("Rvzigzag", "⧛")), (new TupleString_String("iinfin", "⧜")), (new TupleString_String("tieinfty", "⧝")), (new TupleString_String("nvinfty", "⧞")), (new TupleString_String("dualmap", "⧟")), (new TupleString_String("laplac", "⧠")), (new TupleString_String("lrtriangleeq", "⧡")), (new TupleString_String("shuffle", "⧢")), (new TupleString_String("eparsl", "⧣")), (new TupleString_String("smeparsl", "⧤")), (new TupleString_String("eqvparsl", "⧥")), (new TupleString_String("gleichstark", "⧦")), (new TupleString_String("thermod", "⧧")), (new TupleString_String("downtriangleleftblack", "⧨")), (new TupleString_String("downtrianglerightblack", "⧩")), (new TupleString_String("blackdiamonddownarrow", "⧪")), (new TupleString_String("mdlgblklozenge", "⧫")), (new TupleString_String("circledownarrow", "⧬")), (new TupleString_String("blackcircledownarrow", "⧭")), (new TupleString_String("errbarsquare", "⧮")), (new TupleString_String("errbarblacksquare", "⧯")), (new TupleString_String("errbardiamond", "⧰")), (new TupleString_String("errbarblackdiamond", "⧱")), (new TupleString_String("errbarcircle", "⧲")), (new TupleString_String("errbarblackcircle", "⧳")), (new TupleString_String("ruledelayed", "⧴")), (new TupleString_String("setminus", "⧵")), (new TupleString_String("dsol", "⧶")), (new TupleString_String("rsolbar", "⧷")), (new TupleString_String("xsol", "⧸")), (new TupleString_String("xbsol", "⧹")), (new TupleString_String("doubleplus", "⧺")), (new TupleString_String("tripleplus", "⧻")), (new TupleString_String("lcurvyangle", "⧼")), (new TupleString_String("rcurvyangle", "⧽")), (new TupleString_String("tplus", "⧾")), (new TupleString_String("tminus", "⧿")), (new TupleString_String("bigodot", "⨀")), (new TupleString_String("bigoplus", "⨁")), (new TupleString_String("bigotimes", "⨂")), (new TupleString_String("bigcupdot", "⨃")), (new TupleString_String("biguplus", "⨄")), (new TupleString_String("bigsqcap", "⨅")), (new TupleString_String("bigsqcup", "⨆")), (new TupleString_String("conjquant", "⨇")), (new TupleString_String("disjquant", "⨈")), (new TupleString_String("bigtimes", "⨉")), (new TupleString_String("modtwosum", "⨊")), (new TupleString_String("sumint", "⨋")), (new TupleString_String("iiiint", "⨌")), (new TupleString_String("intbar", "⨍")), (new TupleString_String("intBar", "⨎")), (new TupleString_String("fint", "⨏")), (new TupleString_String("cirfnint", "⨐")), (new TupleString_String("awint", "⨑")), (new TupleString_String("rppolint", "⨒")), (new TupleString_String("scpolint", "⨓")), (new TupleString_String("npolint", "⨔")), (new TupleString_String("pointint", "⨕")), (new TupleString_String("sqint", "⨖")), (new TupleString_String("intlarhk", "⨗")), (new TupleString_String("intx", "⨘")), (new TupleString_String("intcap", "⨙")), (new TupleString_String("intcup", "⨚")), (new TupleString_String("upint", "⨛")), (new TupleString_String("lowint", "⨜")), (new TupleString_String("Join", "⨝")), (new TupleString_String("bigtriangleleft", "⨞")), (new TupleString_String("zcmp", "⨟")), (new TupleString_String("zpipe", "⨠")), (new TupleString_String("zproject", "⨡")), (new TupleString_String("ringplus", "⨢")), (new TupleString_String("plushat", "⨣")), (new TupleString_String("simplus", "⨤")), (new TupleString_String("plusdot", "⨥")), (new TupleString_String("plussim", "⨦")), (new TupleString_String("plussubtwo", "⨧")), (new TupleString_String("plustrif", "⨨")), (new TupleString_String("commaminus", "⨩")), (new TupleString_String("minusdot", "⨪")), (new TupleString_String("minusfdots", "⨫")), (new TupleString_String("minusrdots", "⨬")), (new TupleString_String("opluslhrim", "⨭")), (new TupleString_String("oplusrhrim", "⨮")), (new TupleString_String("vectimes", "⨯")), (new TupleString_String("dottimes", "⨰")), (new TupleString_String("timesbar", "⨱")), (new TupleString_String("btimes", "⨲")), (new TupleString_String("smashtimes", "⨳")), (new TupleString_String("otimeslhrim", "⨴")), (new TupleString_String("otimesrhrim", "⨵")), (new TupleString_String("otimeshat", "⨶")), (new TupleString_String("Otimes", "⨷")), (new TupleString_String("odiv", "⨸")), (new TupleString_String("triangleplus", "⨹")), (new TupleString_String("triangleminus", "⨺")), (new TupleString_String("triangletimes", "⨻")), (new TupleString_String("intprod", "⨼")), (new TupleString_String("intprodr", "⨽")), (new TupleString_String("fcmp", "⨾")), (new TupleString_String("amalg", "⨿")), (new TupleString_String("capdot", "⩀")), (new TupleString_String("uminus", "⩁")), (new TupleString_String("barcup", "⩂")), (new TupleString_String("barcap", "⩃")), (new TupleString_String("capwedge", "⩄")), (new TupleString_String("cupvee", "⩅")), (new TupleString_String("cupovercap", "⩆")), (new TupleString_String("capovercup", "⩇")), (new TupleString_String("cupbarcap", "⩈")), (new TupleString_String("capbarcup", "⩉")), (new TupleString_String("twocups", "⩊")), (new TupleString_String("twocaps", "⩋")), (new TupleString_String("closedvarcup", "⩌")), (new TupleString_String("closedvarcap", "⩍")), (new TupleString_String("Sqcap", "⩎")), (new TupleString_String("Sqcup", "⩏")), (new TupleString_String("closedvarcupsmashprod", "⩐")), (new TupleString_String("wedgeodot", "⩑")), (new TupleString_String("veeodot", "⩒")), (new TupleString_String("Wedge", "⩓")), (new TupleString_String("Vee", "⩔")), (new TupleString_String("wedgeonwedge", "⩕")), (new TupleString_String("veeonvee", "⩖")), (new TupleString_String("bigslopedvee", "⩗")), (new TupleString_String("bigslopedwedge", "⩘")), (new TupleString_String("veeonwedge", "⩙")), (new TupleString_String("wedgemidvert", "⩚")), (new TupleString_String("veemidvert", "⩛")), (new TupleString_String("midbarwedge", "⩜")), (new TupleString_String("midbarvee", "⩝")), (new TupleString_String("doublebarwedge", "⩞")), (new TupleString_String("wedgebar", "⩟")), (new TupleString_String("wedgedoublebar", "⩠")), (new TupleString_String("varveebar", "⩡")), (new TupleString_String("doublebarvee", "⩢")), (new TupleString_String("veedoublebar", "⩣")), (new TupleString_String("dsub", "⩤")), (new TupleString_String("rsub", "⩥")), (new TupleString_String("eqdot", "⩦")), (new TupleString_String("dotequiv", "⩧")), (new TupleString_String("equivVert", "⩨")), (new TupleString_String("equivVvert", "⩩")), (new TupleString_String("dotsim", "⩪")), (new TupleString_String("simrdots", "⩫")), (new TupleString_String("simminussim", "⩬")), (new TupleString_String("congdot", "⩭")), (new TupleString_String("asteq", "⩮")), (new TupleString_String("hatapprox", "⩯")), (new TupleString_String("approxeqq", "⩰")), (new TupleString_String("eqqplus", "⩱")), (new TupleString_String("pluseqq", "⩲")), (new TupleString_String("eqqsim", "⩳")), (new TupleString_String("Coloneq", "⩴")), (new TupleString_String("eqeq", "⩵")), (new TupleString_String("eqeqeq", "⩶")), (new TupleString_String("ddotseq", "⩷")), (new TupleString_String("equivDD", "⩸")), (new TupleString_String("ltcir", "⩹")), (new TupleString_String("gtcir", "⩺")), (new TupleString_String("ltquest", "⩻")), (new TupleString_String("gtquest", "⩼")), (new TupleString_String("leqslant", "⩽")), (new TupleString_String("geqslant", "⩾")), (new TupleString_String("lesdot", "⩿")), (new TupleString_String("gesdot", "⪀")), (new TupleString_String("lesdoto", "⪁")), (new TupleString_String("gesdoto", "⪂")), (new TupleString_String("lesdotor", "⪃")), (new TupleString_String("gesdotol", "⪄")), (new TupleString_String("lessapprox", "⪅")), (new TupleString_String("gtrapprox", "⪆")), (new TupleString_String("lneq", "⪇")), (new TupleString_String("gneq", "⪈")), (new TupleString_String("lnapprox", "⪉")), (new TupleString_String("gnapprox", "⪊")), (new TupleString_String("lesseqqgtr", "⪋")), (new TupleString_String("gtreqqless", "⪌")), (new TupleString_String("lsime", "⪍")), (new TupleString_String("gsime", "⪎")), (new TupleString_String("lsimg", "⪏")), (new TupleString_String("gsiml", "⪐")), (new TupleString_String("lgE", "⪑")), (new TupleString_String("glE", "⪒")), (new TupleString_String("lesges", "⪓")), (new TupleString_String("gesles", "⪔")), (new TupleString_String("eqslantless", "⪕")), (new TupleString_String("eqslantgtr", "⪖")), (new TupleString_String("elsdot", "⪗")), (new TupleString_String("egsdot", "⪘")), (new TupleString_String("eqqless", "⪙")), (new TupleString_String("eqqgtr", "⪚")), (new TupleString_String("eqqslantless", "⪛")), (new TupleString_String("eqqslantgtr", "⪜")), (new TupleString_String("simless", "⪝")), (new TupleString_String("simgtr", "⪞")), (new TupleString_String("simlE", "⪟")), (new TupleString_String("simgE", "⪠")), (new TupleString_String("Lt", "⪡")), (new TupleString_String("Gt", "⪢")), (new TupleString_String("partialmeetcontraction", "⪣")), (new TupleString_String("glj", "⪤")), (new TupleString_String("gla", "⪥")), (new TupleString_String("ltcc", "⪦")), (new TupleString_String("gtcc", "⪧")), (new TupleString_String("lescc", "⪨")), (new TupleString_String("gescc", "⪩")), (new TupleString_String("smt", "⪪")), (new TupleString_String("lat", "⪫")), (new TupleString_String("smte", "⪬")), (new TupleString_String("late", "⪭")), (new TupleString_String("bumpeqq", "⪮")), (new TupleString_String("preceq", "⪯")), (new TupleString_String("succeq", "⪰")), (new TupleString_String("precneq", "⪱")), (new TupleString_String("succneq", "⪲")), (new TupleString_String("preceqq", "⪳")), (new TupleString_String("succeqq", "⪴")), (new TupleString_String("precneqq", "⪵")), (new TupleString_String("succneqq", "⪶")), (new TupleString_String("precapprox", "⪷")), (new TupleString_String("succapprox", "⪸")), (new TupleString_String("precnapprox", "⪹")), (new TupleString_String("succnapprox", "⪺")), (new TupleString_String("Prec", "⪻")), (new TupleString_String("Succ", "⪼")), (new TupleString_String("subsetdot", "⪽")), (new TupleString_String("supsetdot", "⪾")), (new TupleString_String("subsetplus", "⪿")), (new TupleString_String("supsetplus", "⫀")), (new TupleString_String("submult", "⫁")), (new TupleString_String("supmult", "⫂")), (new TupleString_String("subedot", "⫃")), (new TupleString_String("supedot", "⫄")), (new TupleString_String("subseteqq", "⫅")), (new TupleString_String("supseteqq", "⫆")), (new TupleString_String("subsim", "⫇")), (new TupleString_String("supsim", "⫈")), (new TupleString_String("subsetapprox", "⫉")), (new TupleString_String("supsetapprox", "⫊")), (new TupleString_String("subsetneqq", "⫋")), (new TupleString_String("supsetneqq", "⫌")), (new TupleString_String("lsqhook", "⫍")), (new TupleString_String("rsqhook", "⫎")), (new TupleString_String("csub", "⫏")), (new TupleString_String("csup", "⫐")), (new TupleString_String("csube", "⫑")), (new TupleString_String("csupe", "⫒")), (new TupleString_String("subsup", "⫓")), (new TupleString_String("supsub", "⫔")), (new TupleString_String("subsub", "⫕")), (new TupleString_String("supsup", "⫖")), (new TupleString_String("suphsub", "⫗")), (new TupleString_String("supdsub", "⫘")), (new TupleString_String("forkv", "⫙")), (new TupleString_String("topfork", "⫚")), (new TupleString_String("mlcp", "⫛")), (new TupleString_String("forks", "⫝̸")), (new TupleString_String("forksnot", "⫝")), (new TupleString_String("shortlefttack", "⫞")), (new TupleString_String("shortdowntack", "⫟")), (new TupleString_String("shortuptack", "⫠")), (new TupleString_String("perps", "⫡")), (new TupleString_String("vDdash", "⫢")), (new TupleString_String("dashV", "⫣")), (new TupleString_String("Dashv", "⫤")), (new TupleString_String("DashV", "⫥")), (new TupleString_String("varVdash", "⫦")), (new TupleString_String("Barv", "⫧")), (new TupleString_String("vBar", "⫨")), (new TupleString_String("vBarv", "⫩")), (new TupleString_String("barV", "⫪")), (new TupleString_String("Vbar", "⫫")), (new TupleString_String("Not", "⫬")), (new TupleString_String("bNot", "⫭")), (new TupleString_String("revnmid", "⫮")), (new TupleString_String("cirmid", "⫯")), (new TupleString_String("midcir", "⫰")), (new TupleString_String("topcir", "⫱")), (new TupleString_String("nhpar", "⫲")), (new TupleString_String("parsim", "⫳")), (new TupleString_String("interleave", "⫴")), (new TupleString_String("nhVvert", "⫵")), (new TupleString_String("threedotcolon", "⫶")), (new TupleString_String("lllnest", "⫷")), (new TupleString_String("gggnest", "⫸")), (new TupleString_String("leqqslant", "⫹")), (new TupleString_String("geqqslant", "⫺")), (new TupleString_String("trslash", "⫻")), (new TupleString_String("biginterleave", "⫼")), (new TupleString_String("sslash", "⫽")), (new TupleString_String("talloblong", "⫾")), (new TupleString_String("bigtalloblong", "⫿")), (new TupleString_String("squaretopblack", "⬒")), (new TupleString_String("squarebotblack", "⬓")), (new TupleString_String("squareurblack", "⬔")), (new TupleString_String("squarellblack", "⬕")), (new TupleString_String("diamondleftblack", "⬖")), (new TupleString_String("diamondrightblack", "⬗")), (new TupleString_String("diamondtopblack", "⬘")), (new TupleString_String("diamondbotblack", "⬙")), (new TupleString_String("dottedsquare", "⬚")), (new TupleString_String("lgblksquare", "⬛")), (new TupleString_String("lgwhtsquare", "⬜")), (new TupleString_String("vysmblksquare", "⬝")), (new TupleString_String("vysmwhtsquare", "⬞")), (new TupleString_String("pentagonblack", "⬟")), (new TupleString_String("pentagon", "⬠")), (new TupleString_String("varhexagon", "⬡")), (new TupleString_String("varhexagonblack", "⬢")), (new TupleString_String("hexagonblack", "⬣")), (new TupleString_String("lgblkcircle", "⬤")), (new TupleString_String("mdblkdiamond", "⬥")), (new TupleString_String("mdwhtdiamond", "⬦")), (new TupleString_String("mdblklozenge", "⬧")), (new TupleString_String("mdwhtlozenge", "⬨")), (new TupleString_String("smblkdiamond", "⬩")), (new TupleString_String("smblklozenge", "⬪")), (new TupleString_String("smwhtlozenge", "⬫")), (new TupleString_String("blkhorzoval", "⬬")), (new TupleString_String("whthorzoval", "⬭")), (new TupleString_String("blkvertoval", "⬮")), (new TupleString_String("whtvertoval", "⬯")), (new TupleString_String("circleonleftarrow", "⬰")), (new TupleString_String("leftthreearrows", "⬱")), (new TupleString_String("leftarrowonoplus", "⬲")), (new TupleString_String("longleftsquigarrow", "⬳")), (new TupleString_String("nvtwoheadleftarrow", "⬴")), (new TupleString_String("nVtwoheadleftarrow", "⬵")), (new TupleString_String("twoheadmapsfrom", "⬶")), (new TupleString_String("twoheadleftdbkarrow", "⬷")), (new TupleString_String("leftdotarrow", "⬸")), (new TupleString_String("nvleftarrowtail", "⬹")), (new TupleString_String("nVleftarrowtail", "⬺")), (new TupleString_String("twoheadleftarrowtail", "⬻")), (new TupleString_String("nvtwoheadleftarrowtail", "⬼")), (new TupleString_String("nVtwoheadleftarrowtail", "⬽")), (new TupleString_String("leftarrowx", "⬾")), (new TupleString_String("leftcurvedarrow", "⬿")), (new TupleString_String("equalleftarrow", "⭀")), (new TupleString_String("bsimilarleftarrow", "⭁")), (new TupleString_String("leftarrowbackapprox", "⭂")), (new TupleString_String("rightarrowgtr", "⭃")), (new TupleString_String("rightarrowsupset", "⭄")), (new TupleString_String("LLeftarrow", "⭅")), (new TupleString_String("RRightarrow", "⭆")), (new TupleString_String("bsimilarrightarrow", "⭇")), (new TupleString_String("rightarrowbackapprox", "⭈")), (new TupleString_String("similarleftarrow", "⭉")), (new TupleString_String("leftarrowapprox", "⭊")), (new TupleString_String("leftarrowbsimilar", "⭋")), (new TupleString_String("rightarrowbsimilar", "⭌")), (new TupleString_String("medwhitestar", "⭐")), (new TupleString_String("medblackstar", "⭑")), (new TupleString_String("smwhitestar", "⭒")), (new TupleString_String("rightpentagonblack", "⭓")), (new TupleString_String("rightpentagon", "⭔")), (new TupleString_String("postalmark", "〒")), (new TupleString_String("lbrbrak", "〔")), (new TupleString_String("rbrbrak", "〕")), (new TupleString_String("Lbrbrak", "〘")), (new TupleString_String("Rbrbrak", "〙")), (new TupleString_String("hzigzag", "〰")), (new TupleString_String("mbfA", "𝐀")), (new TupleString_String("mbfB", "𝐁")), (new TupleString_String("mbfC", "𝐂")), (new TupleString_String("mbfD", "𝐃")), (new TupleString_String("mbfE", "𝐄")), (new TupleString_String("mbfF", "𝐅")), (new TupleString_String("mbfG", "𝐆")), (new TupleString_String("mbfH", "𝐇")), (new TupleString_String("mbfI", "𝐈")), (new TupleString_String("mbfJ", "𝐉")), (new TupleString_String("mbfK", "𝐊")), (new TupleString_String("mbfL", "𝐋")), (new TupleString_String("mbfM", "𝐌")), (new TupleString_String("mbfN", "𝐍")), (new TupleString_String("mbfO", "𝐎")), (new TupleString_String("mbfP", "𝐏")), (new TupleString_String("mbfQ", "𝐐")), (new TupleString_String("mbfR", "𝐑")), (new TupleString_String("mbfS", "𝐒")), (new TupleString_String("mbfT", "𝐓")), (new TupleString_String("mbfU", "𝐔")), (new TupleString_String("mbfV", "𝐕")), (new TupleString_String("mbfW", "𝐖")), (new TupleString_String("mbfX", "𝐗")), (new TupleString_String("mbfY", "𝐘")), (new TupleString_String("mbfZ", "𝐙")), (new TupleString_String("mbfa", "𝐚")), (new TupleString_String("mbfb", "𝐛")), (new TupleString_String("mbfc", "𝐜")), (new TupleString_String("mbfd", "𝐝")), (new TupleString_String("mbfe", "𝐞")), (new TupleString_String("mbff", "𝐟")), (new TupleString_String("mbfg", "𝐠")), (new TupleString_String("mbfh", "𝐡")), (new TupleString_String("mbfi", "𝐢")), (new TupleString_String("mbfj", "𝐣")), (new TupleString_String("mbfk", "𝐤")), (new TupleString_String("mbfl", "𝐥")), (new TupleString_String("mbfm", "𝐦")), (new TupleString_String("mbfn", "𝐧")), (new TupleString_String("mbfo", "𝐨")), (new TupleString_String("mbfp", "𝐩")), (new TupleString_String("mbfq", "𝐪")), (new TupleString_String("mbfr", "𝐫")), (new TupleString_String("mbfs", "𝐬")), (new TupleString_String("mbft", "𝐭")), (new TupleString_String("mbfu", "𝐮")), (new TupleString_String("mbfv", "𝐯")), (new TupleString_String("mbfw", "𝐰")), (new TupleString_String("mbfx", "𝐱")), (new TupleString_String("mbfy", "𝐲")), (new TupleString_String("mbfz", "𝐳")), (new TupleString_String("mitA", "𝐴")), (new TupleString_String("mitB", "𝐵")), (new TupleString_String("mitC", "𝐶")), (new TupleString_String("mitD", "𝐷")), (new TupleString_String("mitE", "𝐸")), (new TupleString_String("mitF", "𝐹")), (new TupleString_String("mitG", "𝐺")), (new TupleString_String("mitH", "𝐻")), (new TupleString_String("mitI", "𝐼")), (new TupleString_String("mitJ", "𝐽")), (new TupleString_String("mitK", "𝐾")), (new TupleString_String("mitL", "𝐿")), (new TupleString_String("mitM", "𝑀")), (new TupleString_String("mitN", "𝑁")), (new TupleString_String("mitO", "𝑂")), (new TupleString_String("mitP", "𝑃")), (new TupleString_String("mitQ", "𝑄")), (new TupleString_String("mitR", "𝑅")), (new TupleString_String("mitS", "𝑆")), (new TupleString_String("mitT", "𝑇")), (new TupleString_String("mitU", "𝑈")), (new TupleString_String("mitV", "𝑉")), (new TupleString_String("mitW", "𝑊")), (new TupleString_String("mitX", "𝑋")), (new TupleString_String("mitY", "𝑌")), (new TupleString_String("mitZ", "𝑍")), (new TupleString_String("mita", "𝑎")), (new TupleString_String("mitb", "𝑏")), (new TupleString_String("mitc", "𝑐")), (new TupleString_String("mitd", "𝑑")), (new TupleString_String("mite", "𝑒")), (new TupleString_String("mitf", "𝑓")), (new TupleString_String("mitg", "𝑔")), (new TupleString_String("miti", "𝑖")), (new TupleString_String("mitj", "𝑗")), (new TupleString_String("mitk", "𝑘")), (new TupleString_String("mitl", "𝑙")), (new TupleString_String("mitm", "𝑚")), (new TupleString_String("mitn", "𝑛")), (new TupleString_String("mito", "𝑜")), (new TupleString_String("mitp", "𝑝")), (new TupleString_String("mitq", "𝑞")), (new TupleString_String("mitr", "𝑟")), (new TupleString_String("mits", "𝑠")), (new TupleString_String("mitt", "𝑡")), (new TupleString_String("mitu", "𝑢")), (new TupleString_String("mitv", "𝑣")), (new TupleString_String("mitw", "𝑤")), (new TupleString_String("mitx", "𝑥")), (new TupleString_String("mity", "𝑦")), (new TupleString_String("mitz", "𝑧")), (new TupleString_String("mbfitA", "𝑨")), (new TupleString_String("mbfitB", "𝑩")), (new TupleString_String("mbfitC", "𝑪")), (new TupleString_String("mbfitD", "𝑫")), (new TupleString_String("mbfitE", "𝑬")), (new TupleString_String("mbfitF", "𝑭")), (new TupleString_String("mbfitG", "𝑮")), (new TupleString_String("mbfitH", "𝑯")), (new TupleString_String("mbfitI", "𝑰")), (new TupleString_String("mbfitJ", "𝑱")), (new TupleString_String("mbfitK", "𝑲")), (new TupleString_String("mbfitL", "𝑳")), (new TupleString_String("mbfitM", "𝑴")), (new TupleString_String("mbfitN", "𝑵")), (new TupleString_String("mbfitO", "𝑶")), (new TupleString_String("mbfitP", "𝑷")), (new TupleString_String("mbfitQ", "𝑸")), (new TupleString_String("mbfitR", "𝑹")), (new TupleString_String("mbfitS", "𝑺")), (new TupleString_String("mbfitT", "𝑻")), (new TupleString_String("mbfitU", "𝑼")), (new TupleString_String("mbfitV", "𝑽")), (new TupleString_String("mbfitW", "𝑾")), (new TupleString_String("mbfitX", "𝑿")), (new TupleString_String("mbfitY", "𝒀")), (new TupleString_String("mbfitZ", "𝒁")), (new TupleString_String("mbfita", "𝒂")), (new TupleString_String("mbfitb", "𝒃")), (new TupleString_String("mbfitc", "𝒄")), (new TupleString_String("mbfitd", "𝒅")), (new TupleString_String("mbfite", "𝒆")), (new TupleString_String("mbfitf", "𝒇")), (new TupleString_String("mbfitg", "𝒈")), (new TupleString_String("mbfith", "𝒉")), (new TupleString_String("mbfiti", "𝒊")), (new TupleString_String("mbfitj", "𝒋")), (new TupleString_String("mbfitk", "𝒌")), (new TupleString_String("mbfitl", "𝒍")), (new TupleString_String("mbfitm", "𝒎")), (new TupleString_String("mbfitn", "𝒏")), (new TupleString_String("mbfito", "𝒐")), (new TupleString_String("mbfitp", "𝒑")), (new TupleString_String("mbfitq", "𝒒")), (new TupleString_String("mbfitr", "𝒓")), (new TupleString_String("mbfits", "𝒔")), (new TupleString_String("mbfitt", "𝒕")), (new TupleString_String("mbfitu", "𝒖")), (new TupleString_String("mbfitv", "𝒗")), (new TupleString_String("mbfitw", "𝒘")), (new TupleString_String("mbfitx", "𝒙")), (new TupleString_String("mbfity", "𝒚")), (new TupleString_String("mbfitz", "𝒛")), (new TupleString_String("mscrA", "𝒜")), (new TupleString_String("mscrC", "𝒞")), (new TupleString_String("mscrD", "𝒟")), (new TupleString_String("mscrG", "𝒢")), (new TupleString_String("mscrJ", "𝒥")), (new TupleString_String("mscrK", "𝒦")), (new TupleString_String("mscrN", "𝒩")), (new TupleString_String("mscrO", "𝒪")), (new TupleString_String("mscrP", "𝒫")), (new TupleString_String("mscrQ", "𝒬")), (new TupleString_String("mscrS", "𝒮")), (new TupleString_String("mscrT", "𝒯")), (new TupleString_String("mscrU", "𝒰")), (new TupleString_String("mscrV", "𝒱")), (new TupleString_String("mscrW", "𝒲")), (new TupleString_String("mscrX", "𝒳")), (new TupleString_String("mscrY", "𝒴")), (new TupleString_String("mscrZ", "𝒵")), (new TupleString_String("mscra", "𝒶")), (new TupleString_String("mscrb", "𝒷")), (new TupleString_String("mscrc", "𝒸")), (new TupleString_String("mscrd", "𝒹")), (new TupleString_String("mscrf", "𝒻")), (new TupleString_String("mscrh", "𝒽")), (new TupleString_String("mscri", "𝒾")), (new TupleString_String("mscrj", "𝒿")), (new TupleString_String("mscrk", "𝓀")), (new TupleString_String("mscrl", "𝓁")), (new TupleString_String("mscrm", "𝓂")), (new TupleString_String("mscrn", "𝓃")), (new TupleString_String("mscrp", "𝓅")), (new TupleString_String("mscrq", "𝓆")), (new TupleString_String("mscrr", "𝓇")), (new TupleString_String("mscrs", "𝓈")), (new TupleString_String("mscrt", "𝓉")), (new TupleString_String("mscru", "𝓊")), (new TupleString_String("mscrv", "𝓋")), (new TupleString_String("mscrw", "𝓌")), (new TupleString_String("mscrx", "𝓍")), (new TupleString_String("mscry", "𝓎")), (new TupleString_String("mscrz", "𝓏")), (new TupleString_String("mbfscrA", "𝓐")), (new TupleString_String("mbfscrB", "𝓑")), (new TupleString_String("mbfscrC", "𝓒")), (new TupleString_String("mbfscrD", "𝓓")), (new TupleString_String("mbfscrE", "𝓔")), (new TupleString_String("mbfscrF", "𝓕")), (new TupleString_String("mbfscrG", "𝓖")), (new TupleString_String("mbfscrH", "𝓗")), (new TupleString_String("mbfscrI", "𝓘")), (new TupleString_String("mbfscrJ", "𝓙")), (new TupleString_String("mbfscrK", "𝓚")), (new TupleString_String("mbfscrL", "𝓛")), (new TupleString_String("mbfscrM", "𝓜")), (new TupleString_String("mbfscrN", "𝓝")), (new TupleString_String("mbfscrO", "𝓞")), (new TupleString_String("mbfscrP", "𝓟")), (new TupleString_String("mbfscrQ", "𝓠")), (new TupleString_String("mbfscrR", "𝓡")), (new TupleString_String("mbfscrS", "𝓢")), (new TupleString_String("mbfscrT", "𝓣")), (new TupleString_String("mbfscrU", "𝓤")), (new TupleString_String("mbfscrV", "𝓥")), (new TupleString_String("mbfscrW", "𝓦")), (new TupleString_String("mbfscrX", "𝓧")), (new TupleString_String("mbfscrY", "𝓨")), (new TupleString_String("mbfscrZ", "𝓩")), (new TupleString_String("mbfscra", "𝓪")), (new TupleString_String("mbfscrb", "𝓫")), (new TupleString_String("mbfscrc", "𝓬")), (new TupleString_String("mbfscrd", "𝓭")), (new TupleString_String("mbfscre", "𝓮")), (new TupleString_String("mbfscrf", "𝓯")), (new TupleString_String("mbfscrg", "𝓰")), (new TupleString_String("mbfscrh", "𝓱")), (new TupleString_String("mbfscri", "𝓲")), (new TupleString_String("mbfscrj", "𝓳")), (new TupleString_String("mbfscrk", "𝓴")), (new TupleString_String("mbfscrl", "𝓵")), (new TupleString_String("mbfscrm", "𝓶")), (new TupleString_String("mbfscrn", "𝓷")), (new TupleString_String("mbfscro", "𝓸")), (new TupleString_String("mbfscrp", "𝓹")), (new TupleString_String("mbfscrq", "𝓺")), (new TupleString_String("mbfscrr", "𝓻")), (new TupleString_String("mbfscrs", "𝓼")), (new TupleString_String("mbfscrt", "𝓽")), (new TupleString_String("mbfscru", "𝓾")), (new TupleString_String("mbfscrv", "𝓿")), (new TupleString_String("mbfscrw", "𝔀")), (new TupleString_String("mbfscrx", "𝔁")), (new TupleString_String("mbfscry", "𝔂")), (new TupleString_String("mbfscrz", "𝔃")), (new TupleString_String("mfrakA", "𝔄")), (new TupleString_String("mfrakB", "𝔅")), (new TupleString_String("mfrakD", "𝔇")), (new TupleString_String("mfrakE", "𝔈")), (new TupleString_String("mfrakF", "𝔉")), (new TupleString_String("mfrakG", "𝔊")), (new TupleString_String("mfrakJ", "𝔍")), (new TupleString_String("mfrakK", "𝔎")), (new TupleString_String("mfrakL", "𝔏")), (new TupleString_String("mfrakM", "𝔐")), (new TupleString_String("mfrakN", "𝔑")), (new TupleString_String("mfrakO", "𝔒")), (new TupleString_String("mfrakP", "𝔓")), (new TupleString_String("mfrakQ", "𝔔")), (new TupleString_String("mfrakS", "𝔖")), (new TupleString_String("mfrakT", "𝔗")), (new TupleString_String("mfrakU", "𝔘")), (new TupleString_String("mfrakV", "𝔙")), (new TupleString_String("mfrakW", "𝔚")), (new TupleString_String("mfrakX", "𝔛")), (new TupleString_String("mfrakY", "𝔜")), (new TupleString_String("mfraka", "𝔞")), (new TupleString_String("mfrakb", "𝔟")), (new TupleString_String("mfrakc", "𝔠")), (new TupleString_String("mfrakd", "𝔡")), (new TupleString_String("mfrake", "𝔢")), (new TupleString_String("mfrakf", "𝔣")), (new TupleString_String("mfrakg", "𝔤")), (new TupleString_String("mfrakh", "𝔥")), (new TupleString_String("mfraki", "𝔦")), (new TupleString_String("mfrakj", "𝔧")), (new TupleString_String("mfrakk", "𝔨")), (new TupleString_String("mfrakl", "𝔩")), (new TupleString_String("mfrakm", "𝔪")), (new TupleString_String("mfrakn", "𝔫")), (new TupleString_String("mfrako", "𝔬")), (new TupleString_String("mfrakp", "𝔭")), (new TupleString_String("mfrakq", "𝔮")), (new TupleString_String("mfrakr", "𝔯")), (new TupleString_String("mfraks", "𝔰")), (new TupleString_String("mfrakt", "𝔱")), (new TupleString_String("mfraku", "𝔲")), (new TupleString_String("mfrakv", "𝔳")), (new TupleString_String("mfrakw", "𝔴")), (new TupleString_String("mfrakx", "𝔵")), (new TupleString_String("mfraky", "𝔶")), (new TupleString_String("mfrakz", "𝔷")), (new TupleString_String("BbbA", "𝔸")), (new TupleString_String("BbbB", "𝔹")), (new TupleString_String("BbbD", "𝔻")), (new TupleString_String("BbbE", "𝔼")), (new TupleString_String("BbbF", "𝔽")), (new TupleString_String("BbbG", "𝔾")), (new TupleString_String("BbbI", "𝕀")), (new TupleString_String("BbbJ", "𝕁")), (new TupleString_String("BbbK", "𝕂")), (new TupleString_String("BbbL", "𝕃")), (new TupleString_String("BbbM", "𝕄")), (new TupleString_String("BbbO", "𝕆")), (new TupleString_String("BbbS", "𝕊")), (new TupleString_String("BbbT", "𝕋")), (new TupleString_String("BbbU", "𝕌")), (new TupleString_String("BbbV", "𝕍")), (new TupleString_String("BbbW", "𝕎")), (new TupleString_String("BbbX", "𝕏")), (new TupleString_String("BbbY", "𝕐")), (new TupleString_String("Bbba", "𝕒")), (new TupleString_String("Bbbb", "𝕓")), (new TupleString_String("Bbbc", "𝕔")), (new TupleString_String("Bbbd", "𝕕")), (new TupleString_String("Bbbe", "𝕖")), (new TupleString_String("Bbbf", "𝕗")), (new TupleString_String("Bbbg", "𝕘")), (new TupleString_String("Bbbh", "𝕙")), (new TupleString_String("Bbbi", "𝕚")), (new TupleString_String("Bbbj", "𝕛")), (new TupleString_String("Bbbk", "𝕜")), (new TupleString_String("Bbbl", "𝕝")), (new TupleString_String("Bbbm", "𝕞")), (new TupleString_String("Bbbn", "𝕟")), (new TupleString_String("Bbbo", "𝕠")), (new TupleString_String("Bbbp", "𝕡")), (new TupleString_String("Bbbq", "𝕢")), (new TupleString_String("Bbbr", "𝕣")), (new TupleString_String("Bbbs", "𝕤")), (new TupleString_String("Bbbt", "𝕥")), (new TupleString_String("Bbbu", "𝕦")), (new TupleString_String("Bbbv", "𝕧")), (new TupleString_String("Bbbw", "𝕨")), (new TupleString_String("Bbbx", "𝕩")), (new TupleString_String("Bbby", "𝕪")), (new TupleString_String("Bbbz", "𝕫")), (new TupleString_String("mbffrakA", "𝕬")), (new TupleString_String("mbffrakB", "𝕭")), (new TupleString_String("mbffrakC", "𝕮")), (new TupleString_String("mbffrakD", "𝕯")), (new TupleString_String("mbffrakE", "𝕰")), (new TupleString_String("mbffrakF", "𝕱")), (new TupleString_String("mbffrakG", "𝕲")), (new TupleString_String("mbffrakH", "𝕳")), (new TupleString_String("mbffrakI", "𝕴")), (new TupleString_String("mbffrakJ", "𝕵")), (new TupleString_String("mbffrakK", "𝕶")), (new TupleString_String("mbffrakL", "𝕷")), (new TupleString_String("mbffrakM", "𝕸")), (new TupleString_String("mbffrakN", "𝕹")), (new TupleString_String("mbffrakO", "𝕺")), (new TupleString_String("mbffrakP", "𝕻")), (new TupleString_String("mbffrakQ", "𝕼")), (new TupleString_String("mbffrakR", "𝕽")), (new TupleString_String("mbffrakS", "𝕾")), (new TupleString_String("mbffrakT", "𝕿")), (new TupleString_String("mbffrakU", "𝖀")), (new TupleString_String("mbffrakV", "𝖁")), (new TupleString_String("mbffrakW", "𝖂")), (new TupleString_String("mbffrakX", "𝖃")), (new TupleString_String("mbffrakY", "𝖄")), (new TupleString_String("mbffrakZ", "𝖅")), (new TupleString_String("mbffraka", "𝖆")), (new TupleString_String("mbffrakb", "𝖇")), (new TupleString_String("mbffrakc", "𝖈")), (new TupleString_String("mbffrakd", "𝖉")), (new TupleString_String("mbffrake", "𝖊")), (new TupleString_String("mbffrakf", "𝖋")), (new TupleString_String("mbffrakg", "𝖌")), (new TupleString_String("mbffrakh", "𝖍")), (new TupleString_String("mbffraki", "𝖎")), (new TupleString_String("mbffrakj", "𝖏")), (new TupleString_String("mbffrakk", "𝖐")), (new TupleString_String("mbffrakl", "𝖑")), (new TupleString_String("mbffrakm", "𝖒")), (new TupleString_String("mbffrakn", "𝖓")), (new TupleString_String("mbffrako", "𝖔")), (new TupleString_String("mbffrakp", "𝖕")), (new TupleString_String("mbffrakq", "𝖖")), (new TupleString_String("mbffrakr", "𝖗")), (new TupleString_String("mbffraks", "𝖘")), (new TupleString_String("mbffrakt", "𝖙")), (new TupleString_String("mbffraku", "𝖚")), (new TupleString_String("mbffrakv", "𝖛")), (new TupleString_String("mbffrakw", "𝖜")), (new TupleString_String("mbffrakx", "𝖝")), (new TupleString_String("mbffraky", "𝖞")), (new TupleString_String("mbffrakz", "𝖟")), (new TupleString_String("msansA", "𝖠")), (new TupleString_String("msansB", "𝖡")), (new TupleString_String("msansC", "𝖢")), (new TupleString_String("msansD", "𝖣")), (new TupleString_String("msansE", "𝖤")), (new TupleString_String("msansF", "𝖥")), (new TupleString_String("msansG", "𝖦")), (new TupleString_String("msansH", "𝖧")), (new TupleString_String("msansI", "𝖨")), (new TupleString_String("msansJ", "𝖩")), (new TupleString_String("msansK", "𝖪")), (new TupleString_String("msansL", "𝖫")), (new TupleString_String("msansM", "𝖬")), (new TupleString_String("msansN", "𝖭")), (new TupleString_String("msansO", "𝖮")), (new TupleString_String("msansP", "𝖯")), (new TupleString_String("msansQ", "𝖰")), (new TupleString_String("msansR", "𝖱")), (new TupleString_String("msansS", "𝖲")), (new TupleString_String("msansT", "𝖳")), (new TupleString_String("msansU", "𝖴")), (new TupleString_String("msansV", "𝖵")), (new TupleString_String("msansW", "𝖶")), (new TupleString_String("msansX", "𝖷")), (new TupleString_String("msansY", "𝖸")), (new TupleString_String("msansZ", "𝖹")), (new TupleString_String("msansa", "𝖺")), (new TupleString_String("msansb", "𝖻")), (new TupleString_String("msansc", "𝖼")), (new TupleString_String("msansd", "𝖽")), (new TupleString_String("msanse", "𝖾")), (new TupleString_String("msansf", "𝖿")), (new TupleString_String("msansg", "𝗀")), (new TupleString_String("msansh", "𝗁")), (new TupleString_String("msansi", "𝗂")), (new TupleString_String("msansj", "𝗃")), (new TupleString_String("msansk", "𝗄")), (new TupleString_String("msansl", "𝗅")), (new TupleString_String("msansm", "𝗆")), (new TupleString_String("msansn", "𝗇")), (new TupleString_String("msanso", "𝗈")), (new TupleString_String("msansp", "𝗉")), (new TupleString_String("msansq", "𝗊")), (new TupleString_String("msansr", "𝗋")), (new TupleString_String("msanss", "𝗌")), (new TupleString_String("msanst", "𝗍")), (new TupleString_String("msansu", "𝗎")), (new TupleString_String("msansv", "𝗏")), (new TupleString_String("msansw", "𝗐")), (new TupleString_String("msansx", "𝗑")), (new TupleString_String("msansy", "𝗒")), (new TupleString_String("msansz", "𝗓")), (new TupleString_String("mbfsansA", "𝗔")), (new TupleString_String("mbfsansB", "𝗕")), (new TupleString_String("mbfsansC", "𝗖")), (new TupleString_String("mbfsansD", "𝗗")), (new TupleString_String("mbfsansE", "𝗘")), (new TupleString_String("mbfsansF", "𝗙")), (new TupleString_String("mbfsansG", "𝗚")), (new TupleString_String("mbfsansH", "𝗛")), (new TupleString_String("mbfsansI", "𝗜")), (new TupleString_String("mbfsansJ", "𝗝")), (new TupleString_String("mbfsansK", "𝗞")), (new TupleString_String("mbfsansL", "𝗟")), (new TupleString_String("mbfsansM", "𝗠")), (new TupleString_String("mbfsansN", "𝗡")), (new TupleString_String("mbfsansO", "𝗢")), (new TupleString_String("mbfsansP", "𝗣")), (new TupleString_String("mbfsansQ", "𝗤")), (new TupleString_String("mbfsansR", "𝗥")), (new TupleString_String("mbfsansS", "𝗦")), (new TupleString_String("mbfsansT", "𝗧")), (new TupleString_String("mbfsansU", "𝗨")), (new TupleString_String("mbfsansV", "𝗩")), (new TupleString_String("mbfsansW", "𝗪")), (new TupleString_String("mbfsansX", "𝗫")), (new TupleString_String("mbfsansY", "𝗬")), (new TupleString_String("mbfsansZ", "𝗭")), (new TupleString_String("mbfsansa", "𝗮")), (new TupleString_String("mbfsansb", "𝗯")), (new TupleString_String("mbfsansc", "𝗰")), (new TupleString_String("mbfsansd", "𝗱")), (new TupleString_String("mbfsanse", "𝗲")), (new TupleString_String("mbfsansf", "𝗳")), (new TupleString_String("mbfsansg", "𝗴")), (new TupleString_String("mbfsansh", "𝗵")), (new TupleString_String("mbfsansi", "𝗶")), (new TupleString_String("mbfsansj", "𝗷")), (new TupleString_String("mbfsansk", "𝗸")), (new TupleString_String("mbfsansl", "𝗹")), (new TupleString_String("mbfsansm", "𝗺")), (new TupleString_String("mbfsansn", "𝗻")), (new TupleString_String("mbfsanso", "𝗼")), (new TupleString_String("mbfsansp", "𝗽")), (new TupleString_String("mbfsansq", "𝗾")), (new TupleString_String("mbfsansr", "𝗿")), (new TupleString_String("mbfsanss", "𝘀")), (new TupleString_String("mbfsanst", "𝘁")), (new TupleString_String("mbfsansu", "𝘂")), (new TupleString_String("mbfsansv", "𝘃")), (new TupleString_String("mbfsansw", "𝘄")), (new TupleString_String("mbfsansx", "𝘅")), (new TupleString_String("mbfsansy", "𝘆")), (new TupleString_String("mbfsansz", "𝘇")), (new TupleString_String("mitsansA", "𝘈")), (new TupleString_String("mitsansB", "𝘉")), (new TupleString_String("mitsansC", "𝘊")), (new TupleString_String("mitsansD", "𝘋")), (new TupleString_String("mitsansE", "𝘌")), (new TupleString_String("mitsansF", "𝘍")), (new TupleString_String("mitsansG", "𝘎")), (new TupleString_String("mitsansH", "𝘏")), (new TupleString_String("mitsansI", "𝘐")), (new TupleString_String("mitsansJ", "𝘑")), (new TupleString_String("mitsansK", "𝘒")), (new TupleString_String("mitsansL", "𝘓")), (new TupleString_String("mitsansM", "𝘔")), (new TupleString_String("mitsansN", "𝘕")), (new TupleString_String("mitsansO", "𝘖")), (new TupleString_String("mitsansP", "𝘗")), (new TupleString_String("mitsansQ", "𝘘")), (new TupleString_String("mitsansR", "𝘙")), (new TupleString_String("mitsansS", "𝘚")), (new TupleString_String("mitsansT", "𝘛")), (new TupleString_String("mitsansU", "𝘜")), (new TupleString_String("mitsansV", "𝘝")), (new TupleString_String("mitsansW", "𝘞")), (new TupleString_String("mitsansX", "𝘟")), (new TupleString_String("mitsansY", "𝘠")), (new TupleString_String("mitsansZ", "𝘡")), (new TupleString_String("mitsansa", "𝘢")), (new TupleString_String("mitsansb", "𝘣")), (new TupleString_String("mitsansc", "𝘤")), (new TupleString_String("mitsansd", "𝘥")), (new TupleString_String("mitsanse", "𝘦")), (new TupleString_String("mitsansf", "𝘧")), (new TupleString_String("mitsansg", "𝘨")), (new TupleString_String("mitsansh", "𝘩")), (new TupleString_String("mitsansi", "𝘪")), (new TupleString_String("mitsansj", "𝘫")), (new TupleString_String("mitsansk", "𝘬")), (new TupleString_String("mitsansl", "𝘭")), (new TupleString_String("mitsansm", "𝘮")), (new TupleString_String("mitsansn", "𝘯")), (new TupleString_String("mitsanso", "𝘰")), (new TupleString_String("mitsansp", "𝘱")), (new TupleString_String("mitsansq", "𝘲")), (new TupleString_String("mitsansr", "𝘳")), (new TupleString_String("mitsanss", "𝘴")), (new TupleString_String("mitsanst", "𝘵")), (new TupleString_String("mitsansu", "𝘶")), (new TupleString_String("mitsansv", "𝘷")), (new TupleString_String("mitsansw", "𝘸")), (new TupleString_String("mitsansx", "𝘹")), (new TupleString_String("mitsansy", "𝘺")), (new TupleString_String("mitsansz", "𝘻")), (new TupleString_String("mbfitsansA", "𝘼")), (new TupleString_String("mbfitsansB", "𝘽")), (new TupleString_String("mbfitsansC", "𝘾")), (new TupleString_String("mbfitsansD", "𝘿")), (new TupleString_String("mbfitsansE", "𝙀")), (new TupleString_String("mbfitsansF", "𝙁")), (new TupleString_String("mbfitsansG", "𝙂")), (new TupleString_String("mbfitsansH", "𝙃")), (new TupleString_String("mbfitsansI", "𝙄")), (new TupleString_String("mbfitsansJ", "𝙅")), (new TupleString_String("mbfitsansK", "𝙆")), (new TupleString_String("mbfitsansL", "𝙇")), (new TupleString_String("mbfitsansM", "𝙈")), (new TupleString_String("mbfitsansN", "𝙉")), (new TupleString_String("mbfitsansO", "𝙊")), (new TupleString_String("mbfitsansP", "𝙋")), (new TupleString_String("mbfitsansQ", "𝙌")), (new TupleString_String("mbfitsansR", "𝙍")), (new TupleString_String("mbfitsansS", "𝙎")), (new TupleString_String("mbfitsansT", "𝙏")), (new TupleString_String("mbfitsansU", "𝙐")), (new TupleString_String("mbfitsansV", "𝙑")), (new TupleString_String("mbfitsansW", "𝙒")), (new TupleString_String("mbfitsansX", "𝙓")), (new TupleString_String("mbfitsansY", "𝙔")), (new TupleString_String("mbfitsansZ", "𝙕")), (new TupleString_String("mbfitsansa", "𝙖")), (new TupleString_String("mbfitsansb", "𝙗")), (new TupleString_String("mbfitsansc", "𝙘")), (new TupleString_String("mbfitsansd", "𝙙")), (new TupleString_String("mbfitsanse", "𝙚")), (new TupleString_String("mbfitsansf", "𝙛")), (new TupleString_String("mbfitsansg", "𝙜")), (new TupleString_String("mbfitsansh", "𝙝")), (new TupleString_String("mbfitsansi", "𝙞")), (new TupleString_String("mbfitsansj", "𝙟")), (new TupleString_String("mbfitsansk", "𝙠")), (new TupleString_String("mbfitsansl", "𝙡")), (new TupleString_String("mbfitsansm", "𝙢")), (new TupleString_String("mbfitsansn", "𝙣")), (new TupleString_String("mbfitsanso", "𝙤")), (new TupleString_String("mbfitsansp", "𝙥")), (new TupleString_String("mbfitsansq", "𝙦")), (new TupleString_String("mbfitsansr", "𝙧")), (new TupleString_String("mbfitsanss", "𝙨")), (new TupleString_String("mbfitsanst", "𝙩")), (new TupleString_String("mbfitsansu", "𝙪")), (new TupleString_String("mbfitsansv", "𝙫")), (new TupleString_String("mbfitsansw", "𝙬")), (new TupleString_String("mbfitsansx", "𝙭")), (new TupleString_String("mbfitsansy", "𝙮")), (new TupleString_String("mbfitsansz", "𝙯")), (new TupleString_String("mttA", "𝙰")), (new TupleString_String("mttB", "𝙱")), (new TupleString_String("mttC", "𝙲")), (new TupleString_String("mttD", "𝙳")), (new TupleString_String("mttE", "𝙴")), (new TupleString_String("mttF", "𝙵")), (new TupleString_String("mttG", "𝙶")), (new TupleString_String("mttH", "𝙷")), (new TupleString_String("mttI", "𝙸")), (new TupleString_String("mttJ", "𝙹")), (new TupleString_String("mttK", "𝙺")), (new TupleString_String("mttL", "𝙻")), (new TupleString_String("mttM", "𝙼")), (new TupleString_String("mttN", "𝙽")), (new TupleString_String("mttO", "𝙾")), (new TupleString_String("mttP", "𝙿")), (new TupleString_String("mttQ", "𝚀")), (new TupleString_String("mttR", "𝚁")), (new TupleString_String("mttS", "𝚂")), (new TupleString_String("mttT", "𝚃")), (new TupleString_String("mttU", "𝚄")), (new TupleString_String("mttV", "𝚅")), (new TupleString_String("mttW", "𝚆")), (new TupleString_String("mttX", "𝚇")), (new TupleString_String("mttY", "𝚈")), (new TupleString_String("mttZ", "𝚉")), (new TupleString_String("mtta", "𝚊")), (new TupleString_String("mttb", "𝚋")), (new TupleString_String("mttc", "𝚌")), (new TupleString_String("mttd", "𝚍")), (new TupleString_String("mtte", "𝚎")), (new TupleString_String("mttf", "𝚏")), (new TupleString_String("mttg", "𝚐")), (new TupleString_String("mtth", "𝚑")), (new TupleString_String("mtti", "𝚒")), (new TupleString_String("mttj", "𝚓")), (new TupleString_String("mttk", "𝚔")), (new TupleString_String("mttl", "𝚕")), (new TupleString_String("mttm", "𝚖")), (new TupleString_String("mttn", "𝚗")), (new TupleString_String("mtto", "𝚘")), (new TupleString_String("mttp", "𝚙")), (new TupleString_String("mttq", "𝚚")), (new TupleString_String("mttr", "𝚛")), (new TupleString_String("mtts", "𝚜")), (new TupleString_String("mttt", "𝚝")), (new TupleString_String("mttu", "𝚞")), (new TupleString_String("mttv", "𝚟")), (new TupleString_String("mttw", "𝚠")), (new TupleString_String("mttx", "𝚡")), (new TupleString_String("mtty", "𝚢")), (new TupleString_String("mttz", "𝚣")), (new TupleString_String("imath", "𝚤")), (new TupleString_String("jmath", "𝚥")), (new TupleString_String("mbfAlpha", "𝚨")), (new TupleString_String("mbfBeta", "𝚩")), (new TupleString_String("mbfGamma", "𝚪")), (new TupleString_String("mbfDelta", "𝚫")), (new TupleString_String("mbfEpsilon", "𝚬")), (new TupleString_String("mbfZeta", "𝚭")), (new TupleString_String("mbfEta", "𝚮")), (new TupleString_String("mbfTheta", "𝚯")), (new TupleString_String("mbfIota", "𝚰")), (new TupleString_String("mbfKappa", "𝚱")), (new TupleString_String("mbfLambda", "𝚲")), (new TupleString_String("mbfMu", "𝚳")), (new TupleString_String("mbfNu", "𝚴")), (new TupleString_String("mbfXi", "𝚵")), (new TupleString_String("mbfOmicron", "𝚶")), (new TupleString_String("mbfPi", "𝚷")), (new TupleString_String("mbfRho", "𝚸")), (new TupleString_String("mbfvarTheta", "𝚹")), (new TupleString_String("mbfSigma", "𝚺")), (new TupleString_String("mbfTau", "𝚻")), (new TupleString_String("mbfUpsilon", "𝚼")), (new TupleString_String("mbfPhi", "𝚽")), (new TupleString_String("mbfChi", "𝚾")), (new TupleString_String("mbfPsi", "𝚿")), (new TupleString_String("mbfOmega", "𝛀")), (new TupleString_String("mbfnabla", "𝛁")), (new TupleString_String("mbfalpha", "𝛂")), (new TupleString_String("mbfbeta", "𝛃")), (new TupleString_String("mbfgamma", "𝛄")), (new TupleString_String("mbfdelta", "𝛅")), (new TupleString_String("mbfepsilon", "𝛆")), (new TupleString_String("mbfzeta", "𝛇")), (new TupleString_String("mbfeta", "𝛈")), (new TupleString_String("mbftheta", "𝛉")), (new TupleString_String("mbfiota", "𝛊")), (new TupleString_String("mbfkappa", "𝛋")), (new TupleString_String("mbflambda", "𝛌")), (new TupleString_String("mbfmu", "𝛍")), (new TupleString_String("mbfnu", "𝛎")), (new TupleString_String("mbfxi", "𝛏")), (new TupleString_String("mbfomicron", "𝛐")), (new TupleString_String("mbfpi", "𝛑")), (new TupleString_String("mbfrho", "𝛒")), (new TupleString_String("mbfvarsigma", "𝛓")), (new TupleString_String("mbfsigma", "𝛔")), (new TupleString_String("mbftau", "𝛕")), (new TupleString_String("mbfupsilon", "𝛖")), (new TupleString_String("mbfvarphi", "𝛗")), (new TupleString_String("mbfchi", "𝛘")), (new TupleString_String("mbfpsi", "𝛙")), (new TupleString_String("mbfomega", "𝛚")), (new TupleString_String("mbfpartial", "𝛛")), (new TupleString_String("mbfvarepsilon", "𝛜")), (new TupleString_String("mbfvartheta", "𝛝")), (new TupleString_String("mbfvarkappa", "𝛞")), (new TupleString_String("mbfphi", "𝛟")), (new TupleString_String("mbfvarrho", "𝛠")), (new TupleString_String("mbfvarpi", "𝛡")), (new TupleString_String("mitAlpha", "𝛢")), (new TupleString_String("mitBeta", "𝛣")), (new TupleString_String("mitGamma", "𝛤")), (new TupleString_String("mitDelta", "𝛥")), (new TupleString_String("mitEpsilon", "𝛦")), (new TupleString_String("mitZeta", "𝛧")), (new TupleString_String("mitEta", "𝛨")), (new TupleString_String("mitTheta", "𝛩")), (new TupleString_String("mitIota", "𝛪")), (new TupleString_String("mitKappa", "𝛫")), (new TupleString_String("mitLambda", "𝛬")), (new TupleString_String("mitMu", "𝛭")), (new TupleString_String("mitNu", "𝛮")), (new TupleString_String("mitXi", "𝛯")), (new TupleString_String("mitOmicron", "𝛰")), (new TupleString_String("mitPi", "𝛱")), (new TupleString_String("mitRho", "𝛲")), (new TupleString_String("mitvarTheta", "𝛳")), (new TupleString_String("mitSigma", "𝛴")), (new TupleString_String("mitTau", "𝛵")), (new TupleString_String("mitUpsilon", "𝛶")), (new TupleString_String("mitPhi", "𝛷")), (new TupleString_String("mitChi", "𝛸")), (new TupleString_String("mitPsi", "𝛹")), (new TupleString_String("mitOmega", "𝛺")), (new TupleString_String("mitnabla", "𝛻")), (new TupleString_String("mitalpha", "𝛼")), (new TupleString_String("mitbeta", "𝛽")), (new TupleString_String("mitgamma", "𝛾")), (new TupleString_String("mitdelta", "𝛿")), (new TupleString_String("mitepsilon", "𝜀")), (new TupleString_String("mitzeta", "𝜁")), (new TupleString_String("miteta", "𝜂")), (new TupleString_String("mittheta", "𝜃")), (new TupleString_String("mitiota", "𝜄")), (new TupleString_String("mitkappa", "𝜅")), (new TupleString_String("mitlambda", "𝜆")), (new TupleString_String("mitmu", "𝜇")), (new TupleString_String("mitnu", "𝜈")), (new TupleString_String("mitxi", "𝜉")), (new TupleString_String("mitomicron", "𝜊")), (new TupleString_String("mitpi", "𝜋")), (new TupleString_String("mitrho", "𝜌")), (new TupleString_String("mitvarsigma", "𝜍")), (new TupleString_String("mitsigma", "𝜎")), (new TupleString_String("mittau", "𝜏")), (new TupleString_String("mitupsilon", "𝜐")), (new TupleString_String("mitphi", "𝜑")), (new TupleString_String("mitchi", "𝜒")), (new TupleString_String("mitpsi", "𝜓")), (new TupleString_String("mitomega", "𝜔")), (new TupleString_String("mitpartial", "𝜕")), (new TupleString_String("mitvarepsilon", "𝜖")), (new TupleString_String("mitvartheta", "𝜗")), (new TupleString_String("mitvarkappa", "𝜘")), (new TupleString_String("mitvarphi", "𝜙")), (new TupleString_String("mitvarrho", "𝜚")), (new TupleString_String("mitvarpi", "𝜛")), (new TupleString_String("mbfitAlpha", "𝜜")), (new TupleString_String("mbfitBeta", "𝜝")), (new TupleString_String("mbfitGamma", "𝜞")), (new TupleString_String("mbfitDelta", "𝜟")), (new TupleString_String("mbfitEpsilon", "𝜠")), (new TupleString_String("mbfitZeta", "𝜡")), (new TupleString_String("mbfitEta", "𝜢")), (new TupleString_String("mbfitTheta", "𝜣")), (new TupleString_String("mbfitIota", "𝜤")), (new TupleString_String("mbfitKappa", "𝜥")), (new TupleString_String("mbfitLambda", "𝜦")), (new TupleString_String("mbfitMu", "𝜧")), (new TupleString_String("mbfitNu", "𝜨")), (new TupleString_String("mbfitXi", "𝜩")), (new TupleString_String("mbfitOmicron", "𝜪")), (new TupleString_String("mbfitPi", "𝜫")), (new TupleString_String("mbfitRho", "𝜬")), (new TupleString_String("mbfitvarTheta", "𝜭")), (new TupleString_String("mbfitSigma", "𝜮")), (new TupleString_String("mbfitTau", "𝜯")), (new TupleString_String("mbfitUpsilon", "𝜰")), (new TupleString_String("mbfitPhi", "𝜱")), (new TupleString_String("mbfitChi", "𝜲")), (new TupleString_String("mbfitPsi", "𝜳")), (new TupleString_String("mbfitOmega", "𝜴")), (new TupleString_String("mbfitnabla", "𝜵")), (new TupleString_String("mbfitalpha", "𝜶")), (new TupleString_String("mbfitbeta", "𝜷")), (new TupleString_String("mbfitgamma", "𝜸")), (new TupleString_String("mbfitdelta", "𝜹")), (new TupleString_String("mbfitepsilon", "𝜺")), (new TupleString_String("mbfitzeta", "𝜻")), (new TupleString_String("mbfiteta", "𝜼")), (new TupleString_String("mbfittheta", "𝜽")), (new TupleString_String("mbfitiota", "𝜾")), (new TupleString_String("mbfitkappa", "𝜿")), (new TupleString_String("mbfitlambda", "𝝀")), (new TupleString_String("mbfitmu", "𝝁")), (new TupleString_String("mbfitnu", "𝝂")), (new TupleString_String("mbfitxi", "𝝃")), (new TupleString_String("mbfitomicron", "𝝄")), (new TupleString_String("mbfitpi", "𝝅")), (new TupleString_String("mbfitrho", "𝝆")), (new TupleString_String("mbfitvarsigma", "𝝇")), (new TupleString_String("mbfitsigma", "𝝈")), (new TupleString_String("mbfittau", "𝝉")), (new TupleString_String("mbfitupsilon", "𝝊")), (new TupleString_String("mbfitphi", "𝝋")), (new TupleString_String("mbfitchi", "𝝌")), (new TupleString_String("mbfitpsi", "𝝍")), (new TupleString_String("mbfitomega", "𝝎")), (new TupleString_String("mbfitpartial", "𝝏")), (new TupleString_String("mbfitvarepsilon", "𝝐")), (new TupleString_String("mbfitvartheta", "𝝑")), (new TupleString_String("mbfitvarkappa", "𝝒")), (new TupleString_String("mbfitvarphi", "𝝓")), (new TupleString_String("mbfitvarrho", "𝝔")), (new TupleString_String("mbfitvarpi", "𝝕")), (new TupleString_String("mbfsansAlpha", "𝝖")), (new TupleString_String("mbfsansBeta", "𝝗")), (new TupleString_String("mbfsansGamma", "𝝘")), (new TupleString_String("mbfsansDelta", "𝝙")), (new TupleString_String("mbfsansEpsilon", "𝝚")), (new TupleString_String("mbfsansZeta", "𝝛")), (new TupleString_String("mbfsansEta", "𝝜")), (new TupleString_String("mbfsansTheta", "𝝝")), (new TupleString_String("mbfsansIota", "𝝞")), (new TupleString_String("mbfsansKappa", "𝝟")), (new TupleString_String("mbfsansLambda", "𝝠")), (new TupleString_String("mbfsansMu", "𝝡")), (new TupleString_String("mbfsansNu", "𝝢")), (new TupleString_String("mbfsansXi", "𝝣")), (new TupleString_String("mbfsansOmicron", "𝝤")), (new TupleString_String("mbfsansPi", "𝝥")), (new TupleString_String("mbfsansRho", "𝝦")), (new TupleString_String("mbfsansvarTheta", "𝝧")), (new TupleString_String("mbfsansSigma", "𝝨")), (new TupleString_String("mbfsansTau", "𝝩")), (new TupleString_String("mbfsansUpsilon", "𝝪")), (new TupleString_String("mbfsansPhi", "𝝫")), (new TupleString_String("mbfsansChi", "𝝬")), (new TupleString_String("mbfsansPsi", "𝝭")), (new TupleString_String("mbfsansOmega", "𝝮")), (new TupleString_String("mbfsansnabla", "𝝯")), (new TupleString_String("mbfsansalpha", "𝝰")), (new TupleString_String("mbfsansbeta", "𝝱")), (new TupleString_String("mbfsansgamma", "𝝲")), (new TupleString_String("mbfsansdelta", "𝝳")), (new TupleString_String("mbfsansepsilon", "𝝴")), (new TupleString_String("mbfsanszeta", "𝝵")), (new TupleString_String("mbfsanseta", "𝝶")), (new TupleString_String("mbfsanstheta", "𝝷")), (new TupleString_String("mbfsansiota", "𝝸")), (new TupleString_String("mbfsanskappa", "𝝹")), (new TupleString_String("mbfsanslambda", "𝝺")), (new TupleString_String("mbfsansmu", "𝝻")), (new TupleString_String("mbfsansnu", "𝝼")), (new TupleString_String("mbfsansxi", "𝝽")), (new TupleString_String("mbfsansomicron", "𝝾")), (new TupleString_String("mbfsanspi", "𝝿")), (new TupleString_String("mbfsansrho", "𝞀")), (new TupleString_String("mbfsansvarsigma", "𝞁")), (new TupleString_String("mbfsanssigma", "𝞂")), (new TupleString_String("mbfsanstau", "𝞃")), (new TupleString_String("mbfsansupsilon", "𝞄")), (new TupleString_String("mbfsansphi", "𝞅")), (new TupleString_String("mbfsanschi", "𝞆")), (new TupleString_String("mbfsanspsi", "𝞇")), (new TupleString_String("mbfsansomega", "𝞈")), (new TupleString_String("mbfsanspartial", "𝞉")), (new TupleString_String("mbfsansvarepsilon", "𝞊")), (new TupleString_String("mbfsansvartheta", "𝞋")), (new TupleString_String("mbfsansvarkappa", "𝞌")), (new TupleString_String("mbfsansvarphi", "𝞍")), (new TupleString_String("mbfsansvarrho", "𝞎")), (new TupleString_String("mbfsansvarpi", "𝞏")), (new TupleString_String("mbfitsansAlpha", "𝞐")), (new TupleString_String("mbfitsansBeta", "𝞑")), (new TupleString_String("mbfitsansGamma", "𝞒")), (new TupleString_String("mbfitsansDelta", "𝞓")), (new TupleString_String("mbfitsansEpsilon", "𝞔")), (new TupleString_String("mbfitsansZeta", "𝞕")), (new TupleString_String("mbfitsansEta", "𝞖")), (new TupleString_String("mbfitsansTheta", "𝞗")), (new TupleString_String("mbfitsansIota", "𝞘")), (new TupleString_String("mbfitsansKappa", "𝞙")), (new TupleString_String("mbfitsansLambda", "𝞚")), (new TupleString_String("mbfitsansMu", "𝞛")), (new TupleString_String("mbfitsansNu", "𝞜")), (new TupleString_String("mbfitsansXi", "𝞝")), (new TupleString_String("mbfitsansOmicron", "𝞞")), (new TupleString_String("mbfitsansPi", "𝞟")), (new TupleString_String("mbfitsansRho", "𝞠")), (new TupleString_String("mbfitsansvarTheta", "𝞡")), (new TupleString_String("mbfitsansSigma", "𝞢")), (new TupleString_String("mbfitsansTau", "𝞣")), (new TupleString_String("mbfitsansUpsilon", "𝞤")), (new TupleString_String("mbfitsansPhi", "𝞥")), (new TupleString_String("mbfitsansChi", "𝞦")), (new TupleString_String("mbfitsansPsi", "𝞧")), (new TupleString_String("mbfitsansOmega", "𝞨")), (new TupleString_String("mbfitsansnabla", "𝞩")), (new TupleString_String("mbfitsansalpha", "𝞪")), (new TupleString_String("mbfitsansbeta", "𝞫")), (new TupleString_String("mbfitsansgamma", "𝞬")), (new TupleString_String("mbfitsansdelta", "𝞭")), (new TupleString_String("mbfitsansepsilon", "𝞮")), (new TupleString_String("mbfitsanszeta", "𝞯")), (new TupleString_String("mbfitsanseta", "𝞰")), (new TupleString_String("mbfitsanstheta", "𝞱")), (new TupleString_String("mbfitsansiota", "𝞲")), (new TupleString_String("mbfitsanskappa", "𝞳")), (new TupleString_String("mbfitsanslambda", "𝞴")), (new TupleString_String("mbfitsansmu", "𝞵")), (new TupleString_String("mbfitsansnu", "𝞶")), (new TupleString_String("mbfitsansxi", "𝞷")), (new TupleString_String("mbfitsansomicron", "𝞸")), (new TupleString_String("mbfitsanspi", "𝞹")), (new TupleString_String("mbfitsansrho", "𝞺")), (new TupleString_String("mbfitsansvarsigma", "𝞻")), (new TupleString_String("mbfitsanssigma", "𝞼")), (new TupleString_String("mbfitsanstau", "𝞽")), (new TupleString_String("mbfitsansupsilon", "𝞾")), (new TupleString_String("mbfitsansphi", "𝞿")), (new TupleString_String("mbfitsanschi", "𝟀")), (new TupleString_String("mbfitsanspsi", "𝟁")), (new TupleString_String("mbfitsansomega", "𝟂")), (new TupleString_String("mbfitsanspartial", "𝟃")), (new TupleString_String("mbfitsansvarepsilon", "𝟄")), (new TupleString_String("mbfitsansvartheta", "𝟅")), (new TupleString_String("mbfitsansvarkappa", "𝟆")), (new TupleString_String("mbfitsansvarphi", "𝟇")), (new TupleString_String("mbfitsansvarrho", "𝟈")), (new TupleString_String("mbfitsansvarpi", "𝟉")), (new TupleString_String("mbfDigamma", "𝟊")), (new TupleString_String("mbfdigamma", "𝟋")), (new TupleString_String("mbfzero", "𝟎")), (new TupleString_String("mbfone", "𝟏")), (new TupleString_String("mbftwo", "𝟐")), (new TupleString_String("mbfthree", "𝟑")), (new TupleString_String("mbffour", "𝟒")), (new TupleString_String("mbffive", "𝟓")), (new TupleString_String("mbfsix", "𝟔")), (new TupleString_String("mbfseven", "𝟕")), (new TupleString_String("mbfeight", "𝟖")), (new TupleString_String("mbfnine", "𝟗")), (new TupleString_String("Bbbzero", "𝟘")), (new TupleString_String("Bbbone", "𝟙")), (new TupleString_String("Bbbtwo", "𝟚")), (new TupleString_String("Bbbthree", "𝟛")), (new TupleString_String("Bbbfour", "𝟜")), (new TupleString_String("Bbbfive", "𝟝")), (new TupleString_String("Bbbsix", "𝟞")), (new TupleString_String("Bbbseven", "𝟟")), (new TupleString_String("Bbbeight", "𝟠")), (new TupleString_String("Bbbnine", "𝟡")), (new TupleString_String("msanszero", "𝟢")), (new TupleString_String("msansone", "𝟣")), (new TupleString_String("msanstwo", "𝟤")), (new TupleString_String("msansthree", "𝟥")), (new TupleString_String("msansfour", "𝟦")), (new TupleString_String("msansfive", "𝟧")), (new TupleString_String("msanssix", "𝟨")), (new TupleString_String("msansseven", "𝟩")), (new TupleString_String("msanseight", "𝟪")), (new TupleString_String("msansnine", "𝟫")), (new TupleString_String("mbfsanszero", "𝟬")), (new TupleString_String("mbfsansone", "𝟭")), (new TupleString_String("mbfsanstwo", "𝟮")), (new TupleString_String("mbfsansthree", "𝟯")), (new TupleString_String("mbfsansfour", "𝟰")), (new TupleString_String("mbfsansfive", "𝟱")), (new TupleString_String("mbfsanssix", "𝟲")), (new TupleString_String("mbfsansseven", "𝟳")), (new TupleString_String("mbfsanseight", "𝟴")), (new TupleString_String("mbfsansnine", "𝟵")), (new TupleString_String("mttzero", "𝟶")), (new TupleString_String("mttone", "𝟷")), (new TupleString_String("mtttwo", "𝟸")), (new TupleString_String("mttthree", "𝟹")), (new TupleString_String("mttfour", "𝟺")), (new TupleString_String("mttfive", "𝟻")), (new TupleString_String("mttsix", "𝟼")), (new TupleString_String("mttseven", "𝟽")), (new TupleString_String("mtteight", "𝟾")), (new TupleString_String("mttnine", "𝟿")), (new TupleString_String("^0", "⁰")), (new TupleString_String("^1", "¹")), (new TupleString_String("^2", "²")), (new TupleString_String("^3", "³")), (new TupleString_String("^4", "⁴")), (new TupleString_String("^5", "⁵")), (new TupleString_String("^6", "⁶")), (new TupleString_String("^7", "⁷")), (new TupleString_String("^8", "⁸")), (new TupleString_String("^9", "⁹")), (new TupleString_String("^+", "⁺")), (new TupleString_String("^-", "⁻")), (new TupleString_String("^=", "⁼")), (new TupleString_String("^(", "⁽")), (new TupleString_String("^)", "⁾")), (new TupleString_String("^a", "ᵃ")), (new TupleString_String("^b", "ᵇ")), (new TupleString_String("^c", "ᶜ")), (new TupleString_String("^d", "ᵈ")), (new TupleString_String("^e", "ᵉ")), (new TupleString_String("^f", "ᶠ")), (new TupleString_String("^g", "ᵍ")), (new TupleString_String("^h", "ʰ")), (new TupleString_String("^i", "ⁱ")), (new TupleString_String("^j", "ʲ")), (new TupleString_String("^k", "ᵏ")), (new TupleString_String("^l", "ˡ")), (new TupleString_String("^m", "ᵐ")), (new TupleString_String("^n", "ⁿ")), (new TupleString_String("^o", "ᵒ")), (new TupleString_String("^p", "ᵖ")), (new TupleString_String("^r", "ʳ")), (new TupleString_String("^s", "ˢ")), (new TupleString_String("^t", "ᵗ")), (new TupleString_String("^u", "ᵘ")), (new TupleString_String("^v", "ᵛ")), (new TupleString_String("^w", "ʷ")), (new TupleString_String("^x", "ˣ")), (new TupleString_String("^y", "ʸ")), (new TupleString_String("^z", "ᶻ")), (new TupleString_String("^A", "ᴬ")), (new TupleString_String("^B", "ᴮ")), (new TupleString_String("^D", "ᴰ")), (new TupleString_String("^E", "ᴱ")), (new TupleString_String("^G", "ᴳ")), (new TupleString_String("^H", "ᴴ")), (new TupleString_String("^I", "ᴵ")), (new TupleString_String("^J", "ᴶ")), (new TupleString_String("^K", "ᴷ")), (new TupleString_String("^L", "ᴸ")), (new TupleString_String("^M", "ᴹ")), (new TupleString_String("^N", "ᴺ")), (new TupleString_String("^O", "ᴼ")), (new TupleString_String("^P", "ᴾ")), (new TupleString_String("^R", "ᴿ")), (new TupleString_String("^T", "ᵀ")), (new TupleString_String("^U", "ᵁ")), (new TupleString_String("^V", "ⱽ")), (new TupleString_String("^W", "ᵂ")), (new TupleString_String("_0", "₀")), (new TupleString_String("_1", "₁")), (new TupleString_String("_2", "₂")), (new TupleString_String("_3", "₃")), (new TupleString_String("_4", "₄")), (new TupleString_String("_5", "₅")), (new TupleString_String("_6", "₆")), (new TupleString_String("_7", "₇")), (new TupleString_String("_8", "₈")), (new TupleString_String("_9", "₉")), (new TupleString_String("_+", "₊")), (new TupleString_String("_-", "₋")), (new TupleString_String("_=", "₌")), (new TupleString_String("_(", "₍")), (new TupleString_String("_)", "₎")), (new TupleString_String("_a", "ₐ")), (new TupleString_String("_e", "ₑ")), (new TupleString_String("_h", "ₕ")), (new TupleString_String("_i", "ᵢ")), (new TupleString_String("_j", "ⱼ")), (new TupleString_String("_k", "ₖ")), (new TupleString_String("_l", "ₗ")), (new TupleString_String("_m", "ₘ")), (new TupleString_String("_n", "ₙ")), (new TupleString_String("_o", "ₒ")), (new TupleString_String("_p", "ₚ")), (new TupleString_String("_r", "ᵣ")), (new TupleString_String("_s", "ₛ")), (new TupleString_String("_t", "ₜ")), (new TupleString_String("_u", "ᵤ")), (new TupleString_String("_v", "ᵥ")), (new TupleString_String("_x", "ₓ")), (new TupleString_String("_schwa", "ₔ")), (new TupleString_String("--", "—")), (new TupleString_String("check", "✓")), (new TupleString_String("Check", "✔")), (new TupleString_String("ballotx", "✗")), (new TupleString_String("Ballotx", "✘")), (new TupleString_String("neq", "≠")), (new TupleString_String("degree", "°")), (new TupleString_String("libra", "♎")), (new TupleString_String("blacksun", "☀")), (new TupleString_String("umbrella", "☂")), (new TupleString_String("blackchessknight", "♞")), (new TupleString_String("yinyang", "☯")), (new TupleString_String("hammersickle", "☭")), (new TupleString_String("radioactive", "☢")), (new TupleString_String("telephone", "☎")), (new TupleString_String("snowflake", "❄")), (new TupleString_String("scissors", "✂")), (new TupleString_String("aries", "♈")), (new TupleString_String("taurus", "♉")), (new TupleString_String("gemini", "♊")), (new TupleString_String("cancer", "♋")), (new TupleString_String("leo", "♌")), (new TupleString_String("virgo", "♍")), (new TupleString_String("libra", "♎")), (new TupleString_String("scorpius", "♏")), (new TupleString_String("sagittarius", "♐")), (new TupleString_String("capricorn", "♑")), (new TupleString_String("aquarius", "♒")), (new TupleString_String("pisces", "♓")), (new TupleString_String("trademark", "™")), (new TupleString_String("fir", "🎄")), (new TupleString_String("Box", "☐")), (new TupleString_String("Hbar", "Ħ")), (new TupleString_String("hbar", "ħ")), (new TupleString_String("eth", "ð")), (new TupleString_String("fraction_1_2", "½")), (new TupleString_String("fraction_1_4", "¼")), (new TupleString_String("fraction_3_4", "¾")), (new TupleString_String("fraction_1_7", "⅐")), (new TupleString_String("fraction_1_9", "⅑")), (new TupleString_String("fraction_1_10", "⅒")), (new TupleString_String("fraction_1_3", "⅓")), (new TupleString_String("fraction_2_3", "⅔")), (new TupleString_String("fraction_1_5", "⅕")), (new TupleString_String("fraction_2_5", "⅖")), (new TupleString_String("fraction_3_5", "⅗")), (new TupleString_String("fraction_4_5", "⅘")), (new TupleString_String("fraction_1_6", "⅙")), (new TupleString_String("fraction_5_6", "⅚")), (new TupleString_String("fraction_1_8", "⅛")), (new TupleString_String("fraction_3_8", "⅜")), (new TupleString_String("fraction_5_8", "⅝")), (new TupleString_String("fraction_7_8", "⅞")), (new TupleString_String("fraction_1_", "⅟"))]);
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
        var _2845;
        if (item.IsFromDefinition) 
        {
          _2845 = "highlight-symboluse-declaration";
        }
        else
        {
          _2845 = "highlight-symboluse";
        };
        var cls = _2845;
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
      Events__log$String_1_String_1String_String("RESPONSE", data.toString());
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
      var _3258;
      x.value_24 = x.factory(_3258);
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
    var _3502;
    return List__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _3502, xs);
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
Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_Tuple_2_Lazy_1_IEnumerator_1_String__Lazy_1_IEnumerator_1_String_ = (function(option)
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
            var _1369;
            if ((dir.lastIndexOf((path.sep)) > 0)) 
            {
              _1369 = dir.substring(0, 0 + dir.lastIndexOf((path.sep)));
            }
            else
            {
              _1369 = "";
            };
            var parent = _1369;
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
    var _3539;
    if (Process__isWin$()) 
    {
      _3539 = (child_process.execFile(location, cmd, options, (function(_arg3)
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
      _3539 = (child_process.execFile(linuxCmd, prms, options, (function(_arg6)
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
    var procs = _3539;
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
Seq__Delay$String_1String = (function(f)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var _3221;
      return Seq__Enumerator$String_1String(f(_3221));
    }));
});
Seq__Empty$String_1String = (function()
{
    return Seq__Unfold$Boolean__String_1Boolean_String((function(_arg1)
    {
      return {Tag: 0.000000};
    }), false);
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
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
Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_(f, seed, Seq__Enumerator$Disposable_Disposable_(xs));
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
Seq__FromFactory$String_1String = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String___ctor$String(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _1135;
        return __.factory(_1135);
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
        var _627;
        return __.factory(_627);
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
    var _1143;
    return Seq__Fold$String_1_Unit_String_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1143, xs);
});
Seq__IterateIndexed$String_1String = (function(f,xs)
{
    var _1950;
    return Seq__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1950, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _647;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _647, xs);
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
            var _3096;
            return next(_3096);
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
            var _2028;
            return next(_2028);
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
            var _3630;
            return next(_3630);
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
            var _2984;
            return next(_2984);
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
            var _1113;
            return next(_1113);
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
            var _605;
            return next(_605);
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
            var _3331;
            return next(_3331);
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
Suggestion___ctor$ = (function(text,displayText,replacementPrefix,type,leftLabel,rightLabel)
{
    var __this = this;
    __this.text = text;
    __this.displayText = displayText;
    __this.replacementPrefix = replacementPrefix;
    __this.type = type;
    __this.leftLabel = leftLabel;
    __this.rightLabel = rightLabel;
});
Suggestion__get_Default$ = (function(unitVar0)
{
    return (new Suggestion___ctor$("", "", "", "", "", ""));
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
    var _2458;
    if ((Array__BoxedLength$(o.Data) > 0)) 
    {
      var folder = (function(acc)
      {
        return (function(n)
        {
          return List__Append$OverloadSignature_OverloadSignature_(List__OfArray$OverloadSignature_OverloadSignature_(n), acc);
        });
      });
      var state = List__Empty$OverloadSignature_OverloadSignature_();
      _2458 = List__Head$OverloadSignature_OverloadSignature_((function(array)
      {
        return Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_(folder, state, array);
      })(o.Data)).Signature;
    }
    else
    {
      _2458 = "No tooltip information";
    };
    var data = _2458;
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
    var _1890;
    if ((s2.length > s1.length)) 
    {
      _1890 = s2.length;
    }
    else
    {
      _1890 = s1.length;
    };
    return FSharpString__Concat$("", Seq__OfList$String_1String(List__CreateCons$String_1String("\n", List__CreateCons$String_1String(FSharpString__Replicate$(_1890, "-"), List__CreateCons$String_1String("\n", List__Empty$String_1String())))));
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
          var _2068;
          if ((Array__BoxedLength$(o.Data) > 0)) 
          {
            var folder = (function(acc)
            {
              return (function(_n)
              {
                return List__Append$OverloadSignature_OverloadSignature_(List__OfArray$OverloadSignature_OverloadSignature_(_n), acc);
              });
            });
            var state = List__Empty$OverloadSignature_OverloadSignature_();
            _2068 = List__Head$OverloadSignature_OverloadSignature_((function(array)
            {
              return Array__Fold$OverloadSignature____FSharpList_1_OverloadSignature_OverloadSignature____FSharpList_1_OverloadSignature_(folder, state, array);
            })(o.Data)).Signature;
          }
          else
          {
            _2068 = "No tooltip information";
          };
          var data = _2068;
          if ((data != "No tooltip information")) 
          {
            var _ignored0 = (n_.append(String__Replace$(String__Replace$((((ViewsHelpers__jq$("\u003cdiv/\u003e").text(data)).append(errTip(data))).html()), "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e")));
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
    if ((((TooltipHandler__ed != undefined) && (TooltipHandler__ed["getGrammar"] != undefined)) && ViewsHelpers__isFSharpEditor$(TooltipHandler__ed))) 
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
    return (((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name).indexOf("F#") >= 0));
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
GlyphMaps__unicode_map = GlyphMaps__get_unicode_map$();
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