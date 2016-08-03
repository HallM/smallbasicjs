// 'use strict';

//const bluebird = require('bluebird');
//const DataUnit = require('./runtime/data-unit').DataUnit;
//const DATATYPES = require('./runtime/data-unit').DATATYPES;

function runnable() {
  function* execute() {
    const env = {
      _handlekey: new DataUnit($_handlekey, DATATYPES.DT_FN),
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
      _setuptemplates: new DataUnit($_setuptemplates, DATATYPES.DT_FN),
      _setupcanvas: new DataUnit($_setupcanvas, DATATYPES.DT_FN),
      _mainloop: new DataUnit($_mainloop, DATATYPES.DT_FN),
      _template: new DataUnit(),
      _createpiece: new DataUnit($_createpiece, DATATYPES.DT_FN),
      _nextpiece: new DataUnit(),
      _h: new DataUnit(),
      _end: new DataUnit(),
      _sessiondelay: new DataUnit(),
      _delay: new DataUnit(),
      _thispiece: new DataUnit(),
      _drawpreviewpiece: new DataUnit($_drawpreviewpiece, DATATYPES.DT_FN),
      _ypos: new DataUnit(),
      _done: new DataUnit(),
      _xpos: new DataUnit(),
      _checkstop: new DataUnit($_checkstop, DATATYPES.DT_FN),
      _movepiece: new DataUnit($_movepiece, DATATYPES.DT_FN),
      _yposdelta: new DataUnit(),
      _delayindex: new DataUnit(),
      _movedirection: new DataUnit(),
      _validatemove: new DataUnit($_validatemove, DATATYPES.DT_FN),
      _invalidmove: new DataUnit(),
      _basetemplate: new DataUnit(),
      _rotation: new DataUnit(),
      _copypiece: new DataUnit($_copypiece, DATATYPES.DT_FN),
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
      _printscore: new DataUnit($_printscore, DATATYPES.DT_FN),
      _deletelines: new DataUnit($_deletelines, DATATYPES.DT_FN),
      _linescleared: new DataUnit(),
      _piece: new DataUnit(),
      _x1: new DataUnit(),
      _y1: new DataUnit()
    };

    // const array = require('./runtime/array')(env);
    // const graphicswindow = require('./runtime/graphicswindow')(env);
    // const math = require('./runtime/math')(env);
    // const program = require('./runtime/program')(env);
    // const shapes = require('./runtime/shapes')(env);
    // const text = require('./runtime/text')(env);
    const array = arrayFactory(env);
    const graphicswindow = graphicswindowFactory(env);
    const math = mathFactory(env);
    const program = programFactory(env);
    const shapes = shapesFactory(env);
    const text = textFactory(env);

    graphicswindow.keydown.op_assign(env._handlekey);
    graphicswindow.backgroundcolor.op_assign((yield* graphicswindow.getcolorfromrgb.op_call([new DataUnit(253, DATATYPES.DT_NUMBER), new DataUnit(252, DATATYPES.DT_NUMBER), new DataUnit(251, DATATYPES.DT_NUMBER)])));
    while (new DataUnit("True", DATATYPES.DT_STRING).as_bool()) {
      env._boxes.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
      env._bwidth.op_assign(new DataUnit(25, DATATYPES.DT_NUMBER));
      env._xoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
      env._yoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
      env._cwidth.op_assign(new DataUnit(10, DATATYPES.DT_NUMBER));
      env._cheight.op_assign(new DataUnit(20, DATATYPES.DT_NUMBER));
      env._startdelay.op_assign(new DataUnit(800, DATATYPES.DT_NUMBER));
      env._enddelay.op_assign(new DataUnit(175, DATATYPES.DT_NUMBER));
      env._preview_xpos.op_assign(new DataUnit(13, DATATYPES.DT_NUMBER));
      env._preview_ypos.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
      (yield* graphicswindow.clear.op_call([]));
      graphicswindow.title.op_assign(new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING));
      graphicswindow.height.op_assign(new DataUnit(580, DATATYPES.DT_NUMBER));
      graphicswindow.width.op_assign(new DataUnit(700, DATATYPES.DT_NUMBER));
      (yield* graphicswindow.show.op_call([]));
      (yield* env._setuptemplates.op_call([]));
      (yield* env._setupcanvas.op_call([]));
      (yield* env._mainloop.op_call([]));
      (yield* graphicswindow.showmessage.op_call([new DataUnit("Game Over", DATATYPES.DT_STRING), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]));
    }

    function* $_mainloop() {
      env._template.op_assign((yield* text.append.op_call([new DataUnit("template", DATATYPES.DT_STRING), (yield* math.getrandomnumber.op_call([new DataUnit(7, DATATYPES.DT_NUMBER)]))])));
      (yield* env._createpiece.op_call([]));
      env._nextpiece.op_assign(env._h);
      env._end.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      env._sessiondelay.op_assign(env._startdelay);
      while ((env._end.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        if ((env._sessiondelay.op_gt(env._enddelay)).as_bool()) {
          env._sessiondelay.op_assign((env._sessiondelay.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
        }

        env._delay.op_assign(env._sessiondelay);
        env._thispiece.op_assign(env._nextpiece);
        env._template.op_assign((yield* text.append.op_call([new DataUnit("template", DATATYPES.DT_STRING), (yield* math.getrandomnumber.op_call([new DataUnit(7, DATATYPES.DT_NUMBER)]))])));
        (yield* env._createpiece.op_call([]));
        env._nextpiece.op_assign(env._h);
        (yield* env._drawpreviewpiece.op_call([]));
        env._h.op_assign(env._thispiece);
        env._ypos.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        env._xpos.op_assign(new DataUnit(3, DATATYPES.DT_NUMBER));
        (yield* env._checkstop.op_call([]));
        if ((env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER))).as_bool()) {
          env._ypos.op_assign((env._ypos.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
          (yield* env._movepiece.op_call([]));
          env._end.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
        }

        env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        while (((env._done.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpor((env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))))).as_bool()) {
          (yield* env._movepiece.op_call([]));
          env._delayindex.op_assign(env._delay);
          while (((env._delayindex.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpand((env._delay.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))))).as_bool()) {
            (yield* program.delay.op_call([new DataUnit(10, DATATYPES.DT_NUMBER)]));
            env._delayindex.op_assign((env._delayindex.op_sub(new DataUnit(10, DATATYPES.DT_NUMBER))));
          }

          if ((env._yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
            env._yposdelta.op_assign((env._yposdelta.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
          } else {
            env._ypos.op_assign((env._ypos.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
          }

          (yield* env._checkstop.op_call([]));
        }

      }

      return new DataUnit();
    }

    function* $_handlekey() {
      if ((graphicswindow.lastkey.op_eq(new DataUnit("Escape", DATATYPES.DT_STRING))).as_bool()) {
        (yield* program.end.op_call([]));
      }

      if ((graphicswindow.lastkey.op_eq(new DataUnit("Left", DATATYPES.DT_STRING))).as_bool()) {
        env._movedirection.op_assign((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()));
        (yield* env._validatemove.op_call([]));
        if ((env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          env._xpos.op_assign((env._xpos.op_add(env._movedirection)));
        }

        (yield* env._movepiece.op_call([]));
      }

      if ((graphicswindow.lastkey.op_eq(new DataUnit("Right", DATATYPES.DT_STRING))).as_bool()) {
        env._movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
        (yield* env._validatemove.op_call([]));
        if ((env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          env._xpos.op_assign((env._xpos.op_add(env._movedirection)));
        }

        (yield* env._movepiece.op_call([]));
      }

      if (((graphicswindow.lastkey.op_eq(new DataUnit("Down", DATATYPES.DT_STRING))).op_cmpor((graphicswindow.lastkey.op_eq(new DataUnit("Space", DATATYPES.DT_STRING))))).as_bool()) {
        env._delay.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      }

      if ((graphicswindow.lastkey.op_eq(new DataUnit("Up", DATATYPES.DT_STRING))).as_bool()) {
        env._basetemplate.op_assign((yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])));
        env._template.op_assign(new DataUnit("temptemplate", DATATYPES.DT_STRING));
        env._rotation.op_assign(new DataUnit("CW", DATATYPES.DT_STRING));
        (yield* env._copypiece.op_call([]));
        (yield* array.setvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), env._template]));
        env._movedirection.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        (yield* env._validatemove.op_call([]));
        env._xposbk.op_assign(env._xpos);
        env._yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        while (((env._yposdelta.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpand(((yield* math.abs.op_call([(env._xposbk.op_sub(env._xpos))])).op_lt(new DataUnit(3, DATATYPES.DT_NUMBER))))).as_bool()) {
          if ((env._invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
            env._basetemplate.op_assign(env._template);
            env._template.op_assign(new DataUnit("rotatedtemplate", DATATYPES.DT_STRING));
            (yield* array.setvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), env._template]));
            env._rotation.op_assign(new DataUnit("COPY", DATATYPES.DT_STRING));
            (yield* env._copypiece.op_call([]));
            env._yposdelta.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
            (yield* env._movepiece.op_call([]));
          } else if ((env._invalidmove.op_eq(new DataUnit(2, DATATYPES.DT_NUMBER))).as_bool()){
            env._xpos.op_assign(new DataUnit(99, DATATYPES.DT_NUMBER));
          } else {
            env._xpos.op_assign((env._xpos.op_sub(env._invalidmove)));
            (yield* env._validatemove.op_call([]));
          }

        }

        if ((env._invalidmove.op_neq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          env._xpos.op_assign(env._xposbk);
          (yield* array.setvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), env._basetemplate]));
          env._template.op_assign(new DataUnit("", DATATYPES.DT_STRING));
        }

      }

      return new DataUnit();
    }

    function* $_drawpreviewpiece() {
      env._xpos.op_assign(env._preview_xpos);
      env._ypos.op_assign(env._preview_ypos);
      env._h.op_assign(env._nextpiece);
      env._xoffsetbk.op_assign(env._xoffset);
      env._yoffsetbk.op_assign(env._yoffset);
      env._xoffset.op_assign((env._xoffset.op_add((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), new DataUnit("pviewx", DATATYPES.DT_STRING)])))));
      env._yoffset.op_assign((env._yoffset.op_add((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), new DataUnit("pviewy", DATATYPES.DT_STRING)])))));
      (yield* env._movepiece.op_call([]));
      env._xoffset.op_assign(env._xoffsetbk);
      env._yoffset.op_assign(env._yoffsetbk);
      return new DataUnit();
    }

    function* $_copypiece() {
      env._l.op_assign((yield* array.getvalue.op_call([env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)])));
      if ((env._rotation.op_eq(new DataUnit("CW", DATATYPES.DT_STRING))).as_bool()) {
        for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
          env._v.op_assign((yield* array.getvalue.op_call([env._basetemplate, env._i])));
          env._x.op_assign((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
          env._y.op_assign(((env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_sub((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])))));
          (yield* array.setvalue.op_call([env._template, env._i, ((env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER))).op_add(env._y))]));
        }

      } else if ((env._rotation.op_eq(new DataUnit("CCW", DATATYPES.DT_STRING))).as_bool()){
        for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
          env._v.op_assign((yield* array.getvalue.op_call([env._basetemplate, env._i])));
          env._x.op_assign(((env._l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_sub((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])))));
          env._y.op_assign((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
          (yield* array.setvalue.op_call([env._template, env._i, ((env._x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER))).op_add(env._y))]));
        }

      } else if ((env._rotation.op_eq(new DataUnit("COPY", DATATYPES.DT_STRING))).as_bool()){
        for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
          (yield* array.setvalue.op_call([env._template, env._i, (yield* array.getvalue.op_call([env._basetemplate, env._i]))]));
        }

      } else {
        (yield* graphicswindow.showmessage.op_call([new DataUnit("invalid parameter", DATATYPES.DT_STRING), new DataUnit("Error", DATATYPES.DT_STRING)]));
        (yield* program.end.op_call([]));
      }

      (yield* array.setvalue.op_call([env._template, new DataUnit("color", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([env._basetemplate, new DataUnit("color", DATATYPES.DT_STRING)]))]));
      (yield* array.setvalue.op_call([env._template, new DataUnit("dim", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([env._basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]))]));
      (yield* array.setvalue.op_call([env._template, new DataUnit("pviewx", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([env._basetemplate, new DataUnit("pviewx", DATATYPES.DT_STRING)]))]));
      (yield* array.setvalue.op_call([env._template, new DataUnit("pviewy", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([env._basetemplate, new DataUnit("pviewy", DATATYPES.DT_STRING)]))]));
      return new DataUnit();
    }

    function* $_createpiece() {
      env._hcount.op_assign((env._hcount.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
      env._h.op_assign((yield* text.append.op_call([new DataUnit("piece", DATATYPES.DT_STRING), env._hcount])));
      (yield* array.setvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), env._template]));
      graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
      graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      graphicswindow.brushcolor.op_assign((yield* array.getvalue.op_call([env._template, new DataUnit("color", DATATYPES.DT_STRING)])));
      for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        env._s.op_assign((yield* shapes.addrectangle.op_call([env._bwidth, env._bwidth])));
        (yield* shapes.move.op_call([env._s, (env._bwidth.op_neg()), (env._bwidth.op_neg())]));
        (yield* array.setvalue.op_call([env._h, env._i, env._s]));
      }

      return new DataUnit();
    }

    function* $_movepiece() {
      for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        env._v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), env._i])));
        env._x.op_assign((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
        env._y.op_assign((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
        (yield* shapes.move.op_call([(yield* array.getvalue.op_call([env._h, env._i])), ((env._xoffset.op_add((env._xpos.op_mul(env._bwidth)))).op_add((env._x.op_mul(env._bwidth)))), ((env._yoffset.op_add((env._ypos.op_mul(env._bwidth)))).op_add((env._y.op_mul(env._bwidth))))]));
      }

      return new DataUnit();
    }

    function* $_validatemove() {
      env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      env._invalidmove.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      while ((env._i.op_lt(env._boxes)).as_bool()) {
        env._v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), env._i])));
        env._x.op_assign((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
        env._y.op_assign((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
        if ((((env._x.op_add(env._xpos)).op_add(env._movedirection)).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          env._invalidmove.op_assign((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()));
          env._i.op_assign(env._boxes);
        }

        if ((((env._x.op_add(env._xpos)).op_add(env._movedirection)).op_gte(env._cwidth)).as_bool()) {
          env._invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
          env._i.op_assign(env._boxes);
        }

        if (((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (((env._x.op_add(env._xpos)).op_add(env._movedirection)).op_add(((env._y.op_add(env._ypos)).op_mul(env._cwidth))))])).op_neq(new DataUnit(".", DATATYPES.DT_STRING))).as_bool()) {
          env._invalidmove.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
          env._i.op_assign(env._boxes);
        }

        env._i.op_assign((env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
      }

      return new DataUnit();
    }

    function* $_checkstop() {
      env._done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      while ((env._i.op_lt(env._boxes)).as_bool()) {
        env._v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), env._i])));
        env._x.op_assign((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
        env._y.op_assign((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
        if ((((env._y.op_add(env._ypos)).op_gt(env._cheight)).op_cmpor(((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), ((env._x.op_add(env._xpos)).op_add(((env._y.op_add(env._ypos)).op_mul(env._cwidth))))])).op_neq(new DataUnit(".", DATATYPES.DT_STRING))))).as_bool()) {
          env._done.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
          env._i.op_assign(env._boxes);
        }

        env._i.op_assign((env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
      }

      if ((env._done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER))).as_bool()) {
        for (env._i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._i.op_lt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._i.op_gt((env._boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._i.op_assign(env._i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
          env._v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([env._h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), env._i])));
          (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (((yield* math.floor.op_call([(env._v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])).op_add(env._xpos)).op_add(((((yield* math.remainder.op_call([env._v, new DataUnit(10, DATATYPES.DT_NUMBER)])).op_add(env._ypos)).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_mul(env._cwidth)))), (yield* array.getvalue.op_call([env._h, env._i]))]));
        }

        env._score.op_assign((env._score.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
        (yield* env._printscore.op_call([]));
        (yield* env._deletelines.op_call([]));
      }

      return new DataUnit();
    }

    function* $_deletelines() {
      env._linescleared.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      for (env._y.op_assign((env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
((env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER)).as_bool() ? (env._y.op_lt(new DataUnit(0, DATATYPES.DT_NUMBER))) : (env._y.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER)))).as_bool();
 env._y.op_assign(env._y.op_add((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())))) {
        env._x.op_assign(env._cwidth);
        while ((env._x.op_eq(env._cwidth)).as_bool()) {
          env._x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
          while ((env._x.op_lt(env._cwidth)).as_bool()) {
            env._piece.op_assign((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (env._x.op_add((env._y.op_mul(env._cwidth))))])));
            if ((env._piece.op_eq(new DataUnit(".", DATATYPES.DT_STRING))).as_bool()) {
              env._x.op_assign(env._cwidth);
            }

            env._x.op_assign((env._x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
          }

          if ((env._x.op_eq(env._cwidth)).as_bool()) {
            for (env._x1.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._x1.op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._x1.op_gt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._x1.op_assign(env._x1.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
              (yield* shapes.remove.op_call([(yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (env._x1.op_add((env._y.op_mul(env._cwidth))))]))]));
            }

            env._linescleared.op_assign((env._linescleared.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
            for (env._y1.op_assign(env._y);
(env._y.op_lt(new DataUnit(1, DATATYPES.DT_NUMBER)).as_bool() ? (env._y1.op_lt(new DataUnit(1, DATATYPES.DT_NUMBER))) : (env._y1.op_gt(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool();
 env._y1.op_assign(env._y1.op_add((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())))) {
              for (env._x1.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._x1.op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._x1.op_gt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._x1.op_assign(env._x1.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
                env._piece.op_assign((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (env._x1.op_add(((env._y1.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_mul(env._cwidth))))])));
                (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (env._x1.op_add((env._y1.op_mul(env._cwidth)))), env._piece]));
                (yield* shapes.move.op_call([env._piece, (yield* shapes.getleft.op_call([env._piece])), ((yield* shapes.gettop.op_call([env._piece])).op_add(env._bwidth))]));
              }

            }

          }

        }

      }

      if ((env._linescleared.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        env._score.op_assign((env._score.op_add((new DataUnit(100, DATATYPES.DT_NUMBER).op_mul((yield* math.round.op_call([((env._linescleared.op_mul(new DataUnit(2.15, DATATYPES.DT_NUMBER))).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))])))))));
        (yield* env._printscore.op_call([]));
      }

      return new DataUnit();
    }

    function* $_setupcanvas() {
      graphicswindow.brushcolor.op_assign(graphicswindow.backgroundcolor);
      (yield* graphicswindow.fillrectangle.op_call([env._xoffset, env._yoffset, (env._cwidth.op_mul(env._bwidth)), (env._cheight.op_mul(env._bwidth))]));
      (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
      graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
      graphicswindow.pencolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
      for (env._x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._x.op_lt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._x.op_gt((env._cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._x.op_assign(env._x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        for (env._y.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (env._y.op_lt((env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (env._y.op_gt((env._cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 env._y.op_assign(env._y.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
          (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (env._x.op_add((env._y.op_mul(env._cwidth)))), new DataUnit(".", DATATYPES.DT_STRING)]));
          (yield* graphicswindow.drawrectangle.op_call([(env._xoffset.op_add((env._x.op_mul(env._bwidth)))), (env._yoffset.op_add((env._y.op_mul(env._bwidth)))), env._bwidth, env._bwidth]));
        }

      }

      graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
      graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      (yield* graphicswindow.drawline.op_call([env._xoffset, env._yoffset, env._xoffset, (env._yoffset.op_add((env._cheight.op_mul(env._bwidth))))]));
      (yield* graphicswindow.drawline.op_call([(env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))), env._yoffset, (env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))), (env._yoffset.op_add((env._cheight.op_mul(env._bwidth))))]));
      (yield* graphicswindow.drawline.op_call([env._xoffset, (env._yoffset.op_add((env._cheight.op_mul(env._bwidth)))), (env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))), (env._yoffset.op_add((env._cheight.op_mul(env._bwidth))))]));
      graphicswindow.pencolor.op_assign(new DataUnit("Lime", DATATYPES.DT_STRING));
      (yield* graphicswindow.drawline.op_call([(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), env._yoffset, (env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), ((env._yoffset.op_add((env._cheight.op_mul(env._bwidth)))).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
      (yield* graphicswindow.drawline.op_call([((env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), env._yoffset, ((env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((env._yoffset.op_add((env._cheight.op_mul(env._bwidth)))).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
      (yield* graphicswindow.drawline.op_call([(env._xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), ((env._yoffset.op_add((env._cheight.op_mul(env._bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((env._xoffset.op_add((env._cwidth.op_mul(env._bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((env._yoffset.op_add((env._cheight.op_mul(env._bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)))]));
      graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
      env._x.op_assign(((env._xoffset.op_add((env._preview_xpos.op_mul(env._bwidth)))).op_sub(env._bwidth)));
      env._y.op_assign(((env._yoffset.op_add((env._preview_ypos.op_mul(env._bwidth)))).op_sub(env._bwidth)));
      (yield* graphicswindow.fillrectangle.op_call([env._x, env._y, (env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER))), (env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
      (yield* graphicswindow.drawrectangle.op_call([env._x, env._y, (env._bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER))), (env._bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
      (yield* graphicswindow.fillrectangle.op_call([(env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER))), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]));
      (yield* graphicswindow.drawrectangle.op_call([(env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER))), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]));
      graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
      graphicswindow.fontname.op_assign(new DataUnit("Comic Sans MS", DATATYPES.DT_STRING));
      graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
      (yield* graphicswindow.drawtext.op_call([env._x, (env._y.op_add(new DataUnit(200, DATATYPES.DT_NUMBER))), new DataUnit("Game control keys:", DATATYPES.DT_STRING)]));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(220, DATATYPES.DT_NUMBER))), new DataUnit("Left Arrow = Move piece left", DATATYPES.DT_STRING)]));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(240, DATATYPES.DT_NUMBER))), new DataUnit("Right Arrow = Move piece right", DATATYPES.DT_STRING)]));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(260, DATATYPES.DT_NUMBER))), new DataUnit("Up Arrow = Rotate piece", DATATYPES.DT_STRING)]));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(280, DATATYPES.DT_NUMBER))), new DataUnit("Down Arrow = Drop piece", DATATYPES.DT_STRING)]));
      (yield* graphicswindow.drawtext.op_call([env._x, (env._y.op_add(new DataUnit(320, DATATYPES.DT_NUMBER))), new DataUnit("Press to stop game", DATATYPES.DT_STRING)]));
      (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
      graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      graphicswindow.fontname.op_assign(new DataUnit("Georgia", DATATYPES.DT_STRING));
      graphicswindow.fontitalic.op_assign(new DataUnit("True", DATATYPES.DT_STRING));
      graphicswindow.fontsize.op_assign(new DataUnit(36, DATATYPES.DT_NUMBER));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(400, DATATYPES.DT_NUMBER))), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]));
      (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
      graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
      (yield* graphicswindow.drawtext.op_call([(env._x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (env._y.op_add(new DataUnit(440, DATATYPES.DT_NUMBER))), new DataUnit("ver.0.1", DATATYPES.DT_STRING)]));
      (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
      env._score.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      (yield* env._printscore.op_call([]));
      return new DataUnit();
    }

    function* $_printscore() {
      graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
      graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
      (yield* graphicswindow.fillrectangle.op_call([new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]));
      graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      (yield* graphicswindow.drawrectangle.op_call([new DataUnit(500, DATATYPES.DT_NUMBER), new DataUnit(65, DATATYPES.DT_NUMBER), new DataUnit(153, DATATYPES.DT_NUMBER), new DataUnit(50, DATATYPES.DT_NUMBER)]));
      graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
      graphicswindow.fontsize.op_assign(new DataUnit(32, DATATYPES.DT_NUMBER));
      graphicswindow.fontname.op_assign(new DataUnit("Impact", DATATYPES.DT_STRING));
      graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
      (yield* graphicswindow.drawtext.op_call([new DataUnit(505, DATATYPES.DT_NUMBER), new DataUnit(70, DATATYPES.DT_NUMBER), (yield* text.append.op_call([(yield* text.getsubtext.op_call([new DataUnit("00000000", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), (new DataUnit(8, DATATYPES.DT_NUMBER).op_sub((yield* text.getlength.op_call([env._score]))))])), env._score]))]));
      return new DataUnit();
    }

    function* $_setuptemplates() {
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(22, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Yellow", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), (new DataUnit(12, DATATYPES.DT_NUMBER).op_neg())]));
      (yield* array.setvalue.op_call([new DataUnit("template1", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(2, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Magenta", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template2", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Gray", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template3", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Cyan", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template4", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(21, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Green", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template5", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(20, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(1, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Blue", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template6", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(25, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), new DataUnit(10, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(1, DATATYPES.DT_NUMBER), new DataUnit(11, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(2, DATATYPES.DT_NUMBER), new DataUnit(12, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit(3, DATATYPES.DT_NUMBER), new DataUnit(13, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("color", DATATYPES.DT_STRING), new DataUnit("Red", DATATYPES.DT_STRING)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("dim", DATATYPES.DT_STRING), new DataUnit(4, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewx", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      (yield* array.setvalue.op_call([new DataUnit("template7", DATATYPES.DT_STRING), new DataUnit("pviewy", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER)]));
      return new DataUnit();
    }


  }

  (bluebird.coroutine(execute))().then(function() {
    console.log('program finished!');
  }).catch(function(e) {
    if (e.issafetoignoreexit) {
      console.log('program finished!');
      return;
    }

    console.log('An error occurred');
    console.log(e);
  });
}

runnable();

