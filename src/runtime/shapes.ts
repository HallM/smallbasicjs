'use strict';

import {DataUnit, DATATYPES} from './data-unit';
import {Canvs, Sprite, Tween} from './canvs';
import {colorFromNumber, makeEllipsePath} from './utils';

import * as GraphicsWindow from './graphicswindow';

const impl = {
  addrectangle: function(w, h) {
    GraphicsWindow.impl.show.apply(this);

    const canvs: Canvs = this.$graphicswindow.canvs;

    const width = w.as_num();
    const height = h.as_num();

    const brushcolor = colorFromNumber(this.graphicswindow.brushcolor.as_num());
    const penwidth = this.graphicswindow.penwidth.as_num();
    const pencolor = colorFromNumber(this.graphicswindow.pencolor.as_num());

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.fillStyle = brushcolor;
      ctx.strokeStyle = pencolor;
      ctx.lineWidth = penwidth;
      ctx.moveTo(0, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();
      ctx.stroke();
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addellipse: function(w, h) {
    GraphicsWindow.impl.show.apply(this);

    const canvs: Canvs = this.$graphicswindow.canvs;

    const width = w.as_num();
    const height = h.as_num();

    const brushcolor = colorFromNumber(this.graphicswindow.brushcolor.as_num());
    const penwidth = this.graphicswindow.penwidth.as_num();
    const pencolor = colorFromNumber(this.graphicswindow.pencolor.as_num());

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.fillStyle = brushcolor;
      ctx.strokeStyle = pencolor;
      ctx.lineWidth = penwidth;
      makeEllipsePath(ctx, 0, 0, width, height);
      ctx.fill();
      ctx.stroke();
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addtriangle: function(x1, y1, x2, y2, x3, y3) {
    GraphicsWindow.impl.show.apply(this);

    const canvs: Canvs = this.$graphicswindow.canvs;

    const brushcolor = colorFromNumber(this.graphicswindow.brushcolor.as_num());
    const penwidth = this.graphicswindow.penwidth.as_num();
    const pencolor = colorFromNumber(this.graphicswindow.pencolor.as_num());

    const x1v = x1.as_num();
    const x2v = x2.as_num();
    const x3v = x3.as_num();
    const y1v = y1.as_num();
    const y2v = y2.as_num();
    const y3v = y3.as_num();

    const xmin = Math.min(x1v, x2v, x3v);
    const xmax = Math.max(x1v, x2v, x3v);
    const ymin = Math.min(y1v, y2v, y3v);
    const ymax = Math.max(y1v, y2v, y3v);

    const width = xmax - xmin;
    const height = ymax - ymin;

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.fillStyle = brushcolor;
      ctx.strokeStyle = pencolor;
      ctx.lineWidth = penwidth;
      ctx.moveTo(x1v, y1v);
      ctx.lineTo(x2v, y2v);
      ctx.lineTo(x3v, y3v);
      ctx.fill();
      ctx.stroke();
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addline: function(x1, y1, x2, y2) {
    GraphicsWindow.impl.show.apply(this);

    const canvs: Canvs = this.$graphicswindow.canvs;

    const penwidth = this.graphicswindow.penwidth.as_num();
    const pencolor = colorFromNumber(this.graphicswindow.pencolor.as_num());

    const x1v = x1.as_num();
    const x2v = x2.as_num();
    const y1v = y1.as_num();
    const y2v = y2.as_num();

    const xmin = Math.min(x1v, x2v);
    const xmax = Math.max(x1v, x2v);
    const ymin = Math.min(y1v, y2v);
    const ymax = Math.max(y1v, y2v);

    const width = xmax - xmin;
    const height = ymax - ymin;

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.strokeStyle = pencolor;
      ctx.lineWidth = penwidth;
      ctx.moveTo(x1v, y1v);
      ctx.lineTo(x2v, y2v);
      ctx.fill();
      ctx.stroke();
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addtext: function(t) {
    GraphicsWindow.impl.show.apply(this);

    const canvs: Canvs = this.$graphicswindow.canvs;

    const fontSize = this.graphicswindow.fontsize.as_num();
    let fontString = fontSize + 'px ' + this.graphicswindow.fontname.as_string();
    if (this.graphicswindow.fontbold.as_bool()) {
      fontString = 'bold ' + fontString;
    }
    if (this.graphicswindow.fontitalic.as_bool()) {
      fontString = 'italic ' + fontString;
    }

    const brushcolor = colorFromNumber(this.graphicswindow.brushcolor.as_num());

    const text = t.as_string();

    canvs.bglayer.ctx.font = fontString;
    const width = canvs.bglayer.ctx.measureText(text).width;
    const height = fontSize + 4;

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.font = fontString;
      ctx.textBaseline = 'top';
      ctx.fillStyle = brushcolor;
      ctx.fillText(text, 0, 0);
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addimage: function(image) {
    GraphicsWindow.impl.show.apply(this);

    if (image.type !== DATATYPES.DT_IMAGE) {
      return new DataUnit();
    }

    const canvs: Canvs = this.$graphicswindow.canvs;

    const width = image.value.width;
    const height = image.value.height;

    const sprite = new Sprite(width, height, (ctx: CanvasRenderingContext2D) => {
      ctx.drawImage(image.value, 0, 0);
    });

    canvs.spritelayer.addSprite(sprite);

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  settext: function(s, t) {
    if (s.type === DATATYPES.DT_SHAPE) {
      // TODO: what about font changes?
      const newSprite = impl.addtext(t);
      s.value.destroy();
      s.value = newSprite;
    }
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
  },

  rotate: function(s, angle) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    s.value.rotation = angle.as_num() * Math.PI / 180.0;
  },

  zoom: function(s, scaleX, scaleY) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    s.value.scale = {x: scaleX.as_num(), y: scaleY.as_num()};
  },

  animate: function(s, x, y, duration) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    const tween = new Tween(s.value, x.as_num(), y.as_num(), duration.as_num());
    if (s.value.layer) {
      s.value.layer.addTween(tween);
    }
  },

  getopacity: function(s) {
    let opacity = 0;
    if (s.type === DATATYPES.DT_SHAPE) {
      opacity = s.value.alpha;
    }

    return new DataUnit(opacity, DATATYPES.DT_NUMBER);
  },

  setopacity: function(s, level) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    s.value.alpha = level.as_num();
  },

  hideshape: function(s) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    s.value.visible = false;
  },

  showshape: function(s) {
    if (s.type !== DATATYPES.DT_SHAPE) {
      return;
    }

    s.value.visible = true;
  }
};

function api(env) {
  return {
    get addrectangle() { return new DataUnit('shapes.addrectangle', DATATYPES.DT_FN); },
    get addtriangle() { return new DataUnit('shapes.addtriangle', DATATYPES.DT_FN); },
    get move() { return new DataUnit('shapes.move', DATATYPES.DT_FN); },
    get remove() { return new DataUnit('shapes.remove', DATATYPES.DT_FN); },
    get getleft() { return new DataUnit('shapes.getleft', DATATYPES.DT_FN); },
    get gettop() { return new DataUnit('shapes.gettop', DATATYPES.DT_FN); },
    get rotate() { return new DataUnit('shapes.rotate', DATATYPES.DT_FN); },
    get zoom() { return new DataUnit('shapes.zoom', DATATYPES.DT_FN); },
    get animate() { return new DataUnit('shapes.animate', DATATYPES.DT_FN); },
    get getopacity() { return new DataUnit('shapes.getopacity', DATATYPES.DT_FN); },
    get setopacity() { return new DataUnit('shapes.setopacity', DATATYPES.DT_FN); },
    get hideshape() { return new DataUnit('shapes.hideshape', DATATYPES.DT_FN); },
    get showshape() { return new DataUnit('shapes.showshape', DATATYPES.DT_FN); }
  };
}

export {impl, api};
