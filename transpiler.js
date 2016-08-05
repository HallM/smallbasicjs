const parser = require('./smallbasic');
const fs = require('fs');

if (!process.argv[2]) {
  console.log('Must include the file to transpile');
  process.exit(1);
}

class CodeGenerator {
  constructor() {
    this.vars = [];
    this.callables = [];
    this.blockLevel = 1;
    this.indentString = '';
    this.L = 0;
  }

  inc_indent() {
    this.blockLevel += 1;
  }
  dec_indent() {
    this.blockLevel -= 1;
  }
  get_indent() {
    return Array(this.blockLevel + 1).join(this.indentString);
  }

  add_var(varname) {
    if (this.vars.indexOf(varname) === -1) {
      this.vars.push(varname);
    }
  }
  add_callable(varname) {
    if (this.callables.indexOf(varname) === -1) {
      this.callables.push(varname);
    }
  }

  process_file(str) {
    // parser gets confused if file does not end with a blank new line
    const ast = parser.parse(str + '\n');
    const code = this.process_block(ast);

    const varIndent = this.indentString + this.indentString + this.indentString;

    const varOutput = this.vars
      .map((v) => {
        if (this.callables.indexOf(v) !== -1) {
          return varIndent + v + ': new DataUnit($' + v + ', DATATYPES.DT_FN)';
        } else {
          return varIndent + v + ': new DataUnit()';
        }
      }).join(',\n');

    return `'use strict';
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
${varOutput}
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
${code}
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
`;
  }

  process_block(node) {
    this.inc_indent();

    const ret = node.map((statementNode) => {
      const type = statementNode[0];
      const astnode = statementNode[1];

      if (type === 'assign') {
        return this.get_indent() + this.process_assign(astnode);
      } else if (type === 'callstatement') {
        return this.get_indent() + this.process_callstatement(astnode);
      } else if (type === 'cond') {
        return this.get_indent() + this.process_cond(astnode);
      } else if (type === 'label') {
        return this.get_indent() + this.process_label(astnode);
      } else if (type === 'goto') {
        return this.get_indent() + this.process_goto(astnode);
      } else if (type === 'fn') {
        return this.get_indent() + this.process_fn(astnode);
      } else if (type === 'for') {
        return this.get_indent() + this.process_for(astnode);
      } else if (type === 'while') {
        return this.get_indent() + this.process_while(astnode);
      }

      throw new Error('invalid type in block ' + type);
    }).join('');

    this.dec_indent();

    return ret;
  }

  process_lhs(node) {
    const type = node[0];
    const astnode = node[1];

    const prefix = 'scratch = ';
    const postfix = ';\n';

    if (type === 'array') {
      return prefix + this.process_array(astnode) + postfix;
    } else if (type === 'property') {
      return prefix + this.process_property(astnode) + postfix;
    } else if (type === 'variable') {
      return prefix + this.process_variable(astnode) + postfix;
    }

    throw new Error('invalid type in lhs ' + type);
  }

  process_expression(node, isRhs) {
    const type = node[0];
    const astnode = node[1];

    const prefix = isRhs ? '' : 'scratch = ';
    const postfix = isRhs ? '' : ';\n';

    if (type === 'binop') {
      return this.process_binop(astnode) + postfix;
    } else if (type === 'unop') {
      return prefix + this.process_unop(astnode) + postfix;
    } else if (type === 'array') {
      return prefix + this.process_array(astnode) + postfix;
    } else if (type === 'property') {
      return this.process_property(astnode) + postfix;
    } else if (type === 'variable') {
      return prefix + this.process_variable(astnode) + postfix;
    } else if (type === 'call') {
      return prefix + this.process_call(astnode) + postfix;
    } else if (type === 'literal') {
      return prefix + this.process_literal(astnode) + postfix;
    }

    throw new Error('invalid type in expression ' + type);
  }

  process_literal(node) {
    const value = node[0];
    if (value[0] === '"') {
      return 'new DataUnit(' + node + ', DATATYPES.DT_STRING)';
    } else if ((typeof value === 'number') || (value[0] >= '0' && value[0] <= '9')) {
      return 'new DataUnit(' + node + ', DATATYPES.DT_NUMBER)';
    }

    throw new Error('Invalid literal ' + value);
  }

  process_identifier(node, doNotDecorate) {
    if (!node) {
      throw new Error('identifier is not valid');
    }

    if (Array.isArray(node)) {
      throw new Error('identifier is not valid (is array)');
    }

    const varname = '_' + node;

    this.add_var(varname);

    if (doNotDecorate) {
      return varname;
    }

    return 'env.' + varname;
  }

  process_variable(node) {
    const varInfo = node[0];
    const type = varInfo[0];

    if (type === 'identifier') {
      return this.process_identifier(varInfo[1][0]);
    }

    throw new Error('invalid type for variable ' + type);
  }

  process_property(node) {
    const obj = node[0][1];
    const prop = node[1][1];

    return obj + '.' + prop;
  }

  process_array(node) {
    const thing = this.process_lhs(node[0]);
    const arrayIndecies = node[1];

    //'tmp.push(scratch);\n' +
    return arrayIndecies.reduce((lhs, indx) => {
      const rhs = this.process_expression(indx, true);

      if (rhs.lastIndexOf(';') !== -1) {
        return prev + 'tmp.push(scratch);\n' +
                rhs + ';\nretval = scratch;\nscratch = tmp.pop();\nscratch = scratch.op_index(retval);\n';
      } else {
        return lhs + 'scratch = scratch.op_index(' + rhs + ');\n';
      }
    }, thing);// +
    // 'scratch = tmp.pop()';
  }

  process_binop(node) {
    // console.log('do lhs')
    const lhs = this.process_expression(node[1]);
    // console.log('do rhs', lhs)
    const rhs = this.process_expression(node[2], true);
    // console.log('done', rhs)

    let op = null;
    switch (node[0]) {
      case '+':
        op = 'op_add';
        break;
      case '-':
        op = 'op_sub';
        break;
      case '*':
        op = 'op_mul';
        break;
      case '/':
        op = 'op_div';
        break;
      case '=':
        op = 'op_eq';
        break;
      case '<>':
        op = 'op_neq';
        break;
      case '>':
        op = 'op_gt';
        break;
      case '<':
        op = 'op_lt';
        break;
      case '>=':
        op = 'op_gte';
        break;
      case '<=':
        op = 'op_lte';
        break;
      case '||':
        op = 'op_cmpor';
        break;
      case '&&':
        op = 'op_cmpand';
        break;
      default:
        throw new Error('Invalid operator in expression: ' + node[0]);
    }

    // this only occurs with a "complex" rhs
    // fn call, or array
    if (rhs.lastIndexOf(';') !== -1) {
      return lhs + 'tmp.push(scratch);\n' +
              rhs + ';\nretval = scratch;\nscratch = tmp.pop();\nscratch = scratch.' + op + '(retval)';
    } else {
      return lhs + 'scratch = scratch.' + op + '(' + rhs + ')';
    }

    // return '(' + lhs + '.' + op + '(' + rhs + ')' + ')';
  }

  process_unop(node) {
    const lhs = this.process_expression(node[1], true);

    let op = null;
    switch (node[0]) {
      case '-':
        op = 'op_neg';
        break;
      default:
        throw new Error('Invalid unary operator in expression: ' + node[0]);
    }

    return lhs + '.' + op + '()';
    // return '(' + lhs + '.' + op + '())';
  }

  process_call(node) {
    // this should not mess up scratch, right?
    const identifier = this.process_lhs(node[0]);

    const params = node[1] ? node[1].map((pnode) => {
      const v = this.process_expression(pnode);
      return v + 'params.push(scratch);\n';
    }) : [];

    const l_label = '$L' + this.L++;

    //'tmp.push(scratch);\n' +
    return 'params = [];\n' + params.join('') +
            'fn.push(["' + l_label + '", params.slice()]);\n' +
            identifier +
            'next = scratch.as_string();\nbreak;\n' +
            'case "' + l_label + '":\n' +
            'scratch = retval';

    // throw new Error('not re-implemented');
    // return '(yield* ' + identifier + '.op_call(env, [' + params.join(', ') + ']))';
  }

  // Start the statements:

  process_assign(node) {
    const lvalue = this.process_lhs(node[0]);
    const rvalue = this.process_expression(node[1]);

    if (rvalue.lastIndexOf(';') !== -1) {
      return lvalue + 'tmp.push(scratch);\n' +
              rvalue + ';\nretval = scratch;\nscratch = tmp.pop();\nscratch = scratch.op_assign(retval);\n';
    } else {
      return lvalue + 'scratch = scratch.op_assign(' + rvalue + ');\n';
    }
  }

  process_callstatement(node) {
    const call = this.process_call(node[0][1]);

    throw new Error('not re-implemented');
    return call + ';\n';
  }

  process_cond(node) {
    const start = node[0];
    const rest = node.slice(1);

    throw new Error('not re-implemented');
    return 'if (' + this.process_expression(start[0]) + '.as_bool()) {\n' +
            this.process_block(start[1]) + this.get_indent() + '}' +
            rest.map((c) => {
              return ' else ' +
                      (c[0] ? ('if (' + this.process_expression(c[0]) + '.as_bool())') : '') +
                      '{\n' + this.process_block(c[1]) + this.get_indent() + '}'
            }).join('') +
            '\n\n';
  }

  process_label(node) {
    throw new Error('unsupported right now');
  }

  process_goto(node) {
    throw new Error('unsupported right now');
  }

  process_fn(node) {
    const name = this.process_identifier(node[0][1][0], true);
    this.add_callable(name);

    throw new Error('not re-implemented');
    return 'function* $' + name + '() {\n' +
            this.process_block(node[2]) +
            this.get_indent() + this.indentString + 'return new DataUnit();\n' +
            this.get_indent() + '}\n\n';
  }

  process_for(node) {
    const iter = this.process_lhs(node[0]);

    const forinfo = node[1];

    const start = this.process_expression(forinfo[0]);
    const end = this.process_expression(forinfo[1]);
    const step = this.process_expression(forinfo[2]);

    const forStart  = iter + '.op_assign(' + start + ');\n';
    const forCond = '(' + start + '.op_lt(' + end + ').as_bool() ? (' + iter + '.op_lte(' + end + ')) : (' + iter + '.op_gte(' + end + '))).as_bool();\n ';
    const forIter = iter + '.op_assign(' + iter + '.op_add(' + step + '))';

    throw new Error('not re-implemented');
    return 'for (' +
            forStart +
            forCond +
            forIter +
            ') {\n' + this.process_block(node[2]) + this.get_indent() + '}\n\n';
  }

  process_while(node) {
    const cond = this.process_expression(node[0]);

    throw new Error('not re-implemented');
    return 'while (' + cond + '.as_bool()) {\n' + this.process_block(node[1]) + this.get_indent() + '}\n\n';
  }

}

// const file = fs.readFileSync(process.argv[2], 'utf8');
const file = `
ar[0] = 5
test = ar[0] + -3 * Math.GetRandomNumber(4)
`;
const gen = new CodeGenerator();

try {
  const code = gen.process_file(file);
  console.log(code);
} catch (e) {
  console.log(e.name + ': ' + e.message);
  console.log();
  if (e.location) {
    console.log(e.expected);
    console.log(e.found);
    console.log(e.location);
  }

  console.log(e.stack);
}
