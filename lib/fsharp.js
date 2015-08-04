var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var path = require('path');
var Emitter = require('event-kit').Emitter;

function wrappedFunScript() { 
var position___ctor$, position__GeneratedCompareTo, list_1_String____NilString___, list_1_String____ConsString___, list_1_String__NilString, list_1_String__ConsString, list_1_Int32__NilInt32, list_1_Int32__ConsInt32, cords___ctor$, YeomanHandler__activate$, ViewsHelpers__stopMovingHandler$Object_Object_, ViewsHelpers__pixelPositionFromMouseEvent$, ViewsHelpers__jq_$, ViewsHelpers__jqC$, ViewsHelpers__jq$, ViewsHelpers__isFSharpEditor$, ViewsHelpers__getElementsByClass$Element_Element_, ViewsHelpers__clearTimer$Timer_Timer_, ViewsHelpers__bufferPositionFromMouseEvent$, ViewsHelpers__OnCursorStopMoving$Object_Object_, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, UnfoldEnumerator_2_Int32__Completion___ctor$Int32_Completion_, UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_, UnfoldEnumerator_2_IEnumerator_1_Completion__Object___ctor$IEnumerator_1_Completion__Object_, UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_, UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, UnfoldEnumerator_2_FSharpList_1_String__String___ctor$FSharpList_1_String__String, UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_String, TupleString_Int32, TupleString_FSharpList_1_String_, TupleSelectListView__IPanel_, TupleObject__IEnumerator_1_Completion_, TupleObject__IEnumerator_1_BuildData_, TupleMatch_1_Int32, TupleInt32_Int32, TupleInt32_FSharpList_1_Int32_, TupleError__String, TupleDisposable__Int32, TupleCompletion__Int32, TupleCompletion__IEnumerator_1_Completion_, TupleBuildData__Int32, TooltipHandler__tooltip, TooltipHandler__timer, TooltipHandler__subscriptions, TooltipHandler__remove$, TooltipHandler__reg$, TooltipHandler__mouseHandler$, TooltipHandler__matchError$, TooltipHandler__lastMousePosition, TooltipHandler__initialize$, TooltipHandler__get_tooltip$, TooltipHandler__get_timer$, TooltipHandler__get_subscriptions$, TooltipHandler__get_lastMousePosition$, TooltipHandler__get_event$, TooltipHandler__get_errorArr$, TooltipHandler__get_ed$, TooltipHandler__getPosition$, TooltipHandler__event, TooltipHandler__errorHandler$, TooltipHandler__errorArr, TooltipHandler__ed, TooltipHandler__deactivate$, TooltipHandler__dashes$, TooltipHandler__createTooltip$, TooltipHandler__clearTimer$, TooltipHandler__activate$, ToolbarHandler__subscriptions, ToolbarHandler__remove$, ToolbarHandler__initialize$, ToolbarHandler__handleEditorChange$, ToolbarHandler__get_subscriptions$, ToolbarHandler__get_ed$, ToolbarHandler__get_cursorSubscription$, ToolbarHandler__get_bar$, ToolbarHandler__getCursor$, ToolbarHandler__format_data$, ToolbarHandler__ed, ToolbarHandler__deactivate$, ToolbarHandler__cursorSubscription, ToolbarHandler__cursorHandler$, ToolbarHandler__createToolbar$, ToolbarHandler__bar, ToolbarHandler__askForToolbar$, ToolbarHandler__activate$, T___ctor$, Suggestion___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, String__EndsWith$, State__On, State__Off, Seq__Where$Completion_Completion_, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Match_1Int32_Match_1, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__Unfold$Int32__Completion_Int32_Completion_, Seq__Unfold$Int32__BuildData_Int32_BuildData_, Seq__Unfold$IEnumerator_1_Completion__Object_IEnumerator_1_Completion__Object_, Seq__Unfold$IEnumerator_1_Completion__Completion_IEnumerator_1_Completion__Completion_, Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__Unfold$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_, Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_, Seq__TryFindIndexed$BuildData_BuildData_, Seq__ToList$Int32_Int32, Seq__ToArray$String___String___, Seq__ToArray$String_1String, Seq__ToArray$Object_Object_, Seq__ToArray$Match_1Match_1, Seq__ToArray$BuildData_BuildData_, Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1, Seq__OfList$String___String___, Seq__OfList$String_1String, Seq__OfList$Int32_Int32, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__OfArray$Completion_Completion_, Seq__OfArray$BuildData_BuildData_, Seq__Map$Completion__Object_Completion__Object_, Seq__Map$BuildData__Object_BuildData__Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$String_1String, Seq__IterateIndexed$Object_Object_, Seq__IterateIndexed$Match_1Match_1, Seq__IterateIndexed$BuildData_BuildData_, Seq__Iterate$String_1String, Seq__Iterate$Int32_Int32, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Object_Object_, Seq__FromFactory$Match_1Match_1, Seq__FromFactory$Int32_Int32, Seq__FromFactory$Disposable_Disposable_, Seq__FromFactory$Completion_Completion_, Seq__FromFactory$BuildData_BuildData_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__String_1Unit__String, Seq__FoldIndexedAux$Unit__Object_Unit__Object_, Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1, Seq__FoldIndexedAux$Unit__Int32_Unit__Int32, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_, Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$String_1_Unit_String_Unit_, Seq__FoldIndexed$Object__Unit_Object__Unit_, Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_, Seq__FoldIndexed$Int32__Unit_Int32_Unit_, Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_, Seq__Fold$String_1_Unit_String_Unit_, Seq__Fold$Int32__Unit_Int32_Unit_, Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__FindIndexed$BuildData_BuildData_, Seq__Find$BuildData_BuildData_, Seq__Filter$Completion_Completion_, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Object_Object_, Seq__Enumerator$Match_1Match_1, Seq__Enumerator$Int32_Int32, Seq__Enumerator$Disposable_Disposable_, Seq__Enumerator$Completion_Completion_, Seq__Enumerator$BuildData_BuildData_, Seq__Delay$Object_Object_, Seq__Delay$Completion_Completion_, Seq__Cast$Match_1Match_1, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray__ToSeq$BuildData_BuildData_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Regex__MatchesWithOffset$, Regex__MatchesStatic$, Regex__Matches$, Regex__MatchCollectionToSeq$, Regex__Create$, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Provider___ctor$, Provider_1__ctor$, Process__spawnWithNotifications$, Process__spawnSimple$, Process__spawnSame$, Process__notice$, Process__isWin$, Process__handleExit$INotification_INotification_, Process__handle$Object_Object_, Point___ctor$, Parser__subscriptions, Parser__parseProjectForEditor$, Parser__h, Parser__get_subscriptions$, Parser__get_h$, Parser__deactivate$, Parser__activate$, PanelOptions___ctor$, Options___ctor$, Option__Map$NodeList__JQuery_NodeList__JQuery_, Option__Map$NodeList__Element_NodeList__Element_, Option__Map$NodeList__Coordinates_NodeList__Coordinates_, Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_, Option__Map$Element__HTMLElement_Element__HTMLElement_, Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_, Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__Iterate$TooltipResult_TooltipResult_, Option__Iterate$Timer_Timer_, Option__Iterate$SymbolUseResult_SymbolUseResult_, Option__Iterate$String_1String, Option__Iterate$ParseResult_ParseResult_, Option__Iterate$JQuery_JQuery_, Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_, Option__Iterate$INotification_INotification_, Option__Iterate$IEditor_IEditor_, Option__Iterate$HelptextResult_HelptextResult_, Option__Iterate$Element_Element_, Option__Iterate$Disposable_Disposable_, Option__Iterate$CompletionResult_CompletionResult_, Option__Iterate$CompilerLocationResult_CompilerLocationResult_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_, Option__IsSome$IEmitter_IEmitter_, Option__IsSome$IEditor_IEditor_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__IsSome$FSharpList_1_String_FSharpList_1_String_, Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_, Option__IsSome$Error_Error_, Option__IsSome$CompletionResult_CompletionResult_, Option__IsSome$ChildProcess_ChildProcess_, Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_, Option__IsNone$IEmitter_IEmitter_, Option__IsNone$Error_Error_, Option__IsNone$CompletionResult_CompletionResult_, Option__IsNone$ChildProcess_ChildProcess_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_, Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_, Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_, Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_, Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_, Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_, Option__GetValue$TooltipResult_TooltipResult_, Option__GetValue$Timer_Timer_, Option__GetValue$SymbolUseResult_SymbolUseResult_, Option__GetValue$String_1String, Option__GetValue$ParseResult_ParseResult_, Option__GetValue$NodeList_NodeList_, Option__GetValue$JQuery_JQuery_, Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_, Option__GetValue$Int32_Int32, Option__GetValue$INotification_INotification_, Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_, Option__GetValue$IEditor_IEditor_, Option__GetValue$HelptextResult_HelptextResult_, Option__GetValue$HTMLElement_HTMLElement_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$FSharpList_1_String_FSharpList_1_String_, Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$Error_Error_, Option__GetValue$Element_Element_, Option__GetValue$Disposable_Disposable_, Option__GetValue$Coordinates_Coordinates_, Option__GetValue$CompletionResult_CompletionResult_, Option__GetValue$CompilerLocationResult_CompilerLocationResult_, Option__GetValue$ChildProcess_ChildProcess_, Option__GetValue$BuildData_BuildData_, OpenOptions___ctor$, OpenEditorOptions___ctor$, NotificationsOptions___ctor$, Match__get_Groups$, MatchCollection__get_Item$, MatchCollection__get_Count$, List__Tail$String___String___, List__Tail$String_1String, List__Tail$Int32_Int32, List__Reverse$Int32_Int32, List__Head$String___String___, List__Head$String_1String, List__Head$Int32_Int32, List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32, List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_, List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_, List__Empty$String___String___, List__Empty$String_1String, List__Empty$Int32_Int32, List__CreateCons$String___String___, List__CreateCons$String_1String, List__CreateCons$Int32_Int32, ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_, LintResult___ctor$, LanguageService__tooltip$, LanguageService__toolbarFlag, LanguageService__toolbar$, LanguageService__symbolUse$, LanguageService__stop$, LanguageService__start$, LanguageService__service, LanguageService__send$, LanguageService__project$, LanguageService__parseResponse$, LanguageService__parseEditor$, LanguageService__parse$, LanguageService__last, LanguageService__helptext$, LanguageService__get_toolbarFlag$, LanguageService__get_service$, LanguageService__get_last$, LanguageService__get_encoding$, LanguageService__findDeclaration$, LanguageService__encoding, LanguageService__completion$, LanguageService__ask$, ItemDescription___ctor$, Interactive__subscriptions, Interactive__startFsi$, Interactive__sendToFsi$, Interactive__sendSelection$, Interactive__sendLine$, Interactive__sendFile$, Interactive__resetFsi$, Interactive__openFsi$, Interactive__handleLocation$, Interactive__handle$, Interactive__get_subscriptions$, Interactive__get_fsipath$, Interactive__get_fsiProc$, Interactive__get_fsiEditor$, Interactive__fsipath, Interactive__fsiProc, Interactive__fsiEditor, Interactive__deactivate$, Interactive__activate$, HighlightUse__subscriptions, HighlightUse__showHighlight$, HighlightUse__remove$, HighlightUse__marked, HighlightUse__initialize$, HighlightUse__get_subscriptions$, HighlightUse__get_marked$, HighlightUse__get_ed$, HighlightUse__get_cursorSubscription$, HighlightUse__getCursor$, HighlightUse__ed, HighlightUse__deactivate$, HighlightUse__cursorSubscription, HighlightUse__clearHighlight$, HighlightUse__askForSymbolUse$, HighlightUse__activate$, GroupCollection__get_Item$, FindDeclaration__openDec$, FindDeclaration__handle$Object_Object_, FindDeclaration__deactivate$, FindDeclaration__activate$, FSharpString__emptyIfNull$, FSharpString__Replicate$, FSharpString__Initialize$, FSharpString__Concat$, FSharpIDE__provideErrors$, FSharpIDE__provide$, FSharpIDE__getSuggestion$, FSharpIDE__deactivate$, FSharpIDE__consumeYeomanEnvironment$, FSharpIDE__activate$, FSharpIDE___ctor$, FAKE__viewForItem$, FAKE__taskListView, FAKE__startBuild$, FAKE__registerTaskList$, FAKE__registerBuildList$, FAKE__get_taskListView$, FAKE__get_buildListView$, FAKE__get_File$, FAKE__get_BuildList$, FAKE__deactivate$, FAKE__buildListView, FAKE__activate$, FAKE__ShowBuildList$, FAKE__File, FAKE__FAKENotFound$, FAKE__BuildTask$, FAKE__BuildList, FAKE__BuildDefault$, Events__tryParse$TooltipResult_TooltipResult_, Events__tryParse$SymbolUseResult_SymbolUseResult_, Events__tryParse$ParseResult_ParseResult_, Events__tryParse$HelptextResult_HelptextResult_, Events__tryParse$CompletionResult_CompletionResult_, Events__tryParse$CompilerLocationResult_CompilerLocationResult_, Events__parseAndEmit$TooltipResult_TooltipResult_, Events__parseAndEmit$SymbolUseResult_SymbolUseResult_, Events__parseAndEmit$ParseResult_ParseResult_, Events__parseAndEmit$HelptextResult_HelptextResult_, Events__parseAndEmit$CompletionResult_CompletionResult_, Events__parseAndEmit$CompilerLocationResult_CompilerLocationResult_, Events__once$ParseResult__Unit_ParseResult__Unit_, Events__once$FindDeclarationResult__OpenPromise_FindDeclarationResult__OpenPromise_, Events__once$CompletionResult__Unit_CompletionResult__Unit_, Events__on$, Events__log$String_1_TooltipResult_String_TooltipResult_, Events__log$String_1_SymbolUseResult_String_SymbolUseResult_, Events__log$String_1_String_1String_String, Events__log$String_1_ParseResult_String_ParseResult_, Events__log$String_1_HelptextResult_String_HelptextResult_, Events__log$String_1_CompletionResult_String_CompletionResult_, Events__log$String_1_CompilerLocationResult_String_CompilerLocationResult_, Events__last, Events__get_last$, Events__get_emitter$, Events__getName$, Events__emitter, Events__emitEmpty$String_1String, Events__emit$String_1String, EventType__Tooltips, EventType__Toolbars, EventType__SymbolUse, EventType__Status, EventType__ServerStop, EventType__ServerStart, EventType__ServerError, EventType__Project, EventType__Helptext, EventType__FindDecl, EventType__Errors, EventType__Completion, EventType__CompilerLocation, ErrorLinterProvider__lint$, ErrorLinterProvider__create$, DateTime__get_Now$, DateTime__createUnsafe$, DateTime__ToShortTimeString$, DateTime__ToShortDateString$, DateTime__Compare$, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, CreateEnumerable_1_Match___ctor$Match_1, CreateEnumerable_1_Int32___ctor$Int32, CreateEnumerable_1_Disposable___ctor$Disposable_, CreateEnumerable_1_Completion___ctor$Completion_, CreateEnumerable_1_BuildData___ctor$BuildData_, CompareTo, Capture__get_Value$, Capture__getValue$, BuildData___ctor$, AutocompleteProvider__lastRow, AutocompleteProvider__lastResult, AutocompleteProvider__isForced, AutocompleteProvider__get_lastRow$, AutocompleteProvider__get_lastResult$, AutocompleteProvider__get_isForced$, AutocompleteProvider__get_emitter$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__emitter, AutocompleteProvider__create$, Array__ZeroCreate$String___String___, Array__ZeroCreate$String_1String, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Match_1Match_1, Array__ZeroCreate$BuildData_BuildData_, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexedAux$Error__Error_Error__Error_, Array__TryPickIndexed$String_1_String_1String_String, Array__TryPickIndexed$Error__Error_Error__Error_, Array__TryFind$String_1String, Array__TryFind$Error_Error_, Array__SortInPlaceWith$BuildData_BuildData_, Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1, Array__Reverse$Object_Object_, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Match_1_Object_Match_1_Object_, Array__MapIndexed$Error__Object_Error__Object_, Array__Map$String_1_String___String_String___, Array__Map$Match_1_Object_Match_1_Object_, Array__Map$Error__Object_Error__Object_, Array__Length$SymbolUse_SymbolUse_, Array__Length$String_1String, Array__Length$Object_Object_, Array__Length$Match_1Match_1, Array__Length$IEditor_IEditor_, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Iterate$SymbolUse_SymbolUse_, Array__Iterate$IEditor_IEditor_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Initialize$String_1String, Array__FoldIndexed$Unit__SymbolUse_Unit__SymbolUse_, Array__FoldIndexed$Unit__IEditor_Unit__IEditor_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$String____String_1String____String, Array__Fold$SymbolUse__Unit_SymbolUse__Unit_, Array__Fold$String_1_String___String_String___, Array__Fold$IEditor__Unit_IEditor__Unit_, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_, AddFileHandler__activate$;
AddFileHandler__activate$ = (function(unitVar0)
{
    var ignored0 = (((window.atom).emitter).on("advanced-new-file-created", (function(n)
    {
      return ((window.console).log(n));
    })));
});
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
Array__Fold$IEditor__Unit_IEditor__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__IEditor_Unit__IEditor_((function(_arg1)
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
Array__FoldIndexed$Unit__IEditor_Unit__IEditor_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$IEditor_IEditor_(xs) - 1); i++)
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
    var _4400;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _4400, xs);
});
Array__Iterate$IEditor_IEditor_ = (function(f,xs)
{
    var _4358;
    return Array__Fold$IEditor__Unit_IEditor__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _4358, xs);
});
Array__Iterate$SymbolUse_SymbolUse_ = (function(f,xs)
{
    var _4559;
    return Array__Fold$SymbolUse__Unit_SymbolUse__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _4559, xs);
});
Array__Length$Error_Error_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IEditor_IEditor_ = (function(xs)
{
    return xs.length;;
});
Array__Length$Match_1Match_1 = (function(xs)
{
    return xs.length;;
});
Array__Length$Object_Object_ = (function(xs)
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
Array__Map$Match_1_Object_Match_1_Object_ = (function(f,xs)
{
    return Array__MapIndexed$Match_1_Object_Match_1_Object_((function(_arg1)
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
Array__MapIndexed$Match_1_Object_Match_1_Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Object_Object_(Array__Length$Match_1Match_1(xs));
    for (var i = 0; i <= (Array__Length$Match_1Match_1(xs) - 1); i++)
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
Array__Reverse$Object_Object_ = (function(xs)
{
    var size = Array__Length$Object_Object_(xs);
    var ys = Array__ZeroCreate$Object_Object_(size);
    for (var i = 0; i <= (size - 1); i++)
    {
      ys[i] = xs[((size - 1) - i)];
      null;
    };
    return ys;
});
Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1 = (function(f,xs)
{
    return Array__SortInPlaceWith$BuildData_BuildData_((function(x)
    {
      return (function(y)
      {
        var _x = f(x);
        var _y = f(y);
        return (CompareTo(_x, _y));
      });
    }), xs);
});
Array__SortInPlaceWith$BuildData_BuildData_ = (function(f,xs)
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
Array__ZeroCreate$BuildData_BuildData_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Match_1Match_1 = (function(size)
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
    var ignored0 = (((window.atom).commands).add("atom-text-editor", "fsharp:autocomplete", (function(_arg3)
    {
      if (Option__IsNone$IEmitter_IEmitter_(AutocompleteProvider__emitter)) 
      {
        var _package = (((window.atom).packages).getLoadedPackage("autocomplete-plus"));
        var e = _package.mainModule.autocompleteManager.suggestionList.emitter;
        var handler = (function(flag)
        {
          var _5249;
          if (flag) 
          {
            _5249 = ((ViewsHelpers__jq$("li.selected").prev()).find(" span.word-container .word"));
          }
          else
          {
            _5249 = ((ViewsHelpers__jq$("li.selected").next()).find(" span.word-container .word"));
          };
          var selected = _5249;
          var text = (selected.text());
          LanguageService__helptext$(text);
        });
        var _ignored0 = (e.on("did-select-next", (function(_arg1)
        {
          return handler(false);
        })));
        var __ignored0 = (e.on("did-select-previous", (function(_arg2)
        {
          return handler(true);
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
    var _ignored0 = Events__on$((new EventType__Helptext()), (function(n)
    {
      var h = ViewsHelpers__jq$("div.suggestion-description span");
      var __ignored0 = (h.text(n.Data.Text));
    }));
    return (new Provider___ctor$(".source.fsharp", ".source.fsharp .string, .source.fsharp .comment", 1, true, (function(options)
    {
      return AutocompleteProvider__getSuggestion$(options);
    })));
});
AutocompleteProvider__getSuggestion$ = (function(options)
{
    if ((((options.editor.buffer).file) != null)) 
    {
      var path = (((options.editor.buffer).file).path);
      var row = ((options.bufferPosition.row) + 1);
      var col = ((options.bufferPosition.column) + 1);
      var _4642;
      if (((options.prefix == ".") || (options.prefix == "="))) 
      {
        _4642 = "";
      }
      else
      {
        _4642 = options.prefix;
      };
      var prefix = _4642;
      return new Promise(function(resolve){(function(unitVar0)
      {
        if ((((AutocompleteProvider__isForced || Option__IsNone$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult)) || (options.prefix == ".")) || (AutocompleteProvider__lastRow != row))) 
        {
          Events__once$CompletionResult__Unit_CompletionResult__Unit_((new EventType__Completion()), (function(result)
          {
            AutocompleteProvider__lastRow = row;
            AutocompleteProvider__lastResult = {Tag: 1.000000, Value: result};
            AutocompleteProvider__isForced = false;
            var r = Seq__ToArray$Object_Object_(Seq__Map$Completion__Object_Completion__Object_((function(t)
            {
              return (new Suggestion___ctor$(t.Name, prefix, t.Glyph, t.GlyphChar, " "));
            }), Seq__Where$Completion_Completion_((function(t)
            {
              return (t.Name.indexOf(prefix) >= 0);
            }), Seq__OfArray$Completion_Completion_(result.Data))));
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
        }
        else
        {
          AutocompleteProvider__isForced = false;
          var r = Seq__ToArray$Object_Object_(Seq__Map$Completion__Object_Completion__Object_((function(t)
          {
            return (new Suggestion___ctor$(t.Name, prefix, t.Glyph, t.GlyphChar, " "));
          }), Seq__Where$Completion_Completion_((function(t)
          {
            return (t.Name.indexOf(prefix) >= 0);
          }), Seq__OfArray$Completion_Completion_(Option__GetValue$CompletionResult_CompletionResult_(AutocompleteProvider__lastResult).Data))));
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
AutocompleteProvider__get_emitter$ = (function()
{
    return {Tag: 0.000000};
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
BuildData___ctor$ = (function(Name,Start,End,Output,TextEditor)
{
    var __this = this;
    __this.Name = Name;
    __this.Start = Start;
    __this.End = End;
    __this.Output = Output;
    __this.TextEditor = TextEditor;
});
Capture__getValue$ = (function(x)
{
    return Array.isArray(x) ? (x[0]) : x;
});
Capture__get_Value$ = (function(x,unitVar1)
{
    return Capture__getValue$(x);
});
CompareTo = (function(dt,that)
{
    return DateTime__Compare$(dt, that);
});
CreateEnumerable_1_BuildData___ctor$BuildData_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
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
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Match___ctor$Match_1 = (function(factory)
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
DateTime__Compare$ = (function(a,b)
{
    return (a.getTime() < b.getTime() ? -1 : (a.getTime() == b.getTime() ? 0 : 1));
});
DateTime__ToShortDateString$ = (function(dt,unitVar1)
{
    return dt['to'+"LocaleDate"+'String']();
});
DateTime__ToShortTimeString$ = (function(dt,unitVar1)
{
    return dt.toLocaleTimeString().replace(/:\d\d(?!:)/, '');
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
          return (new LintResult___ctor$(item.Severity, item.Message, (((editor.buffer).file).path), range));
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
    Events__log$String_1_String_1String_String(name, v);
    return (Events__emitter.emit(name, v));
});
Events__emitEmpty$String_1String = (function(t,s)
{
    var name = Events__getName$(t);
    Events__log$String_1_String_1String_String(name, s);
    var _279;
    return (Events__emitter.emit(name, _279));
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
});
Events__get_emitter$ = (function()
{
    return new Emitter();
});
Events__get_last$ = (function()
{
    return "";
});
Events__log$String_1_CompilerLocationResult_String_CompilerLocationResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_CompletionResult_String_CompletionResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_HelptextResult_String_HelptextResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_ParseResult_String_ParseResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_String_1String_String = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_SymbolUseResult_String_SymbolUseResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_TooltipResult_String_TooltipResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
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
      Events__log$String_1_CompilerLocationResult_String_CompilerLocationResult_(name, o);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$CompilerLocationResult_CompilerLocationResult_(s));
});
Events__parseAndEmit$CompletionResult_CompletionResult_ = (function(t,s)
{
    return Option__Iterate$CompletionResult_CompletionResult_((function(o)
    {
      var name = Events__getName$(t);
      Events__log$String_1_CompletionResult_String_CompletionResult_(name, o);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$CompletionResult_CompletionResult_(s));
});
Events__parseAndEmit$HelptextResult_HelptextResult_ = (function(t,s)
{
    return Option__Iterate$HelptextResult_HelptextResult_((function(o)
    {
      var name = Events__getName$(t);
      Events__log$String_1_HelptextResult_String_HelptextResult_(name, o);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$HelptextResult_HelptextResult_(s));
});
Events__parseAndEmit$ParseResult_ParseResult_ = (function(t,s)
{
    return Option__Iterate$ParseResult_ParseResult_((function(o)
    {
      var name = Events__getName$(t);
      Events__log$String_1_ParseResult_String_ParseResult_(name, o);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$ParseResult_ParseResult_(s));
});
Events__parseAndEmit$SymbolUseResult_SymbolUseResult_ = (function(t,s)
{
    return Option__Iterate$SymbolUseResult_SymbolUseResult_((function(o)
    {
      var name = Events__getName$(t);
      Events__log$String_1_SymbolUseResult_String_SymbolUseResult_(name, o);
      return (Events__emitter.emit(name, o));
    }), Events__tryParse$SymbolUseResult_SymbolUseResult_(s));
});
Events__parseAndEmit$TooltipResult_TooltipResult_ = (function(t,s)
{
    return Option__Iterate$TooltipResult_TooltipResult_((function(o)
    {
      var name = Events__getName$(t);
      Events__log$String_1_TooltipResult_String_TooltipResult_(name, o);
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
FAKE__BuildDefault$ = (function(unitVar0)
{
    var packageDescription = (new ItemDescription___ctor$(""));
    return FAKE__startBuild$(packageDescription);
});
FAKE__BuildTask$ = (function(unitVar0)
{
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      return Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(_tupledArg)
      {
        var build = _tupledArg.Items[0.000000];
        var fake = _tupledArg.Items[1.000000];
        (view.show());
        var ignored0 = (model.focusFilterEditor());
        var script = ((fs.readFileSync(fake)).toString());
        var matches = Seq__ToArray$Match_1Match_1(Seq__Cast$Match_1Match_1(Regex__MatchCollectionToSeq$(Regex__MatchesStatic$(script, "Target \"([\\w.]+)\""))));
        var m = Array__Map$Match_1_Object_Match_1_Object_((function(_m)
        {
          return (new ItemDescription___ctor$(Capture__get_Value$(GroupCollection__get_Item$(Match__get_Groups$(_m), 1))));
        }), matches);
        var _ignored0 = (model.setItems(m));
      }), FAKE__File);
    }), FAKE__taskListView);
});
FAKE__FAKENotFound$ = (function(unitVar0)
{
    return Process__notice$({contents: {Tag: 0.000000}}, true, "FAKE error", "FAKE script not found");
});
FAKE__ShowBuildList$ = (function(unitVar0)
{
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      (view.show());
      var ignored0 = (model.focusFilterEditor());
      var m = Array__Reverse$Object_Object_(Seq__ToArray$Object_Object_(Seq__Map$BuildData__Object_BuildData__Object_((function(n)
      {
        var clo1 = String__PrintFormatToString$("%s - %s %s");
        var name = (function(arg10)
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
        })(n.Name)(DateTime__ToShortDateString$(n.Start))(DateTime__ToShortTimeString$(n.Start));
        return (new ItemDescription___ctor$(name));
      }), Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1((function(n)
      {
        return n.Start;
      }), ResizeArray__ToSeq$BuildData_BuildData_(FAKE__BuildList)))));
      var _ignored0 = (model.setItems(m));
    }), FAKE__buildListView);
});
FAKE__activate$ = (function(unitVar0)
{
    FAKE__taskListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(FAKE__registerTaskList$());
    FAKE__buildListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(FAKE__registerBuildList$());
    var p = (((window.atom).project).getPaths())[0];
    var proj = (function(ex)
    {
      return (function(arr)
      {
        var _3101;
        if (Process__isWin$()) 
        {
          _3101 = "cmd";
        }
        else
        {
          _3101 = "sh";
        };
        var ext = _3101;
        var projExist = Array__TryFind$String_1String((function(a)
        {
          return (String__SplitWithoutOptions$(a, ["."])[(Array__BoxedLength$(String__SplitWithoutOptions$(a, ["."])) - 1)] == ext);
        }), arr);
        if ((projExist.Tag == 0.000000)) 
        {
          var ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE: Build", (function(arg00_)
          {
            return FAKE__FAKENotFound$();
          })));
        }
        else
        {
          var a = Option__GetValue$String_1String(projExist);
          var path = ((p + "/") + a);
          var file = ((fs.readFileSync(path)).toString());
          var regex = Regex__MatchesStatic$(file, "FAKE.exe.* ([\\w]+\\.fsx)");
          if ((MatchCollection__get_Count$(regex) > 0)) 
          {
            Seq__Iterate$Int32_Int32((function(i)
            {
              if (Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_(FAKE__File)) 
              {
                var build = ((p + "/") + Capture__get_Value$(GroupCollection__get_Item$(Match__get_Groups$(MatchCollection__get_Item$(regex, i)), 1)));
                if ((fs.existsSync(build))) 
                {
                  FAKE__File = {Tag: 1.000000, Value: (new TupleString_String(path, build))};
                  var _ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Build", (function(arg00_)
                  {
                    return FAKE__BuildTask$();
                  })));
                  var __ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Build-Default", (function(arg00_)
                  {
                    return FAKE__BuildDefault$();
                  })));
                  var ___ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Show-Builds", (function(arg00_)
                  {
                    return FAKE__ShowBuildList$();
                  })));
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
            }), Seq__OfList$Int32_Int32(Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(0, (MatchCollection__get_Count$(regex) - 1)))));
          }
          else
          {
            var _ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE: Build", (function(arg00_)
            {
              return FAKE__FAKENotFound$();
            })));
          };
          return ((window.console).log(FAKE__File));
        };
      });
    });
    if ((p != undefined)) 
    {
      return (fs.readdir(p, (function(delegateArg,_delegateArg)
      {
        return proj(delegateArg)(_delegateArg);
      })));
    }
    else
    {
      ;
    };
});
FAKE__deactivate$ = (function(unitVar0)
{
    ;
});
FAKE__get_BuildList$ = (function()
{
    return [];
});
FAKE__get_File$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__get_buildListView$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__get_taskListView$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__registerBuildList$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _2868;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FAKE__buildListView);
      })(_2868);
    });
    var confirmedCallback = (function(buildDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), FAKE__buildListView);
      var build = Seq__Find$BuildData_BuildData_((function(n)
      {
        var clo1 = String__PrintFormatToString$("%s - %s %s");
        var desc = (function(arg10)
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
        })(n.Name)(String__Replace$(DateTime__ToShortDateString$(n.Start), "\\", "-"))(String__Replace$(DateTime__ToShortTimeString$(n.Start), "\\", "-"));
        return (desc == buildDescription.data);
      }), ResizeArray__ToSeq$BuildData_BuildData_(FAKE__BuildList));
      ((((window.atom).workspace).open(buildDescription.data, (new OpenEditorOptions___ctor$("right")))).done((function(ed)
      {
        build.TextEditor = {Tag: 1.000000, Value: ed};
        null;
        var ignored0 = (ed.insertText(build.Output));
        var _ignored0 = (ed.onDidDestroy((function(_arg2)
        {
          build.TextEditor = {Tag: 0.000000};
        })));
        var view = (((window.atom).views).getView(ed));
        return view.component.setInputEnabled(false);
      })));
    });
    return ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_(stopChangingCallback, cancelledCallback, confirmedCallback, (function(desc)
    {
      return FAKE__viewForItem$(desc);
    }), false);
});
FAKE__registerTaskList$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _2398;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FAKE__taskListView);
      })(_2398);
    });
    var confirmedCallback = (function(packageDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), FAKE__taskListView);
      return FAKE__startBuild$(packageDescription);
    });
    return ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_(stopChangingCallback, cancelledCallback, confirmedCallback, (function(desc)
    {
      return FAKE__viewForItem$(desc);
    }), false);
});
FAKE__startBuild$ = (function(packageDescription)
{
    Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(tupledArg)
    {
      var build = tupledArg.Items[0.000000];
      var fake = tupledArg.Items[1.000000];
      var data = (new BuildData___ctor$(packageDescription.data, DateTime__get_Now$(), {Tag: 0.000000}, "", {Tag: 0.000000}));
      FAKE__BuildList.push(data);
      var fakeProcess = Process__spawnWithNotifications$(build, "sh", packageDescription.data);
      var ignored0 = (fakeProcess.on("exit", (function(_arg1)
      {
        data.End = {Tag: 1.000000, Value: DateTime__get_Now$()};
      })));
      var _ignored0 = ((fakeProcess.stdout).on("data", (function(e)
      {
        data.Output = (data.Output + e.toString());
        null;
        return Option__Iterate$IEditor_IEditor_((function(te)
        {
          var b = (te.getBuffer());
          var __ignored0 = (b.append(e.toString()));
        }), data.TextEditor);
      })));
      var __ignored0 = ((fakeProcess.stderr).on("data", (function(e)
      {
        data.Output = (data.Output + e.toString());
        null;
        return Option__Iterate$IEditor_IEditor_((function(te)
        {
          var b = (te.getBuffer());
          var ___ignored0 = (b.append(e.toString()));
        }), data.TextEditor);
      })));
    }), FAKE__File);
});
FAKE__viewForItem$ = (function(desc)
{
    if ((desc != undefined)) 
    {
      var clo1 = String__PrintFormatToString$("\u003cli\u003e%s\u003c/li\u003e");
      return ViewsHelpers__jq$((function(arg10)
      {
        return clo1(arg10);
      })(desc.data));
    }
    else
    {
      return ViewsHelpers__jq$("\u003cli\u003e\u003c/li\u003e");
    };
});
FSharpIDE___ctor$ = (function(unitVar0)
{
    {};
});
FSharpIDE__activate$ = (function(x,state)
{
    LanguageService__start$();
    Parser__activate$();
    TooltipHandler__activate$();
    ToolbarHandler__activate$();
    FindDeclaration__activate$();
    FAKE__activate$();
    Interactive__activate$();
    HighlightUse__activate$();
    AddFileHandler__activate$();
});
FSharpIDE__consumeYeomanEnvironment$ = (function(x,gen)
{
    return YeomanHandler__activate$(gen);
});
FSharpIDE__deactivate$ = (function(x,unitVar1)
{
    Parser__deactivate$();
    TooltipHandler__deactivate$();
    ToolbarHandler__deactivate$();
    FindDeclaration__deactivate$();
    FAKE__deactivate$();
    Interactive__deactivate$();
    HighlightUse__deactivate$();
    LanguageService__stop$();
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
});
FindDeclaration__deactivate$ = (function(unitVar0)
{
    ;
});
FindDeclaration__handle$Object_Object_ = (function(e)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var name = (((editor.buffer).file).path);
    var position = (editor.getCursorBufferPosition());
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
GroupCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
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
    return (new Point___ctor$((bufferPt.row), (bufferPt.column)));
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
        var _4533;
        if (item.IsFromDefinition) 
        {
          _4533 = "highlight-symboluse-declaration";
        }
        else
        {
          _4533 = "highlight-symboluse";
        };
        var cls = _4533;
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
Interactive__activate$ = (function(unitVar0)
{
    var s = Events__on$((new EventType__CompilerLocation()), (function(n)
    {
      return Interactive__handleLocation$(n);
    }));
    var ignored0 = (((window.atom).commands).add("atom-workspace", "FSI:Open", (function(arg00_)
    {
      return Interactive__openFsi$();
    })));
    var _ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-Line", (function(arg00_)
    {
      return Interactive__sendLine$();
    })));
    var __ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-Selection", (function(arg00_)
    {
      return Interactive__sendSelection$();
    })));
    var ___ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-File", (function(arg00_)
    {
      return Interactive__sendFile$();
    })));
    var ____ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Reset-REPL", (function(arg00_)
    {
      return Interactive__resetFsi$();
    })));
    Interactive__subscriptions.push(s);
    Array__Iterate$IEditor_IEditor_((function(e)
    {
      if (((e.getTitle()) == "F# Interactive")) 
      {
        return Interactive__openFsi$();
      }
      else
      {
        ;
      };
    }), (((window.atom).workspace).getTextEditors()));
});
Interactive__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(Interactive__subscriptions));
    (Interactive__subscriptions = []);
});
Interactive__get_fsiEditor$ = (function()
{
    return {Tag: 0.000000};
});
Interactive__get_fsiProc$ = (function()
{
    return {Tag: 0.000000};
});
Interactive__get_fsipath$ = (function()
{
    return "";
});
Interactive__get_subscriptions$ = (function()
{
    return [];
});
Interactive__handle$ = (function(data)
{
    if ((data != null)) 
    {
      var response = String__Replace$(data.toString(), "\\", "\\\\");
      return Option__Iterate$IEditor_IEditor_((function(ed)
      {
        var ignored0 = (ed.insertText(response));
      }), Interactive__fsiEditor);
    }
    else
    {
      ;
    };
});
Interactive__handleLocation$ = (function(n)
{
    var _4148;
    if (Process__isWin$()) 
    {
      _4148 = (path.join(n.Data, "fsi.exe"));
    }
    else
    {
      _4148 = "fsharpi";
    };
    Interactive__fsipath = _4148;
    Interactive__resetFsi$();
});
Interactive__openFsi$ = (function(unitVar0)
{
    var edit = (((window.atom).workspace).getActiveTextEditor());
    var g = (((window.atom).grammars).grammarForScopeName("source.fsharp"));
    return ((((window.atom).workspace).open("F# Interactive", (new OpenEditorOptions___ctor$("right")))).done((function(ed)
    {
      Interactive__fsiEditor = {Tag: 1.000000, Value: ed};
      (ed.setGrammar(g));
      var view = (((window.atom).views).getView(ed));
      view.component.setInputEnabled(false);
      if ((Interactive__fsipath != "")) 
      {
        return Interactive__resetFsi$();
      }
      else
      {
        ;
      };
    })));
});
Interactive__resetFsi$ = (function(unitVar0)
{
    if (Option__IsSome$ChildProcess_ChildProcess_(Interactive__fsiProc)) 
    {
      (Option__GetValue$ChildProcess_ChildProcess_(Interactive__fsiProc).kill());
    }
    else
    {
      ;
    };
    if (Option__IsSome$IEditor_IEditor_(Interactive__fsiEditor)) 
    {
      Interactive__startFsi$();
      var ignored0 = ((Option__GetValue$IEditor_IEditor_(Interactive__fsiEditor).buffer).reload());
    }
    else
    {
      ;
    };
});
Interactive__sendFile$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    Interactive__sendToFsi$((editor.getText()));
});
Interactive__sendLine$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    Interactive__sendToFsi$((editor.lineTextForBufferRow(((editor.getCursorBufferPosition()).row))).trim());
    (editor.moveDown(1.000000));
    (editor.moveToBeginningOfLine());
});
Interactive__sendSelection$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    Interactive__sendToFsi$((editor.getSelectedText()));
    (editor.moveDown(1.000000));
    (editor.moveToBeginningOfLine());
});
Interactive__sendToFsi$ = (function(msg_)
{
    if (Option__IsNone$ChildProcess_ChildProcess_(Interactive__fsiProc)) 
    {
      Interactive__openFsi$();
    }
    else
    {
      ;
    };
    var msg = (String__Replace$(msg_, "﻿", "") + ";;\n");
    Option__Iterate$IEditor_IEditor_((function(ed)
    {
      var ignored0 = (ed.insertText(msg));
    }), Interactive__fsiEditor);
    return Option__Iterate$ChildProcess_ChildProcess_((function(cproc)
    {
      return ((cproc.stdin).write(msg, "utf-8"));
    }), Interactive__fsiProc);
});
Interactive__startFsi$ = (function(unitVar0)
{
    var fs = Process__spawnSame$(Interactive__fsipath, "");
    Interactive__fsiProc = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(fs);
    var ignored0 = ((fs.stdout).on("data", (function(data)
    {
      return Interactive__handle$(data);
    })));
});
ItemDescription___ctor$ = (function(data)
{
    var __this = this;
    __this.data = data;
});
LanguageService__ask$ = (function(msg_)
{
    ((window.console).log(msg_));
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
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var ignored0 = ((c.stdin).write(msg, LanguageService__encoding));
    }), LanguageService__service.Child);
});
LanguageService__start$ = (function(unitVar0)
{
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/atom-fsharp/bin/fsautocomplete.exe");
    var child = Process__spawnSimple$(location, "mono");
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
LintResult___ctor$ = (function(type,text,filePath,range)
{
    var __this = this;
    __this.type = type;
    __this.text = text;
    __this.filePath = filePath;
    __this.range = range;
});
ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_ = (function(stopChangingCallback,cancelledCallback,confirmedCallback,viewFunction,removeFiler)
{
    var listView = new atomSpaceView.SelectListView();
    var editorView = (((listView[0]).firstChild).getModel());
    ((editorView.getBuffer()).stoppedChangingDelay) = 200.000000;
    null;
    var ignored0 = ((editorView.getBuffer()).onDidStopChanging(stopChangingCallback(editorView)(listView)));
    var priority = 100;
    var panel = (((window.atom).workspace).addModalPanel((new PanelOptions___ctor$(listView, false, priority))));
    (listView.getFilterKey = (function()
    {
      var _2837;
      return (function(_arg1)
      {
        return "name";
      })(_2837);
    }));
    if (removeFiler) 
    {
      (listView.getFilterQuery = (function()
      {
        var _2842;
        return (function(_arg2)
        {
          return "";
        })(_2842);
      }));
    }
    else
    {
      ;
    };
    (listView.viewForItem = viewFunction);
    (listView.cancelled = cancelledCallback);
    (listView.confirmed = confirmedCallback);
    return (new TupleSelectListView__IPanel_(listView, panel));
});
List__CreateCons$Int32_Int32 = (function(x,xs)
{
    return (new list_1_Int32__ConsInt32(x, xs));
});
List__CreateCons$String_1String = (function(x,xs)
{
    return (new list_1_String__ConsString(x, xs));
});
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__Empty$Int32_Int32 = (function()
{
    return (new list_1_Int32__NilInt32());
});
List__Empty$String_1String = (function()
{
    return (new list_1_String__NilString());
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
});
List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_((function(_arg1)
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
List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, 0, seed, xs);
});
List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32 = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Head$Int32_Int32 = (function(_arg1)
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
List__Reverse$Int32_Int32 = (function(xs)
{
    return List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Int32__ConsInt32(x, acc));
      });
    }), (new list_1_Int32__NilInt32()), xs);
});
List__Tail$Int32_Int32 = (function(_arg1)
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
MatchCollection__get_Count$ = (function(xs,unitVar1)
{
    return Array__BoxedLength$(xs);
});
MatchCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
});
Match__get_Groups$ = (function(x,unitVar1)
{
    return x;
});
NotificationsOptions___ctor$ = (function(detail,dismissable)
{
    var __this = this;
    __this.detail = detail;
    __this.dismissable = dismissable;
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
Option__GetValue$BuildData_BuildData_ = (function(option)
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
Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
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
Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$INotification_INotification_ = (function(option)
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
Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_ = (function(option)
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
Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_Completion_Tuple_2_Object__IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__FSharpList_1_String_Tuple_2_String__FSharpList_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
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
Option__IsNone$ChildProcess_ChildProcess_ = (function(option)
{
    return (!Option__IsSome$ChildProcess_ChildProcess_(option));
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
Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
{
    return (!Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_(option));
});
Option__IsSome$ChildProcess_ChildProcess_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$CompletionResult_CompletionResult_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Error_Error_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
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
Option__IsSome$IEditor_IEditor_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEmitter_IEmitter_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_ = (function(option)
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
Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
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
Option__Iterate$INotification_INotification_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$INotification_INotification_(inp);
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
Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_(inp);
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
    if ((((((editor != undefined) && (editor["buffer"] != undefined)) && ((editor.buffer) != null)) && ((editor.buffer)["file"] != undefined)) && (((editor.buffer).file) != null))) 
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
            var _1229;
            if ((dir.lastIndexOf((path.sep)) > 0)) 
            {
              _1229 = dir.substring(0, 0 + dir.lastIndexOf((path.sep)));
            }
            else
            {
              _1229 = "";
            };
            var parent = _1229;
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
Point___ctor$ = (function(row,column)
{
    var __this = this;
    __this.row = row;
    __this.column = column;
});
Process__handle$Object_Object_ = (function(currentNotification,error,input)
{
    var output = input.toString();
    ((window.console).log(output));
    if (error) 
    {
      Process__notice$(currentNotification, true, "FAKE error", output);
    }
    else
    {
      Process__notice$(currentNotification, false, "", output);
    };
});
Process__handleExit$INotification_INotification_ = (function(currentNotification,code)
{
    return Option__Iterate$INotification_INotification_((function(n)
    {
      var view = ViewsHelpers__jq_$((((window.atom).views).getView(n)));
      var ignored0 = (view.removeClass("info"));
      var _ignored0 = (view.removeClass("icon-info"));
      if (((code == "0") && (!(view.hasClass("error"))))) 
      {
        var __ignored0 = (view.addClass("success"));
        var ___ignored0 = (view.addClass("icon-check"));
      }
      else
      {
        var ____ignored0 = (view.addClass("error"));
        var _____ignored0 = (view.addClass("icon-flame"));
      };
    }), currentNotification.contents);
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__notice$ = (function(currentNotification,isError,text,details)
{
    var matchValue = currentNotification.contents;
    if ((matchValue.Tag == 0.000000)) 
    {
      var _2638;
      if (isError) 
      {
        _2638 = (((window.atom).notifications).addError(text, (new NotificationsOptions___ctor$(details, true))));
      }
      else
      {
        _2638 = (((window.atom).notifications).addInfo(text, (new NotificationsOptions___ctor$(details, true))));
      };
      var n = _2638;
      currentNotification.contents = {Tag: 1.000000, Value: n};
    }
    else
    {
      var _n = Option__GetValue$INotification_INotification_(matchValue);
      var view = (((window.atom).views).getView(_n));
      var t = ViewsHelpers__jqC$(view, ".content .detail .detail-content");
      var line = (("\u003cdiv class=\u0027line\u0027\u003e" + details) + "\u003c/div\u003e");
      var ignored0 = (t.append(line));
    };
});
Process__spawnSame$ = (function(location,cmd)
{
    var _4170;
    if ((cmd == "")) 
    {
      _4170 = [];
    }
    else
    {
      _4170 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _4170;
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    return (child_process.spawn(location, cmd_, options));
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
Process__spawnWithNotifications$ = (function(location,linuxCmd,cmd)
{
    var _2435;
    if ((cmd == "")) 
    {
      _2435 = [];
    }
    else
    {
      _2435 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _2435;
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _2451;
    if (Process__isWin$()) 
    {
      _2451 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      _2451 = (child_process.spawn(linuxCmd, prms, options));
    };
    var procs = _2451;
    var currentNotification = {contents: {Tag: 0.000000}};
    var ignored0 = (procs.on("exit", (function(code)
    {
      return Process__handleExit$INotification_INotification_(currentNotification, code);
    })));
    var error = false;
    var _ignored0 = ((procs.stdout).on("data", (function(input)
    {
      return Process__handle$Object_Object_(currentNotification, error, input);
    })));
    var _error = true;
    var __ignored0 = ((procs.stderr).on("data", (function(input)
    {
      return Process__handle$Object_Object_(currentNotification, _error, input);
    })));
    return procs;
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
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Regex__Create$ = (function(pattern)
{
    return (new RegExp(pattern, 'g' + ""));
});
Regex__MatchCollectionToSeq$ = (function(xs)
{
    return Seq__Unfold$Int32__Match_1Int32_Match_1((function(i)
    {
      if ((i < MatchCollection__get_Count$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleMatch_1_Int32(MatchCollection__get_Item$(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Regex__Matches$ = (function(r,input)
{
    return Regex__MatchesWithOffset$(r, input, 0);
});
Regex__MatchesStatic$ = (function(input,pattern)
{
    var regex = Regex__Create$(pattern);
    return Regex__Matches$(regex, input);
});
Regex__MatchesWithOffset$ = (function(r,input,offset)
{
    if (!r.global) { throw "Non-global RegExp" }
    var m, matches = [];
    r.lastIndex = offset;
    while ((m = r.exec(input)) !== null) { matches.push(m) }
    return matches;
});
ResizeArray_1_Object__get_Count$Object_ = (function(xs,unitVar1)
{
    return xs.length;
});
ResizeArray_1_Object__get_Item$Object_ = (function(xs,index)
{
    return xs[index];
});
ResizeArray__ToSeq$BuildData_BuildData_ = (function(xs)
{
    return Seq__Unfold$Int32__BuildData_Int32_BuildData_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleBuildData__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
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
Seq__Cast$Match_1Match_1 = (function(xs)
{
    return xs;
});
Seq__Delay$Completion_Completion_ = (function(f)
{
    return Seq__FromFactory$Completion_Completion_((function(unitVar0)
    {
      var _4852;
      return Seq__Enumerator$Completion_Completion_(f(_4852));
    }));
});
Seq__Delay$Object_Object_ = (function(f)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var _3687;
      return Seq__Enumerator$Object_Object_(f(_3687));
    }));
});
Seq__Enumerator$BuildData_BuildData_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Completion_Completion_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Int32_Int32 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Match_1Match_1 = (function(xs)
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
Seq__Find$BuildData_BuildData_ = (function(f,xs)
{
    return Seq__FindIndexed$BuildData_BuildData_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Seq__FindIndexed$BuildData_BuildData_ = (function(f,xs)
{
    var matchValue = Seq__TryFindIndexed$BuildData_BuildData_(f, xs);
    if ((matchValue.Tag == 1.000000)) 
    {
      var x = Option__GetValue$BuildData_BuildData_(matchValue);
      return x;
    }
    else
    {
      throw ("List did not contain any matching elements");
      return null;
    };
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
Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(_arg1)
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
Seq__Fold$Int32__Unit_Int32_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__Unit_Int32_Unit_((function(_arg1)
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
Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_(f, seed, Seq__Enumerator$BuildData_BuildData_(xs));
});
Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_(f, seed, Seq__Enumerator$Disposable_Disposable_(xs));
});
Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexed$Int32__Unit_Int32_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Int32_Unit__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1(f, seed, Seq__Enumerator$Match_1Match_1(xs));
});
Seq__FoldIndexed$Object__Unit_Object__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Object_Unit__Object_(f, seed, Seq__Enumerator$Object_Object_(xs));
});
Seq__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String_1Unit__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,acc,xs)
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
Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_ = (function(f,acc,xs)
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
Seq__FoldIndexedAux$Unit__Int32_Unit__Int32 = (function(f,acc,xs)
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
Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1 = (function(f,acc,xs)
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
Seq__FromFactory$BuildData_BuildData_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_BuildData___ctor$BuildData_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _3008;
        return __.factory(_3008);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Completion_Completion_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Completion___ctor$Completion_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _4780;
        return __.factory(_4780);
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
        var _129;
        return __.factory(_129);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _3868;
        return __.factory(_3868);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Match_1Match_1 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Match___ctor$Match_1(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _3323;
        return __.factory(_3323);
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
        var _3679;
        return __.factory(_3679);
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
        var _1008;
        return __.factory(_1008);
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
        var _467;
        return __.factory(_467);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Disposable_Disposable_ = (function(f,xs)
{
    var _137;
    return Seq__Fold$Disposable__Unit_Disposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _137, xs);
});
Seq__Iterate$Int32_Int32 = (function(f,xs)
{
    var _4068;
    return Seq__Fold$Int32__Unit_Int32_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _4068, xs);
});
Seq__Iterate$String_1String = (function(f,xs)
{
    var _1016;
    return Seq__Fold$String_1_Unit_String_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1016, xs);
});
Seq__IterateIndexed$BuildData_BuildData_ = (function(f,xs)
{
    var _3521;
    return Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _3521, xs);
});
Seq__IterateIndexed$Match_1Match_1 = (function(f,xs)
{
    var _3342;
    return Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _3342, xs);
});
Seq__IterateIndexed$Object_Object_ = (function(f,xs)
{
    var _3701;
    return Seq__FoldIndexed$Object__Unit_Object__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _3701, xs);
});
Seq__IterateIndexed$String_1String = (function(f,xs)
{
    var _1822;
    return Seq__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1822, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _487;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _487, xs);
});
Seq__Map$BuildData__Object_BuildData__Object_ = (function(f,xs)
{
    return Seq__Delay$Object_Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleObject__IEnumerator_1_BuildData_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$BuildData_BuildData_(xs));
    }));
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
Seq__OfArray$BuildData_BuildData_ = (function(xs)
{
    return Seq__Unfold$Int32__BuildData_Int32_BuildData_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleBuildData__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
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
Seq__OfList$Int32_Int32 = (function(xs)
{
    return Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$Int32_Int32(_arg1);
        var x = List__Head$Int32_Int32(_arg1);
        return {Tag: 1.000000, Value: (new TupleInt32_FSharpList_1_Int32_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
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
Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1 = (function(f,xs)
{
    var ys = Seq__ToArray$BuildData_BuildData_(xs);
    Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1(f, ys);
    return Seq__OfArray$BuildData_BuildData_(ys);
});
Seq__ToArray$BuildData_BuildData_ = (function(xs)
{
    var ys = Array__ZeroCreate$BuildData_BuildData_(0);
    Seq__IterateIndexed$BuildData_BuildData_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$Match_1Match_1 = (function(xs)
{
    var ys = Array__ZeroCreate$Match_1Match_1(0);
    Seq__IterateIndexed$Match_1Match_1((function(i)
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
Seq__ToList$Int32_Int32 = (function(xs)
{
    return List__Reverse$Int32_Int32(Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$Int32_Int32(x, acc);
      });
    }), List__Empty$Int32_Int32(), xs));
});
Seq__TryFindIndexed$BuildData_BuildData_ = (function(f,xs)
{
    return Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_((function(i)
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
Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_ = (function(f,xs)
{
    return Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_(f, 0, Seq__Enumerator$BuildData_BuildData_(xs));
});
Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_ = (function(f,i,xs)
{
    if (xs.MoveNext()) 
    {
      var result = f(i)(xs.get_Current());
      if ((result.Tag == 0.000000)) 
      {
        return Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_(f, (i + 1), xs);
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
Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32(seed, f));
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
            var currAcc = Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[1.000000];
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
          return (Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc) && (function()
          {
            var _4045;
            return next(_4045);
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
            var _1900;
            return next(_1900);
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
            var _2539;
            return next(_2539);
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
Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_(seed, f));
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
            var currAcc = Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_(x).Items[1.000000];
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
          return (Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_(__.acc) && (function()
          {
            var _3657;
            return next(_3657);
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
            var _4829;
            return next(_4829);
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
            var _4913;
            return next(_4913);
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
Seq__Unfold$Int32__BuildData_Int32_BuildData_ = (function(f,seed)
{
    return Seq__FromFactory$BuildData_BuildData_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_(seed, f));
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
              var value = Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_(x).Items[1.000000];
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
            var _2986;
            return next(_2986);
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
            var _4758;
            return next(_4758);
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
            var _107;
            return next(_107);
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
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
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
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
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
            var _3846;
            return next(_3846);
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
Seq__Unfold$Int32__Match_1Int32_Match_1 = (function(f,seed)
{
    return Seq__FromFactory$Match_1Match_1((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1(seed, f));
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
              var value = Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_(x).Items[1.000000];
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
            var _3301;
            return next(_3301);
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
            var _986;
            return next(_986);
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
            var _445;
            return next(_445);
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
Suggestion___ctor$ = (function(text,replacementPrefix,rightLabel,type,description)
{
    var __this = this;
    __this.text = text;
    __this.replacementPrefix = replacementPrefix;
    __this.rightLabel = rightLabel;
    __this.type = type;
    __this.description = description;
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
    if ((o.Data != "No tooltip information")) 
    {
      var _ignored0 = (tb.append(ToolbarHandler__format_data$(o.Data)));
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
});
ToolbarHandler__format_data$ = (function(tinfo)
{
    var ti = String__Replace$(String__Replace$(tinfo.trim(), "\r", " "), "\n", " ");
    var _2214;
    if (String__StartsWith$(ti, "Multiple")) 
    {
      var idx = ti.indexOf("type");
      _2214 = ti.substring(idx);
    }
    else
    {
      _2214 = ti;
    };
    var ti_ = _2214;
    var _2230;
    if (String__StartsWith$(ti_, "type")) 
    {
      var _idx = ti_.indexOf("=");
      _2230 = ti_.substring(0, 0 + (_idx - 1));
    }
    else
    {
      _2230 = ti_;
    };
    return ("\u003e " + _2230);
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
    var _1762;
    if ((s2.length > s1.length)) 
    {
      _1762 = s2.length;
    }
    else
    {
      _1762 = s1.length;
    };
    return FSharpString__Concat$("", Seq__OfList$String_1String(List__CreateCons$String_1String("\n", List__CreateCons$String_1String(FSharpString__Replicate$(_1762, "-"), List__CreateCons$String_1String("\n", List__Empty$String_1String())))));
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
          var _1947;
          if ((o.Data != "No tooltip information")) 
          {
            _1947 = ((ViewsHelpers__jq$("\u003cdiv/\u003e").text(o.Data)).append(errTip(o.Data)));
          }
          else
          {
            _1947 = (ViewsHelpers__jq$("\u003cdiv/\u003e").text(errTip("")));
          };
          var _ignored0 = (n_.append(String__Replace$(String__Replace$((_1947.html()), "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e")));
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
TupleBuildData__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
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
TupleInt32_FSharpList_1_Int32_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleMatch_1_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleObject__IEnumerator_1_BuildData_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleObject__IEnumerator_1_Completion_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleSelectListView__IPanel_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_FSharpList_1_String_ = (function(Item0,Item1)
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
UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32 = (function(seed,unfold)
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
UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_ = (function(seed,unfold)
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
UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_ = (function(seed,unfold)
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
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1 = (function(seed,unfold)
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
ViewsHelpers__jqC$ = (function(context,selector)
{
    return ((window.$)(selector, context));
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
YeomanHandler__activate$ = (function(gen)
{
    var ignored0 = (((window.atom).commands).add("atom-workspace", "F#:New-project", (function(_arg1)
    {
      return gen.run("fsharp");
    })));
});
cords___ctor$ = (function(top,left)
{
    var __this = this;
    __this.top = top;
    __this.left = left;
});
list_1_Int32__ConsInt32 = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Int32__NilInt32 = (function()
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
Interactive__subscriptions = Interactive__get_subscriptions$();
HighlightUse__subscriptions = HighlightUse__get_subscriptions$();
HighlightUse__cursorSubscription = HighlightUse__get_cursorSubscription$();
LanguageService__service = LanguageService__get_service$();
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
ToolbarHandler__bar = ToolbarHandler__get_bar$();
ToolbarHandler__ed = ToolbarHandler__get_ed$();
FAKE__taskListView = FAKE__get_taskListView$();
FAKE__BuildList = FAKE__get_BuildList$();
FAKE__File = FAKE__get_File$();
FAKE__buildListView = FAKE__get_buildListView$();
Interactive__fsipath = Interactive__get_fsipath$();
Interactive__fsiProc = Interactive__get_fsiProc$();
Interactive__fsiEditor = Interactive__get_fsiEditor$();
HighlightUse__marked = HighlightUse__get_marked$();
HighlightUse__ed = HighlightUse__get_ed$();
AutocompleteProvider__isForced = AutocompleteProvider__get_isForced$();
AutocompleteProvider__lastResult = AutocompleteProvider__get_lastResult$();
AutocompleteProvider__lastRow = AutocompleteProvider__get_lastRow$();
AutocompleteProvider__emitter = AutocompleteProvider__get_emitter$();
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
      return FSharpIDE__consumeYeomanEnvironment$(_this, p0);
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

module.exports = AtomFSharpCore = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
consumeYeomanEnvironment: function(p1) {
  return _funcs[3](_self)(p1); },
getSuggestion: function(p1) {
  return _funcs[4](_self)(p1); },
provideErrors: function() {
  return _funcs[5](_self); },
provide: function() {
  return _funcs[6](_self); }
};