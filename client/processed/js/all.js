"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
  _callApi = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(uri) {
    var options,
        data,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
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
  _loadData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(uri) {
    var options,
        response,
        contentType,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
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
  _getErrorBody = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(response) {
    var contentType,
        body,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
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
}"use strict";

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    if (pair[0] == variable) {
      return pair[1];
    }
  }

  return "";
}"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _console$log;

var fruits = ['apples', 'oranges', 'bananas'];
var veggies = ['carrots', 'celery', 'lettuce'];
var groceryList = [].concat(fruits, veggies);
var ToDos = {
  "GetGroceries": {
    groceryList: groceryList,
    time: "10:00AM"
  },
  "GetHaircut": {
    time: "12:00pm"
  }
};
var GetGroceries = ToDos.GetGroceries,
    GetHaircut = ToDos.GetHaircut,
    _ToDos$GetDinner = ToDos.GetDinner,
    GetDinner = _ToDos$GetDinner === void 0 ? {
  restaraunt: "Winstons",
  time: "5:00pm",
  hasReservations: true
} : _ToDos$GetDinner;
console.log((_console$log = {
  GetGroceries: GetGroceries
}, (0, _defineProperty2.default)(_console$log, "GetGroceries", GetGroceries), (0, _defineProperty2.default)(_console$log, "GetDinner", GetDinner), _console$log));
console.log(window.location.href);
console.log("Syncing...");"use strict";

/**
 * Function to scroll to a particular point on the DOM or within a overflow:scroll box
 * @param {Number} top - pageYoffset of form
 * @param {HTMLElement} [parent=window] - defaults to window, but can receive any DOM element that is a parent of the scollpoint
 * @param {HTMLElement} [el=null] - not necessary if scrolling on window, but if scrolling within a container it must be provided
 */
function scrollToPoint() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (parent !== window && !el) {
    return;
  }

  var parentHeight = parent === window ? document.documentElement.scrollHeight : parent.scrollHeight;
  var visibleHeight = parent === window ? window.innerHeight : parent.clientHeight;
  var initialPoint;

  if (parent === window) {
    initialPoint = parent.scrollY ? parent.scrollY : parent.pageYOffset;
  } else {
    initialPoint = el.offsetTop;
  }

  var scrollDown = top >= initialPoint;

  if (scrollDown) {
    top = top > parentHeight - visibleHeight ? parentHeight - visibleHeight : top;
  } else {
    top = parentHeight <= visibleHeight ? 0 : top;
  }

  window.requestAnimationFrame(uiScroll);

  function uiScroll(timestamp) {
    var scroll;

    if (parent === window) {
      scroll = parent.scrollY ? parent.scrollY : parent.pageYOffset;
    } else {
      scroll = parent.scrollTop;
    }

    var speed = Math.ceil(Math.sqrt(Math.abs(top - scroll))) + 2;

    if (scrollDown) {
      if (scroll + speed > top) {
        window.cancelAnimationFrame(timestamp);
        return;
      }

      scroll = scroll + speed >= top ? top : scroll + speed;
    } else {
      if (scroll - speed < top) {
        window.cancelAnimationFrame(timestamp);
        return;
      }

      scroll = scroll - speed <= top ? top : scroll - speed;
    }

    parent.scroll(0, scroll);
    window.requestAnimationFrame(uiScroll);
  }
}
/**
 *
 * @param {HTMLElement} el - DOM Element
 * @param {HTMLElement} parent - DOM element - defaults to window
 * @returns {Number} - integer representing offsetTop of the element relative to the viewport
 */


function offsetTop(el) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (parent !== window && !el) {
    return;
  } else if (parent === window) {
    var rect = el.getBoundingClientRect(),
        scrollTop = parent.scrollY ? parent.scrollY : parent.pageYOffset;
    return rect.top + scrollTop;
  } else {
    return el.offsetTop;
  }
}