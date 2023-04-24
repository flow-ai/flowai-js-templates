"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("../../base/components/param");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category RBM
 * 
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location or calendar action
 * @property {string} type - Type of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {Base.Param[]} params - Optional parameters associated with the quick reply
 *
 * @example
 * const text = new Text('We have a 40" screen for sale. Want to preorder it?')
 * text.addQuickReply(new QuickReply({
 *   label: '👍',
 *   value: 'Yes'
 * }))
 * text.addQuickReply(new QuickReply({
 *   label: '👎',
 *   value: 'No'
 * }))
 **/
var QuickReply = /*#__PURE__*/function () {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (text, location, user_email, user_phone_number, event, flow, step)
   * @param {string} opts.value - Required, ignored if type is location or calendar action (not for calendar action)
   * @param {boolean} opts.auto - Optional, flag for auto reply
   * @param {string} opts.stepId - Optional, step link for auto reply
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this QuickReply
   **/
  function QuickReply(_ref) {
    var label = _ref.label,
        type = _ref.type,
        value = _ref.value,
        param = _ref.param,
        params = _ref.params,
        auto = _ref.auto,
        stepId = _ref.stepId,
        title = _ref.title,
        description = _ref.description,
        startTime = _ref.startTime,
        endTime = _ref.endTime,
        timezone = _ref.timezone;

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

    if (auto && stepId) {
      this.auto = auto;
      this.stepId = stepId;
    }

    this.params = (0, _param.parseParam)(param || params);
    this.value = value || label;
    this.label = label;
    this.title = title;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.timezone = timezone;
  }

  _createClass(QuickReply, [{
    key: "toJSON",
    value: function toJSON() {
      var label = this.label,
          value = this.value,
          type = this.type,
          auto = this.auto,
          stepId = this.stepId,
          title = this.title,
          description = this.description,
          startTime = this.startTime,
          endTime = this.endTime,
          timezone = this.timezone,
          params = this.params;
      return _objectSpread({
        label: label,
        value: value,
        type: type,
        title: title,
        description: description,
        startTime: startTime,
        endTime: endTime,
        timezone: timezone,
        params: (0, _param.flattenParams)(params)
      }, auto && stepId ? {
        auto: auto,
        stepId: stepId
      } : {});
    }
  }]);

  return QuickReply;
}();

var _default = QuickReply;
exports.default = _default;