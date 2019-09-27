"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Asynchronous function
 * @param {string} uri - Endpoint being called
 * @param {Object} [options={}] - Request Options Object to set headers, method, body, etc
 * @returns {string|Object} - Resolves data being requested or Rejects Error
 */
function callApi(_x) {
  return _callApi.apply(this, arguments);
}
/**
 * Calls FETCH API and expects Text or JSON response
 * @param {string} uri -  Endpoint being called
 * @param {Object} [options={}] - Options being passed to Fetch API
 * @returns {Object|string} - will return JSON if contentType is json or String if not, and an Error Object if call failes
 */


function _callApi() {
  _callApi = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(uri) {
    var options,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return loadData(uri, options);

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

            if (!(typeof _context.t0 == "string")) {
              _context.next = 15;
              break;
            }

            throw new Error(_context.t0);

          case 15:
            throw new Error(_context.t0.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _callApi.apply(this, arguments);
}

function loadData(_x2) {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(uri) {
    var options,
        response,
        contentType,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 3;
            return fetch(uri, options);

          case 3:
            response = _context2.sent;
            contentType = response.headers.get("content-type");

            if (!(response.status >= 200 && response.status < 300)) {
              _context2.next = 13;
              break;
            }

            if (!(contentType && contentType.includes("application/json"))) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 10:
            return _context2.abrupt("return", response.text());

          case 11:
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt("return", getErrorBody(response, contentType).then(function (body) {
              return Promise.reject(body);
            }));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadData.apply(this, arguments);
}

function getErrorBody(_x3) {
  return _getErrorBody.apply(this, arguments);
}

function _getErrorBody() {
  _getErrorBody = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(response) {
    var contentType,
        body,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contentType = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "text";

            if (!contentType.includes("application/json")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return response.json();

          case 4:
            body = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.next = 9;
            return response.text();

          case 9:
            body = _context3.sent;

          case 10:
            return _context3.abrupt("return", body);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getErrorBody.apply(this, arguments);
}