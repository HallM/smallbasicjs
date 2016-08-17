'use strict';

enum DATATYPES {
  DT_UNINIT = 0,
  DT_BOOL = 1,
  DT_NUMBER = 2,
  DT_STRING = 3,
  DT_ARRAY = 4,

  DT_FN = 10,

  // special things:
  DT_CONTROL = 20,
  DT_FILE = 21,
  DT_IMAGE = 22,
  DT_SOUND = 23,
  DT_SHAPE = 24
}

class DataUnit {
  value: any
  type: DATATYPES
  onAssignHandlers: Function[]

  constructor(value: any = 0, type: DATATYPES = DATATYPES.DT_UNINIT) {
    this.value = value;
    this.type = type;
    this.onAssignHandlers = [];
  }

  make_clone(): DataUnit {
    return new DataUnit(this.value, this.type);
  }

  // events:
  on_assign(handler: Function): Function {
    if (this.onAssignHandlers.indexOf(handler) === -1) {
      this.onAssignHandlers.push(handler);
    }

    // return the unsubscriber
    return function() {
      const indx = this.onAssignHandlers.indexOf(handler);
      if (indx !== -1) {
        this.onAssignHandlers.splice(indx, 1);
      }
    };
  }

  // Type casts:
  as_bool(): boolean {
    if (this.type === DATATYPES.DT_BOOL) {
      return this.value;
    } else if (this.type === DATATYPES.DT_STRING) {
      return this.value.toLowerCase() === 'true';
    } else if (this.type === DATATYPES.DT_NUMBER) {
      return this.value !== 0;
    } else {
      return false;
    }
  }
  cast_bool(): boolean {
    if (this.type !== DATATYPES.DT_BOOL) {
      this.value = this.as_bool();
      this.type = DATATYPES.DT_BOOL;
    }
    return this.value;
  }

  as_array(): any {
    if (this.type === DATATYPES.DT_ARRAY) {
      return this.value;
    }
    return {};
  }
  cast_array(): any {
    if (this.type !== DATATYPES.DT_ARRAY) {
      this.value = this.as_array();
      this.type = DATATYPES.DT_ARRAY;
    }
    return this.value;
  }

  as_num(): number {
    if (this.type === DATATYPES.DT_NUMBER) {
      return this.value;
    } else if (this.type === DATATYPES.DT_STRING) {
      return parseInt(this.value, 10) || 0;
    } else if (this.type === DATATYPES.DT_BOOL) {
      return this.value ? 1 : 0;
    } else {
      return 0;
    }
  }
  cast_num(): number {
    if (this.type !== DATATYPES.DT_NUMBER) {
      this.value = this.as_num();
      this.type = DATATYPES.DT_NUMBER;
    }
    return this.value;
  }

  as_string(): string {
    if (this.type === DATATYPES.DT_STRING) {
      return this.value;
    } else if (this.type === DATATYPES.DT_NUMBER) {
      return this.value.toString();
    } else if (this.type === DATATYPES.DT_BOOL) {
      return this.value ? 'True' : 'False';
    } else if (this.type === DATATYPES.DT_FN) {
      return this.value;
    } else {
      return '';
    }
  }
  cast_string(): string {
    if (this.type !== DATATYPES.DT_STRING) {
      this.value = this.as_string();
      this.type = DATATYPES.DT_STRING;
    }
    return this.value;
  }


  // operators
  op_assign(rhs?: DataUnit) {
    if (!rhs) {
      rhs = new DataUnit();
    }

    this.value = rhs.value;
    this.type = rhs.type;

    for (let i = 0; i < this.onAssignHandlers.length; i++) {
      this.onAssignHandlers[i](this);
    }
  }

  op_index(exp: DataUnit): DataUnit {
    const arr = this.cast_array();
    const key = exp.as_string();
    if (!arr[key]) {
      arr[key] = new DataUnit();
    }
    return arr[key];
  }

  // unary number operators
  op_neg(): DataUnit {
    const newValue = this.as_num() * -1;
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // binary math/stringconcat operators
  op_add(rhs: DataUnit): DataUnit {
    let left: any = 0;
    let right: any = 0;
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

  op_sub(rhs: DataUnit): DataUnit {
    const newValue = this.as_num() - rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_mul(rhs: DataUnit): DataUnit {
    const newValue = this.as_num() * rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  op_div(rhs: DataUnit): DataUnit {
    const newValue = this.as_num() / rhs.as_num();
    return new DataUnit(newValue, DATATYPES.DT_NUMBER);
  }

  // comparison operators
  op_eq(rhs: DataUnit): DataUnit {
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
    } else if (this.type === rhs.type) {
      isEq = this.value === rhs.value;
    } else {
      isEq = this.as_num() === rhs.as_num();
    }

    return new DataUnit(isEq, DATATYPES.DT_BOOL);
  }

  op_neq(rhs: DataUnit): DataUnit {
    const isEq = this.op_eq(rhs);
    isEq.value = !isEq.value;
    return isEq;
  }

  op_gt(rhs: DataUnit): DataUnit {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left > right;
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }

  op_lt(rhs: DataUnit): DataUnit {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left < right;
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }

  op_gte(rhs: DataUnit): DataUnit {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left >= right;
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }

  op_lte(rhs: DataUnit): DataUnit {
    let left;
    let right;

    if (this.type === DATATYPES.DT_STRING || rhs.type === DATATYPES.DT_STRING) {
      left = this.as_string();
      right = rhs.as_string();
    } else {
      left = this.as_num();
      right = rhs.as_num();
    }

    const newValue = left <= right;
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }

  op_cmpor(rhs: DataUnit): DataUnit {
    const newValue = this.as_bool() || rhs.as_bool();
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }

  op_cmpand(rhs: DataUnit): DataUnit {
    const newValue = this.as_bool() && rhs.as_bool();
    return new DataUnit(newValue, DATATYPES.DT_BOOL);
  }
};

export {DATATYPES, DataUnit};
