'use strict';

const DataUnit = require('./data-unit').DataUnit;
const DATATYPES = require('./data-unit').DATATYPES;
const wrapFunction = require('./utils').wrapFunction;
const axios = require('axios');

const network = {
  downloadfile: wrapFunction(function*(url) {
    // TODO: create an emulation of the file system
    throw new Error('Network.DownloadFile is not available');
  }),

  getwebpagecontents: wrapFunction(function*(url) {
    let pageContents = yield* getContents(url.as_string());
    return new DataUnit(pageContents, DATATYPES.DT_STRING);
  })
};

function* getContents(url) {
  let response = yield axios.get(url);
  return response.data;
}
