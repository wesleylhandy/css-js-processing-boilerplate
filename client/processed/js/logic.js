"use strict";

var _console$log;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}, _defineProperty(_console$log, "GetGroceries", GetGroceries), _defineProperty(_console$log, "GetDinner", GetDinner), _console$log));
console.log(window.location.href);
console.log("Syncing...");