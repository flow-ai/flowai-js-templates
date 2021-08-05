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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex inter or response.
 * 
 * @alias WhatsApp.Text
 * 
 * @memberof WhatsApp
 * @category Templates
 * 
 * @property {string} text - Text to show
 * @property {boolean} previewUrl - True by default, will render a preview if a URL is inside the text message
 * 
 * @example
 * const text = new WhatsApp.Text('Want a free soda?')
 * 
 * @example
 * const text = new WhatsApp.Text('Hello, here is some **bold text**, *italicized text*, and a https://www.google.com')
 **/
var Text = /*#__PURE__*/function (_Template) {
  _inherits(Text, _Template);

  var _super = _createSuper(Text);

  /**
   * @param {object|string} opts - Collection of options or the text
   * @param {string} opts.text - Required
   * @param {boolean} opts.previewUrl - Optional
   **/
  function Text(opts) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this);
    var text = opts;
    var previewUrl = true;

    if (_typeof(opts) === 'object') {
      text = opts.text;

      if (typeof opts.previewUrl === 'boolean') {
        previewUrl = opts.previewUrl;
      }
    }

    if (typeof text !== 'string' || !text.length) {
      throw new Error('Text is mandatory');
    }

    _this.previewUrl = previewUrl;
    _this.text = text;
    return _this;
  }

  _createClass(Text, [{
    key: "toJSON",
    value: function toJSON() {
      var text = this.text,
          previewUrl = this.previewUrl,
          suggestions = this.suggestions,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'whatsapp_text',
        payload: {
          text: text,
          previewUrl: previewUrl,
          suggestions: suggestions
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Text;
}(_template.default);

var _default = Text;
exports.default = _default;