"use strict";

var mysql = require('mysql2');

var config = require('../config/config.json');

var pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password
});
module.exports = pool.promise();