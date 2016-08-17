'use strict';

import {DataUnit, DATATYPES} from './data-unit';

// module.exports =
const impl = {
  // gettop: function(s) {
  //   let y = 0;
  //   if (s.type === DATATYPES.DT_SHAPE) {
  //     y = s.value.y;
  //   }

  //   return new DataUnit(y, DATATYPES.DT_NUMBER);
  // }
};

// properties
// Turtle.Speed
// Turtle.Angle
// Turtle.X
// Turtle.Y

// fns
// Turtle.Show()
// Turtle.Hide()
// Turtle.PenDown()
// Turtle.PenUp()
// Turtle.Move(distance)
// Turtle.MoveTo(x, y)
// Turtle.Turn(angle)
// Turtle.TurnRight()
// Turtle.TurnLeft()

function api(env) {
  return {
  //  get addrectangle() { return new DataUnit('shapes.addrectangle', DATATYPES.DT_FN); },
  };
}

export {impl, api};
