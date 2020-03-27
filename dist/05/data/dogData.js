"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dog2 = exports.dog1 = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _dog = _interopRequireDefault(require("../class/dog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// コンソールで入力させるパッケージ

/* -------------------------------------*/
// 一つだけエクスポートすれば良い場合

/* -------------------------------------*/
// const dog = new Dog("レオ", 4, "チワワ");
// 一つだけ返す場合は default
// export default dog;

/* -------------------------------------*/
// 複数の定数を名前付きエクスポートする

/* -------------------------------------*/
var dog1 = new _dog["default"]("レオ", 4, "チワワ"); // dog2 は入力された内容を当てはめてみる

exports.dog1 = dog1;

var name = _readlineSync["default"].question("名前を入力してください: ");

var age = _readlineSync["default"].questionInt("年齢を入力してください: "); // questionInt は整数のみ


var breed = _readlineSync["default"].question("犬種を入力してください: ");

var dog2 = new _dog["default"](name, age, breed);
exports.dog2 = dog2;