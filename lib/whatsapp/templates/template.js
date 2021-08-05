"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _language = _interopRequireDefault(require("../components/language"));

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
 * A Whatsapp template that represents an array of {@link Buttonn}
 * 
 * @category Generic
 *
 * @property {string} namespace  - Required
 * @property {string} name - Required
 * @property {Language} language - Required {@link Language}
 * @property {Array} components - Optional
 * @example
 * const language = new Templates.WhatsApp.Language({
 *              policy: "deterministic",
 *              code: "en",
 *            })
 *  const currency = new Templates.WhatsApp.Currency({
 *               fallback_value: "$100.99",
 *               code: "USD",
 *               amount_1000: 100990
 *            })
 * const component = new Templates.WhatsApp.Component({
 *              type: 'body',
 *              parameters: [currency]
 *            })
 *  const buttonTemplate = new Templates.WhatsApp.Button({
 *                sub_type: 'url',
 *                index: 0,
 *                type: 'text',
 *                text: 'http://example.com'
 *            })
 *  const button = new Templates.WhatsApp.Component({
 *              type: 'button',
 *              button: buttonTemplate
 *            })
 *
 * const buttonsWA = new Templates.WhatsApp.Template({
 *       namespace: "your-namespace",
 *       name: "your-template-name",
 *       language: language,
 *       "components": [ button, component ])
 **/
var TemplateWA = /*#__PURE__*/function (_Template) {
  _inherits(TemplateWA, _Template);

  var _super = _createSuper(TemplateWA);

  /**
   * @param {string} namespace  - Required
   * @param {string} name - Required
   * @param {Language} language - Required {@link Language}
   * @param {Array} components - Optional Array of  {@link Component}
   **/
  function TemplateWA(_ref) {
    var _this;

    var namespace = _ref.namespace,
        name = _ref.name,
        language = _ref.language,
        components = _ref.components;

    _classCallCheck(this, TemplateWA);

    _this = _super.call(this);

    if (typeof namespace !== 'string' || namespace.length === 0) {
      throw new Error('Namespace is mandatory');
    }

    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name is mandatory');
    }

    if (!(language instanceof _language.default)) {
      throw new Error('Language must be instance of Language object');
    }

    _this.namespace = namespace;
    _this.name = name;
    _this.language = language;
    _this.components = components || [];
    return _this;
  }

  _createClass(TemplateWA, [{
    key: "toJSON",
    value: function toJSON() {
      var namespace = this.namespace,
          name = this.name,
          language = this.language,
          components = this.components;
      return {
        type: 'whatsapp_template',
        namespace: namespace,
        name: name,
        language: language,
        components: components
      };
    }
  }]);

  return TemplateWA;
}(_template.default);

var _default = TemplateWA;
exports.default = _default;