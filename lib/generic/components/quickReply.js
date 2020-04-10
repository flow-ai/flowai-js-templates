"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("./param");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuickReply =
/*#__PURE__*/
function () {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (text, location, user_email, user_phone_number, event)
   * @param {string} opts.value - Required, ignored if type is location
   * @param {Param|Param[]} opts.param - Optional Param or array or Array of Params related to this QuickReply
   **/
  function QuickReply(_ref) {
    var label = _ref.label,
        type = _ref.type,
        value = _ref.value,
        param = _ref.param,
        params = _ref.params;

    _classCallCheck(this, QuickReply);

    if (type === 'text' && (typeof label !== 'string' || !label.length)) {
      throw new Error('QuickReply label when it has the type text must be as string');
    }

    if (value && typeof value !== 'string') {
      throw new Error('QuickReply value must be as string');
    }

    if (typeof type !== 'string' || type.length === 0) {
      this.type = 'text';
    } else {
      this.type = type;
    }

    this.params = (0, _param.parseParam)(param || params);
    this.value = value || label;
    this.label = label;
  }

  _createClass(QuickReply, [{
    key: "toJSON",
    value: function toJSON() {
      var label = this.label,
          value = this.value,
          type = this.type,
          params = this.params;
      return {
        label: label,
        value: value,
        type: type,
        params: (0, _param.flattenParams)(params)
      };
    }
  }]);

  return QuickReply;
}();

var _default = QuickReply;
exports.default = _default;