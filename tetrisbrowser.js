
var interrupt = (function() {
  var DataUnit = window.stdlib.DataUnit;
  var DATATYPES = window.stdlib.DATATYPES;

  const env = {
_handlekey: new DataUnit("_handlekey", DATATYPES.DT_FN),
_boxes: new DataUnit(),
_bwidth: new DataUnit(),
_xoffset: new DataUnit(),
_yoffset: new DataUnit(),
_cwidth: new DataUnit(),
_cheight: new DataUnit(),
_startdelay: new DataUnit(),
_enddelay: new DataUnit(),
_preview_xpos: new DataUnit(),
_preview_ypos: new DataUnit(),
_setuptemplates: new DataUnit("_setuptemplates", DATATYPES.DT_FN),
_setupcanvas: new DataUnit("_setupcanvas", DATATYPES.DT_FN),
_mainloop: new DataUnit("_mainloop", DATATYPES.DT_FN),
_template: new DataUnit(),
_createpiece: new DataUnit("_createpiece", DATATYPES.DT_FN),
_nextpiece: new DataUnit(),
_h: new DataUnit(),
_end: new DataUnit(),
_sessiondelay: new DataUnit(),
_delay: new DataUnit(),
_thispiece: new DataUnit(),
_drawpreviewpiece: new DataUnit("_drawpreviewpiece", DATATYPES.DT_FN),
_ypos: new DataUnit(),
_done: new DataUnit(),
_xpos: new DataUnit(),
_checkstop: new DataUnit("_checkstop", DATATYPES.DT_FN),
_movepiece: new DataUnit("_movepiece", DATATYPES.DT_FN),
_yposdelta: new DataUnit(),
_delayindex: new DataUnit(),
_movedirection: new DataUnit(),
_validatemove: new DataUnit("_validatemove", DATATYPES.DT_FN),
_invalidmove: new DataUnit(),
_basetemplate: new DataUnit(),
_rotation: new DataUnit(),
_copypiece: new DataUnit("_copypiece", DATATYPES.DT_FN),
_xposbk: new DataUnit(),
_xoffsetbk: new DataUnit(),
_yoffsetbk: new DataUnit(),
_l: new DataUnit(),
_i: new DataUnit(),
_v: new DataUnit(),
_x: new DataUnit(),
_y: new DataUnit(),
_hcount: new DataUnit(),
_s: new DataUnit(),
_score: new DataUnit(),
_printscore: new DataUnit("_printscore", DATATYPES.DT_FN),
_deletelines: new DataUnit("_deletelines", DATATYPES.DT_FN),
_linescleared: new DataUnit(),
_piece: new DataUnit(),
_x1: new DataUnit(),
_y1: new DataUnit()
  };

  var stdlibApi = window.stdlib.api(env);
var graphicswindow = stdlibApi.graphicswindow;
var implgraphicswindow = window.stdlib.impl.graphicswindow;
env.graphicswindow = graphicswindow;
var text = stdlibApi.text;
var impltext = window.stdlib.impl.text;
env.text = text;
var math = stdlibApi.math;
var implmath = window.stdlib.impl.math;
env.math = math;
var program = stdlibApi.program;
var implprogram = window.stdlib.impl.program;
env.program = program;
var array = stdlibApi.array;
var implarray = window.stdlib.impl.array;
env.array = array;
var shapes = stdlibApi.shapes;
var implshapes = window.stdlib.impl.shapes;
env.shapes = shapes;

  function thread(fn) {
    var tmp = [];
    var fn = fn || [];

    return function execute(next, val) {
      var params = null;
      var scratch = new DataUnit();
      var retval = new DataUnit();

      while(1) {
        switch(next) {
  case "graphicswindow.getcolorfromrgb":
retval = implgraphicswindow.getcolorfromrgb.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.getcolorfromrgb$0";
return retval;
}
case "graphicswindow.getcolorfromrgb$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "graphicswindow.clear":
retval = implgraphicswindow.clear.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.clear$0";
return retval;
}
case "graphicswindow.clear$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

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

case "graphicswindow.showmessage":
retval = implgraphicswindow.showmessage.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.showmessage$0";
return retval;
}
case "graphicswindow.showmessage$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "text.append":
retval = impltext.append.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "text.append$0";
return retval;
}
case "text.append$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "math.getrandomnumber":
retval = implmath.getrandomnumber.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "math.getrandomnumber$0";
return retval;
}
case "math.getrandomnumber$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "program.delay":
retval = implprogram.delay.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "program.delay$0";
return retval;
}
case "program.delay$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "program.end":
retval = implprogram.end.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "program.end$0";
return retval;
}
case "program.end$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "array.getvalue":
retval = implarray.getvalue.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "array.getvalue$0";
return retval;
}
case "array.getvalue$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "array.setvalue":
retval = implarray.setvalue.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "array.setvalue$0";
return retval;
}
case "array.setvalue$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "math.abs":
retval = implmath.abs.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "math.abs$0";
return retval;
}
case "math.abs$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "math.remainder":
retval = implmath.remainder.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "math.remainder$0";
return retval;
}
case "math.remainder$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "math.floor":
retval = implmath.floor.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "math.floor$0";
return retval;
}
case "math.floor$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "shapes.addrectangle":
retval = implshapes.addrectangle.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "shapes.addrectangle$0";
return retval;
}
case "shapes.addrectangle$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "shapes.move":
retval = implshapes.move.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "shapes.move$0";
return retval;
}
case "shapes.move$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "shapes.remove":
retval = implshapes.remove.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "shapes.remove$0";
return retval;
}
case "shapes.remove$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "shapes.getleft":
retval = implshapes.getleft.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "shapes.getleft$0";
return retval;
}
case "shapes.getleft$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "shapes.gettop":
retval = implshapes.gettop.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "shapes.gettop$0";
return retval;
}
case "shapes.gettop$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "math.round":
retval = implmath.round.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "math.round$0";
return retval;
}
case "math.round$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "graphicswindow.fillrectangle":
retval = implgraphicswindow.fillrectangle.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.fillrectangle$0";
return retval;
}
case "graphicswindow.fillrectangle$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "graphicswindow.drawrectangle":
retval = implgraphicswindow.drawrectangle.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.drawrectangle$0";
return retval;
}
case "graphicswindow.drawrectangle$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "graphicswindow.drawline":
retval = implgraphicswindow.drawline.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.drawline$0";
return retval;
}
case "graphicswindow.drawline$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "graphicswindow.drawtext":
retval = implgraphicswindow.drawtext.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "graphicswindow.drawtext$0";
return retval;
}
case "graphicswindow.drawtext$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "text.getsubtext":
retval = impltext.getsubtext.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "text.getsubtext$0";
return retval;
}
case "text.getsubtext$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;

case "text.getlength":
retval = impltext.getlength.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "text.getlength$0";
return retval;
}
case "text.getlength$0":
retval = val || retval;
val = undefined;
next = fn.pop()[0];
break;


          case '':
  scratch = graphicswindow.keydown.op_assign(env._handlekey);
tmp.push(graphicswindow.backgroundcolor);
fn.push(["$L0", [new DataUnit(253, DATATYPES.DT_NUMBER), new DataUnit(252, DATATYPES.DT_NUMBER), new DataUnit(251, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.getcolorfromrgb;
next = scratch.as_string();
break;
case "$L0":
scratch = tmp.pop().op_assign(retval);
case "$L1":
scratch = new DataUnit("True", DATATYPES.DT_STRING);
if (scratch.as_bool()) {
next = "$L2";
} else {
next = "$L3";
}
break;
case "$L2":
env._boxes.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
env._bwidth.op_assign(new DataUnit(25, DATATYPES.DT_NUMBER));
env._xoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
env._yoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
env._cwidth.op_assign(new DataUnit(10, DATATYPES.DT_NUMBER));
env._cheight.op_assign(new DataUnit(20, DATATYPES.DT_NUMBER));
env._startdelay.op_assign(new DataUnit(800, DATATYPES.DT_NUMBER));
env._enddelay.op_assign(new DataUnit(175, DATATYPES.DT_NUMBER));
env._preview_xpos.op_assign(new DataUnit(13, DATATYPES.DT_NUMBER));
scratch = env._preview_ypos.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP2
fn.push(["$L4", []]);
scratch = graphicswindow.clear;
next = scratch.as_string();
break;
case "$L4":
scratch = retval;
retval = tmp.pop();//PUSHPOP2
graphicswindow.title.op_assign(new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING));
graphicswindow.height.op_assign(new DataUnit(580, DATATYPES.DT_NUMBER));
scratch = graphicswindow.width.op_assign(new DataUnit(700, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP4
fn.push(["$L5", []]);
scratch = graphicswindow.show;
next = scratch.as_string();
break;
case "$L5":
scratch = retval;
retval = tmp.pop();//PUSHPOP4
tmp.push(retval);//PUSHPOP6
fn.push(["$L6", []]);
scratch = env._setuptemplates;
next = scratch.as_string();
break;
case "$L6":
scratch = retval;
retval = tmp.pop();//PUSHPOP6
tmp.push(retval);//PUSHPOP8
fn.push(["$L7", []]);
scratch = env._setupcanvas;
next = scratch.as_string();
break;
case "$L7":
scratch = retval;
retval = tmp.pop();//PUSHPOP8
tmp.push(retval);//PUSHPOP10
fn.push(["$L8", []]);
scratch = env._mainloop;
next = scratch.as_string();
break;
case "$L8":
scratch = retval;
retval = tmp.pop();//PUSHPOP10
tmp.push(retval);//PUSHPOP12
fn.push(["$L9", [new DataUnit("Game Over", DATATYPES.DT_STRING), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.showmessage;
next = scratch.as_string();
break;
case "$L9":
scratch = retval;
retval = tmp.pop();//PUSHPOP12
next = "$L1";
break;
case "$L3":
next = "$L10";
break;
case "_mainloop":
tmp.push(env._template);
tmp.push(params);//PUSHPOP17
params = [];
params.push(new DataUnit("template", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP14
fn.push(["$L11", [new DataUnit(7, DATATYPES.DT_NUMBER)]]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L11":
scratch = retval;
retval = tmp.pop();//PUSHPOP14
params.push(scratch);
fn.push(["$L12", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L12":
params = tmp.pop();//PUSHPOP17
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP18
fn.push(["$L13", []]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L13":
scratch = retval;
retval = tmp.pop();//PUSHPOP18
env._nextpiece.op_assign(env._h);
env._end.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._sessiondelay.op_assign(env._startdelay);
case "$L14":
scratch = env._end.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L15";
} else {
next = "$L16";
}
break;
case "$L15":
scratch = env._sessiondelay.op_gt(env._enddelay);
if (scratch.as_bool()) {
next = "$L17";
} else {
next = "$L18";
}
break;
case "$L17":
tmp.push(env._sessiondelay);
retval = env._sessiondelay.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L18";
break;
case "$L18":
env._delay.op_assign(env._sessiondelay);
scratch = env._thispiece.op_assign(env._nextpiece);
tmp.push(env._template);
tmp.push(params);//PUSHPOP23
params = [];
params.push(new DataUnit("template", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP20
fn.push(["$L19", [new DataUnit(7, DATATYPES.DT_NUMBER)]]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L19":
scratch = retval;
retval = tmp.pop();//PUSHPOP20
params.push(scratch);
fn.push(["$L20", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L20":
params = tmp.pop();//PUSHPOP23
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP24
fn.push(["$L21", []]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L21":
scratch = retval;
retval = tmp.pop();//PUSHPOP24
scratch = env._nextpiece.op_assign(env._h);
tmp.push(retval);//PUSHPOP26
fn.push(["$L22", []]);
scratch = env._drawpreviewpiece;
next = scratch.as_string();
break;
case "$L22":
scratch = retval;
retval = tmp.pop();//PUSHPOP26
env._h.op_assign(env._thispiece);
env._ypos.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._xpos.op_assign(new DataUnit(3, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP28
fn.push(["$L23", []]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L23":
scratch = retval;
retval = tmp.pop();//PUSHPOP28
scratch = env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L24";
} else {
next = "$L25";
}
break;
case "$L24":
tmp.push(env._ypos);
retval = env._ypos.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP30
fn.push(["$L26", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L26":
scratch = retval;
retval = tmp.pop();//PUSHPOP30
scratch = env._end.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
next = "$L25";
break;
case "$L25":
scratch = env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L27":
tmp.push(env._done.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER)));
retval = env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L28";
} else {
next = "$L29";
}
break;
case "$L28":
tmp.push(retval);//PUSHPOP32
fn.push(["$L30", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L30":
scratch = retval;
retval = tmp.pop();//PUSHPOP32
scratch = env._delayindex.op_assign(env._delay);
case "$L31":
tmp.push(env._delayindex.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER)));
retval = env._delay.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L32";
} else {
next = "$L33";
}
break;
case "$L32":
tmp.push(retval);//PUSHPOP34
fn.push(["$L34", [new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L34":
scratch = retval;
retval = tmp.pop();//PUSHPOP34
tmp.push(env._delayindex);
retval = env._delayindex.op_sub(new DataUnit(10, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L31";
break;
case "$L33":
scratch = env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L35";
} else {
next = "$L37";
}
break;
case "$L35":
tmp.push(env._yposdelta);
retval = env._yposdelta.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L36";
break;
case "$L37":
tmp.push(env._ypos);
retval = env._ypos.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L36";
break;
case "$L36":
tmp.push(retval);//PUSHPOP36
fn.push(["$L38", []]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L38":
scratch = retval;
retval = tmp.pop();//PUSHPOP36
next = "$L27";
break;
case "$L29":
next = "$L14";
break;
case "$L16":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L10":
next = "$L39";
break;
case "_handlekey":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Escape", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L40";
} else {
next = "$L41";
}
break;
case "$L40":
tmp.push(retval);//PUSHPOP38
fn.push(["$L42", []]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L42":
scratch = retval;
retval = tmp.pop();//PUSHPOP38
next = "$L41";
break;
case "$L41":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Left", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L43";
} else {
next = "$L44";
}
break;
case "$L43":
scratch = env._movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER).op_neg());
tmp.push(retval);//PUSHPOP40
fn.push(["$L45", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L45":
scratch = retval;
retval = tmp.pop();//PUSHPOP40
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L46";
} else {
next = "$L47";
}
break;
case "$L46":
tmp.push(env._xpos);
retval = env._xpos.op_add(env._movedirection);
scratch = tmp.pop().op_assign(retval);
next = "$L47";
break;
case "$L47":
tmp.push(retval);//PUSHPOP42
fn.push(["$L48", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L48":
scratch = retval;
retval = tmp.pop();//PUSHPOP42
next = "$L44";
break;
case "$L44":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Right", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L49";
} else {
next = "$L50";
}
break;
case "$L49":
scratch = env._movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP44
fn.push(["$L51", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L51":
scratch = retval;
retval = tmp.pop();//PUSHPOP44
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L52";
} else {
next = "$L53";
}
break;
case "$L52":
tmp.push(env._xpos);
retval = env._xpos.op_add(env._movedirection);
scratch = tmp.pop().op_assign(retval);
next = "$L53";
break;
case "$L53":
tmp.push(retval);//PUSHPOP46
fn.push(["$L54", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L54":
scratch = retval;
retval = tmp.pop();//PUSHPOP46
next = "$L50";
break;
case "$L50":
tmp.push(graphicswindow.lastkey.op_eq(new DataUnit("Down", DATATYPES.DT_STRING)));
retval = graphicswindow.lastkey.op_eq(new DataUnit("Space", DATATYPES.DT_STRING));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L55";
} else {
next = "$L56";
}
break;
case "$L55":
scratch = env._delay.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
next = "$L56";
break;
case "$L56":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Up", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L57";
} else {
next = "$L58";
}
break;
case "$L57":
tmp.push(env._basetemplate);
fn.push(["$L59", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L59":
tmp.pop().op_assign(retval);
env._template.op_assign(new DataUnit("temptemplate", DATATYPES.DT_STRING));
scratch = env._rotation.op_assign(new DataUnit("CW", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP50
fn.push(["$L60", []]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L60":
scratch = retval;
retval = tmp.pop();//PUSHPOP50
tmp.push(retval);//PUSHPOP52
fn.push(["$L61", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L61":
scratch = retval;
retval = tmp.pop();//PUSHPOP52
scratch = env._movedirection.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP54
fn.push(["$L62", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L62":
scratch = retval;
retval = tmp.pop();//PUSHPOP54
env._xposbk.op_assign(env._xpos);
scratch = env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L63":
tmp.push(env._yposdelta.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER)));
fn.push(["$L66", [env._xposbk.op_sub(env._xpos)]]);
scratch = math.abs;
next = scratch.as_string();
break;
case "$L66":
retval = retval.op_lt(new DataUnit(3, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L64";
} else {
next = "$L65";
}
break;
case "$L64":
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L67";
} else {
next = "$L69";
}
break;
case "$L67":
env._basetemplate.op_assign(env._template);
scratch = env._template.op_assign(new DataUnit("rotatedtemplate", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP58
fn.push(["$L70", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L70":
scratch = retval;
retval = tmp.pop();//PUSHPOP58
scratch = env._rotation.op_assign(new DataUnit("COPY", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP60
fn.push(["$L71", []]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L71":
scratch = retval;
retval = tmp.pop();//PUSHPOP60
scratch = env._yposdelta.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP62
fn.push(["$L72", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L72":
scratch = retval;
retval = tmp.pop();//PUSHPOP62
next = "$L68";
break;
case "$L69":
scratch = env._invalidmove.op_eq(new DataUnit(2, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L73";
} else {
next = "$L74";
}
break;
case "$L73":
scratch = env._xpos.op_assign(new DataUnit(99, DATATYPES.DT_NUMBER));
next = "$L68";
break;
case "$L74":
tmp.push(env._xpos);
retval = env._xpos.op_sub(env._invalidmove);
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP64
fn.push(["$L75", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L75":
scratch = retval;
retval = tmp.pop();//PUSHPOP64
next = "$L68";
break;
case "$L68":
next = "$L63";
break;
case "$L65":
scratch = env._invalidmove.op_neq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L76";
} else {
next = "$L77";
}
break;
case "$L76":
scratch = env._xpos.op_assign(env._xposbk);
tmp.push(retval);//PUSHPOP66
fn.push(["$L78", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._basetemplate]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L78":
scratch = retval;
retval = tmp.pop();//PUSHPOP66
scratch = env._template.op_assign(new DataUnit("", DATATYPES.DT_STRING));
next = "$L77";
break;
case "$L77":
next = "$L58";
break;
case "$L58":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L39":
next = "$L79";
break;
case "_drawpreviewpiece":
env._xpos.op_assign(env._preview_xpos);
env._ypos.op_assign(env._preview_ypos);
env._h.op_assign(env._nextpiece);
env._xoffsetbk.op_assign(env._xoffset);
scratch = env._yoffsetbk.op_assign(env._yoffset);
tmp.push(env._xoffset);
tmp.push(env._xoffset);
tmp.push(params);//PUSHPOP71
params = [];
scratch = tmp.push(retval);//PUSHPOP68
fn.push(["$L80", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L80":
scratch = retval;
retval = tmp.pop();//PUSHPOP68
params.push(scratch);
params.push(new DataUnit("pviewx", DATATYPES.DT_STRING));
fn.push(["$L81", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L81":
params = tmp.pop();//PUSHPOP71
retval = tmp.pop().op_add(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(env._yoffset);
tmp.push(env._yoffset);
tmp.push(params);//PUSHPOP75
params = [];
scratch = tmp.push(retval);//PUSHPOP72
fn.push(["$L82", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L82":
scratch = retval;
retval = tmp.pop();//PUSHPOP72
params.push(scratch);
params.push(new DataUnit("pviewy", DATATYPES.DT_STRING));
fn.push(["$L83", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L83":
params = tmp.pop();//PUSHPOP75
retval = tmp.pop().op_add(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP76
fn.push(["$L84", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L84":
scratch = retval;
retval = tmp.pop();//PUSHPOP76
env._xoffset.op_assign(env._xoffsetbk);
scratch = env._yoffset.op_assign(env._yoffsetbk);
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L79":
next = "$L85";
break;
case "_copypiece":
tmp.push(env._l);
fn.push(["$L86", [env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L86":
tmp.pop().op_assign(retval);
scratch = env._rotation.op_eq(new DataUnit("CW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L87";
} else {
next = "$L89";
}
break;
case "$L87":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L90":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L91";
} else {
next = "$L92";
}
break;
case "$L91":
tmp.push(env._v);
fn.push(["$L93", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L93":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L94", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L94":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
tmp.push(env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)));
fn.push(["$L95", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L95":
retval = tmp.pop().op_sub(retval);
scratch = tmp.pop().op_assign(retval);
fn.push(["$L96", [env._template, env._i, env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER)).op_add(env._y)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L96":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L90";
break;
case "$L92":
next = "$L88";
break;
case "$L89":
scratch = env._rotation.op_eq(new DataUnit("CCW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L97";
} else {
next = "$L98";
}
break;
case "$L97":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L99":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L100";
} else {
next = "$L101";
}
break;
case "$L100":
tmp.push(env._v);
fn.push(["$L102", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L102":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
tmp.push(env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)));
fn.push(["$L103", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L103":
retval = tmp.pop().op_sub(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L104", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L104":
scratch = tmp.pop().op_assign(retval);
fn.push(["$L105", [env._template, env._i, env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER)).op_add(env._y)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L105":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L99";
break;
case "$L101":
next = "$L88";
break;
case "$L98":
scratch = env._rotation.op_eq(new DataUnit("COPY", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L106";
} else {
next = "$L107";
}
break;
case "$L106":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L108":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L109";
} else {
next = "$L110";
}
break;
case "$L109":
tmp.push(params);//PUSHPOP99
params = [];
params.push(env._template);
params.push(env._i);
scratch = tmp.push(retval);//PUSHPOP96
fn.push(["$L111", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L111":
scratch = retval;
retval = tmp.pop();//PUSHPOP96
params.push(scratch);
fn.push(["$L112", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L112":
params = tmp.pop();//PUSHPOP99
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L108";
break;
case "$L110":
next = "$L88";
break;
case "$L107":
tmp.push(retval);//PUSHPOP100
fn.push(["$L113", [new DataUnit("invalid parameter", DATATYPES.DT_STRING), new DataUnit("Error", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.showmessage;
next = scratch.as_string();
break;
case "$L113":
scratch = retval;
retval = tmp.pop();//PUSHPOP100
tmp.push(retval);//PUSHPOP102
fn.push(["$L114", []]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L114":
scratch = retval;
retval = tmp.pop();//PUSHPOP102
next = "$L88";
break;
case "$L88":
tmp.push(retval);//PUSHPOP106
tmp.push(params);//PUSHPOP107
params = [];
params.push(env._template);
params.push(new DataUnit("color", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP104
fn.push(["$L115", [env._basetemplate, new DataUnit("color", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L115":
scratch = retval;
retval = tmp.pop();//PUSHPOP104
params.push(scratch);
fn.push(["$L116", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L116":
params = tmp.pop();//PUSHPOP107
scratch = retval;
retval = tmp.pop();//PUSHPOP106
tmp.push(retval);//PUSHPOP110
tmp.push(params);//PUSHPOP111
params = [];
params.push(env._template);
params.push(new DataUnit("dim", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP108
fn.push(["$L117", [env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L117":
scratch = retval;
retval = tmp.pop();//PUSHPOP108
params.push(scratch);
fn.push(["$L118", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L118":
params = tmp.pop();//PUSHPOP111
scratch = retval;
retval = tmp.pop();//PUSHPOP110
tmp.push(retval);//PUSHPOP114
tmp.push(params);//PUSHPOP115
params = [];
params.push(env._template);
params.push(new DataUnit("pviewx", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP112
fn.push(["$L119", [env._basetemplate, new DataUnit("pviewx", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L119":
scratch = retval;
retval = tmp.pop();//PUSHPOP112
params.push(scratch);
fn.push(["$L120", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L120":
params = tmp.pop();//PUSHPOP115
scratch = retval;
retval = tmp.pop();//PUSHPOP114
tmp.push(params);//PUSHPOP119
params = [];
params.push(env._template);
params.push(new DataUnit("pviewy", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP116
fn.push(["$L121", [env._basetemplate, new DataUnit("pviewy", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L121":
scratch = retval;
retval = tmp.pop();//PUSHPOP116
params.push(scratch);
fn.push(["$L122", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L122":
params = tmp.pop();//PUSHPOP119
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L85":
next = "$L123";
break;
case "_createpiece":
tmp.push(env._hcount);
retval = env._hcount.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(env._h);
fn.push(["$L124", [new DataUnit("piece", DATATYPES.DT_STRING), env._hcount]]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L124":
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP122
fn.push(["$L125", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L125":
scratch = retval;
retval = tmp.pop();//PUSHPOP122
graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(graphicswindow.brushcolor);
fn.push(["$L126", [env._template, new DataUnit("color", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L126":
scratch = tmp.pop().op_assign(retval);
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L127":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L128";
} else {
next = "$L129";
}
break;
case "$L128":
tmp.push(env._s);
fn.push(["$L130", [env._bwidth, env._bwidth]]);
scratch = shapes.addrectangle;
next = scratch.as_string();
break;
case "$L130":
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP128
fn.push(["$L131", [env._s, env._bwidth.op_neg(), env._bwidth.op_neg()]]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L131":
scratch = retval;
retval = tmp.pop();//PUSHPOP128
fn.push(["$L132", [env._h, env._i, env._s]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L132":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L127";
break;
case "$L129":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L123":
next = "$L133";
break;
case "_movepiece":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L134":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L135";
} else {
next = "$L136";
}
break;
case "$L135":
tmp.push(env._v);
tmp.push(params);//PUSHPOP135
params = [];
scratch = tmp.push(retval);//PUSHPOP132
fn.push(["$L137", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L137":
scratch = retval;
retval = tmp.pop();//PUSHPOP132
params.push(scratch);
params.push(env._i);
fn.push(["$L138", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L138":
params = tmp.pop();//PUSHPOP135
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L139", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L139":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L140", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L140":
scratch = tmp.pop().op_assign(retval);
tmp.push(params);//PUSHPOP143
params = [];
scratch = tmp.push(retval);//PUSHPOP140
fn.push(["$L141", [env._h, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L141":
scratch = retval;
retval = tmp.pop();//PUSHPOP140
params.push(scratch);
tmp.push(env._xoffset);
tmp.push(tmp.pop().op_add(env._xpos.op_mul(env._bwidth)));
params.push(tmp.pop().op_add(env._x.op_mul(env._bwidth)));
tmp.push(env._yoffset);
tmp.push(tmp.pop().op_add(env._ypos.op_mul(env._bwidth)));
retval = env._y.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L142", params]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L142":
params = tmp.pop();//PUSHPOP143
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L134";
break;
case "$L136":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L133":
next = "$L143";
break;
case "_validatemove":
env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._invalidmove.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L144":
scratch = env._i.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L145";
} else {
next = "$L146";
}
break;
case "$L145":
tmp.push(env._v);
tmp.push(params);//PUSHPOP147
params = [];
scratch = tmp.push(retval);//PUSHPOP144
fn.push(["$L147", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L147":
scratch = retval;
retval = tmp.pop();//PUSHPOP144
params.push(scratch);
params.push(env._i);
fn.push(["$L148", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L148":
params = tmp.pop();//PUSHPOP147
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L149", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L149":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L150", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L150":
tmp.pop().op_assign(retval);
scratch = env._x.op_add(env._xpos).op_add(env._movedirection).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L151";
} else {
next = "$L152";
}
break;
case "$L151":
env._invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER).op_neg());
scratch = env._i.op_assign(env._boxes);
next = "$L152";
break;
case "$L152":
scratch = env._x.op_add(env._xpos).op_add(env._movedirection).op_gte(env._cwidth);
if (scratch.as_bool()) {
next = "$L153";
} else {
next = "$L154";
}
break;
case "$L153":
env._invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L154";
break;
case "$L154":
scratch = tmp.push(retval);//PUSHPOP152
tmp.push(params);//PUSHPOP153
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x.op_add(env._xpos).op_add(env._movedirection));
retval = env._y.op_add(env._ypos).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L155", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L155":
params = tmp.pop();//PUSHPOP153
scratch = retval;
retval = tmp.pop();//PUSHPOP152
scratch = scratch.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L156";
} else {
next = "$L157";
}
break;
case "$L156":
env._invalidmove.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L157";
break;
case "$L157":
tmp.push(env._i);
retval = env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L144";
break;
case "$L146":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L143":
next = "$L158";
break;
case "_checkstop":
env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L159":
scratch = env._i.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L160";
} else {
next = "$L161";
}
break;
case "$L160":
tmp.push(env._v);
tmp.push(params);//PUSHPOP157
params = [];
scratch = tmp.push(retval);//PUSHPOP154
fn.push(["$L162", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L162":
scratch = retval;
retval = tmp.pop();//PUSHPOP154
params.push(scratch);
params.push(env._i);
fn.push(["$L163", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L163":
params = tmp.pop();//PUSHPOP157
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L164", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L164":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L165", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L165":
tmp.pop().op_assign(retval);
tmp.push(env._y.op_add(env._ypos).op_gt(env._cheight));
tmp.push(params);//PUSHPOP163
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x.op_add(env._xpos));
retval = env._y.op_add(env._ypos).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L166", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L166":
params = tmp.pop();//PUSHPOP163
retval = retval.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L167";
} else {
next = "$L168";
}
break;
case "$L167":
env._done.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L168";
break;
case "$L168":
tmp.push(env._i);
retval = env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L159";
break;
case "$L161":
scratch = env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L169";
} else {
next = "$L170";
}
break;
case "$L169":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L171":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L172";
} else {
next = "$L173";
}
break;
case "$L172":
tmp.push(env._v);
tmp.push(params);//PUSHPOP167
params = [];
scratch = tmp.push(retval);//PUSHPOP164
fn.push(["$L174", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L174":
scratch = retval;
retval = tmp.pop();//PUSHPOP164
params.push(scratch);
params.push(env._i);
fn.push(["$L175", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L175":
params = tmp.pop();//PUSHPOP167
scratch = tmp.pop().op_assign(retval);
tmp.push(params);//PUSHPOP175
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP168
fn.push(["$L176", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L176":
scratch = retval;
retval = tmp.pop();//PUSHPOP168
tmp.push(scratch.op_add(env._xpos));
fn.push(["$L177", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L177":
retval = retval.op_add(env._ypos).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
scratch = tmp.push(retval);//PUSHPOP172
fn.push(["$L178", [env._h, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L178":
scratch = retval;
retval = tmp.pop();//PUSHPOP172
params.push(scratch);
fn.push(["$L179", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L179":
params = tmp.pop();//PUSHPOP175
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L171";
break;
case "$L173":
tmp.push(env._score);
retval = env._score.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP176
fn.push(["$L180", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L180":
scratch = retval;
retval = tmp.pop();//PUSHPOP176
tmp.push(retval);//PUSHPOP178
fn.push(["$L181", []]);
scratch = env._deletelines;
next = scratch.as_string();
break;
case "$L181":
scratch = retval;
retval = tmp.pop();//PUSHPOP178
next = "$L170";
break;
case "$L170":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L158":
next = "$L182";
break;
case "_deletelines":
env._linescleared.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
retval = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._y;
scratch.op_assign(retval);
case "$L183":
tmp.push(env._y);
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L184";
} else {
next = "$L185";
}
break;
case "$L184":
scratch = env._x.op_assign(env._cwidth);
case "$L186":
scratch = env._x.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L187";
} else {
next = "$L188";
}
break;
case "$L187":
scratch = env._x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L189":
scratch = env._x.op_lt(env._cwidth);
if (scratch.as_bool()) {
next = "$L190";
} else {
next = "$L191";
}
break;
case "$L190":
tmp.push(env._piece);
tmp.push(params);//PUSHPOP181
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L192", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L192":
params = tmp.pop();//PUSHPOP181
tmp.pop().op_assign(retval);
scratch = env._piece.op_eq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L193";
} else {
next = "$L194";
}
break;
case "$L193":
scratch = env._x.op_assign(env._cwidth);
next = "$L194";
break;
case "$L194":
tmp.push(env._x);
retval = env._x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L189";
break;
case "$L191":
scratch = env._x.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L195";
} else {
next = "$L196";
}
break;
case "$L195":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(retval);
case "$L197":
tmp.push(env._x1);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L198";
} else {
next = "$L199";
}
break;
case "$L198":
tmp.push(params);//PUSHPOP185
params = [];
scratch = tmp.push(retval);//PUSHPOP182
tmp.push(params);//PUSHPOP183
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L200", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L200":
params = tmp.pop();//PUSHPOP183
scratch = retval;
retval = tmp.pop();//PUSHPOP182
params.push(scratch);
fn.push(["$L201", params]);
scratch = shapes.remove;
next = scratch.as_string();
break;
case "$L201":
params = tmp.pop();//PUSHPOP185
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L197";
break;
case "$L199":
tmp.push(env._linescleared);
scratch = tmp.pop().op_assign(env._linescleared.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)));
retval = env._y;
scratch = env._y1;
scratch.op_assign(retval);
case "$L202":
tmp.push(env._y1);
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._y;
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L203";
} else {
next = "$L204";
}
break;
case "$L203":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(retval);
case "$L205":
tmp.push(env._x1);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L206";
} else {
next = "$L207";
}
break;
case "$L206":
tmp.push(env._piece);
tmp.push(params);//PUSHPOP187
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y1.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L208", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L208":
params = tmp.pop();//PUSHPOP187
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP188
tmp.push(params);//PUSHPOP189
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y1.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
params.push(env._piece);
fn.push(["$L209", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L209":
params = tmp.pop();//PUSHPOP189
scratch = retval;
retval = tmp.pop();//PUSHPOP188
tmp.push(params);//PUSHPOP195
params = [];
params.push(env._piece);
scratch = tmp.push(retval);//PUSHPOP190
fn.push(["$L210", [env._piece]]);
scratch = shapes.getleft;
next = scratch.as_string();
break;
case "$L210":
scratch = retval;
retval = tmp.pop();//PUSHPOP190
params.push(scratch);
scratch = tmp.push(retval);//PUSHPOP192
fn.push(["$L211", [env._piece]]);
scratch = shapes.gettop;
next = scratch.as_string();
break;
case "$L211":
scratch = retval;
retval = tmp.pop();//PUSHPOP192
params.push(scratch.op_add(env._bwidth));
fn.push(["$L212", params]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L212":
params = tmp.pop();//PUSHPOP195
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L205";
break;
case "$L207":
retval = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
scratch = env._y1;
scratch.op_assign(scratch.op_add(retval));
next = "$L202";
break;
case "$L204":
next = "$L196";
break;
case "$L196":
next = "$L186";
break;
case "$L188":
retval = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L183";
break;
case "$L185":
scratch = env._linescleared.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L213";
} else {
next = "$L214";
}
break;
case "$L213":
tmp.push(env._score);
tmp.push(env._score);
tmp.push(new DataUnit(100, DATATYPES.DT_NUMBER));
fn.push(["$L215", [env._linescleared.op_mul(new DataUnit(2.15, DATATYPES.DT_NUMBER)).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))]]);
scratch = math.round;
next = scratch.as_string();
break;
case "$L215":
retval = tmp.pop().op_add(tmp.pop().op_mul(retval));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP198
fn.push(["$L216", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L216":
scratch = retval;
retval = tmp.pop();//PUSHPOP198
next = "$L214";
break;
case "$L214":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L182":
next = "$L217";
break;
case "_setupcanvas":
scratch = graphicswindow.brushcolor.op_assign(graphicswindow.backgroundcolor);
tmp.push(retval);//PUSHPOP200
fn.push(["$L218", [env._xoffset, env._yoffset, env._cwidth.op_mul(env._bwidth), env._cheight.op_mul(env._bwidth)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L218":
scratch = retval;
retval = tmp.pop();//PUSHPOP200
tmp.push(retval);//PUSHPOP202
fn.push(["$L219", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L219":
scratch = retval;
retval = tmp.pop();//PUSHPOP202
graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x;
scratch.op_assign(retval);
case "$L220":
tmp.push(env._x);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L221";
} else {
next = "$L222";
}
break;
case "$L221":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._y;
scratch.op_assign(retval);
case "$L223":
tmp.push(env._y);
retval = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L224";
} else {
next = "$L225";
}
break;
case "$L224":
tmp.push(retval);//PUSHPOP204
tmp.push(params);//PUSHPOP205
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
params.push(new DataUnit(".", DATATYPES.DT_STRING));
fn.push(["$L226", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L226":
params = tmp.pop();//PUSHPOP205
scratch = retval;
tmp.push(params);//PUSHPOP207
params = [];
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._x.op_mul(env._bwidth)));
tmp.push(env._yoffset);
retval = env._y.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
params.push(env._bwidth);
params.push(env._bwidth);
fn.push(["$L227", params]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L227":
params = tmp.pop();//PUSHPOP207
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L223";
break;
case "$L225":
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x;
scratch.op_assign(scratch.op_add(retval));
next = "$L220";
break;
case "$L222":
graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP208
tmp.push(params);//PUSHPOP209
params = [];
params.push(env._xoffset);
params.push(env._yoffset);
params.push(env._xoffset);
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L228", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L228":
params = tmp.pop();//PUSHPOP209
scratch = retval;
tmp.push(tmp.pop());//PUSHPOP210
tmp.push(params);//PUSHPOP211
params = [];
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)));
params.push(env._yoffset);
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L229", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L229":
params = tmp.pop();//PUSHPOP211
scratch = retval;
tmp.push(tmp.pop());//PUSHPOP212
tmp.push(params);//PUSHPOP213
params = [];
params.push(env._xoffset);
tmp.push(env._yoffset);
params.push(tmp.pop().op_add(env._cheight.op_mul(env._bwidth)));
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L230", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L230":
params = tmp.pop();//PUSHPOP213
scratch = retval;
retval = tmp.pop();//PUSHPOP212
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Lime", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP214
tmp.push(params);//PUSHPOP215
params = [];
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
params.push(env._yoffset);
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)));
fn.push(["$L231", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L231":
params = tmp.pop();//PUSHPOP215
scratch = retval;
tmp.push(tmp.pop());//PUSHPOP216
tmp.push(params);//PUSHPOP217
params = [];
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
params.push(env._yoffset);
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)));
fn.push(["$L232", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L232":
params = tmp.pop();//PUSHPOP217
scratch = retval;
tmp.push(tmp.pop());//PUSHPOP218
tmp.push(params);//PUSHPOP219
params = [];
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
params.push(tmp.pop().op_add(env._cheight.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
fn.push(["$L233", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L233":
params = tmp.pop();//PUSHPOP219
scratch = retval;
retval = tmp.pop();//PUSHPOP218
graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
tmp.push(env._x);
tmp.push(env._xoffset);
retval = tmp.pop().op_add(env._preview_xpos.op_mul(env._bwidth)).op_sub(env._bwidth);
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
tmp.push(env._yoffset);
retval = tmp.pop().op_add(env._preview_ypos.op_mul(env._bwidth)).op_sub(env._bwidth);
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP220
fn.push(["$L234", [env._x, env._y, env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER)), env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER))]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L234":
scratch = retval;
retval = tmp.pop();//PUSHPOP220
tmp.push(retval);//PUSHPOP222
fn.push(["$L235", [env._x, env._y, env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER)), env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER))]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L235":
scratch = retval;
retval = tmp.pop();//PUSHPOP222
tmp.push(retval);//PUSHPOP224
fn.push(["$L236", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER)), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L236":
scratch = retval;
retval = tmp.pop();//PUSHPOP224
tmp.push(retval);//PUSHPOP226
fn.push(["$L237", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER)), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L237":
scratch = retval;
retval = tmp.pop();//PUSHPOP226
graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
graphicswindow.fontname.op_assign(new DataUnit("Comic Sans MS", DATATYPES.DT_STRING));
scratch = graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP228
fn.push(["$L238", [env._x, env._y.op_add(new DataUnit(200, DATATYPES.DT_NUMBER)), new DataUnit("Game control keys:", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L238":
scratch = retval;
retval = tmp.pop();//PUSHPOP228
tmp.push(retval);//PUSHPOP230
fn.push(["$L239", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(220, DATATYPES.DT_NUMBER)), new DataUnit("Left Arrow = Move piece left", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L239":
scratch = retval;
retval = tmp.pop();//PUSHPOP230
tmp.push(retval);//PUSHPOP232
fn.push(["$L240", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(240, DATATYPES.DT_NUMBER)), new DataUnit("Right Arrow = Move piece right", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L240":
scratch = retval;
retval = tmp.pop();//PUSHPOP232
tmp.push(retval);//PUSHPOP234
fn.push(["$L241", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(260, DATATYPES.DT_NUMBER)), new DataUnit("Up Arrow = Rotate piece", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L241":
scratch = retval;
retval = tmp.pop();//PUSHPOP234
tmp.push(retval);//PUSHPOP236
fn.push(["$L242", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(280, DATATYPES.DT_NUMBER)), new DataUnit("Down Arrow = Drop piece", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L242":
scratch = retval;
retval = tmp.pop();//PUSHPOP236
tmp.push(retval);//PUSHPOP238
fn.push(["$L243", [env._x, env._y.op_add(new DataUnit(320, DATATYPES.DT_NUMBER)), new DataUnit("Press to stop game", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L243":
scratch = retval;
retval = tmp.pop();//PUSHPOP238
tmp.push(retval);//PUSHPOP240
fn.push(["$L244", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L244":
scratch = retval;
retval = tmp.pop();//PUSHPOP240
graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
graphicswindow.fontname.op_assign(new DataUnit("Georgia", DATATYPES.DT_STRING));
graphicswindow.fontitalic.op_assign(new DataUnit("True", DATATYPES.DT_STRING));
scratch = graphicswindow.fontsize.op_assign(new DataUnit(36, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP242
fn.push(["$L245", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(400, DATATYPES.DT_NUMBER)), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L245":
scratch = retval;
retval = tmp.pop();//PUSHPOP242
tmp.push(retval);//PUSHPOP244
fn.push(["$L246", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L246":
scratch = retval;
retval = tmp.pop();//PUSHPOP244
scratch = graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP246
fn.push(["$L247", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(440, DATATYPES.DT_NUMBER)), new DataUnit("ver.0.1", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L247":
scratch = retval;
retval = tmp.pop();//PUSHPOP246
tmp.push(retval);//PUSHPOP248
fn.push(["$L248", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L248":
scratch = retval;
retval = tmp.pop();//PUSHPOP248
scratch = env._score.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
fn.push(["$L249", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L249":
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L217":
next = "$L250";
break;
case "_printscore":
graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP252
fn.push(["$L251", [new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L251":
scratch = retval;
retval = tmp.pop();//PUSHPOP252
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP254
fn.push(["$L252", [new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L252":
scratch = retval;
retval = tmp.pop();//PUSHPOP254
graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
graphicswindow.fontsize.op_assign(new DataUnit(32, DATATYPES.DT_NUMBER));
graphicswindow.fontname.op_assign(new DataUnit("Impact", DATATYPES.DT_STRING));
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(params);//PUSHPOP263
params = [];
params.push(new DataUnit(505, DATATYPES.DT_NUMBER));
params.push(new DataUnit(70, DATATYPES.DT_NUMBER));
scratch = tmp.push(retval);//PUSHPOP260
tmp.push(params);//PUSHPOP261
params = [];
scratch = tmp.push(retval);//PUSHPOP258
tmp.push(params);//PUSHPOP259
params = [];
params.push(new DataUnit("00000000", DATATYPES.DT_STRING));
params.push(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(new DataUnit(8, DATATYPES.DT_NUMBER));
fn.push(["$L253", [env._score]]);
scratch = text.getlength;
next = scratch.as_string();
break;
case "$L253":
params.push(tmp.pop().op_sub(retval));
fn.push(["$L254", params]);
scratch = text.getsubtext;
next = scratch.as_string();
break;
case "$L254":
params = tmp.pop();//PUSHPOP259
scratch = retval;
retval = tmp.pop();//PUSHPOP258
params.push(scratch);
params.push(env._score);
fn.push(["$L255", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L255":
params = tmp.pop();//PUSHPOP261
scratch = retval;
retval = tmp.pop();//PUSHPOP260
params.push(scratch);
fn.push(["$L256", params]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L256":
params = tmp.pop();//PUSHPOP263
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L250":
next = "$L257";
break;
case "_setuptemplates":
tmp.push(retval);//PUSHPOP264
fn.push(["$L258", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L258":
scratch = retval;
retval = tmp.pop();//PUSHPOP264
tmp.push(retval);//PUSHPOP266
fn.push(["$L259", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L259":
scratch = retval;
retval = tmp.pop();//PUSHPOP266
tmp.push(retval);//PUSHPOP268
fn.push(["$L260", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L260":
scratch = retval;
retval = tmp.pop();//PUSHPOP268
tmp.push(retval);//PUSHPOP270
fn.push(["$L261", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(22, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L261":
scratch = retval;
retval = tmp.pop();//PUSHPOP270
tmp.push(retval);//PUSHPOP272
fn.push(["$L262", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Yellow", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L262":
scratch = retval;
retval = tmp.pop();//PUSHPOP272
tmp.push(retval);//PUSHPOP274
fn.push(["$L263", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L263":
scratch = retval;
retval = tmp.pop();//PUSHPOP274
tmp.push(retval);//PUSHPOP276
fn.push(["$L264", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L264":
scratch = retval;
retval = tmp.pop();//PUSHPOP276
tmp.push(retval);//PUSHPOP278
fn.push(["$L265", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L265":
scratch = retval;
retval = tmp.pop();//PUSHPOP278
tmp.push(retval);//PUSHPOP280
fn.push(["$L266", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L266":
scratch = retval;
retval = tmp.pop();//PUSHPOP280
tmp.push(retval);//PUSHPOP282
fn.push(["$L267", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L267":
scratch = retval;
retval = tmp.pop();//PUSHPOP282
tmp.push(retval);//PUSHPOP284
fn.push(["$L268", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L268":
scratch = retval;
retval = tmp.pop();//PUSHPOP284
tmp.push(retval);//PUSHPOP286
fn.push(["$L269", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(2, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L269":
scratch = retval;
retval = tmp.pop();//PUSHPOP286
tmp.push(retval);//PUSHPOP288
fn.push(["$L270", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Magenta", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L270":
scratch = retval;
retval = tmp.pop();//PUSHPOP288
tmp.push(retval);//PUSHPOP290
fn.push(["$L271", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L271":
scratch = retval;
retval = tmp.pop();//PUSHPOP290
tmp.push(retval);//PUSHPOP292
fn.push(["$L272", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L272":
scratch = retval;
retval = tmp.pop();//PUSHPOP292
tmp.push(retval);//PUSHPOP294
fn.push(["$L273", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L273":
scratch = retval;
retval = tmp.pop();//PUSHPOP294
tmp.push(retval);//PUSHPOP296
fn.push(["$L274", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L274":
scratch = retval;
retval = tmp.pop();//PUSHPOP296
tmp.push(retval);//PUSHPOP298
fn.push(["$L275", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L275":
scratch = retval;
retval = tmp.pop();//PUSHPOP298
tmp.push(retval);//PUSHPOP300
fn.push(["$L276", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L276":
scratch = retval;
retval = tmp.pop();//PUSHPOP300
tmp.push(retval);//PUSHPOP302
fn.push(["$L277", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L277":
scratch = retval;
retval = tmp.pop();//PUSHPOP302
tmp.push(retval);//PUSHPOP304
fn.push(["$L278", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Gray", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L278":
scratch = retval;
retval = tmp.pop();//PUSHPOP304
tmp.push(retval);//PUSHPOP306
fn.push(["$L279", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L279":
scratch = retval;
retval = tmp.pop();//PUSHPOP306
tmp.push(retval);//PUSHPOP308
fn.push(["$L280", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L280":
scratch = retval;
retval = tmp.pop();//PUSHPOP308
tmp.push(retval);//PUSHPOP310
fn.push(["$L281", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L281":
scratch = retval;
retval = tmp.pop();//PUSHPOP310
tmp.push(retval);//PUSHPOP312
fn.push(["$L282", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L282":
scratch = retval;
retval = tmp.pop();//PUSHPOP312
tmp.push(retval);//PUSHPOP314
fn.push(["$L283", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L283":
scratch = retval;
retval = tmp.pop();//PUSHPOP314
tmp.push(retval);//PUSHPOP316
fn.push(["$L284", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L284":
scratch = retval;
retval = tmp.pop();//PUSHPOP316
tmp.push(retval);//PUSHPOP318
fn.push(["$L285", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L285":
scratch = retval;
retval = tmp.pop();//PUSHPOP318
tmp.push(retval);//PUSHPOP320
fn.push(["$L286", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Cyan", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L286":
scratch = retval;
retval = tmp.pop();//PUSHPOP320
tmp.push(retval);//PUSHPOP322
fn.push(["$L287", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L287":
scratch = retval;
retval = tmp.pop();//PUSHPOP322
tmp.push(retval);//PUSHPOP324
fn.push(["$L288", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L288":
scratch = retval;
retval = tmp.pop();//PUSHPOP324
tmp.push(retval);//PUSHPOP326
fn.push(["$L289", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L289":
scratch = retval;
retval = tmp.pop();//PUSHPOP326
tmp.push(retval);//PUSHPOP328
fn.push(["$L290", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L290":
scratch = retval;
retval = tmp.pop();//PUSHPOP328
tmp.push(retval);//PUSHPOP330
fn.push(["$L291", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L291":
scratch = retval;
retval = tmp.pop();//PUSHPOP330
tmp.push(retval);//PUSHPOP332
fn.push(["$L292", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L292":
scratch = retval;
retval = tmp.pop();//PUSHPOP332
tmp.push(retval);//PUSHPOP334
fn.push(["$L293", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L293":
scratch = retval;
retval = tmp.pop();//PUSHPOP334
tmp.push(retval);//PUSHPOP336
fn.push(["$L294", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Green", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L294":
scratch = retval;
retval = tmp.pop();//PUSHPOP336
tmp.push(retval);//PUSHPOP338
fn.push(["$L295", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L295":
scratch = retval;
retval = tmp.pop();//PUSHPOP338
tmp.push(retval);//PUSHPOP340
fn.push(["$L296", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L296":
scratch = retval;
retval = tmp.pop();//PUSHPOP340
tmp.push(retval);//PUSHPOP342
fn.push(["$L297", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L297":
scratch = retval;
retval = tmp.pop();//PUSHPOP342
tmp.push(retval);//PUSHPOP344
fn.push(["$L298", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L298":
scratch = retval;
retval = tmp.pop();//PUSHPOP344
tmp.push(retval);//PUSHPOP346
fn.push(["$L299", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(20, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L299":
scratch = retval;
retval = tmp.pop();//PUSHPOP346
tmp.push(retval);//PUSHPOP348
fn.push(["$L300", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L300":
scratch = retval;
retval = tmp.pop();//PUSHPOP348
tmp.push(retval);//PUSHPOP350
fn.push(["$L301", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L301":
scratch = retval;
retval = tmp.pop();//PUSHPOP350
tmp.push(retval);//PUSHPOP352
fn.push(["$L302", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Blue", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L302":
scratch = retval;
retval = tmp.pop();//PUSHPOP352
tmp.push(retval);//PUSHPOP354
fn.push(["$L303", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L303":
scratch = retval;
retval = tmp.pop();//PUSHPOP354
tmp.push(retval);//PUSHPOP356
fn.push(["$L304", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L304":
scratch = retval;
retval = tmp.pop();//PUSHPOP356
tmp.push(retval);//PUSHPOP358
fn.push(["$L305", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L305":
scratch = retval;
retval = tmp.pop();//PUSHPOP358
tmp.push(retval);//PUSHPOP360
fn.push(["$L306", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L306":
scratch = retval;
retval = tmp.pop();//PUSHPOP360
tmp.push(retval);//PUSHPOP362
fn.push(["$L307", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L307":
scratch = retval;
retval = tmp.pop();//PUSHPOP362
tmp.push(retval);//PUSHPOP364
fn.push(["$L308", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L308":
scratch = retval;
retval = tmp.pop();//PUSHPOP364
tmp.push(retval);//PUSHPOP366
fn.push(["$L309", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(13, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L309":
scratch = retval;
retval = tmp.pop();//PUSHPOP366
tmp.push(retval);//PUSHPOP368
fn.push(["$L310", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Red", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L310":
scratch = retval;
retval = tmp.pop();//PUSHPOP368
tmp.push(retval);//PUSHPOP370
fn.push(["$L311", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(4, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L311":
scratch = retval;
retval = tmp.pop();//PUSHPOP370
tmp.push(retval);//PUSHPOP372
fn.push(["$L312", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L312":
scratch = retval;
retval = tmp.pop();//PUSHPOP372
fn.push(["$L313", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L313":
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L257":
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

