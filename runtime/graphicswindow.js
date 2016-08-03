'use strict';

// const DataUnit = require('./data-unit').DataUnit;
// const DATATYPES = require('./data-unit').DATATYPES;
// const wrapFunction = require('./utils').wrapFunction;

const graphicswindow = {
  keydown: new DataUnit(),
  backgroundcolor: new DataUnit(),
  getcolorfromrgb: wrapFunction(function*() { return new DataUnit(); }),
  clear: wrapFunction(function*() { return new DataUnit(); }),
  title: new DataUnit(),
  height: new DataUnit(),
  width: new DataUnit(),
  show: wrapFunction(function*() { return new DataUnit(); }),
  showmessage: wrapFunction(function*() { return new DataUnit(); }),
  lastkey: new DataUnit(),
  penwidth: new DataUnit(),
  pencolor: new DataUnit(),
  brushcolor: new DataUnit(),
  fillrectangle: wrapFunction(function*() { return new DataUnit(); }),
  drawrectangle: wrapFunction(function*() { return new DataUnit(); }),
  drawline: wrapFunction(function*() { return new DataUnit(); }),
  fontitalic: new DataUnit(),
  fontname: new DataUnit(),
  fontsize: new DataUnit(),
  drawtext: wrapFunction(function*() { return new DataUnit(); })
};

// module.exports =
function graphicswindowFactory(env) {
  return graphicswindow;
};
