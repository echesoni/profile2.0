const express = require('express');
const app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

app.use(express.static('public'));

// app.get('/', function(req, res){
//   res.send('Hello World')
// });

app.listen(port, hostname, () => {
  console.log(`Magic is happening at http://${hostname}:${port}`);
});
