"use strict";

var printInit = function printInit() {
  console.log("コールバック関数が呼ばれました。");
};

var call = function call(callback) {
  console.log("コールバック関数を呼び出します。");
  callback(); // 引数() みたいに書く
}; // 関数printInitを引数に渡して関数callを実行


call(printInit); //////////////////////////////////////////

var printInit2 = function printInit2() {
  console.log("コールバック関数２");
};

var call2 = function call2(callback) {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call2(printInit2); // 引数で関数を定義して渡す

call2(function () {
  console.log("引数に直接書いたコールバック");
}); //////////////////////////////////////////

var call3 = function call3(callback) {
  callback("にんじゃわんこ", 14);
}; // 関数callの引数の中で2つの引数を取る関数を追加してください


call3(function (name, age) {
  console.log("".concat(name, "\u306F").concat(age, "\u6B73\u3067\u3059\u3002"));
});