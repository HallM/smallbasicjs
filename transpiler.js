const parser = require('./smallbasic');
const fs = require('fs');

if (!process.argv[2]) {
  console.log('Must include the file to transpile');
  process.exit(1);
}

/*

class Variable {
  value: 0, // num | obj | string,
  type: 'value' | 'array',

  asArray() {
    if (type !== 'array') {
      this.value = {};
    }
    return this.value;
  }
  asValue() {
    if (type === 'array') {
      this.value = 0;
    }
    return this.value;
  }
};

var env = {vars};

*/

class CodeGenerator {
  constructor() {
    this.vars = [];
    this.ignoreVars = [];
    this.blockLevel = 0;
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
  add_ignorevar(varname) {
    if (this.ignoreVars.indexOf(varname) === -1) {
      this.ignoreVars.push(varname);
    }
  }

  process_file(str) {
    let ast = parser.parse(str);
    const code = this.process_block(ast);

    const varOutput = this.vars
      .filter((v) => {
        return this.ignoreVars.indexOf(v) === -1;
      })
      .map((v) => {
        return this.indentString + 'var ' + v + ' = new Variable();\n'
      }).join('');

    return '"use strict";\nmodule.exports = function* program() {\n' + varOutput + '\n' + code + '}\n';
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
    return node;
  }

  process_identifier(node) {
    if (!node) {
      throw new Error('identifier is not valid');
    }

    if (Array.isArray(node)) {
      throw new Error('identifier is not valid (is array)');
    }

    const varname = '_' + node;

    this.add_var(varname);
    return varname;
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
    const thing = this.process_lhs(node[0]) + '.asarray';
    const arrayIndecies = node[1];

    return thing + arrayIndecies.map((indx) => {
      return '[' + this.process_expression(indx) + ']';
    }).join('');
  }

  process_binop(node) {
    const op = node[0];
    const lhs = this.process_expression(node[1]);
    const rhs = this.process_expression(node[2]);

    return '(' + [lhs, op, rhs].join(' ') + ')';
  }

  process_unop(node) {
    const op = node[0];
    const lhs = this.process_expression(node[1]);

    return '(' + op + lhs + ')';
  }

  process_call(node) {
    const identifier = this.process_lhs(node[0]);
    const params = node[1] ? node[1].map((pnode) => {
      return this.process_expression(pnode);
    }) : [];

    return '(yield* ' + identifier + '(' + params.join(', ') + '))';
  }

  // Start the statements:

  process_assign(node) {
    const lhs = this.process_lhs(node[0]);
    const value = this.process_expression(node[1]);

    return lhs + ' = ' + value + ';\n';
  }

  process_callstatement(node) {
    const call = this.process_call(node[0][1]);

    return call + ';\n';
  }

  process_cond(node) {
    const start = node[0];
    const rest = node.slice(1);

    return 'if (' + this.process_expression(start[0]) + ') {\n' +
            this.process_block(start[1]) + this.get_indent() + '}' +
            rest.map((c) => {
              return ' else ' +
                      (c[0] ? ('if (' + this.process_expression(c[0]) + ')') : '') +
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
    const name = this.process_identifier(node[0][1][0]);
    this.add_ignorevar(name);

    return 'function* ' + name + '() {\n' + this.process_block(node[2]) + this.get_indent() + '}\n\n';
  }

  process_for(node) {
    const iter = this.process_lhs(node[0]);

    const forinfo = node[1];

    const start = this.process_expression(forinfo[0]);
    const end = this.process_expression(forinfo[1]);
    const step = this.process_expression(forinfo[2]);

    const forStart = iter + ' = ' + start + '; ';
    const forCond = '(' + start + ' < ' + end + ' ? (' + iter + ' < ' + end + ') : (' + iter + ' > ' + end + ')); ';
    const forIter = iter + ' += ' + step;

    return 'for (' +
            forStart +
            forCond +
            forIter +
            ') {\n' + this.process_block(node[2]) + this.get_indent() + '}\n\n';
  }

  process_while(node) {
    const cond = this.process_expression(node[0]);

    return 'while (' + cond+ ') {\n' + this.process_block(node[1]) + this.get_indent() + '}\n\n';
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
