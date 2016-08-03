'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const text = {
  append: wrapFunction(function*(t1,t2) {
    return new DataUnit(t1.as_string() + t2.as_string(), DATATYPES.DT_STRING);
  }),

  getlength: wrapFunction(function*(t) {
    return new DataUnit(t.as_string().length, DATATYPES.DT_NUMBER);
  }),

  issubtext: wrapFunction(function*(text, subText) {
    return new DataUnit(text.as_string().indexOf(subText.as_string()) !== -1, DATATYPES.DT_BOOL);
  }),

  endswith: wrapFunction(function*(t1, t2) {
    const text = t1.as_string();
    const subText = t2.as_string();

    const diff = text.length - subText.length;
    return new DataUnit(diff >= 0 && text.substring(diff) === subText, DATATYPES.DT_BOOL);
  }),

  startswith: wrapFunction(function*(t1, t2) {
    const text = t1.as_string();
    const subText = t2.as_string();
    return new DataUnit(text.length >= subText.length && text.substring(0, subText.length) === subText, DATATYPES.DT_BOOL);
  }),

  getsubtext: wrapFunction(function*(t, s, e) {
    return new DataUnit(t.as_string().substring(s, s+e), DATATYPES.DT_STRING);
  }),

  getsubtexttoend: wrapFunction(function*(text, start) {
    return new DataUnit(text.as_string().substring(start.as_num()), DATATYPES.DT_STRING);
  }),

  getindexof: wrapFunction(function*(text, subText) {
    return new DataUnit(text.as_string().indexOf(subText), DATATYPES.DT_NUMBER);
  }),

  converttolowercase: wrapFunction(function*(text) {
    return new DataUnit(text.as_string().toLowerCase(), DATATYPES.DT_STRING);
  }),

  converttouppercase: wrapFunction(function*(text) {
    return new DataUnit(text.as_string().toUpperCase(), DATATYPES.DT_STRING);
  }),

  getcharacter: wrapFunction(function*(characterCode) {
    return new DataUnit(String.fromCharCode(characterCode.as_num()), DATATYPES.DT_STRING);
  }),

  getcharactercode: wrapFunction(function*(character) {
    return new DataUnit(character.charCodeAt(0), DATATYPES.DT_NUMBER);
  })
};

module.exports = function textFactory(env) {
  return text;
};
