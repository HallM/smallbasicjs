'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

module.exports = function stackFactory(env) {
  const array = require('./array');

  return {
    getcount: wrapFunction(function*(stackName) {
      var arr = array.__resolvearray(stackName.as_string());
      return new DataUnit(Object.keys(arr).length, DATATYPES.DT_NUMBER);
    }),

    pushvalue: wrapFunction(function*(stackName, value) {
      var arr = array.__resolvearray(stackName.as_string());
      var nextIndex = Object.keys(arr).length + 1;
      arr[nextIndex] = value;
    }),

    popvalue: wrapFunction(function*(stackName) {
      var arr = array.__resolvearray(stackName.as_string());
      var topIndex = Object.keys(arr).length;
      var value = arr[topIndex];
      delete arr[topIndex];
      return value;
    })
  };
};
