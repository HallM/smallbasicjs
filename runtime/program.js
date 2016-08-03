'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const program = {
  get argumentcount() {
    // doing it this way to make sure it is always immutable, never changing
    return new DataUnit(0, DATATYPES.DT_NUMBER);
  },

  getargument: wrapFunction(function*(index) {
    return new DataUnit();
  }),

  get directory() {
    return new DataUnit('/', DATATYPES.DT_STRING);
  },

  delay: wrapFunction(function*(d) {
    const time = d.as_num();
    yield new Promise((resolve) => setTimeout(resolve, time));
    return new DataUnit();
  }),

  end: wrapFunction(function*() {
    const justExitError = new Error('justforexiting');
    justExitError.issafetoignoreexit = true;
    throw justExitError;
  })
};

// module.exports =
function programFactory(env) {
  return program;
};
