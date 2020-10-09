"use strict";

var express = require('express');

var _require = require('express-validator'),
    body = _require.body;

var notesController = require('../controllers/notes');

var auth = require('../middleware/auth');

var router = express.Router();
router.get('/', auth, notesController.fetchAll);
router.post('/', [auth, body('title').trim().isLength({
  min: 5
}).not().isEmpty(), body('body').trim().isLength({
  min: 10
}).not().isEmpty(), body('user').trim().not().isEmpty()], notesController.noteNote);
router["delete"]('/:id', auth, notesController.deleteNote);
module.exports = router;