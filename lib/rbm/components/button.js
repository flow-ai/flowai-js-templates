"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nanoid = require("nanoid");

var _param = require("../../base/components/param");

var _buttonTrigger = _interopRequireDefault(require("../../generic/components/buttonTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Render a button inside {@link Card} or {@link Buttons} templates. Unlike {@link QuickReply} templates, by default a button will remain on the screen even after a user presses them.
 * 
 * @category RBM
 * 
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event, flow, step)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 * @property {Base.Param[]} params - Optional parameters associated with the button
 * @example
 * new Button({
 *  type: 'webview',
 *  label: 'More info'
 *  value: 'https://...',
 *  trigger: new ButtonTrigger({
 *    type: 'event',
 *    value: 'event-to-trigger'
 *  })
 * })
 **/
var Button = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event, flow, step)
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value) (not for calendar action)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.id - Optional, id of the button. If not passed will be automatically generated
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {ButtonTrigger} opts.trigger - Optional
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  function Button(_ref) {
    var type = _ref.type,
        label = _ref.label,
        value = _ref.value,
        param = _ref.param,
        newTab = _ref.newTab,
        params = _ref.params,
        id = _ref.id,
        title = _ref.title,
        description = _ref.description,
        startTime = _ref.startTime,
        endTime = _ref.endTime,
        timezone = _ref.timezone,
        trigger = _ref.trigger;

    _classCallCheck(this, Button);

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory');
    }

    if (typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory');
    }

    var isTriggerValid = trigger instanceof _buttonTrigger.default && trigger.isValidTrigger();

    if (trigger && !isTriggerValid) {
      throw new Error("Invalid Trigger type ".concat(trigger instanceof _buttonTrigger.default));
    } else if (trigger && isTriggerValid && type !== 'url' && type !== 'phone') {
      throw new Error("Additional Button Triggers are applicable only to Buttons of type 'url' or 'phone', got ".concat(type));
    }

    this.id = id;

    if (!this.id) {
      this.id = "b".concat((0, _nanoid.nanoid)(8));
    }

    this.params = (0, _param.parseParam)(param || params);
    this.type = type;
    this.label = label;
    this.value = value;
    this.title = title;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.timezone = timezone;
    this.newTab = Boolean(newTab);
  }

  _createClass(Button, [{
    key: "addTrigger",
    value: function addTrigger(trigger) {
      var isTriggerValid = trigger instanceof _buttonTrigger.default && trigger.isValidTrigger();

      if (trigger && !isTriggerValid) {
        throw new Error("Invalid Trigger type ".concat(trigger instanceof _buttonTrigger.default));
      } else if (trigger && isTriggerValid && this.type !== 'url' && this.type !== 'phone') {
        throw new Error("Additional Button Triggers are applicable only to Buttons of type 'url' or 'phone', got ".concat(type));
      }

      this.trigger = trigger;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          label = this.label,
          value = this.value,
          newTab = this.newTab,
          title = this.title,
          description = this.description,
          startTime = this.startTime,
          endTime = this.endTime,
          timezone = this.timezone,
          params = this.params,
          id = this.id;
      return {
        type: type,
        label: label,
        value: value,
        newTab: newTab,
        title: title,
        description: description,
        startTime: startTime,
        endTime: endTime,
        timezone: timezone,
        params: (0, _param.flattenParams)(params),
        id: id
      };
    }
  }], [{
    key: "generateId",
    value: function generateId() {
      return "b".concat((0, _nanoid.nanoid)(8));
    }
  }]);

  return Button;
}();

var _default = Button;
exports.default = _default;