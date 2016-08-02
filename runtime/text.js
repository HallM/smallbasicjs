'use strict';

module.exports = {
  append: function(text1, text2) {
    return text1 + text2;
  },

  getlength: function(text) {
    return text.length;
  },

  issubtext: function(text, subText) {
    return text.indexOf(subText) !== -1;
  },

  endswith: function(text, subText) {
    var diff = text.length - subText.length;
    return diff >= 0 && text.substring(diff) === subText;
  },

  startswith: function(text, subText) {
    return text.length >= subText.length && text.substring(0, subText.length) === subText;
  },

  getsubtext: function(text, start, length) {
    return text.substring(start, start + length);
  },

  getsubtexttoend: function(text, start) {
    return text.substring(start);
  },

  getindexof: function(text, subText) {
    return text.indexOf(subText);
  },

  converttolowercase: function(text) {
    return text.toLowerCase();
  },

  converttouppercase: function(text) {
    return text.toUpperCase();
  },

  getcharacter: function(characterCode) {
    return String.fromCharCode(characterCode);
  },

  getcharactercode: function(character) {
    return character.charCodeAt(0);
  }
};
