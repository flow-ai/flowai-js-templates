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
 * @property {string} policy - The language policy the message should follow. Default: deterministic
 * @property {string} code - The code of the language or locale to use. Accepts both language and language_locale formats (e.g., en and en_US).
 **/
var Language = /*#__PURE__*/function () {
  /**
   * @param {string} opts.policy - Required, policy of the language
   * @param {string} opts.code - Required, code of the language
   **/
  function Language(_ref) {
    var policy = _ref.policy,
        code = _ref.code;

    _classCallCheck(this, Language);

    var codePattern = /^[a-z]{2}_[A-Z]{2}$/;

    if (typeof policy !== 'string' || policy.length === 0) {
      throw new Error('Policy is mandatory');
    }

    if (typeof code !== 'string' || code.length === 0) {
      throw new Error('Code is mandatory');
    }

    if (!codePattern.test(code)) {
      throw new Error('Code should be in format your-language_locale-code');
    }

    this.policy = policy;
    this.code = code;
  }

  _createClass(Language, [{
    key: "toJSON",
    value: function toJSON() {
      var code = this.code,
          policy = this.policy;
      return {
        code: code,
        policy: policy
      };
    }
  }]);

  return Language;
}();

var _default = Language;
exports.default = _default;