'use strict';

import {DataUnit, DATATYPES} from './data-unit';

const impl = {
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

function api(env) {
  return {
    get pi() { return new DataUnit(Math.PI, DATATYPES.DT_NUMBER); },

    get abs() { return new DataUnit('math.abs', DATATYPES.DT_FN); },
    get ceiling() { return new DataUnit('math.ceiling', DATATYPES.DT_FN); },
    get floor() { return new DataUnit('math.floor', DATATYPES.DT_FN); },
    get round() { return new DataUnit('math.round', DATATYPES.DT_FN); },
    get naturallog() { return new DataUnit('math.naturallog', DATATYPES.DT_FN); },
    get log() { return new DataUnit('math.log', DATATYPES.DT_FN); },
    get cos() { return new DataUnit('math.cos', DATATYPES.DT_FN); },
    get sin() { return new DataUnit('math.sin', DATATYPES.DT_FN); },
    get tan() { return new DataUnit('math.tan', DATATYPES.DT_FN); },
    get arcsin() { return new DataUnit('math.arcsin', DATATYPES.DT_FN); },
    get arccos() { return new DataUnit('math.arccos', DATATYPES.DT_FN); },
    get arctan() { return new DataUnit('math.arctan', DATATYPES.DT_FN); },
    get getdegrees() { return new DataUnit('math.getdegrees', DATATYPES.DT_FN); },
    get getradians() { return new DataUnit('math.getradians', DATATYPES.DT_FN); },
    get squareroot() { return new DataUnit('math.squareroot', DATATYPES.DT_FN); },
    get power() { return new DataUnit('math.power', DATATYPES.DT_FN); },
    get max() { return new DataUnit('math.max', DATATYPES.DT_FN); },
    get min() { return new DataUnit('math.min', DATATYPES.DT_FN); },
    get remainder() { return new DataUnit('math.remainder', DATATYPES.DT_FN); },
    get getrandomnumber() { return new DataUnit('math.getrandomnumber', DATATYPES.DT_FN); },
  };
}

export {impl, api};
