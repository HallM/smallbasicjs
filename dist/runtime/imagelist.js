define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    // module.exports =
    var impl = {
        loadimage: function (url) {
            var phaserGame = this.$graphicswindow.phaserGame;
            var imgNumber = this.$imagelist.imgNumber++;
            var imgName = 'pic' + imgNumber;
            phaserGame.load.image(imgName, url.as_string());
            return new data_unit_1.DataUnit(imgName, data_unit_1.DATATYPES.DT_IMAGE);
        },
        getwidthofimage: function (imageName) {
            var phaserGame = this.$graphicswindow.phaserGame;
            return phaserGame.cache.getImage(imageName.as_string()).width;
        },
        getheightofimage: function (imageName) {
            var phaserGame = this.$graphicswindow.phaserGame;
            return phaserGame.cache.getImage(imageName.as_string()).height;
        },
    };
    exports.impl = impl;
    function api(env) {
        env.$imagelist = {
            imgNumber: 0,
            images: []
        };
        return {
            get loadimage() { return new data_unit_1.DataUnit('imagelist.loadimage', data_unit_1.DATATYPES.DT_FN); },
            get getwidthofimage() { return new data_unit_1.DataUnit('imagelist.getwidthofimage', data_unit_1.DATATYPES.DT_FN); },
            get getheightofimage() { return new data_unit_1.DataUnit('imagelist.getheightofimage', data_unit_1.DATATYPES.DT_FN); }
        };
    }
    exports.api = api;
});
//# sourceMappingURL=imagelist.js.map