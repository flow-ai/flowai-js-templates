"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @category Whatsapp
 *
 * @property {string} title - title of the button
 * @example
 * new Button({
 *  title: 'Select'
 * })
 **/
var Button = /*#__PURE__*/function () {
  /**
   * @param {string} opts.title - Required, title of the button
   **/
  function Button(_ref) {
    var title = _ref.title;

    _classCallCheck(this, Button);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Button title is mandatory');
    }

    this.title = title;
  }

  _createClass(Button, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title;
      return {
        type: 'reply',
        reply: {
          title: title,
          id: (0, _v.default)()
        }
      };
    }
  }]);

  return Button;
}();

var _default = Button;
exports.default = _default;