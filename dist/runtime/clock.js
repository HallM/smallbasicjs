define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {};
    exports.impl = impl;
    function api(env) {
        return {
            get time() {
                var dt = new Date();
                var v = [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':');
                return new data_unit_1.DataUnit(v, data_unit_1.DATATYPES.DT_STRING);
            },
            get date() {
                var dt = new Date();
                var v = [dt.getMonth() + 1, dt.getDate(), dt.getFullYear()].join('/');
                return new data_unit_1.DataUnit(v, data_unit_1.DATATYPES.DT_STRING);
            },
            get year() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getFullYear(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get month() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getMonth() + 1, data_unit_1.DATATYPES.DT_NUMBER);
            },
            get day() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getDate(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get weekday() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getDay(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get hour() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getHours(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get minute() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getMinutes(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get second() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getSeconds(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get millisecond() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getMilliseconds(), data_unit_1.DATATYPES.DT_NUMBER);
            },
            get elapsedmilliseconds() {
                var dt = new Date();
                return new data_unit_1.DataUnit(dt.getTime(), data_unit_1.DATATYPES.DT_NUMBER);
            },
        };
    }
    exports.api = api;
});
//# sourceMappingURL=clock.js.map