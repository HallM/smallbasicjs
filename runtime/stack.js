'use strict';

import {DataUnit, DATATYPES} from './data-unit';
import {resolvearray} from './utils';

const impl = {
  getcount: function(stackName) {
    var arr = resolvearray(this, stackName.as_string());
    return new DataUnit(Object.keys(arr).length, DATATYPES.DT_NUMBER);
  },

  pushvalue: function(stackName, value) {
    var arr = resolvearray(this, stackName.as_string());
    var nextIndex = Object.keys(arr).length + 1;
    arr[nextIndex] = value;
  },

  popvalue: function(stackName) {
    var arr = resolvearray(this, stackName.as_string());
    var topIndex = Object.keys(arr).length;
    var value = arr[topIndex];
    delete arr[topIndex];
    return value;
  }
};

function api(env) {
  return {
    get getcount() { return new DataUnit('stack.getcount', DATATYPES.DT_FN); },
    get pushvalue() { return new DataUnit('stack.pushvalue', DATATYPES.DT_FN); },
    get popvalue() { return new DataUnit('stack.popvalue', DATATYPES.DT_FN); }
  };
}

export {impl, api};
