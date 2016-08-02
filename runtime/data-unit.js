'use strict';

const DATATYPES = {
  DT_UNINIT: 0,
  DT_BOOL: 1,
  DT_NUMBER: 2,
  DT_STRING: 3,
  DT_ARRAY: 4,
  DT_FN: 9
};
class DataUnit {
  constructor(value, type) {
    this.value = arguments.length > 0 ? value : 0;
    this.type = arguments.length > 1 ? type : DATATYPES.DT_UNINIT;
  }

  make_clone() {
    return new DataUnit(this.value, this.type);
  }

  // Type casts:
  as_bool() {
    return !!this.value;
  }
  cast_bool() {
    if (this.type !== DATATYPES.DT_BOOL) {
      this.type = DATATYPES.DT_BOOL;
      this.value = this.as_bool();
    }
    return this.value;
  }

  as_array() {
    if (this.type !== DATATYPES.DT_ARRAY) {
      return {};
    }
    return this.value;
  }
  cast_array() {
    if (this.type !== DATATYPES.DT_ARRAY) {
      this.type = DATATYPES.DT_ARRAY;
      this.value = this.as_array();
    }
    return this.value;
  }

  as_num() {
    if (this.type !== DATATYPES.DT_NUMBER) {
      return this.type === DATATYPES.DT_STRING ? (parseInt(this.value, 10) || 0) : 0;
    }
    return this.value;
  }
  cast_num() {
    if (this.type !== DATATYPES.DT_NUMBER) {
      this.type = DATATYPES.DT_NUMBER;
      this.value = this.as_num();
    }
    return this.value;
  }

  as_string() {
    if (this.type !== DATATYPES.DT_STRING) {
      return this.type === DATATYPES.DT_NUMBER ? this.value.toString() : '';
    }
    return this.value;
  }
  cast_string() {
    if (this.type !== DATATYPES.DT_STRING) {
      this.type = DATATYPES.DT_STRING;
      this.value = this.as_string();
    }
    return this.value;
  }

  as_fn() {
    if (this.type !== DATATYPES.DT_FN) {
      throw new Error('Cannot call something that is not a function');
    }
    return this.value;
  }
  cast_fn() {
    if (this.type !== DATATYPES.DT_FN) {
      throw new Error('Cannot call something that is not a function');
    }
    return this.value;
  }


  // operators
  *op_call(params) {
    return yield* this.as_fn().apply(null, params);
  }

  op_assign(rhs) {
    if (!rhs) {
      rhs = new DataUnit();
    }

    this.value = rhs.value;
    this.type = rhs.type;
  }

  op_index(exp) {
    const arr = cast_array();
    const key = exp.as_string();
    if (!arr[key]) {
      arr[key] = new DataUnit();
    }
    return arr[key];
  }

  // unary number operators
  op_neg() {
    const newValue = this.as_num() * -1;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // binary math/stringconcat operators
  op_add(rhs) {
    let left = 0;
    let right = 0;
    let finalType = DATATYPES.DT_UNINIT;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
      finalType = DATATYPES.DT_STRING;
    } else {
      left = this.as_num();
      right = rhs.as_num();
      finalType = DATATYPES.DT_NUMBER;
    }

    const newValue = left + right;
    return new DataUnit(newValue, finalType);
  }

  op_sub(rhs) {
    const newValue = this.as_num() - rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_mul(rhs) {
    const newValue = this.as_num() * rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_div(rhs) {
    const newValue = this.as_num() / rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // comparison operators
  op_eq(rhs) {
    let isEq = false;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      isEq = this.as_string() == rhs.as_string();
    } else if (this.type === DATATYPES.DT_ARRAY && rhs.type === DATATYPES.DT_ARRAY) {
      if (Object.keys(this.value).length === Object.keys(rhs.value).length) {
        isEq = true;
        for (let p in this.value) {
          if (rhs.value[p] !== this.value[p]) {
            isEq = false;
            break;
          }
        }
      } else {
        isEq = false;
      }
    } else {
      isEq = this.as_num() == rhs.as_num();
    }

    const newValue = isEq ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_neq(rhs) {
    const isEq = this.op_eq(rhs);
    isEq.value = isEq.value ? 0 : 1;
    return isEq;
  }

  op_gt(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left > right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_lt(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left < right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_gte(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left >= right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_lte(rhs) {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left <= right ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_cmpor(rhs) {
    const newValue = this.as_num() || rhs.as_num() ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_cmpand(rhs) {
    const newValue = this.as_num() && rhs.as_num() ? 1 : 0;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }
};

exports.DATATYPES = DATATYPES;
exports.DataUnit = DataUnit;
