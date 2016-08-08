'use strict';

import {DataUnit, DATATYPES} from './data-unit';

// module.exports =
const impl = {
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

// need imagelist first I think
// Shapes.AddImage(imageName)

// Shapes.AddEllipse(width, height)
// Shapes.AddTriangle(x1, y1, x2, y2, x3, y3)
// Shapes.AddLine(x1, y1, x2, y2)
// Shapes.AddText(text)
// Shapes.SetText(shapeName, text)
// Shapes.Rotate(shapeName, angle)
// Shapes.Zoom(shapeName, scaleX, scaleY)
// Shapes.Animate(shapeName, x, y, duration)
// Shapes.GetOpacity(shapeName)
// Shapes.SetOpacity(shapeName, level)
// Shapes.HideShape(shapeName)
// Shapes.ShowShape(shapeName)

function api(env) {
  return {
    get addrectangle() { return new DataUnit('shapes.addrectangle', DATATYPES.DT_FN); },
    get move() { return new DataUnit('shapes.move', DATATYPES.DT_FN); },
    get remove() { return new DataUnit('shapes.remove', DATATYPES.DT_FN); },
    get getleft() { return new DataUnit('shapes.getleft', DATATYPES.DT_FN); },
    get gettop() { return new DataUnit('shapes.gettop', DATATYPES.DT_FN); }
  };
}

export {impl, api};
