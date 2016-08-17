'use strict';

import {DataUnit, DATATYPES} from './data-unit';

// module.exports =
const impl = {
  // TODO: where does the turtle show up?
  show: function() {
    // TODO: load a turtle image sprite instead
    const sprite = this.impl_shapes.addtriangle.apply(this, [
      new DataUnit(-5, DATATYPES.DT_NUMBER), new DataUnit(-5, DATATYPES.DT_NUMBER),
      new DataUnit(5, DATATYPES.DT_NUMBER), new DataUnit(0, DATATYPES.DT_NUMBER),
      new DataUnit(-5, DATATYPES.DT_NUMBER), new DataUnit(5, DATATYPES.DT_NUMBER)
    ]);

    this.$turtle.sprite = sprite.value;
    setTurtlePos.apply(this, []);
  },

  hide: function() {
    this.$turtle.sprite.destroy();
    this.$turtle.sprite = null;
  },

  pendown: function() {
    this.$turtle.penstate = true;
  },

  penup: function() {
    this.$turtle.penstate = false;
  },

  move: function(distance) {
    // calculate future x,y, then do moveto(x,y)
    const angle = this.turtle.angle.as_num();
    const d = distance.as_num();

    let x = this.turtle.x.as_num() + (Math.cos(angle) * d);
    let y = this.turtle.y.as_num() + (Math.sin(angle) * d);

    return animateMoveTo.apply(this, [x, y]);
  },

  moveto: function(x, y) {
    return animateMoveTo.apply(this, [x.as_num(), y.as_num()]);
  },

  turn: function(angle) {
    const curAngle = this.turtle.angle.as_num();
    const newAngle = curAngle + angle.as_num();
    this.turtle.angle.op_assign(new DataUnit(newAngle, DATATYPES.DT_NUMBER));
  },

  turnright: function() {
    const curAngle = this.turtle.angle.as_num();
    const newAngle = curAngle + 90;
    this.turtle.angle.op_assign(new DataUnit(newAngle, DATATYPES.DT_NUMBER));
  },

  turnleft: function() {
    const curAngle = this.turtle.angle.as_num();
    const newAngle = curAngle - 90;
    this.turtle.angle.op_assign(new DataUnit(newAngle, DATATYPES.DT_NUMBER));
  }
};

function animateMoveTo(x, y) {
  const env = this;
  const speed = env.turtle.speed.as_num();

  const startX = new DataUnit(env.turtle.x.as_num(), DATATYPES.DT_NUMBER);
  const startY = new DataUnit(env.turtle.y.as_num(), DATATYPES.DT_NUMBER);

  return new Promise(resolve => {
    // if pendown, create a line
    // animate the turtle to the new point based off speed
    // also, animate the line points (if possible?)

    // TODO: temp instant draw
    env.turtle.x.op_assign(new DataUnit(x, DATATYPES.DT_NUMBER));
    env.turtle.y.op_assign(new DataUnit(y, DATATYPES.DT_NUMBER));
    env.impl_graphicswindow.drawline.apply(env, [startX, startY, env.turtle.x, env.turtle.y]);
    resolve();
  });
}

function setTurtlePos() {
  const x = this.turtle.x.as_num();
  const y = this.turtle.y.as_num();

  if (this.$turtle.sprite) {
    this.$turtle.sprite.x = x;
    this.$turtle.sprite.y = y;
  }
}

function api(env) {
  // TODO: what is speed? px per second? what is default?
  var speed = new DataUnit(1, DATATYPES.DT_NUMBER);
  var angle = new DataUnit(270, DATATYPES.DT_NUMBER);
  var x = new DataUnit(300, DATATYPES.DT_NUMBER);
  var y = new DataUnit(300, DATATYPES.DT_NUMBER);

  x.on_assign(setTurtlePos.bind(env));
  y.on_assign(setTurtlePos.bind(env));

  env.$turtle = {
    penstate: true, // true for "down"/drawing, false for "up"/not-drawing
    sprite: null // used to draw the turtle itself
  };

  return {
    speed: speed,
    angle: angle,
    x: x,
    y: y,

    get show() { return new DataUnit('turtle.show', DATATYPES.DT_FN); },
    get hide() { return new DataUnit('turtle.hide', DATATYPES.DT_FN); },
    get pendown() { return new DataUnit('turtle.pendown', DATATYPES.DT_FN); },
    get penup() { return new DataUnit('turtle.penup', DATATYPES.DT_FN); },
    get move() { return new DataUnit('turtle.move', DATATYPES.DT_FN); },
    get moveto() { return new DataUnit('turtle.moveto', DATATYPES.DT_FN); },
    get turn() { return new DataUnit('turtle.turn', DATATYPES.DT_FN); },
    get turnright() { return new DataUnit('turtle.turnright', DATATYPES.DT_FN); },
    get turnleft() { return new DataUnit('turtle.turnleft', DATATYPES.DT_FN); }
  };
}

export {impl, api};
