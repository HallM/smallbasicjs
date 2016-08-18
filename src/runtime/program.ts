'use strict';

import {DataUnit, DATATYPES} from './data-unit';
declare var Promise: any;

const impl = {
  getargument: function(index) {
    return new DataUnit();
  },

  delay: function(d) {
    const time = d.as_num();
    return new Promise((resolve) => setTimeout(function() {
      resolve(new DataUnit());
    }, time));
  },

  end: function() {
    this.$finished = true;
  }
};

function api(env) {
  return {
    get argumentcount() {
      // doing it this way to make sure it is always immutable, never changing
      return new DataUnit(0, DATATYPES.DT_NUMBER);
    },

    get getargument() { return new DataUnit('program.getargument', DATATYPES.DT_FN); },

    get directory() {
      return new DataUnit('/', DATATYPES.DT_STRING);
    },

    get delay() { return new DataUnit('program.delay', DATATYPES.DT_FN); },
    get end() { return new DataUnit('program.end', DATATYPES.DT_FN); }
  };
}

export {impl, api};
