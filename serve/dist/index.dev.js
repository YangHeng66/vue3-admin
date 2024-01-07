"use strict";

var express = require('express');

var app = express();
app.get('/login', function (req, res) {
  res.json({
    name: 'test',
    age: 18
  });
});
app.listen(3000, function () {
  console.log('server is running at port 3000');
});