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
      return Math.random() * n;
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
}

var c = bluebird.coroutine(program);
c().then(function() {
  console.log('program finished!');
}).catch(function(e) {
  console.log('An error occurred');
  console.log(e);
});
