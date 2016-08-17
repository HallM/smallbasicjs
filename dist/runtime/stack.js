define(["require", "exports", './data-unit', './utils'], function (require, exports, data_unit_1, utils_1) {
    'use strict';
    var impl = {
        getcount: function (stackName) {
            var arr = utils_1.resolvearray(this, stackName.as_string());
            return new data_unit_1.DataUnit(Object.keys(arr).length, data_unit_1.DATATYPES.DT_NUMBER);
        },
        pushvalue: function (stackName, value) {
            var arr = utils_1.resolvearray(this, stackName.as_string());
            var nextIndex = Object.keys(arr).length + 1;
            arr[nextIndex] = value;
        },
        popvalue: function (stackName) {
            var arr = utils_1.resolvearray(this, stackName.as_string());
            var topIndex = Object.keys(arr).length;
            var value = arr[topIndex];
            delete arr[topIndex];
            return value;
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get getcount() { return new data_unit_1.DataUnit('stack.getcount', data_unit_1.DATATYPES.DT_FN); },
            get pushvalue() { return new data_unit_1.DataUnit('stack.pushvalue', data_unit_1.DATATYPES.DT_FN); },
            get popvalue() { return new data_unit_1.DataUnit('stack.popvalue', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=stack.js.map