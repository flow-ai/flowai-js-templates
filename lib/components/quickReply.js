'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location
 * @property {string} type - Type of quick reply, default is text
 *
 * @example
 * const text = new Text('We have a 40" screen for sale')
 * text.addQuickReply(new QuickReply({
 *   label: 'Order now',
 *   value: 'order 35633123322'
 * }))
 **/
var QuickReply = function () {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (or location)
   * @param {string} opts.value - Required, ignored if type is location
   **/
  function QuickReply(_ref) {
    var label = _ref.label,
        type = _ref.type,
        value = _ref.value;

    _classCallCheck(this, QuickReply);

    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('QuickReply label is mandatory');
    }

    if (value && typeof value !== 'string') {
      throw new Error('QuickReply value must be as string');
    }

    if (typeof type !== 'string' || type.length === 0) {
      this.type = 'text';
    } else {
      this.type = type;
    }

    this.value = value || label;
    this.label = label;
  }

  _createClass(QuickReply, [{
    key: 'toJSON',
    value: function toJSON() {
      var label = this.label,
          value = this.value,
          type = this.type;


      return {
        label: label,
        value: value,
        type: type
      };
    }
  }]);

  return QuickReply;
}();

exports.default = QuickReply;