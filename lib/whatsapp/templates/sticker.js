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
 * Deliver a sticker to a user
 * 
 * @alias WhatsApp.Sticker
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the sticker
 * @property {string} stickerId - ID to the sticker
 * @example
 * const sticker = new WhatsApp.Sticker("121233212321")
 **/
var Sticker = /*#__PURE__*/function (_Template) {
  _inherits(Sticker, _Template);

  var _super = _createSuper(Sticker);

  /**
   * @param {object|string} opts - Options or shorthand a ID
   * @param {string} opts.stickerId - Required
   **/
  function Sticker(opts) {
    var _this;

    _classCallCheck(this, Sticker);

    _this = _super.call(this);
    var stickerId;

    if (typeof opts === 'string') {
      stickerId = opts;
    } else if (_typeof(opts) === 'object') {
      stickerId = opts.stickerId;
    }

    if (typeof stickerId !== 'string' || !stickerId.length) {
      throw new Error('Sticker stickerId is mandatory');
    }

    _this.stickerId = stickerId;
    return _this;
  }

  _createClass(Sticker, [{
    key: "toJSON",
    value: function toJSON() {
      var stickerId = this.stickerId;
      return {
        type: 'whatsapp_sticker',
        payload: {
          stickerId: stickerId
        }
      };
    }
  }]);

  return Sticker;
}(_template.default);

var _default = Sticker;
exports.default = _default;