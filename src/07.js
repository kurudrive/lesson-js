/* -------------------------------------*/
// コールバック関数
/* -------------------------------------*/

console.log('- callback -------------------');

const printInit = () => {
	console.log("コールバック関数が呼ばれました。");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback(); // 引数() みたいに書く
};

// 関数printInitを引数に渡して関数callを実行
call(printInit);

//////////////////////////////////////////

const printInit2 = () => {
  console.log("コールバック関数２");
};

const call2 = (callback) => {
  console.log("コールバック関数２を呼び出します。");
  callback();
};

call2(printInit2);

// 引数で関数を定義して渡す
call2(() => {
  console.log("引数に直接書いたコールバック");
});

//////////////////////////////////////////

const call3 = (callback) => {
  callback("にんじゃわんこ", 14);
};

// 関数callの引数の中で2つの引数を取る関数を追加してください
call3((name,age) => {
  console.log(`${name}は${age}歳です。`);
});

console.log('- callback 使わずにす直接 -------------------');

const normal = ( name,age ) => {
  console.log(`${name}は${age}歳です。`);
}
normal( "にんじゃわんこ", 14 );