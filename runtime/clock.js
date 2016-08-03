'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const clock = {
  get time() {
    const dt = new Date();
    const v = [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':');
    return new DataUnit(v, DATATYPES.DT_STRING);
  },

  get date() {
    const dt = new Date();
    const v = [dt.getMonth() + 1, dt.getDate(), dt.getFullYear()].join('/');
    return new DataUnit(v, DATATYPES.DT_STRING);
  },

  get year() {
    const dt = new Date();
    return new DataUnit(dt.getFullYear(), DATATYPES.DT_NUMBER);
  },

  get month() {
    const dt = new Date();
    return new DataUnit(dt.getMonth() + 1, DATATYPES.DT_NUMBER);
  },

  get day() {
    const dt = new Date();
    return new DataUnit(dt.getDate(), DATATYPES.DT_NUMBER);
  },

  get weekday() {
    const dt = new Date();
    return new DataUnit(dt.getDay(), DATATYPES.DT_NUMBER);
  },

  get hour() {
    const dt = new Date();
    return new DataUnit(dt.getHours(), DATATYPES.DT_NUMBER);
  },

  get minute() {
    const dt = new Date();
    return new DataUnit(dt.getMinutes(), DATATYPES.DT_NUMBER);
  },

  get second() {
    const dt = new Date();
    return new DataUnit(dt.getSeconds(), DATATYPES.DT_NUMBER);
  },

  get millisecond() {
    const dt = new Date();
    return new DataUnit(dt.getMilliseconds(), DATATYPES.DT_NUMBER);
  },

  get elapsedmilliseconds() {
    const dt = new Date();
    return new DataUnit(dt.getTime(), DATATYPES.DT_NUMBER);
  },
};
