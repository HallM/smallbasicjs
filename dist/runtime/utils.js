define(["require", "exports", './data-unit'], function (require, exports, data_unit_1) {
    'use strict';
    function resolvearray(env, aname) {
        if (!env.hasOwnProperty(aname)) {
            env[aname] = new data_unit_1.DataUnit({}, data_unit_1.DATATYPES.DT_ARRAY);
        }
        return env[aname].cast_array();
    }
    exports.resolvearray = resolvearray;
});
//# sourceMappingURL=utils.js.map