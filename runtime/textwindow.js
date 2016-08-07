'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const impltextwindow = {
  writeline: function(v) {
    console.log(v.as_string());
  },
};

const textwindow = {
  writeline: new DataUnit('textwindow.writeline', DATATYPES.DT_FN)
};
