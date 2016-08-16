define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        downloadfile: function (url) {
            // TODO: create an emulation of the file system
            throw new Error('Network.DownloadFile is not available');
        },
        getwebpagecontents: function (url) {
            return axios.get(url).then(function (response) {
                return new data_unit_1.DataUnit(response.data, data_unit_1.DATATYPES.DT_STRING);
            });
        }
    };
    exports.impl = impl;
    function api(env) {
        return {
            get downloadfile() { return new data_unit_1.DataUnit('network.downloadfile', data_unit_1.DATATYPES.DT_FN); },
            get getwebpagecontents() { return new data_unit_1.DataUnit('network.getwebpagecontents', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=network.js.map