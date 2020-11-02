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
 * @category Components
 * 
 * @property {string} street1 - Required, the street address, line 1.
 * @property {string} street2 - Optional, the street address, line 2.
 * @property {string} city - Required, the city name of the address.
 * @property {string} postalCode - Required, the postal code of the address.
 * @property {string} state - Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
 * @property {string} country - Required, the two-letter country abbreviation of the address.
 * 
 * @example
 * const address = new Messenger.ReceiptAddress({
 *   street1: "1 Hacker Way",
 *   street2: "2nd floor",
 *   city: "Menlo Park",
 *   postalCode: "94025",
 *   state: "CA",
 *   country: "US"
 * })
 **/
var ReceiptAddress = /*#__PURE__*/function () {
  /**
   * The shipping address of an order
   *
   * @param {object} opts - Required properties
   * @param {string} opts.street1 - Required, the street address, line 1.
   * @param {string} opts.street2 - Optional, the street address, line 2.
   * @param {string} opts.city - Required, the city name of the address.
   * @param {string} opts.postalCode - Required, the postal code of the address.
   * @param {string} opts.state - Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
   * @param {string} opts.country - Required, the two-letter country abbreviation of the address.
   **/
  function ReceiptAddress() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReceiptAddress);

    var street1 = opts.street1,
        street2 = opts.street2,
        city = opts.city,
        postalCode = opts.postalCode,
        state = opts.state,
        country = opts.country;

    if (typeof street1 !== 'string' || street1.length === 0) {
      throw new Error('ReceiptAddress street1 is mandatory');
    }

    if (typeof city !== 'string' || city.length === 0) {
      throw new Error('ReceiptAddress city is mandatory');
    }

    if (typeof postalCode !== 'string' || postalCode.length === 0) {
      throw new Error('ReceiptAddress postalCode is mandatory');
    }

    if (typeof state !== 'string' || state.length === 0) {
      throw new Error('ReceiptAddress state is mandatory');
    }

    if (typeof country !== 'string' || country.length === 0) {
      throw new Error('ReceiptAddress country is mandatory');
    }

    this.street1 = street1;
    this.street2 = street2;
    this.city = city;
    this.postalCode = postalCode;
    this.state = state;
    this.country = country;
  }

  _createClass(ReceiptAddress, [{
    key: "toJSON",
    value: function toJSON() {
      var street1 = this.street1,
          street2 = this.street2,
          city = this.city,
          postalCode = this.postalCode,
          state = this.state,
          country = this.country;
      return {
        street1: street1,
        street2: street2,
        city: city,
        postalCode: postalCode,
        state: state,
        country: country
      };
    }
  }]);

  return ReceiptAddress;
}();

var _default = ReceiptAddress;
exports.default = _default;