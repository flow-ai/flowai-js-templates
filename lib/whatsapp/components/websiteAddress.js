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
 * @property {string} type - Optional, type of website, must be HOME or WORK
 * @property {string} url - Required, valid URL
 * 
 * @example
 * const url = new WhatsApp.WebsiteAddress({
 *   url: "https://www.fake.org"
 * })
 * 
 * @example
 * // Shorthand
 * const url = new WhatsApp.WebsiteAddress("https://www.fake.org")
 **/
var WebsiteAddress = /*#__PURE__*/function () {
  /**
   * The website URL of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of website, must be HOME or WORK
   * @param {string} opts.url - Required, valid URL
   **/
  function WebsiteAddress(opts) {
    _classCallCheck(this, WebsiteAddress);

    var url;

    if (typeof opts === 'string') {
      url = opts;
    } else {
      var type = opts.type;
      url = opts.url;

      if (typeof type === 'string' && WebsiteAddress.Types.indexOf(type) === -1) {
        throw new Error('WebsiteAddress type must be either HOME or WORK');
      }

      this.type = type;
    }

    if (typeof url !== 'string' || url.length === 0) {
      throw new Error("WebsiteAddress url ".concat(url, " must be a valid url"));
    }

    this.url = url;
  }

  _createClass(WebsiteAddress, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          url = this.url;
      return {
        type: type,
        url: url
      };
    }
  }]);

  return WebsiteAddress;
}();

WebsiteAddress.Types = ['HOME', 'WORK'];
var _default = WebsiteAddress;
exports.default = _default;