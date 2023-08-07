"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Attach an optional trigger that can be applied to a {@link Button} if the type of the button is either 'url' or 'phone'.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of button trigger (event, flow)
 * @property {string} value - Value of the event/flow to be triggered
 * @example
 * new ButtonTrigger({
 *  type: 'event',
 *  value: 'event-to-trigger'
 * })
 **/
var ButtonTrigger = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of additional trigger (event, flow)
   * @param {string} opts.value - Required, name of the event/flow to be triggered
   **/
  function ButtonTrigger(_ref) {
    var type = _ref.type,
        value = _ref.value;

    _classCallCheck(this, ButtonTrigger);

    if (typeof type !== 'string' || type.trim().length === 0) {
      throw new Error('Invalid type');
    } else if (type !== 'event' && type !== 'flow') {
      throw new Error('\'type\' can be only \'event\' or \'flow\'');
    }

    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Invalid type');
    }

    this.type = type;
    this.value = value;
  }

  _createClass(ButtonTrigger, [{
    key: "isValidTrigger",
    value: function isValidTrigger() {
      if (typeof this.type !== 'string' || this.type.trim().length === 0) {
        return false;
      }

      if (typeof this.value !== 'string' || this.value.trim().length === 0) {
        return false;
      }

      return true;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          value = this.value;
      return {
        type: type,
        value: value
      };
    }
  }]);

  return ButtonTrigger;
}();

var _default = ButtonTrigger;
exports.default = _default;