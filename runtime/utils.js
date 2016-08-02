'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;

exports.wrapFunction = function wrapFunction(gen) {
  return new DataUnit(gen, DATATYPES.DT_FN);
};
