'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const implmath = {
  abs: function(n) {
    return new DataUnit(Math.abs(n.as_num()), DATATYPES.DT_NUMBER);
  },

  ceiling: function(n) {
    return new DataUnit(Math.ceil(n.as_num()), DATATYPES.DT_NUMBER);
  },

  floor: function(n) {
    return new DataUnit(Math.floor(n.as_num()), DATATYPES.DT_NUMBER);
  },

  round: function(n) {
    return new DataUnit(Math.round(n.as_num()), DATATYPES.DT_NUMBER);
  },

  naturallog: function(num) {
    return new DataUnit(Math.log(num.as_num()), DATATYPES.DT_NUMBER);
  },

  log: function(num) {
    return new DataUnit(Math.log10(num.as_num()), DATATYPES.DT_NUMBER);
  },

  cos: function(num) {
    return new DataUnit(Math.cos(num.as_num()), DATATYPES.DT_NUMBER);
  },

  sin: function(num) {
    return new DataUnit(Math.sin(num.as_num()), DATATYPES.DT_NUMBER);
  },

  tan: function(num) {
    return new DataUnit(Math.tan(num.as_num()), DATATYPES.DT_NUMBER);
  },

  arcsin: function(num) {
    return new DataUnit(Math.asin(num.as_num()), DATATYPES.DT_NUMBER);
  },

  arccos: function(num) {
    return new DataUnit(Math.acos(num.as_num()), DATATYPES.DT_NUMBER);
  },

  arctan: function(num) {
    return new DataUnit(Math.atan(num.as_num()), DATATYPES.DT_NUMBER);
  },

  getdegrees: function(num) {
    return new DataUnit(num.as_num() * 180.0 / Math.PI, DATATYPES.DT_NUMBER);
  },

  getradians: function(num) {
    return new DataUnit(num.as_num() * Math.PI / 180.0, DATATYPES.DT_NUMBER);
  },

  squareroot: function(num) {
    return new DataUnit(Math.sqrt(num.as_num()), DATATYPES.DT_NUMBER);
  },

  power: function(num, exp) {
    return new DataUnit(Math.pow(num.as_num(), exp.as_num()), DATATYPES.DT_NUMBER);
  },

  max: function(num1, num2) {
    return new DataUnit(Math.max(num1.as_num(), num2.as_num()), DATATYPES.DT_NUMBER);
  },

  min: function(num1, num2) {
    return new DataUnit(Math.min(num1.as_num(), num2.as_num()), DATATYPES.DT_NUMBER);
  },

  remainder: function(t, b) {
    return new DataUnit(t.as_num() % b.as_num(), DATATYPES.DT_NUMBER);
  },

  getrandomnumber: function(n) {
    return new DataUnit((Math.floor(Math.random() * n.as_num()) + 1), DATATYPES.DT_NUMBER);
  }
};

const math = {
  pi: new DataUnit(Math.PI, DATATYPES.DT_NUMBER),

  abs: new DataUnit('math.abs', DATATYPES.DT_FN),
  ceiling: new DataUnit('math.ceiling', DATATYPES.DT_FN),
  floor: new DataUnit('math.floor', DATATYPES.DT_FN),
  round: new DataUnit('math.round', DATATYPES.DT_FN),
  naturallog: new DataUnit('math.naturallog', DATATYPES.DT_FN),
  log: new DataUnit('math.log', DATATYPES.DT_FN),
  cos: new DataUnit('math.cos', DATATYPES.DT_FN),
  sin: new DataUnit('math.sin', DATATYPES.DT_FN),
  tan: new DataUnit('math.tan', DATATYPES.DT_FN),
  arcsin: new DataUnit('math.arcsin', DATATYPES.DT_FN),
  arccos: new DataUnit('math.arccos', DATATYPES.DT_FN),
  arctan: new DataUnit('math.arctan', DATATYPES.DT_FN),
  getdegrees: new DataUnit('math.getdegrees', DATATYPES.DT_FN),
  getradians: new DataUnit('math.getradians', DATATYPES.DT_FN),
  squareroot: new DataUnit('math.squareroot', DATATYPES.DT_FN),
  power: new DataUnit('math.power', DATATYPES.DT_FN),
  max: new DataUnit('math.max', DATATYPES.DT_FN),
  min: new DataUnit('math.min', DATATYPES.DT_FN),
  remainder: new DataUnit('math.remainder', DATATYPES.DT_FN),
  getrandomnumber: new DataUnit('math.getrandomnumber', DATATYPES.DT_FN),
};
