"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var Note = require('../models/note');

exports.fetchAll = function _callee(req, res, next) {
  var _ref, _ref2, allNotes;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Note.fetchAll());

        case 3:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          allNotes = _ref2[0];
          res.status(200).json(allNotes);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);

          if (!_context.t0.statusCode) {
            _context.t0.statusCode = 500;
          }

          next(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.noteNote = function _callee2(req, res, next) {
  var errors, title, body, user, note, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          title = req.body.title;
          body = req.body.body;
          user = req.body.user;
          _context2.prev = 6;
          note = {
            title: title,
            body: body,
            user: user
          };
          _context2.next = 10;
          return regeneratorRuntime.awrap(Note.save(note));

        case 10:
          result = _context2.sent;
          res.status(201).json({
            message: 'Added!'
          });
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](6);

          if (!_context2.t0.statusCode) {
            _context2.t0.statusCode = 500;
          }

          next(_context2.t0);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[6, 14]]);
};

exports.deleteNote = function _callee3(req, res, next) {
  var deleteResponse;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Note["delete"](req.params.id));

        case 3:
          deleteResponse = _context3.sent;
          res.status(200).json(deleteResponse);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);

          if (!_context3.t0.statusCode) {
            _context3.t0.statusCode = 500;
          }

          next(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};