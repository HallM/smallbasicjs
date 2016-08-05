'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

// module.exports =
function __resolvearray(env, aname) {
  var arr = null;

  if (!env.hasOwnProperty(aname)) {
    console.log('create "env._' + aname + '"');
    env[aname] = new DataUnit({}, DATATYPES.DT_ARRAY);
  }

  return env[aname].cast_array();
}

const implarray = {
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
    var indecies = Object.keys(array).reduce((obj, k, indx) => {
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
    var arr = __resolvearray(this, a.as_string());
    return arr[i.as_string()] || new DataUnit();
  },

  setvalue: function(a, i, v) {
    var arr = __resolvearray(this, a.as_string());
    arr[i.as_string()] = v.make_clone();
  },

  removevalue: function(arrayName, index) {
    var arr = __resolvearray(this, a.as_string());
    delete arr[i.as_string()];
  }
};

const array = {
  containsindex: new DataUnit('array.containsindex', DATATYPES.DT_FN),
  containsvalue: new DataUnit('array.containsvalue', DATATYPES.DT_FN),
  getallindices: new DataUnit('array.getallindices', DATATYPES.DT_FN),
  getitemcount: new DataUnit('array.getitemcount', DATATYPES.DT_FN),
  isarray: new DataUnit('array.isarray', DATATYPES.DT_FN),
  getvalue: new DataUnit('array.getvalue', DATATYPES.DT_FN),
  setvalue: new DataUnit('array.setvalue', DATATYPES.DT_FN),
  removevalue: new DataUnit('array.removevalue', DATATYPES.DT_FN)
};
