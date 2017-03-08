'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button(_ref) {
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
};

exports.default = Button;