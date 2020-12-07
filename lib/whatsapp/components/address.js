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
 * @property {string} type - Optional, type of address, must be HOME or WORK
 * @property {string} street - Optional, the street address
 * @property {string} city - Optional, the city name of the address.
 * @property {string} zip - Optional, the ZIP code of the address.
 * @property {string} state - Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
 * @property {string} country - Optional, full country name
 * @property {string} countryCode - Optional, the two-letter country abbreviation of the address.
 * 
 * @example
 * const address = new WhatsApp.Address({
 *   street: "1 Hacker Way",
 *   city: "Menlo Park",
 *   zip: "94025",
 *   state: "CA",
 *   country: "United States",
 *   countryCode: "US"
 * })
 **/
var Address = /*#__PURE__*/function () {
  /**
   * The address of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of address, must be HOME or WORK
   * @param {string} opts.street - Optional, the street address
   * @param {string} opts.city - Optional, the city name of the address
   * @param {string} opts.zip - Optional, the ZIP code of the address
   * @param {string} opts.state - Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses
   * @param {string} opts.country - Optional, full name of the country
   * @param {string} opts.countryCode - Optional, the two-letter country abbreviation of the address
   **/
  function Address() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Address);

    var type = opts.type,
        street = opts.street,
        city = opts.city,
        zip = opts.zip,
        state = opts.state,
        country = opts.country,
        countryCode = opts.countryCode;

    if (Object.keys(opts).length === 0) {
      throw new Error('Address requires at least one valid property like street, city, etc');
    }

    if (typeof type === 'string' && Address.Types.indexOf(type) === -1) {
      throw new Error('Address type must be either HOME or WORK');
    }

    if (typeof street === 'string' && street.length === 0) {
      throw new Error('Address street must be a valid string');
    }

    if (typeof city === 'string' && city.length === 0) {
      throw new Error('Address city must be a valid string');
    }

    if (typeof zip === 'string' && zip.length === 0) {
      throw new Error('Address zip must be a valid string');
    }

    if (typeof state === 'string' && state.length === 0) {
      throw new Error('Address state must be a valid string');
    }

    if (typeof country === 'string' && country.length === 0) {
      throw new Error('Address country code must be a valid string');
    }

    if (typeof countryCode === 'string' && countryCode.length !== 2) {
      throw new Error('Address country code must be a valid 2 letter country code');
    }

    this.type = type;
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.state = state;
    this.country = country;
    this.countryCode = countryCode;
  }

  _createClass(Address, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          street = this.street,
          city = this.city,
          zip = this.zip,
          state = this.state,
          country = this.country,
          countryCode = this.countryCode;
      return {
        type: type,
        street: street,
        city: city,
        zip: zip,
        state: state,
        country: country,
        countryCode: countryCode
      };
    }
  }]);

  return Address;
}();

Address.Types = ['HOME', 'WORK'];
var _default = Address;
exports.default = _default;