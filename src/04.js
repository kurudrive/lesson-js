const user = {
	name : '山田太郎',
	age : 2,
	greet : () => {
		console.log('_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!');
	}
}
user.greet();

////////////////////////////

class Animal {

	// classが呼び出された時に実行される
	constructor( name, age ){
    	this.name = name;
		this.age = age;
	}

	// メソッド
	greet(){
		console.log('こんにちは');
	}
	info(){
		// メソッド内でメソッドを呼び出せる
		this.greet();
		console.log(`名前は${this.name}です`);
		console.log(`${this.age}歳です`);
	}
}

// Animalクラスのインスタンスを定数animalに代入
const animal = new Animal("たろう",10);

// 定数animalの値を出力
console.log(`名前:${animal.name}`);
console.log(`年齢:${animal.age}`);

animal.info();


////////////////////////////
// クラスの継承
////////////////////////////

class Dog extends Animal{

	// コンストラクタもオーバーライドして引数を追加
	constructor(name, age, breed) {
		// super() はコンストラクタをオーバーライドする時は必ず必要
		super(name, age);
		// 子クラスで追加した引数を代入
		this.breed = breed;
	}

	// 親クラスのメソッドをオーバーライド
	info(){
		this.greet();
		console.log(`名前は${this.name}です`);
		console.log(`犬種は${this.breed}です`);
		console.log(`${this.age}歳です`);

		const humanAge = this.getHumanAge();
		console.log(`人間年齢で${humanAge}歳です`);
	}

	getHumanAge(){
		return this.age * 7;
	}
}
const dog = new Dog("レオ", 4,'チワワ');
dog.info();
