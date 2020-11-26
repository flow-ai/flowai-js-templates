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
 * A suggestion for the user to reply with a predefined text, trigger an event or initiate a native action like dialing a phone number
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
 * @property {Base.Param[]} params - Optional parameters associated with the suggestion
 * 
 * @example
 * // Text suggestion
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Say hi",
 *   data: "Hello"
 * })
 * 
 * // With param
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Buy product",
 *   params: new Param('itemId', '332223323')
 * })
 * 
 * // With params
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Buy products",
 *   params: [
 *     new Param('itemId', '332223323'),
 *     new Param('itemId', '113432143')
 *   ]
 * })
 * 
 * // Short hand syntax
 * const textSuggestion = new GBM.Suggestion("yes")
 * 
 * // Event suggestion
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "event",
 *   text: "Main menu",
 *   data: "MAIN_MENU"
 * })
 * 
 * // Open URL suggestion
 * const urlSuggestion = new GBM.Suggestion({ 
 *   type: "url",
 *   text: "Open link",
 *   url: "https://foo.bar"
 * })
 * 
 * // Dial action
 * const dialSuggestion = new GBM.Suggestion({ 
 *   type: "phone",
 *   text: "Dial",
 *   phoneNumber: "+1234567890"
 * })
 * 
 * // Auth suggestion
 * const authSuggestion = new GBM.Suggestion({ 
 *   type: "auth",
 *   auth: new GBM.Auth({
 *     clientId: 'CLIENT_ID',
 *     codeChallenge: 'CODE_CHALLENGE',
 *     scopes: ['SCOPE']
 *   })
 * })
 * 
 * // Live agent suggestion
 * const liveAgentSuggestion = new GBM.Suggestion({ 
 *   type: "live_agent"
 * })
 * 
 * const text new GBM.Text("Make a suggestion")
 * text.addSuggestion(textSuggestion)
 * text.addSuggestion(urlSuggestion)
 * text.addSuggestion(authSuggestion)
 * text.addSuggestion(liveAgentSuggestion)
 **/
var Suggestion = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required type, default is text (text, url, phone, live_agent, auth)
   * @param {string} opts.text - Required unless of type auth or live_agent
   * @param {string} opts.data - Optional data, required if type is text
   * @param {string} opts.url - Required if type is url 
   * @param {string} opts.phoneNumber - Required if type is phone
   * @param {Auth} opts.auth - Required if type is auth
   * @param {Base.Param|Base.Param[]} opts.params - Optional Param or array or Array of Params related to this Suggestion
   **/
  function Suggestion(opts) {
    _classCallCheck(this, Suggestion);

    if (typeof opts === 'string') {
      this.type = 'text';
      this.text = opts;
      this.data = opts;
      return;
    }

    var type = opts.type,
        text = opts.text,
        data = opts.data,
        url = opts.url,
        phoneNumber = opts.phoneNumber,
        auth = opts.auth,
        params = opts.params;

    switch (type) {
      case 'event':
        {
          if (typeof text !== 'string' || !text.length || text.length > 25) {
            throw new Error('Suggestion event must be a valid string no longer then 25 characters');
          }

          if (typeof data !== 'string' || !data.length) {
            throw new Error('Suggestion data must be a valid event name');
          }

          this.data = data;
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

          this.url = url;
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

          this.phoneNumber = phoneNumber;
          break;
        }

      case 'auth':
        {
          if (!(auth instanceof _auth.default)) {
            throw new Error('Suggestion auth must be a valid GBM.Auth object');
          }

          this.auth = auth;
          break;
        }

      case 'live_agent':
        {
          break;
        }

      default:
        {
          if (typeof text !== 'string' || !text.length || text.length > 25) {
            throw new Error('Suggestion text must be a valid string no longer then 25 characters');
          }

          if (typeof data === 'string' && !data.length) {
            throw new Error('Suggestion data must be a valid string');
          }

          this.data = data || text;
        }
    }

    this.type = type || 'text';
    this.text = text || undefined;
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