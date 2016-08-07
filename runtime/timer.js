'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;
const bluebird = require('bluebird');

let jstimer = null;

let timerInterval = new DataUnit(0, DATATYPES.DT_NUMBER);
timerInterval.on_assign(onIntervalChange);

let tickHandler = new DataUnit();

const impltimer = {
  pause: function() {
    if (jstimer) {
      clearTimeout(jstimer);
    }
    jstimer = null;
  },

  resume: function() {
    if (!jstimer) {
      startTimer();
    }
  }
};

const timer = {
  interval: timerInterval,
  tick: tickHandler,

  pause: new DataUnit('timer.pause', DATATYPES.DT_FN),
  resume: new DataUnit('timer.resume', DATATYPES.DT_FN)
};

function startTimer() {
  const v = timerInterval.as_num();
  if (v) {
    jstimer = setTimeout(tick, v);
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
    interrupt(tickHandler.value);
  }
}
