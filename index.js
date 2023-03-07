const express = require('express');
const express = require('axios');

var fun2 = require('./fun2');
const app = express();
fun2.add(1, 3);

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

