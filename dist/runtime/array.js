define(["require", "exports", './data-unit', './utils'], function (require, exports, data_unit_1, utils_1) {
    'use strict';
    var impl = {
        containsindex: function (array, index) {
            var arr = array.as_array();
            if (!arr) {
                return new data_unit_1.DataUnit(false, data_unit_1.DATATYPES.DT_BOOL);
            }
            return new data_unit_1.DataUnit(Object.keys(arr).indexOf(index.as_string()) !== -1, data_unit_1.DATATYPES.DT_BOOL);
        },
        containsvalue: function (array, value) {
            var arr = array.as_array();
            if (!arr) {
                return new data_unit_1.DataUnit(false, data_unit_1.DATATYPES.DT_BOOL);
            }
            for (var p in arr) {
                if (arr[p].op_eq(value)) {
                    return new data_unit_1.DataUnit(true, data_unit_1.DATATYPES.DT_BOOL);
                }
            }
            return new data_unit_1.DataUnit(false, data_unit_1.DATATYPES.DT_BOOL);
        },
        getallindices: function (array) {
            var arr = array.as_array();
            var indecies = Object.keys(arr).reduce(function (obj, k, indx) {
                obj[indx + 1] = new data_unit_1.DataUnit(k, data_unit_1.DATATYPES.DT_STRING);
                return obj;
            }, {});
            return new data_unit_1.DataUnit(indecies, data_unit_1.DATATYPES.DT_ARRAY);
        },
        getitemcount: function (array) {
            var arr = array.as_array();
            return new data_unit_1.DataUnit(Object.keys(arr).length, data_unit_1.DATATYPES.DT_NUMBER);
        },
        isarray: function (array) {
            return new data_unit_1.DataUnit(array.type === data_unit_1.DATATYPES.DT_ARRAY, data_unit_1.DATATYPES.DT_BOOL);
        },
        getvalue: function (arrayName, index) {
            var arr = utils_1.resolvearray(this, arrayName.as_string());
            return arr[index.as_string()] || new data_unit_1.DataUnit();
        },
        setvalue: function (arrayName, index, value) {
            var arr = utils_1.resolvearray(this, arrayName.as_string());
            arr[index.as_string()] = value.make_clone();
        },
        removevalue: function (arrayName, index) {
            var arr = utils_1.resolvearray(this, arrayName.as_string());
            delete arr[index.as_string()];
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get containsindex() { return new data_unit_1.DataUnit('array.containsindex', data_unit_1.DATATYPES.DT_FN); },
            get containsvalue() { return new data_unit_1.DataUnit('array.containsvalue', data_unit_1.DATATYPES.DT_FN); },
            get getallindices() { return new data_unit_1.DataUnit('array.getallindices', data_unit_1.DATATYPES.DT_FN); },
            get getitemcount() { return new data_unit_1.DataUnit('array.getitemcount', data_unit_1.DATATYPES.DT_FN); },
            get isarray() { return new data_unit_1.DataUnit('array.isarray', data_unit_1.DATATYPES.DT_FN); },
            get getvalue() { return new data_unit_1.DataUnit('array.getvalue', data_unit_1.DATATYPES.DT_FN); },
            get setvalue() { return new data_unit_1.DataUnit('array.setvalue', data_unit_1.DATATYPES.DT_FN); },
            get removevalue() { return new data_unit_1.DataUnit('array.removevalue', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=array.js.map