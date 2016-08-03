'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const program = {
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

module.exports = function programFactory(env) {
  return program;
};
