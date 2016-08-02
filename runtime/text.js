'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;

const text = {
  // TODO: update to DataUnit system
  append: wrapFunction(function*(t1,t2) {
    return new DataUnit(t1.as_string() + t2.as_string(), DATATYPES.DT_STRING);
  }),

  getlength: wrapFunction(function*(t) {
    return new DataUnit(t.as_string().length, DATATYPES.DT_NUMBER);
  }),

  // issubtext: function(text, subText) {
  //   return text.indexOf(subText) !== -1;
  // },

  // endswith: function(text, subText) {
  //   var diff = text.length - subText.length;
  //   return diff >= 0 && text.substring(diff) === subText;
  // },

  // startswith: function(text, subText) {
  //   return text.length >= subText.length && text.substring(0, subText.length) === subText;
  // },

  getsubtext: wrapFunction(function*(t, s, e) {
    return new DataUnit(t.as_string().substring(s, s+e), DATATYPES.DT_STRING);
  }),

  // getsubtexttoend: function(text, start) {
  //   return text.substring(start);
  // },

  // getindexof: function(text, subText) {
  //   return text.indexOf(subText);
  // },

  // converttolowercase: function(text) {
  //   return text.toLowerCase();
  // },

  // converttouppercase: function(text) {
  //   return text.toUpperCase();
  // },

  // getcharacter: function(characterCode) {
  //   return String.fromCharCode(characterCode);
  // },

  // getcharactercode: function(character) {
  //   return character.charCodeAt(0);
  // }
};

module.exports = function textFactory(env) {
  return text;
};
