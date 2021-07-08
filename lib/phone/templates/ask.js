"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _say = _interopRequireDefault(require("./say"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Send a message to a user asking for input
 *
 * @memberof Phone
 * @category Templates
 *
 * @property {string} speech - Text to speech
 * @property {string} url - URL to an audio file
 * @property {string} expected - Optional, what kind of input to expect. Valid are speech or digits (default is speech)
 * @property {string} hints - Optional, expected words or sentences, comma separated (max 500 words)
 * @property {string} language - Optional language for text to speech
 * @property {string} voice -  Optional voice for text to speech
 * @property {number} timeout - Optional, number of seconds to wait for user input (default ) and send a repeat message
 * @property {number} repeat - Optional, number of times to ask again after user has not provided input (default 1, 0 is unlimited loop)
 * @property {string} finishOnKey - Optional, only when expecting digits, set a value that your caller can press to submit their digits.
 * @property {number} numDigits - Optional, only when expecting digits, set the number of digits you expect from your caller
 * @property {string} speechTimeout - Optional, only when expecting speech, sets the limit (in seconds) to wait before it stopping speech recognition
 * @example
 * const ask = new Phone.Ask({
 *   speech: 'Do you speak English?',
 *   language: 'en-GB',
 *   expected: 'speech',
 *   hints: 'yes,yeah,yup,yes I do,no,no not really,nope'
 * })
 *
 **/
var Ask = /*#__PURE__*/function (_Say) {
  _inherits(Ask, _Say);

  var _super = _createSuper(Ask);

  /**
   * Ask a user for input
   **/
  function Ask(opts) {
    var _this;

    _classCallCheck(this, Ask);

    _this = _super.call(this, opts);
    var hints = opts.hints,
        timeout = opts.timeout,
        repeat = opts.repeat,
        finishOnKey = opts.finishOnKey,
        numDigits = opts.numDigits,
        speechTimeout = opts.speechTimeout,
        preTone = opts.preTone,
        postTone = opts.postTone,
        tone = opts.tone;
    var expected = opts.expected;

    if (expected === 'any') {
      expected = 'speech';
    }

    if (expected !== undefined && support.expected.indexOf(expected) === -1) {
      throw new Error("Invalid \"expected\" provided. Needs to be one of: ".concat(support.expected.join(', ')));
    }

    if (hints !== undefined && typeof hints !== 'string') {
      throw new Error("hints needs to be a valid string");
    }

    if (timeout !== undefined && (typeof timeout !== 'number' || timeout < 0)) {
      throw new Error("timeout needs to be a positive number of seconds");
    }

    if (repeat !== undefined && (typeof repeat !== 'number' || repeat < 0)) {
      throw new Error("repeat needs to be a positive number");
    }

    if (finishOnKey !== undefined && (typeof finishOnKey !== 'string' || support.keys.indexOf(finishOnKey) === -1 && finishOnKey !== '')) {
      throw new Error("finishOnKey needs to one of the following ".concat(support.keys.join(', '), " or ''"));
    }

    if (numDigits !== undefined && (typeof numDigits !== 'number' || numDigits < 0)) {
      throw new Error("numDigits needs to be a positive number");
    }

    if (speechTimeout !== undefined && (typeof speechTimeout !== 'number' || speechTimeout < 0)) {
      throw new Error("speechTimeout needs to be a positive number");
    }

    _this.expected = expected || 'speech';
    _this.hints = hints || undefined;
    _this.timeout = timeout || undefined;
    _this.repeat = repeat || 1;
    _this.finishOnKey = finishOnKey || undefined;
    _this.numDigits = numDigits || undefined;
    _this.speechTimeout = speechTimeout || undefined;
    _this.preTone = preTone;
    _this.postTone = postTone;
    _this.tone = tone;
    return _this;
  }

  _createClass(Ask, [{
    key: "toJSON",
    value: function toJSON() {
      var expected = this.expected,
          hints = this.hints,
          timeout = this.timeout,
          repeat = this.repeat,
          finishOnKey = this.finishOnKey,
          numDigits = this.numDigits,
          speechTimeout = this.speechTimeout,
          preTone = this.preTone,
          postTone = this.postTone,
          tone = this.tone;

      var _json = _get(_getPrototypeOf(Ask.prototype), "toJSON", this).call(this);

      return {
        type: 'phone_ask',
        payload: _objectSpread(_objectSpread({}, _json.payload), {}, {
          expected: expected,
          hints: hints,
          timeout: timeout,
          repeat: repeat,
          finishOnKey: finishOnKey,
          numDigits: numDigits,
          speechTimeout: speechTimeout,
          preTone: preTone,
          postTone: postTone,
          tone: tone
        })
      };
    }
  }]);

  return Ask;
}(_say.default);
/**
 * Basic support matrix
 * @ignore
 */


var support = {
  expected: ['speech', 'digits'],
  keys: '0123456789#*'.split('')
};
var _default = Ask;
exports.default = _default;