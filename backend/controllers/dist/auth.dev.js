"use strict";

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var User = require('../models/user');

exports.signup = function _callee(req, res, next) {
  var errors, name, email, password, hashedPassword, userDetails, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          name = req.body.name;
          email = req.body.email;
          password = req.body.password;
          _context.prev = 6;
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

        case 9:
          hashedPassword = _context.sent;
          userDetails = {
            name: name,
            email: email,
            password: hashedPassword
          };
          _context.next = 13;
          return regeneratorRuntime.awrap(User.save(userDetails));

        case 13:
          result = _context.sent;
          res.status(201).json({
            message: 'User registered!'
          });
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](6);

          if (!_context.t0.statusCode) {
            _context.t0.statusCode = 500;
          }

          next(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 17]]);
};

exports.login = function _callee2(req, res, next) {
  var email, password, user, error, storedUser, isEqual, _error, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = req.body.email;
          password = req.body.password;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.find(email));

        case 5:
          user = _context2.sent;

          if (!(user[0].length !== 1)) {
            _context2.next = 10;
            break;
          }

          error = new Error('A user with this email could not be found.');
          error.statusCode = 401;
          throw error;

        case 10:
          storedUser = user[0][0];
          _context2.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(password, storedUser.password));

        case 13:
          isEqual = _context2.sent;

          if (isEqual) {
            _context2.next = 18;
            break;
          }

          _error = new Error('Wrong password!');
          _error.statusCode = 401;
          throw _error;

        case 18:
          debugger;
          token = jwt.sign({
            email: storedUser.email,
            userId: storedUser.id
          }, 'secretfortoken', {
            expiresIn: '1h'
          });
          res.status(200).json({
            token: token,
            userId: storedUser.id
          });
          _context2.next = 27;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](2);

          if (!_context2.t0.statusCode) {
            _context2.t0.statusCode = 500;
          }

          next(_context2.t0);

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 23]]);
};