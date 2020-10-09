"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require('../database/database');

module.exports =
/*#__PURE__*/
function () {
  function User(name, email, password) {
    _classCallCheck(this, User);

    this.name = name;
    this.email = email;
    this.password = password;
  }

  _createClass(User, null, [{
    key: "find",
    value: function find(email) {
      return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }
  }, {
    key: "save",
    value: function save(user) {
      return db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]);
    }
  }]);

  return User;
}();