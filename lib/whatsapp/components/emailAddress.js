"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} type - Optional, type of email address, must be HOME or WORK
 * @property {string} email - Required, valid email address
 * 
 * @example
 * const email = new WhatsApp.EmailAddress({
 *   email: "email@some.fake.org"
 * })
 * 
 * @example
 * // Shorthand
 * const email = new WhatsApp.EmailAddress("email@some.fake.org")
 **/
var EmailAddress = /*#__PURE__*/function () {
  /**
   * The email address of as contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of email address, must be HOME or WORK
   * @param {string} opts.email - Required, valid email address
   **/
  function EmailAddress(opts) {
    _classCallCheck(this, EmailAddress);

    var email;

    if (typeof opts === 'string') {
      email = opts;
    } else {
      var type = opts.type;
      email = opts.email;

      if (typeof type === 'string' && EmailAddress.Types.indexOf(type) === -1) {
        throw new Error('EmailAddress type must be either HOME or WORK');
      }

      this.type = type;
    }

    if (typeof email !== 'string' || email.length === 0) {
      throw new Error("EmailAddress email ".concat(email, " must be a valid email address"));
    }

    this.email = email;
  }

  _createClass(EmailAddress, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          email = this.email;
      return {
        type: type,
        email: email
      };
    }
  }]);

  return EmailAddress;
}();

EmailAddress.Types = ['HOME', 'WORK'];
var _default = EmailAddress;
exports.default = _default;