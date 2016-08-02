'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const math = {
  // TODO: update to DataUnit system
  // pi: Math.PI,

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

  // naturallog: function(num) {
  //   return Math.log(num);
  // },

  // log: function(num) {
  //   return Math.log10(num);
  // },

  // cos: function(num) {
  //   return Math.cos(num);
  // },

  // sin: function(num) {
  //   return Math.sin(num);
  // },

  // tan: function(num) {
  //   return Math.tan(num);
  // },

  // arcsin: function(num) {
  //   return Math.asin(num);
  // },

  // arccos: function(num) {
  //   return Math.acos(num);
  // },

  // arctan: function(num) {
  //   return Math.atan(num);
  // },

  // getdegrees: function(num) {
  //   return num * 180.0 / Math.PI;
  // },

  // getradians: function(num) {
  //   return num * Math.PI / 180.0;
  // },

  // squareroot: function(num) {
  //   return Math.sqrt(num);
  // },

  // power: function(num, exp) {
  //   return Math.pow(num, exp);
  // },

  // max: function(num1, num2) {
  //   return Math.max(num1, num2);
  // },

  // min: function(num1, num2) {
  //   return Math.min(num1, num2);
  // },

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
