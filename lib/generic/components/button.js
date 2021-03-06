"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("../../base/components/param");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Render a button inside {@link Card} or {@link Buttons} templates. Unlike {@link QuickReply} templates, by default a button will remain on the screen even after a user presses them.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 * @property {Base.Param[]} params - Optional parameters associated with the button
 * @example
 * new Button({
 *  type: 'webview',
 *  label: 'More info'
 *  value: 'https://...'
 * })
 **/
var Button = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value)
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  function Button(_ref) {
    var type = _ref.type,
        label = _ref.label,
        value = _ref.value,
        param = _ref.param,
        params = _ref.params;

    _classCallCheck(this, Button);

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory');
    }

    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory');
    }

    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory');
    }

    this.params = (0, _param.parseParam)(param || params);
    this.type = type;
    this.label = label;
    this.value = value;
  }

  _createClass(Button, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          label = this.label,
          value = this.value,
          params = this.params;
      return {
        type: type,
        label: label,
        value: value,
        params: (0, _param.flattenParams)(params)
      };
    }
  }]);

  return Button;
}();

var _default = Button;
exports.default = _default;