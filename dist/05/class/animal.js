"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal = /*#__PURE__*/function () {
  function Animal(name, age) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.age = age;
  }

  _createClass(Animal, [{
    key: "greet",
    value: function greet() {
      console.log("こんにちは");
    }
  }, {
    key: "info",
    value: function info() {
      this.greet();
      console.log("\u540D\u524D\u306F".concat(this.name, "\u3067\u3059"));
      console.log("".concat(this.age, "\u6B73\u3067\u3059"));
    }
  }]);

  return Animal;
}();

var _default = Animal;
exports["default"] = _default;