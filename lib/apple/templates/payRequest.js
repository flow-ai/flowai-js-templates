"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _interactiveMessage = _interopRequireDefault(require("../components/interactiveMessage"));

var _payEndpoints = _interopRequireDefault(require("../components/payEndpoints"));

var _payMerchant = _interopRequireDefault(require("../components/payMerchant"));

var _payShippingMethod = _interopRequireDefault(require("../components/payShippingMethod"));

var _payLineItem = _interopRequireDefault(require("../components/payLineItem"));

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
 * Apple Pay payment request
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @example
 * const payRequest = new Apple.PayRequest({
 *   merchant: new Apple.PayMerchant({
 *     identifier: "abc",
 *     displayName: "Ny Super Store",
 *     countryCode: "us",
 *     currencyCode: "usd",
 *     capabilities: [
 *       'supports3DS',
 *       'supportsCredit',
 *       'supportsDebit'
 *     ],
 *     supportedNetworks:[
 *       "amex",
 *       "visa",
 *       "discover",
 *       "masterCard"
 *     ]
 *   }),      
 *   shippingMethods: [
 *     new Apple.PayShippingMethod({    
 *       identifier: "FreeShip",
 *       label: "Free Shipping",
 *       detail: "Arrives in 5 to 7 days",
 *       amount: "0.00"
 *     })
 *   ],
 *   requiredBillingContactFields: [
 *     "post"
 *   ],
 *   requiredShippingContactFields: [
 *     "post",
 *     "phone",
 *     "email",
 *     "name"
 *   ],
 *   lineItems: [
 *     new Apple.PayLineItem({  
 *       amount: "59.00",
 *       label: "Halibut",
 *       type: "final"
 *     }),
 *     new Apple.PayLineItem({  
 *       amount: "4.99",
 *       label: "Shipping",
 *       type: "final"
 *     })
 *   ],
 *   total: new Apple.PayLineItem({
 *     amount: "63.99",
 *     label: "Sam's Fish",
 *     type: "final"
 *   }),
 *   supportedCountries: [
 *     "US",
 *     "CA"
 *   ],
 *   endpoints: new Apple.PayEndpoints({
 *     fallbackUrl: "https://my.example/fallback/",
 *     orderTrackingUrl: "https://my.example/orderTrackingUrl/",
 *     paymentGatewayUrl: "https://my.example/paymentGateway/",
 *     paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
 *     shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
 *     shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
 *   }),
 *   receivedMessage: new Apple.InteractiveMessage({
 *     style: "large",
 *     subtitle: "$63.99 at Sam's Fish",
 *     title: "Halibut"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Thank you for your order"
 *   })
 * })
 **/
var PayRequest = /*#__PURE__*/function (_Template) {
  _inherits(PayRequest, _Template);

  var _super = _createSuper(PayRequest);

  /**
  * @param {object} opts - Collection of options
  * @param {PayMerchant} opts.merchant - Required. All required data about the Apple Pay merchant
  * @param {PayEndpoints} opts.endpoints - Optional. Contains the endpoints for payment processing, contact updates, and order tracking
  * @param {PayLineItem[]} opts.lineItems - Optional. An array of line items explaining payments and additional charges.
  * @param {PayShippingMethod[]} opts.shippingMethods - An array that lists the available shipping methods. The Apple Pay payment sheet displays the first shipping method from the array as the default shipping method
  * @param {string[]} opts.requiredBillingContactFields - Optional. The list of the customer's required billing information needed to process the transaction.Require only the contact fields needed to process the payment. Requesting unnecessary fields adds complexity to the transaction, which can increase the chances of the customer canceling the payment request. Can be "postalAddress"
  * @param {string[]} opts.requiredShippingContactFields - Optional. The list of shipping or contact information required from the customer to fulfill the order. For example, if you need the customer's email or phone number
  * @param {PayLineItem} opts.total - Required. The total amount must be greater than zero to pass validation. The label, defined in the total dictionary, appears on the payment sheet and should be the doing-business-as name of the business
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the payment request window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer completed payment
  **/
  function PayRequest(opts) {
    var _this;

    _classCallCheck(this, PayRequest);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create an PayRequest you need to provide all required options");
    }

    var merchant = opts.merchant,
        endpoints = opts.endpoints,
        lineItems = opts.lineItems,
        shippingMethods = opts.shippingMethods,
        requiredBillingContactFields = opts.requiredBillingContactFields,
        requiredShippingContactFields = opts.requiredShippingContactFields,
        total = opts.total,
        supportedCountries = opts.supportedCountries,
        receivedMessage = opts.receivedMessage,
        replyMessage = opts.replyMessage;

    if (!(merchant instanceof _payMerchant.default)) {
      throw new Error("PayRequest requires a merchant of the type PayMerchant");
    }

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("PayRequest requires a replyMessage of the type InteractiveMessage");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("PayRequest requires a receivedMessage of the type InteractiveMessage");
    }

    if (typeof endpoints !== "undefined" && !(endpoints instanceof _payEndpoints.default)) {
      throw new Error("PayRequest requires the endpoints property to be of the type PayEndpoints");
    }

    if (typeof supportedCountries !== "undefined" && !Array.isArray(supportedCountries)) {
      throw new Error("PayRequest requires the supportedCountries to be an array of two-letter country codes");
    }

    if (typeof requiredBillingContactFields !== "undefined" && !Array.isArray(requiredBillingContactFields)) {
      throw new Error("PayRequest requires the requiredBillingContactFields to be an array ");
    }

    if (typeof requiredShippingContactFields !== "undefined" && !Array.isArray(requiredShippingContactFields)) {
      throw new Error("PayRequest requires the requiredShippingContactFields to be an array ");
    }

    if (!(total instanceof _payLineItem.default)) {
      throw new Error("PayRequest requires a total of the type PayLineItem");
    }

    if (Array.isArray(lineItems)) {
      for (var i = 0; i < lineItems.length; i++) {
        _this.addLineItem(lineItems[i]);
      }
    }

    if (Array.isArray(shippingMethods)) {
      for (var _i = 0; _i < shippingMethods.length; _i++) {
        _this.addShippingMethod(shippingMethods[_i]);
      }
    }

    _this.merchant = merchant;
    _this.endpoints = endpoints || undefined;
    _this.total = total;
    _this.supportedCountries = supportedCountries || undefined;
    _this.requiredBillingContactFields = requiredBillingContactFields || undefined;
    _this.requiredShippingContactFields = requiredShippingContactFields || undefined;
    _this.receivedMessage = receivedMessage;
    _this.replyMessage = replyMessage;
    return _this;
  }
  /**
   * Add a {@link PayLineItem} to the list of lineItems
   * 
   * @param {PayLineItem} - item
   * 
   * @return {PayRequest}
   **/


  _createClass(PayRequest, [{
    key: "addLineItem",
    value: function addLineItem(item) {
      if (!(item instanceof _payLineItem.default)) {
        throw new Error('PayRequest addLineItem argument must be an instance of a Apple.PayLineItem');
      }

      if (!this.lineItems) {
        this.lineItems = [];
      }

      this.lineItems.push(item);
      return this;
    }
    /**
    * Add a {@link PayShippingMethod} to the list of shippingMethods
    * 
    * @param {PayShippingMethod} - item
    * 
    * @return {PayRequest}
    **/

  }, {
    key: "addShippingMethod",
    value: function addShippingMethod(method) {
      if (!(method instanceof _payShippingMethod.default)) {
        throw new Error('PayRequest addShippingMethod argument must be an instance of a Apple.PayShippingMethod');
      }

      if (!this.shippingMethods) {
        this.shippingMethods = [];
      }

      this.shippingMethods.push(method);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var merchant = this.merchant,
          endpoints = this.endpoints,
          lineItems = this.lineItems,
          shippingMethods = this.shippingMethods,
          requiredBillingContactFields = this.requiredBillingContactFields,
          requiredShippingContactFields = this.requiredShippingContactFields,
          total = this.total,
          supportedCountries = this.supportedCountries,
          receivedMessage = this.receivedMessage,
          replyMessage = this.replyMessage,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_pay_request',
        payload: {
          merchant: merchant,
          endpoints: endpoints,
          lineItems: lineItems,
          shippingMethods: shippingMethods,
          requiredBillingContactFields: requiredBillingContactFields,
          requiredShippingContactFields: requiredShippingContactFields,
          total: total,
          supportedCountries: supportedCountries,
          receivedMessage: receivedMessage,
          replyMessage: replyMessage
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return PayRequest;
}(_template.default);

var _default = PayRequest;
exports.default = _default;