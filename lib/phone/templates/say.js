"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Play an audio file or send a text message to a user that is transformed to speech
 * 
 * @memberof Phone
 * @category Templates
 * 
 * @property {string} speech - The text transformed to speech
 * Send a message to a user
 *
 * @memberof Phone
 * @category Templates
 *
 * @property {string} speech - Text to speech
 * @property {string} url - URL to an audio file
 * @property {string} language - Optional language for text to speech
 * @property {string} voice -  Optional voice for text to speech
 *
 * @example
 * const say = new Phone.Say({
 *   speech: 'The weather is nice today!',
 *   language: 'en-GB'
 * })
 *
 **/
var Say = /*#__PURE__*/function (_Template) {
  _inherits(Say, _Template);

  var _super = _createSuper(Say);

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

    _this = _super.call(this);

    if (_typeof(opts) !== 'object') {
      throw new Error('Invalid argument provided. Property collection expected');
    }

    var speech = opts.speech,
        url = opts.url;
    var language = opts.language,
        voice = opts.voice; // Either speech or URL needs to be provided

    if (speech === undefined && url === undefined) {
      throw new Error('Either speech or URL needs to be provided');
    } // Speech needs to be a string value


    if (speech !== undefined && typeof speech !== 'string') {
      throw new Error('Speech needs to be text');
    } // URL cannot be empty


    if (url !== undefined && (typeof url !== 'string' || !url.length)) {
      throw new Error('Invalid or empty url provided');
    }

    if (voice !== undefined && support.depricatedVoices.indexOf(voice) !== -1) {
      voice = undefined;
    } // Verify provided voice


    if (voice !== undefined && support.voices.indexOf(voice) === -1) {
      throw new Error("Unsupported voice specified. You need to choose one of: '".concat(support.voices.join(', '), "'"));
    }

    _this.speech = speech || undefined;
    _this.url = url || undefined;
    _this.voice = voice || 'google'; // Verify provided language

    if (language !== undefined) {
      if (support.deprecatedLanguages.indexOf(language) !== 1) {
        language = undefined;
      } else if (_this.voice === 'google' && support.languages.google.indexOf(language) === -1) {
        throw new Error("Unsupported language provided. Google supports one of: '".concat(support.languages.google.join(', '), "'"));
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
 * @ignore
 */


var support = {
  voices: ['google'],
  depricatedVoices: ['alice', 'man', 'woman', 'polly'],
  deprecatedLanguages: ['da-DK', 'de-DE', 'en-AU', 'en-CA', 'en-GB', 'en-IN', 'en-US', 'ca-ES', 'es-ES', 'es-MX', 'fi-FI', 'fr-CA', 'fr-FR', 'it-IT', 'ja-JP', 'ko-KR', 'nb-NO', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sv-SE', 'zh-CN', 'zh-HK', 'zh-TW', 'Polly.Mads', 'Polly.Naja', 'Polly.Lotte', 'Polly.Ruben', 'Polly.Nicole', 'Polly.Russell', 'Polly.Amy', 'Polly.Brian', 'Polly.Emma', 'Polly.Amy-Neural', 'Polly.Emma-Neural', 'Polly.Brian-Neural', 'Polly.Raveena', 'Polly.Ivy', 'Polly.Joanna', 'Polly.Joey', 'Polly.Justin', 'Polly.Kendra', 'Polly.Kimberly', 'Polly.Matthew', 'Polly.Salli', 'Polly.Ivy-Neural', 'Polly.Joanna-Neural*', 'Polly.Kendra-Neural', 'Polly.Kimberly-Neural', 'Polly.Salli-Neural', 'Polly.Joey-Neural', 'Polly.Justin-Neural', 'Polly.Matthew-Neural*', 'Polly.Geraint', 'Polly.Celine', 'Polly.Mathieu', 'Polly.Chantal', 'Polly.Hans', 'Polly.Marlene', 'Polly.Vicki', 'Polly.Dora', 'Polly.Karl', 'Polly.Carla', 'Polly.Giorgio', 'Polly.Mizuki', 'Polly.Takumi', 'Polly.Liv', 'Polly.Jacek', 'Polly.Jan', 'Polly.Ewa', 'Polly.Maja', 'Polly.Ricardo', 'Polly.Vitoria', 'Polly.Camila-Neural', 'Polly.Cristiano', 'Polly.Ines', 'Polly.Carmen', 'Polly.Maxim', 'Polly.Tatyana', 'Polly.Conchita', 'Polly.Enrique', 'Polly.Miguel', 'Polly.Penelope', 'Polly.Lupe-Neural', 'Polly.Astrid', 'Polly.Filiz', 'Polly.Gwyneth', 'en', 'en-gb', 'es', 'fr', 'de'],
  languages: {
    google: ['FEMALE (af-ZA)', 'FEMALE (ar-XA)', 'MALE (ar-XA)', 'FEMALE (bn-IN)', 'MALE (bn-IN)', 'FEMALE (bg-BG)', 'FEMALE (ca-ES)', 'FEMALE (yue-HK)', 'MALE (yue-HK)', 'FEMALE (cs-CZ)', 'FEMALE (da-DK)', 'MALE (da-DK)', 'FEMALE (nl-NL)', 'MALE (nl-NL)', 'FEMALE (en-AU)', 'MALE (en-AU)', 'FEMALE (en-IN)', 'MALE (en-IN)', 'FEMALE (en-GB)', 'MALE (en-GB)', 'MALE (en-US)', 'FEMALE (en-US)', 'FEMALE (fil-PH)', 'MALE (fil-PH)', 'FEMALE (fi-FI)', 'FEMALE (fr-CA)', 'MALE (fr-CA)', 'FEMALE (fr-FR)', 'MALE (fr-FR)', 'FEMALE (de-DE)', 'MALE (de-DE)', 'FEMALE (el-GR)', 'FEMALE (gu-IN)', 'MALE (gu-IN)', 'FEMALE (hi-IN)', 'MALE (hi-IN)', 'FEMALE (hu-HU)', 'FEMALE (is-IS)', 'FEMALE (id-ID)', 'MALE (id-ID)', 'FEMALE (it-IT)', 'MALE (it-IT)', 'FEMALE (ja-JP)', 'MALE (ja-JP)', 'FEMALE (kn-IN)', 'MALE (kn-IN)', 'FEMALE (ko-KR)', 'MALE (ko-KR)', 'MALE (lv-LV)', 'FEMALE (ml-IN)', 'MALE (ml-IN)', 'FEMALE (cmn-CN)', 'MALE (cmn-CN)', 'FEMALE (cmn-TW)', 'MALE (cmn-TW)', 'FEMALE (nb-NO)', 'MALE (nb-NO)', 'FEMALE (pl-PL)', 'MALE (pl-PL)', 'FEMALE (pt-BR)', 'FEMALE (pt-PT)', 'MALE (pt-PT)', 'FEMALE (ro-RO)', 'FEMALE (ru-RU)', 'MALE (ru-RU)', 'FEMALE (sr-RS)', 'FEMALE (sk-SK)', 'FEMALE (es-ES)', 'MALE (es-ES)', 'FEMALE (es-US)', 'MALE (es-US)', 'FEMALE (sv-SE)', 'FEMALE (ta-IN)', 'MALE (ta-IN)', 'FEMALE (te-IN)', 'MALE (te-IN)', 'FEMALE (th-TH)', 'FEMALE (tr-TR)', 'MALE (tr-TR)', 'FEMALE (uk-UA)', 'FEMALE (vi-VN)', 'MALE (vi-VN)']
  }
};
var _default = Say;
exports.default = _default;