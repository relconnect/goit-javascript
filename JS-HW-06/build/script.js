"use strict";

var _Hamburger$SIZES, _Hamburger$STUFFINGS, _Hamburger$TOPPINGS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hamburger =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  function Hamburger(size, stuffing) {
    _classCallCheck(this, Hamburger);

    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }
  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */


  _createClass(Hamburger, [{
    key: "addTopping",
    value: function addTopping(topping) {}
    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */

  }, {
    key: "removeTopping",
    value: function removeTopping(topping) {}
    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */

  }, {
    key: "getToppings",
    value: function getToppings() {}
    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */

  }, {
    key: "getSize",
    value: function getSize() {}
    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */

  }, {
    key: "getStuffing",
    value: function getStuffing() {}
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */

  }, {
    key: "calculatePrice",
    value: function calculatePrice() {}
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */

  }, {
    key: "calculateCalories",
    value: function calculateCalories() {}
  }]);

  return Hamburger;
}();

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";
Hamburger.SIZES = (_Hamburger$SIZES = {}, _defineProperty(_Hamburger$SIZES, Hamburger.SIZE_SMALL, {
  price: 30,
  calories: 50
}), _defineProperty(_Hamburger$SIZES, Hamburger.SIZE_LARGE, {
  price: 50,
  calories: 100
}), _Hamburger$SIZES);
Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";
Hamburger.STUFFINGS = (_Hamburger$STUFFINGS = {}, _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_CHEESE, {
  price: 15,
  calories: 20
}), _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_SALAD, {
  price: 20,
  calories: 5
}), _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_MEAT, {
  price: 35,
  calories: 15
}), _Hamburger$STUFFINGS);
Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";
Hamburger.TOPPINGS = (_Hamburger$TOPPINGS = {}, _defineProperty(_Hamburger$TOPPINGS, Hamburger.TOPPING_SPICE, {
  price: 10,
  calories: 0
}), _defineProperty(_Hamburger$TOPPINGS, Hamburger.TOPPING_SAUCE, {
  price: 15,
  calories: 5
}), _Hamburger$TOPPINGS);
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(Hamburger.TOPPINGS.TOPPING_SPICE);