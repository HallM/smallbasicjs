define(["require", "exports"], function (require, exports) {
    'use strict';
    var DATATYPES;
    (function (DATATYPES) {
        DATATYPES[DATATYPES["DT_UNINIT"] = 0] = "DT_UNINIT";
        DATATYPES[DATATYPES["DT_BOOL"] = 1] = "DT_BOOL";
        DATATYPES[DATATYPES["DT_NUMBER"] = 2] = "DT_NUMBER";
        DATATYPES[DATATYPES["DT_STRING"] = 3] = "DT_STRING";
        DATATYPES[DATATYPES["DT_ARRAY"] = 4] = "DT_ARRAY";
        DATATYPES[DATATYPES["DT_FN"] = 10] = "DT_FN";
        // special things:
        DATATYPES[DATATYPES["DT_CONTROL"] = 20] = "DT_CONTROL";
        DATATYPES[DATATYPES["DT_FILE"] = 21] = "DT_FILE";
        DATATYPES[DATATYPES["DT_IMAGE"] = 22] = "DT_IMAGE";
        DATATYPES[DATATYPES["DT_SOUND"] = 23] = "DT_SOUND";
        DATATYPES[DATATYPES["DT_SHAPE"] = 24] = "DT_SHAPE";
    })(DATATYPES || (DATATYPES = {}));
    exports.DATATYPES = DATATYPES;
    var DataUnit = (function () {
        function DataUnit(value, type) {
            if (value === void 0) { value = 0; }
            if (type === void 0) { type = DATATYPES.DT_UNINIT; }
            this.value = value;
            this.type = type;
            this.onAssignHandlers = [];
        }
        DataUnit.prototype.make_clone = function () {
            return new DataUnit(this.value, this.type);
        };
        // events:
        DataUnit.prototype.on_assign = function (handler) {
            if (this.onAssignHandlers.indexOf(handler) === -1) {
                this.onAssignHandlers.push(handler);
            }
            // return the unsubscriber
            return function () {
                var indx = this.onAssignHandlers.indexOf(handler);
                if (indx !== -1) {
                    this.onAssignHandlers.splice(indx, 1);
                }
            };
        };
        // Type casts:
        DataUnit.prototype.as_bool = function () {
            if (this.type === DATATYPES.DT_BOOL) {
                return this.value;
            }
            else if (this.type === DATATYPES.DT_STRING) {
                return this.value.toLowerCase() === 'true';
            }
            else if (this.type === DATATYPES.DT_NUMBER) {
                return this.value !== 0;
            }
            else {
                return false;
            }
        };
        DataUnit.prototype.cast_bool = function () {
            if (this.type !== DATATYPES.DT_BOOL) {
                this.value = this.as_bool();
                this.type = DATATYPES.DT_BOOL;
            }
            return this.value;
        };
        DataUnit.prototype.as_array = function () {
            if (this.type === DATATYPES.DT_ARRAY) {
                return this.value;
            }
            return {};
        };
        DataUnit.prototype.cast_array = function () {
            if (this.type !== DATATYPES.DT_ARRAY) {
                this.value = this.as_array();
                this.type = DATATYPES.DT_ARRAY;
            }
            return this.value;
        };
        DataUnit.prototype.as_num = function () {
            if (this.type === DATATYPES.DT_NUMBER) {
                return this.value;
            }
            else if (this.type === DATATYPES.DT_STRING) {
                return parseInt(this.value, 10) || 0;
            }
            else if (this.type === DATATYPES.DT_BOOL) {
                return this.value ? 1 : 0;
            }
            else {
                return 0;
            }
        };
        DataUnit.prototype.cast_num = function () {
            if (this.type !== DATATYPES.DT_NUMBER) {
                this.value = this.as_num();
                this.type = DATATYPES.DT_NUMBER;
            }
            return this.value;
        };
        DataUnit.prototype.as_string = function () {
            if (this.type === DATATYPES.DT_STRING) {
                return this.value;
            }
            else if (this.type === DATATYPES.DT_NUMBER) {
                return this.value.toString();
            }
            else if (this.type === DATATYPES.DT_BOOL) {
                return this.value ? 'True' : 'False';
            }
            else if (this.type === DATATYPES.DT_FN) {
                return this.value;
            }
            else {
                return '';
            }
        };
        DataUnit.prototype.cast_string = function () {
            if (this.type !== DATATYPES.DT_STRING) {
                this.value = this.as_string();
                this.type = DATATYPES.DT_STRING;
            }
            return this.value;
        };
        // operators
        DataUnit.prototype.op_assign = function (rhs) {
            if (!rhs) {
                rhs = new DataUnit();
            }
            this.value = rhs.value;
            this.type = rhs.type;
            for (var i = 0; i < this.onAssignHandlers.length; i++) {
                this.onAssignHandlers[i](this);
            }
        };
        DataUnit.prototype.op_index = function (exp) {
            var arr = this.cast_array();
            var key = exp.as_string();
            if (!arr[key]) {
                arr[key] = new DataUnit();
            }
            return arr[key];
        };
        // unary number operators
        DataUnit.prototype.op_neg = function () {
            var newValue = this.as_num() * -1;
            return new DataUnit(newValue, DATATYPES.DT_NUMBER);
        };
        // binary math/stringconcat operators
        DataUnit.prototype.op_add = function (rhs) {
            var left = 0;
            var right = 0;
            var finalType = DATATYPES.DT_UNINIT;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                left = this.as_string();
                right = rhs.as_string();
                finalType = DATATYPES.DT_STRING;
            }
            else {
                left = this.as_num();
                right = rhs.as_num();
                finalType = DATATYPES.DT_NUMBER;
            }
            var newValue = left + right;
            return new DataUnit(newValue, finalType);
        };
        DataUnit.prototype.op_sub = function (rhs) {
            var newValue = this.as_num() - rhs.as_num();
            return new DataUnit(newValue, DATATYPES.DT_NUMBER);
        };
        DataUnit.prototype.op_mul = function (rhs) {
            var newValue = this.as_num() * rhs.as_num();
            return new DataUnit(newValue, DATATYPES.DT_NUMBER);
        };
        DataUnit.prototype.op_div = function (rhs) {
            var newValue = this.as_num() / rhs.as_num();
            return new DataUnit(newValue, DATATYPES.DT_NUMBER);
        };
        // comparison operators
        DataUnit.prototype.op_eq = function (rhs) {
            var isEq = false;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                isEq = this.as_string() == rhs.as_string();
            }
            else if (this.type === DATATYPES.DT_ARRAY && rhs.type === DATATYPES.DT_ARRAY) {
                if (Object.keys(this.value).length === Object.keys(rhs.value).length) {
                    isEq = true;
                    for (var p in this.value) {
                        if (rhs.value[p] !== this.value[p]) {
                            isEq = false;
                            break;
                        }
                    }
                }
                else {
                    isEq = false;
                }
            }
            else if (this.type === rhs.type) {
                isEq = this.value === rhs.value;
            }
            else {
                isEq = this.as_num() === rhs.as_num();
            }
            return new DataUnit(isEq, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_neq = function (rhs) {
            var isEq = this.op_eq(rhs);
            isEq.value = !isEq.value;
            return isEq;
        };
        DataUnit.prototype.op_gt = function (rhs) {
            var left;
            var right;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                left = this.as_string();
                right = rhs.as_string();
            }
            else {
                left = this.as_num();
                right = rhs.as_num();
            }
            var newValue = left > right;
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_lt = function (rhs) {
            var left;
            var right;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                left = this.as_string();
                right = rhs.as_string();
            }
            else {
                left = this.as_num();
                right = rhs.as_num();
            }
            var newValue = left < right;
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_gte = function (rhs) {
            var left;
            var right;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                left = this.as_string();
                right = rhs.as_string();
            }
            else {
                left = this.as_num();
                right = rhs.as_num();
            }
            var newValue = left >= right;
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_lte = function (rhs) {
            var left;
            var right;
            if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
                left = this.as_string();
                right = rhs.as_string();
            }
            else {
                left = this.as_num();
                right = rhs.as_num();
            }
            var newValue = left <= right;
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_cmpor = function (rhs) {
            var newValue = this.as_bool() || rhs.as_bool();
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        DataUnit.prototype.op_cmpand = function (rhs) {
            var newValue = this.as_bool() && rhs.as_bool();
            return new DataUnit(newValue, DATATYPES.DT_BOOL);
        };
        return DataUnit;
    }());
    exports.DataUnit = DataUnit;
    ;
});
//# sourceMappingURL=data-unit.js.map