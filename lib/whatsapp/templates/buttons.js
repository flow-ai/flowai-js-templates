"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _button = _interopRequireDefault(require("../components/button"));

var _header = _interopRequireDefault(require("../components/header"));

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
 * A Whatsapp template that represents an array of {@link Buttonn}
 * 
 * @category Generic
 *
 * @property {string} body  - Required
 * @property {string} footer - Optional
 * @property {Header} header - Optional {@link Header}
 * @property {Array} buttons - Required
 * @example
 * const ButtonWA = new Templates.WhatsApp.Button({
 *              title: "Example title",
 *            })
 * const HeaderWA = new Templates.WhatsApp.Header({
 *              type: 'text',
 *              value: 'Example value'
 *            })
 *
 * const buttonsWA = new Templates.WhatsApp.List({body: 'Example body',
 *             header: HeaderWA,
 *             buttons: [ButtonWA]
 *           })
 **/
var Buttons = /*#__PURE__*/function (_Template) {
  _inherits(Buttons, _Template);

  var _super = _createSuper(Buttons);

  /**
   * @param {string} body  - Required
   * @param {string} footer - Optional
   * @param {Header} header - Optional {@link Header}
   * @param {Array} buttons - Required
   **/
  function Buttons(_ref) {
    var _this;

    var header = _ref.header,
        body = _ref.body,
        footer = _ref.footer,
        buttons = _ref.buttons;

    _classCallCheck(this, Buttons);

    _this = _super.call(this);

    if (typeof body !== 'string' || !body.length) {
      throw new Error('Buttons body is mandatory');
    }

    if (!buttons || !buttons.length) {
      throw new Error('Buttons are mandatory');
    }

    if (header && !(header instanceof _header.default)) {
      throw new Error('Buttons header must be Header object');
    }

    _this.body = body;
    _this.footer = footer || undefined;
    _this.header = header || undefined;
    _this.buttons = buttons || [];
    return _this;
  }
  /**
   * Add a button to the buttons
   * @param {Button} - button
   * @return {Buttons}
   **/


  _createClass(Buttons, [{
    key: "addButton",
    value: function addButton(button) {
      if (!(button instanceof _button.default)) {
        throw new Error('Buttons addButton argument must be an instance of a Button');
      }

      this.buttons.push(button);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var body = this.body,
          footer = this.footer,
          header = this.header,
          buttons = this.buttons;
      var payload = {
        body: {
          text: body
        },
        action: {
          buttons: buttons
        },
        type: 'button'
      };

      if (header) {
        payload.header = header;
      }

      if (footer) {
        payload.footer = {
          text: footer
        };
      }

      return {
        type: 'whatsapp_buttons',
        payload: payload
      };
    }
  }]);

  return Buttons;
}(_template.default);

var _default = Buttons;
exports.default = _default;