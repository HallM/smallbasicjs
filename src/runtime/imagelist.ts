'use strict';

import {DataUnit, DATATYPES} from './data-unit';
declare var Promise: any;

const impl = {
  loadimage: function(url) {
    return new Promise(resolve => {
      const image = new Image();
      image.src = url.as_string();

      image.addEventListener('load', function() {
        resolve(new DataUnit(image, DATATYPES.DT_IMAGE));
      }, false);
    });
  },

  getwidthofimage: function(image) {
    if (image.type !== DATATYPES.DT_IMAGE) {
      return new DataUnit();
    }

    return new DataUnit(image.value.width, DATATYPES.DT_NUMBER);
  },

  getheightofimage: function(image) {
    if (image.type !== DATATYPES.DT_IMAGE) {
      return new DataUnit();
    }

    return new DataUnit(image.value.height, DATATYPES.DT_NUMBER);
  },
};

function api(env) {
  return {
    get loadimage() { return new DataUnit('imagelist.loadimage', DATATYPES.DT_FN); },
    get getwidthofimage() { return new DataUnit('imagelist.getwidthofimage', DATATYPES.DT_FN); },
    get getheightofimage() { return new DataUnit('imagelist.getheightofimage', DATATYPES.DT_FN); }
  };
}

export {impl, api};
