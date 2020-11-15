"use strict";

var name = 'たろう';
console.log("\u304A\u3044\u3089\u306F".concat(name)); //////////////////////////////////////////
// switch
//////////////////////////////////////////

var rank = 2;

switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  case 2:
    console.log("銀メダルです！");
    break;

  case 3:
    console.log("銅メダルです！");
    break;

  default:
    console.log("デフォルト");
    break;
} //////////////////////////////////////////
// while
//////////////////////////////////////////


var number = 1;

while (number <= 10) {
  console.log(number);
  number += 1;
} //////////////////////////////////////////
// for文
//////////////////////////////////////////


for (var _number = 1; _number <= 10; _number++) {
  console.log(_number);
} //////////////////////////////////////////
// 配列ループ
//////////////////////////////////////////


var animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"]; // lengthを用いて配列の要素の数を出力

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
} //////////////////////////////////////////
// アロー関数
//////////////////////////////////////////


var greet = function greet(name) {
  console.log("\u3053\u3093\u306B\u3061\u306F\uFF01".concat(name, "\u3055\u3093"));
};

greet('じょにー'); ////////////////////////////////////////////////////////////////////////////////////
// 練習
// getMax関数を定義してください

var number1 = 103;
var number2 = 72;
var number3 = 189; // 最大値用の変数を定義

var max = 0; // 3つの引数を受け取る関数を定義

var getMax = function getMax(a, b, c) {
  // 受け取った引数を変数に配列で格納
  var array = [a, b, c]; // ローカル変数 array の要素の数を length で取得して、その数分 for でループする

  for (var _i = 0; _i < array.length; _i++) {
    // ループ中の数字が max より大きかったら maz を書き換え
    if (max < array[_i]) {
      max = array[_i];
    }
  }

  return max;
};

max = getMax(number1, number2, number3);
console.log("\u6700\u5927\u5024\u306F".concat(max, "\u3067\u3059"));