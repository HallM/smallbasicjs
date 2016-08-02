'use strict';

module.exports = {
  pi: Math.PI,

  abs: function(num) {
    return Math.abs(num);
  },

  ceiling: function(num) {
    return Math.ciel(num);
  },

  floor: function(num) {
    return Math.floor(num);
  },

  naturallog: function(num) {
    return Math.log(num);
  },

  log: function(num) {
    return Math.log10(num);
  },

  cos: function(num) {
    return Math.cos(num);
  },

  sin: function(num) {
    return Math.sin(num);
  },

  tan: function(num) {
    return Math.tan(num);
  },

  arcsin: function(num) {
    return Math.asin(num);
  },

  arccos: function(num) {
    return Math.acos(num);
  },

  arctan: function(num) {
    return Math.atan(num);
  },

  getdegrees: function(num) {
    return num * 180.0 / Math.PI;
  },

  getradians: function(num) {
    return num * Math.PI / 180.0;
  },

  squareroot: function(num) {
    return Math.sqrt(num);
  },

  power: function(num, exp) {
    return Math.pow(num, exp);
  },

  round: function(num) {
    return Math.round(num);
  },

  max: function(num1, num2) {
    return Math.max(num1, num2);
  },

  min: function(num1, num2) {
    return Math.min(num1, num2);
  },

  remainder: function(dividend, divisor) {
    return dividend % divisor;
  },

  getrandomnumber: function(num) {
    return Math.random() * num;
  }
};
