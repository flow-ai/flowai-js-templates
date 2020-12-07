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
 * @property {string} type - Optional, type of phone number, must be HOME or WORK
 * @property {string} phone - Required, valid phone number
 * 
 * @example
 * const phone = new WhatsApp.PhoneNumber({
 *   phone: "+1 (940) 555-1234"
 * })
 * 
 * @example
 * // Shorthand
 * const phone = new WhatsApp.PhoneNumber("+1 (940) 555-1234")
 **/
var PhoneNumber = /*#__PURE__*/function () {
  /**
   * The phone number of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of phone number, must be HOME or WORK
   * @param {string} opts.phone - Required, valid phone number
   **/
  function PhoneNumber(opts) {
    _classCallCheck(this, PhoneNumber);

    var phone;

    if (typeof opts === 'string') {
      phone = opts;
    } else {
      var type = opts.type;
      phone = opts.phone;

      if (typeof type === 'string' && PhoneNumber.Types.indexOf(type) === -1) {
        throw new Error('PhoneNumber type must be either HOME or WORK');
      }

      this.type = type;
    }

    if (typeof phone !== 'string' || phone.length === 0) {
      throw new Error("PhoneNumber ".concat(phone, " must be a valid phone number"));
    }

    this.phone = phone;
  }

  _createClass(PhoneNumber, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          phone = this.phone;
      return {
        type: type,
        phone: phone
      };
    }
  }]);

  return PhoneNumber;
}();

PhoneNumber.Types = ['HOME', 'WORK'];
var _default = PhoneNumber;
exports.default = _default;