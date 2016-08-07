'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const impltextwindow = {
  writeline: function(v) {
    console.log(v.as_string());
  },
};

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

const textwindow = {
  get writeline() { return new DataUnit('textwindow.writeline', DATATYPES.DT_FN); }
};
