[<ReflectedDefinition>]
module Atom.FSharp.Control

open FunScript.TypeScript
open FunScript.TypeScript.AtomCore

// --------------------------------------------------------------------------------------
// JavaScript-friendly implementation of some of the useful FSharp.Control types
// --------------------------------------------------------------------------------------

type FunScript.TypeScript.AtomCore.IEmitter with
    /// Add a handler for the specified event forever
    member x.add(name:string, func:unit -> unit) =
        x.on(name, unbox<Function> func) |> ignore
    /// Add a handler for the specified event and return disposable subscription
    member x.subscribe(name:string, func:unit -> unit) =
        x.on(name, unbox<Function> func) 

type FunScript.TypeScript.AtomCore.CommandRegistry with 
    /// Add a handler for the specified command forever
    member x.add(name:string, command:string, func:unit -> unit) =
        x.add(name, command, unbox<Function> func) |> ignore

/// A simple implementation of `IObserver` that calls the specified functions
type Observer<'T>(next, error, completed) = 
    interface System.IObserver<'T> with
        member x.OnCompleted() = completed()
        member x.OnError(e) = error e
        member x.OnNext(v) = next v

type Microsoft.FSharp.Control.Async with
  /// Returns an asynchronous workflow that waits for the first 
  /// occurrence of the specified event & then unsubscribes
  static member AwaitObservable (obs:System.IObservable<'T>) = 
    Async.FromContinuations(fun (cont, econt, ccont) ->
        let disp : ref<option<System.IDisposable>> = ref None
        let onNext v = 
          disp.Value.Value.Dispose()
          cont(v)
        let onError e =
          disp.Value.Value.Dispose()
          econt(e)
        let onComplete () =
          disp.Value.Value.Dispose()
          ccont (unbox (System.Exception("Observable stream ended.")))
        disp := obs.Subscribe(Observer(onNext, onError, onComplete)) |> Some) 

  /// Starts the specified asynchronous computation as Atom's promise
  static member StartAsPromise(computation:Async<'T[]>) = 
    Atom.Promise.create(fun () ->
      async { let! res = computation
              Atom.Promise.resolve(unbox res) } |> Async.StartImmediate)

/// A cell in `Queue<T>`
type private QueueCell<'T> = 
  { Value : 'T 
    mutable Next : option<QueueCell<'T>> }

/// Simple queue implemented as linked list with `Add` 
/// to add things to the end & `TryGet` to remove first item
type private Queue<'T>() = 
    let mutable firstAndLast = None

    member x.Add(it:'T) = 
        let itCell = { Value = it; Next = None }
        match firstAndLast with 
        | None -> firstAndLast <- Some(itCell, itCell)
        | Some(first, last) -> 
            last.Next <- Some itCell
            firstAndLast <- Some(first, itCell)

    member x.TryGet() = 
        match firstAndLast with
        | None -> None
        | Some({ Value = value; Next = None}, _) ->
            firstAndLast <- None
            Some value
        | Some({ Value = value; Next = Some next}, last) ->
            firstAndLast <- Some(next, last)
            Some value

/// Represents a reply channel used by the `PostAndAsyncReply` method of 
/// `MailboxProcessor<'T>` (same idea as standard `AsyncReplyChannel<'T>`)
type ReplyChannel<'T>(f:'T -> unit) =
    member x.Reply(res) = f res

/// A lightweight implementation of F# `MailboxProcessor`. As the standard one,
/// you can start it using `MailboxProcessor.Start(fun inbox -> ...)` and you
/// then call `inbox.Receive` inside the body and `agent.Post` anywhere. 
type MailboxProcessor<'T>(body) =
    let mutable messages = Queue<'T>()
    let mutable continuation = None
    let processEvents () =
        continuation |> Option.iter (fun cont ->
            messages.TryGet() |> Option.iter (fun value ->
              continuation <- None
              cont value ) )

    member x.Start() = 
        body x |> Async.StartImmediate

    static member Start(body) = 
        let mbox = MailboxProcessor<_>(body) 
        mbox.Start()
        mbox

    member x.Receive() = Async.FromContinuations(fun (c, _, _) ->
        if Option.isSome continuation then failwith "Receive can only be called once!"
        continuation <- Some c
        processEvents () )

    member x.PostAndAsyncReply<'R>(f) : Async<'R> = 
        let result = ref None
        let continuation = ref None
        let checkCompletion () = 
            match result.Value, continuation.Value with
            | Some res, Some cont -> cont res
            | _ -> ()
        let reply = 
            ReplyChannel<'R>(fun res ->
                result.Value <- Some res
                checkCompletion () )
        messages.Add(f reply)
        processEvents ()
        Async.FromContinuations(fun (c, _, _) ->
            continuation.Value <- Some c
            checkCompletion ())
      
    member x.Post(msg) =
        messages.Add(msg)
        processEvents ()
