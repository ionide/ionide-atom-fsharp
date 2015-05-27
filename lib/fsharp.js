var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var path = require('path');

function wrappedFunScript() { 
var position___ctor$, position__GeneratedCompareTo, list_1_String____NilString___, list_1_String____ConsString___, ViewsHelpers__pixelPositionFromMouseEvent$, ViewsHelpers__jq_$, ViewsHelpers__jq$, ViewsHelpers__getElementsByClass$Element_Element_, ViewsHelpers__bufferPositionFromMouseEvent$, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1, UnfoldEnumerator_2_Int32__IDisposable___ctor$Int32_IDisposable_, UnfoldEnumerator_2_Int32__Completion___ctor$Int32_Completion_, UnfoldEnumerator_2_IEnumerator_1_Completion__Suggestion___ctor$IEnumerator_1_Completion__Suggestion_, UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, TupleSuggestion__IEnumerator_1_Completion_, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_String, TupleString_Int32, TupleSelectListView__IPanel_, TupleMatch_1_Int32, TupleIDisposable__Int32, TupleCompletion__Int32, TupleCompletion__IEnumerator_1_Completion_, TooltipHandler__tooltip, TooltipHandler__timer, TooltipHandler__subscriptions, TooltipHandler__remove$, TooltipHandler__reg$, TooltipHandler__lastPosition, TooltipHandler__initialize$, TooltipHandler__handler$, TooltipHandler__get_tooltip$, TooltipHandler__get_timer$, TooltipHandler__get_subscriptions$, TooltipHandler__get_lastPosition$, TooltipHandler__get_event$, TooltipHandler__get_ed$, TooltipHandler__getPosition$, TooltipHandler__event, TooltipHandler__ed, TooltipHandler__deactivate$, TooltipHandler__create$, TooltipHandler__clearTimer$, TooltipHandler__activate$, T___ctor$, Suggestion___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, StatusBar__subscriptions, StatusBar__statusbar, StatusBar__notification, StatusBar__get_subscriptions$, StatusBar__get_statusbar$, StatusBar__get_notification$, StatusBar__addStatusNotification$, StatusBar__activate$, StatusBarOptions___ctor$, State__On, State__Off, Seq__Where$Completion_Completion_, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Match_1Int32_Match_1, Seq__Unfold$Int32__IDisposable_Int32_IDisposable_, Seq__Unfold$Int32__Completion_Int32_Completion_, Seq__Unfold$IEnumerator_1_Completion__Suggestion_IEnumerator_1_Completion__Suggestion_, Seq__Unfold$IEnumerator_1_Completion__Completion_IEnumerator_1_Completion__Completion_, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__ToArray$Suggestion_Suggestion_, Seq__ToArray$String___String___, Seq__ToArray$Match_1Match_1, Seq__OfList$String___String___, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__OfArray$Completion_Completion_, Seq__Map$Completion__Suggestion_Completion__Suggestion_, Seq__IterateIndexed$Suggestion_Suggestion_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$Match_1Match_1, Seq__Iterate$String_1String, Seq__Iterate$IDisposable_IDisposable_, Seq__FromFactory$Suggestion_Suggestion_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Match_1Match_1, Seq__FromFactory$IDisposable_IDisposable_, Seq__FromFactory$Completion_Completion_, Seq__FoldIndexedAux$Unit__Suggestion_Unit__Suggestion_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__String_1Unit__String, Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1, Seq__FoldIndexedAux$Unit__IDisposable_Unit__IDisposable_, Seq__FoldIndexed$Suggestion__Unit_Suggestion__Unit_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$String_1_Unit_String_Unit_, Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_, Seq__FoldIndexed$IDisposable__Unit_IDisposable__Unit_, Seq__Fold$String_1_Unit_String_Unit_, Seq__Fold$IDisposable__Unit_IDisposable__Unit_, Seq__Filter$Completion_Completion_, Seq__Enumerator$Suggestion_Suggestion_, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Match_1Match_1, Seq__Enumerator$IDisposable_IDisposable_, Seq__Enumerator$Completion_Completion_, Seq__Delay$Suggestion_Suggestion_, Seq__Delay$Completion_Completion_, Seq__Cast$Match_1Match_1, ResizeArray__ToSeq$IDisposable_IDisposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Regex__MatchesWithOffset$, Regex__MatchesStatic$, Regex__Matches$, Regex__MatchFirstWithOffset$, Regex__MatchFirstStatic$, Regex__MatchFirst$, Regex__MatchCollectionToSeq$, Regex__Create$, Provider___ctor$, Parser__subscriptions, Parser__projects, Parser__parseProjectForEditor$, Parser__h, Parser__get_subscriptions$, Parser__get_projects$, Parser__get_h$, Parser__deactivate$, Parser__activate$, PanelOptions___ctor$, Options___ctor$, Option__Map$NodeList__JQuery_NodeList__JQuery_, Option__Map$NodeList__Element_NodeList__Element_, Option__Map$NodeList__Coordinates_NodeList__Coordinates_, Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_, Option__Map$Element__HTMLElement_Element__HTMLElement_, Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_, Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__Iterate$Timer_Timer_, Option__Iterate$Notification_Notification_, Option__Iterate$JQuery_JQuery_, Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_, Option__Iterate$ITile_ITile_, Option__Iterate$IStatusBar_IStatusBar_, Option__Iterate$IPanel_IPanel_, Option__Iterate$IDisposable_IDisposable_, Option__Iterate$Element_Element_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$Tuple_2_Suggestion__IEnumerator_1_Completion_Tuple_2_Suggestion__IEnumerator_1_Completion_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_, Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_, Option__GetValue$Tuple_2_Completion__Int32_Tuple_2_Completion__Int32_, Option__GetValue$Tuple_2_Completion__IEnumerator_1_Completion_Tuple_2_Completion__IEnumerator_1_Completion_, Option__GetValue$Timer_Timer_, Option__GetValue$String_1String, Option__GetValue$Notification_Notification_, Option__GetValue$NodeList_NodeList_, Option__GetValue$JQuery_JQuery_, Option__GetValue$JQueryMouseEventObject_JQueryMouseEventObject_, Option__GetValue$Int32_Int32, Option__GetValue$ITile_ITile_, Option__GetValue$IStatusBar_IStatusBar_, Option__GetValue$IPanel_IPanel_, Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_, Option__GetValue$IDisposable_IDisposable_, Option__GetValue$HTMLElement_HTMLElement_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$Element_Element_, Option__GetValue$Coordinates_Coordinates_, Option__GetValue$ChildProcess_ChildProcess_, OpenOptions___ctor$, NotificationsOptions___ctor$, Match__get_Groups$, MatchCollection__get_Item$, MatchCollection__get_Count$, List__Tail$String___String___, List__Head$String___String___, List__Empty$String___String___, List__CreateCons$String___String___, LanguageService__tooltip$, LanguageService__stop$, LanguageService__start$, LanguageService__service, LanguageService__send$, LanguageService__project$, LanguageService__parseResponse$, LanguageService__parseEditor$, LanguageService__parse$, LanguageService__get_service$, LanguageService__get_encoding$, LanguageService__findDeclaration$, LanguageService__encoding, LanguageService__completion$, LanguageService__ask$, ItemDescription___ctor$, HighlighterHandler__subscriptions, HighlighterHandler__marked, HighlighterHandler__handle$, HighlighterHandler__get_subscriptions$, HighlighterHandler__get_marked$, HighlighterHandler__deactivate$, HighlighterHandler__activate$, Group__get_Success$, GroupCollection__get_Item$, FindDeclaration__openDec$, FindDeclaration__handle$Unit_Unit_, FindDeclaration__deactivate$, FindDeclaration__activate$, FSharpIDE__provide$, FSharpIDE__getSuggestion$, FSharpIDE__deactivate$, FSharpIDE__consumeStatusBar$, FSharpIDE__activate$, FSharpIDE___ctor$, FAKE__viewForItem$, FAKE__taskListView, FAKE__spawn$, FAKE__regiterListView$, FAKE__registerTaskList$, FAKE__notice$, FAKE__jq__$, FAKE__jq_$, FAKE__jq$, FAKE__handleExit$, FAKE__handle$Object_Object_, FAKE__get_taskListView$, FAKE__get_currentNotification$, FAKE__get_File$, FAKE__deactivate$, FAKE__currentNotification, FAKE__activate$, FAKE__File, FAKE__FAKENotFound$, FAKE__BuildTask$, Events__parseAndEmit$TooltipResult_TooltipResult_, Events__parseAndEmit$ParseResult_ParseResult_, Events__parseAndEmit$CompletionResult_CompletionResult_, Events__once$FindDeclarationResult__Unit_FindDeclarationResult__Unit_, Events__once$CompletionResult__Unit_CompletionResult__Unit_, Events__on$, Events__log$String_1_TooltipResult_String_TooltipResult_, Events__log$String_1_String_1String_String, Events__log$String_1_ParseResult_String_ParseResult_, Events__log$String_1_CompletionResult_String_CompletionResult_, Events__getName$, Events__emitEmpty$String_1String, Events__emit$String_1String, EventType__Tooltips, EventType__Status, EventType__ServerStop, EventType__ServerStart, EventType__ServerError, EventType__Project, EventType__FindDecl, EventType__Errors, EventType__Completion, ErrorPanel__subscriptions, ErrorPanel__panel, ErrorPanel__handleEditorChange$, ErrorPanel__handle$, ErrorPanel__get_subscriptions$, ErrorPanel__get_panel$, ErrorPanel__deactivate$, ErrorPanel__createRow$, ErrorPanel__create$, ErrorPanel__activate$, DateTime__get_Now$, DateTime__createUnsafe$, CreateEnumerable_1_Suggestion___ctor$Suggestion_, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Match___ctor$Match_1, CreateEnumerable_1_IDisposable___ctor$IDisposable_, CreateEnumerable_1_Completion___ctor$Completion_, Coordinates___ctor$, Capture__get_Value$, Capture__getValue$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__create$, Atom__addCommand$, Array__ZeroCreate$Suggestion_Suggestion_, Array__ZeroCreate$String___String___, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Match_1Match_1, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexed$String_1_String_1String_String, Array__TryFind$String_1String, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Match_1_Object_Match_1_Object_, Array__Map$String_1_String___String_String___, Array__Map$Match_1_Object_Match_1_Object_, Array__Length$String_1String, Array__Length$Match_1Match_1, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Iterate$Error_Error_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$Unit__Error_Unit__Error_, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Fold$Error__Unit_Error__Unit_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_;
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
Array__Fold$Error__Unit_Error__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__Error_Unit__Error_((function(_arg1)
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
Array__FoldIndexed$Unit__Error_Unit__Error_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$Error_Error_(xs) - 1); i++)
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
Array__Iterate$Error_Error_ = (function(f,xs)
{
    var _1551;
    return Array__Fold$Error__Unit_Error__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1551, xs);
});
Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(f,xs)
{
    var _1476;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1476, xs);
});
Array__Length$Error_Error_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(xs)
{
    return xs.length;;
});
Array__Length$Match_1Match_1 = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
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
Array__TryPickIndexed$String_1_String_1String_String = (function(f,xs)
{
    return Array__TryPickIndexedAux$String_1_String_1String_String(f, 0, xs);
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
Array__ZeroCreate$Match_1Match_1 = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Object_Object_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Suggestion_Suggestion_ = (function(size)
{
    return new Array(size);;
});
Atom__addCommand$ = (function(name,cmdName,func)
{
    var cmd = {}; cmd[cmdName]=function() { return func(); }; return atom.commands.add(name, cmd);;
});
AutocompleteProvider__create$ = (function(unitVar0)
{
    return (new Provider___ctor$(".source.fsharp", ".source.fsharp .string", 1, true, (function(options)
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
      var col = (options.bufferPosition.column);
      var _2550;
      if (((options.prefix == ".") || (options.prefix == "="))) 
      {
        _2550 = "";
      }
      else
      {
        _2550 = options.prefix;
      };
      var prefix = _2550;
      return new Promise(function(resolve){(function(unitVar0)
      {
        Events__once$CompletionResult__Unit_CompletionResult__Unit_((new EventType__Completion()), (function(result)
        {
          return resolve(Seq__ToArray$Suggestion_Suggestion_(Seq__Map$Completion__Suggestion_Completion__Suggestion_((function(t)
          {
            return (new Suggestion___ctor$(t.Name, prefix, t.Glyph, t.GlyphChar));
          }), Seq__Where$Completion_Completion_((function(t)
          {
            return (t.Name.indexOf(prefix) >= 0);
          }), Seq__OfArray$Completion_Completion_(result.Data)))));
        }));
        return LanguageService__completion$(path, row, col);
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
Capture__getValue$ = (function(x)
{
    return Array.isArray(x) ? (x[0]) : x;
});
Capture__get_Value$ = (function(x,unitVar1)
{
    return Capture__getValue$(x);
});
Coordinates___ctor$ = (function(top,left)
{
    var __this = this;
    __this.top = top;
    __this.left = left;
});
CreateEnumerable_1_Completion___ctor$Completion_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_IDisposable___ctor$IDisposable_ = (function(factory)
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
CreateEnumerable_1_Suggestion___ctor$Suggestion_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
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
ErrorPanel__activate$ = (function(unitVar0)
{
    var t = ErrorPanel__create$();
    var priority = 100;
    var p = (((window.atom).workspace).addBottomPanel((new PanelOptions___ctor$(t, false, priority))));
    ErrorPanel__panel = {Tag: 1.000000, Value: p};
    ErrorPanel__handleEditorChange$(p, (((window.atom).workspace).getActiveTextEditor()));
    var t1 = ((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return ErrorPanel__handleEditorChange$(p, ed);
    }));
    var t2 = Events__on$((new EventType__Errors()), (function(o)
    {
      return ErrorPanel__handle$(o);
    }));
    ErrorPanel__subscriptions.push(t1);
    ErrorPanel__subscriptions.push(t2);
});
ErrorPanel__create$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027tool-panel panel-bottom error-pane\u0027 id=\u0027pane\u0027\u003e\r\n                \u003cdiv class=\u0027inset-panel\u0027\u003e\r\n                \u003cdiv class=\u0027panel-heading clearfix\u0027 style=\u0027height: 30px\u0027\u003e\r\n                  \u003cspan\u003eErrors\u003c/span\u003e\r\n                \u003c/div\u003e\r\n                \u003cdiv class=\u0027scrollable\u0027 style=\u0027height: 120px\u0027\u003e\r\n                    \u003ctable id=\u0027panelError\u0027 class=\u0027error-table outputPanel\u0027 \u003e\r\n                        \u003cthead\u003e\u003cth\u003ePosition\u003c/th\u003e\u003cth\u003eMessage\u003c/th\u003e\u003cth\u003eType\u003c/th\u003e\u003cth\u003eCategory\u003c/th\u003e\u003c/thead\u003e\r\n                        \u003ctbody id=\u0027errorList\u0027\u003e\r\n                    \u003c/table\u003e\r\n                \u003c/div\u003e\r\n            \u003c/div\u003e");
});
ErrorPanel__createRow$ = (function(editor,e)
{
    var clo1 = String__PrintFormatToString$("\u003ctr\u003e\u003ctd\u003e%d : %d\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003c/tr\u003e");
    var t = ViewsHelpers__jq$((function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        var clo3 = clo2(arg20);
        return (function(arg30)
        {
          var clo4 = clo3(arg30);
          return (function(arg40)
          {
            var clo5 = clo4(arg40);
            return (function(arg50)
            {
              return clo5(arg50);
            });
          });
        });
      });
    })(e.StartLineAlternate)(e.StartColumn)(e.Message)(e.Severity)(e.Subcategory));
    return (t.click((function(x)
    {
      return (editor.setCursorBufferPosition([e.StartLine, e.StartColumn]));
    })));
});
ErrorPanel__deactivate$ = (function(unitVar0)
{
    Option__Iterate$IPanel_IPanel_((function(p)
    {
      return (p.destroy());
    }), ErrorPanel__panel);
    Seq__Iterate$IDisposable_IDisposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$IDisposable_IDisposable_(ErrorPanel__subscriptions));
    (ErrorPanel__subscriptions = []);
});
ErrorPanel__get_panel$ = (function()
{
    return {Tag: 0.000000};
});
ErrorPanel__get_subscriptions$ = (function()
{
    return [];
});
ErrorPanel__handle$ = (function(o)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    if ((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"))) 
    {
      var list = ViewsHelpers__jq$("#errorList");
      var ignored0 = ((list.children()).remove());
      return Array__Iterate$Error_Error_((function(e)
      {
        var t = ErrorPanel__createRow$(editor, e);
        var r = (list.append(t));
      }), o.Data);
    }
    else
    {
      ;
    };
});
ErrorPanel__handleEditorChange$ = (function(panel,editor)
{
    if ((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"))) 
    {
      return (panel.show());
    }
    else
    {
      return (panel.hide());
    };
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
    __this.Tag = 7.000000;
    __this._CaseName = "FindDecl";
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
    __this.Tag = 8.000000;
    __this._CaseName = "Status";
});
EventType__Tooltips = (function()
{
    var __this = this;
    __this.Tag = 6.000000;
    __this._CaseName = "Tooltips";
});
Events__emit$String_1String = (function(t,v)
{
    var name = Events__getName$(t);
    Events__log$String_1_String_1String_String(name, v);
    return ((window.atom).emit(name, v));
});
Events__emitEmpty$String_1String = (function(t,s)
{
    var name = Events__getName$(t);
    Events__log$String_1_String_1String_String(name, s);
    var _258;
    return ((window.atom).emit(name, _258));
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
              return "FSharp_tooltips";
            }
            else
            {
              if ((t.Tag == 7.000000)) 
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
                  if ((t.Tag == 8.000000)) 
                  {
                    return "Fsharp_status";
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
});
Events__log$String_1_CompletionResult_String_CompletionResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_ParseResult_String_ParseResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_String_1String_String = (function(name,o)
{
    // return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__log$String_1_TooltipResult_String_TooltipResult_ = (function(name,o)
{
    return ((window.console).log(name, DateTime__get_Now$(), o));
});
Events__on$ = (function(t,func)
{
    var name = Events__getName$(t);
    return (window.atom).on(name, func);
});
Events__once$CompletionResult__Unit_CompletionResult__Unit_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((window.atom).on(name, (function(o)
    {
      Option__Iterate$IDisposable_IDisposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    })));
});
Events__once$FindDeclarationResult__Unit_FindDeclarationResult__Unit_ = (function(t,func)
{
    var name = Events__getName$(t);
    var s = {contents: {Tag: 0.000000}};
    s.contents = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })((window.atom).on(name, (function(o)
    {
      Option__Iterate$IDisposable_IDisposable_((function(s_)
      {
        return (s_.dispose());
      }), s.contents);
      return func(o);
    })));
});
Events__parseAndEmit$CompletionResult_CompletionResult_ = (function(t,s)
{
    try
    {
      var name = Events__getName$(t);
      var o = ((window.JSON).parse(s));
      Events__log$String_1_CompletionResult_String_CompletionResult_(name, o);
      return ((window.atom).emit(name, o));
    }
    catch(ex){
      ;
    };
});
Events__parseAndEmit$ParseResult_ParseResult_ = (function(t,s)
{
    try
    {
      var name = Events__getName$(t);
      var o = ((window.JSON).parse(s));
      Events__log$String_1_ParseResult_String_ParseResult_(name, o);
      return ((window.atom).emit(name, o));
    }
    catch(ex){
      ;
    };
});
Events__parseAndEmit$TooltipResult_TooltipResult_ = (function(t,s)
{
    try
    {
      var name = Events__getName$(t);
      var o = ((window.JSON).parse(s));
      Events__log$String_1_TooltipResult_String_TooltipResult_(name, o);
      return ((window.atom).emit(name, o));
    }
    catch(ex){
      ;
    };
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
    ;
});
FAKE__activate$ = (function(unitVar0)
{
    FAKE__taskListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(FAKE__registerTaskList$());
    var p = (((window.atom).project).getPaths())[0];
    var proj = (function(ex)
    {
      return (function(arr)
      {
        var projExist = Array__TryFind$String_1String((function(a)
        {
          return (String__SplitWithoutOptions$(a, ["."])[(Array__BoxedLength$(String__SplitWithoutOptions$(a, ["."])) - 1)] == "cmd");
        }), arr);
        if ((projExist.Tag == 0.000000)) 
        {
          return Atom__addCommand$("atom-workspace", "FAKE: Build", (function(arg00_)
          {
            return FAKE__FAKENotFound$();
          }));
        }
        else
        {
          var a = Option__GetValue$String_1String(projExist);
          var path = (((window.atom).project).resolve(a));
          var file = ((fs.readFileSync(path)).toString());
          var regex = Regex__MatchFirstStatic$(file, "FAKE.exe ([\\w.]+)");
          if (Group__get_Success$(regex)) 
          {
            var build = (((window.atom).project).resolve(Capture__get_Value$(GroupCollection__get_Item$(Match__get_Groups$(regex), 1))));
            FAKE__File = {Tag: 1.000000, Value: (new TupleString_String(path, build))};
            Atom__addCommand$("atom-workspace", "FAKE: Build", (function(arg00_)
            {
              return FAKE__BuildTask$();
            }));
          }
          else
          {
            Atom__addCommand$("atom-workspace", "FAKE: Build", (function(arg00_)
            {
              return FAKE__FAKENotFound$();
            }));
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
FAKE__get_File$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__get_currentNotification$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__get_taskListView$ = (function()
{
    return {Tag: 0.000000};
});
FAKE__handle$Object_Object_ = (function(error,input)
{
    var output = input.toString();
    ((window.console).log(output));
    if (error) 
    {
      FAKE__notice$(true, "Paket error", output);
    }
    else
    {
      FAKE__notice$(false, "", output);
    };
});
FAKE__handleExit$ = (function(code)
{
    return Option__Iterate$Notification_Notification_((function(n)
    {
      var view = FAKE__jq_$((((window.atom).views).getView(n)));
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
    }), FAKE__currentNotification);
});
FAKE__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
FAKE__jq_$ = (function(selector)
{
    return ((window.$)(selector));
});
FAKE__jq__$ = (function(context,selector)
{
    return ((window.$)(selector, context));
});
FAKE__notice$ = (function(isError,text,details)
{
    if ((FAKE__currentNotification.Tag == 0.000000)) 
    {
      var _2067;
      if (isError) 
      {
        _2067 = ((window.atom).notifications).addError(text, (new NotificationsOptions___ctor$(details, true)));
      }
      else
      {
        _2067 = ((window.atom).notifications).addInfo(text, (new NotificationsOptions___ctor$(details, true)));
      };
      var n = _2067;
      FAKE__currentNotification = {Tag: 1.000000, Value: n};
    }
    else
    {
      var _n = Option__GetValue$Notification_Notification_(FAKE__currentNotification);
      var view = (((window.atom).views).getView(_n));
      var t = FAKE__jq__$(view, ".content .detail .detail-content");
      var line = (("\u003cdiv class=\u0027line\u0027\u003e" + details) + "\u003c/div\u003e");
      var ignored0 = (t.append(line));
    };
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
      var _1847;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FAKE__taskListView);
      })(_1847);
    });
    var confirmedCallback = (function(packageDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), FAKE__taskListView);
      return Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(tupledArg)
      {
        var build = tupledArg.Items[0.000000];
        var fake = tupledArg.Items[1.000000];
        return FAKE__spawn$(build, packageDescription.data);
      }), FAKE__File);
    });
    return FAKE__regiterListView$(stopChangingCallback, cancelledCallback, confirmedCallback, false);
});
FAKE__regiterListView$ = (function(stopChangingCallback,cancelledCallback,confirmedCallback,removeFiler)
{
    var listView = new atomSpaceView.SelectListView();
    var editorView = (((listView[0]).firstChild).getModel());
    ((editorView.getBuffer()).stoppedChangingDelay) = 200.000000;
    null;
    var ignored0 = ((editorView.getBuffer()).onDidStopChanging(stopChangingCallback(editorView)(listView)));
    var priority = 100;
    var panel = ((window.atom).workspace).addModalPanel((new PanelOptions___ctor$(listView, false, priority)));
    (listView.getFilterKey = (function()
    {
      var _2161;
      return (function(_arg1)
      {
        return "name";
      })(_2161);
    }));
    if (removeFiler) 
    {
      (listView.getFilterQuery = (function()
      {
        var _2166;
        return (function(_arg2)
        {
          return "";
        })(_2166);
      }));
    }
    else
    {
      ;
    };
    (listView.viewForItem = (function(desc)
    {
      return FAKE__viewForItem$(desc);
    }));
    (listView.cancelled = cancelledCallback);
    (listView.confirmed = confirmedCallback);
    return (new TupleSelectListView__IPanel_(listView, panel));
});
FAKE__spawn$ = (function(location,cmd)
{
    var cmd_ = String__SplitWithoutOptions$(cmd, [" "]);
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _1882;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _1882 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      _1882 = (child_process.spawn("mono", prms, options));
    };
    var procs = _1882;
    FAKE__currentNotification = {Tag: 0.000000};
    var ignored0 = (procs.on("exit", (function(code)
    {
      return FAKE__handleExit$(code);
    })));
    var error = false;
    var _ignored0 = ((procs.stdout).on("data", (function(input)
    {
      return FAKE__handle$Object_Object_(error, input);
    })));
    var _error = true;
    var __ignored0 = ((procs.stderr).on("data", (function(input)
    {
      return FAKE__handle$Object_Object_(_error, input);
    })));
});
FAKE__viewForItem$ = (function(desc)
{
    if ((desc != undefined)) 
    {
      var clo1 = String__PrintFormatToString$("\u003cli\u003e%s\u003c/li\u003e");
      return FAKE__jq$((function(arg10)
      {
        return clo1(arg10);
      })(desc.data));
    }
    else
    {
      return FAKE__jq$("\u003cli\u003e\u003c/li\u003e");
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
    HighlighterHandler__activate$();
    ErrorPanel__activate$();
    FindDeclaration__activate$();
    FAKE__activate$();
});
FSharpIDE__consumeStatusBar$ = (function(x,sb)
{
    return StatusBar__activate$(sb);
});
FSharpIDE__deactivate$ = (function(x,unitVar1)
{
    Parser__deactivate$();
    TooltipHandler__deactivate$();
    HighlighterHandler__deactivate$();
    ErrorPanel__deactivate$();
    FindDeclaration__deactivate$();
    FAKE__deactivate$();
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
FindDeclaration__activate$ = (function(unitVar0)
{
    var ignored0 = (window.setTimeout((function(_arg1)
    {
      return atom.commands.add("atom-text-editor", "symbols-view:go-to-declaration", (function(e)
      {
        return FindDeclaration__handle$Unit_Unit_(e);
      }));;
    }), 500.000000));
});
FindDeclaration__deactivate$ = (function(unitVar0)
{
    ;
});
FindDeclaration__handle$Unit_Unit_ = (function(e)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var name = (((editor.buffer).file).path);
    var position = (editor.getCursorBufferPosition());
    LanguageService__findDeclaration$(name, ((position.row) + 1), ((position.column) + 1));
    return Events__once$FindDeclarationResult__Unit_FindDeclarationResult__Unit_((new EventType__FindDecl()), (function(data)
    {
      return FindDeclaration__openDec$(data);
    }));
});
FindDeclaration__openDec$ = (function(data)
{
    var initialColumn = (data.Data.Column - 1);
    return ((window.atom).workspace).open(data.Data.File, (new OpenOptions___ctor$((data.Data.Line - 1), initialColumn)));
});
GroupCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
});
Group__get_Success$ = (function(x,unitVar1)
{
    return (x !== null);
});
HighlighterHandler__activate$ = (function(unitVar0)
{
    var s = Events__on$((new EventType__Errors()), (function(o)
    {
      return HighlighterHandler__handle$(o);
    }));
    HighlighterHandler__subscriptions.push(s);
});
HighlighterHandler__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$IDisposable_IDisposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$IDisposable_IDisposable_(HighlighterHandler__subscriptions));
    (HighlighterHandler__subscriptions = []);
});
HighlighterHandler__get_marked$ = (function()
{
    return Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_();
});
HighlighterHandler__get_subscriptions$ = (function()
{
    return [];
});
HighlighterHandler__handle$ = (function(o)
{
    Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_((function(m)
    {
      var ignored0 = (m.destroy());
    }), HighlighterHandler__marked);
    HighlighterHandler__marked = Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_();
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var action = (function(item)
    {
      var marker = (editor.markBufferRange([[item.StartLine, item.StartColumn], [item.EndLine, item.EndColumn]]));
      var _1527;
      if ((item.Severity == "Warning")) 
      {
        _1527 = "highlight-warning";
      }
      else
      {
        _1527 = "highlight-error";
      };
      var cls = _1527;
      HighlighterHandler__marked = Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_([marker], HighlighterHandler__marked);
      editor.decorateMarker(marker, {type: 'highlight', class: cls});
    });
    Array__Iterate$Error_Error_(action, o.Data);
});
ItemDescription___ctor$ = (function(data)
{
    var __this = this;
    __this.data = data;
});
LanguageService__ask$ = (function(msg_)
{
    var msg = String__Replace$(msg_, "﻿", "");
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      return ((c.stdin).write(msg, LanguageService__encoding));
    }), LanguageService__service.Child);
});
LanguageService__completion$ = (function(fn,line,col)
{
    var clo1 = String__PrintFormatToString$("completion \"%s\" %d %d\n");
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
LanguageService__get_service$ = (function()
{
    return (new T___ctor$((new State__Off()), (new State__Off()), {Tag: 0.000000}));
});
LanguageService__parse$ = (function(path,text)
{
    var str = (((("parse \"" + path) + "\"\n") + text) + "\n\u003c\u003cEOF\u003e\u003e\n");
    return LanguageService__ask$(str);
});
LanguageService__parseEditor$ = (function(editor)
{
    if (((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#")) && (((editor.buffer).file) != null))) 
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
        if ((s.indexOf("\"Kind\":\"ERROR\"") >= 0)) 
        {
          return Events__emitEmpty$String_1String((new EventType__ServerError()), s);
        }
        else
        {
          if ((s.indexOf("\"Kind\":\"project\"") >= 0)) 
          {
            return Events__emitEmpty$String_1String((new EventType__Project()), s);
          }
          else
          {
            if ((s.indexOf("\"Kind\":\"errors\"") >= 0)) 
            {
              return Events__parseAndEmit$ParseResult_ParseResult_((new EventType__Errors()), s);
            }
            else
            {
              if ((s.indexOf("\"Kind\":\"completion\"") >= 0)) 
              {
                return Events__parseAndEmit$CompletionResult_CompletionResult_((new EventType__Completion()), s);
              }
              else
              {
                if ((s.indexOf("\"Kind\":\"tooltip\"") >= 0)) 
                {
                  return Events__parseAndEmit$TooltipResult_TooltipResult_((new EventType__Tooltips()), s);
                }
                else
                {
                  if ((s.indexOf("\"Kind\":\"finddecl\"") >= 0)) 
                  {
                    return Events__parseAndEmit$TooltipResult_TooltipResult_((new EventType__FindDecl()), s);
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
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/FSharp/bin/fsautocomplete.exe");
    var _269;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _269 = (child_process.spawn(location));
    }
    else
    {
      _269 = (child_process.spawn("mono", [location]));
    };
    var child = _269;
    ((child.stdin).setEncoding(LanguageService__encoding));
    LanguageService__service = (new T___ctor$((new State__On()), LanguageService__service.State, {Tag: 1.000000, Value: child}));
    Events__emitEmpty$String_1String((new EventType__ServerStart()), "");
    LanguageService__send$("outputmode json\n");
    var ignored0 = ((child.stdout).on("readable", (function(x)
    {
      return LanguageService__parseResponse$(((child.stdout).read(x)));
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
LanguageService__tooltip$ = (function(fn,line,col)
{
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
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
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
OpenOptions___ctor$ = (function(initialLine,initialColumn)
{
    var __this = this;
    __this.initialLine = initialLine;
    __this.initialColumn = initialColumn;
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Coordinates_Coordinates_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Element_Element_ = (function(option)
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
Option__GetValue$IDisposable_IDisposable_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Completion_IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IPanel_IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IStatusBar_IStatusBar_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$ITile_ITile_ = (function(option)
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
Option__GetValue$Notification_Notification_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$String_1String = (function(option)
{
    return option.Value;;
});
Option__GetValue$Timer_Timer_ = (function(option)
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
Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(option)
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
Option__GetValue$Tuple_2_Suggestion__IEnumerator_1_Completion_Tuple_2_Suggestion__IEnumerator_1_Completion_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
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
Option__Iterate$IDisposable_IDisposable_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IDisposable_IDisposable_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IPanel_IPanel_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IPanel_IPanel_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IStatusBar_IStatusBar_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IStatusBar_IStatusBar_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$ITile_ITile_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$ITile_ITile_(inp);
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
Option__Iterate$Notification_Notification_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Notification_Notification_(inp);
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
    Parser__subscriptions.push(Events__on$((new EventType__Project()), (function(_unitVar0)
    {
      Events__emit$String_1String((new EventType__Status()), "Ready");
      return LanguageService__parseEditor$((((window.atom).workspace).getActiveTextEditor()));
    })));
    var editor = (((window.atom).workspace).getActiveTextEditor());
    Parser__parseProjectForEditor$(editor);
    LanguageService__parseEditor$(editor);
    if ((((((editor != undefined) && (editor["buffer"] != undefined)) && ((editor.buffer) != null)) && ((editor.buffer)["file"] != undefined)) && (((editor.buffer).file) != null))) 
    {
      Parser__h = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(((editor.buffer).onDidStopChanging((function(_arg1)
      {
        return LanguageService__parseEditor$(editor);
      }))));
    }
    else
    {
      ;
    };
    return Parser__subscriptions.push(((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      LanguageService__parseEditor$(ed);
      Parser__parseProjectForEditor$(ed);
      Option__Iterate$IDisposable_IDisposable_((function(h_)
      {
        return (h_.dispose());
      }), Parser__h);
      if ((((((ed != undefined) && (ed["buffer"] != undefined)) && ((ed.buffer) != null)) && ((ed.buffer)["file"] != undefined)) && (((ed.buffer).file) != null))) 
      {
        Parser__h = (function(arg0)
        {
          return {Tag: 1.000000, Value: arg0};
        })(((ed.buffer).onDidStopChanging((function(_arg2)
        {
          return LanguageService__parseEditor$(ed);
        }))));
      }
      else
      {
        ;
      };
    })));
});
Parser__deactivate$ = (function(unitVar0)
{
    Events__emit$String_1String((new EventType__Status()), "Off");
    Seq__Iterate$IDisposable_IDisposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$IDisposable_IDisposable_(Parser__subscriptions));
    (Parser__subscriptions = []);
});
Parser__get_h$ = (function()
{
    return {Tag: 0.000000};
});
Parser__get_projects$ = (function()
{
    return [];
});
Parser__get_subscriptions$ = (function()
{
    return [];
});
Parser__parseProjectForEditor$ = (function(editor)
{
    var parseProj = (function(p)
    {
      var proj = (function(ex)
      {
        return (function(arr)
        {
          var projExist = Array__TryFind$String_1String((function(a)
          {
            return (String__SplitWithoutOptions$(a, ["."])[(Array__BoxedLength$(String__SplitWithoutOptions$(a, ["."])) - 1)] == "fsproj");
          }), arr);
          if ((projExist.Tag == 0.000000)) 
          {
            return Events__emit$String_1String((new EventType__Status()), "Ready (.fsproj not found)");
          }
          else
          {
            var a = Option__GetValue$String_1String(projExist);
            var path = ((p + "/") + a);
            if ((!(Parser__projects.indexOf(path) > -1))) 
            {
              Parser__projects.push(path);
              return LanguageService__project$(path);
            }
            else
            {
              ;
            };
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
        return Events__emit$String_1String((new EventType__Status()), "Ready (.fsproj not found)");
      };
    });
    if ((((((editor != undefined) && (editor["buffer"] != undefined)) && ((editor.buffer) != null)) && ((editor.buffer)["file"] != undefined)) && (((editor.buffer).file) != null))) 
    {
      var p = (((editor.buffer).file).path);
      if (((String__SplitWithoutOptions$(p, ["."])[(Array__BoxedLength$(String__SplitWithoutOptions$(p, ["."])) - 1)] == "fsproj") || ((editor["getGrammar"] != undefined) && (((editor.getGrammar()).name) == "F#")))) 
      {
        if ((p != undefined)) 
        {
          return parseProj((path.dirname(p)));
        }
        else
        {
          return Events__emit$String_1String((new EventType__Status()), "Waiting for F# file");
        };
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
Provider___ctor$ = (function(selector,disableForSelector,inclusionPriority,excludeLowerPriority,getSuggestions)
{
    var __this = this;
    __this.selector = selector;
    __this.disableForSelector = disableForSelector;
    __this.inclusionPriority = inclusionPriority;
    __this.excludeLowerPriority = excludeLowerPriority;
    __this.getSuggestions = getSuggestions;
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
Regex__MatchFirst$ = (function(r,input)
{
    return Regex__MatchFirstWithOffset$(r, input, 0);
});
Regex__MatchFirstStatic$ = (function(input,pattern)
{
    var regex = Regex__Create$(pattern);
    return Regex__MatchFirst$(regex, input);
});
Regex__MatchFirstWithOffset$ = (function(r,input,offset)
{
    r.lastIndex = offset; return r.exec(input);
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
ResizeArray__ToSeq$IDisposable_IDisposable_ = (function(xs)
{
    return Seq__Unfold$Int32__IDisposable_Int32_IDisposable_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleIDisposable__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
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
      var _2739;
      return Seq__Enumerator$Completion_Completion_(f(_2739));
    }));
});
Seq__Delay$Suggestion_Suggestion_ = (function(f)
{
    return Seq__FromFactory$Suggestion_Suggestion_((function(unitVar0)
    {
      var _2830;
      return Seq__Enumerator$Suggestion_Suggestion_(f(_2830));
    }));
});
Seq__Enumerator$Completion_Completion_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$IDisposable_IDisposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Match_1Match_1 = (function(xs)
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
Seq__Enumerator$Suggestion_Suggestion_ = (function(xs)
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
Seq__Fold$IDisposable__Unit_IDisposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$IDisposable__Unit_IDisposable__Unit_((function(_arg1)
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
Seq__FoldIndexed$IDisposable__Unit_IDisposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__IDisposable_Unit__IDisposable_(f, seed, Seq__Enumerator$IDisposable_IDisposable_(xs));
});
Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1(f, seed, Seq__Enumerator$Match_1Match_1(xs));
});
Seq__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String_1Unit__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexed$Suggestion__Unit_Suggestion__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Suggestion_Unit__Suggestion_(f, seed, Seq__Enumerator$Suggestion_Suggestion_(xs));
});
Seq__FoldIndexedAux$Unit__IDisposable_Unit__IDisposable_ = (function(f,acc,xs)
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
Seq__FoldIndexedAux$Unit__Suggestion_Unit__Suggestion_ = (function(f,acc,xs)
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
        var _2667;
        return __.factory(_2667);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$IDisposable_IDisposable_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_IDisposable___ctor$IDisposable_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _121;
        return __.factory(_121);
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
        var _2394;
        return __.factory(_2394);
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
        var _709;
        return __.factory(_709);
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
        var _443;
        return __.factory(_443);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Suggestion_Suggestion_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Suggestion___ctor$Suggestion_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2822;
        return __.factory(_2822);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$IDisposable_IDisposable_ = (function(f,xs)
{
    var _129;
    return Seq__Fold$IDisposable__Unit_IDisposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _129, xs);
});
Seq__Iterate$String_1String = (function(f,xs)
{
    var _717;
    return Seq__Fold$String_1_Unit_String_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _717, xs);
});
Seq__IterateIndexed$Match_1Match_1 = (function(f,xs)
{
    var _2413;
    return Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _2413, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _463;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _463, xs);
});
Seq__IterateIndexed$Suggestion_Suggestion_ = (function(f,xs)
{
    var _2844;
    return Seq__FoldIndexed$Suggestion__Unit_Suggestion__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _2844, xs);
});
Seq__Map$Completion__Suggestion_Completion__Suggestion_ = (function(f,xs)
{
    return Seq__Delay$Suggestion_Suggestion_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_Completion__Suggestion_IEnumerator_1_Completion__Suggestion_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleSuggestion__IEnumerator_1_Completion_(f(_enum.get_Current()), _enum))};
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
Seq__ToArray$Suggestion_Suggestion_ = (function(xs)
{
    var ys = Array__ZeroCreate$Suggestion_Suggestion_(0);
    Seq__IterateIndexed$Suggestion_Suggestion_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
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
            var _1975;
            return next(_1975);
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
            var _2716;
            return next(_2716);
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
Seq__Unfold$IEnumerator_1_Completion__Suggestion_IEnumerator_1_Completion__Suggestion_ = (function(f,seed)
{
    return Seq__FromFactory$Suggestion_Suggestion_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Completion__Suggestion___ctor$IEnumerator_1_Completion__Suggestion_(seed, f));
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
              var value = Option__GetValue$Tuple_2_Suggestion__IEnumerator_1_Completion_Tuple_2_Suggestion__IEnumerator_1_Completion_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Suggestion__IEnumerator_1_Completion_Tuple_2_Suggestion__IEnumerator_1_Completion_(x).Items[1.000000];
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
            var _2800;
            return next(_2800);
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
            var _2645;
            return next(_2645);
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
Seq__Unfold$Int32__IDisposable_Int32_IDisposable_ = (function(f,seed)
{
    return Seq__FromFactory$IDisposable_IDisposable_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__IDisposable___ctor$Int32_IDisposable_(seed, f));
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
              var value = Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_(x).Items[1.000000];
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
            var _99;
            return next(_99);
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
            var _2372;
            return next(_2372);
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
            var _687;
            return next(_687);
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
            var _421;
            return next(_421);
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
StatusBarOptions___ctor$ = (function(item,priority)
{
    var __this = this;
    __this.item = item;
    __this.priority = priority;
});
StatusBar__activate$ = (function(sb)
{
    StatusBar__statusbar = {Tag: 1.000000, Value: sb};
    StatusBar__addStatusNotification$("Loading");
    var t = Events__on$((new EventType__Status()), (function(status)
    {
      return StatusBar__addStatusNotification$(status);
    }));
    StatusBar__subscriptions.push(t);
});
StatusBar__addStatusNotification$ = (function(status)
{
    Option__Iterate$ITile_ITile_((function(n)
    {
      return n.destroy();
    }), StatusBar__notification);
    return Option__Iterate$IStatusBar_IStatusBar_((function(s)
    {
      var clo1 = String__PrintFormatToString$("\u003cspan class=\u0027fsharp-status\u0027\u003eF# Status - %s\u003c/span\u003e");
      var el = ViewsHelpers__jq$((function(arg10)
      {
        return clo1(arg10);
      })(status));
      StatusBar__notification = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(s.addLeftTile((new StatusBarOptions___ctor$(el, 100))));
    }), StatusBar__statusbar);
});
StatusBar__get_notification$ = (function()
{
    return {Tag: 0.000000};
});
StatusBar__get_statusbar$ = (function()
{
    return {Tag: 0.000000};
});
StatusBar__get_subscriptions$ = (function()
{
    return [];
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
TooltipHandler__activate$ = (function(unitVar0)
{
    TooltipHandler__initialize$((((window.atom).workspace).getActiveTextEditor()));
    var ignored0 = ((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return TooltipHandler__initialize$(ed);
    }));
    var s = Events__on$((new EventType__Tooltips()), (function(o)
    {
      return TooltipHandler__handler$(o);
    }));
    TooltipHandler__subscriptions.push(s);
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
TooltipHandler__create$ = (function(unitVar0)
{
    return ViewsHelpers__jq$("\u003cdiv class=\u0027type-tooltip tooltip\u0027\u003e\u003cdiv class=\u0027tooltip-inner\u0027\u003e\u003c/div\u003e\u003c/div\u003e");
});
TooltipHandler__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$IDisposable_IDisposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$IDisposable_IDisposable_(TooltipHandler__subscriptions));
    (TooltipHandler__subscriptions = []);
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
TooltipHandler__get_event$ = (function()
{
    return {Tag: 0.000000};
});
TooltipHandler__get_lastPosition$ = (function()
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
    return TooltipHandler__create$();
});
TooltipHandler__handler$ = (function(o)
{
    return Option__Iterate$JQueryMouseEventObject_JQueryMouseEventObject_((function(e)
    {
      return (function(n)
      {
        if (((ViewsHelpers__jq$("body /deep/ span.fsharp:hover").length) > 0.000000)) 
        {
          if ((o.Data != "No tooltip information")) 
          {
            var position = ViewsHelpers__pixelPositionFromMouseEvent$(e)(TooltipHandler__ed);
            var n_ = ViewsHelpers__jq_$(n);
            var ignored0 = (n_.empty());
            var _ignored0 = (n_.append(String__Replace$(String__Replace$(o.Data, "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e")));
            var __ignored0 = (TooltipHandler__tooltip.css("left", (position.left + 40.000000)));
            var ___ignored0 = (TooltipHandler__tooltip.css("top", ((e.clientY) + 20.000000)));
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
TooltipHandler__initialize$ = (function(editor)
{
    TooltipHandler__remove$();
    if ((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"))) 
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
TooltipHandler__reg$ = (function(editor,time,element)
{
    var ignored0 = (ViewsHelpers__jq$(".panes").append(TooltipHandler__tooltip));
    return (function(n)
    {
      var _ignored0 = (n.mousemove((function(e)
      {
        var pos = TooltipHandler__getPosition$(e, editor);
        if ((position__GeneratedCompareTo(pos)(TooltipHandler__lastPosition) == 0)) 
        {
          ;
        }
        else
        {
          TooltipHandler__clearTimer$();
          TooltipHandler__lastPosition = pos;
          TooltipHandler__timer = {Tag: 1.000000, Value: (window.setTimeout((function(_arg1)
          {
            if ((((editor.buffer).file) != null)) 
            {
              var path = (((editor.buffer).file).path);
              TooltipHandler__event = {Tag: 1.000000, Value: e};
              return LanguageService__tooltip$(path, (pos.row + 1), pos.column);
            }
            else
            {
              ;
            };
          }), time))};
        };
      })));
      var __ignored0 = (n.mouseleave((function(e)
      {
        return TooltipHandler__clearTimer$();
      })));
      var ___ignored0 = (n.scroll((function(e)
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
TupleIDisposable__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleMatch_1_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleSelectListView__IPanel_ = (function(Item0,Item1)
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
TupleSuggestion__IEnumerator_1_Completion_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
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
UnfoldEnumerator_2_IEnumerator_1_Completion__Completion___ctor$IEnumerator_1_Completion__Completion_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_Completion__Suggestion___ctor$IEnumerator_1_Completion__Suggestion_ = (function(seed,unfold)
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
UnfoldEnumerator_2_Int32__IDisposable___ctor$Int32_IDisposable_ = (function(seed,unfold)
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
ViewsHelpers__bufferPositionFromMouseEvent$ = (function(e,editor)
{
    return (editor.bufferPositionForScreenPosition((editor.screenPositionForPixelPosition(ViewsHelpers__pixelPositionFromMouseEvent$(e)(editor)))));
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
          return (new Coordinates___ctor$(0.000000, 0.000000));
        }
        else
        {
          var n = Option__GetValue$Coordinates_Coordinates_(n_);
          return (new Coordinates___ctor$(((e.clientY) - n.top), ((e.clientX) - n.left)));
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
Parser__subscriptions = Parser__get_subscriptions$();
TooltipHandler__subscriptions = TooltipHandler__get_subscriptions$();
HighlighterHandler__subscriptions = HighlighterHandler__get_subscriptions$();
ErrorPanel__panel = ErrorPanel__get_panel$();
ErrorPanel__subscriptions = ErrorPanel__get_subscriptions$();
LanguageService__service = LanguageService__get_service$();
LanguageService__encoding = LanguageService__get_encoding$();
Parser__projects = Parser__get_projects$();
Parser__h = Parser__get_h$();
TooltipHandler__ed = TooltipHandler__get_ed$();
TooltipHandler__tooltip = TooltipHandler__get_tooltip$();
TooltipHandler__lastPosition = TooltipHandler__get_lastPosition$();
TooltipHandler__timer = TooltipHandler__get_timer$();
TooltipHandler__event = TooltipHandler__get_event$();
HighlighterHandler__marked = HighlighterHandler__get_marked$();
FAKE__taskListView = FAKE__get_taskListView$();
FAKE__currentNotification = FAKE__get_currentNotification$();
FAKE__File = FAKE__get_File$();
StatusBar__statusbar = StatusBar__get_statusbar$();
StatusBar__notification = StatusBar__get_notification$();
StatusBar__subscriptions = StatusBar__get_subscriptions$();
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
    return (function(p0)
    {
      return FSharpIDE__consumeStatusBar$(_this, p0);
    });
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
getSuggestion: function(p1) {
  return _funcs[3](_self)(p1); },
consumeStatusBar: function(p1) {
  return _funcs[4](_self)(p1); },
provide: function() {
  return _funcs[5](_self); }
};
