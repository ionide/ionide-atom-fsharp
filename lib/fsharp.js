var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var path = require('path');

function wrappedFunScript() { 
var position___ctor$, position__GeneratedCompareTo, list_1_String____NilString___, list_1_String____ConsString___, ViewsHelpers__pixelPositionFromMouseEvent$, ViewsHelpers__jq_$, ViewsHelpers__jq$, ViewsHelpers__getElementsByClass$Element_Element_, ViewsHelpers__bufferPositionFromMouseEvent$, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1, UnfoldEnumerator_2_Int32__IDisposable___ctor$Int32_IDisposable_, UnfoldEnumerator_2_IEnumerator_1_String__String___ctor$IEnumerator_1_String__String, UnfoldEnumerator_2_IEnumerator_1_String__Object___ctor$IEnumerator_1_String__Object_, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_String, TupleString_Int32, TupleString_IEnumerator_1_String_, TupleSelectListView__IPanel_, TupleObject__IEnumerator_1_String_, TupleMatch_1_Int32, TupleIDisposable__Int32, TooltipHandler__tooltip, TooltipHandler__timer, TooltipHandler__remove$, TooltipHandler__register$, TooltipHandler__lastPosition, TooltipHandler__initialize$, TooltipHandler__get_tooltip$, TooltipHandler__get_timer$, TooltipHandler__get_lastPosition$, TooltipHandler__get_ed$, TooltipHandler__getPosition$, TooltipHandler__ed, TooltipHandler__create$, TooltipHandler__clearTimer$, T___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, StatusBarOptions___ctor$, State__On, State__Off, Seq__Where$String_1String, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Match_1Int32_Match_1, Seq__Unfold$Int32__IDisposable_Int32_IDisposable_, Seq__Unfold$IEnumerator_1_String__String_1IEnumerator_1_String__String, Seq__Unfold$IEnumerator_1_String__Object_IEnumerator_1_String__Object_, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__ToArray$String___String___, Seq__ToArray$Object_Object_, Seq__ToArray$Match_1Match_1, Seq__OfList$String___String___, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__Map$String_1_Object_String_Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$Object_Object_, Seq__IterateIndexed$Match_1Match_1, Seq__Iterate$IDisposable_IDisposable_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Object_Object_, Seq__FromFactory$Match_1Match_1, Seq__FromFactory$IDisposable_IDisposable_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__Object_Unit__Object_, Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1, Seq__FoldIndexedAux$Unit__IDisposable_Unit__IDisposable_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$Object__Unit_Object__Unit_, Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_, Seq__FoldIndexed$IDisposable__Unit_IDisposable__Unit_, Seq__Fold$IDisposable__Unit_IDisposable__Unit_, Seq__Filter$String_1String, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Object_Object_, Seq__Enumerator$Match_1Match_1, Seq__Enumerator$IDisposable_IDisposable_, Seq__Delay$String_1String, Seq__Delay$Object_Object_, Seq__Cast$Match_1Match_1, ResizeArray__ToSeq$IDisposable_IDisposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Regex__MatchesWithOffset$, Regex__MatchesStatic$, Regex__Matches$, Regex__MatchFirstWithOffset$, Regex__MatchFirstStatic$, Regex__MatchFirst$, Regex__MatchCollectionToSeq$, Regex__Create$, Provider___ctor$, PanelOptions___ctor$, Options___ctor$, Option__Map$NodeList__JQuery_NodeList__JQuery_, Option__Map$NodeList__Element_NodeList__Element_, Option__Map$NodeList__Coordinates_NodeList__Coordinates_, Option__Map$HTMLElement__NodeList_HTMLElement__NodeList_, Option__Map$Element__HTMLElement_Element__HTMLElement_, Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_, Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__Iterate$Timer_Timer_, Option__Iterate$Notification_Notification_, Option__Iterate$JQuery_JQuery_, Option__Iterate$ITile_ITile_, Option__Iterate$IStatusBar_IStatusBar_, Option__Iterate$IPanel_IPanel_, Option__Iterate$Element_Element_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_String_IEnumerator_1_String_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_String__IEnumerator_1_String_Tuple_2_String__IEnumerator_1_String_, Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_, Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_, Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_, Option__GetValue$Timer_Timer_, Option__GetValue$String_1String, Option__GetValue$Notification_Notification_, Option__GetValue$NodeList_NodeList_, Option__GetValue$JQuery_JQuery_, Option__GetValue$Int32_Int32, Option__GetValue$ITile_ITile_, Option__GetValue$IStatusBar_IStatusBar_, Option__GetValue$IPanel_IPanel_, Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_, Option__GetValue$HTMLElement_HTMLElement_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$Element_Element_, Option__GetValue$Coordinates_Coordinates_, Option__GetValue$ChildProcess_ChildProcess_, OpenOptions___ctor$, NotificationsOptions___ctor$, Match__get_Groups$, MatchCollection__get_Item$, MatchCollection__get_Count$, List__Tail$String___String___, List__Head$String___String___, List__Empty$String___String___, List__CreateCons$String___String___, LanguageService__tooltip$, LanguageService__stop$, LanguageService__start$, LanguageService__service, LanguageService__send$, LanguageService__project$, LanguageService__parseEditor$, LanguageService__parseCurrent$, LanguageService__parse$, LanguageService__get_service$, LanguageService__get_encoding$, LanguageService__findDeclaration$, LanguageService__encoding, LanguageService__completion$, LanguageService__ask$, ItemDescription___ctor$, HighlighterHandler__marked, HighlighterHandler__handle$, HighlighterHandler__get_marked$, Group__get_Success$, GroupCollection__get_Item$, FindDeclaration__handle$Unit_Unit_, FSharpIDE__register$, FSharpIDE__provide$, FSharpIDE__parseProjectForEditor$, FSharpIDE__initialize$, FSharpIDE__getSuggestion$, FSharpIDE__deactivate$, FSharpIDE__consumeStatusBar$, FSharpIDE__addStatusNotification$, FSharpIDE__activate$, FSharpIDE___ctor$, FAKE__viewForItem$, FAKE__taskListView, FAKE__spawn$, FAKE__regiterListView$, FAKE__registerTaskList$, FAKE__register$, FAKE__notice$, FAKE__jq__$, FAKE__jq_$, FAKE__jq$, FAKE__handleExit$, FAKE__handle$Object_Object_, FAKE__get_taskListView$, FAKE__get_currentNotification$, FAKE__get_File$, FAKE__currentNotification, FAKE__File, FAKE__FAKENotFound$, FAKE__BuildTask$, ErrorPanel__handleEditorChange$, ErrorPanel__handle$, ErrorPanel__createRow$, ErrorPanel__create$, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, CreateEnumerable_1_Match___ctor$Match_1, CreateEnumerable_1_IDisposable___ctor$IDisposable_, Coordinates___ctor$, Capture__get_Value$, Capture__getValue$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__create$, Atom__addCommand$, Array__ZeroCreate$String___String___, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Match_1Match_1, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexed$String_1_String_1String_String, Array__TryFind$String_1String, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Match_1_Object_Match_1_Object_, Array__Map$String_1_String___String_String___, Array__Map$Match_1_Object_Match_1_Object_, Array__Length$String_1String, Array__Length$Match_1Match_1, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Iterate$Error_Error_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$Unit__Error_Unit__Error_, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Fold$Error__Unit_Error__Unit_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_;
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
    var _1318;
    return Array__Fold$Error__Unit_Error__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1318, xs);
});
Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(f,xs)
{
    var _1245;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _1245, xs);
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
    var path = (((options.editor.buffer).file).path);
    var row = ((options.bufferPosition.row) + 1);
    var col = (options.bufferPosition.column);
    var prefix = options.prefix;
    return new Promise(function(resolve){(function(unitVar0)
    {
      var action = (function(s)
      {
        var msplit = String__SplitWithoutOptions$(s, ["\n"]);
        if ((Array__BoxedLength$(msplit) > 1)) 
        {
          var msg = msplit[1];
          try
          {
            var result = ((window.JSON).parse(msg));
            var _2268;
            if (((prefix == ".") || (prefix == "="))) 
            {
              _2268 = "";
            }
            else
            {
              _2268 = prefix;
            };
            var pref = _2268;
            if ((result.Kind == "completion")) 
            {
              return resolve(Seq__ToArray$Object_Object_(Seq__Map$String_1_Object_String_Object_((function(t)
              {
                return {text: t, replacementPrefix: pref};
              }), Seq__Where$String_1String((function(t)
              {
                return (t.indexOf(pref) >= 0);
              }), Seq__OfArray$String_1String(result.Data)))));
            }
            else
            {
              return resolve([]);
            };
          }
          catch(ex){
            return resolve([]);
          };
        }
        else
        {
          ;
        };
      });
      return LanguageService__parseCurrent$((function(_arg1)
      {
        return LanguageService__completion$(path, row, col, action);
      }));
    })()});
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
ErrorPanel__handle$ = (function(lst)
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
      }), lst);
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
      (panel.show());
      var ignored0 = ((editor.buffer).onDidStopChanging((function(_arg2)
      {
        return LanguageService__parseCurrent$((function(_arg1)
        {
          ;
        }));
      })));
    }
    else
    {
      return (panel.hide());
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
      var _1687;
      if (isError) 
      {
        _1687 = ((window.atom).notifications).addError(text, (new NotificationsOptions___ctor$(details, true)));
      }
      else
      {
        _1687 = ((window.atom).notifications).addInfo(text, (new NotificationsOptions___ctor$(details, true)));
      };
      var n = _1687;
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
FAKE__register$ = (function(unitVar0)
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
      var _1467;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FAKE__taskListView);
      })(_1467);
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
      var _1781;
      return (function(_arg1)
      {
        return "name";
      })(_1781);
    }));
    if (removeFiler) 
    {
      (listView.getFilterQuery = (function()
      {
        var _1786;
        return (function(_arg2)
        {
          return "";
        })(_1786);
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
    var _1502;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _1502 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      _1502 = (child_process.spawn("mono", prms, options));
    };
    var procs = _1502;
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
    var __this = this;
    {};
    __this.panel = {Tag: 0.000000};
    __this.statusbar = {Tag: 0.000000};
    __this.notification = {Tag: 0.000000};
    __this.subscriptions = [];
});
FSharpIDE__activate$ = (function(x,state)
{
    LanguageService__start$((function(_arg5)
    {
      ;
    }));
    LanguageService__send$("outputmode json\n");
    var t = ErrorPanel__create$();
    var priority = 100;
    var p = (((window.atom).workspace).addBottomPanel((new PanelOptions___ctor$(t, false, priority))));
    x.panel = {Tag: 1.000000, Value: p};
    var ignored0 = (window.setTimeout((function(_arg6)
    {
      return FSharpIDE__register$(x, p);
    }), 500.000000));
    var _ignored0 = (window.setTimeout((function(_arg7)
    {
      return FSharpIDE__initialize$(x, p);
    }), 500.000000));
    var __ignored0 = (window.setTimeout((function(_arg8)
    {
      return atom.commands.add("atom-text-editor", "symbols-view:go-to-declaration", (function(e)
      {
        return FindDeclaration__handle$Unit_Unit_(e);
      }));;
    }), 500.000000));
});
FSharpIDE__addStatusNotification$ = (function(_this,status)
{
    Option__Iterate$ITile_ITile_((function(n)
    {
      return n.destroy();
    }), _this.notification);
    return Option__Iterate$IStatusBar_IStatusBar_((function(s)
    {
      var clo1 = String__PrintFormatToString$("\u003cspan class=\u0027fsharp-status\u0027\u003eF# Status - %s\u003c/span\u003e");
      var el = ViewsHelpers__jq$((function(arg10)
      {
        return clo1(arg10);
      })(status));
      _this.notification = (function(arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })(s.addLeftTile((new StatusBarOptions___ctor$(el, 100))));
    }), _this.statusbar);
});
FSharpIDE__consumeStatusBar$ = (function(x,sb)
{
    x.statusbar = {Tag: 1.000000, Value: sb};
    var status = "Loading";
    FSharpIDE__addStatusNotification$(x, status);
});
FSharpIDE__deactivate$ = (function(x,unitVar1)
{
    Seq__Iterate$IDisposable_IDisposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$IDisposable_IDisposable_(x.subscriptions));
    (x.subscriptions = []);
    LanguageService__stop$((function(_arg9)
    {
      var status = "Off";
      return FSharpIDE__addStatusNotification$(x, status);
    }));
    Option__Iterate$IPanel_IPanel_((function(p)
    {
      return (p.destroy());
    }), x.panel);
});
FSharpIDE__getSuggestion$ = (function(x,options)
{
    return AutocompleteProvider__getSuggestion$(options);
});
FSharpIDE__initialize$ = (function(_this,panel)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    FSharpIDE__parseProjectForEditor$(_this, editor);
    LanguageService__parseEditor$(editor, (function(_arg4)
    {
      ;
    }));
    ErrorPanel__handleEditorChange$(panel, editor);
    TooltipHandler__initialize$(editor);
    return FAKE__register$();
});
FSharpIDE__parseProjectForEditor$ = (function(_this,editor)
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
            var status = "Ready (.fsproj not found)";
            return FSharpIDE__addStatusNotification$(_this, status);
          }
          else
          {
            var a = Option__GetValue$String_1String(projExist);
            var path = ((p + "/") + a);
            return LanguageService__project$(path, (function(_arg1)
            {
              var _status = "Ready";
              return FSharpIDE__addStatusNotification$(_this, _status);
            }));
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
    if ((editor != undefined)) 
    {
      var status = "Loading";
      FSharpIDE__addStatusNotification$(_this, status);
      var p = (((editor.buffer).file).path);
      if (((String__SplitWithoutOptions$(p, ["."])[(Array__BoxedLength$(String__SplitWithoutOptions$(p, ["."])) - 1)] == "fsproj") || ((editor["getGrammar"] != undefined) && (((editor.getGrammar()).name) == "F#")))) 
      {
        if ((p != undefined)) 
        {
          return parseProj((path.dirname(p)));
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
    }
    else
    {
      ;
    };
});
FSharpIDE__provide$ = (function(x,unitVar1)
{
    return AutocompleteProvider__create$();
});
FSharpIDE__register$ = (function(_this,panel)
{
    _this.subscriptions.push(((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return LanguageService__parseEditor$(ed, (function(_arg2)
      {
        ;
      }));
    })));
    _this.subscriptions.push(((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return ErrorPanel__handleEditorChange$(panel, ed);
    })));
    _this.subscriptions.push(((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      var ignored0 = (window.setTimeout((function(_arg3)
      {
        return TooltipHandler__initialize$(ed);
      }), 500.000000));
    })));
    _this.subscriptions.push(((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return FSharpIDE__parseProjectForEditor$(_this, ed);
    })));
    _this.subscriptions.push((window.atom).on("FSharp:Highlight", (function(lst)
    {
      return HighlighterHandler__handle$(lst);
    })));
    return _this.subscriptions.push((window.atom).on("FSharp:Highlight", (function(lst)
    {
      return ErrorPanel__handle$(lst);
    })));
});
FindDeclaration__handle$Unit_Unit_ = (function(e)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    var name = (((editor.buffer).file).path);
    var position = (editor.getCursorBufferPosition());
    return LanguageService__findDeclaration$(name, ((position.row) + 1), ((position.column) + 1), (function(n)
    {
      var data = ((window.JSON).parse(n));
      var initialColumn = (data.Data.Column - 1);
      return ((window.atom).workspace).open(data.Data.File, (new OpenOptions___ctor$((data.Data.Line - 1), initialColumn)));
    }));
});
GroupCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
});
Group__get_Success$ = (function(x,unitVar1)
{
    return (x !== null);
});
HighlighterHandler__get_marked$ = (function()
{
    return Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_();
});
HighlighterHandler__handle$ = (function(lst)
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
      var _1296;
      if ((item.Severity == "Warning")) 
      {
        _1296 = "highlight-warning";
      }
      else
      {
        _1296 = "highlight-error";
      };
      var cls = _1296;
      HighlighterHandler__marked = Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_([marker], HighlighterHandler__marked);
      editor.decorateMarker(marker, {type: 'highlight', class: cls});
    });
    Array__Iterate$Error_Error_(action, lst);
});
ItemDescription___ctor$ = (function(data)
{
    var __this = this;
    __this.data = data;
});
LanguageService__ask$ = (function(msg_,no,cb)
{
    var msg = String__Replace$(msg_, "﻿", "");
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var s = {contents: ""};
      var action = (function(data)
      {
        var t = s.contents;
        s.contents = (t + data.toString());
        null;
        var a = s.contents;
        var len = (Array__BoxedLength$(String__SplitWithoutOptions$(a, ["\n"])) - 1);
        if (((len == no) || (a.indexOf("\"Kind\":\"ERROR\"") >= 0))) 
        {
          var ignored0 = ((c.stdout).removeAllListeners("data"));
          return cb(a);
        }
        else
        {
          ;
        };
      });
      ((c.stdin).write(msg, LanguageService__encoding));
      var ignored0 = ((c.stdout).on("data", action));
    }), LanguageService__service.Child);
});
LanguageService__completion$ = (function(fn,line,col,cb)
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
    return LanguageService__ask$(str, 2, cb);
});
LanguageService__findDeclaration$ = (function(fn,line,col,cb)
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
    return LanguageService__ask$(str, 1, cb);
});
LanguageService__get_encoding$ = (function()
{
    return "utf-8";
});
LanguageService__get_service$ = (function()
{
    return (new T___ctor$((new State__Off()), (new State__Off()), {Tag: 0.000000}));
});
LanguageService__parse$ = (function(path,text,cb)
{
    var str = (((("parse \"" + path) + "\"\n") + text) + "\n\u003c\u003cEOF\u003e\u003e\n");
    return LanguageService__ask$(str, 2, cb);
});
LanguageService__parseCurrent$ = (function(cb)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    return LanguageService__parseEditor$(editor, cb);
});
LanguageService__parseEditor$ = (function(editor,cb)
{
    if ((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"))) 
    {
      var path = (((editor.buffer).file).path);
      var text = (editor.getText());
      var action = (function(s)
      {
        var split = String__SplitWithoutOptions$(s, ["\n"]);
        if ((Array__BoxedLength$(split) > 1)) 
        {
          try
          {
            var o = ((window.JSON).parse(split[1]));
            if ((o.Kind == "errors")) 
            {
              ((window.atom).emit("FSharp:Highlight", o.Data));
            }
            else
            {
              ;
            };
          }
          catch(ex){
            ;
          };
        }
        else
        {
          ;
        };
        return cb(s);
      });
      return LanguageService__parse$(path, text, action);
    }
    else
    {
      return cb("Error");
    };
});
LanguageService__project$ = (function(s,cb)
{
    var clo1 = String__PrintFormatToString$("project \"%s\"\n");
    var str = (function(arg10)
    {
      return clo1(arg10);
    })(s);
    return LanguageService__ask$(str, 1, cb);
});
LanguageService__send$ = (function(msg_)
{
    var msg = String__Replace$(msg_, "﻿", "");
    return Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var ignored0 = ((c.stdin).write(msg, LanguageService__encoding));
    }), LanguageService__service.Child);
});
LanguageService__start$ = (function(cb)
{
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/fsharp/bin/fsautocomplete.exe");
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
    var _295;
    return cb(_295);
});
LanguageService__stop$ = (function(cb)
{
    Option__Iterate$ChildProcess_ChildProcess_((function(n)
    {
      return (n.kill("SIGKILL"));
    }), LanguageService__service.Child);
    LanguageService__service = (new T___ctor$((new State__Off()), LanguageService__service.State, {Tag: 0.000000}));
    var _244;
    return cb(_244);
});
LanguageService__tooltip$ = (function(fn,line,col,cb)
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
    return LanguageService__ask$(str, 1, cb);
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
Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_ = (function(option)
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
Option__GetValue$Tuple_2_IDisposable__Int32_Tuple_2_IDisposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__IEnumerator_1_String_Tuple_2_String__IEnumerator_1_String_ = (function(option)
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
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_String_IEnumerator_1_String_ = (function(option)
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
Seq__Delay$Object_Object_ = (function(f)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var _2534;
      return Seq__Enumerator$Object_Object_(f(_2534));
    }));
});
Seq__Delay$String_1String = (function(f)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var _2443;
      return Seq__Enumerator$String_1String(f(_2443));
    }));
});
Seq__Enumerator$IDisposable_IDisposable_ = (function(xs)
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
Seq__Filter$String_1String = (function(f,xs)
{
    var trySkipToNext;
    trySkipToNext = (function(_enum)
    {
      if (_enum.MoveNext()) 
      {
        if (f(_enum.get_Current())) 
        {
          return {Tag: 1.000000, Value: (new TupleString_IEnumerator_1_String_(_enum.get_Current(), _enum))};
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
    return Seq__Delay$String_1String((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_String__String_1IEnumerator_1_String__String(trySkipToNext, Seq__Enumerator$String_1String(xs));
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
Seq__FoldIndexed$IDisposable__Unit_IDisposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__IDisposable_Unit__IDisposable_(f, seed, Seq__Enumerator$IDisposable_IDisposable_(xs));
});
Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1(f, seed, Seq__Enumerator$Match_1Match_1(xs));
});
Seq__FoldIndexed$Object__Unit_Object__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Object_Unit__Object_(f, seed, Seq__Enumerator$Object_Object_(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
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
Seq__FromFactory$IDisposable_IDisposable_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_IDisposable___ctor$IDisposable_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _100;
        return __.factory(_100);
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
        var _2014;
        return __.factory(_2014);
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
        var _2526;
        return __.factory(_2526);
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
        var _2371;
        return __.factory(_2371);
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
        var _474;
        return __.factory(_474);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$IDisposable_IDisposable_ = (function(f,xs)
{
    var _108;
    return Seq__Fold$IDisposable__Unit_IDisposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _108, xs);
});
Seq__IterateIndexed$Match_1Match_1 = (function(f,xs)
{
    var _2033;
    return Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _2033, xs);
});
Seq__IterateIndexed$Object_Object_ = (function(f,xs)
{
    var _2548;
    return Seq__FoldIndexed$Object__Unit_Object__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _2548, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _494;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _494, xs);
});
Seq__Map$String_1_Object_String_Object_ = (function(f,xs)
{
    return Seq__Delay$Object_Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_String__Object_IEnumerator_1_String__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleObject__IEnumerator_1_String_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$String_1String(xs));
    }));
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
            var _1595;
            return next(_1595);
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
Seq__Unfold$IEnumerator_1_String__Object_IEnumerator_1_String__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_String__Object___ctor$IEnumerator_1_String__Object_(seed, f));
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
            var currAcc = Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_(x).Items[1.000000];
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
          return (Option__IsSome$IEnumerator_1_String_IEnumerator_1_String_(__.acc) && (function()
          {
            var _2504;
            return next(_2504);
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
Seq__Unfold$IEnumerator_1_String__String_1IEnumerator_1_String__String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_String__String___ctor$IEnumerator_1_String__String(seed, f));
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
            var currAcc = Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String__IEnumerator_1_String_Tuple_2_String__IEnumerator_1_String_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__IEnumerator_1_String_Tuple_2_String__IEnumerator_1_String_(x).Items[1.000000];
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
          return (Option__IsSome$IEnumerator_1_String_IEnumerator_1_String_(__.acc) && (function()
          {
            var _2420;
            return next(_2420);
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
            var _78;
            return next(_78);
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
            var _1992;
            return next(_1992);
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
            var _2349;
            return next(_2349);
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
            var _452;
            return next(_452);
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
Seq__Where$String_1String = (function(f,xs)
{
    return Seq__Filter$String_1String(f, xs);
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
T___ctor$ = (function(State,PreviousState,Child)
{
    var __this = this;
    __this.State = State;
    __this.PreviousState = PreviousState;
    __this.Child = Child;
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
TooltipHandler__getPosition$ = (function(e,editor)
{
    var bufferPt = ViewsHelpers__bufferPositionFromMouseEvent$(e, editor);
    return (new position___ctor$((bufferPt.row), (bufferPt.column)));
});
TooltipHandler__get_ed$ = (function()
{
    return ({});
});
TooltipHandler__get_lastPosition$ = (function()
{
    return (new position___ctor$(0.000000, 0.000000));
});
TooltipHandler__get_timer$ = (function()
{
    return {Tag: 0.000000};
});
TooltipHandler__get_tooltip$ = (function()
{
    return TooltipHandler__create$();
});
TooltipHandler__initialize$ = (function(editor)
{
    TooltipHandler__remove$();
    if ((((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name) == "F#"))) 
    {
      TooltipHandler__ed = editor;
      return Option__Iterate$Element_Element_((function(n)
      {
        return TooltipHandler__register$(editor, 500.000000, n);
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
TooltipHandler__register$ = (function(editor,time,element)
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
            var path = (((editor.buffer).file).path);
            var __ignored0 = LanguageService__tooltip$(path, (pos.row + 1), pos.column, (function(s)
            {
              return (function(_n)
              {
                try
                {
                  if (((ViewsHelpers__jq$("body /deep/ span.fsharp:hover").length) > 0.000000)) 
                  {
                    var o = ((window.JSON).parse(s));
                    if ((o.Data != "No tooltip information")) 
                    {
                      ((window.console).log(((window.document).elementFromPoint((e.clientX), (e.clientY)))));
                      var position = ViewsHelpers__pixelPositionFromMouseEvent$(e)(editor);
                      var n_ = ViewsHelpers__jq_$(_n);
                      var ___ignored0 = (n_.empty());
                      var ____ignored0 = (n_.append(String__Replace$(String__Replace$(o.Data, "\\n", "\u003c/br\u003e"), "\n", "\u003c/br\u003e")));
                      var _____ignored0 = (TooltipHandler__tooltip.css("left", (position.left + 40.000000)));
                      var ______ignored0 = (TooltipHandler__tooltip.css("top", ((e.clientY) + 20.000000)));
                      var _______ignored0 = (TooltipHandler__tooltip.fadeTo(300.000000, 60.000000));
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
                }
                catch(ex){
                  ;
                };
              })(((TooltipHandler__tooltip[0]).firstElementChild));
            }));
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
TupleObject__IEnumerator_1_String_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleSelectListView__IPanel_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_IEnumerator_1_String_ = (function(Item0,Item1)
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
UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_String__Object___ctor$IEnumerator_1_String__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_String__String___ctor$IEnumerator_1_String__String = (function(seed,unfold)
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
LanguageService__service = LanguageService__get_service$();
LanguageService__encoding = LanguageService__get_encoding$();
TooltipHandler__ed = TooltipHandler__get_ed$();
TooltipHandler__tooltip = TooltipHandler__get_tooltip$();
TooltipHandler__lastPosition = TooltipHandler__get_lastPosition$();
TooltipHandler__timer = TooltipHandler__get_timer$();
HighlighterHandler__marked = HighlighterHandler__get_marked$();
FAKE__taskListView = FAKE__get_taskListView$();
FAKE__currentNotification = FAKE__get_currentNotification$();
FAKE__File = FAKE__get_File$();
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