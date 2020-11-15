"use strict";

/* -------------------------------------*/
// push() で配列の項目を追加

/* -------------------------------------*/
var charactersPush = ["aaa", "bbb", "ccc"]; // Push : 配列に追加

charactersPush.push('ddd');
console.log(charactersPush);
console.log('--------------------');
/* -------------------------------------*/
// forEachとコールバック関数

/* -------------------------------------*/

var charactersForEach = ["aaa", "bbb", "ccc"];
charactersForEach.forEach(function (character) {
  console.log(character);
});
/* -------------------------------------*/
// findメソッド（一つだけとりだす）

/* -------------------------------------*/

console.log('- find -------------------');
var numbersFind = [1, 3, 5, 7, 9]; // 配列の中から条件にあったら要素を返す

var foundNumber = numbersFind.find(function (number) {
  // 余りが 0 の場合に返す
  return number % 3 === 0;
}); // この場合9でも余りは0だが、順番に探して3の時点で条件に合うので処理が終了する

console.log('find : ' + foundNumber); // 配列の要素がオブジェクトでも使える

var charactersFind = [{
  id: 1,
  name: "にんじゃわんこ",
  age: 6
}, {
  id: 2,
  name: "ベイビーわんこ",
  age: 2
}, {
  id: 3,
  name: "ひつじ仙人",
  age: 100
}, {
  id: 4,
  name: "とりずきん",
  age: 21
}]; // 定数charactersからidが3のオブジェクトを定数foundCharacterに代入

var foundCharacter = charactersFind.find(function (character) {
  // characterにはオブジェクトが投げられる
  // id の値が 3 のオブジェクトを返す
  return character.id === 3;
});
console.log(foundCharacter);
/* -------------------------------------*/
// filterメソッド (全て取り出す)

/* -------------------------------------*/

console.log('- filter -------------------');
var numbersFilter = [1, 2, 3, 4]; // filterメソッドは条件に合う要素をすべて取り出してくれる

var evenNumbers = numbersFilter.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
var charactersFilter = [{
  id: 1,
  name: "たろう",
  age: 14
}, // {id: 2, name:"はなこ", age: 5},
{
  id: 3,
  name: "じろう",
  age: 100
}]; // charactersFilterから20歳未満のキャラクターを取り出し、定数underTwentyに代入

var underTwenty = charactersFilter.filter(function (character) {
  return character.age < 20;
});
console.log(underTwenty);
/* -------------------------------------*/
// mapメソッド

/* -------------------------------------*/

var numbersMap = [1, 2, 3, 4]; // 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入

var doubledNumbers = numbersMap.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);
var names = [{
  firstName: "Kate",
  lastName: "Jones"
}, {
  firstName: "John",
  lastName: "Smith"
}, {
  firstName: "Denis",
  lastName: "Williams"
}, {
  firstName: "David",
  lastName: "Black"
}]; // 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入

var fullNames = names.map(function (name) {
  return name.firstName + name.lastName;
});
console.log(fullNames);