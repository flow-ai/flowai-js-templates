"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _button = _interopRequireDefault(require("../components/button"));

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
 * Template with a short description and {@link Button} components to request input from the user
 * 
 * @category Templates
 * 
 * @property {string} title - Main title of the buttons
 * @property {Button[]} buttons - Optional set of buttons
 * @example
 * const buttons = new Buttons("Vintage bikes and more")
 * buttons.addButton(new Button({
 *  label: "View website",
 *  type: "url",
 *  value: "..."
 * }))
 * buttons.addButton(new Button({
 *  label: "Special offers",
 *  type: "postback",
 *  value: "Show me special offers"
 * }))
 **/
var Buttons = /*#__PURE__*/function (_Template) {
  _inherits(Buttons, _Template);

  var _super = _createSuper(Buttons);

  /**
   * @param {string} opts.title - Required
   **/
  function Buttons(title) {
    var _this;

    _classCallCheck(this, Buttons);

    _this = _super.call(this);

    if (typeof title !== 'string' || !title.length) {
      throw new Error('Buttons title is mandatory');
    }

    _this.title = title;
    return _this;
  }
  /**
   * Add a button to the buttons
   * @param {Button} - button
   * @return {Button}
   **/


  _createClass(Buttons, [{
    key: "addButton",
    value: function addButton(button) {
      if (!(button instanceof _button.default)) {
        throw new Error('Buttons addButton argument must be an instance of a Button');
      }

      if (!this.buttons) {
        this.buttons = [];
      }

      this.buttons.push(button);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          buttons = this.buttons,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'buttons',
        payload: {
          title: title,
          buttons: buttons,
          quickReplies: quickReplies
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Buttons;
}(_template.default);

var _default = Buttons;
exports.default = _default;