"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var authRoutes = require('./routes/auth');

var notesRoutes = require('./routes/notes');

var errorController = require('./controllers/error');

var app = express();
var ports = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});
app.use('/auth', authRoutes);
app.use('/note', notesRoutes);
app.use(errorController.get404);
app.use(errorController.get500);
app.listen(ports, function () {
  return console.log("Listening on port ".concat(ports));
});