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

case "program.exit":
retval = implprogram.exit.apply(env, fn[fn.length - 1][1]);
if (retval && retval.then) {
retval.next = "program.exit$0";
return retval;
}
case "program.exit$0":
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
  scratch = graphicswindow.keydown;
tmp.push(scratch);
scratch = env._handlekey;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.backgroundcolor;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(253, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(252, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(251, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L0", params.slice()]);
scratch = graphicswindow.getcolorfromrgb;
next = scratch.as_string();
break;
case "$L0":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L1":
scratch = new DataUnit("True", DATATYPES.DT_STRING);
if (scratch.as_bool()) {
next = "$L2";
} else {
next = "$L3";
}
break;
case "$L2":
scratch = env._boxes;
tmp.push(scratch);
scratch = new DataUnit(4, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._bwidth;
tmp.push(scratch);
scratch = new DataUnit(25, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._xoffset;
tmp.push(scratch);
scratch = new DataUnit(40, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._yoffset;
tmp.push(scratch);
scratch = new DataUnit(40, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._cwidth;
tmp.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._cheight;
tmp.push(scratch);
scratch = new DataUnit(20, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._startdelay;
tmp.push(scratch);
scratch = new DataUnit(800, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._enddelay;
tmp.push(scratch);
scratch = new DataUnit(175, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._preview_xpos;
tmp.push(scratch);
scratch = new DataUnit(13, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._preview_ypos;
tmp.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L4", params.slice()]);
scratch = graphicswindow.clear;
next = scratch.as_string();
break;
case "$L4":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.title;
tmp.push(scratch);
scratch = new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.height;
tmp.push(scratch);
scratch = new DataUnit(580, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.width;
tmp.push(scratch);
scratch = new DataUnit(700, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L5", params.slice()]);
scratch = graphicswindow.show;
next = scratch.as_string();
break;
case "$L5":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L6", params.slice()]);
scratch = env._setuptemplates;
next = scratch.as_string();
break;
case "$L6":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L7", params.slice()]);
scratch = env._setupcanvas;
next = scratch.as_string();
break;
case "$L7":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L8", params.slice()]);
scratch = env._mainloop;
next = scratch.as_string();
break;
case "$L8":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("Game Over", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L9", params.slice()]);
scratch = graphicswindow.showmessage;
next = scratch.as_string();
break;
case "$L9":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L10", params.slice()]);
scratch = program.exit;
next = scratch.as_string();
break;
case "$L10":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L1";
break;
case "$L3":
next = "$L11";
break;
case "_mainloop":
scratch = env._template;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(7, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L12", params.slice()]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L12":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L13", params.slice()]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L13":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L14", params.slice()]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L14":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._nextpiece;
tmp.push(scratch);
scratch = env._h;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._end;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._sessiondelay;
tmp.push(scratch);
scratch = env._startdelay;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L15":
scratch = env._end;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L16";
} else {
next = "$L17";
}
break;
case "$L16":
scratch = env._sessiondelay;
scratch = scratch.op_gt(env._enddelay);
if (scratch.as_bool()) {
next = "$L18";
} else {
next = "$L19";
}
break;
case "$L18":
scratch = env._sessiondelay;
tmp.push(scratch);
scratch = env._sessiondelay;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L19";
break;
case "$L19":
scratch = env._delay;
tmp.push(scratch);
scratch = env._sessiondelay;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._thispiece;
tmp.push(scratch);
scratch = env._nextpiece;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._template;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(7, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L20", params.slice()]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L20":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L21", params.slice()]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L21":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L22", params.slice()]);
scratch = env._createpiece;
next = scratch.as_string();
break;
case "$L22":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._nextpiece;
tmp.push(scratch);
scratch = env._h;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L23", params.slice()]);
scratch = env._drawpreviewpiece;
next = scratch.as_string();
break;
case "$L23":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._h;
tmp.push(scratch);
scratch = env._thispiece;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._ypos;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._done;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._xpos;
tmp.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L24", params.slice()]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L24":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._done;
scratch = scratch.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L25";
} else {
next = "$L26";
}
break;
case "$L25":
scratch = env._ypos;
tmp.push(scratch);
scratch = env._ypos;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L27", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L27":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._end;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L26";
break;
case "$L26":
scratch = env._yposdelta;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L28":
scratch = env._done;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(scratch);
scratch = env._yposdelta;
scratch = scratch.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L29";
} else {
next = "$L30";
}
break;
case "$L29":
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L31", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L31":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._delayindex;
tmp.push(scratch);
scratch = env._delay;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L32":
scratch = env._delayindex;
scratch = scratch.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(scratch);
scratch = env._delay;
scratch = scratch.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L33";
} else {
next = "$L34";
}
break;
case "$L33":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L35", params.slice()]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L35":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._delayindex;
tmp.push(scratch);
scratch = env._delayindex;
scratch = scratch.op_sub(new DataUnit(10, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L32";
break;
case "$L34":
scratch = env._yposdelta;
scratch = scratch.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L36";
} else {
next = "$L38";
}
break;
case "$L36":
scratch = env._yposdelta;
tmp.push(scratch);
scratch = env._yposdelta;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L37";
break;
case "$L38":
scratch = env._ypos;
tmp.push(scratch);
scratch = env._ypos;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L37";
break;
case "$L37":
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L39", params.slice()]);
scratch = env._checkstop;
next = scratch.as_string();
break;
case "$L39":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
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
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Escape", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L41";
} else {
next = "$L42";
}
break;
case "$L41":
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L43", params.slice()]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L43":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L42";
break;
case "$L42":
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Left", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L44";
} else {
next = "$L45";
}
break;
case "$L44":
scratch = env._movedirection;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L46", params.slice()]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L46":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._invalidmove;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L47";
} else {
next = "$L48";
}
break;
case "$L47":
scratch = env._xpos;
tmp.push(scratch);
scratch = env._xpos;
scratch = scratch.op_add(env._movedirection);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L48";
break;
case "$L48":
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L49", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L49":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L45";
break;
case "$L45":
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Right", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L50";
} else {
next = "$L51";
}
break;
case "$L50":
scratch = env._movedirection;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L52", params.slice()]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L52":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._invalidmove;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L53";
} else {
next = "$L54";
}
break;
case "$L53":
scratch = env._xpos;
tmp.push(scratch);
scratch = env._xpos;
scratch = scratch.op_add(env._movedirection);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L54";
break;
case "$L54":
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L55", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L55":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L51";
break;
case "$L51":
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Down", DATATYPES.DT_STRING));
tmp.push(scratch);
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Space", DATATYPES.DT_STRING));
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L56";
} else {
next = "$L57";
}
break;
case "$L56":
scratch = env._delay;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L57";
break;
case "$L57":
scratch = graphicswindow.lastkey;
scratch = scratch.op_eq(new DataUnit("Up", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L58";
} else {
next = "$L59";
}
break;
case "$L58":
scratch = env._basetemplate;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L60", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L60":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._template;
tmp.push(scratch);
scratch = new DataUnit("temptemplate", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._rotation;
tmp.push(scratch);
scratch = new DataUnit("CW", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L61", params.slice()]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L61":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
scratch = env._template;
params.push(scratch);
fn.push(["$L62", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L62":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._movedirection;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L63", params.slice()]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L63":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._xposbk;
tmp.push(scratch);
scratch = env._xpos;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._yposdelta;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L64":
scratch = env._yposdelta;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xposbk;
scratch = scratch.op_sub(env._xpos);
params.push(scratch);
fn.push(["$L67", params.slice()]);
scratch = math.abs;
next = scratch.as_string();
break;
case "$L67":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_lt(new DataUnit(3, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_cmpand(retval);
if (scratch.as_bool()) {
next = "$L65";
} else {
next = "$L66";
}
break;
case "$L65":
scratch = env._invalidmove;
scratch = scratch.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L68";
} else {
next = "$L70";
}
break;
case "$L68":
scratch = env._basetemplate;
tmp.push(scratch);
scratch = env._template;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._template;
tmp.push(scratch);
scratch = new DataUnit("rotatedtemplate", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
scratch = env._template;
params.push(scratch);
fn.push(["$L71", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L71":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._rotation;
tmp.push(scratch);
scratch = new DataUnit("COPY", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L72", params.slice()]);
scratch = env._copypiece;
next = scratch.as_string();
break;
case "$L72":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._yposdelta;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L73", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L73":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L69";
break;
case "$L70":
scratch = env._invalidmove;
scratch = scratch.op_eq(new DataUnit(2, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L74";
} else {
next = "$L75";
}
break;
case "$L74":
scratch = env._xpos;
tmp.push(scratch);
scratch = new DataUnit(99, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L69";
break;
case "$L75":
scratch = env._xpos;
tmp.push(scratch);
scratch = env._xpos;
scratch = scratch.op_sub(env._invalidmove);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L76", params.slice()]);
scratch = env._validatemove;
next = scratch.as_string();
break;
case "$L76":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L69";
break;
case "$L69":
next = "$L64";
break;
case "$L66":
scratch = env._invalidmove;
scratch = scratch.op_neq(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L77";
} else {
next = "$L78";
}
break;
case "$L77":
scratch = env._xpos;
tmp.push(scratch);
scratch = env._xposbk;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
scratch = env._basetemplate;
params.push(scratch);
fn.push(["$L79", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L79":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._template;
tmp.push(scratch);
scratch = new DataUnit("", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
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
scratch = env._xpos;
tmp.push(scratch);
scratch = env._preview_xpos;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._ypos;
tmp.push(scratch);
scratch = env._preview_ypos;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._h;
tmp.push(scratch);
scratch = env._nextpiece;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._xoffsetbk;
tmp.push(scratch);
scratch = env._xoffset;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._yoffsetbk;
tmp.push(scratch);
scratch = env._yoffset;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L81", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L81":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L82", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L82":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L83", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L83":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L84", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L84":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L85", params.slice()]);
scratch = env._movepiece;
next = scratch.as_string();
break;
case "$L85":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._xoffsetbk;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._yoffsetbk;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L80":
next = "$L86";
break;
case "_copypiece":
scratch = env._l;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L87", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L87":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._rotation;
scratch = scratch.op_eq(new DataUnit("CW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L88";
} else {
next = "$L90";
}
break;
case "$L88":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L91":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L92";
} else {
next = "$L93";
}
break;
case "$L92":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L94", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L94":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L95", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L95":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = env._l;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L96", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L96":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_sub(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = env._i;
params.push(scratch);
scratch = env._x;
scratch = scratch.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER));
scratch = scratch.op_add(env._y);
params.push(scratch);
fn.push(["$L97", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L97":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L91";
break;
case "$L93":
next = "$L89";
break;
case "$L90":
scratch = env._rotation;
scratch = scratch.op_eq(new DataUnit("CCW", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L98";
} else {
next = "$L99";
}
break;
case "$L98":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L100":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L101";
} else {
next = "$L102";
}
break;
case "$L101":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L103", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L103":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = env._l;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L104", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L104":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_sub(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L105", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L105":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = env._i;
params.push(scratch);
scratch = env._x;
scratch = scratch.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER));
scratch = scratch.op_add(env._y);
params.push(scratch);
fn.push(["$L106", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L106":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L100";
break;
case "$L102":
next = "$L89";
break;
case "$L99":
scratch = env._rotation;
scratch = scratch.op_eq(new DataUnit("COPY", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L107";
} else {
next = "$L108";
}
break;
case "$L107":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L109":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L110";
} else {
next = "$L111";
}
break;
case "$L110":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = env._i;
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L112", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L112":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L113", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L113":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L109";
break;
case "$L111":
next = "$L89";
break;
case "$L108":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("invalid parameter", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Error", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L114", params.slice()]);
scratch = graphicswindow.showmessage;
next = scratch.as_string();
break;
case "$L114":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L115", params.slice()]);
scratch = program.end;
next = scratch.as_string();
break;
case "$L115":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
next = "$L89";
break;
case "$L89":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L116", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L116":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L117", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L117":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L118", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L118":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L119", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L119":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L120", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L120":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L121", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L121":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._basetemplate;
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L122", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L122":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L123", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L123":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L86":
next = "$L124";
break;
case "_createpiece":
scratch = env._hcount;
tmp.push(scratch);
scratch = env._hcount;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._h;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("piece", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._hcount;
params.push(scratch);
fn.push(["$L125", params.slice()]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L125":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
scratch = env._template;
params.push(scratch);
fn.push(["$L126", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L126":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.penwidth;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.pencolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._template;
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L127", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L127":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L128":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L129";
} else {
next = "$L130";
}
break;
case "$L129":
scratch = env._s;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._bwidth;
params.push(scratch);
scratch = env._bwidth;
params.push(scratch);
fn.push(["$L131", params.slice()]);
scratch = shapes.addrectangle;
next = scratch.as_string();
break;
case "$L131":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._s;
params.push(scratch);
scratch = env._bwidth.op_neg();
params.push(scratch);
scratch = env._bwidth.op_neg();
params.push(scratch);
fn.push(["$L132", params.slice()]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L132":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = env._i;
params.push(scratch);
scratch = env._s;
params.push(scratch);
fn.push(["$L133", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L133":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
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
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L135":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L136";
} else {
next = "$L137";
}
break;
case "$L136":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L138", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L138":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L139", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L139":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L140", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L140":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L141", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L141":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L142", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L142":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._xpos;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
tmp.push(scratch);
scratch = env._x;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._ypos;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L143", params.slice()]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L143":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
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
scratch = env._i;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._invalidmove;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L145":
scratch = env._i;
scratch = scratch.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L146";
} else {
next = "$L147";
}
break;
case "$L146":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L148", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L148":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L149", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L149":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L150", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L150":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L151", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L151":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
scratch = scratch.op_add(env._xpos);
scratch = scratch.op_add(env._movedirection);
scratch = scratch.op_lt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L152";
} else {
next = "$L153";
}
break;
case "$L152":
scratch = env._invalidmove;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L153";
break;
case "$L153":
scratch = env._x;
scratch = scratch.op_add(env._xpos);
scratch = scratch.op_add(env._movedirection);
scratch = scratch.op_gte(env._cwidth);
if (scratch.as_bool()) {
next = "$L154";
} else {
next = "$L155";
}
break;
case "$L154":
scratch = env._invalidmove;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L155";
break;
case "$L155":
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x;
scratch = scratch.op_add(env._xpos);
scratch = scratch.op_add(env._movedirection);
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_add(env._ypos);
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L156", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L156":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L157";
} else {
next = "$L158";
}
break;
case "$L157":
scratch = env._invalidmove;
tmp.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L158";
break;
case "$L158":
scratch = env._i;
tmp.push(scratch);
scratch = env._i;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
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
scratch = env._done;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._i;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L160":
scratch = env._i;
scratch = scratch.op_lt(env._boxes);
if (scratch.as_bool()) {
next = "$L161";
} else {
next = "$L162";
}
break;
case "$L161":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L163", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L163":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L164", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L164":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L165", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L165":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L166", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L166":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
scratch = scratch.op_add(env._ypos);
scratch = scratch.op_gt(env._cheight);
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x;
scratch = scratch.op_add(env._xpos);
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_add(env._ypos);
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L167", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L167":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_neq(new DataUnit(".", DATATYPES.DT_STRING));
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_cmpor(retval);
if (scratch.as_bool()) {
next = "$L168";
} else {
next = "$L169";
}
break;
case "$L168":
scratch = env._done;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L169";
break;
case "$L169":
scratch = env._i;
tmp.push(scratch);
scratch = env._i;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L160";
break;
case "$L162":
scratch = env._done;
scratch = scratch.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L170";
} else {
next = "$L171";
}
break;
case "$L170":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(retval);
case "$L172":
scratch = env._i;
tmp.push(scratch);
scratch = env._boxes;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L173";
} else {
next = "$L174";
}
break;
case "$L173":
scratch = env._v;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L175", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L175":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L176", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L176":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
scratch = scratch.op_div(new DataUnit(10, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L177", params.slice()]);
scratch = math.floor;
next = scratch.as_string();
break;
case "$L177":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_add(env._xpos);
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._v;
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L178", params.slice()]);
scratch = math.remainder;
next = scratch.as_string();
break;
case "$L178":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_add(env._ypos);
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._h;
params.push(scratch);
scratch = env._i;
params.push(scratch);
fn.push(["$L179", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L179":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L180", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L180":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._i;
scratch.op_assign(scratch.op_add(retval));
next = "$L172";
break;
case "$L174":
scratch = env._score;
tmp.push(scratch);
scratch = env._score;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L181", params.slice()]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L181":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L182", params.slice()]);
scratch = env._deletelines;
next = scratch.as_string();
break;
case "$L182":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
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
scratch = env._linescleared;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._cheight;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = env._y;
scratch.op_assign(retval);
case "$L184":
scratch = env._y;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._cheight;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L185";
} else {
next = "$L186";
}
break;
case "$L185":
scratch = env._x;
tmp.push(scratch);
scratch = env._cwidth;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L187":
scratch = env._x;
scratch = scratch.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L188";
} else {
next = "$L189";
}
break;
case "$L188":
scratch = env._x;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
case "$L190":
scratch = env._x;
scratch = scratch.op_lt(env._cwidth);
if (scratch.as_bool()) {
next = "$L191";
} else {
next = "$L192";
}
break;
case "$L191":
scratch = env._piece;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x;
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L193", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L193":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._piece;
scratch = scratch.op_eq(new DataUnit(".", DATATYPES.DT_STRING));
if (scratch.as_bool()) {
next = "$L194";
} else {
next = "$L195";
}
break;
case "$L194":
scratch = env._x;
tmp.push(scratch);
scratch = env._cwidth;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L195";
break;
case "$L195":
scratch = env._x;
tmp.push(scratch);
scratch = env._x;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
next = "$L190";
break;
case "$L192":
scratch = env._x;
scratch = scratch.op_eq(env._cwidth);
if (scratch.as_bool()) {
next = "$L196";
} else {
next = "$L197";
}
break;
case "$L196":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x1;
scratch.op_assign(retval);
case "$L198":
scratch = env._x1;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L199";
} else {
next = "$L200";
}
break;
case "$L199":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x1;
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L201", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L201":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L202", params.slice()]);
scratch = shapes.remove;
next = scratch.as_string();
break;
case "$L202":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L198";
break;
case "$L200":
scratch = env._linescleared;
tmp.push(scratch);
scratch = env._linescleared;
scratch = scratch.op_add(new DataUnit(1, DATATYPES.DT_NUMBER));
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
retval = scratch;
scratch = env._y1;
scratch.op_assign(retval);
case "$L203":
scratch = env._y1;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._y;
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L204";
} else {
next = "$L205";
}
break;
case "$L204":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x1;
scratch.op_assign(retval);
case "$L206":
scratch = env._x1;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L207";
} else {
next = "$L208";
}
break;
case "$L207":
scratch = env._piece;
tmp.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x1;
tmp.push(scratch);
scratch = env._y1;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L209", params.slice()]);
scratch = array.getvalue;
next = scratch.as_string();
break;
case "$L209":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x1;
tmp.push(scratch);
scratch = env._y1;
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._piece;
params.push(scratch);
fn.push(["$L210", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L210":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._piece;
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._piece;
params.push(scratch);
fn.push(["$L211", params.slice()]);
scratch = shapes.getleft;
next = scratch.as_string();
break;
case "$L211":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._piece;
params.push(scratch);
fn.push(["$L212", params.slice()]);
scratch = shapes.gettop;
next = scratch.as_string();
break;
case "$L212":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = scratch.op_add(env._bwidth);
params.push(scratch);
fn.push(["$L213", params.slice()]);
scratch = shapes.move;
next = scratch.as_string();
break;
case "$L213":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x1;
scratch.op_assign(scratch.op_add(retval));
next = "$L206";
break;
case "$L208":
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
retval = scratch;
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
scratch = new DataUnit(1, DATATYPES.DT_NUMBER).op_neg();
retval = scratch;
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L184";
break;
case "$L186":
scratch = env._linescleared;
scratch = scratch.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER));
if (scratch.as_bool()) {
next = "$L214";
} else {
next = "$L215";
}
break;
case "$L214":
scratch = env._score;
tmp.push(scratch);
scratch = env._score;
tmp.push(scratch);
scratch = new DataUnit(100, DATATYPES.DT_NUMBER);
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._linescleared;
scratch = scratch.op_mul(new DataUnit(2.15, DATATYPES.DT_NUMBER));
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L216", params.slice()]);
scratch = math.round;
next = scratch.as_string();
break;
case "$L216":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_mul(retval);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L217", params.slice()]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L217":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
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
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = graphicswindow.backgroundcolor;
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
params.push(scratch);
scratch = env._yoffset;
params.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
params.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
params.push(scratch);
fn.push(["$L219", params.slice()]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L219":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(200, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L220", params.slice()]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L220":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.penwidth;
tmp.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.pencolor;
tmp.push(scratch);
scratch = new DataUnit("Pink", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x;
scratch.op_assign(retval);
case "$L221":
scratch = env._x;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L222";
} else {
next = "$L223";
}
break;
case "$L222":
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._y;
scratch.op_assign(retval);
case "$L224":
scratch = env._y;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER));
retval = scratch;
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : (scratch.op_gte(retval).as_bool()) ) {
next = "$L225";
} else {
next = "$L226";
}
break;
case "$L225":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("c", DATATYPES.DT_STRING);
params.push(scratch);
scratch = env._x;
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_mul(env._cwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = new DataUnit(".", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L227", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L227":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._x;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._y;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._bwidth;
params.push(scratch);
scratch = env._bwidth;
params.push(scratch);
fn.push(["$L228", params.slice()]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L228":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._y;
scratch.op_assign(scratch.op_add(retval));
next = "$L224";
break;
case "$L226":
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
retval = scratch;
scratch = env._x;
scratch.op_assign(scratch.op_add(retval));
next = "$L221";
break;
case "$L223":
scratch = graphicswindow.penwidth;
tmp.push(scratch);
scratch = new DataUnit(4, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.pencolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
params.push(scratch);
scratch = env._yoffset;
params.push(scratch);
scratch = env._xoffset;
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L229", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L229":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._yoffset;
params.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L230", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L230":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
params.push(scratch);
fn.push(["$L231", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L231":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.pencolor;
tmp.push(scratch);
scratch = new DataUnit("Lime", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
scratch = scratch.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
params.push(scratch);
scratch = env._xoffset;
scratch = scratch.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(6, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L232", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L232":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
params.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(6, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L233", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L233":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._xoffset;
scratch = scratch.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._cwidth;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._cheight;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_add(new DataUnit(4, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L234", params.slice()]);
scratch = graphicswindow.drawline;
next = scratch.as_string();
break;
case "$L234":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.pencolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Pink", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._x;
tmp.push(scratch);
scratch = env._xoffset;
tmp.push(scratch);
scratch = env._preview_xpos;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_sub(env._bwidth);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._y;
tmp.push(scratch);
scratch = env._yoffset;
tmp.push(scratch);
scratch = env._preview_ypos;
scratch = scratch.op_mul(env._bwidth);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
scratch = scratch.op_sub(env._bwidth);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
params.push(scratch);
scratch = env._y;
params.push(scratch);
scratch = env._bwidth;
scratch = scratch.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._bwidth;
scratch = scratch.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L235", params.slice()]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L235":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
params.push(scratch);
scratch = env._y;
params.push(scratch);
scratch = env._bwidth;
scratch = scratch.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._bwidth;
scratch = scratch.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER));
params.push(scratch);
fn.push(["$L236", params.slice()]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L236":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(190, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit(310, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(170, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L237", params.slice()]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L237":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(190, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit(310, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(170, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L238", params.slice()]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L238":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontitalic;
tmp.push(scratch);
scratch = new DataUnit("False", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontname;
tmp.push(scratch);
scratch = new DataUnit("Comic Sans MS", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontsize;
tmp.push(scratch);
scratch = new DataUnit(16, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(200, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Game control keys:", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L239", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L239":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_add(new DataUnit(25, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(220, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Left Arrow = Move piece left", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L240", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L240":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_add(new DataUnit(25, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(240, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Right Arrow = Move piece right", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L241", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L241":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_add(new DataUnit(25, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(260, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Up Arrow = Rotate piece", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L242", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L242":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_add(new DataUnit(25, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(280, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Down Arrow = Drop piece", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L243", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L243":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(320, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Press to stop game", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L244", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L244":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(200, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L245", params.slice()]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L245":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontname;
tmp.push(scratch);
scratch = new DataUnit("Georgia", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontitalic;
tmp.push(scratch);
scratch = new DataUnit("True", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontsize;
tmp.push(scratch);
scratch = new DataUnit(36, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(400, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L246", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L246":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(200, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L247", params.slice()]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L247":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.fontsize;
tmp.push(scratch);
scratch = new DataUnit(16, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._x;
scratch = scratch.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = env._y;
scratch = scratch.op_add(new DataUnit(440, DATATYPES.DT_NUMBER));
params.push(scratch);
scratch = new DataUnit("ver.0.1", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L248", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L248":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(200, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L249", params.slice()]);
scratch = program.delay;
next = scratch.as_string();
break;
case "$L249":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = env._score;
tmp.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
fn.push(["$L250", params.slice()]);
scratch = env._printscore;
next = scratch.as_string();
break;
case "$L250":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L218":
next = "$L251";
break;
case "_printscore":
scratch = graphicswindow.penwidth;
tmp.push(scratch);
scratch = new DataUnit(4, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Pink", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(500, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(65, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(153, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(50, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L252", params.slice()]);
scratch = graphicswindow.fillrectangle;
next = scratch.as_string();
break;
case "$L252":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(500, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(65, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(153, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(50, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L253", params.slice()]);
scratch = graphicswindow.drawrectangle;
next = scratch.as_string();
break;
case "$L253":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
scratch = graphicswindow.fontitalic;
tmp.push(scratch);
scratch = new DataUnit("False", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontsize;
tmp.push(scratch);
scratch = new DataUnit(32, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.fontname;
tmp.push(scratch);
scratch = new DataUnit("Impact", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = graphicswindow.brushcolor;
tmp.push(scratch);
scratch = new DataUnit("Black", DATATYPES.DT_STRING);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit(505, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(70, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("00000000", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(8, DATATYPES.DT_NUMBER);
tmp.push(scratch);
tmp.push(retval);
tmp.push(params);
params = [];
scratch = env._score;
params.push(scratch);
fn.push(["$L254", params.slice()]);
scratch = text.getlength;
next = scratch.as_string();
break;
case "$L254":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_sub(retval);
params.push(scratch);
fn.push(["$L255", params.slice()]);
scratch = text.getsubtext;
next = scratch.as_string();
break;
case "$L255":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
scratch = env._score;
params.push(scratch);
fn.push(["$L256", params.slice()]);
scratch = text.append;
next = scratch.as_string();
break;
case "$L256":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
params.push(scratch);
fn.push(["$L257", params.slice()]);
scratch = graphicswindow.drawtext;
next = scratch.as_string();
break;
case "$L257":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
retval = new DataUnit();
next = fn.pop()[0];
break;
case "$L251":
next = "$L258";
break;
case "_setuptemplates":
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L259", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L259":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L260", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L260":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L261", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L261":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(22, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L262", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L262":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Yellow", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L263", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L263":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L264", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L264":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER).op_neg();
params.push(scratch);
fn.push(["$L265", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L265":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template1", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L266", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L266":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L267", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L267":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L268", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L268":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L269", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L269":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L270", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L270":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Magenta", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L271", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L271":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L272", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L272":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L273", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L273":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template2", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L274", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L274":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L275", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L275":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L276", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L276":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L277", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L277":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(21, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L278", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L278":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Gray", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L279", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L279":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L280", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L280":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L281", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L281":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template3", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(25, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L282", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L282":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L283", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L283":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L284", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L284":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L285", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L285":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L286", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L286":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Cyan", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L287", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L287":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L288", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L288":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L289", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L289":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template4", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(25, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L290", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L290":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L291", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L291":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L292", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L292":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L293", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L293":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(21, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L294", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L294":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Green", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L295", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L295":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L296", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L296":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L297", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L297":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template5", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(25, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L298", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L298":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L299", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L299":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(20, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L300", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L300":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L301", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L301":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L302", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L302":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Blue", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L303", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L303":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L304", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L304":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L305", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L305":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template6", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(25, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L306", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L306":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(10, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L307", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L307":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(1, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(11, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L308", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L308":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(2, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(12, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L309", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L309":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER);
params.push(scratch);
scratch = new DataUnit(13, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L310", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L310":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("color", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("Red", DATATYPES.DT_STRING);
params.push(scratch);
fn.push(["$L311", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L311":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("dim", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(4, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L312", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L312":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewx", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L313", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L313":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
tmp.push(retval);
tmp.push(params);
params = [];
scratch = new DataUnit("template7", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit("pviewy", DATATYPES.DT_STRING);
params.push(scratch);
scratch = new DataUnit(0, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L314", params.slice()]);
scratch = array.setvalue;
next = scratch.as_string();
break;
case "$L314":
scratch = retval;
params = tmp.pop();
retval = tmp.pop();;
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

