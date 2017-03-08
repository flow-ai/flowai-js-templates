'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuickReply = function QuickReply(_ref) {
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
};

exports.default = QuickReply;