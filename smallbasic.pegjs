{
  var langKeywords = [
    "if",
    "elseif",
    "else",
    "endif",
    "goto",
    "sub",
    "endsub",
    "for",
    "to",
    "step",
    "endfor",
    "while",
    "endwhile"
  ];
}

start
  = endline_comment* b:block?
  { return b; }

eol "end of line"
  = "\n"
  / "\r\n"
  / "\r"
  / "\u2028"
  / "\u2029"

_ "whitespace"
  = [\t\v\f \u00A0\uFEFF]*

comment "comment"
  = _ "'" _ c:(!eol c:. { return c; })*
  { return ['comment', [c.join('')]]; }

endline_comment
  = comment? eol

string "string literal"
  = '""'
  / '"' s:(!unscapedquote !eol c:. { return c; })* last:unscapedquote
  { return text(); }

unscapedquote
  = last:[^\\] "\"" {return last;}

number "number"
  = n:(float / integer) { return n; }

float
  = l:integer "." r:unsigned_integer { return parseFloat(l + "." + r); }

unsigned_integer
  = digits:[0-9]+ { return parseInt(text(), 10); }

signed_integer
  = '-' n:unsigned_integer { return n * -1; }

integer
  = signed_integer / unsigned_integer

literal
  = l:(string / number)
  { return ['literal', [l]]; }

identifier "identifier"
  = start:[a-zA-Z] rest:[a-zA-Z0-9_]* &{ return langKeywords.indexOf(text()) === -1; }
  { return ['identifier', [text().toLowerCase()]]; }

variable "variable"
  = i:identifier
  { return ['variable', [i]]; }

internalProperty "property"
  = i:identifier "." p:identifier
  { return ['property', [i, p]]; }

array "array"
  = e:(internalProperty / variable) indecies:("[" i:expression "]" { return i; })+
  { return ['array', [e, indecies]]; }

lhs "left hand side"
  = internalProperty
  / array
  / variable

additive_expression
  = l:multiplicative_expression tail:(_ ("+" / "-") _ multiplicative_expression)*
  {
    if (!tail || !tail.length) {
      return l;
    }

    return tail.reduce(function(previous, t) {
      return ['binop', [t[1], previous, t[3]]];
    }, l);
  }

multiplicative_expression
  = l:unary_expression tail:(_ ("*" / "/") _ unary_expression)*
  {
    if (!tail || !tail.length) {
      return l;
    }

    return tail.reduce(function(previous, t) {
      return ['binop', [t[1], previous, t[3]]];
    }, l);
  }

unary_expression
  = u:("+" / "-")? e:parened_expression
  {
    if (!u) {
      return e;
    }

    if (u === '+') {
      return e; // this is a no-op
    }

    return ['unop', [u, e]];
  }

parened_expression
  = "(" _ e:andor_expression _ ")" { return e; }
  / expression_part

expression_part
  = call
  / literal
  / lhs

expression "expression"
  = additive_expression

call "function call"
  = e:lhs _ "(" _ params:(p1:expression prest:(_ "," _ p:expression { return p; })* { return [p1].concat(prest || []); })? _ ")"
  { return ['call', [e, params]]; }

comparison_expression
  = l:additive_expression tail:(_ ("<>" / ">=" / "<=" / ">" / "<" / "=") _ additive_expression)*
  {
    if (!tail || !tail.length) {
      return l;
    }

    return tail.reduce(function(previous, t) {
      var op = t[1];
      switch (op) {
      case '>=':
      case '<=':
      case '>':
      case '<':
        op = t[1];
        break;

      case '<>':
        op = '!==';
        break;

      case '=':
        op = '===';
        break;
      }
      return ['binop', [op, previous, t[3]]];
    }, l);
  }

andor_expression
  = l:comparison_expression tail:(_ ("and"i / "or"i) _ comparison_expression)*
  {
    if (!tail || !tail.length) {
      return l;
    }

    return tail.reduce(function(previous, t) {
      var op = t[1].toLowerCase() === 'and' ? '&&' : '||';
      return ['binop', [op, previous, t[3]]];
    }, l);
  }

assignment_statement "Assignment"
  = _ l:lhs _ "=" _ e:expression _ endline_comment+
  { return ['assign', [l, e]]; }

call_statement "Function call"
  = _ c:call _ endline_comment+
  { return ['callstatement', [c]]; }

ifElse "If statement"
  = _ "If"i _ c:andor_expression _ "Then"i endline_comment+ b:block? elif:(_ "ElseIf"i _ c:andor_expression _ "Then"i endline_comment+ b:block? { return [c, b]; })* els:(_ "Else"i endline_comment+ b:block? { return [null, b]; })? _ "EndIf"i endline_comment+
  {
    var conds = [ [c,b] ];

    if (elif && elif.length) {
      conds = conds.concat(elif);
    }
    if (els) {
      conds.push(els);
    }

    return ['cond', conds];
  }

label_statement "Label statement"
  = _ l:identifier ":" endline_comment+
  { return ['label', [l]]; }

goto_statement "Goto statement"
  = _ "Goto"i _ l:identifier endline_comment+
  { return ['goto', [l]]; }

sub_statement "Sub statement"
  = _ "Sub"i _ n:identifier endline_comment+ b:block? "EndSub"i endline_comment+
  { return ['fn', [n, [], b]]; }

forloop "For loop"
  = _ "For"i _ l:lhs _ "=" _ from:expression _ "To"i _ to:expression step:(_ "Step"i _ e:expression { return e; })? endline_comment+ b:block? _ "EndFor"i endline_comment+
  {
    return ['for', [
      l,
      [from, to, step ? step : ['literal', [1]]],
      b
    ]];
  }

whileloop "While loop"
  = _ "While"i _ c:andor_expression endline_comment+ b:block? _ "EndWhile"i endline_comment+
  {
    return ['while', [c, b]];
  }

statement
  = ifElse
  / forloop
  / whileloop
  / label_statement
  / goto_statement
  / sub_statement
  / assignment_statement
  / call_statement

block
  = statement*
