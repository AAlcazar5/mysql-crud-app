const db = require('../database/database');

module.exports = class Note {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM notes');
  }

  static save(note) {
    return db.execute(
      'INSERT INTO notes (title, body, user) VALUES (?, ?, ?)',
      [note.title, note.body, note.user]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM notes WHERE id = ?', [id]);
  }
  
};
