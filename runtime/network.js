'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;
const axios = require('axios');

const implnetwork = {
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

const network = {
  downloadfile: new DataUnit('network.downloadfile', DATATYPES.DT_FN),
  getwebpagecontents: new DataUnit('network.getwebpagecontents', DATATYPES.DT_FN)
};
