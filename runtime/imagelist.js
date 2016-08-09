'use strict';

import {DataUnit, DATATYPES} from './data-unit';

// module.exports =
const impl = {
  loadimage: function(url) {
    const phaserGame = this.$graphicswindow.phaserGame;
    const imgNumber = this.$imagelist.imgNumber++;
    const imgName = 'pic' + imgNumber;

    phaserGame.load.image(imgName, url.as_string());

    return new DataUnit(imgName, DATATYPES.DT_IMAGE);
  },

  getwidthofimage: function(imageName) {
    const phaserGame = this.$graphicswindow.phaserGame;
    return phaserGame.cache.getImage(imageName.as_string()).width;
  },

  getheightofimage: function(imageName) {
    const phaserGame = this.$graphicswindow.phaserGame;
    return phaserGame.cache.getImage(imageName.as_string()).height;
  },
};

function api(env) {
  env.$imagelist = {
    imgNumber: 0,
    images: []
  };

  return {
    get loadimage() { return new DataUnit('imagelist.loadimage', DATATYPES.DT_FN); },
    get getwidthofimage() { return new DataUnit('imagelist.getwidthofimage', DATATYPES.DT_FN); },
    get getheightofimage() { return new DataUnit('imagelist.getheightofimage', DATATYPES.DT_FN); }
  };
}

export {impl, api};
