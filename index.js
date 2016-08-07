const path = require('path');

const indexPath = path.resolve('index.html');

const express = require('express');
const app = express();

app.use('/monaco', express.static('node_modules/monaco-editor'));
app.use('/runtime', express.static('runtime'));
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(indexPath);
});

app.get('/tetris.html', function(req, res){
  res.sendFile(path.resolve('tetris.html'));
});
app.get('/tetrisbrowser2.js', function(req, res){
  res.sendFile(path.resolve('tetrisbrowser3.js'));
});

app.listen(3000, function() {
  console.log('Smallbasic server running');
});
