'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const math = {
  pi: new DataUnit(Math.PI, DATATYPES.DT_NUMBER),

  abs: wrapFunction(function*(n) {
    return new DataUnit(Math.abs(n.as_num()), DATATYPES.DT_NUMBER);
  }),

  ceiling: wrapFunction(function*(n) {
    return new DataUnit(Math.ceil(n.as_num()), DATATYPES.DT_NUMBER);
  }),

  floor: wrapFunction(function*(n) {
    return new DataUnit(Math.floor(n.as_num()), DATATYPES.DT_NUMBER);
  }),

  round: wrapFunction(function*(n) {
    return new DataUnit(Math.round(n.as_num()), DATATYPES.DT_NUMBER);
  }),

  naturallog: wrapFunction(function*(num) {
    return new DataUnit(Math.log(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  log: wrapFunction(function*(num) {
    return new DataUnit(Math.log10(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  cos: wrapFunction(function*(num) {
    return new DataUnit(Math.cos(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  sin: wrapFunction(function*(num) {
    return new DataUnit(Math.sin(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  tan: wrapFunction(function*(num) {
    return new DataUnit(Math.tan(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  arcsin: wrapFunction(function*(num) {
    return new DataUnit(Math.asin(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  arccos: wrapFunction(function*(num) {
    return new DataUnit(Math.acos(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  arctan: wrapFunction(function*(num) {
    return new DataUnit(Math.atan(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  getdegrees: wrapFunction(function*(num) {
    return new DataUnit(num.as_num() * 180.0 / Math.PI, DATATYPES.DT_NUMBER);
  }),

  getradians: wrapFunction(function*(num) {
    return new DataUnit(num.as_num() * Math.PI / 180.0, DATATYPES.DT_NUMBER);
  }),

  squareroot: wrapFunction(function*(num) {
    return new DataUnit(Math.sqrt(num.as_num()), DATATYPES.DT_NUMBER);
  }),

  power: wrapFunction(function*(num, exp) {
    return new DataUnit(Math.pow(num.as_num(), exp.as_num()), DATATYPES.DT_NUMBER);
  }),

  max: wrapFunction(function*(num1, num2) {
    return new DataUnit(Math.max(num1.as_num(), num2.as_num()), DATATYPES.DT_NUMBER);
  }),

  min: wrapFunction(function*(num1, num2) {
    return new DataUnit(Math.min(num1.as_num(), num2.as_num()), DATATYPES.DT_NUMBER);
  }),

  remainder: wrapFunction(function*(t, b) {
    return new DataUnit(t.as_num() % b.as_num(), DATATYPES.DT_NUMBER);
  }),

  getrandomnumber: wrapFunction(function*(n) {
    return new DataUnit((Math.round(Math.random() * n.as_num()) + 1), DATATYPES.DT_NUMBER);
  })
};

module.exports = function mathFactory(env) {
  return math;
};
