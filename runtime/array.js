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
    // TODO: update to DataUnit system
    // containsindex: function(array, index) {
    //   if (!array) {
    //     return false;
    //   }

    //   return Object.keys(array).indexOf(index) !== -1;
    // },

    // containsvalue: function(array, value) {
    //   if (!array) {
    //     return false;
    //   }

    //   return Object.values(array).indexOf(index) !== -1;
    // },

    // getallindices: function(array) {
    //   return Object.keys(array).reduce((obj, k, indx) => {
    //     obj[indx + 1] = k;
    //   }, {});
    // },

    // getitemcount: function(array) {
    //   return Object.keys(array).length;
    // },

    // isarray: function(array) {
    //   return array._isarray === true;
    // },

    getvalue: wrapFunction(function*(a, i) {
      var arr = __resolvearray(a.as_string());
      return arr[i.as_string()] || new DataUnit();
    }),

    setvalue: wrapFunction(function*(a, i, v) {
      var arr = __resolvearray(a.as_string());
      arr[i.as_string()] = v;
    }),

    // removevalue: function(arrayName, index) {
    // }
  };
};
