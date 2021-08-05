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
 * @property {string} sub_type - Type of button being created.
 * @property {string} index - Position index of the button. You can have up to 3 buttons using index values of 0-2.
 * @property {string} type - Required, type of the button
 * @property {string} payload - payload of the button (for quick replies)
 * @property {string} text - text of the button (for url buttons)
 **/
var ButtonTemplate = /*#__PURE__*/function () {
  /**
   * @param {string} opts.sub_type - Required, Type of button being created
   * @param {string} opts.index - Required, Position index of the button
   * @param {string} opts.type - Required, type of the button
   * @param {string} opts.payload - payload of the button (Required for quick replies)
   * @param {string} opts.text - text of the button (Required for url buttons)
   **/
  function ButtonTemplate(_ref) {
    var sub_type = _ref.sub_type,
        index = _ref.index,
        type = _ref.type,
        payload = _ref.payload,
        text = _ref.text;

    _classCallCheck(this, ButtonTemplate);

    if (typeof sub_type !== 'string' || sub_type.length === 0) {
      throw new Error('Sub type is mandatory');
    }

    if (typeof index !== 'string' || index.length === 0) {
      throw new Error('Index is mandatory');
    }

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Type is mandatory');
    }

    this.sub_type = sub_type;
    this.index = index;
    this.type = type;
    this.payload = payload;
    this.text = text;
  }

  _createClass(ButtonTemplate, [{
    key: "toJSON",
    value: function toJSON() {
      var sub_type = this.sub_type,
          index = this.index,
          type = this.type,
          payload = this.payload,
          text = this.text;
      return {
        sub_type: sub_type,
        index: index,
        parameters: {
          type: type,
          payload: payload,
          text: text
        }
      };
    }
  }]);

  return ButtonTemplate;
}();

var _default = ButtonTemplate;
exports.default = _default;