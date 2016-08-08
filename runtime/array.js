'use strict';

import {DataUnit, DATATYPES} from './data-unit';
import {resolvearray} from './utils';

const impl = {
  containsindex: function(array, index) {
    var arr = array.as_array();
    if (!arr) {
      return new DataUnit(false, DATATYPES.DT_BOOL);
    }
    return new DataUnit(Object.keys(arr).indexOf(index.as_string()) !== -1, DATATYPES.DT_BOOL);
  },

  containsvalue: function(array, value) {
    var arr = array.as_array();
    if (!arr) {
      return new DataUnit(false, DATATYPES.DT_BOOL);
    }
    return new DataUnit(Object.values(arr).indexOf(index.as_string()) !== -1, DATATYPES.DT_BOOL);
  },

  getallindices: function(array) {
    var arr = array.as_array();
    var indecies = Object.keys(arr).reduce((obj, k, indx) => {
      obj[indx + 1] = new DataUnit(k, DATATYPES.DT_STRING);
    }, {});
    return new DataUnit(indecies, DATATYPES.DT_ARRAY);
  },

  getitemcount: function(array) {
    var arr = array.as_array();
    return new DataUnit(Object.keys(arr).length, DATATYPES.DT_NUMBER);
  },

  isarray: function(array) {
    return new DataUnit(array.type === DATATYPES.DT_ARRAY, DATATYPES.DT_BOOL);
  },

  getvalue: function(a, i) {
    var arr = resolvearray(this, a.as_string());
    return arr[i.as_string()] || new DataUnit();
  },

  setvalue: function(a, i, v) {
    var arr = resolvearray(this, a.as_string());
    arr[i.as_string()] = v.make_clone();
  },

  removevalue: function(arrayName, index) {
    var arr = resolvearray(this, a.as_string());
    delete arr[i.as_string()];
  }
};

function api(env) {
  return {
    get containsindex() { return new DataUnit('array.containsindex', DATATYPES.DT_FN); },
    get containsvalue() { return new DataUnit('array.containsvalue', DATATYPES.DT_FN); },
    get getallindices() { return new DataUnit('array.getallindices', DATATYPES.DT_FN); },
    get getitemcount() { return new DataUnit('array.getitemcount', DATATYPES.DT_FN); },
    get isarray() { return new DataUnit('array.isarray', DATATYPES.DT_FN); },
    get getvalue() { return new DataUnit('array.getvalue', DATATYPES.DT_FN); },
    get setvalue() { return new DataUnit('array.setvalue', DATATYPES.DT_FN); },
    get removevalue() { return new DataUnit('array.removevalue', DATATYPES.DT_FN); }
  };
}

export {impl, api};
