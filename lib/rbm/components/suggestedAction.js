"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _param = require("../../base/components/param");

var _quickReply = _interopRequireDefault(require("../../generic/components/quickReply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category RBM
 * 
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location or calendar action
 * @property {string} type - Type of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {string} quickReplyId - Id of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {Base.Param[]} params - Optional parameters associated with the quick reply
 * @property {Base.Param[]} tags - Optional tags associated with the quick reply
 *
 * @example
 * const text = new Text('We have a 40" screen for sale. Want to preorder it?')
 * text.addSuggestedAction(new SuggestedAction({
 *    "label": "test with code action",
 *    "type": "calendar_action",
 *    "title": "Party at Imran's",
 *    "description": "party tonight",
 *    "startTime": "2023-04-27T23:30",
 *    "endTime": "2023-04-28T04:30",
 *    "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
 * }))
 **/
var SuggestedAction = /*#__PURE__*/function (_QuickReply) {
  _inherits(SuggestedAction, _QuickReply);

  var _super = _createSuper(SuggestedAction);

  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (text, location, user_email, user_phone_number, event, flow, step)
   * @param {string} opts.value - Required, ignored if type is location or calendar action (not for calendar action)
   * @param {string} opts.quickReplyId - Required
   * @param {boolean} opts.auto - Optional, flag for auto reply
   * @param {string} opts.stepId - Optional, step link for auto reply
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this QuickReply
   * @param {Base.Param|Base.Param[]} opts.tags - Optional Tags or array or Array of Tags related to this QuickReply 
   **/
  function SuggestedAction(_ref) {
    var _this;

    var label = _ref.label,
        type = _ref.type,
        value = _ref.value,
        param = _ref.param,
        params = _ref.params,
        tags = _ref.tags,
        auto = _ref.auto,
        stepId = _ref.stepId,
        title = _ref.title,
        description = _ref.description,
        startTime = _ref.startTime,
        endTime = _ref.endTime,
        timezone = _ref.timezone;

    _classCallCheck(this, SuggestedAction);

    _this = _super.call(this, {
      label: label,
      type: type,
      value: value,
      param: param,
      params: params,
      tags: tags,
      auto: auto,
      stepId: stepId
    });

    if (type === 'text' && (typeof label !== 'string' || !label.length)) {
      throw new Error('QuickReply label when it has the type text must be as string');
    }

    if (value && typeof value !== 'string') {
      throw new Error('QuickReply value must be as string');
    }

    if (typeof type !== 'string' || type.length === 0) {
      _this.type = 'text';
    } else {
      _this.type = type;
    }

    if (auto && stepId) {
      _this.auto = auto;
      _this.stepId = stepId;
    }

    _this.params = (0, _param.parseParam)(param || params);
    _this.tags = (0, _param.parseParam)(tags);
    _this.value = value || label;
    _this.label = label;
    _this.title = title;
    _this.description = description;
    _this.startTime = startTime;
    _this.endTime = endTime;
    _this.timezone = timezone;
    return _this;
  }

  _createClass(SuggestedAction, [{
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
          params = this.params,
          tags = this.tags;
      return _objectSpread({
        label: label,
        value: value,
        type: type,
        title: title,
        description: description,
        startTime: startTime,
        endTime: endTime,
        timezone: timezone,
        params: (0, _param.flattenParams)(params),
        tags: (0, _param.flattenParams)(tags)
      }, auto && stepId ? {
        auto: auto,
        stepId: stepId
      } : {});
    }
  }]);

  return SuggestedAction;
}(_quickReply.default);

var _default = SuggestedAction;
exports.default = _default;