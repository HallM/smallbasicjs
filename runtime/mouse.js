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
// Mouse.MouseX
// Mouse.MouseY
// Mouse.IsLeftButtonDown
// Mouse.IsRightButtonDown

// fns
// Mouse.HideCursor()
// Mouse.ShowCursor()

function api(env) {
  return {
  //  get addrectangle() { return new DataUnit('shapes.addrectangle', DATATYPES.DT_FN); },
  };
}

export {impl, api};
