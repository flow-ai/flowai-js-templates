"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateTime = _interopRequireDefault(require("./dateTime"));

var _currency = _interopRequireDefault(require("./currency"));

var _media = _interopRequireDefault(require("./media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parameter = /*#__PURE__*/function () {
  /**
   * @param {Media} opts.type - Required. Can also be Currency || DateTime || string
   **/
  function Parameter(_ref) {
    var type = _ref.type;

    _classCallCheck(this, Parameter);

    if (!(type instanceof _media.default) && !(type instanceof _currency.default) && !(type instanceof _dateTime.default) && !(typeof type !== 'string')) {
      throw new Error('Type of parameter must be media, currency or date time');
    }

    this.type = type;
  }

  _createClass(Parameter, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type;

      if (typeof type === 'string') {
        return {
          type: 'text',
          text: type
        };
      }

      if (type instanceof _media.default) {
        return _defineProperty({
          type: [type.type]
        }, type.type, {
          link: type.url
        });
      }

      return {
        type: type
      };
    }
  }]);

  return Parameter;
}();

var _default = Parameter;
exports.default = _default;