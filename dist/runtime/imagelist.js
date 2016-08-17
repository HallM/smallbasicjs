define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    var impl = {
        loadimage: function (url) {
            return new Promise(function (resolve) {
                var image = new Image();
                image.src = url.as_string();
                image.addEventListener('load', function () {
                    resolve(new data_unit_1.DataUnit(image, data_unit_1.DATATYPES.DT_IMAGE));
                }, false);
            });
        },
        getwidthofimage: function (image) {
            if (image.type !== data_unit_1.DATATYPES.DT_IMAGE) {
                return new data_unit_1.DataUnit();
            }
            return new data_unit_1.DataUnit(image.value.width, data_unit_1.DATATYPES.DT_NUMBER);
        },
        getheightofimage: function (image) {
            if (image.type !== data_unit_1.DATATYPES.DT_IMAGE) {
                return new data_unit_1.DataUnit();
            }
            return new data_unit_1.DataUnit(image.value.height, data_unit_1.DATATYPES.DT_NUMBER);
        },
    };
    exports.impl = impl;
    function api(env) {
        return {
            get loadimage() { return new data_unit_1.DataUnit('imagelist.loadimage', data_unit_1.DATATYPES.DT_FN); },
            get getwidthofimage() { return new data_unit_1.DataUnit('imagelist.getwidthofimage', data_unit_1.DATATYPES.DT_FN); },
            get getheightofimage() { return new data_unit_1.DataUnit('imagelist.getheightofimage', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=imagelist.js.map