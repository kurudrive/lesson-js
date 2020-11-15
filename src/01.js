const name = 'たろう';

console.log(`おいらは${name}`);

//////////////////////////////////////////
// switch
//////////////////////////////////////////

const rank = 2;

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

}


//////////////////////////////////////////
// while
//////////////////////////////////////////

let number = 1;

while( number <= 10 ){
  console.log(number);
  number +=1;
}


//////////////////////////////////////////
// for文
//////////////////////////////////////////

for(let number = 1;number <=10;number++ ){
	console.log(number);
}


//////////////////////////////////////////
// 配列ループ
//////////////////////////////////////////

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


//////////////////////////////////////////
// アロー関数
//////////////////////////////////////////
const greet = (name) => {
	console.log(`こんにちは！${name}さん`);
};
  
greet('じょにー');


////////////////////////////////////////////////////////////////////////////////////
// 練習
// getMax関数を定義してください

const number1 = 103;
const number2 = 72;
const number3 = 189;

// 最大値用の変数を定義
let max = 0;

// 3つの引数を受け取る関数を定義
const getMax = (a,b,c) => {
	// 受け取った引数を変数に配列で格納
	let array = [a,b,c];
  	// ローカル変数 array の要素の数を length で取得して、その数分 for でループする
    for ( let i = 0;i<array.length;i++ ){
		// ループ中の数字が max より大きかったら maz を書き換え
		if ( max < array[i] ){
			max = array[i];
		}
    }
  return max;
}

max = getMax(number1,number2,number3);

console.log(`最大値は${max}です`);