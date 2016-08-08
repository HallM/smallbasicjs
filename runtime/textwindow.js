'use strict';

import {DataUnit, DATATYPES} from './data-unit';

const impl = {
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

function api(env) {
  return {
    get writeline() { return new DataUnit('textwindow.writeline', DATATYPES.DT_FN); }
  };
}

export {impl, api};
