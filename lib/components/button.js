'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component used in Card, Buttons templates
 * @property {string} type - Type of button (url, postback etc)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 **/
var Button = function () {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.label - Required
   * @param {string} opts.value - Required
   **/
  function Button(_ref) {
    var type = _ref.type,
        label = _ref.label,
        value = _ref.value;

    _classCallCheck(this, Button);

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('type is mandatory');
    }
    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('label is mandatory');
    }
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('value is mandatory');
    }

    this.type = type;
    this.label = label;
    this.value = value;
  }

  _createClass(Button, [{
    key: 'toJSON',
    value: function toJSON() {
      var type = this.type,
          label = this.label,
          value = this.value;


      return {
        type: type,
        label: label,
        value: value
      };
    }
  }]);

  return Button;
}();

exports.default = Button;