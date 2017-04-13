'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Default action used in Card, List and Buttons templates
 * @property {string} type - Type of action (url, postback etc)
 * @property {string} value - Value of the action
 **/
var Action =
/**
 * @param {string} opts.type - Required
 * @param {string} opts.value - Required
 **/
function Action(_ref) {
  var type = _ref.type,
      value = _ref.value;

  _classCallCheck(this, Action);

  if (typeof value !== 'string' || value.length === 0) {
    throw new Error('Value is mandatory');
  }

  this.value = value;

  if (typeof type !== 'string' || type.length === 0) {
    throw new Error('type is mandatory');
  }

  this.type = type;
};

exports.default = Action;