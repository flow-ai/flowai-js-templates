'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * @property {string} label - UI label
 * @property {string} value
 **/
var QuickReply = function () {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.value - Required
   **/
  function QuickReply(_ref) {
    var label = _ref.label,
        value = _ref.value;

    _classCallCheck(this, QuickReply);

    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('label is mandatory');
    }
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('value is mandatory');
    }

    this.label = label;
    this.value = value;
  }

  _createClass(QuickReply, [{
    key: 'toJSON',
    value: function toJSON() {
      var type = this.type,
          value = this.value;


      return {
        type: type,
        value: value
      };
    }
  }]);

  return QuickReply;
}();

exports.default = QuickReply;