define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        abs: function (n) {
            return new data_unit_1.DataUnit(Math.abs(n.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        ceiling: function (n) {
            return new data_unit_1.DataUnit(Math.ceil(n.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        floor: function (n) {
            return new data_unit_1.DataUnit(Math.floor(n.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        round: function (n) {
            return new data_unit_1.DataUnit(Math.round(n.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        naturallog: function (num) {
            return new data_unit_1.DataUnit(Math.log(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        log: function (num) {
            return new data_unit_1.DataUnit((Math.log(num.as_num()) / Math.LN10), data_unit_1.DATATYPES.DT_NUMBER);
        },
        cos: function (num) {
            return new data_unit_1.DataUnit(Math.cos(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        sin: function (num) {
            return new data_unit_1.DataUnit(Math.sin(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        tan: function (num) {
            return new data_unit_1.DataUnit(Math.tan(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        arcsin: function (num) {
            return new data_unit_1.DataUnit(Math.asin(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        arccos: function (num) {
            return new data_unit_1.DataUnit(Math.acos(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        arctan: function (num) {
            return new data_unit_1.DataUnit(Math.atan(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        getdegrees: function (num) {
            return new data_unit_1.DataUnit(num.as_num() * 180.0 / Math.PI, data_unit_1.DATATYPES.DT_NUMBER);
        },
        getradians: function (num) {
            return new data_unit_1.DataUnit(num.as_num() * Math.PI / 180.0, data_unit_1.DATATYPES.DT_NUMBER);
        },
        squareroot: function (num) {
            return new data_unit_1.DataUnit(Math.sqrt(num.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        power: function (num, exp) {
            return new data_unit_1.DataUnit(Math.pow(num.as_num(), exp.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        max: function (num1, num2) {
            return new data_unit_1.DataUnit(Math.max(num1.as_num(), num2.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        min: function (num1, num2) {
            return new data_unit_1.DataUnit(Math.min(num1.as_num(), num2.as_num()), data_unit_1.DATATYPES.DT_NUMBER);
        },
        remainder: function (t, b) {
            return new data_unit_1.DataUnit(t.as_num() % b.as_num(), data_unit_1.DATATYPES.DT_NUMBER);
        },
        getrandomnumber: function (n) {
            return new data_unit_1.DataUnit((Math.floor(Math.random() * n.as_num()) + 1), data_unit_1.DATATYPES.DT_NUMBER);
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get pi() { return new data_unit_1.DataUnit(Math.PI, data_unit_1.DATATYPES.DT_NUMBER); },
            get abs() { return new data_unit_1.DataUnit('math.abs', data_unit_1.DATATYPES.DT_FN); },
            get ceiling() { return new data_unit_1.DataUnit('math.ceiling', data_unit_1.DATATYPES.DT_FN); },
            get floor() { return new data_unit_1.DataUnit('math.floor', data_unit_1.DATATYPES.DT_FN); },
            get round() { return new data_unit_1.DataUnit('math.round', data_unit_1.DATATYPES.DT_FN); },
            get naturallog() { return new data_unit_1.DataUnit('math.naturallog', data_unit_1.DATATYPES.DT_FN); },
            get log() { return new data_unit_1.DataUnit('math.log', data_unit_1.DATATYPES.DT_FN); },
            get cos() { return new data_unit_1.DataUnit('math.cos', data_unit_1.DATATYPES.DT_FN); },
            get sin() { return new data_unit_1.DataUnit('math.sin', data_unit_1.DATATYPES.DT_FN); },
            get tan() { return new data_unit_1.DataUnit('math.tan', data_unit_1.DATATYPES.DT_FN); },
            get arcsin() { return new data_unit_1.DataUnit('math.arcsin', data_unit_1.DATATYPES.DT_FN); },
            get arccos() { return new data_unit_1.DataUnit('math.arccos', data_unit_1.DATATYPES.DT_FN); },
            get arctan() { return new data_unit_1.DataUnit('math.arctan', data_unit_1.DATATYPES.DT_FN); },
            get getdegrees() { return new data_unit_1.DataUnit('math.getdegrees', data_unit_1.DATATYPES.DT_FN); },
            get getradians() { return new data_unit_1.DataUnit('math.getradians', data_unit_1.DATATYPES.DT_FN); },
            get squareroot() { return new data_unit_1.DataUnit('math.squareroot', data_unit_1.DATATYPES.DT_FN); },
            get power() { return new data_unit_1.DataUnit('math.power', data_unit_1.DATATYPES.DT_FN); },
            get max() { return new data_unit_1.DataUnit('math.max', data_unit_1.DATATYPES.DT_FN); },
            get min() { return new data_unit_1.DataUnit('math.min', data_unit_1.DATATYPES.DT_FN); },
            get remainder() { return new data_unit_1.DataUnit('math.remainder', data_unit_1.DATATYPES.DT_FN); },
            get getrandomnumber() { return new data_unit_1.DataUnit('math.getrandomnumber', data_unit_1.DATATYPES.DT_FN); },
        };
    }
    exports.api = api;
});
//# sourceMappingURL=math.js.map