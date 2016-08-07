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
    this.stdlib = [];
    this.blockLevel = 1;
    this.indentString = '';
    this.L = 0;
    this.pushpop = 0;
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
  add_stdlib(prop) {
    if (this.stdlib.indexOf(prop) === -1) {
      this.stdlib.push(prop);
    }
  }

  optimize_code(code) {
    const lines = code
      .split('\n')
      .filter(function(l) {
        return l && l.length;
      });

    // console.log('original LOC: ', lines.length);
    let didOptimizeThisPass = false;
    // let optimizationsDone = [];
	  // let linestweaked = [];

    function opt(lines) {
      const pushPopsToRemove = [];
      didOptimizeThisPass = false;
      // let lastLine = null;
      // optimizationsDone = [];
      // linestweaked = [];
      const out = [];

      for (let i=0; i < lines.length; i++) {
        const line = lines[i].trim();
        let didOptimizeThisLine = false;

        // remove useless lines
        if (!line.length || line === ';') {
          didOptimizeThisLine = true;
        }

        if (!didOptimizeThisLine && line.indexOf(' = ') !== -1) {
          var parts = line.substring(0, line.lastIndexOf(';')).split(' = ');
          if (parts.length === 2 && parts[0].trim() === parts[1].trim()) {
            // it's a noop
            didOptimizeThisLine = true;
          }
        }
        if (!didOptimizeThisLine && /^[a-z0-9_]+\s=\s/i.test(line)) {
          const equalsIndex = line.indexOf('=');
          const varname = line.substring(0, equalsIndex - 1);
          let j = i+1;

          if (j < lines.length) {
            const otherLine = lines[j];
            if (otherLine.substr(0, (varname.length*2) + 4) === (varname + ' = ' + varname + '.')) {
              const loc = otherLine.lastIndexOf(varname);
              const replacement = line.substring(equalsIndex+2, line.lastIndexOf(';'));
              out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
              i = j;
              didOptimizeThisLine = true;
            } else if (otherLine.substr(0, varname.length + 3) === (varname + ' = ')) {
              const lIndex = otherLine.indexOf(varname, 1);
              const rIndex = otherLine.lastIndexOf(varname);
              if (lIndex === -1) {
                out.push(line.substring(equalsIndex+2));
                didOptimizeThisLine = true;
              } else if (lIndex === rIndex) {
                const loc = lIndex;
                const replacement = line.substring(equalsIndex+2, line.lastIndexOf(';'));
                out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
                i = j;
                didOptimizeThisLine = true;
              }
            } else if (otherLine.indexOf(varname) > 0) {
              // can only be used once

              if (otherLine.indexOf(varname, otherLine.indexOf(varname, 1)+1) === -1) {
                // do a look ahead to make sure it's not used another time
                let varUsed = false;

                for (let x = j+1; x < lines.length; x++) {
                  const checkLine = lines[x];
                  if (checkLine.indexOf('next') !== -1 || checkLine.indexOf('break') !== -1) {
                    // assume that someone else may end up using it
                    varUsed = true;
                    break;
                  } else if (checkLine.indexOf(varname, 1) !== -1) {
                    varUsed = true;
                    break;
                  } else if (checkLine.substr(0, varname.length + 3) === (varname + ' = ')) {
                    break;
                  }
                }

                // we cannot have two pops on the same line, they may be out of order
                if (line.indexOf('tmp.pop') !== -1 && otherLine.indexOf('tmp.pop') !== -1) {
                  varUsed = true;
                }

                if (!varUsed) {
                  const loc = otherLine.lastIndexOf(varname);
                  const replacement = line.substring(equalsIndex+2, line.lastIndexOf(';'));
                  out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
                  i = j;
                  didOptimizeThisLine = true;
                }
              }
            }
          }
        }
        if (!didOptimizeThisLine && line === 'params = [];') {
          let j = i+1;
          let canOptimize = true;

          for (; j < lines.length; j++) {
            const otherLine = lines[j];
            if (otherLine.substr(0, 'fn.push(["$L'.length) === 'fn.push(["$L') {
              break;
            } else if (otherLine.substr(0, 'params.push('.length) !== 'params.push(') {
              canOptimize = false;
            }
          }

          if (canOptimize) {
            didOptimizeThisLine = true;
            let newLine = lines[j].substring(0, lines[j].indexOf(',')) + ', [';
            let first = true;
            for (i++; i < j; i++) {
              if (first) {
                first = false;
              } else {
                newLine += ', ';
              }
              newLine += lines[i].substring('params.push('.length, lines[i].length-2);
            }
            newLine += ']]);';
            out.push(newLine);
          }
        }
        if (!didOptimizeThisLine && line.substr(0, 'next = "'.length) === 'next = "') {
          if (i+2 < lines.length) {
            if (lines[i+1] === 'break;' && lines[i+2] === 'case "' + line.substr('next = "'.length, line.indexOf('"')) + '":') {
              didOptimizeThisLine = true;
              out.push(lines[i+2]);
              i += 2;
            }
          }
        }
        if (!didOptimizeThisLine && line.substr(0, 'fn.push(["$L'.length) === 'fn.push(["$L') {
          if (lines[i-1].substr(0, 'tmp.push(params);//PUSHPOP'.length) === 'tmp.push(params);//PUSHPOP') {
            const pp = parseInt(lines[i-1].substring('tmp.push(params);//PUSHPOP'.length), 10);
            if (pushPopsToRemove.indexOf(pp) === -1) {
              pushPopsToRemove.push(pp);
            }
          }
        }
        if (!didOptimizeThisLine && /^[a-z0-9_]+;$/i.test(line) && line !== 'break;') {
          didOptimizeThisLine = true;
        }
        if (!didOptimizeThisLine && line.substr(0, 'tmp.pop();//PUSHPOP'.length) === 'tmp.pop();//PUSHPOP') {
          const pp = parseInt(line.substring('tmp.pop();//PUSHPOP'.length), 10);
          if (pushPopsToRemove.indexOf(pp) === -1) {
            pushPopsToRemove.push(pp);
          }
          didOptimizeThisLine = true;
        }

        if (!didOptimizeThisLine) {
          out.push(line);
        } else {
          didOptimizeThisPass = true;
        }
      }

      return out.filter(function(line) {
        const indx = line.indexOf('//PUSHPOP');
        if (indx !== -1) {
          const pp = parseInt(line.substring(indx + '//PUSHPOP'.length), 10);
          if (pushPopsToRemove.indexOf(pp) !== -1) {
            return false;
          }
        }
        return true;
      });
    }

    let optimized = opt(lines);
    // console.log('first pass optimized LOC: ', optimized.length);
    // console.log('optimizationsDone', optimizationsDone)
    while (didOptimizeThisPass) {
      optimized = opt(optimized);
      // console.log('another pass optimized LOC: ', optimized.length);
      // console.log('optimizationsDone', optimizationsDone)
      // console.log('', linestweaked)
    }

    // DO NOT clean up the, what look like, unmatched push+pops. it's just lost comments

    // console.log('optimized LOC: ', optimized.length);
    return optimized.join('\n');
  }

  process_file(str) {
    // parser gets confused if file does not end with a blank new line
    const ast = parser.parse(str + '\n');
    const code = this.optimize_code(this.process_block(ast));

    const varIndent = this.indentString + this.indentString + this.indentString;

    const varOutput = this.vars
      .map((v) => {
        if (this.callables.indexOf(v) !== -1) {
          return varIndent + v + ': new DataUnit("' + v + '", DATATYPES.DT_FN)';
        } else {
          return varIndent + v + ': new DataUnit()';
        }
      }).join(',\n');

    const stdlibOutput = this.stdlib
      .filter(v => this.vars.indexOf(v) === -1)
      .map((v) => {
        return 'case "' + v + '":\n' +
          'retval = impl' + v + '.apply(env, fn[fn.length - 1][1]);\n' +
          'if (retval && retval.then) {\n' +
            'retval.next = "' + v + '$0";\n' +
            'return retval;\n' +
          '}\n' +
        'case "' + v + '$0":\n' +
          'retval = val || retval;\n' +
          'val = undefined;\n' +
          'next = fn.pop()[0];\n' +
          'break;\n';
      }).join('\n');

    return `//'use strict';
//var DataUnit = require('./runtime/data-unit').DataUnit;
//var DATATYPES = require('./runtime/data-unit').DATATYPES;

var interrupt = (function() {
  const env = {
${varOutput}
  };

  function thread(fn) {
    var tmp = [];
    var fn = fn || [];

    return function execute(next, val) {
      var params = null;
      var scratch = new DataUnit();
      var retval = new DataUnit();

      while(1) {
        switch(next) {
  ${stdlibOutput}

          case '':
  ${code}
          default:
            return null;
        }
        if (!next) {
          return null;
        }
      }
    }
  }

  var curlabel = '';
  var mainThread = thread();
  function runner(val) {
    var ret = mainThread(curlabel, val);
    if (ret) {
      curlabel = ret.next;
      ret.then(runner);
    }
  }
  runner();

  return function interrupt(fnname) {
    var intlabel = fnname;
    var intThread = thread([null, []]);

    function intrun(val) {
      var ret = intThread(intlabel, val);
      if (ret) {
        intlabel = ret.next;
        ret.then(intrun);
      }
    }

    intrun();
  }
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

  process_lhs(node, isCalled) {
    const type = node[0];
    const astnode = node[1];

    const prefix = 'scratch = ';
    const postfix = ';\n';

    if (type === 'property') {
      return prefix + this.process_property(astnode, isCalled) + postfix;
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
    } else if (type === 'property') {
      return prefix + this.process_property(astnode) + postfix;
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
    return this.process_identifier(node[0]);
  }

  process_property(node, isCalled) {
    const obj = node[0];
    const prop = node[1];
    const ret = obj + '.' + prop;

    if (isCalled) {
      this.add_stdlib(ret);
    }
    return ret;
  }

  process_binop(node) {
    const lhs = this.process_expression(node[1]);
    const rhs = this.process_expression(node[2], true);

    let op = null;
    switch (node[0]) {
      case 'assign':
        op = 'op_assign';
        break;

      case 'index':
        op = 'op_index';
        break;

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
  }

  process_call(node) {
    // TODO: this should not mess up scratch, right?
    const identifier = this.process_lhs(node[0], true);

    const params = node[1] ? node[1].map((pnode) => {
      const v = this.process_expression(pnode);
      return v + 'params.push(scratch);\n';
    }) : [];

    const l_label = '$L' + this.L++;

    const retvalPushpop = this.pushpop++;
    const paramsPushpop = this.pushpop++;

    return 'tmp.push(retval);//PUSHPOP'+retvalPushpop+'\ntmp.push(params);//PUSHPOP'+paramsPushpop+'\nparams = [];\n' + params.join('') +
            'fn.push(["' + l_label + '", params]);\n' +
            identifier +
            'next = scratch.as_string();\nbreak;\n' +
            'case "' + l_label + '":\n' +
            'params = tmp.pop();//PUSHPOP'+paramsPushpop+'\nscratch = retval;\nretval = tmp.pop();//PUSHPOP'+retvalPushpop+'\n';
  }

  // Start the statements:

  process_assign(node) {
    return this.process_expression(node[0]);
  }

  process_callstatement(node) {
    const call = this.process_call(node[0][1]);

    return call + ';\n';
  }

  process_cond(node) {
    const start = node[0];
    const rest = node.slice(1);

    let condition = this.process_expression(start[0]);

    let true_label = '$L' + this.L++;
    const final_label = '$L' + this.L++;
    let else_label = rest.length ? ('$L' + this.L++) : final_label;

    let output = condition + 'if (scratch.as_bool()) {\n' +
                  'next = "' + true_label + '";\n' +
                '} else {\n' +
                  'next = "' + else_label + '";\n' +
                '}\nbreak;\n' +
              'case "' + true_label + '":\n' +
                this.process_block(start[1]) +
                'next = "' + final_label + '";\nbreak;\n';

    rest.forEach((c, i) => {
      const thisLabel = else_label;

      condition = c[0] ? this.process_expression(c[0]) : null;

      output += 'case "' + thisLabel + '":\n';

      if (condition) {
        true_label = '$L' + this.L++;
        else_label = (i+1 < rest.length) ? ('$L' + this.L++) : final_label;

        output += condition + 'if (scratch.as_bool()) {\n' +
                  'next = "' + true_label + '";\n' +
                '} else {\n' +
                  'next = "' + else_label + '";\n' +
                '}\nbreak;\n' +
              'case "' + true_label + '":\n' +
                this.process_block(c[1]) +
                'next = "' + final_label + '";\nbreak;\n';
      } else {
        output += this.process_block(c[1]) + 'next = "' + final_label + '";\nbreak;\n';
      }
    });

    output += 'case "' + final_label + '":\n';
    return output;
  }

  process_label(node) {
    const labelName = this.process_identifier(node[0], true);
    return 'case "' + labelName + '":\n';
  }

  process_goto(node) {
    const labelName = this.process_identifier(node[0], true);
    return 'next = "' + labelName + '";\nbreak;\n';
  }

  process_fn(node) {
    const name = this.process_identifier(node[0], true);
    this.add_callable(name);

    // TODO: fns need to be changed, so that the we have the label
    // internal subroutines are just a label to jump to
    // the external ones have a label as well (their own name)
    // so the internal fn could just be a string (the name)
    // then add some code that "statically links" in the stdlib

    const skiparound_label = '$L' + this.L++;

    return 'next = "' + skiparound_label + '";\nbreak;\n' +
            'case "' + name + '":\n' +
            this.process_block(node[2]) +
            'retval = new DataUnit();\nnext = fn.pop()[0];\nbreak;\n' +
            'case "' + skiparound_label + '":\n';
  }

  process_for(node) {
    const iter = this.process_lhs(node[0]);

    const forinfo = node[1];

    const start_label = '$L' + this.L++;
    const block_label = '$L' + this.L++;
    const final_label = '$L' + this.L++;

    const start = this.process_expression(forinfo[0]);
    const end = this.process_expression(forinfo[1]);
    const step = this.process_expression(forinfo[2]);

    const forStart  = start + 'retval = scratch;\n' + iter + 'scratch.op_assign(retval);\n';
    const forCond = iter + 'tmp.push(scratch);\n' + end + 'retval = scratch;\n' + start +
                    'if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {\n' +
                      'next = "' + block_label + '";\n' +
                    '} else {\n' +
                      'next = "' + final_label + '";\n' +
                    '}\nbreak;\n';
    const forIter = step + 'retval = scratch;\n' + iter + 'scratch.op_assign(scratch.op_add(retval));\n';

    return forStart +
            'case "' + start_label + '":\n' +
            forCond +
            'case "' + block_label + '":\n' +
            this.process_block(node[2]) +
            forIter +
            'next = "' + start_label + '";\nbreak;\n' +
            'case "' + final_label + '":\n';
  }

  process_while(node) {
    const start_label = '$L' + this.L++;
    const block_label = '$L' + this.L++;
    const final_label = '$L' + this.L++;

    const cond = this.process_expression(node[0]);

    return 'case "' + start_label + '":\n' +
            cond + 'if (scratch.as_bool()) {\nnext = "' + block_label + '";\n} else {\nnext = "' + final_label + '";\n}\nbreak;\n' +
            'case "' + block_label + '":\n' +
            this.process_block(node[1]) +
            'next = "' + start_label + '";\nbreak;\n' +
            'case "' + final_label + '":\n';
  }

}

const file = fs.readFileSync(process.argv[2], 'utf8');
// const file = `
// GraphicsWindow.BackgroundColor = GraphicsWindow.GetColorFromRGB( 253, 252, 251 )

// BWIDTH = 25    ' box width in pixels
// XOFFSET = 40   ' Screen X offset in pixels of where the board starts
// YOFFSET = 40   ' Screen Y offset in pixels of where the board starts
// PREVIEW_xpos = 13
// PREVIEW_ypos = 2

// GraphicsWindow.Clear()
// GraphicsWindow.Height = 580
// GraphicsWindow.Width = 700
// GraphicsWindow.Show()

// x = XOFFSET + PREVIEW_xpos * BWIDTH - BWIDTH
// y = YOFFSET + PREVIEW_ypos * BWIDTH - BWIDTH

// GraphicsWindow.BrushColor = "Blue"
// GraphicsWindow.FillRectangle(x - 20, y + 190, 310, 170)
// `;

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
