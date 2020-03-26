const name = 'たろう';

console.log(`おいらは${name}`);

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

/// npm run buildwhile

let number = 1;

while( number <= 10 ){
  console.log(number);
  number +=1;
}

// for文
for(let number = 1;number <=10;number++ ){
	console.log(number);
}


// 配列ループ
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// アロー関数
const greet = (name) => {
	console.log(`こんにちは！${name}さん`);
};
  
greet('じょにー');

// III 総合

const number1 = 103;
const number2 = 72;
const number3 = 189;
let max = 0;

// getMax関数を定義してください
const getMax = (a,b,c) => {
  let array = [a,b,c];
    for ( let i = 0;i<array.length;i++ ){
      if ( max < array[i] ){
        max = array[i];
      }
    }
  return max;
}

max = getMax(number1,number2,number3);

console.log(`最大値は${max}です`);