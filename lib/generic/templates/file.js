"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _action = _interopRequireDefault(require("../components/action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Template with a file
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
var File =
/*#__PURE__*/
function (_Template) {
  _inherits(File, _Template);

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   **/
  function File(_ref) {
    var _this;

    var title = _ref.title,
        url = _ref.url,
        action = _ref.action;

    _classCallCheck(this, File);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(File).call(this));

    if (typeof title !== 'string' || !title.length) {
      throw new Error('File title is mandatory');
    }

    _this.title = title;

    if (typeof url !== 'string' || !url.length) {
      throw new Error('File url is mandatory');
    }

    _this.url = url;
    _this.action = action || undefined;
    return _this;
  }

  _createClass(File, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          url = this.url,
          action = this.action,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'file',
        payload: {
          title: title,
          url: url,
          action: action,
          quickReplies: quickReplies
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }, {
    key: "action",
    set: function set(action) {
      if (action && !(action instanceof _action.default)) {
        throw new Error('action must be an instance of Action');
      }

      this._action = action;
    },
    get: function get() {
      return this._action;
    }
  }]);

  return File;
}(_template.default);

var _default = File;
exports.default = _default;