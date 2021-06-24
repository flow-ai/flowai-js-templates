"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @category Whatsapp
 *
 * @property {string} label - Label of the button
 * @example
 * new Button({
 *  label: 'Select'
 * })
 **/
var Button = /*#__PURE__*/function () {
  /**
   * @param {string} opts.label - Required, label of the button
   **/
  function Button(_ref) {
    var label = _ref.label;

    _classCallCheck(this, Button);

    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory');
    }

    this.label = label;
  }

  _createClass(Button, [{
    key: "toJSON",
    value: function toJSON() {
      var label = this.label;
      return {
        label: label
      };
    }
  }]);

  return Button;
}();

var _default = Button;
exports.default = _default;