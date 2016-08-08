'use strict';

import {DataUnit, DATATYPES} from './data-unit';

const stringToColorTable = {
  indianred: 0xcd5c5c,
  lightcoral: 0xf08080,
  salmon: 0xfa8072,
  darksalmon: 0xe9967a,
  lightsalmon: 0xffa07a,
  crimson: 0xdc143c,
  red: 0xff0000,
  firebrick: 0xb22222,
  darkred: 0x8b0000,

  pink: 0xffc0cb,
  lightpink: 0xffb6c1,
  hotpink: 0xff69b4,
  deeppink: 0xff1493,
  mediumvioletred: 0xc71585,
  palevioletred: 0xdb7093,

  coral: 0xff7f50,
  tomato: 0xff6347,
  orangered: 0xff4500,
  darkorange: 0xff8c00,
  orange: 0xffa500,

  gold: 0xffd700,
  yellow: 0xffff00,
  lightyellow: 0xffffe0,
  lemonchiffon: 0xfffacd,
  lightgoldenrodyellow: 0xfafad2,
  papayawhip: 0xffefd5,
  moccasin: 0xffe4b5,
  peachpuff: 0xffdab9,
  palegoldenrod: 0xeee8aa,
  khaki: 0xf0e68c,
  darkkhaki: 0xbdb76b,

  lavender: 0xe6e6fa,
  thistle: 0xd8bfd8,
  plum: 0xdda0dd,
  violet: 0xee82ee,
  orchid: 0xda70d6,
  fuchsia: 0xff00ff,
  magenta: 0xff00ff,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  blueviolet: 0x8a2be2,
  darkviolet: 0x9400d3,
  darkorchid: 0x9932cc,
  darkmagenta: 0x8b008b,
  purple: 0x800080,
  indigo: 0x4b0082,
  slateblue: 0x6a5acd,
  darkslateblue: 0x483d8b,

  greenyellow: 0xadff2f,
  chartreuse: 0x7fff00,
  lawngreen: 0x7cfc00,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  palegreen: 0x98fb98,
  lightgreen: 0x90ee90,
  mediumspringgreen: 0x00fa9a,
  springgreen: 0x00ff7f,
  mediumseagreen: 0x3cb371,
  seagreen: 0x2e8b57,
  forestgreen: 0x228b22,
  green: 0x008000,
  darkgreen: 0x006400,
  yellowgreen: 0x9acd32,
  olivedrab: 0x6b8e23,
  olive: 0x808000,
  darkolivegreen: 0x556b2f,
  mediumaquamarine: 0x66cdaa,
  darkseagreen: 0x8fbc8f,
  lightseagreen: 0x20b2aa,
  darkcyan: 0x008b8b,
  teal: 0x008080,

  aqua: 0x00ffff,
  cyan: 0x00ffff,
  lightcyan: 0xe0ffff,
  paleturquoise: 0xafeeee,
  aquamarine: 0x7fffd4,
  turquoise: 0x40e0d0,
  mediumturquoise: 0x48d1cc,
  darkturquoise: 0x00ced1,
  cadetblue: 0x5f9ea0,
  steelblue: 0x4682b4,
  lightsteelblue: 0xb0c4de,
  powderblue: 0xb0e0e6,
  lightblue: 0xadd8e6,
  skyblue: 0x87ceeb,
  lightskyblue: 0x87cefa,
  deepskyblue: 0x00bfff,
  dodgerblue: 0x1e90ff,
  cornflowerblue: 0x6495ed,
  mediumslateblue: 0x7b68ee,
  royalblue: 0x4169e1,
  blue: 0x0000ff,
  mediumblue: 0x0000cd,
  darkblue: 0x00008b,
  navy: 0x000080,
  midnightblue: 0x191970,

  cornsilk: 0xfff8dc,
  blanchedalmond: 0xffebcd,
  bisque: 0xffe4c4,
  navajowhite: 0xffdead,
  wheat: 0xf5deb3,
  burlywood: 0xdeb887,
  tan: 0xd2b48c,
  rosybrown: 0xbc8f8f,
  sandybrown: 0xf4a460,
  goldenrod: 0xdaa520,
  darkgoldenrod: 0xb8860b,
  peru: 0xcd853f,
  chocolate: 0xd2691e,
  saddlebrown: 0x8b4513,
  sienna: 0xa0522d,
  brown: 0xa52a2a,
  maroon: 0x800000,

  white: 0xffffff,
  snow: 0xfffafa,
  honeydew: 0xf0fff0,
  mintcream: 0xf5fffa,
  azure: 0xf0ffff,
  aliceblue: 0xf0f8ff,
  ghostwhite: 0xf8f8ff,
  whitesmoke: 0xf5f5f5,
  seashell: 0xfff5ee,
  beige: 0xf5f5dc,
  oldlace: 0xfdf5e6,
  floralwhite: 0xfffaf0,
  ivory: 0xfffff0,
  antiquewhite: 0xfaebd7,
  linen: 0xfaf0e6,
  lavenderblush: 0xfff0f5,
  mistyrose: 0xffe4e1,

  gainsboro: 0xdcdcdc,
  lightgray: 0xd3d3d3,
  silver: 0xc0c0c0,
  darkgray: 0xa9a9a9,
  gray: 0x808080,
  dimgray: 0x696969,
  lightslategray: 0x778899,
  slategray: 0x708090,
  darkslategray: 0x2f4f4f,
  black: 0x000000
};

// TODO: unglobalify these
// global, but should only be one on the screen at a time anyway
let phaserGame = null;
let phaserGraphics = null;

// TODO: need like an init callback
let keydown = new DataUnit();
let backgroundcolor = new DataUnit(0xffffff, DATATYPES.DT_NUMBER);
let height = new DataUnit(800, DATATYPES.DT_NUMBER);
let width = new DataUnit(600, DATATYPES.DT_NUMBER);
let penwidth = new DataUnit(2, DATATYPES.DT_NUMBER);
let pencolor = new DataUnit(0x000000, DATATYPES.DT_NUMBER);
let brushcolor = new DataUnit(0x000000, DATATYPES.DT_NUMBER);
let fontitalic = new DataUnit('false', DATATYPES.DT_STRING);
let fontname = new DataUnit("Comic Sans MS", DATATYPES.DT_STRING);
let fontsize = new DataUnit(16, DATATYPES.DT_NUMBER);

// doing this weird caching because of how phaser does text
let textSpawns = {};

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

const impl = {
  getcolorfromrgb: function(r, g, b) {
    const red = r.as_num() << 16;
    const green = g.as_num() << 8;
    const blue = b.as_num();
    const rgb = red | green | blue;
    return new DataUnit(rgb, DATATYPES.DT_NUMBER);
  },

  clear: function() {
    if (phaserGraphics) {
      phaserGraphics.clear();

      const fillColor = backgroundcolor.as_num();
      phaserGraphics.beginFill(fillColor);
      phaserGraphics.drawRect(0, 0, width.as_num(), height.as_num());
      phaserGraphics.endFill();
    }
  },

  show: function() {
    if (phaserGame) {
      phaserGame.destroy();
      phaserGame = null;
    }

    return new Promise((resolve) => {
      phaserGame = new Phaser.Game(width.as_num(), height.as_num(), Phaser.AUTO, 'smallbasicjs-graphicswindow', {
        create: phaserCreateFactory(resolve)
      });
    });
  },

  showmessage: function() {
    // TODO
    return new DataUnit();
  },

  fillrectangle: function(x, y, w, h) {
    if (!phaserGraphics) {
      return;
    }

    const fillColor = brushcolor.as_num();
    phaserGraphics.beginFill(fillColor);
    phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
    phaserGraphics.endFill();
  },

  drawrectangle: function(x, y, w, h) {
    if (!phaserGraphics) {
      return;
    }

    const strokeColor = pencolor.as_num();
    const strokeWidth = penwidth.as_num();

    phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
    phaserGraphics.drawRect(x.as_num(), y.as_num(), w.as_num(), h.as_num());
  },

  drawline: function(x1, y1, x2, y2) {
    if (!phaserGraphics) {
      return;
    }

    const strokeColor = pencolor.as_num();
    const strokeWidth = penwidth.as_num();

    phaserGraphics.lineStyle(strokeWidth, strokeColor, 1);
    phaserGraphics.moveTo(x1.as_num(), y1.as_num());
    phaserGraphics.lineTo(x2.as_num(), y2.as_num());
    phaserGraphics.endFill();
  },

  drawtext: function(x, y, t) {
    if (!phaserGame) {
      return;
    }

    const xPos = x.as_num();
    const yPos = y.as_num();
    const spawnLoc = xPos + ':' + yPos;

    if (textSpawns[spawnLoc]) {
      textSpawns[spawnLoc].text = t.as_string();
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

    const phaserText = phaserGame.add.text(xPos, yPos, t.as_string(), txtOptions);
    textSpawns[spawnLoc] = phaserText;
  }
};

// properties
// GraphicsWindow.CanResize
// GraphicsWindow.FontBold
// GraphicsWindow.Left
// GraphicsWindow.Top
// GraphicsWindow.LastText
// GraphicsWindow.MouseX
// GraphicsWindow.MouseY

// events
// GraphicsWindow.KeyUp
// GraphicsWindow.MouseDown
// GraphicsWindow.MouseUp
// GraphicsWindow.MouseMove
// GraphicsWindow.TextInput

// fns
// GraphicsWindow.Hide()
// GraphicsWindow.DrawEllipse(x, y, width, height)
// GraphicsWindow.FillEllipse(x, y, width, height)
// GraphicsWindow.DrawTriangle(x1, y1, x2, y2, x3, y3)
// GraphicsWindow.FillTriangle(x1, y1, x2, y2, x3, y3)
// GraphicsWindow.DrawBoundText(x, y, width, text)
// GraphicsWindow.DrawResizedImage(imageName, x, y, width, height)
// GraphicsWindow.DrawImage(imageName, x, y)
// GraphicsWindow.SetPixel(x, y, color)
// GraphicsWindow.GetPixel(x, y)
// GraphicsWindow.GetRandomColor()
// GraphicsWindow.ShowMessage(text, title)


function api(env) {
  return {
    backgroundcolor: backgroundcolor,

    // TODO
    title: new DataUnit(),

    height: height,
    width: width,

    penwidth: penwidth,
    pencolor: pencolor,
    brushcolor: brushcolor,

    fontitalic: fontitalic,
    fontname: fontname,
    fontsize: fontsize,

    keydown: keydown,
    get lastkey() {
      if (!phaserGame) {
        return new DataUnit();
      }

      // TODO: expand this
      let keyChar = phaserGame.input.keyboard.lastKey.event.keyCode;

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

    get getcolorfromrgb() { return new DataUnit('graphicswindow.getcolorfromrgb', DATATYPES.DT_FN); },
    get clear() { return new DataUnit('graphicswindow.clear', DATATYPES.DT_FN); },
    get show() { return new DataUnit('graphicswindow.show', DATATYPES.DT_FN); },
    get showmessage() { return new DataUnit('graphicswindow.showmessage', DATATYPES.DT_FN); },
    get fillrectangle() { return new DataUnit('graphicswindow.fillrectangle', DATATYPES.DT_FN); },
    get drawrectangle() { return new DataUnit('graphicswindow.drawrectangle', DATATYPES.DT_FN); },
    get drawline() { return new DataUnit('graphicswindow.drawline', DATATYPES.DT_FN); },
    get drawtext() { return new DataUnit('graphicswindow.drawtext', DATATYPES.DT_FN); }
  };
}

function phaserCreateFactory(resolver) {
  return function phaserCreate() {
    phaserGame.input.keyboard.onDownCallback = phaserKeydown;

    phaserGraphics = phaserGame.add.graphics(0, 0);
    phaserGraphics.boundsPadding = 0;

    // pre-fill the BG
    const fillColor = backgroundcolor.as_num();
    phaserGraphics.beginFill(fillColor);
    phaserGraphics.drawRect(0, 0, width.as_num(), height.as_num());
    phaserGraphics.endFill();

    resolver(new DataUnit());
  }
}

function phaserKeydown() {
  if (keydown.type === DATATYPES.DT_FN) {
    interrupt(keydown.value);
  }
}

export {impl, api};
