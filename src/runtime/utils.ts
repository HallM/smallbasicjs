'use strict';

import {DataUnit, DATATYPES} from './data-unit';

function resolvearray(env, aname) {
  if (!env.hasOwnProperty(aname)) {
    env[aname] = new DataUnit({}, DATATYPES.DT_ARRAY);
  }

  return env[aname].cast_array();
}

export { resolvearray };
