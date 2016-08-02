"use strict";

var bluebird = require('bluebird');

var justExitError = new Error('justforexiting');

class Variable {
  constructor() {
    this.value = 0;
    this.type = 'value';
  }

  asArray() {
    if (type !== 'array') {
      this.value = {};
    }
    return this.value;
  }

  asValue() {
    if (type === 'array') {
      this.value = 0;
    }
    return this.value;
  }
};


function* program() {
  var graphicswindow = {
    keydown: null,
    backgroundcolor: null,
    getcolorfromrgb: function*(){},
    clear: function*(){},
    title: null,
    height: null,
    width: null,
    show: function*(){},
    showmessage: function*(){},
    lastkey: null,
    penwidth: null,
    pencolor: null,
    brushcolor: null,
    fillrectangle: function*(){},
    drawrectangle: function*(){},
    drawline: function*(){},
    fontitalic: null,
    fontname: null,
    fontsize: null,
    drawtext: function*(){}
  };

  var text = {
    getsubtext: function*(t, s, e) {
      return t.substring(s, s+e);
    },
    getlength: function*(t) {
      return t.length;
    },
    append: function*(t1,t2) {
      return t1 + t2;
    }
  };

  var math = {
    getrandomnumber: function*(n) {
      return Math.round(Math.random() * n);
    },
    abs: function*(n) {
      return Math.abs(n);
    },
    remainder: function*(t, b) {
      return t % b;
    },
    floor: function*(n) {
      return Math.floor(n);
    },
    round: function*(n) {
      return Math.round(n);
    }
  };

  var program = {
    delay: function*(d) {
      return new Promise((resolve) => setTimeout(resolve, d));
    },

    end: function*() {
      throw justExitError;
    }
  };

  function __resolvearray(aname) {
    var arr = null;
    try {
      arr = eval(aname);
    } catch(e) {
      console.log('create "' + aname + '"');
      arr = eval('global.' + aname + ' = {};');
    }
    return arr;
  }

  var array = {
    getvalue: function*(a, i) {
      var arr = __resolvearray(a);
      return arr[i];
    },
    setvalue: function*(a, i, v) {
      var arr = __resolvearray(a);
      arr[i] = v;
    }
  };

  var shapes = {
    addrectangle: function*() {},
    move: function*() {},
    remove: function*() {},
    getleft: function*() {},
    gettop: function*() {}
  };

  var _boxes = new Variable();
  var _bwidth = new Variable();
  var _xoffset = new Variable();
  var _yoffset = new Variable();
  var _cwidth = new Variable();
  var _cheight = new Variable();
  var _startdelay = new Variable();
  var _enddelay = new Variable();
  var _preview_xpos = new Variable();
  var _preview_ypos = new Variable();
  var _template = new Variable();
  var _nextpiece = new Variable();
  var _h = new Variable();
  var _end = new Variable();
  var _sessiondelay = new Variable();
  var _delay = new Variable();
  var _thispiece = new Variable();
  var _ypos = new Variable();
  var _done = new Variable();
  var _xpos = new Variable();
  var _yposdelta = new Variable();
  var _delayindex = new Variable();
  var _movedirection = new Variable();
  var _invalidmove = new Variable();
  var _basetemplate = new Variable();
  var _rotation = new Variable();
  var _xposbk = new Variable();
  var _xoffsetbk = new Variable();
  var _yoffsetbk = new Variable();
  var _l = new Variable();
  var _i = new Variable();
  var _v = new Variable();
  var _x = new Variable();
  var _y = new Variable();
  var _hcount = new Variable();
  var _s = new Variable();
  var _score = new Variable();
  var _linescleared = new Variable();
  var _piece = new Variable();
  var _x1 = new Variable();
  var _y1 = new Variable();

  graphicswindow.keydown = (_handlekey instanceof Function ? _handlekey : _handlekey.asValue());
  graphicswindow.backgroundcolor = (yield* graphicswindow.getcolorfromrgb(253, 252, 251));
  while ("True") {
    (_boxes instanceof Function ? _boxes : _boxes.asValue()) = 4;
    (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()) = 25;
    (_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) = 40;
    (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) = 40;
    (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) = 10;
    (_cheight instanceof Function ? _cheight : _cheight.asValue()) = 20;
    (_startdelay instanceof Function ? _startdelay : _startdelay.asValue()) = 800;
    (_enddelay instanceof Function ? _enddelay : _enddelay.asValue()) = 175;
    (_preview_xpos instanceof Function ? _preview_xpos : _preview_xpos.asValue()) = 13;
    (_preview_ypos instanceof Function ? _preview_ypos : _preview_ypos.asValue()) = 2;
    (yield* graphicswindow.clear());
    graphicswindow.title = "Small Basic Tetris";
    graphicswindow.height = 580;
    graphicswindow.width = 700;
    (yield* graphicswindow.show());
    (yield* (_setuptemplates instanceof Function ? _setuptemplates : _setuptemplates.asValue())());
    (yield* (_setupcanvas instanceof Function ? _setupcanvas : _setupcanvas.asValue())());
    (yield* (_mainloop instanceof Function ? _mainloop : _mainloop.asValue())());
    (yield* graphicswindow.showmessage("Game Over", "Small Basic Tetris"));
  }

  function* _mainloop() {
    (_template instanceof Function ? _template : _template.asValue()) = (yield* text.append("template", (yield* math.getrandomnumber(7))));
    (yield* (_createpiece instanceof Function ? _createpiece : _createpiece.asValue())());
    (_nextpiece instanceof Function ? _nextpiece : _nextpiece.asValue()) = (_h instanceof Function ? _h : _h.asValue());
    (_end instanceof Function ? _end : _end.asValue()) = 0;
    (_sessiondelay instanceof Function ? _sessiondelay : _sessiondelay.asValue()) = (_startdelay instanceof Function ? _startdelay : _startdelay.asValue());
    while (((_end instanceof Function ? _end : _end.asValue()) === 0)) {
      if (((_sessiondelay instanceof Function ? _sessiondelay : _sessiondelay.asValue()) > (_enddelay instanceof Function ? _enddelay : _enddelay.asValue()))) {
        (_sessiondelay instanceof Function ? _sessiondelay : _sessiondelay.asValue()) = ((_sessiondelay instanceof Function ? _sessiondelay : _sessiondelay.asValue()) - 1);
      }

      (_delay instanceof Function ? _delay : _delay.asValue()) = (_sessiondelay instanceof Function ? _sessiondelay : _sessiondelay.asValue());
      (_thispiece instanceof Function ? _thispiece : _thispiece.asValue()) = (_nextpiece instanceof Function ? _nextpiece : _nextpiece.asValue());
      (_template instanceof Function ? _template : _template.asValue()) = (yield* text.append("template", (yield* math.getrandomnumber(7))));
      (yield* (_createpiece instanceof Function ? _createpiece : _createpiece.asValue())());
      (_nextpiece instanceof Function ? _nextpiece : _nextpiece.asValue()) = (_h instanceof Function ? _h : _h.asValue());
      (yield* (_drawpreviewpiece instanceof Function ? _drawpreviewpiece : _drawpreviewpiece.asValue())());
      (_h instanceof Function ? _h : _h.asValue()) = (_thispiece instanceof Function ? _thispiece : _thispiece.asValue());
      (_ypos instanceof Function ? _ypos : _ypos.asValue()) = 0;
      (_done instanceof Function ? _done : _done.asValue()) = 0;
      (_xpos instanceof Function ? _xpos : _xpos.asValue()) = 3;
      (yield* (_checkstop instanceof Function ? _checkstop : _checkstop.asValue())());
      if (((_done instanceof Function ? _done : _done.asValue()) === 1)) {
        (_ypos instanceof Function ? _ypos : _ypos.asValue()) = ((_ypos instanceof Function ? _ypos : _ypos.asValue()) - 1);
        (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
        (_end instanceof Function ? _end : _end.asValue()) = 1;
      }

      (_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) = 0;
      while ((((_done instanceof Function ? _done : _done.asValue()) === 0) || ((_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) > 0))) {
        (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
        (_delayindex instanceof Function ? _delayindex : _delayindex.asValue()) = (_delay instanceof Function ? _delay : _delay.asValue());
        while ((((_delayindex instanceof Function ? _delayindex : _delayindex.asValue()) > 0) && ((_delay instanceof Function ? _delay : _delay.asValue()) > 0))) {
          (yield* program.delay(10));
          (_delayindex instanceof Function ? _delayindex : _delayindex.asValue()) = ((_delayindex instanceof Function ? _delayindex : _delayindex.asValue()) - 10);
        }

        if (((_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) > 0)) {
          (_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) = ((_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) - 1);
        } else {
          (_ypos instanceof Function ? _ypos : _ypos.asValue()) = ((_ypos instanceof Function ? _ypos : _ypos.asValue()) + 1);
        }

        (yield* (_checkstop instanceof Function ? _checkstop : _checkstop.asValue())());
      }

    }

  }

  function* _handlekey() {
    if ((graphicswindow.lastkey === "Escape")) {
      (yield* program.end());
    }

    if ((graphicswindow.lastkey === "Left")) {
      (_movedirection instanceof Function ? _movedirection : _movedirection.asValue()) = (-1);
      (yield* (_validatemove instanceof Function ? _validatemove : _validatemove.asValue())());
      if (((_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) === 0)) {
        (_xpos instanceof Function ? _xpos : _xpos.asValue()) = ((_xpos instanceof Function ? _xpos : _xpos.asValue()) + (_movedirection instanceof Function ? _movedirection : _movedirection.asValue()));
      }

      (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
    }

    if ((graphicswindow.lastkey === "Right")) {
      (_movedirection instanceof Function ? _movedirection : _movedirection.asValue()) = 1;
      (yield* (_validatemove instanceof Function ? _validatemove : _validatemove.asValue())());
      if (((_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) === 0)) {
        (_xpos instanceof Function ? _xpos : _xpos.asValue()) = ((_xpos instanceof Function ? _xpos : _xpos.asValue()) + (_movedirection instanceof Function ? _movedirection : _movedirection.asValue()));
      }

      (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
    }

    if (((graphicswindow.lastkey === "Down") || (graphicswindow.lastkey === "Space"))) {
      (_delay instanceof Function ? _delay : _delay.asValue()) = 0;
    }

    if ((graphicswindow.lastkey === "Up")) {
      (_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()) = (yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1)));
      (_template instanceof Function ? _template : _template.asValue()) = "temptemplate";
      (_rotation instanceof Function ? _rotation : _rotation.asValue()) = "CW";
      (yield* (_copypiece instanceof Function ? _copypiece : _copypiece.asValue())());
      (yield* array.setvalue((_h instanceof Function ? _h : _h.asValue()), (-1), (_template instanceof Function ? _template : _template.asValue())));
      (_movedirection instanceof Function ? _movedirection : _movedirection.asValue()) = 0;
      (yield* (_validatemove instanceof Function ? _validatemove : _validatemove.asValue())());
      (_xposbk instanceof Function ? _xposbk : _xposbk.asValue()) = (_xpos instanceof Function ? _xpos : _xpos.asValue());
      (_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) = 0;
      while ((((_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) === 0) && ((yield* math.abs(((_xposbk instanceof Function ? _xposbk : _xposbk.asValue()) - (_xpos instanceof Function ? _xpos : _xpos.asValue())))) < 3))) {
        if (((_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) === 0)) {
          (_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()) = (_template instanceof Function ? _template : _template.asValue());
          (_template instanceof Function ? _template : _template.asValue()) = "rotatedtemplate";
          (yield* array.setvalue((_h instanceof Function ? _h : _h.asValue()), (-1), (_template instanceof Function ? _template : _template.asValue())));
          (_rotation instanceof Function ? _rotation : _rotation.asValue()) = "COPY";
          (yield* (_copypiece instanceof Function ? _copypiece : _copypiece.asValue())());
          (_yposdelta instanceof Function ? _yposdelta : _yposdelta.asValue()) = 1;
          (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
        } else if (((_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) === 2)){
          (_xpos instanceof Function ? _xpos : _xpos.asValue()) = 99;
        } else {
          (_xpos instanceof Function ? _xpos : _xpos.asValue()) = ((_xpos instanceof Function ? _xpos : _xpos.asValue()) - (_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()));
          (yield* (_validatemove instanceof Function ? _validatemove : _validatemove.asValue())());
        }

      }

      if (((_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) !== 0)) {
        (_xpos instanceof Function ? _xpos : _xpos.asValue()) = (_xposbk instanceof Function ? _xposbk : _xposbk.asValue());
        (yield* array.setvalue((_h instanceof Function ? _h : _h.asValue()), (-1), (_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue())));
        (_template instanceof Function ? _template : _template.asValue()) = "";
      }

    }

  }

  function* _drawpreviewpiece() {
    (_xpos instanceof Function ? _xpos : _xpos.asValue()) = (_preview_xpos instanceof Function ? _preview_xpos : _preview_xpos.asValue());
    (_ypos instanceof Function ? _ypos : _ypos.asValue()) = (_preview_ypos instanceof Function ? _preview_ypos : _preview_ypos.asValue());
    (_h instanceof Function ? _h : _h.asValue()) = (_nextpiece instanceof Function ? _nextpiece : _nextpiece.asValue());
    (_xoffsetbk instanceof Function ? _xoffsetbk : _xoffsetbk.asValue()) = (_xoffset instanceof Function ? _xoffset : _xoffset.asValue());
    (_yoffsetbk instanceof Function ? _yoffsetbk : _yoffsetbk.asValue()) = (_yoffset instanceof Function ? _yoffset : _yoffset.asValue());
    (_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) = ((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), "pviewx")));
    (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) = ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), "pviewy")));
    (yield* (_movepiece instanceof Function ? _movepiece : _movepiece.asValue())());
    (_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) = (_xoffsetbk instanceof Function ? _xoffsetbk : _xoffsetbk.asValue());
    (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) = (_yoffsetbk instanceof Function ? _yoffsetbk : _yoffsetbk.asValue());
  }

  function* _copypiece() {
    (_l instanceof Function ? _l : _l.asValue()) = (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), "dim"));
    if (((_rotation instanceof Function ? _rotation : _rotation.asValue()) === "CW")) {
      for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
        (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), (_i instanceof Function ? _i : _i.asValue())));
        (_x instanceof Function ? _x : _x.asValue()) = (yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10));
        (_y instanceof Function ? _y : _y.asValue()) = (((_l instanceof Function ? _l : _l.asValue()) - 1) - (yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10))));
        (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), (_i instanceof Function ? _i : _i.asValue()), (((_x instanceof Function ? _x : _x.asValue()) * 10) + (_y instanceof Function ? _y : _y.asValue()))));
      }

    } else if (((_rotation instanceof Function ? _rotation : _rotation.asValue()) === "CCW")){
      for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
        (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), (_i instanceof Function ? _i : _i.asValue())));
        (_x instanceof Function ? _x : _x.asValue()) = (((_l instanceof Function ? _l : _l.asValue()) - 1) - (yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10)));
        (_y instanceof Function ? _y : _y.asValue()) = (yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10)));
        (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), (_i instanceof Function ? _i : _i.asValue()), (((_x instanceof Function ? _x : _x.asValue()) * 10) + (_y instanceof Function ? _y : _y.asValue()))));
      }

    } else if (((_rotation instanceof Function ? _rotation : _rotation.asValue()) === "COPY")){
      for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
        (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), (_i instanceof Function ? _i : _i.asValue()), (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), (_i instanceof Function ? _i : _i.asValue())))));
      }

    } else {
      (yield* graphicswindow.showmessage("invalid parameter", "Error"));
      (yield* program.end());
    }

    (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), "color", (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), "color"))));
    (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), "dim", (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), "dim"))));
    (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), "pviewx", (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), "pviewx"))));
    (yield* array.setvalue((_template instanceof Function ? _template : _template.asValue()), "pviewy", (yield* array.getvalue((_basetemplate instanceof Function ? _basetemplate : _basetemplate.asValue()), "pviewy"))));
  }

  function* _createpiece() {
    (_hcount instanceof Function ? _hcount : _hcount.asValue()) = ((_hcount instanceof Function ? _hcount : _hcount.asValue()) + 1);
    (_h instanceof Function ? _h : _h.asValue()) = (yield* text.append("piece", (_hcount instanceof Function ? _hcount : _hcount.asValue())));
    (yield* array.setvalue((_h instanceof Function ? _h : _h.asValue()), (-1), (_template instanceof Function ? _template : _template.asValue())));
    graphicswindow.penwidth = 1;
    graphicswindow.pencolor = "Black";
    graphicswindow.brushcolor = (yield* array.getvalue((_template instanceof Function ? _template : _template.asValue()), "color"));
    for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
      (_s instanceof Function ? _s : _s.asValue()) = (yield* shapes.addrectangle((_bwidth instanceof Function ? _bwidth : _bwidth.asValue()), (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())));
      (yield* shapes.move((_s instanceof Function ? _s : _s.asValue()), (-(_bwidth instanceof Function ? _bwidth : _bwidth.asValue())), (-(_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))));
      (yield* array.setvalue((_h instanceof Function ? _h : _h.asValue()), (_i instanceof Function ? _i : _i.asValue()), (_s instanceof Function ? _s : _s.asValue())));
    }

  }

  function* _movepiece() {
    for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
      (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), (_i instanceof Function ? _i : _i.asValue())));
      (_x instanceof Function ? _x : _x.asValue()) = (yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10)));
      (_y instanceof Function ? _y : _y.asValue()) = (yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10));
      (yield* shapes.move((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (_i instanceof Function ? _i : _i.asValue()))), (((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_xpos instanceof Function ? _xpos : _xpos.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + ((_x instanceof Function ? _x : _x.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_ypos instanceof Function ? _ypos : _ypos.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + ((_y instanceof Function ? _y : _y.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())))));
    }

  }

  function* _validatemove() {
    (_i instanceof Function ? _i : _i.asValue()) = 0;
    (_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) = 0;
    while (((_i instanceof Function ? _i : _i.asValue()) < (_boxes instanceof Function ? _boxes : _boxes.asValue()))) {
      (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), (_i instanceof Function ? _i : _i.asValue())));
      (_x instanceof Function ? _x : _x.asValue()) = (yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10)));
      (_y instanceof Function ? _y : _y.asValue()) = (yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10));
      if (((((_x instanceof Function ? _x : _x.asValue()) + (_xpos instanceof Function ? _xpos : _xpos.asValue())) + (_movedirection instanceof Function ? _movedirection : _movedirection.asValue())) < 0)) {
        (_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) = (-1);
        (_i instanceof Function ? _i : _i.asValue()) = (_boxes instanceof Function ? _boxes : _boxes.asValue());
      }

      if (((((_x instanceof Function ? _x : _x.asValue()) + (_xpos instanceof Function ? _xpos : _xpos.asValue())) + (_movedirection instanceof Function ? _movedirection : _movedirection.asValue())) >= (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))) {
        (_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) = 1;
        (_i instanceof Function ? _i : _i.asValue()) = (_boxes instanceof Function ? _boxes : _boxes.asValue());
      }

      if (((yield* array.getvalue("c", ((((_x instanceof Function ? _x : _x.asValue()) + (_xpos instanceof Function ? _xpos : _xpos.asValue())) + (_movedirection instanceof Function ? _movedirection : _movedirection.asValue())) + (((_y instanceof Function ? _y : _y.asValue()) + (_ypos instanceof Function ? _ypos : _ypos.asValue())) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))))) !== ".")) {
        (_invalidmove instanceof Function ? _invalidmove : _invalidmove.asValue()) = 2;
        (_i instanceof Function ? _i : _i.asValue()) = (_boxes instanceof Function ? _boxes : _boxes.asValue());
      }

      (_i instanceof Function ? _i : _i.asValue()) = ((_i instanceof Function ? _i : _i.asValue()) + 1);
    }

  }

  function* _checkstop() {
    (_done instanceof Function ? _done : _done.asValue()) = 0;
    (_i instanceof Function ? _i : _i.asValue()) = 0;
    while (((_i instanceof Function ? _i : _i.asValue()) < (_boxes instanceof Function ? _boxes : _boxes.asValue()))) {
      (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), (_i instanceof Function ? _i : _i.asValue())));
      (_x instanceof Function ? _x : _x.asValue()) = (yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10)));
      (_y instanceof Function ? _y : _y.asValue()) = (yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10));
      if (((((_y instanceof Function ? _y : _y.asValue()) + (_ypos instanceof Function ? _ypos : _ypos.asValue())) > (_cheight instanceof Function ? _cheight : _cheight.asValue())) || ((yield* array.getvalue("c", (((_x instanceof Function ? _x : _x.asValue()) + (_xpos instanceof Function ? _xpos : _xpos.asValue())) + (((_y instanceof Function ? _y : _y.asValue()) + (_ypos instanceof Function ? _ypos : _ypos.asValue())) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))))) !== "."))) {
        (_done instanceof Function ? _done : _done.asValue()) = 1;
        (_i instanceof Function ? _i : _i.asValue()) = (_boxes instanceof Function ? _boxes : _boxes.asValue());
      }

      (_i instanceof Function ? _i : _i.asValue()) = ((_i instanceof Function ? _i : _i.asValue()) + 1);
    }

    if (((_done instanceof Function ? _done : _done.asValue()) === 1)) {
      for ((_i instanceof Function ? _i : _i.asValue()) = 0; (0 < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1) ? ((_i instanceof Function ? _i : _i.asValue()) < ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1)) : ((_i instanceof Function ? _i : _i.asValue()) > ((_boxes instanceof Function ? _boxes : _boxes.asValue()) - 1))); (_i instanceof Function ? _i : _i.asValue()) += 1) {
        (_v instanceof Function ? _v : _v.asValue()) = (yield* array.getvalue((yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (-1))), (_i instanceof Function ? _i : _i.asValue())));
        (yield* array.setvalue("c", (((yield* math.floor(((_v instanceof Function ? _v : _v.asValue()) / 10))) + (_xpos instanceof Function ? _xpos : _xpos.asValue())) + ((((yield* math.remainder((_v instanceof Function ? _v : _v.asValue()), 10)) + (_ypos instanceof Function ? _ypos : _ypos.asValue())) - 1) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))), (yield* array.getvalue((_h instanceof Function ? _h : _h.asValue()), (_i instanceof Function ? _i : _i.asValue())))));
      }

      (_score instanceof Function ? _score : _score.asValue()) = ((_score instanceof Function ? _score : _score.asValue()) + 1);
      (yield* (_printscore instanceof Function ? _printscore : _printscore.asValue())());
      (yield* (_deletelines instanceof Function ? _deletelines : _deletelines.asValue())());
    }

  }

  function* _deletelines() {
    (_linescleared instanceof Function ? _linescleared : _linescleared.asValue()) = 0;
    for ((_y instanceof Function ? _y : _y.asValue()) = ((_cheight instanceof Function ? _cheight : _cheight.asValue()) - 1); (((_cheight instanceof Function ? _cheight : _cheight.asValue()) - 1) < 0 ? ((_y instanceof Function ? _y : _y.asValue()) < 0) : ((_y instanceof Function ? _y : _y.asValue()) > 0)); (_y instanceof Function ? _y : _y.asValue()) += (-1)) {
      (_x instanceof Function ? _x : _x.asValue()) = (_cwidth instanceof Function ? _cwidth : _cwidth.asValue());
      while (((_x instanceof Function ? _x : _x.asValue()) === (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))) {
        (_x instanceof Function ? _x : _x.asValue()) = 0;
        while (((_x instanceof Function ? _x : _x.asValue()) < (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))) {
          (_piece instanceof Function ? _piece : _piece.asValue()) = (yield* array.getvalue("c", ((_x instanceof Function ? _x : _x.asValue()) + ((_y instanceof Function ? _y : _y.asValue()) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue())))));
          if (((_piece instanceof Function ? _piece : _piece.asValue()) === ".")) {
            (_x instanceof Function ? _x : _x.asValue()) = (_cwidth instanceof Function ? _cwidth : _cwidth.asValue());
          }

          (_x instanceof Function ? _x : _x.asValue()) = ((_x instanceof Function ? _x : _x.asValue()) + 1);
        }

        if (((_x instanceof Function ? _x : _x.asValue()) === (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))) {
          for ((_x1 instanceof Function ? _x1 : _x1.asValue()) = 0; (0 < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1) ? ((_x1 instanceof Function ? _x1 : _x1.asValue()) < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1)) : ((_x1 instanceof Function ? _x1 : _x1.asValue()) > ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1))); (_x1 instanceof Function ? _x1 : _x1.asValue()) += 1) {
            (yield* shapes.remove((yield* array.getvalue("c", ((_x1 instanceof Function ? _x1 : _x1.asValue()) + ((_y instanceof Function ? _y : _y.asValue()) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue())))))));
          }

          (_linescleared instanceof Function ? _linescleared : _linescleared.asValue()) = ((_linescleared instanceof Function ? _linescleared : _linescleared.asValue()) + 1);
          for ((_y1 instanceof Function ? _y1 : _y1.asValue()) = (_y instanceof Function ? _y : _y.asValue()); ((_y instanceof Function ? _y : _y.asValue()) < 1 ? ((_y1 instanceof Function ? _y1 : _y1.asValue()) < 1) : ((_y1 instanceof Function ? _y1 : _y1.asValue()) > 1)); (_y1 instanceof Function ? _y1 : _y1.asValue()) += (-1)) {
            for ((_x1 instanceof Function ? _x1 : _x1.asValue()) = 0; (0 < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1) ? ((_x1 instanceof Function ? _x1 : _x1.asValue()) < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1)) : ((_x1 instanceof Function ? _x1 : _x1.asValue()) > ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1))); (_x1 instanceof Function ? _x1 : _x1.asValue()) += 1) {
              (_piece instanceof Function ? _piece : _piece.asValue()) = (yield* array.getvalue("c", ((_x1 instanceof Function ? _x1 : _x1.asValue()) + (((_y1 instanceof Function ? _y1 : _y1.asValue()) - 1) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue())))));
              (yield* array.setvalue("c", ((_x1 instanceof Function ? _x1 : _x1.asValue()) + ((_y1 instanceof Function ? _y1 : _y1.asValue()) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))), (_piece instanceof Function ? _piece : _piece.asValue())));
              (yield* shapes.move((_piece instanceof Function ? _piece : _piece.asValue()), (yield* shapes.getleft((_piece instanceof Function ? _piece : _piece.asValue()))), ((yield* shapes.gettop((_piece instanceof Function ? _piece : _piece.asValue()))) + (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))));
            }

          }

        }

      }

    }

    if (((_linescleared instanceof Function ? _linescleared : _linescleared.asValue()) > 0)) {
      (_score instanceof Function ? _score : _score.asValue()) = ((_score instanceof Function ? _score : _score.asValue()) + (100 * (yield* math.round((((_linescleared instanceof Function ? _linescleared : _linescleared.asValue()) * 2.15) - 1)))));
      (yield* (_printscore instanceof Function ? _printscore : _printscore.asValue())());
    }

  }

  function* _setupcanvas() {
    graphicswindow.brushcolor = graphicswindow.backgroundcolor;
    (yield* graphicswindow.fillrectangle((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()), (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()), ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())), ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))));
    (yield* program.delay(200));
    graphicswindow.penwidth = 1;
    graphicswindow.pencolor = "Pink";
    for ((_x instanceof Function ? _x : _x.asValue()) = 0; (0 < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1) ? ((_x instanceof Function ? _x : _x.asValue()) < ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1)) : ((_x instanceof Function ? _x : _x.asValue()) > ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) - 1))); (_x instanceof Function ? _x : _x.asValue()) += 1) {
      for ((_y instanceof Function ? _y : _y.asValue()) = 0; (0 < ((_cheight instanceof Function ? _cheight : _cheight.asValue()) - 1) ? ((_y instanceof Function ? _y : _y.asValue()) < ((_cheight instanceof Function ? _cheight : _cheight.asValue()) - 1)) : ((_y instanceof Function ? _y : _y.asValue()) > ((_cheight instanceof Function ? _cheight : _cheight.asValue()) - 1))); (_y instanceof Function ? _y : _y.asValue()) += 1) {
        (yield* array.setvalue("c", ((_x instanceof Function ? _x : _x.asValue()) + ((_y instanceof Function ? _y : _y.asValue()) * (_cwidth instanceof Function ? _cwidth : _cwidth.asValue()))), "."));
        (yield* graphicswindow.drawrectangle(((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_x instanceof Function ? _x : _x.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_y instanceof Function ? _y : _y.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()), (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())));
      }

    }

    graphicswindow.penwidth = 4;
    graphicswindow.pencolor = "Black";
    (yield* graphicswindow.drawline((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()), (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()), (_xoffset instanceof Function ? _xoffset : _xoffset.asValue()), ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())))));
    (yield* graphicswindow.drawline(((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()), ((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())))));
    (yield* graphicswindow.drawline((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()), ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), ((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))), ((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue())))));
    graphicswindow.pencolor = "Lime";
    (yield* graphicswindow.drawline(((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) - 4), (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()), ((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) - 4), (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 6)));
    (yield* graphicswindow.drawline((((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 4), (_yoffset instanceof Function ? _yoffset : _yoffset.asValue()), (((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 4), (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 6)));
    (yield* graphicswindow.drawline(((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) - 4), (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 4), (((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_cwidth instanceof Function ? _cwidth : _cwidth.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 4), (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_cheight instanceof Function ? _cheight : _cheight.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) + 4)));
    graphicswindow.pencolor = "Black";
    graphicswindow.brushcolor = "Pink";
    (_x instanceof Function ? _x : _x.asValue()) = (((_xoffset instanceof Function ? _xoffset : _xoffset.asValue()) + ((_preview_xpos instanceof Function ? _preview_xpos : _preview_xpos.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) - (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()));
    (_y instanceof Function ? _y : _y.asValue()) = (((_yoffset instanceof Function ? _yoffset : _yoffset.asValue()) + ((_preview_ypos instanceof Function ? _preview_ypos : _preview_ypos.asValue()) * (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()))) - (_bwidth instanceof Function ? _bwidth : _bwidth.asValue()));
    (yield* graphicswindow.fillrectangle((_x instanceof Function ? _x : _x.asValue()), (_y instanceof Function ? _y : _y.asValue()), ((_bwidth instanceof Function ? _bwidth : _bwidth.asValue()) * 5), ((_bwidth instanceof Function ? _bwidth : _bwidth.asValue()) * 6)));
    (yield* graphicswindow.drawrectangle((_x instanceof Function ? _x : _x.asValue()), (_y instanceof Function ? _y : _y.asValue()), ((_bwidth instanceof Function ? _bwidth : _bwidth.asValue()) * 5), ((_bwidth instanceof Function ? _bwidth : _bwidth.asValue()) * 6)));
    (yield* graphicswindow.fillrectangle(((_x instanceof Function ? _x : _x.asValue()) - 20), ((_y instanceof Function ? _y : _y.asValue()) + 190), 310, 170));
    (yield* graphicswindow.drawrectangle(((_x instanceof Function ? _x : _x.asValue()) - 20), ((_y instanceof Function ? _y : _y.asValue()) + 190), 310, 170));
    graphicswindow.brushcolor = "Black";
    graphicswindow.fontitalic = "False";
    graphicswindow.fontname = "Comic Sans MS";
    graphicswindow.fontsize = 16;
    (yield* graphicswindow.drawtext((_x instanceof Function ? _x : _x.asValue()), ((_y instanceof Function ? _y : _y.asValue()) + 200), "Game control keys:"));
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) + 25), ((_y instanceof Function ? _y : _y.asValue()) + 220), "Left Arrow = Move piece left"));
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) + 25), ((_y instanceof Function ? _y : _y.asValue()) + 240), "Right Arrow = Move piece right"));
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) + 25), ((_y instanceof Function ? _y : _y.asValue()) + 260), "Up Arrow = Rotate piece"));
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) + 25), ((_y instanceof Function ? _y : _y.asValue()) + 280), "Down Arrow = Drop piece"));
    (yield* graphicswindow.drawtext((_x instanceof Function ? _x : _x.asValue()), ((_y instanceof Function ? _y : _y.asValue()) + 320), "Press to stop game"));
    (yield* program.delay(200));
    graphicswindow.brushcolor = "Black";
    graphicswindow.fontname = "Georgia";
    graphicswindow.fontitalic = "True";
    graphicswindow.fontsize = 36;
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) - 20), ((_y instanceof Function ? _y : _y.asValue()) + 400), "Small Basic Tetris"));
    (yield* program.delay(200));
    graphicswindow.fontsize = 16;
    (yield* graphicswindow.drawtext(((_x instanceof Function ? _x : _x.asValue()) - 20), ((_y instanceof Function ? _y : _y.asValue()) + 440), "ver.0.1"));
    (yield* program.delay(200));
    (_score instanceof Function ? _score : _score.asValue()) = 0;
    (yield* (_printscore instanceof Function ? _printscore : _printscore.asValue())());
  }

  function* _printscore() {
    graphicswindow.penwidth = 4;
    graphicswindow.brushcolor = "Pink";
    (yield* graphicswindow.fillrectangle(500, 65, 153, 50));
    graphicswindow.brushcolor = "Black";
    (yield* graphicswindow.drawrectangle(500, 65, 153, 50));
    graphicswindow.fontitalic = "False";
    graphicswindow.fontsize = 32;
    graphicswindow.fontname = "Impact";
    graphicswindow.brushcolor = "Black";
    (yield* graphicswindow.drawtext(505, 70, (yield* text.append((yield* text.getsubtext("00000000", 0, (8 - (yield* text.getlength((_score instanceof Function ? _score : _score.asValue())))))), (_score instanceof Function ? _score : _score.asValue())))));
  }

  function* _setuptemplates() {
    (yield* array.setvalue("template1", 0, 10));
    (yield* array.setvalue("template1", 1, 11));
    (yield* array.setvalue("template1", 2, 12));
    (yield* array.setvalue("template1", 3, 22));
    (yield* array.setvalue("template1", "color", "Yellow"));
    (yield* array.setvalue("template1", "dim", 3));
    (yield* array.setvalue("template1", "pviewx", (-12)));
    (yield* array.setvalue("template1", "pviewy", 12));
    (yield* array.setvalue("template2", 0, 10));
    (yield* array.setvalue("template2", 1, 11));
    (yield* array.setvalue("template2", 2, 12));
    (yield* array.setvalue("template2", 3, 2));
    (yield* array.setvalue("template2", "color", "Magenta"));
    (yield* array.setvalue("template2", "dim", 3));
    (yield* array.setvalue("template2", "pviewx", 12));
    (yield* array.setvalue("template2", "pviewy", 12));
    (yield* array.setvalue("template3", 0, 10));
    (yield* array.setvalue("template3", 1, 1));
    (yield* array.setvalue("template3", 2, 11));
    (yield* array.setvalue("template3", 3, 21));
    (yield* array.setvalue("template3", "color", "Gray"));
    (yield* array.setvalue("template3", "dim", 3));
    (yield* array.setvalue("template3", "pviewx", 0));
    (yield* array.setvalue("template3", "pviewy", 25));
    (yield* array.setvalue("template4", 0, 0));
    (yield* array.setvalue("template4", 1, 10));
    (yield* array.setvalue("template4", 2, 1));
    (yield* array.setvalue("template4", 3, 11));
    (yield* array.setvalue("template4", "color", "Cyan"));
    (yield* array.setvalue("template4", "dim", 2));
    (yield* array.setvalue("template4", "pviewx", 12));
    (yield* array.setvalue("template4", "pviewy", 25));
    (yield* array.setvalue("template5", 0, 0));
    (yield* array.setvalue("template5", 1, 10));
    (yield* array.setvalue("template5", 2, 11));
    (yield* array.setvalue("template5", 3, 21));
    (yield* array.setvalue("template5", "color", "Green"));
    (yield* array.setvalue("template5", "dim", 3));
    (yield* array.setvalue("template5", "pviewx", 0));
    (yield* array.setvalue("template5", "pviewy", 25));
    (yield* array.setvalue("template6", 0, 10));
    (yield* array.setvalue("template6", 1, 20));
    (yield* array.setvalue("template6", 2, 1));
    (yield* array.setvalue("template6", 3, 11));
    (yield* array.setvalue("template6", "color", "Blue"));
    (yield* array.setvalue("template6", "dim", 3));
    (yield* array.setvalue("template6", "pviewx", 0));
    (yield* array.setvalue("template6", "pviewy", 25));
    (yield* array.setvalue("template7", 0, 10));
    (yield* array.setvalue("template7", 1, 11));
    (yield* array.setvalue("template7", 2, 12));
    (yield* array.setvalue("template7", 3, 13));
    (yield* array.setvalue("template7", "color", "Red"));
    (yield* array.setvalue("template7", "dim", 4));
    (yield* array.setvalue("template7", "pviewx", 0));
    (yield* array.setvalue("template7", "pviewy", 0));
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
