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
mystring = Network.GetWebPageContents("http://hallm.pw")
myvalue = 3 * Math.RandomNumber(5) + 4 - Math.ToRadians(0)

If Math.Remainder(myvalue, 2) = 1 Then
  TextWindow.WriteLine('Is Odd')
ElseIf myvalue < 4
  TextWindow.WriteLine('Is Even and less than 4')
Else
  TextWindow.WriteLine('Is Even')
EndIf

' what would the behavior of this be in SmallBasic?
' is the random number calculated and remembered?
' or does it recalculate each iteration?
For i = 1 To Math.RandomNumber(10) Skip 2
  TextWindow.WriteLine(i)
EndFor

While Math.RandomNumber(2) <> 1
  TextWindow.WriteLine("Not 1 yet")
EndFor

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
fnstack.push('$L2', ['http://hallm.pw']);
Goto Network.GetWebPageContents
$L2:
mystring = retval

tmpstack.push(3)
fnstack.push('$L3', [5]);
Goto Math.RandomNumber
$L3:
scratch = tmpstack.pop() * retval + 4
tmpstack.push(scratch)
fnstack.push('$L4', [0]);
Goto Math.ToRadians
$L4:
myvalue = tmpstack.pop() - retval

fnstack.push('$L5', [myvalue, 2]);
Goto Math.Remainder
$L5:
if (retval == 1) {
  fnstack.push('$L6', ['Is Odd']);
  Goto TextWindow.WriteLine
  $L6:
  Goto $L7 // skip over next sections
}
if (myvalue < 4) {
  fnstack.push('$L8', ['Is Even and less than 4']);
  Goto TextWindow.WriteLine
  $L8:
  Goto $L7
}
fnstack.push('$L9', ['Is Even']);
Goto TextWindow.WriteLine
$L9:
$L7:

i = 1
fnstack.push('$L10', [10]);
Goto Math.RandomNumber
$L10:
_for0$end = retval
$L11:
if ( (2 > 0) ? (i <= _for0$end) : (i >= _for0$end) ) {
  fnstack.push('$L12', [i]);
  Goto TextWindow.WriteLine
  $L12:
  i = i + 2
  Goto $L11
}

$L13:
fnstack.push('$L14', [2]);
Goto Math.RandomNumber
$L14:
if (retval <> 1) {
  fnstack.push('$L15', ['Not 1 yet']);
  Goto TextWindow.WriteLine
  $L15:
  Goto $L13
}

HALT

_Hello:
  label1:
  fnstack.push('$L15', ['Hello']); // params?
  Goto TextWindow.Write
  $L15:
  Goto label2
  // Goto fnstack.pop() < UNREACHABLE CODE

_World:
  label2:
  label3:
  label4:
  fnstack.push('$L16', [' World']);
  Goto TextWindow.Write
  $L16:
  fnstack.push('$L17', []);
  Goto TextWindow.WriteLine
  $L17:
  Goto fnstack.pop()

_Done:
  fnstack.push('$L18', ['Done!']);
  Goto TextWindow.WriteLine
  $L18:
  Goto fnstack.pop()
```


then, the implicit "main" could act as a psuedo-dispatcher for all labels
for the stdlib, could just expose all the labels? i guess?

## WIP: emulated code design ##

```
var tmpstack = [];
var fnstack = [];
var retval = undefined;
function generator(next, val) {
  var scratch = undefined;

  while (1) {
    switch (next) {
      // all the built in apis/stdlib:
      // example of a call that requires blocking-emulation
      case 'program.delay':
        // let the wrapper do the gen style
        // if we can know ahead of time if it's something to block or not
        // otherwise, just always return it
        return program.delay.call(env, fnstack[fnstack.length - 1][1]);
      case 'program.delay$L0':
        next = fnstack.pop()[0];

      // example of returning a value that does not require blocking-emulation
      case 'math.randomnumber':
        retval = math.randomnumber.call(env, fnstack[fnstack.length - 1][1]);
        next = fnstack.pop()[0];
      case 'math.toradians':
        retval = math.toradians.call(env, fnstack[fnstack.length - 1][1]);
        next = fnstack.pop()[0];

      // example of returning a value that does requires blocking-emulation
      // this style could be the default if one style must be kept
      case 'network.getwebpagecontents':
        return network.getwebpagecontents.call(env, fnstack[fnstack.length - 1][1]);
      case 'network.getwebpagecontents$L0':
        retval = val;
        next = fnstack.pop()[0];

      // example of a non-blocking, non-async, non-returning call
      case 'textwindow.write':
        textwindow.write.call(env, fnstack[fnstack.length - 1][1]);
        next = fnstack.pop()[0];
        break;

      case 'textwindow.writeline':
        textwindow.writeline.call(env, fnstack[fnstack.length - 1][1]);
        next = fnstack.pop()[0];
        break;

      // entry into the program
      case '':
        env.fnstack.push(['$L0', []])
        next = '_hello';
        break;
      case '$L0':
        env.fnstack.push(['$L1', []])
        next = '_done';
        break;
      case '$L1':
        fnstack.push('$L2', ['http://hallm.pw']);
        next = 'network.getwebpagecontents';
        break;
      case '$L2:
        mystring.op_assign(retval);
        tmpstack.push(3);
        fnstack.push('$L3', [5]);
        next = 'math.randomnumber';
        break;
      case '$L3:
        // could we detect these can be chained? maybe.
        scratch = tmpstack.pop();
        scratch = scratch.op_mul(retval);
        scratch = scratch.op_add(4);
        tmpstack.push(scratch);
        fnstack.push('$L4', [0]);
        next = 'math.toradians';
        break;
      case '$L4':
        scratch = tmpstack.pop();
        scratch = scratch.op_sub(retval);
        myvalue.op_assign(scratch);
        fnstack.push('$L5', [myvalue, 2]);
        next = 'math.remainder';
        break;
      case '$L5':
        if (retval.op_eq(1)) {
          fnstack.push('$L6', ['Is Odd']);
          next = 'textwindow.writeline';
          break;
        }
        if (myvalue < 4) {
          fnstack.push('$L8', ['Is Even and less than 4']);
          next = 'textwindow.writeline';
          break;
        }
        fnstack.push('$L9', ['Is Even']);
        next = 'textwindow.writeline';
        break;
      case '$L6:
        next = '$L7';
        break;
      case '$L8:
        next = '$L7';
        break;
      case '$L9':
      case '$L7':
        i.op_assign(1)
        fnstack.push('$L10', [10]);
        next = 'math.randomnumber';
        break;
      case '$L10':
        _for0$end = retval
      case '$L11':
        if ( (2 > 0) ? (i <= _for0$end) : (i >= _for0$end) ) {
          fnstack.push('$L12', [i]);
          next = 'textwindow.writeline';
          break;
        }
        // fallthrough here
      case '$L13':
        fnstack.push('$L14', [2]);
        next = 'math.randomnumber'
        break;

      // yeah, gets a bit out of order, in theory itll work
      // the other way is force for and while to have an end label like If/EndIf does
      case '$L12':
        i.op_assign(i.op_add(2));
        next = '$L11';
        break;

      case '$L14':
        if (retval.op_neq(1)) {
          fnstack.push('$L15', ['Not 1 yet']);
          next = 'textwindow.writeline';
          break;
        }
        return null; // HALT
      case '$L15':
        next = '$L13';
        break;


      // the Hello subroutine
      case '_hello':
      case '_label1':
        fnstack.push(['$L15', ['Hello']]);
        next = 'textwindow.write';
        break;
      case '$L15':
        next = '_label2';
        break;

      // the World subroutine
      case '_world':
      case '_label2':
      case '_label3':
      case '_label4':
        fnstack.push(['$L16', [' World']]);
        next = 'textwindow.write';
        break;
      case '$L16':
        fnstack.push(['$L17', []]);
        next = 'textwindow.writeline';
        break;
      case '$L17':
        next = fnstack.pop()[0];
        break;

      // the Done subroutine
      case '_done':
        fnstack.push(['$L18', ['Done!']]);
        next = 'textwindow.writeline';
        break;
      case '$L18':
        next = fnstack.pop()[0];
        break;

      default:
        throw new Error('Unknown case ' + next);
    }
  }
}
function execute() {
  var curlabel = '';
  next();

  function next(val) {
    var nextlabel = generator(curlabel, val);
    if (!nextlabel) {
      done();
    }

    if (isPromise(nextlabel)) {
      curlabel = nextlabel.label;
      nextlabel.then(next);
    } else {
      curlabel = nextlabel;
      setImmediate(next);
    }
  }
}
```
