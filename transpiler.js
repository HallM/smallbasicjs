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
    this.indentString = '  ';
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

    return `// 'use strict';

//const bluebird = require('bluebird');
//const DataUnit = require('./runtime/data-unit').DataUnit;
//const DATATYPES = require('./runtime/data-unit').DATATYPES;

function runnable() {
  function* execute() {
    const env = {
${varOutput}
    };

    // const array = require('./runtime/array')(env);
    // const graphicswindow = require('./runtime/graphicswindow')(env);
    // const math = require('./runtime/math')(env);
    // const program = require('./runtime/program')(env);
    // const shapes = require('./runtime/shapes')(env);
    // const text = require('./runtime/text')(env);
    // const array = arrayFactory(env);
    // const graphicswindow = graphicswindowFactory(env);
    // const math = mathFactory(env);
    // const program = programFactory(env);
    // const shapes = shapesFactory(env);
    // const text = textFactory(env);

${code}
  }

  (bluebird.coroutine(execute))().then(function() {
    console.log('program finished!');
  }).catch(function(e) {
    if (e.issafetoignoreexit) {
      console.log('program finished!');
      return;
    }

    console.log('An error occurred');
    console.log(e);
  });
}

runnable();
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

    if (type === 'array') {
      return this.process_array(astnode);
    } else if (type === 'property') {
      return this.process_property(astnode);
    } else if (type === 'variable') {
      return this.process_variable(astnode);
    }

    throw new Error('invalid type in lhs ' + type);
  }

  process_expression(node) {
    const type = node[0];
    const astnode = node[1];

    if (type === 'binop') {
      return this.process_binop(astnode);
    } else if (type === 'unop') {
      return this.process_unop(astnode);
    } else if (type === 'array') {
      return this.process_array(astnode);
    } else if (type === 'property') {
      return this.process_property(astnode);
    } else if (type === 'variable') {
      return this.process_variable(astnode);
    } else if (type === 'call') {
      return this.process_call(astnode);
    } else if (type === 'literal') {
      return this.process_literal(astnode);
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

    return thing + arrayIndecies.map((indx) => {
      return '.op_index(' + this.process_expression(indx) + ')';
    }).join('');
  }

  process_binop(node) {
    const lhs = this.process_expression(node[1]);
    const rhs = this.process_expression(node[2]);

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

    return '(' + lhs + '.' + op + '(' + rhs + ')' + ')';
  }

  process_unop(node) {
    const lhs = this.process_expression(node[1]);

    let op = null;
    switch (node[0]) {
      case '-':
        op = 'op_neg';
        break;
      default:
        throw new Error('Invalid unary operator in expression: ' + node[0]);
    }

    return '(' + lhs + '.' + op + '())';
  }

  process_call(node) {
    const identifier = this.process_lhs(node[0]);
    const params = node[1] ? node[1].map((pnode) => {
      return this.process_expression(pnode);
    }) : [];

    return '(yield* ' + identifier + '.op_call(env, [' + params.join(', ') + ']))';
  }

  // Start the statements:

  process_assign(node) {
    const lhs = this.process_lhs(node[0]);
    const value = this.process_expression(node[1]);

    return lhs + '.op_assign(' + value + ');\n';
  }

  process_callstatement(node) {
    const call = this.process_call(node[0][1]);

    return call + ';\n';
  }

  process_cond(node) {
    const start = node[0];
    const rest = node.slice(1);

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
    const forCond = '(' + start + '.op_lt(' + end + ').as_bool() ? (' + iter + '.op_lt(' + end + ')) : (' + iter + '.op_gt(' + end + '))).as_bool();\n ';
    const forIter = iter + '.op_assign(' + iter + '.op_add(' + step + '))';

    return 'for (' +
            forStart +
            forCond +
            forIter +
            ') {\n' + this.process_block(node[2]) + this.get_indent() + '}\n\n';
  }

  process_while(node) {
    const cond = this.process_expression(node[0]);

    return 'while (' + cond + '.as_bool()) {\n' + this.process_block(node[1]) + this.get_indent() + '}\n\n';
  }

}

const file = fs.readFileSync(process.argv[2], 'utf8');
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
