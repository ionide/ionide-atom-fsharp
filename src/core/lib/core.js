var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('atom').$;

function wrappedFunScript() { 
var Views__jq_$, Views__jq$, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_IEnumerator_1_String__String___ctor$IEnumerator_1_String__String, UnfoldEnumerator_2_IEnumerator_1_String__Object___ctor$IEnumerator_1_String__Object_, TupleString____Int32, TupleString_Int32, TupleString_IEnumerator_1_String_, TupleObject__IEnumerator_1_String_, T___ctor$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, State__On, State__Off, Seq__Where$String_1String, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$IEnumerator_1_String__String_1IEnumerator_1_String__String, Seq__Unfold$IEnumerator_1_String__Object_IEnumerator_1_String__Object_, Seq__ToArray$String___String___, Seq__ToArray$Object_Object_, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__Map$String_1_Object_String_Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$Object_Object_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Object_Object_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__Object_Unit__Object_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$Object__Unit_Object__Unit_, Seq__Filter$String_1String, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Object_Object_, Seq__Delay$String_1String, Seq__Delay$Object_Object_, Provider___ctor$, PanelOptions___ctor$, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_String_IEnumerator_1_String_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_String__IEnumerator_1_String_Tuple_2_String__IEnumerator_1_String_, Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_, Option__GetValue$Int32_Int32, Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_, Option__GetValue$ChildProcess_ChildProcess_, HighlighterHandler__marked, HighlighterHandler__handle$, HighlighterHandler__get_marked$, ErrorRowView__create$, ErrorPanelView__handle$, ErrorPanelView__hadnleEditorChange$, ErrorPanelView__create$, ErrorPanelView__addOutputHandle$, ErrorPanelView__addButtonHandlers$, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, Core__provide$, Core__getSuggestion$, Core__deactivate$, Core__activate$, Core___ctor$, AutocompleteService__start$, AutocompleteService__send$, AutocompleteService__get_create$, AutocompleteService__create, AutocompleteService__ask$, AutocompleteProvider__getSuggestion$, AutocompleteProvider__create$, AutocompleteHandler__parseEditor$, AutocompleteHandler__parseCurrent$, AutocompleteHandler__parse$, AutocompleteHandler__completion$, Array__ZeroCreate$String___String___, Array__ZeroCreate$Object_Object_, Array__MapIndexed$String_1_String___String_String___, Array__Map$String_1_String___String_String___, Array__Length$String_1String, Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Length$Error_Error_, Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_, Array__Iterate$Error_Error_, Array__FoldIndexed$Unit__IDisplayBufferMarker_Unit__IDisplayBufferMarker_, Array__FoldIndexed$Unit__Error_Unit__Error_, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_, Array__Fold$Error__Unit_Error__Unit_, Array__Empty$IDisplayBufferMarker_IDisplayBufferMarker_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_;
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
    var _532;
    return Array__Fold$Error__Unit_Error__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _532, xs);
});
Array__Iterate$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(f,xs)
{
    var _459;
    return Array__Fold$IDisplayBufferMarker__Unit_IDisplayBufferMarker__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _459, xs);
});
Array__Length$Error_Error_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IDisplayBufferMarker_IDisplayBufferMarker_ = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
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
Array__ZeroCreate$Object_Object_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
AutocompleteHandler__completion$ = (function(fn,line,col,cb,service)
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
    return AutocompleteService__ask$(str, 2, cb, service);
});
AutocompleteHandler__parse$ = (function(path,text,cb,service)
{
    var str = (((("parse \"" + path) + "\"\n") + text) + "\n\u003c\u003cEOF\u003e\u003e\n");
    return AutocompleteService__ask$(str, 2, cb, service);
});
AutocompleteHandler__parseCurrent$ = (function(cb,service)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    return AutocompleteHandler__parseEditor$(editor, cb, service);
});
AutocompleteHandler__parseEditor$ = (function(editor,cb,service)
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
      return AutocompleteHandler__parse$(path, text, action, service);
    }
    else
    {
      cb("Error");
      return service;
    };
});
AutocompleteProvider__create$ = (function(service)
{
    return (new Provider___ctor$(".source.fsharp", 1, true, (function(options)
    {
      return AutocompleteProvider__getSuggestion$(service, options);
    })));
});
AutocompleteProvider__getSuggestion$ = (function(service,options)
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
            var _734;
            if (((prefix == ".") || (prefix == "="))) 
            {
              _734 = "";
            }
            else
            {
              _734 = prefix;
            };
            var pref = _734;
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
      var ignored0 = AutocompleteHandler__parseCurrent$((function(_arg1)
      {
        var _ignored0 = AutocompleteHandler__completion$(path, row, col, action, service);
      }), service);
    })()});
});
AutocompleteService__ask$ = (function(msg,no,cb,state)
{
    ((window.console).log(("ASKED: " + msg)));
    Option__Iterate$ChildProcess_ChildProcess_((function(c)
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
          ((window.console).log(("RECIVED: " + a)));
          var ignored0 = ((c.stdout).removeAllListeners("data"));
          return cb(a);
        }
        else
        {
          ;
        };
      });
      var ignored0 = ((c.stdin).write(msg));
      var _ignored0 = ((c.stdout).on("data", action));
    }), state.Child);
    return state;
});
AutocompleteService__get_create$ = (function()
{
    return (new T___ctor$((new State__Off()), (new State__Off()), {Tag: 0.000000}));
});
AutocompleteService__send$ = (function(msg,t)
{
    ((window.console).log(("SEND: " + msg)));
    Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var ignored0 = ((c.stdin).write(msg));
    }), t.Child);
    return t;
});
AutocompleteService__start$ = (function(t)
{
    var location = ((((window.atom).packages).packageDirPaths)[0] + "/core/bin/fsautocomplete.exe");
    var _18;
    if (String__StartsWith$(((window.process).platform), "win")) 
    {
      _18 = (child_process.spawn(location));
    }
    else
    {
      _18 = (child_process.spawn("mono", [location]));
    };
    var child = _18;
    return (new T___ctor$((new State__On()), t.State, {Tag: 1.000000, Value: child}));
});
Core___ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.service = AutocompleteService__send$("outputmode json\n", AutocompleteService__start$(AutocompleteService__create));
});
Core__activate$ = (function(x,state)
{
    var t = ErrorPanelView__create$();
    var priority = 100;
    var panel = (((window.atom).workspace).addBottomPanel((new PanelOptions___ctor$(t, false, priority))));
    (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      var ignored0 = AutocompleteHandler__parseEditor$(ed, (function(_arg1)
      {
        ;
      }), x.service);
    })));
    (((window.atom).workspace).onDidChangeActivePaneItem((function(ed)
    {
      return ErrorPanelView__hadnleEditorChange$(panel, ed);
    })));
    ((window.atom).on("FSharp:Highlight", (function(lst)
    {
      return HighlighterHandler__handle$(lst);
    })));
    ((window.atom).on("FSharp:Highlight", (function(lst)
    {
      return ErrorPanelView__handle$(lst);
    })));
    var ignored0 = AutocompleteHandler__parseCurrent$((function(_arg2)
    {
      ;
    }), x.service);
    ErrorPanelView__hadnleEditorChange$(panel, (((window.atom).workspace).getActiveTextEditor()));
    ErrorPanelView__addButtonHandlers$();
    ErrorPanelView__addOutputHandle$();
});
Core__deactivate$ = (function(x,unitVar1)
{
    ;
});
Core__getSuggestion$ = (function(x,options)
{
    return AutocompleteProvider__getSuggestion$(x.service, options);
});
Core__provide$ = (function(x,unitVar1)
{
    return AutocompleteProvider__create$(x.service);
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
ErrorPanelView__addButtonHandlers$ = (function(unitVar0)
{
    var btns = Views__jq$(".btn-toggle button");
    var panels = Views__jq$(".outputPanel");
    var ignored0 = (btns.click((function(e)
    {
      var j = Views__jq_$((e.target));
      var _ignored0 = (btns.removeClass("toggle"));
      var __ignored0 = (panels.hide());
      var matchValue = (j.attr("id"));
      if ((matchValue == "btnError")) 
      {
        var ___ignored0 = (Views__jq$("#panelError").show());
      }
      else
      {
        if ((matchValue == "btnOutput")) 
        {
          var ____ignored0 = (Views__jq$("#panelOutput").show());
        }
        else
        {
          ;
        };
      };
      return (j.addClass("toggle"));
    })));
});
ErrorPanelView__addOutputHandle$ = (function(unitVar0)
{
    return ((window.atom).on("FSharp:Output", (function(msg)
    {
      var msg_ = String__Replace$(msg, "\n", "\u003c/br\u003e");
      var clo1 = String__PrintFormatToString$("\u003cspan\u003e%s\u003c/span\u003e");
      return (Views__jq$("#panelOutput").append((function(arg10)
      {
        return clo1(arg10);
      })(msg_)));
    })));
});
ErrorPanelView__create$ = (function(unitVar0)
{
    return Views__jq$("\u003cdiv class=\u0027tool-panel panel-bottom error-pane\u0027 id=\u0027pane\u0027\u003e\r\n                 \u003cdiv class=\u0027inset-panel\u0027\u003e\r\n                    \u003cdiv class=\u0027panel-heading clearfix\u0027\u003e\r\n                        \u003cdiv class=\u0027btn-toolbar pull-left\u0027\u003e\r\n                            \u003cdiv class=\u0027btn-group btn-toggle\u0027\u003e\r\n                                \u003cbutton id=\u0027btnError\u0027 class=\u0027btn toggle\u0027\u003eErrors\u003c/button\u003e\r\n                                \u003cbutton id=\u0027btnOutput\u0027 class=\u0027btn\u0027 \u003eOutput\u003c/button\u003e\r\n                            \u003c/div\u003e\r\n                        \u003c/div\u003e\r\n                    \u003c/div\u003e\r\n                    \u003ctable id=\u0027panelError\u0027 class=\u0027error-table outputPanel\u0027 \u003e\r\n                        \u003cthead\u003e\u003cth\u003ePosition\u003c/th\u003e\u003cth\u003eMessage\u003c/th\u003e\u003cth\u003eType\u003c/th\u003e\u003cth\u003eCategory\u003c/th\u003e\u003c/thead\u003e\r\n                        \u003ctbody id=\u0027errorList\u0027\u003e\r\n                    \u003c/table\u003e\r\n                    \u003cdiv id=\u0027panelOutput\u0027 class=\u0027error-table outputPanel\u0027 style=\u0027display : none\u0027\u003e\u003c/span\u003e\r\n\r\n                \u003c/div\u003e\r\n             \u003c/div\u003e");
});
ErrorPanelView__hadnleEditorChange$ = (function(panel,editor)
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
ErrorPanelView__handle$ = (function(lst)
{
    var list = Views__jq$("#errorList");
    var ignored0 = ((list.children()).remove());
    return Array__Iterate$Error_Error_((function(e)
    {
      var t = ErrorRowView__create$(e);
      var r = (list.append(t));
    }), lst);
});
ErrorRowView__create$ = (function(e)
{
    var clo1 = String__PrintFormatToString$("\u003ctr\u003e\u003ctd\u003e%d : %d\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003ctd\u003e%s\u003c/td\u003e\u003c/tr\u003e");
    return Views__jq$((function(arg10)
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
      var _510;
      if ((item.Severity == "Warning")) 
      {
        _510 = "highlight-warning";
      }
      else
      {
        _510 = "highlight-error";
      };
      var cls = _510;
      HighlighterHandler__marked = Array__Append$IDisplayBufferMarker_IDisplayBufferMarker_([marker], HighlighterHandler__marked);
      editor.decorateMarker(marker, {type: 'highlight', class: cls});
    });
    Array__Iterate$Error_Error_(action, lst);
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_String_IEnumerator_1_String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_String_Tuple_2_Object__IEnumerator_1_String_ = (function(option)
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
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
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
PanelOptions___ctor$ = (function(item,visible,priority)
{
    var __this = this;
    __this.item = item;
    __this.visible = visible;
    __this.priority = priority;
});
Provider___ctor$ = (function(selector,inclusionPriority,excludeLowerPriority,getSuggestions)
{
    var __this = this;
    __this.selector = selector;
    __this.inclusionPriority = inclusionPriority;
    __this.excludeLowerPriority = excludeLowerPriority;
    __this.getSuggestions = getSuggestions;
});
Seq__Delay$Object_Object_ = (function(f)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var _1000;
      return Seq__Enumerator$Object_Object_(f(_1000));
    }));
});
Seq__Delay$String_1String = (function(f)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var _909;
      return Seq__Enumerator$String_1String(f(_909));
    }));
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
Seq__FoldIndexed$Object__Unit_Object__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Object_Unit__Object_(f, seed, Seq__Enumerator$Object_Object_(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
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
Seq__FromFactory$Object_Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Object___ctor$Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _992;
        return __.factory(_992);
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
        var _837;
        return __.factory(_837);
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
        var _215;
        return __.factory(_215);
      })(impl, unitVar1);
    })};
});
Seq__IterateIndexed$Object_Object_ = (function(f,xs)
{
    var _1014;
    return Seq__FoldIndexed$Object__Unit_Object__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1014, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _235;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _235, xs);
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
            var _970;
            return next(_970);
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
            var _886;
            return next(_886);
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
            var _815;
            return next(_815);
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
            var _193;
            return next(_193);
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
TupleObject__IEnumerator_1_String_ = (function(Item0,Item1)
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
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
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
Views__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
Views__jq_$ = (function(selector)
{
    return ((window.$)(selector));
});
AutocompleteService__create = AutocompleteService__get_create$();
HighlighterHandler__marked = HighlighterHandler__get_marked$();
return [(function(ign)
{
    return (new Core___ctor$());
}), (function(_this)
{
    return Core__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return Core__activate$(_this, p0);
    });
}), (function(_this)
{
    return (function(p0)
    {
      return Core__getSuggestion$(_this, p0);
    });
}), (function(_this)
{
    return Core__provide$(_this);
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
provide: function() {
  return _funcs[4](_self); }
};