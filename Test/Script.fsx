module XA =

  let funky x = x + 1
  let foo = 1

module YA =
  let bar = XA.funky

let foobar = YA.bar XA.foo

let t = match foobar with
        | 1 -> 0

let t = System.IO
let a = System.IO.DriveInfo.GetDrives()
