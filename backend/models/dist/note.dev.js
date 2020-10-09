"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require('../database/database');

module.exports =
/*#__PURE__*/
function () {
  function Note(title, body, user) {
    _classCallCheck(this, Note);

    this.title = title;
    this.body = body;
    this.user = user;
  }

  _createClass(Note, null, [{
    key: "fetchAll",
    value: function fetchAll() {
      return db.execute('SELECT * FROM notes');
    }
  }, {
    key: "save",
    value: function save(note) {
      return db.execute('INSERT INTO notes (title, body, user) VALUES (?, ?, ?)', [note.title, note.body, note.user]);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return db.execute('DELETE FROM notes WHERE id = ?', [id]);
    }
  }]);

  return Note;
}();