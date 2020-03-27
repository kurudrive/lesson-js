// コンソールで入力させるパッケージ
import readlineSync from "readline-sync";

import Dog from "../class/dog";

/* -------------------------------------*/
// 一つだけエクスポートすれば良い場合
/* -------------------------------------*/

// const dog = new Dog("レオ", 4, "チワワ");

// 一つだけ返す場合は default
// export default dog;

/* -------------------------------------*/
// 複数の定数を名前付きエクスポートする
/* -------------------------------------*/

const dog1 = new Dog("レオ", 4, "チワワ");

// dog2 は入力された内容を当てはめてみる
const name = readlineSync.question("名前を入力してください: ");
const age = readlineSync.questionInt("年齢を入力してください: "); // questionInt は整数のみ
const breed = readlineSync.question("犬種を入力してください: ");

const dog2 = new Dog(name, age, breed);

export {dog1,dog2};