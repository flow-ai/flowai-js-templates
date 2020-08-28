"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

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
 * Template composed with your own data. Use this to create specific UI widgets or components to your app or web ui. Do remember we cannot convert these type of templates to channels like Messenger.
 * @property {object} data - Data tailored to your use case
 * @example
 * const custom = new Custom({
 *   title: 'Big screen TV',
 *   brand: 'Awesome Elec.',
 *   catId: 35633123322,
 *   prices: {
 *     'EURO': 1800,
 *     'DOLLAR': '2400'
 *   }
 * })
 * // You can still add quick replies
 * // to these type of componentz
 * custom.addQuickReply(new QuickReply({
 *   label: 'Order now',
 *   value: 'order 35633123322'
 * }))
 **/
var Custom = /*#__PURE__*/function (_Template) {
  _inherits(Custom, _Template);

  var _super = _createSuper(Custom);

  /**
   * @param {object} data - Required
   **/
  function Custom(data) {
    var _this;

    _classCallCheck(this, Custom);

    _this = _super.call(this);

    if (_typeof(data) !== 'object') {
      throw new Error('Custom data is mandatory');
    }

    _this.data = data;
    return _this;
  }

  _createClass(Custom, [{
    key: "toJSON",
    value: function toJSON() {
      var data = this.data,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'custom',
        payload: Object.assign(data, {
          quickReplies: quickReplies
        }),
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Custom;
}(_template.default);

var _default = Custom;
exports.default = _default;