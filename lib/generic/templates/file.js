"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _action = _interopRequireDefault(require("../components/action"));

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
 * Deliver a file to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the file. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the file
 * @property {string} url - URL to the file
 * @property {Action} action - Optional Action
 * @example
 * const file = new File({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
var File = /*#__PURE__*/function (_Template) {
  _inherits(File, _Template);

  var _super = _createSuper(File);

  /**
   * @param {string} opts.title - Optional
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional {@link Action}
   **/
  function File(_ref) {
    var _this;

    var title = _ref.title,
        url = _ref.url,
        action = _ref.action;

    _classCallCheck(this, File);

    _this = _super.call(this);

    if (typeof url !== 'string' || !url.length) {
      throw new Error('File url is mandatory');
    }

    _this.title = title;
    _this.url = url;
    _this.action = action || undefined;
    return _this;
  }

  _createClass(File, [{
    key: "action",
    get: function get() {
      return this._action;
    },
    set: function set(action) {
      if (action && !(action instanceof _action.default)) {
        throw new Error('action must be an instance of Action');
      }

      this._action = action;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          url = this.url,
          action = this.action,
          quickReplies = this.quickReplies,
          expirationTime = this.expirationTime,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'file',
        payload: {
          title: title,
          url: url,
          action: action,
          quickReplies: quickReplies,
          expirationTime: expirationTime
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return File;
}(_template.default);

var _default = File;
exports.default = _default;