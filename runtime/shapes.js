'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

// module.exports =
const implshapes = {
  addrectangle: function(w, h) {
    const width = w.as_num();
    const height = h.as_num();

    let bmd = phaserGame.add.bitmapData(width, height);
    // TODO get the fill from graphicswindow
    bmd.rect(0, 0, width, height, '#' + brushcolor.value.toString(16));

    const sprite = phaserGame.add.sprite(Math.floor(Math.random() * 300), Math.floor(Math.random() * 300), bmd);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  move: function(s, x, y) {
    if (s.type === DATATYPES.DT_SHAPE) {
      s.value.x = x.as_num();
      s.value.y = y.as_num();
    }
  },

  remove: function(s) {
    if (s.type === DATATYPES.DT_SHAPE) {
      s.value.destroy();
    }
  },

  getleft: function(s) {
    let x = 0;
    if (s.type === DATATYPES.DT_SHAPE) {
      x = s.value.x;
    }

    return new DataUnit(x, DATATYPES.DT_NUMBER);
  },

  gettop: function(s) {
    let y = 0;
    if (s.type === DATATYPES.DT_SHAPE) {
      y = s.value.y;
    }

    return new DataUnit(y, DATATYPES.DT_NUMBER);
  }
};

const shapes = {
  addrectangle: new DataUnit('shapes.addrectangle', DATATYPES.DT_FN),
  move: new DataUnit('shapes.move', DATATYPES.DT_FN),
  remove: new DataUnit('shapes.remove', DATATYPES.DT_FN),
  getleft: new DataUnit('shapes.getleft', DATATYPES.DT_FN),
  gettop: new DataUnit('shapes.gettop', DATATYPES.DT_FN)
};
