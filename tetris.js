"use strict";

var bluebird = require('bluebird');

var justExitError = new Error('justforexiting');


const DATATYPES = {
  DT_UNINIT: 0,
  DT_BOOL: 1,
  DT_NUMBER: 2,
  DT_STRING: 3,
  DT_ARRAY: 4,
  DT_FN: 9
};
class DataUnit {
  constructor(value, type) {
    this.value = arguments.length > 0 ? value : 0;
    this.type = arguments.length > 1 ? type : DATATYPES.DT_UNINIT;
  }

  make_clone() {
    return new DataUnit(this.value, this.type);
  }

  // Type casts:
  as_bool() {
    return !!this.value;
  }
  cast_bool() {
    if (this.type !== DATATYPES.DT_BOOL) {
      this.type = DATATYPES.DT_BOOL;
      this.value = this.as_bool();
    }
    return this.value;
  }

  as_array() {
    if (this.type !== DATATYPES.DT_ARRAY) {
      return {};
    }
    return this.value;
  }
  cast_array() {
    if (this.type !== DATATYPES.DT_ARRAY) {
      this.type = DATATYPES.DT_ARRAY;
      this.value = this.as_array();
    }
    return this.value;
  }

  as_num() {
    if (this.type !== DATATYPES.DT_NUMBER) {
      return this.type === DATATYPES.DT_STRING ? (parseInt(this.value, 10) || 0) : 0;
    }
    return this.value;
  }
  cast_num() {
    if (this.type !== DATATYPES.DT_NUMBER) {
      this.type = DATATYPES.DT_NUMBER;
      this.value = this.as_num();
    }
    return this.value;
  }

  as_string() {
    if (this.type !== DATATYPES.DT_STRING) {
      return this.type === DATATYPES.DT_NUMBER ? this.value.toString() : '';
    }
    return this.value;
  }
  cast_string() {
    if (this.type !== DATATYPES.DT_STRING) {
      this.type = DATATYPES.DT_STRING;
      this.value = this.as_string();
    }
    return this.value;
  }

  as_fn() {
    if (this.type !== DATATYPES.DT_FN) {
      throw new Error('Cannot call something that is not a function');
    }
    return this.value;
  }
  cast_fn() {
    if (this.type !== DATATYPES.DT_FN) {
      throw new Error('Cannot call something that is not a function');
    }
    return this.value;
  }


  // operators
  *op_call(params) {
    return yield* this.as_fn().apply(null, params);
  }

  op_assign(rhs) {
    this.value = rhs.value;
    this.type = rhs.type;
  }

  op_index(exp) {
    const arr = cast_array();
    return arr[exp.value];
  }

  // unary number operators
  op_neg() {
    const newValue = !this.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // binary math/stringconcat operators
  op_add(rhs) {
    let left = 0;
    let right = 0;
    let finalType = DATATYPES.DT_UNINIT;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
      finalType = DATATYPES.DT_STRING;
    } else {
      left = this.as_num();
      right = rhs.as_num();
      finalType = DATATYPES.DT_NUMBER;
    }

    const newValue = left + right;
    return new DataUnit(newValue, finalType);
  }

  op_sub(rhs) {
    const newValue = this.as_num() - rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_mul(rhs) {
    const newValue = this.as_num() * rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_div(rhs) {
    const newValue = this.as_num() / rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // comparison operators
  op_eq(rhs) {
    let isEq = false;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      isEq = this.as_string() == rhs.as_string();
    } else if (this.type === DATATYPES.DT_ARRAY && rhs.type === DATATYPES.DT_ARRAY) {
      if (Object.keys(this.value).length === Object.keys(rhs.value).length) {
        isEq = true;
        for (let p in this.value) {
          if (rhs.value[p] !== this.value[p]) {
            isEq = false;
            break;
          }
        }
      } else {
        isEq = false;
      }
    } else {
      isEq = this.as_num() == rhs.as_num();
    }

    const newValue = isEq ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_neq(rhs) {
    const isEq = this.op_eq(rhs);
    isEq.value = isEq.value ? 0 : 1;
    return isEq;
  }

  op_gt(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left > right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_lt(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left < right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_gte(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left >= right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_lte(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left <= right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_cmpor(rhs) {
    const newValue = this.as_num() || rhs.as_num() ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_cmpand(rhs) {
    const newValue = this.as_num() && rhs.as_num() ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }
};

function wrapFunction(gen) {
  return new DataUnit(gen, DATATYPES.DT_FN);
}


function* program() {
  var graphicswindow = {
    keydown: new DataUnit(),
    backgroundcolor: new DataUnit(),
    getcolorfromrgb: wrapFunction(function*() { return new DataUnit(); }),
    clear: wrapFunction(function*() { return new DataUnit(); }),
    title: new DataUnit(),
    height: new DataUnit(),
    width: new DataUnit(),
    show: wrapFunction(function*() { return new DataUnit(); }),
    showmessage: wrapFunction(function*() { return new DataUnit(); }),
    lastkey: new DataUnit(),
    penwidth: new DataUnit(),
    pencolor: new DataUnit(),
    brushcolor: new DataUnit(),
    fillrectangle: wrapFunction(function*() { return new DataUnit(); }),
    drawrectangle: wrapFunction(function*() { return new DataUnit(); }),
    drawline: wrapFunction(function*() { return new DataUnit(); }),
    fontitalic: new DataUnit(),
    fontname: new DataUnit(),
    fontsize: new DataUnit(),
    drawtext: wrapFunction(function*() { return new DataUnit(); })
  };

  var text = {
    getsubtext: wrapFunction(function*(t, s, e) {
      return new DataUnit(t.as_string().substring(s, s+e), DATATYPES.DT_STRING);
    }),
    getlength: wrapFunction(function*(t) {
      return new DataUnit(t.as_string().length, DATATYPES.DT_NUMBER);
    }),
    append: wrapFunction(function*(t1,t2) {
      return new DataUnit(t1.as_string() + t2.as_string(), DATATYPES.DT_STRING);
    })
  };

  var math = {
    getrandomnumber: wrapFunction(function*(n) {
      return new DataUnit(Math.round(Math.random() * n.as_num()), DATATYPES.DT_NUMBER);
    }),
    abs: wrapFunction(function*(n) {
      return new DataUnit(Math.abs(n.as_num()), DATATYPES.DT_NUMBER);
    }),
    remainder: wrapFunction(function*(t, b) {
      return new DataUnit(t.as_num() % b.as_num(), DATATYPES.DT_NUMBER);
    }),
    floor: wrapFunction(function*(n) {
      return new DataUnit(Math.floor(n.as_num()), DATATYPES.DT_NUMBER);
    }),
    round: wrapFunction(function*(n) {
      return new DataUnit(Math.round(n.as_num()), DATATYPES.DT_NUMBER);
    })
  };

  var program = {
    delay: wrapFunction(function*(d) {
      const time = d.as_num();
      yield new Promise((resolve) => setTimeout(resolve, time));
      return new DataUnit();
    }),

    end: wrapFunction(function*() {
      throw justExitError;
    })
  };

  function __resolvearray(aname) {
    var arr = null;
    try {
      arr = eval('_' + aname);
    } catch(e) {
      console.log('create "_' + aname + '"');
      arr = eval('global._' + aname + ' = new DataUnit({}, DATATYPES.DT_ARRAY);');
    }
    return arr.cast_array();
  }

  var array = {
    getvalue: wrapFunction(function*(a, i) {
      var arr = __resolvearray(a.as_string());
      return arr[i.as_string()];
    }),
    setvalue: wrapFunction(function*(a, i, v) {
      var arr = __resolvearray(a.as_string());
      arr[i.as_string()] = v;
    })
  };

  var shapes = {
    addrectangle: wrapFunction(function*() { return new DataUnit(); }),
    move: wrapFunction(function*() { return new DataUnit(); }),
    remove: wrapFunction(function*() { return new DataUnit(); }),
    getleft: wrapFunction(function*() { return new DataUnit(); }),
    gettop: wrapFunction(function*() { return new DataUnit(); })
  };

    var _handlekey = new DataUnit($_handlekey, DATATYPES.DT_FN);
    var _boxes = new DataUnit();
    var _bwidth = new DataUnit();
    var _xoffset = new DataUnit();
    var _yoffset = new DataUnit();
    var _cwidth = new DataUnit();
    var _cheight = new DataUnit();
    var _startdelay = new DataUnit();
    var _enddelay = new DataUnit();
    var _preview_xpos = new DataUnit();
    var _preview_ypos = new DataUnit();
    var _setuptemplates = new DataUnit($_setuptemplates, DATATYPES.DT_FN);
    var _setupcanvas = new DataUnit($_setupcanvas, DATATYPES.DT_FN);
    var _mainloop = new DataUnit($_mainloop, DATATYPES.DT_FN);
    var _template = new DataUnit();
    var _createpiece = new DataUnit($_createpiece, DATATYPES.DT_FN);
    var _nextpiece = new DataUnit();
    var _h = new DataUnit();
    var _end = new DataUnit();
    var _sessiondelay = new DataUnit();
    var _delay = new DataUnit();
    var _thispiece = new DataUnit();
    var _drawpreviewpiece = new DataUnit($_drawpreviewpiece, DATATYPES.DT_FN);
    var _ypos = new DataUnit();
    var _done = new DataUnit();
    var _xpos = new DataUnit();
    var _checkstop = new DataUnit($_checkstop, DATATYPES.DT_FN);
    var _movepiece = new DataUnit($_movepiece, DATATYPES.DT_FN);
    var _yposdelta = new DataUnit();
    var _delayindex = new DataUnit();
    var _movedirection = new DataUnit();
    var _validatemove = new DataUnit($_validatemove, DATATYPES.DT_FN);
    var _invalidmove = new DataUnit();
    var _basetemplate = new DataUnit();
    var _rotation = new DataUnit();
    var _copypiece = new DataUnit($_copypiece, DATATYPES.DT_FN);
    var _xposbk = new DataUnit();
    var _xoffsetbk = new DataUnit();
    var _yoffsetbk = new DataUnit();
    var _l = new DataUnit();
    var _i = new DataUnit();
    var _v = new DataUnit();
    var _x = new DataUnit();
    var _y = new DataUnit();
    var _hcount = new DataUnit();
    var _s = new DataUnit();
    var _score = new DataUnit();
    var _printscore = new DataUnit($_printscore, DATATYPES.DT_FN);
    var _deletelines = new DataUnit($_deletelines, DATATYPES.DT_FN);
    var _linescleared = new DataUnit();
    var _piece = new DataUnit();
    var _x1 = new DataUnit();
    var _y1 = new DataUnit();

  graphicswindow.keydown.op_assign(_handlekey);
  graphicswindow.backgroundcolor.op_assign((yield* graphicswindow.getcolorfromrgb.op_call([new DataUnit(253, DATATYPES.DT_NUMBER), new DataUnit(252, DATATYPES.DT_NUMBER), new DataUnit(251, DATATYPES.DT_NUMBER)])));
  while (new DataUnit("True", DATATYPES.DT_STRING).as_bool()) {
    _boxes.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
    _bwidth.op_assign(new DataUnit(25, DATATYPES.DT_NUMBER));
    _xoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
    _yoffset.op_assign(new DataUnit(40, DATATYPES.DT_NUMBER));
    _cwidth.op_assign(new DataUnit(10, DATATYPES.DT_NUMBER));
    _cheight.op_assign(new DataUnit(20, DATATYPES.DT_NUMBER));
    _startdelay.op_assign(new DataUnit(800, DATATYPES.DT_NUMBER));
    _enddelay.op_assign(new DataUnit(175, DATATYPES.DT_NUMBER));
    _preview_xpos.op_assign(new DataUnit(13, DATATYPES.DT_NUMBER));
    _preview_ypos.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
    (yield* graphicswindow.clear.op_call([]));
    graphicswindow.title.op_assign(new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING));
    graphicswindow.height.op_assign(new DataUnit(580, DATATYPES.DT_NUMBER));
    graphicswindow.width.op_assign(new DataUnit(700, DATATYPES.DT_NUMBER));
    (yield* graphicswindow.show.op_call([]));
    (yield* _setuptemplates.op_call([]));
    (yield* _setupcanvas.op_call([]));
    (yield* _mainloop.op_call([]));
    (yield* graphicswindow.showmessage.op_call([new DataUnit("Game Over", DATATYPES.DT_STRING), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]));
  }

  function* $_mainloop() {
    _template.op_assign((yield* text.append.op_call([new DataUnit("template", DATATYPES.DT_STRING), (yield* math.getrandomnumber.op_call([new DataUnit(7, DATATYPES.DT_NUMBER)]))])));
    (yield* _createpiece.op_call([]));
    _nextpiece.op_assign(_h);
    _end.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    _sessiondelay.op_assign(_startdelay);
    while ((_end.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
      if ((_sessiondelay.op_gt(_enddelay)).as_bool()) {
        _sessiondelay.op_assign((_sessiondelay.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
      }

      _delay.op_assign(_sessiondelay);
      _thispiece.op_assign(_nextpiece);
      _template.op_assign((yield* text.append.op_call([new DataUnit("template", DATATYPES.DT_STRING), (yield* math.getrandomnumber.op_call([new DataUnit(7, DATATYPES.DT_NUMBER)]))])));
      (yield* _createpiece.op_call([]));
      _nextpiece.op_assign(_h);
      (yield* _drawpreviewpiece.op_call([]));
      _h.op_assign(_thispiece);
      _ypos.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      _done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      _xpos.op_assign(new DataUnit(3, DATATYPES.DT_NUMBER));
      (yield* _checkstop.op_call([]));
      if ((_done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER))).as_bool()) {
        _ypos.op_assign((_ypos.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
        (yield* _movepiece.op_call([]));
        _end.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
      }

      _yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      while (((_done.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpor((_yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))))).as_bool()) {
        (yield* _movepiece.op_call([]));
        _delayindex.op_assign(_delay);
        while (((_delayindex.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpand((_delay.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))))).as_bool()) {
          (yield* program.delay.op_call([new DataUnit(10, DATATYPES.DT_NUMBER)]));
          _delayindex.op_assign((_delayindex.op_sub(new DataUnit(10, DATATYPES.DT_NUMBER))));
        }

        if ((_yposdelta.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          _yposdelta.op_assign((_yposdelta.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
        } else {
          _ypos.op_assign((_ypos.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
        }

        (yield* _checkstop.op_call([]));
      }

    }

    return new DataUnit();
  }

  function* $_handlekey() {
    if ((graphicswindow.lastkey.op_eq(new DataUnit("Escape", DATATYPES.DT_STRING))).as_bool()) {
      (yield* program.end.op_call([]));
    }

    if ((graphicswindow.lastkey.op_eq(new DataUnit("Left", DATATYPES.DT_STRING))).as_bool()) {
      _movedirection.op_assign((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()));
      (yield* _validatemove.op_call([]));
      if ((_invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        _xpos.op_assign((_xpos.op_add(_movedirection)));
      }

      (yield* _movepiece.op_call([]));
    }

    if ((graphicswindow.lastkey.op_eq(new DataUnit("Right", DATATYPES.DT_STRING))).as_bool()) {
      _movedirection.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
      (yield* _validatemove.op_call([]));
      if ((_invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        _xpos.op_assign((_xpos.op_add(_movedirection)));
      }

      (yield* _movepiece.op_call([]));
    }

    if (((graphicswindow.lastkey.op_eq(new DataUnit("Down", DATATYPES.DT_STRING))).op_cmpor((graphicswindow.lastkey.op_eq(new DataUnit("Space", DATATYPES.DT_STRING))))).as_bool()) {
      _delay.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    }

    if ((graphicswindow.lastkey.op_eq(new DataUnit("Up", DATATYPES.DT_STRING))).as_bool()) {
      _basetemplate.op_assign((yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])));
      _template.op_assign(new DataUnit("temptemplate", DATATYPES.DT_STRING));
      _rotation.op_assign(new DataUnit("CW", DATATYPES.DT_STRING));
      (yield* _copypiece.op_call([]));
      (yield* array.setvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), _template]));
      _movedirection.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      (yield* _validatemove.op_call([]));
      _xposbk.op_assign(_xpos);
      _yposdelta.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
      while (((_yposdelta.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).op_cmpand(((yield* math.abs.op_call([(_xposbk.op_sub(_xpos))])).op_lt(new DataUnit(3, DATATYPES.DT_NUMBER))))).as_bool()) {
        if ((_invalidmove.op_eq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
          _basetemplate.op_assign(_template);
          _template.op_assign(new DataUnit("rotatedtemplate", DATATYPES.DT_STRING));
          (yield* array.setvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), _template]));
          _rotation.op_assign(new DataUnit("COPY", DATATYPES.DT_STRING));
          (yield* _copypiece.op_call([]));
          _yposdelta.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
          (yield* _movepiece.op_call([]));
        } else if ((_invalidmove.op_eq(new DataUnit(2, DATATYPES.DT_NUMBER))).as_bool()){
          _xpos.op_assign(new DataUnit(99, DATATYPES.DT_NUMBER));
        } else {
          _xpos.op_assign((_xpos.op_sub(_invalidmove)));
          (yield* _validatemove.op_call([]));
        }

      }

      if ((_invalidmove.op_neq(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        _xpos.op_assign(_xposbk);
        (yield* array.setvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), _basetemplate]));
        _template.op_assign(new DataUnit("", DATATYPES.DT_STRING));
      }

    }

    return new DataUnit();
  }

  function* $_drawpreviewpiece() {
    _xpos.op_assign(_preview_xpos);
    _ypos.op_assign(_preview_ypos);
    _h.op_assign(_nextpiece);
    _xoffsetbk.op_assign(_xoffset);
    _yoffsetbk.op_assign(_yoffset);
    _xoffset.op_assign((_xoffset.op_add((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), new DataUnit("pviewx", DATATYPES.DT_STRING)])))));
    _yoffset.op_assign((_yoffset.op_add((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), new DataUnit("pviewy", DATATYPES.DT_STRING)])))));
    (yield* _movepiece.op_call([]));
    _xoffset.op_assign(_xoffsetbk);
    _yoffset.op_assign(_yoffsetbk);
    return new DataUnit();
  }

  function* $_copypiece() {
    _l.op_assign((yield* array.getvalue.op_call([_basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)])));
    if ((_rotation.op_eq(new DataUnit("CW", DATATYPES.DT_STRING))).as_bool()) {
      for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        _v.op_assign((yield* array.getvalue.op_call([_basetemplate, _i])));
        _x.op_assign((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
        _y.op_assign(((_l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_sub((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])))));
        (yield* array.setvalue.op_call([_template, _i, ((_x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER))).op_add(_y))]));
      }

    } else if ((_rotation.op_eq(new DataUnit("CCW", DATATYPES.DT_STRING))).as_bool()){
      for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        _v.op_assign((yield* array.getvalue.op_call([_basetemplate, _i])));
        _x.op_assign(((_l.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_sub((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])))));
        _y.op_assign((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
        (yield* array.setvalue.op_call([_template, _i, ((_x.op_mul(new DataUnit(10, DATATYPES.DT_NUMBER))).op_add(_y))]));
      }

    } else if ((_rotation.op_eq(new DataUnit("COPY", DATATYPES.DT_STRING))).as_bool()){
      for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        (yield* array.setvalue.op_call([_template, _i, (yield* array.getvalue.op_call([_basetemplate, _i]))]));
      }

    } else {
      (yield* graphicswindow.showmessage.op_call([new DataUnit("invalid parameter", DATATYPES.DT_STRING), new DataUnit("Error", DATATYPES.DT_STRING)]));
      (yield* program.end.op_call([]));
    }

    (yield* array.setvalue.op_call([_template, new DataUnit("color", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([_basetemplate, new DataUnit("color", DATATYPES.DT_STRING)]))]));
    (yield* array.setvalue.op_call([_template, new DataUnit("dim", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([_basetemplate, new DataUnit("dim", DATATYPES.DT_STRING)]))]));
    (yield* array.setvalue.op_call([_template, new DataUnit("pviewx", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([_basetemplate, new DataUnit("pviewx", DATATYPES.DT_STRING)]))]));
    (yield* array.setvalue.op_call([_template, new DataUnit("pviewy", DATATYPES.DT_STRING), (yield* array.getvalue.op_call([_basetemplate, new DataUnit("pviewy", DATATYPES.DT_STRING)]))]));
    return new DataUnit();
  }

  function* $_createpiece() {
    _hcount.op_assign((_hcount.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
    _h.op_assign((yield* text.append.op_call([new DataUnit("piece", DATATYPES.DT_STRING), _hcount])));
    (yield* array.setvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()), _template]));
    graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
    graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
    graphicswindow.brushcolor.op_assign((yield* array.getvalue.op_call([_template, new DataUnit("color", DATATYPES.DT_STRING)])));
    for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
      _s.op_assign((yield* shapes.addrectangle.op_call([_bwidth, _bwidth])));
      (yield* shapes.move.op_call([_s, (_bwidth.op_neg()), (_bwidth.op_neg())]));
      (yield* array.setvalue.op_call([_h, _i, _s]));
    }

    return new DataUnit();
  }

  function* $_movepiece() {
    for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
      _v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), _i])));
      _x.op_assign((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
      _y.op_assign((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
      (yield* shapes.move.op_call([(yield* array.getvalue.op_call([_h, _i])), ((_xoffset.op_add((_xpos.op_mul(_bwidth)))).op_add((_x.op_mul(_bwidth)))), ((_yoffset.op_add((_ypos.op_mul(_bwidth)))).op_add((_y.op_mul(_bwidth))))]));
    }

    return new DataUnit();
  }

  function* $_validatemove() {
    _i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    _invalidmove.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    while ((_i.op_lt(_boxes)).as_bool()) {
      _v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), _i])));
      _x.op_assign((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
      _y.op_assign((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
      if ((((_x.op_add(_xpos)).op_add(_movedirection)).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
        _invalidmove.op_assign((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg()));
        _i.op_assign(_boxes);
      }

      if ((((_x.op_add(_xpos)).op_add(_movedirection)).op_gte(_cwidth)).as_bool()) {
        _invalidmove.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
        _i.op_assign(_boxes);
      }

      if (((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (((_x.op_add(_xpos)).op_add(_movedirection)).op_add(((_y.op_add(_ypos)).op_mul(_cwidth))))])).op_neq(new DataUnit(".", DATATYPES.DT_STRING))).as_bool()) {
        _invalidmove.op_assign(new DataUnit(2, DATATYPES.DT_NUMBER));
        _i.op_assign(_boxes);
      }

      _i.op_assign((_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
    }

    return new DataUnit();
  }

  function* $_checkstop() {
    _done.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    _i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    while ((_i.op_lt(_boxes)).as_bool()) {
      _v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), _i])));
      _x.op_assign((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])));
      _y.op_assign((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])));
      if ((((_y.op_add(_ypos)).op_gt(_cheight)).op_cmpor(((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), ((_x.op_add(_xpos)).op_add(((_y.op_add(_ypos)).op_mul(_cwidth))))])).op_neq(new DataUnit(".", DATATYPES.DT_STRING))))).as_bool()) {
        _done.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
        _i.op_assign(_boxes);
      }

      _i.op_assign((_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
    }

    if ((_done.op_eq(new DataUnit(1, DATATYPES.DT_NUMBER))).as_bool()) {
      for (_i.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_i.op_lt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_i.op_gt((_boxes.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _i.op_assign(_i.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        _v.op_assign((yield* array.getvalue.op_call([(yield* array.getvalue.op_call([_h, (new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())])), _i])));
        (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (((yield* math.floor.op_call([(_v.op_div(new DataUnit(10, DATATYPES.DT_NUMBER)))])).op_add(_xpos)).op_add(((((yield* math.remainder.op_call([_v, new DataUnit(10, DATATYPES.DT_NUMBER)])).op_add(_ypos)).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_mul(_cwidth)))), (yield* array.getvalue.op_call([_h, _i]))]));
      }

      _score.op_assign((_score.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
      (yield* _printscore.op_call([]));
      (yield* _deletelines.op_call([]));
    }

    return new DataUnit();
  }

  function* $_deletelines() {
    _linescleared.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    for (_y.op_assign((_cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))));
((_cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_lt(new DataUnit(0, DATATYPES.DT_NUMBER)).as_bool() ? (_y.op_lt(new DataUnit(0, DATATYPES.DT_NUMBER))) : (_y.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER)))).as_bool();
 _y.op_assign(_y.op_add((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())))) {
      _x.op_assign(_cwidth);
      while ((_x.op_eq(_cwidth)).as_bool()) {
        _x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
        while ((_x.op_lt(_cwidth)).as_bool()) {
          _piece.op_assign((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (_x.op_add((_y.op_mul(_cwidth))))])));
          if ((_piece.op_eq(new DataUnit(".", DATATYPES.DT_STRING))).as_bool()) {
            _x.op_assign(_cwidth);
          }

          _x.op_assign((_x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
        }

        if ((_x.op_eq(_cwidth)).as_bool()) {
          for (_x1.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_x1.op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_x1.op_gt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _x1.op_assign(_x1.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
            (yield* shapes.remove.op_call([(yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (_x1.op_add((_y.op_mul(_cwidth))))]))]));
          }

          _linescleared.op_assign((_linescleared.op_add(new DataUnit(1, DATATYPES.DT_NUMBER))));
          for (_y1.op_assign(_y);
(_y.op_lt(new DataUnit(1, DATATYPES.DT_NUMBER)).as_bool() ? (_y1.op_lt(new DataUnit(1, DATATYPES.DT_NUMBER))) : (_y1.op_gt(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool();
 _y1.op_assign(_y1.op_add((new DataUnit(1, DATATYPES.DT_NUMBER).op_neg())))) {
            for (_x1.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_x1.op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_x1.op_gt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _x1.op_assign(_x1.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
              _piece.op_assign((yield* array.getvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (_x1.op_add(((_y1.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))).op_mul(_cwidth))))])));
              (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (_x1.op_add((_y1.op_mul(_cwidth)))), _piece]));
              (yield* shapes.move.op_call([_piece, (yield* shapes.getleft.op_call([_piece])), ((yield* shapes.gettop.op_call([_piece])).op_add(_bwidth))]));
            }

          }

        }

      }

    }

    if ((_linescleared.op_gt(new DataUnit(0, DATATYPES.DT_NUMBER))).as_bool()) {
      _score.op_assign((_score.op_add((new DataUnit(100, DATATYPES.DT_NUMBER).op_mul((yield* math.round.op_call([((_linescleared.op_mul(new DataUnit(2.15, DATATYPES.DT_NUMBER))).op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))])))))));
      (yield* _printscore.op_call([]));
    }

    return new DataUnit();
  }

  function* $_setupcanvas() {
    graphicswindow.brushcolor.op_assign(graphicswindow.backgroundcolor);
    (yield* graphicswindow.fillrectangle.op_call([_xoffset, _yoffset, (_cwidth.op_mul(_bwidth)), (_cheight.op_mul(_bwidth))]));
    (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
    graphicswindow.penwidth.op_assign(new DataUnit(1, DATATYPES.DT_NUMBER));
    graphicswindow.pencolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
    for (_x.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_x.op_lt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_x.op_gt((_cwidth.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _x.op_assign(_x.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
      for (_y.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
(new DataUnit(0, DATATYPES.DT_NUMBER).op_lt((_cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))).as_bool() ? (_y.op_lt((_cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER))))) : (_y.op_gt((_cheight.op_sub(new DataUnit(1, DATATYPES.DT_NUMBER)))))).as_bool();
 _y.op_assign(_y.op_add(new DataUnit(1, DATATYPES.DT_NUMBER)))) {
        (yield* array.setvalue.op_call([new DataUnit("c", DATATYPES.DT_STRING), (_x.op_add((_y.op_mul(_cwidth)))), new DataUnit(".", DATATYPES.DT_STRING)]));
        (yield* graphicswindow.drawrectangle.op_call([(_xoffset.op_add((_x.op_mul(_bwidth)))), (_yoffset.op_add((_y.op_mul(_bwidth)))), _bwidth, _bwidth]));
      }

    }

    graphicswindow.penwidth.op_assign(new DataUnit(4, DATATYPES.DT_NUMBER));
    graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
    (yield* graphicswindow.drawline.op_call([_xoffset, _yoffset, _xoffset, (_yoffset.op_add((_cheight.op_mul(_bwidth))))]));
    (yield* graphicswindow.drawline.op_call([(_xoffset.op_add((_cwidth.op_mul(_bwidth)))), _yoffset, (_xoffset.op_add((_cwidth.op_mul(_bwidth)))), (_yoffset.op_add((_cheight.op_mul(_bwidth))))]));
    (yield* graphicswindow.drawline.op_call([_xoffset, (_yoffset.op_add((_cheight.op_mul(_bwidth)))), (_xoffset.op_add((_cwidth.op_mul(_bwidth)))), (_yoffset.op_add((_cheight.op_mul(_bwidth))))]));
    graphicswindow.pencolor.op_assign(new DataUnit("Lime", DATATYPES.DT_STRING));
    (yield* graphicswindow.drawline.op_call([(_xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), _yoffset, (_xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), ((_yoffset.op_add((_cheight.op_mul(_bwidth)))).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
    (yield* graphicswindow.drawline.op_call([((_xoffset.op_add((_cwidth.op_mul(_bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), _yoffset, ((_xoffset.op_add((_cwidth.op_mul(_bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((_yoffset.op_add((_cheight.op_mul(_bwidth)))).op_add(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
    (yield* graphicswindow.drawline.op_call([(_xoffset.op_sub(new DataUnit(4, DATATYPES.DT_NUMBER))), ((_yoffset.op_add((_cheight.op_mul(_bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((_xoffset.op_add((_cwidth.op_mul(_bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER))), ((_yoffset.op_add((_cheight.op_mul(_bwidth)))).op_add(new DataUnit(4, DATATYPES.DT_NUMBER)))]));
    graphicswindow.pencolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
    graphicswindow.brushcolor.op_assign(new DataUnit("Pink", DATATYPES.DT_STRING));
    _x.op_assign(((_xoffset.op_add((_preview_xpos.op_mul(_bwidth)))).op_sub(_bwidth)));
    _y.op_assign(((_yoffset.op_add((_preview_ypos.op_mul(_bwidth)))).op_sub(_bwidth)));
    (yield* graphicswindow.fillrectangle.op_call([_x, _y, (_bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER))), (_bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
    (yield* graphicswindow.drawrectangle.op_call([_x, _y, (_bwidth.op_mul(new DataUnit(5, DATATYPES.DT_NUMBER))), (_bwidth.op_mul(new DataUnit(6, DATATYPES.DT_NUMBER)))]));
    (yield* graphicswindow.fillrectangle.op_call([(_x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER))), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]));
    (yield* graphicswindow.drawrectangle.op_call([(_x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(190, DATATYPES.DT_NUMBER))), new DataUnit(310, DATATYPES.DT_NUMBER), new DataUnit(170, DATATYPES.DT_NUMBER)]));
    graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
    graphicswindow.fontitalic.op_assign(new DataUnit("False", DATATYPES.DT_STRING));
    graphicswindow.fontname.op_assign(new DataUnit("Comic Sans MS", DATATYPES.DT_STRING));
    graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
    (yield* graphicswindow.drawtext.op_call([_x, (_y.op_add(new DataUnit(200, DATATYPES.DT_NUMBER))), new DataUnit("Game control keys:", DATATYPES.DT_STRING)]));
    (yield* graphicswindow.drawtext.op_call([(_x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(220, DATATYPES.DT_NUMBER))), new DataUnit("Left Arrow = Move piece left", DATATYPES.DT_STRING)]));
    (yield* graphicswindow.drawtext.op_call([(_x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(240, DATATYPES.DT_NUMBER))), new DataUnit("Right Arrow = Move piece right", DATATYPES.DT_STRING)]));
    (yield* graphicswindow.drawtext.op_call([(_x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(260, DATATYPES.DT_NUMBER))), new DataUnit("Up Arrow = Rotate piece", DATATYPES.DT_STRING)]));
    (yield* graphicswindow.drawtext.op_call([(_x.op_add(new DataUnit(25, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(280, DATATYPES.DT_NUMBER))), new DataUnit("Down Arrow = Drop piece", DATATYPES.DT_STRING)]));
    (yield* graphicswindow.drawtext.op_call([_x, (_y.op_add(new DataUnit(320, DATATYPES.DT_NUMBER))), new DataUnit("Press to stop game", DATATYPES.DT_STRING)]));
    (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
    graphicswindow.brushcolor.op_assign(new DataUnit("Black", DATATYPES.DT_STRING));
    graphicswindow.fontname.op_assign(new DataUnit("Georgia", DATATYPES.DT_STRING));
    graphicswindow.fontitalic.op_assign(new DataUnit("True", DATATYPES.DT_STRING));
    graphicswindow.fontsize.op_assign(new DataUnit(36, DATATYPES.DT_NUMBER));
    (yield* graphicswindow.drawtext.op_call([(_x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(400, DATATYPES.DT_NUMBER))), new DataUnit("Small Basic Tetris", DATATYPES.DT_STRING)]));
    (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
    graphicswindow.fontsize.op_assign(new DataUnit(16, DATATYPES.DT_NUMBER));
    (yield* graphicswindow.drawtext.op_call([(_x.op_sub(new DataUnit(20, DATATYPES.DT_NUMBER))), (_y.op_add(new DataUnit(440, DATATYPES.DT_NUMBER))), new DataUnit("ver.0.1", DATATYPES.DT_STRING)]));
    (yield* program.delay.op_call([new DataUnit(200, DATATYPES.DT_NUMBER)]));
    _score.op_assign(new DataUnit(0, DATATYPES.DT_NUMBER));
    (yield* _printscore.op_call([]));
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
    (yield* graphicswindow.drawtext.op_call([new DataUnit(505, DATATYPES.DT_NUMBER), new DataUnit(70, DATATYPES.DT_NUMBER), (yield* text.append.op_call([(yield* text.getsubtext.op_call([new DataUnit("00000000", DATATYPES.DT_STRING), new DataUnit(0, DATATYPES.DT_NUMBER), (new DataUnit(8, DATATYPES.DT_NUMBER).op_sub((yield* text.getlength.op_call([_score]))))])), _score]))]));
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

var c = bluebird.coroutine(program);
c().then(function() {
  console.log('program finished!');
}).catch(function(e) {
  if (e === justExitError) {
    console.log('program finished!');
    return;
  }

  console.log('An error occurred');
  console.log(e);
});
