define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        append: function (t1, t2) {
            return new data_unit_1.DataUnit(t1.as_string() + t2.as_string(), data_unit_1.DATATYPES.DT_STRING);
        },
        getlength: function (t) {
            return new data_unit_1.DataUnit(t.as_string().length, data_unit_1.DATATYPES.DT_NUMBER);
        },
        issubtext: function (text, subText) {
            return new data_unit_1.DataUnit(text.as_string().indexOf(subText.as_string()) !== -1, data_unit_1.DATATYPES.DT_BOOL);
        },
        endswith: function (t1, t2) {
            var text = t1.as_string();
            var subText = t2.as_string();
            var diff = text.length - subText.length;
            return new data_unit_1.DataUnit(diff >= 0 && text.substring(diff) === subText, data_unit_1.DATATYPES.DT_BOOL);
        },
        startswith: function (t1, t2) {
            var text = t1.as_string();
            var subText = t2.as_string();
            return new data_unit_1.DataUnit(text.length >= subText.length && text.substring(0, subText.length) === subText, data_unit_1.DATATYPES.DT_BOOL);
        },
        getsubtext: function (t, s, e) {
            return new data_unit_1.DataUnit(t.as_string().substring(s, s + e), data_unit_1.DATATYPES.DT_STRING);
        },
        getsubtexttoend: function (text, start) {
            return new data_unit_1.DataUnit(text.as_string().substring(start.as_num()), data_unit_1.DATATYPES.DT_STRING);
        },
        getindexof: function (text, subText) {
            return new data_unit_1.DataUnit(text.as_string().indexOf(subText), data_unit_1.DATATYPES.DT_NUMBER);
        },
        converttolowercase: function (text) {
            return new data_unit_1.DataUnit(text.as_string().toLowerCase(), data_unit_1.DATATYPES.DT_STRING);
        },
        converttouppercase: function (text) {
            return new data_unit_1.DataUnit(text.as_string().toUpperCase(), data_unit_1.DATATYPES.DT_STRING);
        },
        getcharacter: function (characterCode) {
            return new data_unit_1.DataUnit(String.fromCharCode(characterCode.as_num()), data_unit_1.DATATYPES.DT_STRING);
        },
        getcharactercode: function (character) {
            return new data_unit_1.DataUnit(character.charCodeAt(0), data_unit_1.DATATYPES.DT_NUMBER);
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get append() { return new data_unit_1.DataUnit('text.append', data_unit_1.DATATYPES.DT_FN); },
            get getlength() { return new data_unit_1.DataUnit('text.getlength', data_unit_1.DATATYPES.DT_FN); },
            get issubtext() { return new data_unit_1.DataUnit('text.issubtext', data_unit_1.DATATYPES.DT_FN); },
            get endswith() { return new data_unit_1.DataUnit('text.endswith', data_unit_1.DATATYPES.DT_FN); },
            get startswith() { return new data_unit_1.DataUnit('text.startswith', data_unit_1.DATATYPES.DT_FN); },
            get getsubtext() { return new data_unit_1.DataUnit('text.getsubtext', data_unit_1.DATATYPES.DT_FN); },
            get getsubtexttoend() { return new data_unit_1.DataUnit('text.getsubtexttoend', data_unit_1.DATATYPES.DT_FN); },
            get getindexof() { return new data_unit_1.DataUnit('text.getindexof', data_unit_1.DATATYPES.DT_FN); },
            get converttolowercase() { return new data_unit_1.DataUnit('text.converttolowercase', data_unit_1.DATATYPES.DT_FN); },
            get converttouppercase() { return new data_unit_1.DataUnit('text.converttouppercase', data_unit_1.DATATYPES.DT_FN); },
            get getcharacter() { return new data_unit_1.DataUnit('text.getcharacter', data_unit_1.DATATYPES.DT_FN); },
            get getcharactercode() { return new data_unit_1.DataUnit('text.getcharactercode', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=text.js.map