"use strict";

var name = 'たろう';
console.log("\u304A\u3044\u3089\u306F".concat(name));
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
} /// npm run buildwhile


var number = 1;

while (number <= 10) {
  console.log(number);
  number += 1;
} // for文


for (var _number = 1; _number <= 10; _number++) {
  console.log(_number);
} // 配列ループ


var animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"]; // lengthを用いて配列の要素の数を出力

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
} // アロー関数


var greet = function greet(name) {
  console.log("\u3053\u3093\u306B\u3061\u306F\uFF01".concat(name, "\u3055\u3093"));
};

greet('じょにー');