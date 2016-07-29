const path = require('path');

const indexPath = path.resolve('index.html');

const express = require('express');
const app = express();

app.use('/monaco', express.static('node_modules/monaco-editor'));
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(indexPath);
});

app.listen(3000, function() {
  console.log('Monaco server running');
});
