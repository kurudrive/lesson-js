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
  console.log("コールバック関数１");
};

var call2 = function call2(callback) {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call2(printInit2); // 引数で関数を定義して渡す

call2(function () {
  console.log("引数に直接書いたコールバック");
});