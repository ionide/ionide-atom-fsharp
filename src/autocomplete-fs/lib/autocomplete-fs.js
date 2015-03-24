var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');

function wrappedFunScript() { 
var UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, TupleString____Int32, T_1__ctor$, String__SplitWithoutOptions$, State_1_On, State_1_Off, Seq__Unfold$Int32__String___Int32_String___, Seq__ToArray$String___String___, Seq__OfArray$String___String___, Seq__IterateIndexed$String___String___, Seq__FromFactory$String___String___, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__Enumerator$String___String___, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Int32_Int32, Option__GetValue$ChildProcess_ChildProcess_, HighlighterHandler_1_marked, HighlighterHandler_1_handle$Item_1Item_1, HighlighterHandler_1_get_marked$, Editor_1_getEditorText$, Editor_1_getEditorPath$, Editor_1_getEditorGrammarName$, Editor_1_getCurrentPackagePath$, Editor_1_getActiveTextEditor$, CreateEnumerable_1_String_____ctor$String___, CompositeDisposable_1_dispose$, CompositeDisposable_1_create$, Autocomplete_1_getSuggestion$, Autocomplete_1_deactivate$, Autocomplete_1_activate$, Autocomplete_1__ctor$, AutocompleteService_1_start$, AutocompleteService_1_send$, AutocompleteService_1_location$, AutocompleteService_1_get_create$, AutocompleteService_1_create, AutocompleteService_1_ask$, AutocompleteHandler_1_parseEditor$, AutocompleteHandler_1_parse$, Array__ZeroCreate$String___String___, Array__MapIndexed$String_1_String___String_String___, Array__Map$String_1_String___String_String___, Array__Length$String_1String, Array__Length$Marker_1Marker_1, Array__Iterate$Marker_1Marker_1, Array__FoldIndexed$Unit__Marker_1Unit__Marker_1, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__Fold$Marker_1_Unit_Marker_1_Unit_, Array__Empty$Marker_1Marker_1, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$Marker_1Marker_1;
Array__Append$Marker_1Marker_1 = (function(xs,ys)
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
Array__Empty$Marker_1Marker_1 = (function()
{
    return [];
});
Array__Fold$Marker_1_Unit_Marker_1_Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__Marker_1Unit__Marker_1((function(_arg1)
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
Array__FoldIndexed$Unit__Marker_1Unit__Marker_1 = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$Marker_1Marker_1(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Iterate$Marker_1Marker_1 = (function(f,xs)
{
    var _401;
    return Array__Fold$Marker_1_Unit_Marker_1_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _401, xs);
});
Array__Length$Marker_1Marker_1 = (function(xs)
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
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
AutocompleteHandler_1_parse$ = (function(path,text,cb,service)
{
    var str = (((("parse \"" + path) + "\"\n") + text) + "\n\u003c\u003cEOF\u003e\u003e\n");
    return AutocompleteService_1_ask$(str, 2, cb, service);
});
AutocompleteHandler_1_parseEditor$ = (function(editor,cb,service)
{
    if ((Editor_1_getEditorGrammarName$(editor) == "F#")) 
    {
      var path = Editor_1_getEditorPath$(editor);
      var text = Editor_1_getEditorText$(editor);
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
              atom.emit("FSharp.Atom:Highlight",o.Data);
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
      return AutocompleteHandler_1_parse$(path, text, action, service);
    }
    else
    {
      cb("Error");
      return service;
    };
});
AutocompleteService_1_ask$ = (function(msg,no,cb,state)
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
AutocompleteService_1_get_create$ = (function()
{
    return (new T_1__ctor$((new State_1_Off()), (new State_1_Off()), {Tag: 0.000000}));
});
AutocompleteService_1_location$ = (function(unitVar0)
{
    return (Editor_1_getCurrentPackagePath$() + "\\autocomplete\\bin\\fsautocomplete.exe");
});
AutocompleteService_1_send$ = (function(msg,t)
{
    ((window.console).log(("SEND: " + msg)));
    Option__Iterate$ChildProcess_ChildProcess_((function(c)
    {
      var ignored0 = ((c.stdin).write(msg));
    }), t.Child);
    return t;
});
AutocompleteService_1_start$ = (function(t)
{
    var child = (child_process.spawn(AutocompleteService_1_location$()));
    return (new T_1__ctor$((new State_1_On()), t.State, {Tag: 1.000000, Value: child}));
});
Autocomplete_1__ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.cd = CompositeDisposable_1_create$();
    __this.service = AutocompleteService_1_send$("outputmode json\n", AutocompleteService_1_start$(AutocompleteService_1_create));
});
Autocomplete_1_activate$ = (function(x,state)
{
    atom.workspace.onDidChangeActivePaneItem((function(ed)
    {
      var ignored0 = AutocompleteHandler_1_parseEditor$(ed, (function(_arg1)
      {
        ;
      }), x.service);
    }));
    return atom.on("FSharp.Atom:Highlight",(function(lst)
    {
      return HighlighterHandler_1_handle$Item_1Item_1(lst);
    }));
});
Autocomplete_1_deactivate$ = (function(x,unitVar1)
{
    return CompositeDisposable_1_dispose$(x.cd);
});
Autocomplete_1_getSuggestion$ = (function(x,options)
{
    var ignored0 = options.editor;
});
CompositeDisposable_1_create$ = (function(unitVar0)
{
    return new CompositeDisposable;;
});
CompositeDisposable_1_dispose$ = (function(cd)
{
    return cd.dispose();;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
Editor_1_getActiveTextEditor$ = (function(unitVar0)
{
    return atom.workspace.getActiveTextEditor();;
});
Editor_1_getCurrentPackagePath$ = (function(unitVar0)
{
    return atom.packages.packageDirPaths[0];;
});
Editor_1_getEditorGrammarName$ = (function(ed)
{
    return ed.getGrammar().name;;
});
Editor_1_getEditorPath$ = (function(ed)
{
    return ed.buffer.file.path;;
});
Editor_1_getEditorText$ = (function(ed)
{
    return ed.getText();;
});
HighlighterHandler_1_get_marked$ = (function()
{
    return Array__Empty$Marker_1Marker_1();
});
HighlighterHandler_1_handle$Item_1Item_1 = (function(lst)
{
    Array__Iterate$Marker_1Marker_1((function(i)
    {
      return i.destroy();;
    }), HighlighterHandler_1_marked);
    HighlighterHandler_1_marked = Array__Empty$Marker_1Marker_1();
    var editor = Editor_1_getActiveTextEditor$();
    var action = (function(item)
    {
      var range = [[item.StartLine, item.StartColumn], [item.EndLine, item.EndColumn]];;
      var marker = editor.markBufferRange(range, {invalidate: 'never' });;
      var _433;
      if ((item.Severity == "Warning")) 
      {
        _433 = "highlight-warning";
      }
      else
      {
        _433 = "highlight-error";
      };
      var cls = _433;
      HighlighterHandler_1_marked = Array__Append$Marker_1Marker_1([marker], HighlighterHandler_1_marked);
      return editor.decorateMarker(marker, { type: 'highlight', "class": cls });;
    });
    for (i = 0, len = lst.length; i < len; i++) {var item = lst[i]; (function(arg00)
    {
      return action(arg00);
    })(item); };
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
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
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
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
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _179;
        return __.factory(_179);
      })(impl, unitVar1);
    })};
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _199;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _199, xs);
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
            var _157;
            return next(_157);
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
State_1_Off = (function()
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Off";
});
State_1_On = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "On";
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
T_1__ctor$ = (function(State,PreviousState,Child)
{
    var __this = this;
    __this.State = State;
    __this.PreviousState = PreviousState;
    __this.Child = Child;
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
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
AutocompleteService_1_create = AutocompleteService_1_get_create$();
HighlighterHandler_1_marked = HighlighterHandler_1_get_marked$();
return [(function(ign)
{
    return (new Autocomplete_1__ctor$());
}), (function(_this)
{
    return (function(p0)
    {
      return Autocomplete_1_getSuggestion$(_this, p0);
    });
}), (function(_this)
{
    return (function(p0)
    {
      return Autocomplete_1_activate$(_this, p0);
    });
}), (function(_this)
{
    return Autocomplete_1_deactivate$(_this);
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

var provider = {
selector: '.source.fsharp',
inclusionPriority: 1,
excludeLowerPriority: true,
getSuggestions: function(p1) {
return _funcs[1](_self)(p1); }
};
module.exports = AutocompleteFS = {
provide: function() {
return provider; },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
deactivate: function() {
  return _funcs[3](_self); },
};