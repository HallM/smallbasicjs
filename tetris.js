"use strict";

var bluebird = require('bluebird');

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
      // how to make this end the whole program...
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

  var _boxes = {};
  var _bwidth = {};
  var _xoffset = {};
  var _yoffset = {};
  var _cwidth = {};
  var _cheight = {};
  var _startdelay = {};
  var _enddelay = {};
  var _preview_xpos = {};
  var _preview_ypos = {};
  var _template = {};
  var _nextpiece = {};
  var _h = {};
  var _end = {};
  var _sessiondelay = {};
  var _delay = {};
  var _thispiece = {};
  var _ypos = {};
  var _done = {};
  var _xpos = {};
  var _yposdelta = {};
  var _delayindex = {};
  var _movedirection = {};
  var _invalidmove = {};
  var _basetemplate = {};
  var _rotation = {};
  var _xposbk = {};
  var _xoffsetbk = {};
  var _yoffsetbk = {};
  var _l = {};
  var _i = {};
  var _v = {};
  var _x = {};
  var _y = {};
  var _hcount = 0;
  var _s = {};
  var _score = {};
  var _linescleared = {};
  var _piece = {};
  var _x1 = {};
  var _y1 = {};

  graphicswindow.keydown = _handlekey;
  graphicswindow.backgroundcolor = (yield* graphicswindow.getcolorfromrgb(253, 252, 251));
  while ("True") {
    _boxes = 4;
    _bwidth = 25;
    _xoffset = 40;
    _yoffset = 40;
    _cwidth = 10;
    _cheight = 20;
    _startdelay = 800;
    _enddelay = 175;
    _preview_xpos = 13;
    _preview_ypos = 2;
    (yield* graphicswindow.clear());
    graphicswindow.title = "Small Basic Tetris";
    graphicswindow.height = 580;
    graphicswindow.width = 700;
    (yield* graphicswindow.show());
    (yield* _setuptemplates());
    (yield* _setupcanvas());
    (yield* _mainloop());
    (yield* graphicswindow.showmessage("Game Over", "Small Basic Tetris"));
  }

  function* _mainloop() {
    _template = (yield* text.append("template", (yield* math.getrandomnumber(7))));
    (yield* _createpiece());
    _nextpiece = _h;
    _end = 0;
    _sessiondelay = _startdelay;
    while ((_end === 0)) {
      if ((_sessiondelay > _enddelay)) {
        _sessiondelay = (_sessiondelay - 1);
      }

      _delay = _sessiondelay;
      _thispiece = _nextpiece;
      _template = (yield* text.append("template", (yield* math.getrandomnumber(7))));
      (yield* _createpiece());
      _nextpiece = _h;
      (yield* _drawpreviewpiece());
      _h = _thispiece;
      _ypos = 0;
      _done = 0;
      _xpos = 3;
      (yield* _checkstop());
      if ((_done === 1)) {
        _ypos = (_ypos - 1);
        (yield* _movepiece());
        _end = 1;
      }

      _yposdelta = 0;
      while (((_done === 0) || (_yposdelta > 0))) {
        (yield* _movepiece());
        _delayindex = _delay;
        while (((_delayindex > 0) || (_delay > 0))) {
          (yield* program.delay(10));
          _delayindex = (_delayindex - 10);
        }

        if ((_yposdelta > 0)) {
          _yposdelta = (_yposdelta - 1);
        } else {
          _ypos = (_ypos + 1);
        }

        (yield* _checkstop());
      }

    }

  }

  function* _handlekey() {
    if ((graphicswindow.lastkey === "Escape")) {
      (yield* program.end());
    }

    if ((graphicswindow.lastkey === "Left")) {
      _movedirection = (-1);
      (yield* _validatemove());
      if ((_invalidmove === 0)) {
        _xpos = (_xpos + _movedirection);
      }

      (yield* _movepiece());
    }

    if ((graphicswindow.lastkey === "Right")) {
      _movedirection = 1;
      (yield* _validatemove());
      if ((_invalidmove === 0)) {
        _xpos = (_xpos + _movedirection);
      }

      (yield* _movepiece());
    }

    if (((graphicswindow.lastkey === "Down") || (graphicswindow.lastkey === "Space"))) {
      _delay = 0;
    }

    if ((graphicswindow.lastkey === "Up")) {
      _basetemplate = (yield* array.getvalue(_h, (-1)));
      _template = "temptemplate";
      _rotation = "CW";
      (yield* _copypiece());
      (yield* array.setvalue(_h, (-1), _template));
      _movedirection = 0;
      (yield* _validatemove());
      _xposbk = _xpos;
      _yposdelta = 0;
      while (((_yposdelta === 0) || ((yield* math.abs((_xposbk - _xpos))) < 3))) {
        if ((_invalidmove === 0)) {
          _basetemplate = _template;
          _template = "rotatedtemplate";
          (yield* array.setvalue(_h, (-1), _template));
          _rotation = "COPY";
          (yield* _copypiece());
          _yposdelta = 1;
          (yield* _movepiece());
        } else if ((_invalidmove === 2)){
          _xpos = 99;
        } else {
          _xpos = (_xpos - _invalidmove);
          (yield* _validatemove());
        }

      }

      if ((_invalidmove !== 0)) {
        _xpos = _xposbk;
        (yield* array.setvalue(_h, (-1), _basetemplate));
        _template = "";
      }

    }

  }

  function* _drawpreviewpiece() {
    _xpos = _preview_xpos;
    _ypos = _preview_ypos;
    _h = _nextpiece;
    _xoffsetbk = _xoffset;
    _yoffsetbk = _yoffset;
    _xoffset = (_xoffset + (yield* array.getvalue((yield* array.getvalue(_h, (-1))), "pviewx")));
    _yoffset = (_yoffset + (yield* array.getvalue((yield* array.getvalue(_h, (-1))), "pviewy")));
    (yield* _movepiece());
    _xoffset = _xoffsetbk;
    _yoffset = _yoffsetbk;
  }

  function* _copypiece() {
    _l = (yield* array.getvalue(_basetemplate, "dim"));
    if ((_rotation === "CW")) {
      for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
        _v = (yield* array.getvalue(_basetemplate, _i));
        _x = (yield* math.remainder(_v, 10));
        _y = ((_l - 1) - (yield* math.floor((_v / 10))));
        (yield* array.setvalue(_template, _i, ((_x * 10) + _y)));
      }

    } else if ((_rotation === "CCW")){
      for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
        _v = (yield* array.getvalue(_basetemplate, _i));
        _x = ((_l - 1) - (yield* math.remainder(_v, 10)));
        _y = (yield* math.floor((_v / 10)));
        (yield* array.setvalue(_template, _i, ((_x * 10) + _y)));
      }

    } else if ((_rotation === "COPY")){
      for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
        (yield* array.setvalue(_template, _i, (yield* array.getvalue(_basetemplate, _i))));
      }

    } else {
      (yield* graphicswindow.showmessage("invalid parameter", "Error"));
      (yield* program.end());
    }

    (yield* array.setvalue(_template, "color", (yield* array.getvalue(_basetemplate, "color"))));
    (yield* array.setvalue(_template, "dim", (yield* array.getvalue(_basetemplate, "dim"))));
    (yield* array.setvalue(_template, "pviewx", (yield* array.getvalue(_basetemplate, "pviewx"))));
    (yield* array.setvalue(_template, "pviewy", (yield* array.getvalue(_basetemplate, "pviewy"))));
  }

  function* _createpiece() {
    _hcount = (_hcount + 1);
    _h = (yield* text.append("piece", _hcount));
    (yield* array.setvalue(_h, (-1), _template));
    graphicswindow.penwidth = 1;
    graphicswindow.pencolor = "Black";
    graphicswindow.brushcolor = (yield* array.getvalue(_template, "color"));
    for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
      _s = (yield* shapes.addrectangle(_bwidth, _bwidth));
      (yield* shapes.move(_s, (-_bwidth), (-_bwidth)));
      (yield* array.setvalue(_h, _i, _s));
    }

  }

  function* _movepiece() {
    for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
      _v = (yield* array.getvalue((yield* array.getvalue(_h, (-1))), _i));
      _x = (yield* math.floor((_v / 10)));
      _y = (yield* math.remainder(_v, 10));
      (yield* shapes.move((yield* array.getvalue(_h, _i)), ((_xoffset + (_xpos * _bwidth)) + (_x * _bwidth)), ((_yoffset + (_ypos * _bwidth)) + (_y * _bwidth))));
    }

  }

  function* _validatemove() {
    _i = 0;
    _invalidmove = 0;
    while ((_i < _boxes)) {
      _v = (yield* array.getvalue((yield* array.getvalue(_h, (-1))), _i));
      _x = (yield* math.floor((_v / 10)));
      _y = (yield* math.remainder(_v, 10));
      if ((((_x + _xpos) + _movedirection) < 0)) {
        _invalidmove = (-1);
        _i = _boxes;
      }

      if ((((_x + _xpos) + _movedirection) >= _cwidth)) {
        _invalidmove = 1;
        _i = _boxes;
      }

      if (((yield* array.getvalue("c", (((_x + _xpos) + _movedirection) + ((_y + _ypos) * _cwidth)))) !== ".")) {
        _invalidmove = 2;
        _i = _boxes;
      }

      _i = (_i + 1);
    }

  }

  function* _checkstop() {
    _done = 0;
    _i = 0;
    while ((_i < _boxes)) {
      _v = (yield* array.getvalue((yield* array.getvalue(_h, (-1))), _i));
      _x = (yield* math.floor((_v / 10)));
      _y = (yield* math.remainder(_v, 10));
      if ((((_y + _ypos) > _cheight) || ((yield* array.getvalue("c", ((_x + _xpos) + ((_y + _ypos) * _cwidth)))) !== "."))) {
        _done = 1;
        _i = _boxes;
      }

      _i = (_i + 1);
    }

    if ((_done === 1)) {
      for (_i = 0; (0 < (_boxes - 1) ? (_i < (_boxes - 1)) : (_i > (_boxes - 1))); _i += 1) {
        _v = (yield* array.getvalue((yield* array.getvalue(_h, (-1))), _i));
        (yield* array.setvalue("c", (((yield* math.floor((_v / 10))) + _xpos) + ((((yield* math.remainder(_v, 10)) + _ypos) - 1) * _cwidth)), (yield* array.getvalue(_h, _i))));
      }

      _score = (_score + 1);
      (yield* _printscore());
      (yield* _deletelines());
    }

  }

  function* _deletelines() {
    _linescleared = 0;
    for (_y = (_cheight - 1); ((_cheight - 1) < 0 ? (_y < 0) : (_y > 0)); _y += (-1)) {
      _x = _cwidth;
      while ((_x === _cwidth)) {
        _x = 0;
        while ((_x < _cwidth)) {
          _piece = (yield* array.getvalue("c", (_x + (_y * _cwidth))));
          if ((_piece === ".")) {
            _x = _cwidth;
          }

          _x = (_x + 1);
        }

        if ((_x === _cwidth)) {
          for (_x1 = 0; (0 < (_cwidth - 1) ? (_x1 < (_cwidth - 1)) : (_x1 > (_cwidth - 1))); _x1 += 1) {
            (yield* shapes.remove((yield* array.getvalue("c", (_x1 + (_y * _cwidth))))));
          }

          _linescleared = (_linescleared + 1);
          for (_y1 = _y; (_y < 1 ? (_y1 < 1) : (_y1 > 1)); _y1 += (-1)) {
            for (_x1 = 0; (0 < (_cwidth - 1) ? (_x1 < (_cwidth - 1)) : (_x1 > (_cwidth - 1))); _x1 += 1) {
              _piece = (yield* array.getvalue("c", (_x1 + ((_y1 - 1) * _cwidth))));
              (yield* array.setvalue("c", (_x1 + (_y1 * _cwidth)), _piece));
              (yield* shapes.move(_piece, (yield* shapes.getleft(_piece)), ((yield* shapes.gettop(_piece)) + _bwidth)));
            }

          }

        }

      }

    }

    if ((_linescleared > 0)) {
      _score = (_score + (100 * (yield* math.round(((_linescleared * 2.15) - 1)))));
      (yield* _printscore());
    }

  }

  function* _setupcanvas() {
    graphicswindow.brushcolor = graphicswindow.backgroundcolor;
    (yield* graphicswindow.fillrectangle(_xoffset, _yoffset, (_cwidth * _bwidth), (_cheight * _bwidth)));
    (yield* program.delay(200));
    graphicswindow.penwidth = 1;
    graphicswindow.pencolor = "Pink";
    for (_x = 0; (0 < (_cwidth - 1) ? (_x < (_cwidth - 1)) : (_x > (_cwidth - 1))); _x += 1) {
      for (_y = 0; (0 < (_cheight - 1) ? (_y < (_cheight - 1)) : (_y > (_cheight - 1))); _y += 1) {
        (yield* array.setvalue("c", (_x + (_y * _cwidth)), "."));
        (yield* graphicswindow.drawrectangle((_xoffset + (_x * _bwidth)), (_yoffset + (_y * _bwidth)), _bwidth, _bwidth));
      }

    }

    graphicswindow.penwidth = 4;
    graphicswindow.pencolor = "Black";
    (yield* graphicswindow.drawline(_xoffset, _yoffset, _xoffset, (_yoffset + (_cheight * _bwidth))));
    (yield* graphicswindow.drawline((_xoffset + (_cwidth * _bwidth)), _yoffset, (_xoffset + (_cwidth * _bwidth)), (_yoffset + (_cheight * _bwidth))));
    (yield* graphicswindow.drawline(_xoffset, (_yoffset + (_cheight * _bwidth)), (_xoffset + (_cwidth * _bwidth)), (_yoffset + (_cheight * _bwidth))));
    graphicswindow.pencolor = "Lime";
    (yield* graphicswindow.drawline((_xoffset - 4), _yoffset, (_xoffset - 4), ((_yoffset + (_cheight * _bwidth)) + 6)));
    (yield* graphicswindow.drawline(((_xoffset + (_cwidth * _bwidth)) + 4), _yoffset, ((_xoffset + (_cwidth * _bwidth)) + 4), ((_yoffset + (_cheight * _bwidth)) + 6)));
    (yield* graphicswindow.drawline((_xoffset - 4), ((_yoffset + (_cheight * _bwidth)) + 4), ((_xoffset + (_cwidth * _bwidth)) + 4), ((_yoffset + (_cheight * _bwidth)) + 4)));
    graphicswindow.pencolor = "Black";
    graphicswindow.brushcolor = "Pink";
    _x = ((_xoffset + (_preview_xpos * _bwidth)) - _bwidth);
    _y = ((_yoffset + (_preview_ypos * _bwidth)) - _bwidth);
    (yield* graphicswindow.fillrectangle(_x, _y, (_bwidth * 5), (_bwidth * 6)));
    (yield* graphicswindow.drawrectangle(_x, _y, (_bwidth * 5), (_bwidth * 6)));
    (yield* graphicswindow.fillrectangle((_x - 20), (_y + 190), 310, 170));
    (yield* graphicswindow.drawrectangle((_x - 20), (_y + 190), 310, 170));
    graphicswindow.brushcolor = "Black";
    graphicswindow.fontitalic = "False";
    graphicswindow.fontname = "Comic Sans MS";
    graphicswindow.fontsize = 16;
    (yield* graphicswindow.drawtext(_x, (_y + 200), "Game control keys:"));
    (yield* graphicswindow.drawtext((_x + 25), (_y + 220), "Left Arrow = Move piece left"));
    (yield* graphicswindow.drawtext((_x + 25), (_y + 240), "Right Arrow = Move piece right"));
    (yield* graphicswindow.drawtext((_x + 25), (_y + 260), "Up Arrow = Rotate piece"));
    (yield* graphicswindow.drawtext((_x + 25), (_y + 280), "Down Arrow = Drop piece"));
    (yield* graphicswindow.drawtext(_x, (_y + 320), "Press to stop game"));
    (yield* program.delay(200));
    graphicswindow.brushcolor = "Black";
    graphicswindow.fontname = "Georgia";
    graphicswindow.fontitalic = "True";
    graphicswindow.fontsize = 36;
    (yield* graphicswindow.drawtext((_x - 20), (_y + 400), "Small Basic Tetris"));
    (yield* program.delay(200));
    graphicswindow.fontsize = 16;
    (yield* graphicswindow.drawtext((_x - 20), (_y + 440), "ver.0.1"));
    (yield* program.delay(200));
    _score = 0;
    (yield* _printscore());
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
    (yield* graphicswindow.drawtext(505, 70, (yield* text.append((yield* text.getsubtext("00000000", 0, (8 - (yield* text.getlength(_score))))), _score))));
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
  console.log('An error occurred');
  console.log(e);
});
