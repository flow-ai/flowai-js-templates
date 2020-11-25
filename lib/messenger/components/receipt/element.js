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
 * @property {string} title - Required, the name to display for the item.
 * @property {string} subtitle - Optional, a brief item description
 * @property {number} quantity - Optional, the quantity of the item purchased.
 * @property {number} price - Required, the price of the item. For free items, '0' is allowed.
 * @property {string} currency - Optional, the currency of the item price.
 * @property {string} imageUrl - Optional, the URL of an image to be displayed with the item.
 * 
 * @example
 * const element = new Messenger.ReceiptElement({
 * })
 **/
var ReceiptElement = /*#__PURE__*/function () {
  /**
   * The shipping element of an order
   *
   * @param {object} opts - Required properties
   * @param {string} opts.title - Required, the name to display for the item.
   * @param {string} opts.subtitle - Optional, a brief item description
   * @param {number} opts.quantity - Optional, the quantity of the item purchased.
   * @param {number} opts.price - Required, the price of the item. For free items, '0' is allowed.
   * @param {string} opts.currency - Optional, the currency of the item price.
   * @param {string} opts.imageUrl - Optional, the URL of an image to be displayed with the item.
   **/
  function ReceiptElement() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReceiptElement);

    var title = opts.title,
        subtitle = opts.subtitle,
        quantity = opts.quantity,
        price = opts.price,
        currency = opts.currency,
        imageUrl = opts.imageUrl;

    if (typeof title !== 'string' || !title.length) {
      throw new Error('ReceiptElement title is mandatory');
    }

    if (subtitle !== undefined && typeof subtitle !== 'string') {
      throw new Error("ReceiptElement subtitle needs to be a valid string");
    }

    if (quantity !== undefined && typeof quantity !== 'number') {
      throw new Error("ReceiptElement quantity needs to be a valid number");
    }

    if (typeof price !== 'number') {
      throw new Error('ReceiptElement price is mandatory');
    }

    if (currency !== undefined && typeof currency !== 'string') {
      throw new Error("ReceiptElement currency needs to be a valid string");
    }

    if (imageUrl !== undefined && typeof imageUrl !== 'string') {
      throw new Error("ReceiptElement imageUrl needs to be a valid string");
    }

    this.title = title;
    this.subtitle = subtitle;
    this.quantity = quantity;
    this.price = price;
    this.currency = currency;
    this.imageUrl = imageUrl;
  }

  _createClass(ReceiptElement, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          subtitle = this.subtitle,
          quantity = this.quantity,
          price = this.price,
          currency = this.currency,
          imageUrl = this.imageUrl;
      return {
        title: title,
        subtitle: subtitle,
        quantity: quantity,
        price: price,
        currency: currency,
        imageUrl: imageUrl
      };
    }
  }]);

  return ReceiptElement;
}();

var _default = ReceiptElement;
exports.default = _default;