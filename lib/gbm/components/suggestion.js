"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("../../base/components/param");

var _auth = _interopRequireDefault(require("../components/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A suggestion for the user to reply with specified text or initiates a native action on the device.
 * 
 * @memberof GBM
 * 
 * @category Components
 * 
 * @property {string} type - Type of suggestion, default is text (text, url, phone, live_agent, auth)
 * @property {string} text - Text that is shown in the suggested action. Maximum 25 characters.
 * @property {string} data - Value that is being send as the suggestion, empty if type is location
 * @property {string} url - URL to open in case it's a url type
 * @property {string} phoneNumber - phone number to dial in case of a phone type
 * @property {Auth} auth - phone number to dial in case of a phone type
 * @property {Param[]} params - Optional parameters associated with the suggestion
 * 
 **/
var Suggestion = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required type, default is text (text, url, phone, live_agent, auth)
   * @param {string} opts.text - Required unless of type auth or live_agent
   * @param {string} opts.data - Optional data, required if type is text
   * @param {string} opts.url - Required if type is url 
   * @param {string} opts.phoneNumber - Required if type is phone
   * @param {Auth} opts.auth - Required if type is auth
   * @param {Param|Param[]} opts.params - Optional Param or array or Array of Params related to this Suggestion
   **/
  function Suggestion(opts) {
    _classCallCheck(this, Suggestion);

    var type = opts.type,
        text = opts.text,
        data = opts.data,
        url = opts.url,
        phoneNumber = opts.phoneNumber,
        auth = opts.auth,
        params = opts.params;

    switch (type) {
      case 'text':
        {
          if (typeof text !== 'string' || !text.length || text.length > 25) {
            throw new Error('Suggestion text must be a valid string no longer then 25 characters');
          }

          if (typeof data !== 'string' || !data.length) {
            throw new Error('Suggestion data must be a valid string');
          }

          break;
        }

      case 'url':
        {
          if (typeof text !== 'string' || !text.length || text.length > 25) {
            throw new Error('Suggestion text must be a valid string no longer then 25 characters');
          }

          if (typeof url !== 'string' || !url.length) {
            throw new Error('Suggestion url must be a valid URL');
          }

          break;
        }

      case 'phone':
        {
          if (typeof text !== 'string' || !text.length || text.length > 25) {
            throw new Error('Suggestion text must be a valid string no longer then 25 characters');
          }

          if (typeof phoneNumber !== 'string' || !phoneNumber.length) {
            throw new Error('Suggestion phoneNumber must be a valid phone number');
          }

          break;
        }

      case 'auth':
        {
          if (!(auth instanceof _auth.default)) {
            throw new Error('Suggestion auth must be a valid GBM.Auth object');
          }

          break;
        }

      case 'live_agent':
        {
          break;
        }

      default:
        {
          throw new Error('Unknown suggestion type');
        }
    }

    this.text = text || undefined;
    this.data = data || undefined;
    this.url = url || undefined;
    this.phoneNumber = phoneNumber || undefined;
    this.auth = auth || undefined;
    this.params = (0, _param.parseParam)(params);
  }

  _createClass(Suggestion, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          text = this.text,
          data = this.data,
          url = this.url,
          phoneNumber = this.phoneNumber,
          auth = this.auth,
          params = this.params;
      return {
        type: type,
        text: text,
        data: data,
        url: url,
        phoneNumber: phoneNumber,
        auth: auth,
        params: (0, _param.flattenParams)(params)
      };
    }
  }]);

  return Suggestion;
}();

var _default = Suggestion;
exports.default = _default;