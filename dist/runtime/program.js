define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        getargument: function (index) {
            return new data_unit_1.DataUnit();
        },
        delay: function (d) {
            var time = d.as_num();
            return new Promise(function (resolve) { return setTimeout(function () {
                resolve(new data_unit_1.DataUnit());
            }, time); });
        },
        end: function () {
            var justExitError = new Error('justforexiting');
            justExitError.issafetoignoreexit = true;
            throw justExitError;
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get argumentcount() {
                // doing it this way to make sure it is always immutable, never changing
                return new data_unit_1.DataUnit(0, data_unit_1.DATATYPES.DT_NUMBER);
            },
            get getargument() { return new data_unit_1.DataUnit('program.getargument', data_unit_1.DATATYPES.DT_FN); },
            get directory() {
                return new data_unit_1.DataUnit('/', data_unit_1.DATATYPES.DT_STRING);
            },
            get delay() { return new data_unit_1.DataUnit('program.delay', data_unit_1.DATATYPES.DT_FN); },
            get end() { return new data_unit_1.DataUnit('program.end', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=program.js.map