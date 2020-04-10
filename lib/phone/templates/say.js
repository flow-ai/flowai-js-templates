"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Send a message to a user
 * 
 * @property {string} speech - Text to speech
 * @property {string} url - URL to an audio file
 * @property {string} language - Optional language for text to speech
 * @property {string} voice -  Optional voice for text to speech
 * @example
 * const say = new Phone.Say({
 *   speech: "The weather is nice today!",
 *   language: "en-GB"
 * })
 * 
 **/
var Say =
/*#__PURE__*/
function (_Template) {
  _inherits(Say, _Template);

  /**
   * 
   * @param {Object} opts - Configuration
   * @param {string} opts.speech - Text to speech
   * @param {string} opts.url - URL to audio File
   * @param {string} opts.language - Optional language for text to speech
   * @param {string} opts.voice -  Optional voice for text to speech
   */
  function Say(opts) {
    var _this;

    _classCallCheck(this, Say);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Say).call(this));

    if (_typeof(opts) !== 'object') {
      throw new Error('Invalid argument provided. Property collection expected');
    }

    var speech = opts.speech,
        url = opts.url,
        language = opts.language,
        voice = opts.voice; // Either speech or URL needs to be provided

    if (speech === undefined && url === undefined) {
      throw new Error('Either speech or URL needs to be provided');
    } // Speech needs to be a string value


    if (speech !== undefined && typeof speech !== 'string') {
      throw new Error('Speech needs to be text');
    } // URL cannot be empty


    if (url !== undefined && (typeof url !== 'string' || !url.length)) {
      throw new Error('Invalid or empty url provided');
    } // Verify provided voice


    if (voice !== undefined && support.voices.indexOf(voice) === -1) {
      throw new Error("Unsupported voice specified. You need to choose one of: \"".concat(support.voices.join(', '), "\""));
    }

    _this.speech = speech || undefined;
    _this.url = url || undefined;
    _this.voice = voice || 'alice'; // Verify provided language

    if (language !== undefined) {
      if (_this.voice === 'alice' && support.languages.alice.indexOf(language) === -1) {
        throw new Error("Unsupported language provided. Alice supports one of: \"".concat(support.languages.alice.join(', '), "\""));
      } else if (_this.voice !== 'alice' && support.languages.other.indexOf(language) === -1) {
        throw new Error("Unsupported language provided. You need to choose one of \"".concat(support.languages.other.join(', '), "\""));
      }
    }

    _this.language = language || undefined;
    return _this;
  }

  _createClass(Say, [{
    key: "toJSON",
    value: function toJSON() {
      var speech = this.speech,
          url = this.url,
          language = this.language,
          voice = this.voice;
      return {
        type: 'phone_say',
        payload: {
          speech: speech,
          url: url,
          language: language,
          voice: voice
        }
      };
    }
  }]);

  return Say;
}(_template.default);
/**
 * Basic support matrix
 */


var support = {
  voices: ['alice', 'man', 'woman'],
  languages: {
    alice: ['da-DK', 'de-DE', 'en-AU', 'en-CA', 'en-GB', 'en-IN', 'en-US', 'ca-ES', 'es-ES', 'es-MX', 'fi-FI', 'fr-CA', 'fr-FR', 'it-IT', 'ja-JP', 'ko-KR', 'nb-NO', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sv-SE', 'zh-CN', 'zh-HK', 'zh-TW'],
    other: ['en', 'en-gb', 'es', 'fr', 'de']
  }
};
var _default = Say;
exports.default = _default;