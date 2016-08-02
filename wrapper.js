"use strict";

var bluebird = require('bluebird');

var justExitError = new Error('justforexiting');

class Variable {
  constructor() {
    this.value = 0;
    this.type = 'value';
  }

  get asarray() {
    if (type !== 'array') {
      this.value = {};
    }
    return this.value;
  }
  set asarray() {
  }

  get asvalue() {
    if (type === 'array') {
      this.value = 0;
    }
    return this.value;
  }
  set asvalue() {}
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


// code goes here


}

var c = bluebird.coroutine(program);
c().then(function() {
  console.log('program finished!');
}).catch(function(e) {
  console.log('An error occurred');
  console.log(e);
});
