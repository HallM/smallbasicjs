'use strict';

// TODO: change how arrays are compiled to use this
// TODO: how to get arrays by name?
// TODO: how to make sure a var is an array

module.exports = {
  containsindex: function(array, index) {
    if (!array) {
      return false;
    }

    return Object.keys(array).indexOf(index) !== -1;
  },

  containsvalue: function(array, value) {
    if (!array) {
      return false;
    }

    return Object.values(array).indexOf(index) !== -1;
  },

  getallindices: function(array) {
    return Object.keys(array).reduce((obj, k, indx) => {
      obj[indx + 1] = k;
    }, {});
  },

  getitemcount: function(array) {
    return Object.keys(array).length;
  },

  isarray: function(array) {
    return array._isarray === true;
  },

  setvalue: function(arrayName, index, value) {
  },

  getvalue: function(arrayName, index) {
  },

  removevalue: function(arrayName, index) {
  }
};
