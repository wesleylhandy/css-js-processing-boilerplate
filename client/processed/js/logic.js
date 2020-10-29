"use strict";

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
console.log("Syncing...");