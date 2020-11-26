"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("../../base/components/param");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Default action used in {@link Card}, {@link List} and {@link Buttons} templates
 * 
 * @category Components
 * 
 * @property {string} type - Type of action (url, phone, postback, share, login, webview, event)
 * @property {string} value - Value of the action
 * @property {Base.Param[]} params - Optional parameters associated with the action
 **/
var Action = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.value - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this action
   * @example
   * const image = new Image({
   *   ...
   *   action: new Action({
   *     type: 'url',
   *     value: 'https://...'
   *   })
   * })
   **/
  function Action(_ref) {
    var type = _ref.type,
        value = _ref.value,
        param = _ref.param;

    _classCallCheck(this, Action);

    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Action value is mandatory');
    }

    this.value = value;

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Action type is mandatory');
    }

    this.type = type;
    this.params = (0, _param.parseParam)(param);
  }

  _createClass(Action, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          value = this.value,
          params = this.params;
      return {
        type: type,
        value: value,
        params: (0, _param.flattenParams)(params)
      };
    }
  }]);

  return Action;
}();

var _default = Action;
exports.default = _default;