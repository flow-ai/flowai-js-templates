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
 * Component used in a {@link WhatsApp.Contacts} template
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {WhatsApp.Name} name - Optional, full contact name
 * @property {WhatsApp.Organization} organization - Optional, contact organization information
 * @property {WhatsApp.Address[]} addresses - Optional, or more contact addresses
 * @property {string} birthday - Optional, contact date or birth in ISO format
 * @property {WhatsApp.EmailAddress[]} emails - Optional, or more contact email addresses
 * @property {WhatsApp.PhoneNumber[]} phones - Optional, or more contact phone numbers
 * @property {WhatsApp.WebsiteAddress[]} urls - Optional, or more URLs
 * 
 * @example
 * const contact = new WhatsApp.Contact({
 *   name: new WhatsApp.Name({
 *     formattedName: "Jane Doo",
 *     firstName: "Jane",
 *     lastName: "Doo",
 *     middleName: "Van"
 *   }),
 *   birthday: "2000-08-18",
 *   organization: new WhatsApp.Organization({
 *     company: "WhatsApp",
 *     department: "Design",
 *     title: "Manager"
 *   }),
 *   addresses: [
 *     new WhatsApp.Address({
 *       type: 'HOME',
 *       street: "1 Hacker Way",
 *       city: "Menlo Park",
 *       zip: "94025",
 *       state: "CA",
 *       country: "United States",
 *       countryCode: "US"
 *     })
 *   ],
 *   emails: [
 *     new WhatsApp.EmailAddress({
 *       type: 'WORK',
 *       email: "email@some.fake.org"
 *     })
 *   ],
 *   phones: [
 *     new WhatsApp.PhoneNumber({
 *       type: 'WORK',
 *       phone: "+1 (940) 555-1234"
 *     })
 *   ],
 *   urls: [
 *     new WhatsApp.WebsiteAddress({
 *       type: 'WORK',
 *       url: "https://www.some.fake.org"
 *     })
 *   ]
 * })
 **/
var Contact = /*#__PURE__*/function () {
  /**
   * A WhatsApp contact to share
   *
   * @param {object} opts - Optional properties
   * @param {WhatsApp.Name} opts.name - Optional, full contact name
   * @param {WhatsApp.Organization} opts.organization - Optional, contact organization information
   * @param {WhatsApp.Address[]} opts.addresses - Optional, or more contact addresses
   * @param {string} opts.birthday - Optional, contact date or birth in ISO format
   * @param {WhatsApp.EmailAddress[]} opts.emails - Optional, or more contact email addresses
   * @param {WhatsApp.PhoneNumber[]} opts.phones - Optional, or more contact phone numbers
   * @param {WhatsApp.WebsiteAddress[]} opts.urls - Optional, or more URLs
   **/
  function Contact(opts) {
    _classCallCheck(this, Contact);

    if (_typeof(opts) !== 'object') {
      throw new Error('Contact options are required');
    }

    var name = opts.name,
        organization = opts.organization,
        addresses = opts.addresses,
        birthday = opts.birthday,
        emails = opts.emails,
        phones = opts.phones,
        urls = opts.urls;

    if (addresses && !Array.isArray(addresses)) {
      throw new Error('Contact addresses must be an array');
    }

    if (emails && !Array.isArray(emails)) {
      throw new Error('Contact emails must be an array');
    }

    if (phones && !Array.isArray(phones)) {
      throw new Error('Contact phones must be an array');
    }

    if (urls && !Array.isArray(urls)) {
      throw new Error('Contact urls must be an array');
    }

    this.name = name;
    this.organization = organization;
    this.addresses = addresses;
    this.birthday = birthday;
    this.emails = emails;
    this.phones = phones;
    this.urls = urls;
  }

  _createClass(Contact, [{
    key: "toJSON",
    value: function toJSON() {
      var name = this.name,
          organization = this.organization,
          addresses = this.addresses,
          birthday = this.birthday,
          emails = this.emails,
          phones = this.phones,
          urls = this.urls;
      return {
        name: name,
        organization: organization,
        addresses: addresses,
        birthday: birthday,
        emails: emails,
        phones: phones,
        urls: urls
      };
    }
  }]);

  return Contact;
}();

var _default = Contact;
exports.default = _default;