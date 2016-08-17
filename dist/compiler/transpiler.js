define(["require", "exports", './parser'], function (require, exports, parser_1) {
    "use strict";
    var CodeGenerator = (function () {
        function CodeGenerator() {
            this.vars = [];
            this.callables = [];
            this.stdlib = [];
            this.blockLevel = 1;
            this.indentString = '';
            this.L = 0;
            this.pushpop = 0;
        }
        CodeGenerator.prototype.inc_indent = function () {
            this.blockLevel += 1;
        };
        CodeGenerator.prototype.dec_indent = function () {
            this.blockLevel -= 1;
        };
        CodeGenerator.prototype.get_indent = function () {
            return Array(this.blockLevel + 1).join(this.indentString);
        };
        CodeGenerator.prototype.add_var = function (varname) {
            if (this.vars.indexOf(varname) === -1) {
                this.vars.push(varname);
            }
        };
        CodeGenerator.prototype.add_callable = function (varname) {
            if (this.callables.indexOf(varname) === -1) {
                this.callables.push(varname);
            }
        };
        CodeGenerator.prototype.add_stdlib = function (prop) {
            if (this.stdlib.indexOf(prop) === -1) {
                this.stdlib.push(prop);
            }
        };
        CodeGenerator.prototype.optimize_code = function (code) {
            var lines = code
                .split('\n')
                .filter(function (l) {
                return l && !!l.length;
            });
            // console.log('original LOC: ', lines.length);
            var didOptimizeThisPass = false;
            // let optimizationsDone = [];
            // let linestweaked = [];
            function opt(lines) {
                var pushPopsToRemove = [];
                didOptimizeThisPass = false;
                // let lastLine = null;
                // optimizationsDone = [];
                // linestweaked = [];
                var out = [];
                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i].trim();
                    var didOptimizeThisLine = false;
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
                        var equalsIndex = line.indexOf('=');
                        var varname = line.substring(0, equalsIndex - 1);
                        var j = i + 1;
                        if (j < lines.length) {
                            var otherLine = lines[j];
                            if (otherLine.substr(0, (varname.length * 2) + 4) === (varname + ' = ' + varname + '.')) {
                                var loc = otherLine.lastIndexOf(varname);
                                var replacement = line.substring(equalsIndex + 2, line.lastIndexOf(';'));
                                out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
                                i = j;
                                didOptimizeThisLine = true;
                            }
                            else if (otherLine.substr(0, varname.length + 3) === (varname + ' = ')) {
                                var lIndex = otherLine.indexOf(varname, 1);
                                var rIndex = otherLine.lastIndexOf(varname);
                                if (lIndex === -1) {
                                    out.push(line.substring(equalsIndex + 2));
                                    didOptimizeThisLine = true;
                                }
                                else if (lIndex === rIndex) {
                                    var loc = lIndex;
                                    var replacement = line.substring(equalsIndex + 2, line.lastIndexOf(';'));
                                    out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
                                    i = j;
                                    didOptimizeThisLine = true;
                                }
                            }
                            else if (otherLine.indexOf(varname) > 0) {
                                // can only be used once
                                if (otherLine.indexOf(varname, otherLine.indexOf(varname, 1) + 1) === -1) {
                                    // do a look ahead to make sure it's not used another time
                                    var varUsed = false;
                                    for (var x = j + 1; x < lines.length; x++) {
                                        var checkLine = lines[x];
                                        if (checkLine.indexOf('next') !== -1 || checkLine.indexOf('break') !== -1) {
                                            // assume that someone else may end up using it
                                            varUsed = true;
                                            break;
                                        }
                                        else if (checkLine.indexOf(varname, 1) !== -1) {
                                            varUsed = true;
                                            break;
                                        }
                                        else if (checkLine.substr(0, varname.length + 3) === (varname + ' = ')) {
                                            break;
                                        }
                                    }
                                    // we cannot have two pops on the same line, they may be out of order
                                    if (line.indexOf('tmp.pop') !== -1 && otherLine.indexOf('tmp.pop') !== -1) {
                                        varUsed = true;
                                    }
                                    if (!varUsed) {
                                        var loc = otherLine.lastIndexOf(varname);
                                        var replacement = line.substring(equalsIndex + 2, line.lastIndexOf(';'));
                                        out.push(otherLine.substring(0, loc) + replacement + otherLine.substring(loc + varname.length));
                                        i = j;
                                        didOptimizeThisLine = true;
                                    }
                                }
                            }
                        }
                    }
                    if (!didOptimizeThisLine && line === 'params = [];') {
                        var j = i + 1;
                        var canOptimize = true;
                        for (; j < lines.length; j++) {
                            var otherLine = lines[j];
                            if (otherLine.substr(0, 'fn.push(["$L'.length) === 'fn.push(["$L') {
                                break;
                            }
                            else if (otherLine.substr(0, 'params.push('.length) !== 'params.push(') {
                                canOptimize = false;
                            }
                        }
                        if (canOptimize) {
                            didOptimizeThisLine = true;
                            var newLine = lines[j].substring(0, lines[j].indexOf(',')) + ', [';
                            var first = true;
                            for (i++; i < j; i++) {
                                if (first) {
                                    first = false;
                                }
                                else {
                                    newLine += ', ';
                                }
                                newLine += lines[i].substring('params.push('.length, lines[i].length - 2);
                            }
                            newLine += ']]);';
                            out.push(newLine);
                        }
                    }
                    if (!didOptimizeThisLine && line.substr(0, 'next = "'.length) === 'next = "') {
                        if (i + 2 < lines.length) {
                            if (lines[i + 1] === 'break;' && lines[i + 2] === 'case "' + line.substr('next = "'.length, line.indexOf('"')) + '":') {
                                didOptimizeThisLine = true;
                                out.push(lines[i + 2]);
                                i += 2;
                            }
                        }
                    }
                    if (!didOptimizeThisLine && line.substr(0, 'fn.push(["$L'.length) === 'fn.push(["$L') {
                        if (lines[i - 1].substr(0, 'tmp.push(params);//PUSHPOP'.length) === 'tmp.push(params);//PUSHPOP') {
                            var pp = parseInt(lines[i - 1].substring('tmp.push(params);//PUSHPOP'.length), 10);
                            if (pushPopsToRemove.indexOf(pp) === -1) {
                                pushPopsToRemove.push(pp);
                            }
                        }
                    }
                    if (!didOptimizeThisLine && /^[a-z0-9_]+;$/i.test(line) && line !== 'break;') {
                        didOptimizeThisLine = true;
                    }
                    if (!didOptimizeThisLine && line.substr(0, 'tmp.pop();//PUSHPOP'.length) === 'tmp.pop();//PUSHPOP') {
                        var pp = parseInt(line.substring('tmp.pop();//PUSHPOP'.length), 10);
                        if (pushPopsToRemove.indexOf(pp) === -1) {
                            pushPopsToRemove.push(pp);
                        }
                        didOptimizeThisLine = true;
                    }
                    if (!didOptimizeThisLine) {
                        out.push(line);
                    }
                    else {
                        didOptimizeThisPass = true;
                    }
                }
                return out.filter(function (line) {
                    var indx = line.indexOf('//PUSHPOP');
                    if (indx !== -1) {
                        var pp = parseInt(line.substring(indx + '//PUSHPOP'.length), 10);
                        if (pushPopsToRemove.indexOf(pp) !== -1) {
                            return false;
                        }
                    }
                    return true;
                });
            }
            var optimized = opt(lines);
            // console.log('first pass optimized LOC: ', optimized.length);
            // console.log('optimizationsDone', optimizationsDone)
            while (didOptimizeThisPass) {
                optimized = opt(optimized);
            }
            // DO NOT clean up the, what look like, unmatched push+pops. it's just lost comments
            // console.log('optimized LOC: ', optimized.length);
            return optimized.join('\n');
        };
        CodeGenerator.prototype.process_file = function (str) {
            var _this = this;
            // parser gets confused if file does not end with a blank new line
            var ast = parser_1.default.parse(str + '\n');
            var code = this.optimize_code(this.process_block(ast));
            var varIndent = this.indentString + this.indentString + this.indentString;
            var varOutput = this.vars
                .map(function (v) {
                if (_this.callables.indexOf(v) !== -1) {
                    return varIndent + v + ': new DataUnit("' + v + '", DATATYPES.DT_FN)';
                }
                else {
                    return varIndent + v + ': new DataUnit()';
                }
            }).join(',\n');
            var stdlibs = this.stdlib.filter(function (v) { return _this.vars.indexOf(v) === -1; });
            var stdlibVars = stdlibs
                .reduce(function (prev, v) {
                var lib = v.substring(0, v.indexOf('.'));
                if (prev.indexOf(lib) === -1) {
                    prev.push(lib);
                }
                return prev;
            }, []).map(function (v) {
                return 'var ' + v + ' = stdlibApi.' + v + ';\n' +
                    'var impl' + v + ' = stdlib.impl.' + v + ';\n' +
                    'env.' + v + ' = ' + v + ';';
            }).join('\n');
            var stdlibImpl = stdlibs
                .map(function (v) {
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
            return "require(['runtime/stdlib'], function(stdlib) {\n  var DataUnit = stdlib.DataUnit;\n  var DATATYPES = stdlib.DATATYPES;\n\n  const env = {\n" + varOutput + "\n  };\n\n  var stdlibApi = stdlib.api(env);\n" + stdlibVars + "\n\n  function thread(fn) {\n    var tmp = [];\n    var fn = fn || [];\n\n    return function execute(next, val) {\n      var params = null;\n      var scratch = new DataUnit();\n      var retval = new DataUnit();\n\n      while(1) {\n        switch(next) {\n  " + stdlibImpl + "\n\n          case '':\n  " + code + "\n          default:\n            return null;\n        }\n        if (!next) {\n          return null;\n        }\n      }\n    }\n  }\n\n  var curlabel = '';\n  var mainThread = thread();\n  function runner(val) {\n    var ret = mainThread(curlabel, val);\n    if (ret) {\n      curlabel = ret.next;\n      ret.then(runner);\n    }\n  }\n  runner();\n\n  env.$interrupt = function interrupt(fnname) {\n    var intlabel = fnname;\n    var intThread = thread([null, []]);\n\n    function intrun(val) {\n      var ret = intThread(intlabel, val);\n      if (ret) {\n        intlabel = ret.next;\n        ret.then(intrun);\n      }\n    }\n\n    intrun();\n  }\n});\n";
        };
        CodeGenerator.prototype.process_block = function (node) {
            var _this = this;
            this.inc_indent();
            var ret = node.map(function (statementNode) {
                var type = statementNode[0];
                var astnode = statementNode[1];
                if (type === 'assign') {
                    return _this.get_indent() + _this.process_assign(astnode);
                }
                else if (type === 'callstatement') {
                    return _this.get_indent() + _this.process_callstatement(astnode);
                }
                else if (type === 'cond') {
                    return _this.get_indent() + _this.process_cond(astnode);
                }
                else if (type === 'label') {
                    return _this.get_indent() + _this.process_label(astnode);
                }
                else if (type === 'goto') {
                    return _this.get_indent() + _this.process_goto(astnode);
                }
                else if (type === 'fn') {
                    return _this.get_indent() + _this.process_fn(astnode);
                }
                else if (type === 'for') {
                    return _this.get_indent() + _this.process_for(astnode);
                }
                else if (type === 'while') {
                    return _this.get_indent() + _this.process_while(astnode);
                }
                throw new Error('invalid type in block ' + type);
            }).join('');
            this.dec_indent();
            return ret;
        };
        CodeGenerator.prototype.process_lhs = function (node, isCalled) {
            if (isCalled === void 0) { isCalled = false; }
            var type = node[0];
            var astnode = node[1];
            var prefix = 'scratch = ';
            var postfix = ';\n';
            if (type === 'property') {
                return prefix + this.process_property(astnode, isCalled) + postfix;
            }
            else if (type === 'variable') {
                return prefix + this.process_variable(astnode) + postfix;
            }
            throw new Error('invalid type in lhs ' + type);
        };
        CodeGenerator.prototype.process_expression = function (node, isRhs) {
            if (isRhs === void 0) { isRhs = false; }
            var type = node[0];
            var astnode = node[1];
            var prefix = isRhs ? '' : 'scratch = ';
            var postfix = isRhs ? '' : ';\n';
            if (type === 'binop') {
                return this.process_binop(astnode) + postfix;
            }
            else if (type === 'unop') {
                return prefix + this.process_unop(astnode) + postfix;
            }
            else if (type === 'property') {
                return prefix + this.process_property(astnode) + postfix;
            }
            else if (type === 'variable') {
                return prefix + this.process_variable(astnode) + postfix;
            }
            else if (type === 'call') {
                return prefix + this.process_call(astnode) + postfix;
            }
            else if (type === 'literal') {
                return prefix + this.process_literal(astnode) + postfix;
            }
            throw new Error('invalid type in expression ' + type);
        };
        CodeGenerator.prototype.process_literal = function (node) {
            var value = node[0];
            if (value[0] === '"') {
                return 'new DataUnit(' + node + ', DATATYPES.DT_STRING)';
            }
            else if ((typeof value === 'number') || (value[0] >= '0' && value[0] <= '9')) {
                return 'new DataUnit(' + node + ', DATATYPES.DT_NUMBER)';
            }
            throw new Error('Invalid literal ' + value);
        };
        CodeGenerator.prototype.process_identifier = function (node, doNotDecorate) {
            if (doNotDecorate === void 0) { doNotDecorate = false; }
            if (!node) {
                throw new Error('identifier is not valid');
            }
            if (Array.isArray(node)) {
                throw new Error('identifier is not valid (is array)');
            }
            var varname = '_' + node;
            this.add_var(varname);
            if (doNotDecorate) {
                return varname;
            }
            return 'env.' + varname;
        };
        CodeGenerator.prototype.process_variable = function (node) {
            return this.process_identifier(node[0]);
        };
        CodeGenerator.prototype.process_property = function (node, isCalled) {
            if (isCalled === void 0) { isCalled = false; }
            var obj = node[0];
            var prop = node[1];
            var ret = obj + '.' + prop;
            if (isCalled) {
                this.add_stdlib(ret);
            }
            return ret;
        };
        CodeGenerator.prototype.process_binop = function (node) {
            var lhs = this.process_expression(node[1]);
            var rhs = this.process_expression(node[2], true);
            var op = null;
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
            }
            else {
                return lhs + 'scratch = scratch.' + op + '(' + rhs + ')';
            }
        };
        CodeGenerator.prototype.process_unop = function (node) {
            var lhs = this.process_expression(node[1], true);
            var op = null;
            switch (node[0]) {
                case '-':
                    op = 'op_neg';
                    break;
                default:
                    throw new Error('Invalid unary operator in expression: ' + node[0]);
            }
            return lhs + '.' + op + '()';
        };
        CodeGenerator.prototype.process_call = function (node) {
            var _this = this;
            // TODO: this should not mess up scratch, right?
            var identifier = this.process_lhs(node[0], true);
            var params = node[1] ? node[1].map(function (pnode) {
                var v = _this.process_expression(pnode);
                return v + 'params.push(scratch);\n';
            }) : [];
            var l_label = '$L' + this.L++;
            var retvalPushpop = this.pushpop++;
            var paramsPushpop = this.pushpop++;
            return 'tmp.push(retval);//PUSHPOP' + retvalPushpop + '\ntmp.push(params);//PUSHPOP' + paramsPushpop + '\nparams = [];\n' + params.join('') +
                'fn.push(["' + l_label + '", params]);\n' +
                identifier +
                'next = scratch.as_string();\nbreak;\n' +
                'case "' + l_label + '":\n' +
                'params = tmp.pop();//PUSHPOP' + paramsPushpop + '\nscratch = retval;\nretval = tmp.pop();//PUSHPOP' + retvalPushpop + '\n';
        };
        // Start the statements:
        CodeGenerator.prototype.process_assign = function (node) {
            return this.process_expression(node[0]);
        };
        CodeGenerator.prototype.process_callstatement = function (node) {
            var call = this.process_call(node[0][1]);
            return call + ';\n';
        };
        CodeGenerator.prototype.process_cond = function (node) {
            var _this = this;
            var start = node[0];
            var rest = node.slice(1);
            var condition = this.process_expression(start[0]);
            var true_label = '$L' + this.L++;
            var final_label = '$L' + this.L++;
            var else_label = rest.length ? ('$L' + this.L++) : final_label;
            var output = condition + 'if (scratch.as_bool()) {\n' +
                'next = "' + true_label + '";\n' +
                '} else {\n' +
                'next = "' + else_label + '";\n' +
                '}\nbreak;\n' +
                'case "' + true_label + '":\n' +
                this.process_block(start[1]) +
                'next = "' + final_label + '";\nbreak;\n';
            rest.forEach(function (c, i) {
                var thisLabel = else_label;
                condition = c[0] ? _this.process_expression(c[0]) : null;
                output += 'case "' + thisLabel + '":\n';
                if (condition) {
                    true_label = '$L' + _this.L++;
                    else_label = (i + 1 < rest.length) ? ('$L' + _this.L++) : final_label;
                    output += condition + 'if (scratch.as_bool()) {\n' +
                        'next = "' + true_label + '";\n' +
                        '} else {\n' +
                        'next = "' + else_label + '";\n' +
                        '}\nbreak;\n' +
                        'case "' + true_label + '":\n' +
                        _this.process_block(c[1]) +
                        'next = "' + final_label + '";\nbreak;\n';
                }
                else {
                    output += _this.process_block(c[1]) + 'next = "' + final_label + '";\nbreak;\n';
                }
            });
            output += 'case "' + final_label + '":\n';
            return output;
        };
        CodeGenerator.prototype.process_label = function (node) {
            var labelName = this.process_identifier(node[0], true);
            return 'case "' + labelName + '":\n';
        };
        CodeGenerator.prototype.process_goto = function (node) {
            var labelName = this.process_identifier(node[0], true);
            return 'next = "' + labelName + '";\nbreak;\n';
        };
        CodeGenerator.prototype.process_fn = function (node) {
            var name = this.process_identifier(node[0], true);
            this.add_callable(name);
            // TODO: fns need to be changed, so that the we have the label
            // internal subroutines are just a label to jump to
            // the external ones have a label as well (their own name)
            // so the internal fn could just be a string (the name)
            // then add some code that "statically links" in the stdlib
            var skiparound_label = '$L' + this.L++;
            return 'next = "' + skiparound_label + '";\nbreak;\n' +
                'case "' + name + '":\n' +
                this.process_block(node[2]) +
                'retval = new DataUnit();\nnext = fn.pop()[0];\nbreak;\n' +
                'case "' + skiparound_label + '":\n';
        };
        CodeGenerator.prototype.process_for = function (node) {
            var iter = this.process_lhs(node[0]);
            var forinfo = node[1];
            var start_label = '$L' + this.L++;
            var block_label = '$L' + this.L++;
            var final_label = '$L' + this.L++;
            var start = this.process_expression(forinfo[0]);
            var end = this.process_expression(forinfo[1]);
            var step = this.process_expression(forinfo[2]);
            var forStart = start + 'retval = scratch;\n' + iter + 'scratch.op_assign(retval);\n';
            var forCond = iter + 'tmp.push(scratch);\n' + end + 'retval = scratch;\n' + start +
                'if (scratch.op_lt(retval).as_bool() ? ((scratch = tmp.pop()).op_lte(retval).as_bool()) : ((scratch = tmp.pop()).op_gte(retval).as_bool()) ) {\n' +
                'next = "' + block_label + '";\n' +
                '} else {\n' +
                'next = "' + final_label + '";\n' +
                '}\nbreak;\n';
            var forIter = step + 'retval = scratch;\n' + iter + 'scratch.op_assign(scratch.op_add(retval));\n';
            return forStart +
                'case "' + start_label + '":\n' +
                forCond +
                'case "' + block_label + '":\n' +
                this.process_block(node[2]) +
                forIter +
                'next = "' + start_label + '";\nbreak;\n' +
                'case "' + final_label + '":\n';
        };
        CodeGenerator.prototype.process_while = function (node) {
            var start_label = '$L' + this.L++;
            var block_label = '$L' + this.L++;
            var final_label = '$L' + this.L++;
            var cond = this.process_expression(node[0]);
            return 'case "' + start_label + '":\n' +
                cond + 'if (scratch.as_bool()) {\nnext = "' + block_label + '";\n} else {\nnext = "' + final_label + '";\n}\nbreak;\n' +
                'case "' + block_label + '":\n' +
                this.process_block(node[1]) +
                'next = "' + start_label + '";\nbreak;\n' +
                'case "' + final_label + '":\n';
        };
        return CodeGenerator;
    }());
    function transpile(src) {
        var gen = new CodeGenerator();
        return gen.process_file(src);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = transpile;
    ;
});
//# sourceMappingURL=transpiler.js.map