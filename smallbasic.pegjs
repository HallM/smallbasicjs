// statements:
// label:
// assignable_expression = expression
// If expression Then \n Block \n (ElseIf expression \n Block \n)* (Else \n Block \n){0,1} Endif
// For variable = expression To expression (Step expression){0.1} \n Block \n EndFor
// While expression \n Block \n EndWhile
// Goto label
// Sub identifier \n Block \n EndSub

// expressions:
// "string"
// 1234
// -12.34
// True / False
// identifier
// expression [ expression ]
// expression ([*/-+]) expression
// ( expression )
//
// Internal.identifier
// Internal.identifier ( expression (, expression)* )
// identifier ( expression (, expression)* )

// assignable_expressions have to be something that breaks into an L value
// basically, it has to start with an identifier and cannot be a function call
// after that, doesn't really matter
//
// Something.Something = something
// Something.Something[1][2] = something
// something = somethingelse
// something[0][1][2] = somethingelse
//
// but cannot be
// Something.Something() = something
// something() = somethingelse

// comparison are slightly different
// True / False
// expression (and|or) expression
// expression (=|<>|>=|<=|>|<) expression

eol
  = "\n"
  / "\r\n"
  / "\r"
  / "\u2028"
  / "\u2029"

ws
  = [\t\v\f \u00A0\uFEFF] / eol

string
  = '"' s:(!'"' !eol c:. {return c})* '"'
  { return '"' + s.join('') + '"'; }

number
  = n:(float / integer) { return n; }

float
  = l:integer "." r:unsigned_integer { return parseFloat(l + "." + r); }

unsigned_integer
  = digits:[0-9]+ { return parseInt(arr.join(''), 10); }

signed_integer
  = '-' n:unsigned_integer { return n * -1; }

integer
  = signed_integer / unsigned_integer

boolean
  = "true" { return true; }
  / "false" { return false; }

literal
  = l:(string / number / boolean)
  { return ['literal', [l]]; }

identifier
  = start:[a-zA-Z] rest:[a-zA-Z0-9_]*
  { return ['identifier', [(start + rest.join('')).toLowerCase()]]

variable
  = i:identifier
  { return ['variable', [i]]; }

internalProperty
  = i:identifier "." p:identifier
  { return ['property', [i, p]]; }

array
  = e:lhs "[" i:expression "]"
  { return ['array', [e, i]]; }

lhs
  = array
  / internalProperty
  / variable

additive_expression
  = l:additive_expression o:("+" / "-") r:multiplicative_expression
  / multiplicative_expression

multiplicative_expression
  = l:multiplicative_expression o:("*" / "/") r:parened_expression
  / parened_expression

parened_expression
  = "(" e:parened_expression ")"
  / expression_part

expression_part
  = lhs
  / call

expression
  = additive_expression

call
  = e:lhs "(" params:(p1:expression prest:("," p:expression { return p; })* { return [p1].concat(prest || []); }){0,1} ")"
  { return ['call', [e, params]]; }

comparison

andor

forloop

whileloop
