'use strict';

import {DataUnit, DATATYPES} from './data-unit';

let jstimer = null;

let timerInterval = new DataUnit(0, DATATYPES.DT_NUMBER);
timerInterval.on_assign(onIntervalChange);

let tickHandler = new DataUnit();

const impl = {
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

function api(env) {
  return {
    interval: timerInterval,
    tick: tickHandler,

    get pause() { return new DataUnit('timer.pause', DATATYPES.DT_FN); },
    get resume() { return new DataUnit('timer.resume', DATATYPES.DT_FN); }
  };
}

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

export {impl, api};
