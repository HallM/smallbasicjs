'use strict';

import {DataUnit, DATATYPES} from './data-unit';

const impl = {
  pause: function() {
    if (this.$timer.jstimer) {
      clearTimeout(this.$timer.jstimer);
    }
    this.$timer.jstimer = null;
  },

  resume: function() {
    if (!this.$timer.jstimer) {
      this.$timer.jstimer = startTimer(this.$timer.tick, this.env.$timer.timerInterval.as_num());
    }
  }
};

function api(env) {
  let jstimer = null;
  let timerInterval = new DataUnit(0, DATATYPES.DT_NUMBER);
  let tickHandler = new DataUnit();

  env.$timer = {
    jstimer: jstimer,
    timerInterval: timerInterval,
    tickHandler: tickHandler,
    tick: tick.bind(env)
  };

  timerInterval.on_assign(function onIntervalChange(v) {
    // only restart the timer if the interval changes
    if (jstimer) {
      clearTimeout(jstimer);
      startTimer(env.$timer.tick, v.as_num());
    }
  });

  return {
    interval: timerInterval,
    tick: tickHandler,

    get pause() { return new DataUnit('timer.pause', DATATYPES.DT_FN); },
    get resume() { return new DataUnit('timer.resume', DATATYPES.DT_FN); }
  };
}

function startTimer(t, v) {
  if (v) {
    return setTimeout(t, v);
  }
  return null;
}

function tick() {
  const tickHandler = this.$timer.tickHandler;
  if (tickHandler.type === DATATYPES.DT_FN) {
    this.$interrupt(tickHandler.value);
  }
}

export {impl, api};
