"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Transferring the chat to an agent
 *
 * @category Generic
 *
 * @property {bool} opts.resetContext - Context reset
 * @property {bool} opts.indefinitePause - Setting a pause for the bot until the chat is closed by the agent
 * @property {number} opts.minutesToPause - The number of minutes for which the bot will stop working
 * @property {number} opts.secondsToPause - The number of seconds for which the bot will stop working
 * @property {bool} opts.setBotToPause - Setting a bot pause
 * @property {string} opts.additionalInfo - Additional info
 * @example
 * const handover = new Handover({
 *    resetContext: true
 *    indefinitePause: true
 *    minutesToPause: 0
 *    secondsToPause: 0
 *    setBotToPause: true
 *    additionalInfo: "Handovered at flow 'foo'"
 * })
 **/
var Handover = /*#__PURE__*/function (_Template) {
  _inherits(Handover, _Template);

  var _super = _createSuper(Handover);

  /**
   * @param {bool} opts.resetContext - Context reset
   * @param {bool} opts.indefinitePause - Setting a pause for the bot until the chat is closed by the agent
   * @param {number} opts.minutesToPause -The number of minutes for which the bot will stop working
   * @param {number} opts.secondsToPause -  The number of seconds for which the bot will stop working
   * @param {bool} opts.setBotToPause - Setting a bot pause: ;
   * @param {string} opts.additionalInfo - Additional info
   **/
  function Handover(opts) {
    var _this;

    _classCallCheck(this, Handover);

    _this = _super.call(this);

    if (_typeof(opts) !== 'object') {
      throw new Error('Options should be a an object');
    }

    var resetContext = opts.resetContext,
        indefinitePause = opts.indefinitePause,
        minutesToPause = opts.minutesToPause,
        secondsToPause = opts.secondsToPause,
        setBotToPause = opts.setBotToPause,
        additionalInfo = opts.additionalInfo;

    if (typeof resetContext !== 'boolean') {
      throw new Error('Reset context should be a boolean');
    }

    _this.resetContext = resetContext;

    if (typeof indefinitePause !== 'boolean') {
      throw new Error('Indefinite pause should be a boolean');
    }

    _this.indefinitePause = indefinitePause;

    if (minutesToPause && typeof minutesToPause !== 'number') {
      throw new Error('Minutes to pause should be a number');
    }

    _this.minutesToPause = minutesToPause;

    if (secondsToPause && typeof secondsToPause !== 'number') {
      throw new Error('Seconds to pause should be a number');
    }

    _this.secondsToPause = secondsToPause;

    if (typeof setBotToPause !== 'boolean') {
      throw new Error('Set bot to pause should be a boolean');
    }

    _this.setBotToPause = setBotToPause;

    if (additionalInfo && typeof additionalInfo !== 'string') {
      throw new Error('Additional info should be a string');
    }

    _this.additionalInfo = additionalInfo;
    return _this;
  }

  _createClass(Handover, [{
    key: "toJSON",
    value: function toJSON() {
      var resetContext = this.resetContext,
          indefinitePause = this.indefinitePause,
          minutesToPause = this.minutesToPause,
          secondsToPause = this.secondsToPause,
          setBotToPause = this.setBotToPause,
          additionalInfo = this.additionalInfo;
      return {
        type: 'handover',
        payload: {
          resetContext: resetContext,
          indefinitePause: indefinitePause,
          minutesToPause: minutesToPause,
          secondsToPause: secondsToPause,
          setBotToPause: setBotToPause,
          additionalInfo: additionalInfo
        }
      };
    }
  }]);

  return Handover;
}(_template.default);

var _default = Handover;
exports.default = _default;