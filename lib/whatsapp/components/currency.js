"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * @category Whatsapp
 *
 * @property {string} fallback_value
 * @property {number} code
 * @property {number} amount_1000
 **/
var Currency = /*#__PURE__*/function () {
  /**
   * @param {string} opts.fallback_value
   * @param {number} opts.code
   * @param {number} opts.amount_1000
   **/
  function Currency(_ref) {
    var fallback_value = _ref.fallback_value,
        code = _ref.code,
        amount_1000 = _ref.amount_1000;

    _classCallCheck(this, Currency);

    if (typeof fallback_value !== 'string' || fallback_value.length === 0) {
      throw new Error('Fallback is mandatory');
    }

    if (typeof code !== 'string') {
      throw new Error('Code is mandatory');
    }

    if (typeof amount_1000 !== 'number') {
      throw new Error('Amount is mandatory');
    }

    this.fallback_value = fallback_value;
    this.code = code;
    this.amount_1000 = amount_1000;
  }

  _createClass(Currency, [{
    key: "toJSON",
    value: function toJSON() {
      var fallback_value = this.fallback_value,
          code = this.code,
          amount_1000 = this.amount_1000;
      return {
        type: 'currency',
        currency: {
          fallback_value: fallback_value,
          code: code,
          amount_1000: amount_1000
        }
      };
    }
  }]);

  return Currency;
}();

var _default = Currency;
exports.default = _default;