var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World   12   !\n');
});
app.get('/a', function (req, res) {
  res.send('Hello World   a   !\n');
});
app.get('/b', function (req, res) {
  res.send('Hello World   b   !\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

