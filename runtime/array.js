'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

module.exports = function programFactory(env) {
  function __resolvearray(aname) {
    var arr = null;

    if (!env.hasOwnProperty(aname)) {
      console.log('create "env._' + aname + '"');
      env[aname] = new DataUnit({}, DATATYPES.DT_ARRAY);
    }

    return env[aname].cast_array();
  }

  return {
    __resolvearray: __resolvearray,

    containsindex: wrapFunction(function*(array, index) {
      var arr = array.as_array();
      if (!arr) {
        return new DataUnit(false, DATATYPES.DT_BOOL);
      }
      return new DataUnit(Object.keys(arr).indexOf(index.as_string()) !== -1, DATATYPES.DT_BOOL);
    }),

    containsvalue: wrapFunction(function*(array, value) {
      var arr = array.as_array();
      if (!arr) {
        return new DataUnit(false, DATATYPES.DT_BOOL);
      }
      return new DataUnit(Object.values(arr).indexOf(index.as_string()) !== -1, DATATYPES.DT_BOOL);
    }),

    getallindices: wrapFunction(function*(array) {
      var arr = array.as_array();
      var indecies = Object.keys(array).reduce((obj, k, indx) => {
        obj[indx + 1] = new DataUnit(k, DATATYPES.DT_STRING);
      }, {});
      return new DataUnit(indecies, DATATYPES.DT_ARRAY);
    }),

    getitemcount: wrapFunction(function*(array) {
      var arr = array.as_array();
      return new DataUnit(Object.keys(arr).length, DATATYPES.DT_NUMBER);
    }),

    isarray: wrapFunction(function*(array) {
      return new DataUnit(array.type === DATATYPES.DT_ARRAY, DATATYPES.DT_BOOL);
    }),

    getvalue: wrapFunction(function*(a, i) {
      var arr = __resolvearray(a.as_string());
      return arr[i.as_string()] || new DataUnit();
    }),

    setvalue: wrapFunction(function*(a, i, v) {
      var arr = __resolvearray(a.as_string());
      arr[i.as_string()] = v;
    }),

    removevalue: wrapFunction(function*(arrayName, index) {
      var arr = __resolvearray(a.as_string());
      delete arr[i.as_string()];
    })
  };
};
