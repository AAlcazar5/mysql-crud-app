const { validationResult } = require('express-validator');

const Note = require('../models/note');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allNotes] = await Note.fetchAll();
    res.status(200).json(allNotes);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.noteNote = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const title = req.body.title;
  const body = req.body.body;
  const user = req.body.user;

  try {
    const note = {
      title: title,
      body: body,
      user: user,
    };
    const result = await Note.save(note);
    res.status(201).json({ message: 'Added!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const deleteResponse = await Note.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
