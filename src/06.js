const charactersPush = ["aaa", "bbb", "ccc"];
// Push : 配列に追加
charactersPush.push('ddd');


/* -------------------------------------*/
// forEachとコールバック関数
/* -------------------------------------*/

const charactersForEach = ["aaa", "bbb", "ccc"];

charactersForEach.forEach((character)=>{
  console.log(character);
});

/* -------------------------------------*/
// findメソッド
/* -------------------------------------*/

const numbersFind = [1, 3, 5, 7, 9];
// 配列の中から条件にあったら要素を返す
const foundNumber = numbersFind.find((number) => {
  return number % 3 === 0;
});
console.log(foundNumber);


// 配列の要素がオブジェクトでも使える

const charactersFind = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを定数foundCharacterに代入
const foundCharacter = charactersFind.find((character)=>{
  return character.id === 3;
});
console.log(foundCharacter);

/* -------------------------------------*/
// filterメソッド
/* -------------------------------------*/

const numbersFilter = [1, 2, 3, 4];
// filterメソッドは条件に合う要素をすべて取り出してくれる
const evenNumbers = numbersFilter.filter((number)=>{
  return number % 2 === 0;
});
console.log(evenNumbers);


const charactersFilter = [
  {id: 1, name:"たろう", age: 14},
  {id: 2, name:"はなこ", age: 5},
  {id: 3, name:"じろう", age: 100}
];

// charactersFilterから20歳未満のキャラクターを取り出し、定数underTwentyに代入
const underTwenty = charactersFilter.filter((character)=>{
  return character.age < 20;
});
console.log(underTwenty);

/* -------------------------------------*/
// mapメソッド
/* -------------------------------------*/

const numbersMap = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入
const doubledNumbers = numbersMap.map((number)=>{
  return number * 2;
});
console.log(doubledNumbers);


const names = [
	{firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];
// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入
const fullNames = names.map((name)=>{
  return name.firstName + name.lastName;
});
console.log(fullNames);