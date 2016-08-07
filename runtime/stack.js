'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const implstack = {
  getcount: function(stackName) {
    var arr = __resolvearray(this, stackName.as_string());
    return new DataUnit(Object.keys(arr).length, DATATYPES.DT_NUMBER);
  },

  pushvalue: function(stackName, value) {
    var arr = __resolvearray(this, stackName.as_string());
    var nextIndex = Object.keys(arr).length + 1;
    arr[nextIndex] = value;
  },

  popvalue: function(stackName) {
    var arr = __resolvearray(this, stackName.as_string());
    var topIndex = Object.keys(arr).length;
    var value = arr[topIndex];
    delete arr[topIndex];
    return value;
  }
};

const stack = {
  getcount: new DataUnit('stack.getcount', DATATYPES.DT_FN),
  pushvalue: new DataUnit('stack.pushvalue', DATATYPES.DT_FN),
  popvalue: new DataUnit('stack.popvalue', DATATYPES.DT_FN),
};
