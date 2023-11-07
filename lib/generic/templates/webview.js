"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _action = _interopRequireDefault(require("../components/action"));

var _buttonTrigger = _interopRequireDefault(require("../components/buttonTrigger"));

var _nanoid = require("nanoid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Deliver an image to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the image. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} label - Describes the image
 * @property {string} url - URL to the image
 * @property {ButtonTrigger} trigger - Optional {@link ButtonTrigger} for specific type of button
 * @example
 * const image = new Image({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
var Webview = /*#__PURE__*/function (_Template) {
  _inherits(Webview, _Template);

  var _super = _createSuper(Webview);

  /**
   * @param {string} opts.label - Required
   * @param {string} opts.url - Required
   **/
  function Webview(_ref) {
    var _this;

    var label = _ref.label,
        url = _ref.url,
        id = _ref.id,
        trigger = _ref.trigger;

    _classCallCheck(this, Webview);

    _this = _super.call(this);

    if (typeof label !== 'string' || !label.length) {
      throw new Error('Webview label is mandatory');
    }

    _this.label = label;

    if (typeof url !== 'string' || !url.length) {
      throw new Error('Webview url is mandatory');
    }

    _this.trigger = trigger;
    _this.id = id;

    if (!_this.id) {
      _this.id = "b".concat((0, _nanoid.nanoid)(8));
    }

    _this.url = url;
    return _this;
  }

  _createClass(Webview, [{
    key: "toJSON",
    value: function toJSON() {
      var label = this.label,
          url = this.url,
          id = this.id,
          trigger = this.trigger;
      return {
        type: 'webview',
        payload: {
          label: label,
          url: url,
          id: id,
          trigger: trigger
        }
      };
    }
  }]);

  return Webview;
}(_template.default);

var _default = Webview;
exports.default = _default;