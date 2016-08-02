var parser = require('./smallbasic');
var fs = require('fs');

// var file = fs.readFileSync('file.sb', 'utf8');
var file =`
  CreatePiece() ' in: template ret: h
`;

try {
  var ast = parser.parse(file);
  console.log(JSON.stringify(ast, null, 2));
} catch (e) {
  console.log(e.message);
  if (e.name === 'SyntaxError') {
    console.log(e.expected);
    console.log(e.found);
    console.log(e.location);
  }
}
