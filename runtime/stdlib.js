// import everything in here

import {DataUnit, DATATYPES} from './data-unit';

import * as array from './array';
import * as clock from './clock';
import * as controls from './controls';
import * as desktop from './desktop';
import * as dictionary from './dictionary';
import * as file from './file';
import * as flickr from './flickr';
import * as graphicswindow from './graphicswindow';
import * as imagelist from './imagelist';
import * as math from './math';
import * as mouse from './mouse';
import * as network from './network';
import * as program from './program';
import * as shapes from './shapes';
import * as sound from './sound';
import * as stack from './stack';
import * as text from './text';
import * as textwindow from './textwindow';
import * as timer from './timer';
import * as turtle from './turtle';

const impl = {
  array: array.impl,
  clock: clock.impl,
  controls: controls.impl,
  desktop: desktop.impl,
  dictionary: dictionary.impl,
  file: file.impl,
  flickr: flickr.impl,
  graphicswindow: graphicswindow.impl,
  imagelist: imagelist.impl,
  math: math.impl,
  mouse: mouse.impl,
  network: network.impl,
  program: program.impl,
  shapes: shapes.impl,
  sound: sound.impl,
  stack: stack.impl,
  text: text.impl,
  textwindow: textwindow.impl,
  timer: timer.impl,
  turtle: turtle.impl
};

function api(env) {
  var sdk = {
    array: array.api(env),
    clock: clock.api(env),
    controls: controls.api(env),
    desktop: desktop.api(env),
    dictionary: dictionary.api(env),
    file: file.api(env),
    flickr: flickr.api(env),
    graphicswindow: graphicswindow.api(env),
    imagelist: imagelist.api(env),
    math: math.api(env),
    mouse: mouse.api(env),
    network: network.api(env),
    program: program.api(env),
    shapes: shapes.api(env),
    sound: sound.api(env),
    stack: stack.api(env),
    text: text.api(env),
    textwindow: textwindow.api(env),
    timer: timer.api(env),
    turtle: turtle.api(env)
  };

  for (var p in sdk) {
    env[p] = sdk[p];
    env['impl_' + p] = impl[p];
  }

  return sdk;
}

window.stdlib = {impl, api, DataUnit, DATATYPES};
export {impl, api, DataUnit, DATATYPES};
