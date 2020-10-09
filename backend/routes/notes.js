const express = require('express');

const { body } = require('express-validator');

const notesController = require('../controllers/notes');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, notesController.fetchAll);

router.post(
  '/',
  [
    auth,
    body('title').trim().isLength({ min: 5 }).not().isEmpty(),
    body('body').trim().isLength({ min: 10 }).not().isEmpty(),
    body('user').trim().not().isEmpty(),
  ],
  notesController.noteNote
);

router.delete('/:id', auth, notesController.deleteNote);

module.exports = router;
