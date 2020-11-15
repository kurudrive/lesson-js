"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//////////////////////////////////////////
// オブジェクトに関数を持たせる
//////////////////////////////////////////
var user = {
  name: '山田太郎',
  age: 2,
  greet: function greet() {
    console.log('_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!');
  }
};
user.greet(); //////////////////////////////////////////
// クラス
//////////////////////////////////////////

var Animal = /*#__PURE__*/function () {
  // classが呼び出された時に実行される
  function Animal(name, age) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.age = age;
  } // メソッド


  _createClass(Animal, [{
    key: "greet",
    value: function greet() {
      console.log('こんにちは');
    }
  }, {
    key: "info",
    value: function info() {
      // メソッド内でメソッドを呼び出せる
      this.greet();
      console.log("\u540D\u524D\u306F".concat(this.name, "\u3067\u3059"));
      console.log("".concat(this.age, "\u6B73\u3067\u3059"));
    }
  }]);

  return Animal;
}(); // Animalクラスのインスタンスを定数animalに代入


var animal = new Animal("たろう", 10); // 定数animalの値を出力

console.log("\u540D\u524D:".concat(animal.name));
console.log("\u5E74\u9F62:".concat(animal.age));
animal.info(); //////////////////////////////////////////
// クラスの継承
//////////////////////////////////////////

var Dog = /*#__PURE__*/function (_Animal) {
  _inherits(Dog, _Animal);

  var _super = _createSuper(Dog);

  // コンストラクタもオーバーライドして引数を追加
  function Dog(name, age, breed) {
    var _this;

    _classCallCheck(this, Dog);

    // super() はコンストラクタをオーバーライドする時は必ず必要
    _this = _super.call(this, name, age); // 子クラスで追加した引数を代入

    _this.breed = breed;
    return _this;
  } // 親クラスのメソッドをオーバーライド


  _createClass(Dog, [{
    key: "info",
    value: function info() {
      this.greet();
      console.log("\u540D\u524D\u306F".concat(this.name, "\u3067\u3059"));
      console.log("\u72AC\u7A2E\u306F".concat(this.breed, "\u3067\u3059"));
      console.log("".concat(this.age, "\u6B73\u3067\u3059"));
      var humanAge = this.getHumanAge();
      console.log("\u4EBA\u9593\u5E74\u9F62\u3067".concat(humanAge, "\u6B73\u3067\u3059"));
    }
  }, {
    key: "getHumanAge",
    value: function getHumanAge() {
      return this.age * 7;
    }
  }]);

  return Dog;
}(Animal);

var dog = new Dog("レオ", 4, 'チワワ');
dog.info();