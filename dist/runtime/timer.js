define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        pause: function () {
            if (this.$timer.jstimer) {
                clearTimeout(this.$timer.jstimer);
            }
            this.$timer.jstimer = null;
        },
        resume: function () {
            if (!this.$timer.jstimer) {
                this.$timer.jstimer = startTimer(this.$timer.tick, this.env.$timer.timerInterval.as_num());
            }
        }
    };
    exports.impl = impl;
    function api(env) {
        var jstimer = null;
        var timerInterval = new data_unit_1.DataUnit(0, data_unit_1.DATATYPES.DT_NUMBER);
        var tickHandler = new data_unit_1.DataUnit();
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
            get pause() { return new data_unit_1.DataUnit('timer.pause', data_unit_1.DATATYPES.DT_FN); },
            get resume() { return new data_unit_1.DataUnit('timer.resume', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
    function startTimer(t, v) {
        if (v) {
            return setTimeout(t, v);
        }
        return null;
    }
    function tick() {
        var tickHandler = this.$timer.tickHandler;
        if (tickHandler.type === data_unit_1.DATATYPES.DT_FN) {
            this.$interrupt(tickHandler.value);
        }
    }
});
//# sourceMappingURL=timer.js.map