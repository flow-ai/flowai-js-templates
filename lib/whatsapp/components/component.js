"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parameter = _interopRequireDefault(require("./parameter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * @category Whatsapp
 *
 * @property {string} type - Required.
 * @property {string} subtype - Optional. Used when type is set to button.
 * @property {string} parameters - Array containing the content of the message. Values: text, currency, date_time, image, document, video
 * {type: {video: {link: 'http://example.com'}}}
 **/
var Component = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required.
   * @param {string} opts.subtype - Optional. Used when type is set to button.
   **/
  function Component(_ref) {
    var type = _ref.type,
        subtype = _ref.subtype;

    _classCallCheck(this, Component);

    if (!type) {
      throw new Error('Type is mandatory');
    }

    this.type = type;
    this.subtype = subtype;
    this.parameters = [];
  }

  _createClass(Component, [{
    key: "addParameter",
    value: function addParameter(param) {
      if (!(type instanceof _parameter.default)) {
        throw new Error('Type of parameter must be media, currency or date time');
      }

      this.parameters.push(param);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          subtype = this.subtype,
          parameters = this.parameters;
      return {
        type: type,
        subtype: subtype,
        parameters: parameters
      };
    }
  }]);

  return Component;
}();

var _default = Component;
exports.default = _default;