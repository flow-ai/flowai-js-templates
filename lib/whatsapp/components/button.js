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
 *
 * @category Whatsapp
 *
 * @property {string} title - title of the button
 * @example
 * new Button({
 *  title: 'Select',
 *  type: 'event',
 *  value: 'NICE_EVENT'
 * })
 **/
var Button = /*#__PURE__*/function () {
  /**
   * @param {object} opts
   * @param {string} opts.title - Required, title of the button
   * @param {string} opts.type - Required, type of the button (text, event, flow or step)
   * @param {string} opts.value - Required, value of payload to be sent back to the server when customer clicks the buttons
   * @param {Param} opts.param - Optional, parameter to pass to the button
   * @param {Array<Param>} opts.params - Optional, parameters to pass to the button
   **/
  function Button(_ref) {
    var title = _ref.title,
        type = _ref.type,
        value = _ref.value,
        param = _ref.param,
        params = _ref.params;

    _classCallCheck(this, Button);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Button title is mandatory');
    }

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory');
    }

    if (type && type !== 'text' && type !== 'event' && type !== 'flow' && type !== 'step') {
      throw new Error('Type should be text, event, flow or step');
    }

    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory');
    }

    this.title = title;
    this.params = (0, _param.parseParam)(param || params);
    this.type = type;
    this.value = value;
  }

  _createClass(Button, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          type = this.type,
          value = this.value,
          params = this.params;
      return {
        type: 'reply',
        reply: {
          title: title,
          type: type,
          value: value,
          params: params
        }
      };
    }
  }]);

  return Button;
}();

var _default = Button;
exports.default = _default;