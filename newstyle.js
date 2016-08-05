'use strict';
var DataUnit = require('./runtime/data-unit').DataUnit;
var DATATYPES = require('./runtime/data-unit').DATATYPES;

function getrandomnumber(v) {
  return new DataUnit(Math.floor(Math.random() * v.as_num()) + 1, DATATYPES.DT_NUMBER);
}
getrandomnumber.fnname = 'math.getrandomnumber';

var math = {
  getrandomnumber: new DataUnit(getrandomnumber, DATATYPES.DT_FN)
};

(function() {
  const env = {
_ar: new DataUnit(),
_test: new DataUnit()
  };

  var tmp = [];
  var fn = [];

  function execute(next, val) {
    var params = null;
    var scratch = new DataUnit();
    var retval = new DataUnit();

    while(1) {
      switch(next) {
        case 'math.getrandomnumber':
          retval = math.getrandomnumber.op_call(env, [fn[fn.length - 1][1][0]]);
          next = fn.pop()[0];
          break;

        case '':
scratch = scratch = env._ar;
scratch = scratch.op_index(new DataUnit(0, DATATYPES.DT_NUMBER));
;
tmp.push(scratch);
scratch = new DataUnit(5, DATATYPES.DT_NUMBER);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);
scratch = env._test;
tmp.push(scratch);
scratch = scratch = env._ar;
scratch = scratch.op_index(new DataUnit(0, DATATYPES.DT_NUMBER));
;
tmp.push(scratch);
scratch = new DataUnit(3, DATATYPES.DT_NUMBER).op_neg();
tmp.push(scratch);
params = [];
scratch = new DataUnit(4, DATATYPES.DT_NUMBER);
params.push(scratch);
fn.push(["$L0", params.slice()]);
scratch = math.getrandomnumber;
next = scratch.as_string();
break;
case "$L0":
scratch = retval;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_mul(retval);
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_add(retval);
;
retval = scratch;
scratch = tmp.pop();
scratch = scratch.op_assign(retval);

          console.log(env._test);
          return null;
      }
    }
  }

  function runner() {
    execute('');
  }

  runner();
})();

