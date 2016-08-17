
var interrupt = (function() {
  var DataUnit = window.stdlib.DataUnit;
  var DATATYPES = window.stdlib.DATATYPES;

  const env = {

  };

  var stdlibApi = window.stdlib.api(env);
var graphicswindow = stdlibApi.graphicswindow;
var implgraphicswindow = window.stdlib.impl.graphicswindow;
env.graphicswindow = graphicswindow;
var turtle = stdlibApi.turtle;
var implturtle = window.stdlib.impl.turtle;
env.turtle = turtle;

  function thread(fn) {
    var tmp = [];
    var fn = fn || [];

    return function execute(next, val) {
      var params = null;
      var scratch = new DataUnit();
      var retval = new DataUnit();

      while(1) {
        switch(next) {
  case "graphicswindow.show":
retval = implgraphicswindow.show.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.show$0";
return retval;
}
case "graphicswindow.show$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "turtle.show":
retval = implturtle.show.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "turtle.show$0";
return retval;
}
case "turtle.show$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "turtle.move":
retval = implturtle.move.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "turtle.move$0";
return retval;
}
case "turtle.move$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;


          case '':
  tmp.push(retval);//PUSHPOP0
fn.push(["$L0", []]);
scratch = graphicswindow.show;
next = scratch.as_string();
break;
case "$L0":
scratch = retval;
retval = tmp.pop();//PUSHPOP0
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP2
fn.push(["$L1", []]);
scratch = turtle.show;
next = scratch.as_string();
break;
case "$L1":
scratch = retval;
retval = tmp.pop();//PUSHPOP2
tmp.push(retval);//PUSHPOP4
fn.push(["$L2", [new DataUnit(100, DATATYPES.DT_NUMBER)]]);
scratch = turtle.move;
next = scratch.as_string();
break;
case "$L2":
scratch = retval;
retval = tmp.pop();//PUSHPOP4
          default:
            return null;
        }
        if (!next) {
          return null;
        }
      }
    }
  }

  var curlabel = '';
  var mainThread = thread();
  function runner(val) {
    var ret = mainThread(curlabel, val);
    if (ret) {
      curlabel = ret.next;
      ret.then(runner);
    }
  }
  runner();

  return function interrupt(fnname) {
    var intlabel = fnname;
    var intThread = thread([null, []]);

    function intrun(val) {
      var ret = intThread(intlabel, val);
      if (ret) {
        intlabel = ret.next;
        ret.then(intrun);
      }
    }

    intrun();
  }
})();

