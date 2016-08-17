define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    function resolvearray(env, aname) {
        if (!env.hasOwnProperty(aname)) {
            env[aname] = new data_unit_1.DataUnit({}, data_unit_1.DATATYPES.DT_ARRAY);
        }
        return env[aname].cast_array();
    }
    exports.resolvearray = resolvearray;
    function colorFromNumber(v) {
        return '#' + ('000000' + v.toString(16)).slice(-6);
    }
    exports.colorFromNumber = colorFromNumber;
    function makeEllipsePath(ctx, x, y, w, h) {
        // thanks to http://stackoverflow.com/a/2173084/4386347
        var kappa = .5522848;
        var ox = (w / 2) * kappa;
        var oy = (h / 2) * kappa;
        var xe = x + w;
        var ye = y + h;
        var xm = x + w / 2;
        var ym = y + h / 2;
        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    }
    exports.makeEllipsePath = makeEllipsePath;
});
//# sourceMappingURL=utils.js.map