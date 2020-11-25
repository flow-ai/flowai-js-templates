"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _interactiveMessage = _interopRequireDefault(require("../components/interactiveMessage"));

var _eventItem = _interopRequireDefault(require("../components/eventItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Allow the customer to schedule an appointment
 * 
 * @memberof Apple
 * @category TimePicker
 * 
 * @property {EventItem} event - Required. Represents the event to pick a time for
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the TimePicker window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * 
 * @example
 * const timePicker = new Apple.TimePicker({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Schedule an Appointment",
 *     subtitle: "We'll see you there!",
 *     style: "icon"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Your Appointment",
 *     style: "icon"
 *   }),
 *   event: new Apple.EventItem({
 *     title: "Some event",
 *     location: new Apple.LocationItem({
 *       latitude: 37.7725,
 *       longitude: -122.4311,
 *       radius: 100,
 *       title: "Some venue"
 *     }),
 *     timeslots: [
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T08:27:55+00:00"
 *       }),
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T09:27:55+00:00"
 *       }),
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T10:27:55+00:00"
 *       })
 *     ],
 *     timezoneOffset: 2
 *   })
 * })
 **/
var TimePicker = /*#__PURE__*/function (_Template) {
  _inherits(TimePicker, _Template);

  var _super = _createSuper(TimePicker);

  /**
  * @param {object} opts - Collection of options
  * @param {EventItem} opts.event - Represents the event to pick a time for
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the TimePicker window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
  **/
  function TimePicker(opts) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a TimePicker you need to provide at least a title");
    }

    var replyMessage = opts.replyMessage,
        receivedMessage = opts.receivedMessage,
        event = opts.event;

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("TimePicker requires a replyMessage of the type InteractiveMessage");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("TimePicker requires a receivedMessage of the type InteractiveMessage");
    }

    if (!(event instanceof _eventItem.default)) {
      throw new Error("TimePicker requires a event of the type EventItem");
    }

    _this.replyMessage = replyMessage;
    _this.receivedMessage = receivedMessage;
    _this.event = event;
    return _this;
  }

  _createClass(TimePicker, [{
    key: "toJSON",
    value: function toJSON() {
      var replyMessage = this.replyMessage,
          receivedMessage = this.receivedMessage,
          event = this.event,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_time_picker',
        payload: {
          replyMessage: replyMessage,
          receivedMessage: receivedMessage,
          event: event
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return TimePicker;
}(_template.default);

var _default = TimePicker;
exports.default = _default;