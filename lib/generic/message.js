"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _message = _interopRequireDefault(require("../base/message"));

var _text = _interopRequireDefault(require("./templates/text"));

var _quickReply = _interopRequireDefault(require("./components/quickReply"));

var _suggestedAction = _interopRequireDefault(require("../rbm/components/suggestedAction"));

var _expirationTime = _interopRequireDefault(require("../rbm/components/expirationTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Inherits from {@link Base.Message}.
 * 
 * @category Message
 * 
 * @example
 * // Create a message with quick replies
 * const message = new Message("Want a cold beverage?")
 *  .addQuickReply(new QuickReply({
 *    label: 'Yes'
 *  }))
 *  .addQuickReply(new QuickReply({
 *    label: 'No'
 *  }))
 **/
var Message = /*#__PURE__*/function (_BaseMessage) {
  _inherits(Message, _BaseMessage);

  var _super = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super.apply(this, arguments);
  }

  _createClass(Message, [{
    key: "addQuickReply",
    value:
    /**
     * A convenience method to add a quick reply to the last response template of a Message
     * 
     * @param {QuickReply} quickReply - Required
     *
     * @example
     * const message = new Message("Want a cold beverage?")
     *  .addQuickReply(new QuickReply({
     *    label: 'Yes'
     *  }))
     *  .addQuickReply(new QuickReply({
     *    label: 'No'
     *  }))
     **/
    function addQuickReply(quickReply) {
      if (!(quickReply instanceof _quickReply.default)) {
        throw new Error('addQuickReply argument must be an instance of a QuickReply');
      }

      var fallback = this.fallback;
      var isFallbackArray = Array.isArray(fallback);

      if (!Array.isArray(this.responses) || !this.responses.length) {
        this.responses = isFallbackArray ? fallback.map(function (text) {
          return new _text.default(text);
        }) : [new _text.default(fallback)];
      }

      this.responses[this.responses.length - 1].addQuickReply(quickReply);
      return this;
    }
    /**
     * A convenience method to add a Suggested Action to the last response template of a Message
     * 
     * @param {SuggestedAction} suggestedAction - Required
     * 
     * @example
     * const message = new Message("Put on some music please!")
     *  .addSuggestedAction(new SuggestedAction({
     *    "label": "test with code action",
     *    "type": "calendar_action",
     *    "title": "Party at Imran's",
     *    "description": "party tonight",
     *    "startTime": "2023-04-27T23:30",
     *    "endTime": "2023-04-28T04:30",
     *    "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
     *  }))
     *
     **/

  }, {
    key: "addSuggestedAction",
    value: function addSuggestedAction(suggestedAction) {
      if (!(suggestedAction instanceof _suggestedAction.default)) {
        throw new Error('addSuggestedAction argument must be an instance of Suggested Action');
      }

      var fallback = this.fallback;
      var isFallbackArray = Array.isArray(fallback);

      if (!Array.isArray(this.responses) || !this.responses.length) {
        this.responses = isFallbackArray ? fallback.map(function (text) {
          return new _text.default(text);
        }) : [new _text.default(fallback)];
      }

      this.responses[this.responses.length - 1].addSuggestedAction(suggestedAction);
      return this;
    }
    /**
     * A convenience method to add Expiration time to the last response template of a RBM Message
     * 
     * @param {ExpirationTime} expirationTime - Required
     * 
     * @example
     * const message = new Message("Put on some music please!")
     *  .addSuggestedAction(new SuggestedAction({
     *    "label": "test with code action",
     *    "type": "calendar_action",
     *    "title": "Party at Imran's",
     *    "description": "party tonight",
     *    "startTime": "2023-04-27T23:30",
     *    "endTime": "2023-04-28T04:30",
     *    "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
     *  }))
     *
     **/

  }, {
    key: "addExpirationTime",
    value: function addExpirationTime(expirationTime) {
      if (!(expirationTime instanceof _expirationTime.default)) {
        throw new Error('addExpirationTime argument must be an instance of a ExpirationTime');
      }

      var fallback = this.fallback;
      var isFallbackArray = Array.isArray(fallback);

      if (!Array.isArray(this.responses) || !this.responses.length) {
        this.responses = isFallbackArray ? fallback.map(function (text) {
          return new _text.default(text);
        }) : [new _text.default(fallback)];
      }

      this.responses[this.responses.length - 1].addExpirationTime(expirationTime);
      return this;
    }
  }]);

  return Message;
}(_message.default);

var _default = Message;
exports.default = _default;