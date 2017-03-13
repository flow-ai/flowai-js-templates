'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component used in Card, Buttons templates
 * @property {string} type - Type of button (url, postback etc)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 **/
var Button =
/**
 * @param {string} opts.type - Requiresd
 * @param {string} opts.label - Requiresd
 * @param {string} opts.value - Requiresd
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
};

exports.default = Button;