"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Apple Pay line item part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @property {string} amount - Required. The monetary amount of the line item
 * @property {string} label -  Required. A short, localized description of the line item
 * @property {string} type - Required A value that indicates whether the line item is "final" or "pending"
 * 
 * @example
 * new Apple.PayLineItem({
 *   amount: "59.00",
 *   label: "Halibut",
 *   type: "final"
 * })
 **/
var PayLineItem = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.amount - Required. The monetary amount of the line item
   * @param {string} opts.label -  Required. A short, localized description of the line item
   * @param {string} opts.type - Required A value that indicates whether the line item is "final" or "pending"
   **/
  function PayLineItem(opts) {
    _classCallCheck(this, PayLineItem);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a PayLineItem object we need all required data");
    }

    var amount = opts.amount,
        label = opts.label,
        type = opts.type;

    if (typeof amount !== "string" || !amount.length) {
      throw new Error("PayLineItem amount is required");
    }

    if (typeof label !== "string" || !label.length) {
      throw new Error("PayLineItem label is required");
    }

    if (typeof type !== "string" || !type.length) {
      throw new Error("PayLineItem type  is required");
    }

    this.amount = amount;
    this.label = label;
    this.type = type;
  }

  _createClass(PayLineItem, [{
    key: "toJSON",
    value: function toJSON() {
      var amount = this.amount,
          label = this.label,
          type = this.type;
      return {
        amount: amount,
        label: label,
        type: type
      };
    }
  }]);

  return PayLineItem;
}();

var _default = PayLineItem;
exports.default = _default;