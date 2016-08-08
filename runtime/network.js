'use strict';

import {DataUnit, DATATYPES} from './data-unit';
import * as axios from 'axios';

const impl = {
  downloadfile: function(url) {
    // TODO: create an emulation of the file system
    throw new Error('Network.DownloadFile is not available');
  },

  getwebpagecontents: function(url) {
    return axios.get(url).then(function(response) {
      return new DataUnit(response.data, DATATYPES.DT_STRING);
    });
  }
};

function api(env) {
  return {
    get downloadfile() { return new DataUnit('network.downloadfile', DATATYPES.DT_FN); },
    get getwebpagecontents() { return new DataUnit('network.getwebpagecontents', DATATYPES.DT_FN); }
  };
}

export {impl, api};
