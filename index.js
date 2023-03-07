const express = require('express');
const express = require('axios');

var fun2 = require('./fun2');
const app = express();
<<<<<<< HEAD
fun2.add(1, 5);
=======

fun2.add(1, 3);
>>>>>>> f02a729 (test)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

