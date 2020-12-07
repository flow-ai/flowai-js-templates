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
 * @property {string} formattedName - Required, valid full name of a contact
 * @property {string} firstName - Optional, first name of a contact
 * @property {string} lastName - Optional, last name of a contact
 * @property {string} middleName - Optional, middle name of a contact
 * @property {string} suffix - Optional, name suffix of a contact
 * @property {string} prefix - Optional, name prefix of a contact
 * 
 * @example
 * const name = new WhatsApp.Name({
 *   formattedName: "Jane Doo",
 *   firstName: "Jane",
 *   lastName: "Doo",
 *   middleName: "Van"
 * })
 * 
 * @example
 * // Shorthand
 * const name = new WhatsApp.Name("Jane Doo")
 **/
var Name = /*#__PURE__*/function () {
  /**
   * The full name of a contact
   *
   * @param {object|string} opts - Optional properties, or name for shorthand
   * @param {string} opts.formattedName - Required, valid name contact
   * @param {string} opts.firstName - Optional, first name of a contact
   * @param {string} opts.lastName - Optional, last name of a contact
   * @param {string} opts.middleName - Optional, middle name of a contact
   * @param {string} opts.suffix - Optional, name suffix of a contact
   * @param {string} opts.prefix - Optional, name prefix of a contact
   **/
  function Name(opts) {
    _classCallCheck(this, Name);

    var formattedName;

    if (typeof opts === 'string') {
      formattedName = opts;
    } else {
      formattedName = opts.formattedName;
      var firstName = opts.firstName,
          lastName = opts.lastName,
          middleName = opts.middleName,
          suffix = opts.suffix,
          prefix = opts.prefix;

      if (typeof firstName === 'string' && firstName.length === 0) {
        throw new Error('Name first name must be a valid string');
      }

      this.firstName = firstName;

      if (typeof lastName === 'string' && lastName.length === 0) {
        throw new Error('Name last name must be a valid string');
      }

      this.lastName = lastName;

      if (typeof middleName === 'string' && middleName.length === 0) {
        throw new Error('Name middle name must be a valid string');
      }

      this.middleName = middleName;

      if (typeof suffix === 'string' && suffix.length === 0) {
        throw new Error('Name suffix must be a valid string');
      }

      this.suffix = suffix;

      if (typeof prefix === 'string' && prefix.length === 0) {
        throw new Error('Name prefix must be a valid string');
      }

      this.prefix = prefix;
    }

    if (typeof formattedName !== 'string' || formattedName.length === 0) {
      throw new Error("Name formatted name ".concat(formattedName, " must be a valid name"));
    }

    this.formattedName = formattedName;
  }

  _createClass(Name, [{
    key: "toJSON",
    value: function toJSON() {
      var formattedName = this.formattedName,
          firstName = this.firstName,
          lastName = this.lastName,
          middleName = this.middleName,
          suffix = this.suffix,
          prefix = this.prefix;
      return {
        formattedName: formattedName,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        suffix: suffix,
        prefix: prefix
      };
    }
  }]);

  return Name;
}();

var _default = Name;
exports.default = _default;