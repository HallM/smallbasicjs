'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const stringToColorTable = {
  green: 0x008000,
  blue: 0x0000ff,
  red: 0xff0000,
  black: 0x000000,
  white: 0xffffff,
  lime: 0x00ff00,
  pink: 0xffc0cb,
  yellow: 0xffff00,
  magenta: 0xff00ff,
  gray: 0x808080,
  cyan: 0x00ffff
};

// TODO: unglobalify these
// global, but should only be one on the screen at a time anyway
let phaserGame = null;
let phaserGraphics = null;

// TODO: need like an init callback
let backgroundcolor = new DataUnit(0xffffff, DATATYPES.DT_NUMBER);
let height = new DataUnit(800, DATATYPES.DT_NUMBER);
let width = new DataUnit(600, DATATYPES.DT_NUMBER);
let penwidth = new DataUnit(2, DATATYPES.DT_NUMBER);
let pencolor = new DataUnit(0x000000, DATATYPES.DT_NUMBER);
let brushcolor = new DataUnit(0x000000, DATATYPES.DT_NUMBER);
let fontitalic = new DataUnit('false', DATATYPES.DT_STRING);
let fontname = new DataUnit("Comic Sans MS", DATATYPES.DT_STRING);
let fontsize = new DataUnit(16, DATATYPES.DT_NUMBER);

backgroundcolor.on_assign(colorToRgb);
pencolor.on_assign(colorToRgb);
brushcolor.on_assign(colorToRgb);

function colorToRgb(color) {
  if (color.type === DATATYPES.DT_NUMBER) {
    // don't change numbers
    return;
  }

  // translate anything into a number
  if (color.type !== DATATYPES.DT_STRING) {
    color.value = 0x000000;
  } else {
    color.value = stringToColorTable[color.as_string().toLowerCase()] || 0x000000;
  }

  color.type = DATATYPES.DT_NUMBER;
}

const graphicswindow = {
  keydown: new DataUnit(),

  backgroundcolor: backgroundcolor,

  getcolorfromrgb: wrapFunction(function*(r, g, b) {
    const red = r.as_num() << 16;
    const green = g.as_num() << 8;
    const blue = b.as_num();
    const rgb = red | green | blue;
    return new DataUnit(rgb, DATATYPES.DT_NUMBER);
  }),

  clear: wrapFunction(function*() {
    if (phaserGraphics) {
      phaserGraphics.clear();

      const fillColor = backgroundcolor.as_num();
      phaserGraphics.beginFill(fillColor);
      phaserGraphics.drawRect(0, 0, width.as_num(), height.as_num());
      phaserGraphics.endFill();
    }
  }),

  // TODO
  title: new DataUnit(),

  height: height,

  width: width,

  show: wrapFunction(function*() {
    yield new Promise((resolve) => {
      phaserGame = new Phaser.Game(width.as_num(), height.as_num(), Phaser.AUTO, 'smallbasicjs-graphicswindow', {
        create: phaserCreateFactory(resolve)
      });
    });
  }),

  showmessage: wrapFunction(function*() {
    // TODO
    return new DataUnit();
  }),

  get lastkey() {
    if (!phaserGame) {
      return new DataUnit();
    }

    // TODO: expand this
    let keyChar = phaserGame.input.keyboard.lastKey;
    switch (keyChar) {
      case Phaser.KeyCode.SPACEBAR:
        keyChar = 'Space';
        break;
      case Phaser.KeyCode.UP:
        keyChar = 'Up';
        break;
      case Phaser.KeyCode.DOWN:
        keyChar = 'Down';
        break;
      case Phaser.KeyCode.LEFT:
        keyChar = 'Left';
        break;
      case Phaser.KeyCode.RIGHT:
        keyChar = 'Right';
        break;
      case Phaser.KeyCode.ESC:
        keyChar = 'Escape';
        break;
    }

    return new DataUnit(keyChar, DATATYPES.DT_STRING);
  },

  penwidth: penwidth,

  pencolor: pencolor,

  brushcolor: brushcolor,

  fillrectangle: wrapFunction(function*(x, y, w, h) {
    if (!phaserGraphics) {
      return;
    }

    const fillColor = brushcolor.as_num();
    phaserGraphics.beginFill(fillColor);
    phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
    phaserGraphics.endFill();
  }),

  drawrectangle: wrapFunction(function*(x, y, w, h) {
    if (!phaserGraphics) {
      return;
    }

    const strokeColor = pencolor.as_num();
    const strokeWidth = penwidth.as_num();

    phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
    phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
  }),

  drawline: wrapFunction(function*(x1, y1, x2, y2) {
    if (!phaserGraphics) {
      return;
    }

    const strokeColor = pencolor.as_num();
    const strokeWidth = penwidth.as_num();

    phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
    phaserGraphics.moveTo(x1.as_num(), y1.as_num());
    phaserGraphics.lineTo(x2.as_num(), y2.as_num());
    phaserGraphics.endFill();
  }),

  fontitalic: fontitalic,

  fontname: fontname,

  fontsize: fontsize,

  drawtext: wrapFunction(function*(x, y, t) {
    if (!phaserGame) {
      return;
    }

    let txtOptions = {
      font: fontname.as_string(),
      fontSize: fontsize.as_num() + 'px',
      fill: '#' + brushcolor.as_num().toString(16),
    };

    if (fontitalic.as_bool()) {
      txtOptions.fontStyle = 'italic';
    }

    phaserGame.add.text(x.as_num(), y.as_num(), t.as_string(), txtOptions);
  })
};

function phaserCreateFactory(resolver) {
  return function phaserCreate() {
    phaserGraphics = phaserGame.add.graphics(0, 0);
    phaserGraphics.boundsPadding = 0;

    // pre-fill the BG
    const fillColor = backgroundcolor.as_num();
    phaserGraphics.beginFill(fillColor);
    phaserGraphics.drawRect(0, 0, width.as_num(), height.as_num());
    phaserGraphics.endFill();

    resolver();
  }
}
