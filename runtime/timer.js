'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;
const bluebird = require('bluebird');

module.exports = function timerFactory(env) {
  let jstimer = null;

  let interval = new DataUnit(0, DATATYPES.DT_NUMBER);
  interval.on_assign(onIntervalChange);

  let tickHandler = new DataUnit();

  const timer = {
    interval: interval,

    tick: tickHandler,

    pause: wrapFunction(function*() {
      if (jstimer) {
        clearTimeout(jstimer);
      }
      jstimer = null;
    }),

    resume: wrapFunction(function*() {
      if (!jstimer) {
        startTimer();
      }
    })
  };

  function startTimer() {
    const v = interval.as_num();
    if (v) {
      jstimer = setTimeout(tick, );
    }
  }

  function onIntervalChange() {
    // only restart the timer if the interval changes
    if (jstimer) {
      clearTimeout(jstimer);
      startTimer();
    }
  }

  function tick() {
    if (tickHandler.type === DATATYPES.DT_FN) {
      (bluebird.coroutine(tickHandler.value))();
    }
  }

  return timer;
};
