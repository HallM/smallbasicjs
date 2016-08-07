//'use strict';
//var DataUnit = require('./runtime/data-unit').DataUnit;
//var DATATYPES = require('./runtime/data-unit').DATATYPES;

var interrupt = (function() {
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
tmp.push(retval);//PUSHPOP14
fn.push(["$L10", []]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L10":
scratch = retval;
retval = tmp.pop();//PUSHPOP14
next = "$L1";
break;
case "$L3":
next = "$L11";
break;
case "_mainloop":
tmp.push(env._template);
tmp.push(params);//PUSHPOP19
params = [];
params.push(new DataUnit("template", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP16
fn.push(["$L12", [new DataUnit(7, DATATYPES.DT_NUMBER)]]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L12":
scratch = retval;
retval = tmp.pop();//PUSHPOP16
params.push(scratch);
fn.push(["$L13", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L13":
params = tmp.pop();//PUSHPOP19
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP20
fn.push(["$L14", []]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L14":
scratch = retval;
retval = tmp.pop();//PUSHPOP20
env._nextpiece.op_assign(env._h);
env._end.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._sessiondelay.op_assign(env._startdelay);
case "$L15":
scratch = env._end.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L16";
} else {
next = "$L17";
}
break;
case "$L16":
scratch = env._sessiondelay.op_gt(env._enddelay);
if (scratch.as_bool()) {
next = "$L18";
} else {
next = "$L19";
}
break;
case "$L18":
tmp.push(env._sessiondelay);
retval = env._sessiondelay.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L19";
break;
case "$L19":
env._delay.op_assign(env._sessiondelay);
scratch = env._thispiece.op_assign(env._nextpiece);
tmp.push(env._template);
tmp.push(params);//PUSHPOP25
params = [];
params.push(new DataUnit("template", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP22
fn.push(["$L20", [new DataUnit(7, DATATYPES.DT_NUMBER)]]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L20":
scratch = retval;
retval = tmp.pop();//PUSHPOP22
params.push(scratch);
fn.push(["$L21", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L21":
params = tmp.pop();//PUSHPOP25
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP26
fn.push(["$L22", []]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L22":
scratch = retval;
retval = tmp.pop();//PUSHPOP26
scratch = env._nextpiece.op_assign(env._h);
tmp.push(retval);//PUSHPOP28
fn.push(["$L23", []]);
scratch = env._drawpreviewpiece;
next = scratch.as_string();
break;
case "$L23":
scratch = retval;
retval = tmp.pop();//PUSHPOP28
env._h.op_assign(env._thispiece);
env._ypos.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._xpos.op_assign(new DataUnit(3, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP30
fn.push(["$L24", []]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L24":
scratch = retval;
retval = tmp.pop();//PUSHPOP30
scratch = env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L25";
} else {
next = "$L26";
}
break;
case "$L25":
tmp.push(env._ypos);
retval = env._ypos.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP32
fn.push(["$L27", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L27":
scratch = retval;
retval = tmp.pop();//PUSHPOP32
scratch = env._end.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
next = "$L26";
break;
case "$L26":
scratch = env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L28":
tmp.push(env._done.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER)));
retval = env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L29";
} else {
next = "$L30";
}
break;
case "$L29":
tmp.push(retval);//PUSHPOP34
fn.push(["$L31", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L31":
scratch = retval;
retval = tmp.pop();//PUSHPOP34
scratch = env._delayindex.op_assign(env._delay);
case "$L32":
tmp.push(env._delayindex.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER)));
retval = env._delay.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L33";
} else {
next = "$L34";
}
break;
case "$L33":
tmp.push(retval);//PUSHPOP36
fn.push(["$L35", [new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L35":
scratch = retval;
retval = tmp.pop();//PUSHPOP36
tmp.push(env._delayindex);
retval = env._delayindex.op_sub(new DataUnit(10, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L32";
break;
case "$L34":
scratch = env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L36";
} else {
next = "$L38";
}
break;
case "$L36":
tmp.push(env._yposdelta);
retval = env._yposdelta.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L37";
break;
case "$L38":
tmp.push(env._ypos);
retval = env._ypos.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L37";
break;
case "$L37":
tmp.push(retval);//PUSHPOP38
fn.push(["$L39", []]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L39":
scratch = retval;
retval = tmp.pop();//PUSHPOP38
next = "$L28";
break;
case "$L30":
next = "$L15";
break;
case "$L17":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L11":
next = "$L40";
break;
case "_handlekey":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Escape", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L41";
} else {
next = "$L42";
}
break;
case "$L41":
tmp.push(retval);//PUSHPOP40
fn.push(["$L43", []]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L43":
scratch = retval;
retval = tmp.pop();//PUSHPOP40
next = "$L42";
break;
case "$L42":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Left", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L44";
} else {
next = "$L45";
}
break;
case "$L44":
scratch = env._movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER).op_neg());
tmp.push(retval);//PUSHPOP42
fn.push(["$L46", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L46":
scratch = retval;
retval = tmp.pop();//PUSHPOP42
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L47";
} else {
next = "$L48";
}
break;
case "$L47":
tmp.push(env._xpos);
retval = env._xpos.op_add(env._movedirection);
scratch = tmp.pop().op_assign(retval);
next = "$L48";
break;
case "$L48":
tmp.push(retval);//PUSHPOP44
fn.push(["$L49", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L49":
scratch = retval;
retval = tmp.pop();//PUSHPOP44
next = "$L45";
break;
case "$L45":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Right", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L50";
} else {
next = "$L51";
}
break;
case "$L50":
scratch = env._movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP46
fn.push(["$L52", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L52":
scratch = retval;
retval = tmp.pop();//PUSHPOP46
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L53";
} else {
next = "$L54";
}
break;
case "$L53":
tmp.push(env._xpos);
retval = env._xpos.op_add(env._movedirection);
scratch = tmp.pop().op_assign(retval);
next = "$L54";
break;
case "$L54":
tmp.push(retval);//PUSHPOP48
fn.push(["$L55", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L55":
scratch = retval;
retval = tmp.pop();//PUSHPOP48
next = "$L51";
break;
case "$L51":
tmp.push(graphicswindow.lastkey.op_eq(new DataUnit("Down", DATATYPES.DT_STRING)));
retval = graphicswindow.lastkey.op_eq(new DataUnit("Space", DATATYPES.DT_STRING));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L56";
} else {
next = "$L57";
}
break;
case "$L56":
scratch = env._delay.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
next = "$L57";
break;
case "$L57":
scratch = graphicswindow.lastkey.op_eq(new DataUnit("Up", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L58";
} else {
next = "$L59";
}
break;
case "$L58":
tmp.push(env._basetemplate);
fn.push(["$L60", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L60":
tmp.pop().op_assign(retval);
env._template.op_assign(new DataUnit("temptemplate", DATATYPES.DT_STRING));
scratch = env._rotation.op_assign(new DataUnit("CW", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP52
fn.push(["$L61", []]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L61":
scratch = retval;
retval = tmp.pop();//PUSHPOP52
tmp.push(retval);//PUSHPOP54
fn.push(["$L62", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L62":
scratch = retval;
retval = tmp.pop();//PUSHPOP54
scratch = env._movedirection.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP56
fn.push(["$L63", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L63":
scratch = retval;
retval = tmp.pop();//PUSHPOP56
env._xposbk.op_assign(env._xpos);
scratch = env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L64":
tmp.push(env._yposdelta.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER)));
fn.push(["$L67", [env._xposbk.op_sub(env._xpos)]]);
scratch = math.abs;
next = scratch.as_string();
break;
case "$L67":
retval = retval.op_lt(new DataUnit(3, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L65";
} else {
next = "$L66";
}
break;
case "$L65":
scratch = env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L68";
} else {
next = "$L70";
}
break;
case "$L68":
env._basetemplate.op_assign(env._template);
scratch = env._template.op_assign(new DataUnit("rotatedtemplate", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP60
fn.push(["$L71", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L71":
scratch = retval;
retval = tmp.pop();//PUSHPOP60
scratch = env._rotation.op_assign(new DataUnit("COPY", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP62
fn.push(["$L72", []]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L72":
scratch = retval;
retval = tmp.pop();//PUSHPOP62
scratch = env._yposdelta.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP64
fn.push(["$L73", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L73":
scratch = retval;
retval = tmp.pop();//PUSHPOP64
next = "$L69";
break;
case "$L70":
scratch = env._invalidmove.op_eq(new DataUnit(2, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L74";
} else {
next = "$L75";
}
break;
case "$L74":
scratch = env._xpos.op_assign(new DataUnit(99, DATATYPES.DT_NUMBER));
next = "$L69";
break;
case "$L75":
tmp.push(env._xpos);
retval = env._xpos.op_sub(env._invalidmove);
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP66
fn.push(["$L76", []]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L76":
scratch = retval;
retval = tmp.pop();//PUSHPOP66
next = "$L69";
break;
case "$L69":
next = "$L64";
break;
case "$L66":
scratch = env._invalidmove.op_neq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L77";
} else {
next = "$L78";
}
break;
case "$L77":
scratch = env._xpos.op_assign(env._xposbk);
tmp.push(retval);//PUSHPOP68
fn.push(["$L79", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._basetemplate]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L79":
scratch = retval;
retval = tmp.pop();//PUSHPOP68
scratch = env._template.op_assign(new DataUnit("", DATATYPES.DT_STRING));
next = "$L78";
break;
case "$L78":
next = "$L59";
break;
case "$L59":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L40":
next = "$L80";
break;
case "_drawpreviewpiece":
env._xpos.op_assign(env._preview_xpos);
env._ypos.op_assign(env._preview_ypos);
env._h.op_assign(env._nextpiece);
env._xoffsetbk.op_assign(env._xoffset);
scratch = env._yoffsetbk.op_assign(env._yoffset);
tmp.push(env._xoffset);
tmp.push(env._xoffset);
tmp.push(params);//PUSHPOP73
params = [];
scratch = tmp.push(retval);//PUSHPOP70
fn.push(["$L81", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L81":
scratch = retval;
retval = tmp.pop();//PUSHPOP70
params.push(scratch);
params.push(new DataUnit("pviewx", DATATYPES.DT_STRING));
fn.push(["$L82", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L82":
params = tmp.pop();//PUSHPOP73
retval = tmp.pop().op_add(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(env._yoffset);
tmp.push(env._yoffset);
tmp.push(params);//PUSHPOP77
params = [];
scratch = tmp.push(retval);//PUSHPOP74
fn.push(["$L83", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L83":
scratch = retval;
retval = tmp.pop();//PUSHPOP74
params.push(scratch);
params.push(new DataUnit("pviewy", DATATYPES.DT_STRING));
fn.push(["$L84", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L84":
params = tmp.pop();//PUSHPOP77
retval = tmp.pop().op_add(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP78
fn.push(["$L85", []]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L85":
scratch = retval;
retval = tmp.pop();//PUSHPOP78
env._xoffset.op_assign(env._xoffsetbk);
scratch = env._yoffset.op_assign(env._yoffsetbk);
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L80":
next = "$L86";
break;
case "_copypiece":
tmp.push(env._l);
fn.push(["$L87", [env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L87":
tmp.pop().op_assign(retval);
scratch = env._rotation.op_eq(new DataUnit("CW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L88";
} else {
next = "$L90";
}
break;
case "$L88":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L91":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L92";
} else {
next = "$L93";
}
break;
case "$L92":
tmp.push(env._v);
fn.push(["$L94", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L94":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L95", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L95":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
tmp.push(env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)));
fn.push(["$L96", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L96":
retval = tmp.pop().op_sub(retval);
scratch = tmp.pop().op_assign(retval);
fn.push(["$L97", [env._template, env._i, env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER)).op_add(env._y)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L97":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L91";
break;
case "$L93":
next = "$L89";
break;
case "$L90":
scratch = env._rotation.op_eq(new DataUnit("CCW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L98";
} else {
next = "$L99";
}
break;
case "$L98":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L100":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L101";
} else {
next = "$L102";
}
break;
case "$L101":
tmp.push(env._v);
fn.push(["$L103", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L103":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
tmp.push(env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)));
fn.push(["$L104", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L104":
retval = tmp.pop().op_sub(retval);
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L105", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L105":
scratch = tmp.pop().op_assign(retval);
fn.push(["$L106", [env._template, env._i, env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER)).op_add(env._y)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L106":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L100";
break;
case "$L102":
next = "$L89";
break;
case "$L99":
scratch = env._rotation.op_eq(new DataUnit("COPY", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L107";
} else {
next = "$L108";
}
break;
case "$L107":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L109":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L110";
} else {
next = "$L111";
}
break;
case "$L110":
tmp.push(params);//PUSHPOP101
params = [];
params.push(env._template);
params.push(env._i);
scratch = tmp.push(retval);//PUSHPOP98
fn.push(["$L112", [env._basetemplate, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L112":
scratch = retval;
retval = tmp.pop();//PUSHPOP98
params.push(scratch);
fn.push(["$L113", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L113":
params = tmp.pop();//PUSHPOP101
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L109";
break;
case "$L111":
next = "$L89";
break;
case "$L108":
tmp.push(retval);//PUSHPOP102
fn.push(["$L114", [new DataUnit("invalid parameter", DATATYPES.DT_STRING), new DataUnit("Error", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.showmessage;
next = scratch.as_string();
break;
case "$L114":
scratch = retval;
retval = tmp.pop();//PUSHPOP102
tmp.push(retval);//PUSHPOP104
fn.push(["$L115", []]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L115":
scratch = retval;
retval = tmp.pop();//PUSHPOP104
next = "$L89";
break;
case "$L89":
tmp.push(retval);//PUSHPOP108
tmp.push(params);//PUSHPOP109
params = [];
params.push(env._template);
params.push(new DataUnit("color", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP106
fn.push(["$L116", [env._basetemplate, new DataUnit("color", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L116":
scratch = retval;
retval = tmp.pop();//PUSHPOP106
params.push(scratch);
fn.push(["$L117", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L117":
params = tmp.pop();//PUSHPOP109
scratch = retval;
retval = tmp.pop();//PUSHPOP108
tmp.push(retval);//PUSHPOP112
tmp.push(params);//PUSHPOP113
params = [];
params.push(env._template);
params.push(new DataUnit("dim", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP110
fn.push(["$L118", [env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L118":
scratch = retval;
retval = tmp.pop();//PUSHPOP110
params.push(scratch);
fn.push(["$L119", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L119":
params = tmp.pop();//PUSHPOP113
scratch = retval;
retval = tmp.pop();//PUSHPOP112
tmp.push(retval);//PUSHPOP116
tmp.push(params);//PUSHPOP117
params = [];
params.push(env._template);
params.push(new DataUnit("pviewx", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP114
fn.push(["$L120", [env._basetemplate, new DataUnit("pviewx", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L120":
scratch = retval;
retval = tmp.pop();//PUSHPOP114
params.push(scratch);
fn.push(["$L121", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L121":
params = tmp.pop();//PUSHPOP117
scratch = retval;
retval = tmp.pop();//PUSHPOP116
tmp.push(params);//PUSHPOP121
params = [];
params.push(env._template);
params.push(new DataUnit("pviewy", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP118
fn.push(["$L122", [env._basetemplate, new DataUnit("pviewy", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L122":
scratch = retval;
retval = tmp.pop();//PUSHPOP118
params.push(scratch);
fn.push(["$L123", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L123":
params = tmp.pop();//PUSHPOP121
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L86":
next = "$L124";
break;
case "_createpiece":
tmp.push(env._hcount);
retval = env._hcount.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(env._h);
fn.push(["$L125", [new DataUnit("piece", DATATYPES.DT_STRING), env._hcount]]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L125":
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP124
fn.push(["$L126", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg(), env._template]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L126":
scratch = retval;
retval = tmp.pop();//PUSHPOP124
graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(graphicswindow.brushcolor);
fn.push(["$L127", [env._template, new DataUnit("color", DATATYPES.DT_STRING)]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L127":
scratch = tmp.pop().op_assign(retval);
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L128":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L129";
} else {
next = "$L130";
}
break;
case "$L129":
tmp.push(env._s);
fn.push(["$L131", [env._bwidth, env._bwidth]]);
scratch = shapes.addrectangle;
next = scratch.as_string();
break;
case "$L131":
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP130
fn.push(["$L132", [env._s, env._bwidth.op_neg(), env._bwidth.op_neg()]]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L132":
scratch = retval;
retval = tmp.pop();//PUSHPOP130
fn.push(["$L133", [env._h, env._i, env._s]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L133":
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L128";
break;
case "$L130":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L124":
next = "$L134";
break;
case "_movepiece":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L135":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L136";
} else {
next = "$L137";
}
break;
case "$L136":
tmp.push(env._v);
tmp.push(params);//PUSHPOP137
params = [];
scratch = tmp.push(retval);//PUSHPOP134
fn.push(["$L138", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L138":
scratch = retval;
retval = tmp.pop();//PUSHPOP134
params.push(scratch);
params.push(env._i);
fn.push(["$L139", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L139":
params = tmp.pop();//PUSHPOP137
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L140", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L140":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L141", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L141":
scratch = tmp.pop().op_assign(retval);
tmp.push(params);//PUSHPOP145
params = [];
scratch = tmp.push(retval);//PUSHPOP142
fn.push(["$L142", [env._h, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L142":
scratch = retval;
retval = tmp.pop();//PUSHPOP142
params.push(scratch);
tmp.push(env._xoffset);
tmp.push(tmp.pop().op_add(env._xpos.op_mul(env._bwidth)));
params.push(tmp.pop().op_add(env._x.op_mul(env._bwidth)));
tmp.push(env._yoffset);
tmp.push(tmp.pop().op_add(env._ypos.op_mul(env._bwidth)));
retval = env._y.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L143", params]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L143":
params = tmp.pop();//PUSHPOP145
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L135";
break;
case "$L137":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L134":
next = "$L144";
break;
case "_validatemove":
env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._invalidmove.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L145":
scratch = env._i.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L146";
} else {
next = "$L147";
}
break;
case "$L146":
tmp.push(env._v);
tmp.push(params);//PUSHPOP149
params = [];
scratch = tmp.push(retval);//PUSHPOP146
fn.push(["$L148", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L148":
scratch = retval;
retval = tmp.pop();//PUSHPOP146
params.push(scratch);
params.push(env._i);
fn.push(["$L149", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L149":
params = tmp.pop();//PUSHPOP149
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L150", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L150":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L151", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L151":
tmp.pop().op_assign(retval);
scratch = env._x.op_add(env._xpos).op_add(env._movedirection).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L152";
} else {
next = "$L153";
}
break;
case "$L152":
env._invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER).op_neg());
scratch = env._i.op_assign(env._boxes);
next = "$L153";
break;
case "$L153":
scratch = env._x.op_add(env._xpos).op_add(env._movedirection).op_gte(env._cwidth);
if (scratch.as_bool()) {
next = "$L154";
} else {
next = "$L155";
}
break;
case "$L154":
env._invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L155";
break;
case "$L155":
scratch = tmp.push(retval);//PUSHPOP154
tmp.push(params);//PUSHPOP155
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x.op_add(env._xpos).op_add(env._movedirection));
retval = env._y.op_add(env._ypos).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L156", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L156":
params = tmp.pop();//PUSHPOP155
scratch = retval;
retval = tmp.pop();//PUSHPOP154
scratch = scratch.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L157";
} else {
next = "$L158";
}
break;
case "$L157":
env._invalidmove.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L158";
break;
case "$L158":
tmp.push(env._i);
retval = env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L145";
break;
case "$L147":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L144":
next = "$L159";
break;
case "_checkstop":
env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L160":
scratch = env._i.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L161";
} else {
next = "$L162";
}
break;
case "$L161":
tmp.push(env._v);
tmp.push(params);//PUSHPOP159
params = [];
scratch = tmp.push(retval);//PUSHPOP156
fn.push(["$L163", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L163":
scratch = retval;
retval = tmp.pop();//PUSHPOP156
params.push(scratch);
params.push(env._i);
fn.push(["$L164", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L164":
params = tmp.pop();//PUSHPOP159
scratch = tmp.pop().op_assign(retval);
tmp.push(env._x);
fn.push(["$L165", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L165":
scratch = tmp.pop().op_assign(retval);
tmp.push(env._y);
fn.push(["$L166", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L166":
tmp.pop().op_assign(retval);
tmp.push(env._y.op_add(env._ypos).op_gt(env._cheight));
tmp.push(params);//PUSHPOP165
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x.op_add(env._xpos));
retval = env._y.op_add(env._ypos).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L167", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L167":
params = tmp.pop();//PUSHPOP165
retval = retval.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
scratch = tmp.pop().op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L168";
} else {
next = "$L169";
}
break;
case "$L168":
env._done.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._i.op_assign(env._boxes);
next = "$L169";
break;
case "$L169":
tmp.push(env._i);
retval = env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L160";
break;
case "$L162":
scratch = env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L170";
} else {
next = "$L171";
}
break;
case "$L170":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(retval);
case "$L172":
tmp.push(env._i);
retval = env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L173";
} else {
next = "$L174";
}
break;
case "$L173":
tmp.push(env._v);
tmp.push(params);//PUSHPOP169
params = [];
scratch = tmp.push(retval);//PUSHPOP166
fn.push(["$L175", [env._h, new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L175":
scratch = retval;
retval = tmp.pop();//PUSHPOP166
params.push(scratch);
params.push(env._i);
fn.push(["$L176", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L176":
params = tmp.pop();//PUSHPOP169
scratch = tmp.pop().op_assign(retval);
tmp.push(params);//PUSHPOP177
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
scratch = tmp.push(retval);//PUSHPOP170
fn.push(["$L177", [env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER))]]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L177":
scratch = retval;
retval = tmp.pop();//PUSHPOP170
tmp.push(scratch.op_add(env._xpos));
fn.push(["$L178", [env._v, new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L178":
retval = retval.op_add(env._ypos).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
scratch = tmp.push(retval);//PUSHPOP174
fn.push(["$L179", [env._h, env._i]]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L179":
scratch = retval;
retval = tmp.pop();//PUSHPOP174
params.push(scratch);
fn.push(["$L180", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L180":
params = tmp.pop();//PUSHPOP177
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L172";
break;
case "$L174":
tmp.push(env._score);
retval = env._score.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP178
fn.push(["$L181", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L181":
scratch = retval;
retval = tmp.pop();//PUSHPOP178
tmp.push(retval);//PUSHPOP180
fn.push(["$L182", []]);
scratch = env._deletelines;
next = scratch.as_string();
break;
case "$L182":
scratch = retval;
retval = tmp.pop();//PUSHPOP180
next = "$L171";
break;
case "$L171":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L159":
next = "$L183";
break;
case "_deletelines":
env._linescleared.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
retval = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = env._y;
scratch.op_assign(retval);
case "$L184":
tmp.push(env._y);
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L185";
} else {
next = "$L186";
}
break;
case "$L185":
scratch = env._x.op_assign(env._cwidth);
case "$L187":
scratch = env._x.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L188";
} else {
next = "$L189";
}
break;
case "$L188":
scratch = env._x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
case "$L190":
scratch = env._x.op_lt(env._cwidth);
if (scratch.as_bool()) {
next = "$L191";
} else {
next = "$L192";
}
break;
case "$L191":
tmp.push(env._piece);
tmp.push(params);//PUSHPOP183
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L193", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L193":
params = tmp.pop();//PUSHPOP183
tmp.pop().op_assign(retval);
scratch = env._piece.op_eq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L194";
} else {
next = "$L195";
}
break;
case "$L194":
scratch = env._x.op_assign(env._cwidth);
next = "$L195";
break;
case "$L195":
tmp.push(env._x);
retval = env._x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = tmp.pop().op_assign(retval);
next = "$L190";
break;
case "$L192":
scratch = env._x.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L196";
} else {
next = "$L197";
}
break;
case "$L196":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(retval);
case "$L198":
tmp.push(env._x1);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L199";
} else {
next = "$L200";
}
break;
case "$L199":
tmp.push(params);//PUSHPOP187
params = [];
scratch = tmp.push(retval);//PUSHPOP184
tmp.push(params);//PUSHPOP185
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L201", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L201":
params = tmp.pop();//PUSHPOP185
scratch = retval;
retval = tmp.pop();//PUSHPOP184
params.push(scratch);
fn.push(["$L202", params]);
scratch = shapes.remove;
next = scratch.as_string();
break;
case "$L202":
params = tmp.pop();//PUSHPOP187
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L198";
break;
case "$L200":
tmp.push(env._linescleared);
scratch = tmp.pop().op_assign(env._linescleared.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)));
retval = env._y;
scratch = env._y1;
scratch.op_assign(retval);
case "$L203":
tmp.push(env._y1);
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._y;
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L204";
} else {
next = "$L205";
}
break;
case "$L204":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(retval);
case "$L206":
tmp.push(env._x1);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L207";
} else {
next = "$L208";
}
break;
case "$L207":
tmp.push(env._piece);
tmp.push(params);//PUSHPOP189
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y1.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)).op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L209", params]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L209":
params = tmp.pop();//PUSHPOP189
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP190
tmp.push(params);//PUSHPOP191
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x1);
retval = env._y1.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
params.push(env._piece);
fn.push(["$L210", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L210":
params = tmp.pop();//PUSHPOP191
scratch = retval;
retval = tmp.pop();//PUSHPOP190
tmp.push(params);//PUSHPOP197
params = [];
params.push(env._piece);
scratch = tmp.push(retval);//PUSHPOP192
fn.push(["$L211", [env._piece]]);
scratch = shapes.getleft;
next = scratch.as_string();
break;
case "$L211":
scratch = retval;
retval = tmp.pop();//PUSHPOP192
params.push(scratch);
scratch = tmp.push(retval);//PUSHPOP194
fn.push(["$L212", [env._piece]]);
scratch = shapes.gettop;
next = scratch.as_string();
break;
case "$L212":
scratch = retval;
retval = tmp.pop();//PUSHPOP194
params.push(scratch.op_add(env._bwidth));
fn.push(["$L213", params]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L213":
params = tmp.pop();//PUSHPOP197
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L206";
break;
case "$L208":
retval = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
scratch = env._y1;
scratch.op_assign(scratch.op_add(retval));
next = "$L203";
break;
case "$L205":
next = "$L197";
break;
case "$L197":
next = "$L187";
break;
case "$L189":
retval = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L184";
break;
case "$L186":
scratch = env._linescleared.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L214";
} else {
next = "$L215";
}
break;
case "$L214":
tmp.push(env._score);
tmp.push(env._score);
tmp.push(new DataUnit(100, DATATYPES.DT_NUMBER));
fn.push(["$L216", [env._linescleared.op_mul(new DataUnit(2.15, DATATYPES.DT_NUMBER)).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))]]);
scratch = math.round;
next = scratch.as_string();
break;
case "$L216":
retval = tmp.pop().op_add(tmp.pop().op_mul(retval));
scratch = tmp.pop().op_assign(retval);
tmp.push(retval);//PUSHPOP200
fn.push(["$L217", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L217":
scratch = retval;
retval = tmp.pop();//PUSHPOP200
next = "$L215";
break;
case "$L215":
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L183":
next = "$L218";
break;
case "_setupcanvas":
scratch = graphicswindow.brushcolor.op_assign(graphicswindow.backgroundcolor);
tmp.push(retval);//PUSHPOP202
fn.push(["$L219", [env._xoffset, env._yoffset, env._cwidth.op_mul(env._bwidth), env._cheight.op_mul(env._bwidth)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L219":
scratch = retval;
retval = tmp.pop();//PUSHPOP202
tmp.push(retval);//PUSHPOP204
fn.push(["$L220", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L220":
scratch = retval;
retval = tmp.pop();//PUSHPOP204
graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._x;
scratch.op_assign(retval);
case "$L221":
tmp.push(env._x);
retval = env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L222";
} else {
next = "$L223";
}
break;
case "$L222":
retval = new DataUnit(0, DATATYPES.DT_NUMBER);
scratch = env._y;
scratch.op_assign(retval);
case "$L224":
tmp.push(env._y);
retval = env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {
next = "$L225";
} else {
next = "$L226";
}
break;
case "$L225":
tmp.push(retval);//PUSHPOP206
tmp.push(params);//PUSHPOP207
params = [];
params.push(new DataUnit("c", DATATYPES.DT_STRING));
tmp.push(env._x);
retval = env._y.op_mul(env._cwidth);
params.push(tmp.pop().op_add(retval));
params.push(new DataUnit(".", DATATYPES.DT_STRING));
fn.push(["$L227", params]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L227":
params = tmp.pop();//PUSHPOP207
scratch = retval;
tmp.push(params);//PUSHPOP209
params = [];
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._x.op_mul(env._bwidth)));
tmp.push(env._yoffset);
retval = env._y.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
params.push(env._bwidth);
params.push(env._bwidth);
fn.push(["$L228", params]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L228":
params = tmp.pop();//PUSHPOP209
scratch = retval;
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L224";
break;
case "$L226":
retval = new DataUnit(1, DATATYPES.DT_NUMBER);
scratch = env._x;
scratch.op_assign(scratch.op_add(retval));
next = "$L221";
break;
case "$L223":
graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP210
tmp.push(params);//PUSHPOP211
params = [];
params.push(env._xoffset);
params.push(env._yoffset);
params.push(env._xoffset);
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
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)));
params.push(env._yoffset);
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
tmp.push(tmp.pop());//PUSHPOP214
tmp.push(params);//PUSHPOP215
params = [];
params.push(env._xoffset);
tmp.push(env._yoffset);
params.push(tmp.pop().op_add(env._cheight.op_mul(env._bwidth)));
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval));
fn.push(["$L231", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L231":
params = tmp.pop();//PUSHPOP215
scratch = retval;
retval = tmp.pop();//PUSHPOP214
scratch = graphicswindow.pencolor.op_assign(new DataUnit("Lime", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP216
tmp.push(params);//PUSHPOP217
params = [];
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
params.push(env._yoffset);
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
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
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
params.push(env._yoffset);
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)));
fn.push(["$L233", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L233":
params = tmp.pop();//PUSHPOP219
scratch = retval;
tmp.push(tmp.pop());//PUSHPOP220
tmp.push(params);//PUSHPOP221
params = [];
params.push(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
params.push(tmp.pop().op_add(env._cheight.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._xoffset);
params.push(tmp.pop().op_add(env._cwidth.op_mul(env._bwidth)).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
tmp.push(env._yoffset);
retval = env._cheight.op_mul(env._bwidth);
params.push(tmp.pop().op_add(retval).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)));
fn.push(["$L234", params]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L234":
params = tmp.pop();//PUSHPOP221
scratch = retval;
retval = tmp.pop();//PUSHPOP220
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
tmp.push(retval);//PUSHPOP222
fn.push(["$L235", [env._x, env._y, env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER)), env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER))]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L235":
scratch = retval;
retval = tmp.pop();//PUSHPOP222
tmp.push(retval);//PUSHPOP224
fn.push(["$L236", [env._x, env._y, env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER)), env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER))]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L236":
scratch = retval;
retval = tmp.pop();//PUSHPOP224
tmp.push(retval);//PUSHPOP226
fn.push(["$L237", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER)), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L237":
scratch = retval;
retval = tmp.pop();//PUSHPOP226
tmp.push(retval);//PUSHPOP228
fn.push(["$L238", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER)), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L238":
scratch = retval;
retval = tmp.pop();//PUSHPOP228
graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
graphicswindow.fontname.op_assign(new DataUnit("Comic Sans MS", DATATYPES.DT_STRING));
scratch = graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP230
fn.push(["$L239", [env._x, env._y.op_add(new DataUnit(200, DATATYPES.DT_NUMBER)), new DataUnit("Game control keys:", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L239":
scratch = retval;
retval = tmp.pop();//PUSHPOP230
tmp.push(retval);//PUSHPOP232
fn.push(["$L240", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(220, DATATYPES.DT_NUMBER)), new DataUnit("Left Arrow = Move piece left", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L240":
scratch = retval;
retval = tmp.pop();//PUSHPOP232
tmp.push(retval);//PUSHPOP234
fn.push(["$L241", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(240, DATATYPES.DT_NUMBER)), new DataUnit("Right Arrow = Move piece right", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L241":
scratch = retval;
retval = tmp.pop();//PUSHPOP234
tmp.push(retval);//PUSHPOP236
fn.push(["$L242", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(260, DATATYPES.DT_NUMBER)), new DataUnit("Up Arrow = Rotate piece", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L242":
scratch = retval;
retval = tmp.pop();//PUSHPOP236
tmp.push(retval);//PUSHPOP238
fn.push(["$L243", [env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(280, DATATYPES.DT_NUMBER)), new DataUnit("Down Arrow = Drop piece", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L243":
scratch = retval;
retval = tmp.pop();//PUSHPOP238
tmp.push(retval);//PUSHPOP240
fn.push(["$L244", [env._x, env._y.op_add(new DataUnit(320, DATATYPES.DT_NUMBER)), new DataUnit("Press to stop game", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L244":
scratch = retval;
retval = tmp.pop();//PUSHPOP240
tmp.push(retval);//PUSHPOP242
fn.push(["$L245", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L245":
scratch = retval;
retval = tmp.pop();//PUSHPOP242
graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
graphicswindow.fontname.op_assign(new DataUnit("Georgia", DATATYPES.DT_STRING));
graphicswindow.fontitalic.op_assign(new DataUnit("True", DATATYPES.DT_STRING));
scratch = graphicswindow.fontsize.op_assign(new DataUnit(36, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP244
fn.push(["$L246", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(400, DATATYPES.DT_NUMBER)), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L246":
scratch = retval;
retval = tmp.pop();//PUSHPOP244
tmp.push(retval);//PUSHPOP246
fn.push(["$L247", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L247":
scratch = retval;
retval = tmp.pop();//PUSHPOP246
scratch = graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
tmp.push(retval);//PUSHPOP248
fn.push(["$L248", [env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER)), env._y.op_add(new DataUnit(440, DATATYPES.DT_NUMBER)), new DataUnit("ver.0.1", DATATYPES.DT_STRING)]]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L248":
scratch = retval;
retval = tmp.pop();//PUSHPOP248
tmp.push(retval);//PUSHPOP250
fn.push(["$L249", [new DataUnit(200, DATATYPES.DT_NUMBER)]]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L249":
scratch = retval;
retval = tmp.pop();//PUSHPOP250
scratch = env._score.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
fn.push(["$L250", []]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L250":
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L218":
next = "$L251";
break;
case "_printscore":
graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP254
fn.push(["$L252", [new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L252":
scratch = retval;
retval = tmp.pop();//PUSHPOP254
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(retval);//PUSHPOP256
fn.push(["$L253", [new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L253":
scratch = retval;
retval = tmp.pop();//PUSHPOP256
graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
graphicswindow.fontsize.op_assign(new DataUnit(32, DATATYPES.DT_NUMBER));
graphicswindow.fontname.op_assign(new DataUnit("Impact", DATATYPES.DT_STRING));
scratch = graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
tmp.push(params);//PUSHPOP265
params = [];
params.push(new DataUnit(505, DATATYPES.DT_NUMBER));
params.push(new DataUnit(70, DATATYPES.DT_NUMBER));
scratch = tmp.push(retval);//PUSHPOP262
tmp.push(params);//PUSHPOP263
params = [];
scratch = tmp.push(retval);//PUSHPOP260
tmp.push(params);//PUSHPOP261
params = [];
params.push(new DataUnit("00000000", DATATYPES.DT_STRING));
params.push(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(new DataUnit(8, DATATYPES.DT_NUMBER));
fn.push(["$L254", [env._score]]);
scratch = text.getlength;
next = scratch.as_string();
break;
case "$L254":
params.push(tmp.pop().op_sub(retval));
fn.push(["$L255", params]);
scratch = text.getsubtext;
next = scratch.as_string();
break;
case "$L255":
params = tmp.pop();//PUSHPOP261
scratch = retval;
retval = tmp.pop();//PUSHPOP260
params.push(scratch);
params.push(env._score);
fn.push(["$L256", params]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L256":
params = tmp.pop();//PUSHPOP263
scratch = retval;
retval = tmp.pop();//PUSHPOP262
params.push(scratch);
fn.push(["$L257", params]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L257":
params = tmp.pop();//PUSHPOP265
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L251":
next = "$L258";
break;
case "_setuptemplates":
tmp.push(retval);//PUSHPOP266
fn.push(["$L259", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L259":
scratch = retval;
retval = tmp.pop();//PUSHPOP266
tmp.push(retval);//PUSHPOP268
fn.push(["$L260", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L260":
scratch = retval;
retval = tmp.pop();//PUSHPOP268
tmp.push(retval);//PUSHPOP270
fn.push(["$L261", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L261":
scratch = retval;
retval = tmp.pop();//PUSHPOP270
tmp.push(retval);//PUSHPOP272
fn.push(["$L262", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(22, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L262":
scratch = retval;
retval = tmp.pop();//PUSHPOP272
tmp.push(retval);//PUSHPOP274
fn.push(["$L263", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Yellow", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L263":
scratch = retval;
retval = tmp.pop();//PUSHPOP274
tmp.push(retval);//PUSHPOP276
fn.push(["$L264", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L264":
scratch = retval;
retval = tmp.pop();//PUSHPOP276
tmp.push(retval);//PUSHPOP278
fn.push(["$L265", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER).op_neg()]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L265":
scratch = retval;
retval = tmp.pop();//PUSHPOP278
tmp.push(retval);//PUSHPOP280
fn.push(["$L266", [new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L266":
scratch = retval;
retval = tmp.pop();//PUSHPOP280
tmp.push(retval);//PUSHPOP282
fn.push(["$L267", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L267":
scratch = retval;
retval = tmp.pop();//PUSHPOP282
tmp.push(retval);//PUSHPOP284
fn.push(["$L268", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L268":
scratch = retval;
retval = tmp.pop();//PUSHPOP284
tmp.push(retval);//PUSHPOP286
fn.push(["$L269", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L269":
scratch = retval;
retval = tmp.pop();//PUSHPOP286
tmp.push(retval);//PUSHPOP288
fn.push(["$L270", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(2, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L270":
scratch = retval;
retval = tmp.pop();//PUSHPOP288
tmp.push(retval);//PUSHPOP290
fn.push(["$L271", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Magenta", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L271":
scratch = retval;
retval = tmp.pop();//PUSHPOP290
tmp.push(retval);//PUSHPOP292
fn.push(["$L272", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L272":
scratch = retval;
retval = tmp.pop();//PUSHPOP292
tmp.push(retval);//PUSHPOP294
fn.push(["$L273", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L273":
scratch = retval;
retval = tmp.pop();//PUSHPOP294
tmp.push(retval);//PUSHPOP296
fn.push(["$L274", [new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L274":
scratch = retval;
retval = tmp.pop();//PUSHPOP296
tmp.push(retval);//PUSHPOP298
fn.push(["$L275", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L275":
scratch = retval;
retval = tmp.pop();//PUSHPOP298
tmp.push(retval);//PUSHPOP300
fn.push(["$L276", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L276":
scratch = retval;
retval = tmp.pop();//PUSHPOP300
tmp.push(retval);//PUSHPOP302
fn.push(["$L277", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L277":
scratch = retval;
retval = tmp.pop();//PUSHPOP302
tmp.push(retval);//PUSHPOP304
fn.push(["$L278", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L278":
scratch = retval;
retval = tmp.pop();//PUSHPOP304
tmp.push(retval);//PUSHPOP306
fn.push(["$L279", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Gray", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L279":
scratch = retval;
retval = tmp.pop();//PUSHPOP306
tmp.push(retval);//PUSHPOP308
fn.push(["$L280", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L280":
scratch = retval;
retval = tmp.pop();//PUSHPOP308
tmp.push(retval);//PUSHPOP310
fn.push(["$L281", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L281":
scratch = retval;
retval = tmp.pop();//PUSHPOP310
tmp.push(retval);//PUSHPOP312
fn.push(["$L282", [new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L282":
scratch = retval;
retval = tmp.pop();//PUSHPOP312
tmp.push(retval);//PUSHPOP314
fn.push(["$L283", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L283":
scratch = retval;
retval = tmp.pop();//PUSHPOP314
tmp.push(retval);//PUSHPOP316
fn.push(["$L284", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L284":
scratch = retval;
retval = tmp.pop();//PUSHPOP316
tmp.push(retval);//PUSHPOP318
fn.push(["$L285", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L285":
scratch = retval;
retval = tmp.pop();//PUSHPOP318
tmp.push(retval);//PUSHPOP320
fn.push(["$L286", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L286":
scratch = retval;
retval = tmp.pop();//PUSHPOP320
tmp.push(retval);//PUSHPOP322
fn.push(["$L287", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Cyan", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L287":
scratch = retval;
retval = tmp.pop();//PUSHPOP322
tmp.push(retval);//PUSHPOP324
fn.push(["$L288", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L288":
scratch = retval;
retval = tmp.pop();//PUSHPOP324
tmp.push(retval);//PUSHPOP326
fn.push(["$L289", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L289":
scratch = retval;
retval = tmp.pop();//PUSHPOP326
tmp.push(retval);//PUSHPOP328
fn.push(["$L290", [new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L290":
scratch = retval;
retval = tmp.pop();//PUSHPOP328
tmp.push(retval);//PUSHPOP330
fn.push(["$L291", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L291":
scratch = retval;
retval = tmp.pop();//PUSHPOP330
tmp.push(retval);//PUSHPOP332
fn.push(["$L292", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L292":
scratch = retval;
retval = tmp.pop();//PUSHPOP332
tmp.push(retval);//PUSHPOP334
fn.push(["$L293", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L293":
scratch = retval;
retval = tmp.pop();//PUSHPOP334
tmp.push(retval);//PUSHPOP336
fn.push(["$L294", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L294":
scratch = retval;
retval = tmp.pop();//PUSHPOP336
tmp.push(retval);//PUSHPOP338
fn.push(["$L295", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Green", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L295":
scratch = retval;
retval = tmp.pop();//PUSHPOP338
tmp.push(retval);//PUSHPOP340
fn.push(["$L296", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L296":
scratch = retval;
retval = tmp.pop();//PUSHPOP340
tmp.push(retval);//PUSHPOP342
fn.push(["$L297", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L297":
scratch = retval;
retval = tmp.pop();//PUSHPOP342
tmp.push(retval);//PUSHPOP344
fn.push(["$L298", [new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L298":
scratch = retval;
retval = tmp.pop();//PUSHPOP344
tmp.push(retval);//PUSHPOP346
fn.push(["$L299", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L299":
scratch = retval;
retval = tmp.pop();//PUSHPOP346
tmp.push(retval);//PUSHPOP348
fn.push(["$L300", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(20, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L300":
scratch = retval;
retval = tmp.pop();//PUSHPOP348
tmp.push(retval);//PUSHPOP350
fn.push(["$L301", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L301":
scratch = retval;
retval = tmp.pop();//PUSHPOP350
tmp.push(retval);//PUSHPOP352
fn.push(["$L302", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L302":
scratch = retval;
retval = tmp.pop();//PUSHPOP352
tmp.push(retval);//PUSHPOP354
fn.push(["$L303", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Blue", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L303":
scratch = retval;
retval = tmp.pop();//PUSHPOP354
tmp.push(retval);//PUSHPOP356
fn.push(["$L304", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L304":
scratch = retval;
retval = tmp.pop();//PUSHPOP356
tmp.push(retval);//PUSHPOP358
fn.push(["$L305", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L305":
scratch = retval;
retval = tmp.pop();//PUSHPOP358
tmp.push(retval);//PUSHPOP360
fn.push(["$L306", [new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L306":
scratch = retval;
retval = tmp.pop();//PUSHPOP360
tmp.push(retval);//PUSHPOP362
fn.push(["$L307", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L307":
scratch = retval;
retval = tmp.pop();//PUSHPOP362
tmp.push(retval);//PUSHPOP364
fn.push(["$L308", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L308":
scratch = retval;
retval = tmp.pop();//PUSHPOP364
tmp.push(retval);//PUSHPOP366
fn.push(["$L309", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L309":
scratch = retval;
retval = tmp.pop();//PUSHPOP366
tmp.push(retval);//PUSHPOP368
fn.push(["$L310", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(13, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L310":
scratch = retval;
retval = tmp.pop();//PUSHPOP368
tmp.push(retval);//PUSHPOP370
fn.push(["$L311", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Red", DATATYPES.DT_STRING)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L311":
scratch = retval;
retval = tmp.pop();//PUSHPOP370
tmp.push(retval);//PUSHPOP372
fn.push(["$L312", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(4, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L312":
scratch = retval;
retval = tmp.pop();//PUSHPOP372
tmp.push(retval);//PUSHPOP374
fn.push(["$L313", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L313":
scratch = retval;
retval = tmp.pop();//PUSHPOP374
fn.push(["$L314", [new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L314":
scratch = retval;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L258":
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

