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
 * @category Components
 * 
 * @property {number} subtotal - Optional, the sub-total of the order.
 * @property {number} shippingCost - Optional, the shipping cost of the order.
 * @property {number} totalTax - Optional, the tax of the order.
 * @property {number} totalCost - Required, the total cost of the order, including sub-total, shipping, and tax.
 * 
 * @example
 * const summary = new Messenger.ReceiptSummary({
 *   subtotal: 75.00,
 *   shippingCost: 4.95,
 *   totalTax: 6.19,
 *   totalCost: 56.14
 * })
 **/
var ReceiptSummary = /*#__PURE__*/function () {
  /**
   * The shipping summary of an order
   *
   * @param {object} opts - Required properties
   * @param {number} opts.subtotal - Optional, the sub-total of the order.
   * @param {number} opts.shippingCost - Optional, the shipping cost of the order.
   * @param {number} opts.totalTax - Optional, the tax of the order.
   * @param {number} opts.totalCost - Required, the total cost of the order, including sub-total, shipping, and tax.
   **/
  function ReceiptSummary() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReceiptSummary);

    var subtotal = opts.subtotal,
        shippingCost = opts.shippingCost,
        totalTax = opts.totalTax,
        totalCost = opts.totalCost;

    if (subtotal !== undefined && typeof subtotal !== 'number') {
      throw new Error("subtotal needs to be a valid number");
    }

    if (shippingCost !== undefined && typeof shippingCost !== 'number') {
      throw new Error("shippingCost needs to be a valid number");
    }

    if (totalTax !== undefined && typeof totalTax !== 'number') {
      throw new Error("totalTax needs to be a valid number");
    }

    if (typeof totalCost !== 'number') {
      throw new Error('ReceiptSummary totalCost is mandatory');
    }

    this.subtotal = subtotal;
    this.shippingCost = shippingCost;
    this.totalTax = totalTax;
    this.totalCost = totalCost;
  }

  _createClass(ReceiptSummary, [{
    key: "toJSON",
    value: function toJSON() {
      var subtotal = this.subtotal,
          shippingCost = this.shippingCost,
          totalTax = this.totalTax,
          totalCost = this.totalCost;
      return {
        subtotal: subtotal,
        shippingCost: shippingCost,
        totalTax: totalTax,
        totalCost: totalCost
      };
    }
  }]);

  return ReceiptSummary;
}();

var _default = ReceiptSummary;
exports.default = _default;