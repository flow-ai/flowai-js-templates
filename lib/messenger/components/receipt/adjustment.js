"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component used in {@link Receipt} templates
 * 
 * @memberof Messenger
 * @category Components
 * 
 * @property {string} name - Required, name of the adjustment.
 * @property {number} amount - Required, the amount of the adjustment.
 * 
 * @example
 * const adjustment = new Messenger.ReceiptAdjustment({
 *   name: "10% discount",
 *   amount: 4.95
 * })
 **/
var ReceiptAdjustment = /*#__PURE__*/function () {
  /**
   * Describes a payment adjustments, such as discounts
   *
   * @param {object} opts - Required properties
   * @param {string} opts.name - Required, name of the adjustment.
   * @param {number} opts.amount - Required, the amount of the adjustment.
   **/
  function ReceiptAdjustment() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReceiptAdjustment);

    var name = opts.name,
        amount = opts.amount;

    if (typeof name !== 'string' || !name.length) {
      throw new Error('ReceiptAdjustment name is mandatory');
    }

    if (typeof amount !== 'number') {
      throw new Error('ReceiptAdjustment amount is mandatory');
    }

    this.name = name;
    this.amount = amount;
  }

  _createClass(ReceiptAdjustment, [{
    key: "toJSON",
    value: function toJSON() {
      var name = this.name,
          amount = this.amount;
      return {
        name: name,
        amount: amount
      };
    }
  }]);

  return ReceiptAdjustment;
}();

var _default = ReceiptAdjustment;
exports.default = _default;