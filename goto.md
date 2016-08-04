Goto theory:

sample program:
```
counter = 5
recurse:
If counter > 0 Then
  TextWindow.WriteLine(counter)
  counter = counter - 1
  Goto recurse
EndIf
TextWindow.WriteLine('Done!')
```

could, in theory, be represented by:

```
var counter;
function $wrapped_main(entrypoint) {
  switch (entrypoint) {
    default:
      counter = 4
    case 'recurse':
      if (counter <= 0) {
        return ['_endif0'];
      }
      counter = counter - 1;
      console.log(counter);
      return ['recurse'];
    case '_endif0':
      console.log('Done!')
      return [null, undefined];
  }
}

function $main() {
  var next = '';
  var ret = [];
  while (next !== null) {
    console.log(next);
    ret = $wrapped_main(next);
    next = ret[0];
  }

  return ret[1];
}
```

the next question is how to represent goto across multiple functions?
are Subs themselves merely goto's withs some sort of fn stack handling?
or is there a "dispatcher" that knows where all labels live
but the problem is, could we really create a return-label for every function call?
for example

```
Hello()
Done()

Sub Hello
  label1:
  TextWindow.Write('Hello')
  Goto label2
EndSub

Sub World
  label2:
  label3:
  label4:
  TextWindow.Write(' World')
  TextWindow.WriteLine()
EndSub

Sub Done
  TextWindow.WriteLine('Done!')
EndSub
```

could be (partially) rewritten like

```
fnstack.push('$L0', []);
Goto _Hello
$L0:
fnstack.push('$L1', []);
Goto _Done
$L1:

_Hello:
  label1:
  fnstack.push('$L2', ['Hello']); // params?
  Goto TextWindow.Write
  $L2:
  Goto label2
  // Goto fnstack.pop() < UNREACHABLE CODE

_World:
  label2:
  label3:
  label4:
  fnstack.push('$L3', [' World']);
  Goto TextWindow.Write
  $L3:
  fnstack.push('$L4', []);
  Goto TextWindow.WriteLine
  $L4:
  Goto fnstack.pop()

_Done:
  fnstack.push('$L5', ['Done!']);
  Goto TextWindow.WriteLine
  $L5:
  Goto fnstack.pop()
```


then, the implicit "main" could act as a psuedo-dispatcher for all labels
for the stdlib, could just expose all the labels? i guess?

```
switch (next) {
  // all the built in apis/stdlib:
  case 'textwindow.write':
    var stackinfo = fnstack[fnstack.length - 1];
    (yield* textwindow.write.op_call(env, stackinfo[1]));
    return fnstack.pop()[0];
  case 'textwindow.writeline':
    var stackinfo = fnstack[fnstack.length - 1];
    (yield* textwindow.writeline.op_call(env, stackinfo[1]));
    return fnstack.pop()[0];

  // entry into the program
  case '':
    env.fnstack.push(['$L0', []])
    return '_hello'
  case '$L0':
    env.fnstack.push(['$L1', []])
    return '_done'
  case '$L1':
    return '!end' // program is complete

  // the Hello subroutine
  case '_hello':
  case '_label1':
    fnstack.push(['$L2', ['Hello']]);
    return 'textwindow.write';
  case '$L2':
    return '_label2';

  // the World subroutine
  case '_world':
  case '_label2':
  case '_label3':
  case '_label4':
    fnstack.push(['$L3', [' World']]);
    return 'textwindow.write';
  case '$L3':
    fnstack.push(['$L4', []]);
    return 'textwindow.writeline';
  case '$L4':
    return fnstack.pop()[0];

  // the Done subroutine
  case '_done':
    fnstack.push(['$L5', ['Done!']]);
    return 'textwindow.writeline';
  case '$L5':
    return fnstack.pop()[0];
}
```
