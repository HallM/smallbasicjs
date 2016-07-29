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
// expression ([*/-+]|and|or) expression
// expression (=|<>|>=|<=|>|<) expression
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
