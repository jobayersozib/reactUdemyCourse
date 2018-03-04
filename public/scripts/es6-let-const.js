"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        console.log("Constructing.........");
        this.name = name;
    }

    _createClass(Animal, [{
        key: "specis",
        value: function specis() {
            console.log(this.name);
        }
    }]);

    return Animal;
}();

var func = function func() {};

console.log(func());
var multiplication = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multiplication.multiply());
