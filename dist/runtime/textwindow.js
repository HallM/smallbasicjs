define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        writeline: function (v) {
            console.log(v.as_string());
        },
    };
    exports.impl = impl;
    // properties
    // TextWindow.ForegroundColor
    // TextWindow.BackgroundColor
    // TextWindow.CursorLeft
    // TextWindow.CursorTop
    // TextWindow.Left
    // TextWindow.Title
    // TextWindow.Top
    // fns
    // TextWindow.Show()
    // TextWindow.Hide()
    // TextWindow.Clear()
    // TextWindow.Pause()
    // TextWindow.PauseIfVisible()
    // TextWindow.PauseWithoutMessage()
    // TextWindow.Read()
    // TextWindow.ReadKey()
    // TextWindow.ReadNumber()
    // TextWindow.Write(data)
    function api(env) {
        return {
            get writeline() { return new data_unit_1.DataUnit('textwindow.writeline', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=textwindow.js.map