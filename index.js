const path = require('path');

const indexPath = path.resolve('index.html');

const express = require('express');
const app = express();

app.use('/lib', express.static('lib'));
app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));
app.use('/samples', express.static('samples'));

app.get('/', function(req, res){
  res.sendFile(indexPath);
});

app.listen(3000, function() {
  console.log('Smallbasic server running');
});
