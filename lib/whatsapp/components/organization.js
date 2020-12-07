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
 * @property {string} company - Optional, name of the contact's company
 * @property {string} department - Optional, department name of a contact
 * @property {string} title - Optional, contact's business title
 * 
 * @example
 * const organization = new WhatsApp.Organization({
 *   company: "WhatsApp",
 *   department: "Design",
 *   title: "Manager"
 * })
 * 
 * @example
 * // Shorthand
 * const organization = new WhatsApp.Organization("WhatsApp")
 **/
var Organization = /*#__PURE__*/function () {
  /**
   * Contact organization information
   *
   * @param {object|string} opts - Optional properties, or company name for shorthand
   * @param {string} opts.company - Optional, name of the contact's company
   * @param {string} opts.department - Optional, department name of a contact
   * @param {string} opts.title - Optional, contact's business title
   **/
  function Organization(opts) {
    _classCallCheck(this, Organization);

    var company;

    if (typeof opts === 'string') {
      company = opts;
    } else {
      company = opts.company;
      var department = opts.department,
          title = opts.title;

      if (typeof department === 'string' && department.length === 0) {
        throw new Error('Organization department name must be a valid string');
      }

      this.department = department;

      if (typeof title === 'string' && title.length === 0) {
        throw new Error('Organization title must be a valid string');
      }

      this.title = title;
    }

    if (typeof company !== 'string' || company.length === 0) {
      throw new Error("Organization company name ".concat(company, " must be a valid string"));
    }

    this.company = company;
  }

  _createClass(Organization, [{
    key: "toJSON",
    value: function toJSON() {
      var company = this.company,
          department = this.department,
          title = this.title;
      return {
        company: company,
        department: department,
        title: title
      };
    }
  }]);

  return Organization;
}();

var _default = Organization;
exports.default = _default;