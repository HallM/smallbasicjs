'use strict';

import {DataUnit, DATATYPES} from './data-unit';

// module.exports =
const impl = {
  addrectangle: function(w, h) {
    const phaserGame = this.$graphicswindow.phaserGame;

    const width = w.as_num();
    const height = h.as_num();

    const brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
    const penwidth = '#' + ('000000' + this.graphicswindow.penwidth.as_num()).slice(-6);
    const pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);

    let bmd = phaserGame.add.bitmapData(width, height);
    bmd.ctx.beginPath();
    bmd.ctx.fillStyle = brushcolor;
    bmd.ctx.strokeStyle = pencolor;
    bmd.ctx.lineWidth = penwidth;
    bmd.ctx.moveTo(0, 0);
    bmd.ctx.lineTo(width, 0);
    bmd.ctx.lineTo(width, height);
    bmd.ctx.lineTo(0, height);
    bmd.ctx.fill();
    bmd.ctx.stroke();

    const sprite = phaserGame.add.sprite(0, 0, bmd);
    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addellipse: function(w, h) {
    const phaserGame = this.$graphicswindow.phaserGame;

    const width = w.as_num();
    const height = h.as_num();

    const graphics = phaserGame.add.graphics(0, 0);

    const brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
    const penwidth = '#' + ('000000' + this.graphicswindow.penwidth.as_num()).slice(-6);
    const pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);

    graphics.beginFill(brushcolor);
    graphics.lineStyle(penwidth, pencolor, 1);

    graphics.drawEllipse(0, 0, width, height);

    phaserGraphics.endFill();

    const sprite = game.add.sprite(w, h, graphics.generateTexture());
    graphics.destroy();

    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addtriangle: function(x1, y1, x2, y2, x3, y3) {
    const phaserGame = this.$graphicswindow.phaserGame;

    const brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);
    const penwidth = '#' + ('000000' + this.graphicswindow.penwidth.as_num()).slice(-6);
    const pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);

    let bmd = phaserGame.add.bitmapData(width, height);
    bmd.ctx.beginPath();
    bmd.ctx.fillStyle = brushcolor;
    bmd.ctx.strokeStyle = pencolor;
    bmd.ctx.lineWidth = penwidth;
    bmd.ctx.moveTo(x1.as_num(), y1.as_num());
    bmd.ctx.lineTo(x2.as_num(), y2.as_num());
    bmd.ctx.lineTo(x3.as_num(), y3.as_num());
    bmd.ctx.fill();
    bmd.ctx.stroke();

    const sprite = phaserGame.add.sprite(0, 0, bmd);
    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addline: function(x1, y1, x2, y2) {
    const phaserGame = this.$graphicswindow.phaserGame;

    const penwidth = '#' + ('000000' + this.graphicswindow.penwidth.as_num()).slice(-6);
    const pencolor = '#' + ('000000' + this.graphicswindow.pencolor.value.toString(16)).slice(-6);

    let bmd = phaserGame.add.bitmapData(width, height);
    bmd.ctx.beginPath();
    bmd.ctx.strokeStyle = pencolor;
    bmd.ctx.lineWidth = penwidth;
    bmd.ctx.moveTo(x1.as_num(), y1.as_num());
    bmd.ctx.lineTo(x2.as_num(), y2.as_num());
    bmd.ctx.stroke();

    const sprite = phaserGame.add.sprite(0, 0, bmd);
    return new DataUnit(sprite, DATATYPES.DT_SHAPE);
  },

  addtext: function(t) {
    const phaserGame = this.$graphicswindow.phaserGame;

    const xPos = x.as_num();
    const yPos = y.as_num();

    const brushcolor = '#' + ('000000' + this.graphicswindow.brushcolor.value.toString(16)).slice(-6);

    let txtOptions = {
      font: this.graphicswindow.fontname.as_string(),
      fontSize: this.graphicswindow.fontsize.as_num() + 'px',
      fill: '#' + brushcolor,
    };

    if (this.graphicswindow.fontitalic.as_bool()) {
      txtOptions.fontStyle = 'italic';
    }

    const phaserText = phaserGame.add.text(xPos, yPos, t.as_string(), txtOptions);
    return new DataUnit(phaserText, DATATYPES.DT_SHAPE);
  },

  addimage: function(imageName) {
    const internalName = env.$imagelist.images[imageName.as_string()];
    if (!internalName) {
      return new DataUnit();
    }

    const image = game.add.sprite(0, 0, internalName.value);
    return new DataUnit(image, DATATYPES.DT_SHAPE);
  },

  settext: function(s, t) {
    if (s.type === DATATYPES.DT_SHAPE) {
      s.value.text = t.as_string();
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

    return new Promise(resolve => {
      var tween = game.add.tween(s.value);
      tween.to({x: x.as_num(), y: y.as_num()}, duration.as_num(), Phaser.Easing.Linear.None);

      tween.onComplete.addOnce(() => {
        resolve();
      }, this);

      tween.start();
    });
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
