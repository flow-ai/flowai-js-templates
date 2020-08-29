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
 * Apple Pay shipping method part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 *
 * @property {string} identifier - Required. A client-defined value used to identify this shipping method
 * @property {string} amount - Required. The nonnegative cost associated with this shipping method
 * @property {string} label -  Required. A short description of the shipping method
 * @property {string} type - Required A value that indicates whether the line item is "final" or "pending"
 * 
 * @example
 * new Apple.PayShippingMethod({
 *   identifier: "in_store_pickup",
 *   amount: "59.00",
 *   label: "Halibut",
 *   detail: "final"
 * })
 **/
var PayShippingMethod = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Required. A client-defined value used to identify this shipping method
   * @param {string} opts.amount - Required. The nonnegative cost associated with this shipping method
   * @param {string} opts.label -  Required. A short description of the shipping method
   * @param {string} opts.detail - Additional description of the shipping method
   **/
  function PayShippingMethod(opts) {
    _classCallCheck(this, PayShippingMethod);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a PayShippingMethod object we need all required data");
    }

    var identifier = opts.identifier,
        amount = opts.amount,
        label = opts.label,
        detail = opts.detail;

    if (typeof identifier !== "string" || !identifier.length) {
      throw new Error("PayShippingMethod identifier is required");
    }

    if (typeof amount !== "string" || !amount.length) {
      throw new Error("PayShippingMethod amount is required");
    }

    if (typeof label !== "string" || !label.length) {
      throw new Error("PayShippingMethod label is required");
    }

    if (typeof detail !== "string" || !detail.length) {
      throw new Error("PayShippingMethod detail is required");
    }

    this.identifier = identifier;
    this.amount = amount;
    this.label = label;
    this.detail = detail;
  }

  _createClass(PayShippingMethod, [{
    key: "toJSON",
    value: function toJSON() {
      var identifier = this.identifier,
          amount = this.amount,
          label = this.label,
          detail = this.detail;
      return {
        identifier: identifier,
        amount: amount,
        label: label,
        detail: detail
      };
    }
  }]);

  return PayShippingMethod;
}();

var _default = PayShippingMethod;
exports.default = _default;