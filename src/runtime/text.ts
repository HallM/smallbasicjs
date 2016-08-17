'use strict';

import {DataUnit, DATATYPES} from './data-unit';

const impl = {
  append: function(t1,t2) {
    return new DataUnit(t1.as_string() + t2.as_string(), DATATYPES.DT_STRING);
  },

  getlength: function(t) {
    return new DataUnit(t.as_string().length, DATATYPES.DT_NUMBER);
  },

  issubtext: function(text, subText) {
    return new DataUnit(text.as_string().indexOf(subText.as_string()) !== -1, DATATYPES.DT_BOOL);
  },

  endswith: function(t1, t2) {
    const text = t1.as_string();
    const subText = t2.as_string();

    const diff = text.length - subText.length;
    return new DataUnit(diff >= 0 && text.substring(diff) === subText, DATATYPES.DT_BOOL);
  },

  startswith: function(t1, t2) {
    const text = t1.as_string();
    const subText = t2.as_string();
    return new DataUnit(text.length >= subText.length && text.substring(0, subText.length) === subText, DATATYPES.DT_BOOL);
  },

  getsubtext: function(t, s, e) {
    return new DataUnit(t.as_string().substring(s, s+e), DATATYPES.DT_STRING);
  },

  getsubtexttoend: function(text, start) {
    return new DataUnit(text.as_string().substring(start.as_num()), DATATYPES.DT_STRING);
  },

  getindexof: function(text, subText) {
    return new DataUnit(text.as_string().indexOf(subText), DATATYPES.DT_NUMBER);
  },

  converttolowercase: function(text) {
    return new DataUnit(text.as_string().toLowerCase(), DATATYPES.DT_STRING);
  },

  converttouppercase: function(text) {
    return new DataUnit(text.as_string().toUpperCase(), DATATYPES.DT_STRING);
  },

  getcharacter: function(characterCode) {
    return new DataUnit(String.fromCharCode(characterCode.as_num()), DATATYPES.DT_STRING);
  },

  getcharactercode: function(character) {
    return new DataUnit(character.charCodeAt(0), DATATYPES.DT_NUMBER);
  }
};

function api(env) {
  return {
    get append() { return new DataUnit('text.append', DATATYPES.DT_FN); },
    get getlength() { return new DataUnit('text.getlength', DATATYPES.DT_FN); },
    get issubtext() { return new DataUnit('text.issubtext', DATATYPES.DT_FN); },
    get endswith() { return new DataUnit('text.endswith', DATATYPES.DT_FN); },
    get startswith() { return new DataUnit('text.startswith', DATATYPES.DT_FN); },
    get getsubtext() { return new DataUnit('text.getsubtext', DATATYPES.DT_FN); },
    get getsubtexttoend() { return new DataUnit('text.getsubtexttoend', DATATYPES.DT_FN); },
    get getindexof() { return new DataUnit('text.getindexof', DATATYPES.DT_FN); },
    get converttolowercase() { return new DataUnit('text.converttolowercase', DATATYPES.DT_FN); },
    get converttouppercase() { return new DataUnit('text.converttouppercase', DATATYPES.DT_FN); },
    get getcharacter() { return new DataUnit('text.getcharacter', DATATYPES.DT_FN); },
    get getcharactercode() { return new DataUnit('text.getcharactercode', DATATYPES.DT_FN); }
  };
}

export {impl, api};
