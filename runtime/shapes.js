'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const shapes = {
  addrectangle: wrapFunction(function*() { return new DataUnit(); }),
  move: wrapFunction(function*() { return new DataUnit(); }),
  remove: wrapFunction(function*() { return new DataUnit(); }),
  getleft: wrapFunction(function*() { return new DataUnit(); }),
  gettop: wrapFunction(function*() { return new DataUnit(); })
};

module.exports = function shapesFactory(env) {
  return shapes;
};
