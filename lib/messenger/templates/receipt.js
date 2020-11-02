"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

var _element = _interopRequireDefault(require("../components/receipt/element"));

var _address = _interopRequireDefault(require("../components/receipt/address"));

var _adjustment = _interopRequireDefault(require("../components/receipt/adjustment"));

var _summary = _interopRequireDefault(require("../components/receipt/summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Receipt Template
 * 
 * @description
 * The receipt template allows you to send an order confirmation. The template may include an order summary, payment details, and shipping information.
 * 
 * @category Templates
 * 
 * @property {boolean} sharable - Optional, set to true to enable the native share button in Messenger for the template message. Defaults to false.
 * @property {string} recipientName - Required, the recipient's name.
 * @property {string} merchantName - Optional, the merchant's name. If present this is shown as logo text.
 * @property {string} orderNumber - Required, the order number. Must be unique.
 * @property {string} currency - Required,  currency of the payment.
 * @property {string} paymentMethod - Required, the payment method used. Providing enough information for the customer to decipher which payment method and account they used is recommended. This can be a custom string, such as, "Visa 1234".
 * @property {string} timestamp - Optional, timestamp of the order in seconds.
 * @property {ReceiptElement[]} elements - Optional, array of a maximum of 100 element objects that describe items in the order. Sort order of the elements is not guaranteed.
 * @property {ReceiptAddress} address - Optional, the shipping address of the order.
 * @property {ReceiptSummary} summary - Optional, the payment summary. See summary.
 * @property {ReceiptAdjustment[]} adjustments - Optional, an array of payment objects that describe payment adjustments, such as discounts.
 * 
 * @example
 * // Create a receipt
 * const receipt = new Messenger.Receipt({
 *   recipientName: "Stephane Crozatier",
 *   orderNumber: "12345678902",
 *   currency: "USD",
 *   paymentMethod: "Visa 2345",
 *   orderUrl: "http://petersapparel.parseapp.com/order?order_id=123456",
 *   timestamp: "1428444852",
 *   address: new Messenger.ReceiptAddress({
 *     street1: "1 Hacker Way",
 *     street2: "2nd floor",
 *     city: "Menlo Park",
 *     postalCode: "94025",
 *     state: "CA",
 *     country: "US"
 *   }),
 *   summary: new Messenger.ReceiptSummary({
 *     subtotal: 75.00,
 *     shippingCost: 4.95,
 *     totalTax: 6.19,
 *     totalCost: 56.14
 *   }),
 *   adjustments: [
 *     new Messenger.ReceiptAdjustment({
 *       name: "New Customer Discount",
 *       amount: 20
 *     }),
 *     new Messenger.ReceiptAdjustment({
 *       name: "$10 Off Coupon",
 *       amount: 10
 *     })
 *   ],
 *   elements: [
 *     new Messenger.ReceiptElement({
 *       title: "Classic White T-Shirt",
 *       subtitle: "100% Soft and Luxurious Cotton",
 *       quantity: 2,
 *       price: 29.95,
 *       currency: "USD",
 *       imageUrl: "http://petersapparel.parseapp.com/img/whiteshirt.png"
 *     }),
 *     new Messenger.ReceiptElement({
 *       title: "Classic Gray T-Shirt",
 *       subtitle: "100% Soft and Luxurious Cotton",
 *       quantity: 2,
 *       price: 49.95,
 *       currency: "USD",
 *       imageUrl: "http://petersapparel.parseapp.com/img/grayshirt.png"
 *     })
 *   ]
 * })
 **/
var Receipt = /*#__PURE__*/function (_Template) {
  _inherits(Receipt, _Template);

  var _super = _createSuper(Receipt);

  /**
   * Create a Receipt template
   **/
  function Receipt(opts) {
    var _this;

    _classCallCheck(this, Receipt);

    _this = _super.call(this, opts);
    var sharable = opts.sharable,
        recipientName = opts.recipientName,
        merchantName = opts.merchantName,
        orderNumber = opts.orderNumber,
        orderUrl = opts.orderUrl,
        currency = opts.currency,
        paymentMethod = opts.paymentMethod,
        timestamp = opts.timestamp,
        elements = opts.elements,
        address = opts.address,
        summary = opts.summary,
        adjustments = opts.adjustments;

    if (sharable !== undefined && typeof sharable !== 'boolean') {
      throw new Error("sharable needs to be a boolean value");
    }

    if (recipientName === undefined || typeof recipientName !== 'string') {
      throw new Error("recipientName needs to be a valid string");
    }

    if (merchantName !== undefined && typeof merchantName !== 'string') {
      throw new Error("merchantName needs to be a valid string");
    }

    if (orderNumber === undefined || typeof orderNumber !== 'string') {
      throw new Error("orderNumber needs to be a valid string");
    }

    if (orderUrl === undefined || typeof orderUrl !== 'string') {
      throw new Error("orderUrl needs to be a valid string");
    }

    if (currency === undefined || typeof currency !== 'string') {
      throw new Error("currency needs to be a valid string");
    }

    if (currency.length > 3 || currency.length < 2) {
      throw new Error("currency must be provided as for example USD or EUR");
    }

    if (paymentMethod === undefined || typeof paymentMethod !== 'string') {
      throw new Error("paymentMethod needs to be a valid string");
    }

    if (timestamp !== undefined && typeof timestamp !== 'string') {
      throw new Error("timestamp needs to be a valid string");
    }

    if (elements !== undefined && !Array.isArray(elements)) {
      throw new Error("elements needs to be an array");
    }

    if (address !== undefined && _typeof(address) !== 'object') {
      throw new Error("address needs to be a valid object");
    }

    if (summary === undefined || _typeof(summary) !== 'object') {
      throw new Error("summary needs to be provided");
    }

    if (adjustments !== undefined && !Array.isArray(adjustments)) {
      throw new Error("adjustments needs to be an array");
    }

    _this.sharable = sharable || false;
    _this.recipientName = recipientName;
    _this.merchantName = merchantName || undefined;
    _this.orderNumber = orderNumber;
    _this.orderUrl = orderUrl;
    _this.currency = currency;
    _this.paymentMethod = paymentMethod;
    _this.timestamp = timestamp || undefined;
    _this.elements = elements;
    _this.address = address || undefined;
    _this.summary = summary;
    _this.adjustments = adjustments || undefined;
    return _this;
  }

  _createClass(Receipt, [{
    key: "toJSON",
    value: function toJSON() {
      var delay = this.delay,
          fallback = this.fallback,
          sharable = this.sharable,
          recipientName = this.recipientName,
          merchantName = this.merchantName,
          orderNumber = this.orderNumber,
          orderUrl = this.orderUrl,
          currency = this.currency,
          paymentMethod = this.paymentMethod,
          timestamp = this.timestamp,
          elements = this.elements,
          address = this.address,
          summary = this.summary,
          adjustments = this.adjustments;
      return {
        type: 'messenger_receipt',
        payload: {
          sharable: sharable,
          recipientName: recipientName,
          merchantName: merchantName,
          orderNumber: orderNumber,
          orderUrl: orderUrl,
          currency: currency,
          paymentMethod: paymentMethod,
          timestamp: timestamp,
          elements: elements,
          address: address,
          summary: summary,
          adjustments: adjustments
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Receipt;
}(_template.default);

var _default = Receipt;
exports.default = _default;