"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _interactiveMessage = _interopRequireDefault(require("../components/interactiveMessage"));

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
 * Provide a unique user experience with custom interactive messages
 * 
 * @memberof Apple
 * 
 * @property {string} appIcon - Required. URL to an image representing the app icon of the iMessage extension
 * @property {string} appId - Required. The App Store identifier of the iMessage extension. 
 * @property {string} appName - Required. The name of the iMessage extension
 * @property {string} url - Required. A URL string containing data that the Messages app sends to the iMessage extension
 * @property {bool} useLiveLayout - Required. Determines whether the Messages app should use Live Layout
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the CustomInteractiveData window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * 
 * @example
 * const custom = new Apple.CustomInteractiveData({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Select products",
 *     subtitle: "Fresh and straight from the farm",
 *     style: "small"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Selected products",
 *     style: "small"
 *   }),
 *   appId: "app-store-id",
 *   appName: "Name of the App",
 *   appIcon: "https://source.unsplash.com/random",
 *   useLiveLayout: false,
 *   url: "?data=passed-to-app&data2=more-data-passed-to-app"
 * })
 **/
var CustomInteractiveData = /*#__PURE__*/function (_Template) {
  _inherits(CustomInteractiveData, _Template);

  var _super = _createSuper(CustomInteractiveData);

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.appIcon - Required. URL to an image representing the app icon of the iMessage extension
  * @param {string} opts.appId - Required. The App Store identifier of the iMessage extension. 
  * @param {string} opts.appName - Required. The name of the iMessage extension
  * @param {string} opts.url - Required. A URL string containing data that the Messages app sends to the iMessage extension
  * @param {bool} opts.useLiveLayout - Required. Determines whether the Messages app should use Live Layout
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the CustomInteractiveData window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
  **/
  function CustomInteractiveData(opts) {
    var _this;

    _classCallCheck(this, CustomInteractiveData);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a CustomInteractiveData you need to provide at least a title");
    }

    var replyMessage = opts.replyMessage,
        receivedMessage = opts.receivedMessage,
        appIcon = opts.appIcon,
        appId = opts.appId,
        appName = opts.appName,
        url = opts.url,
        useLiveLayout = opts.useLiveLayout;

    if (typeof appIcon !== "string" || !appIcon.length) {
      throw new Error("CustomInteractiveData requires a valid appIcon");
    }

    if (typeof appId !== "string" || !appId.length) {
      throw new Error("CustomInteractiveData requires a valid appId");
    }

    if (typeof appName !== "string" || !appName.length) {
      throw new Error("CustomInteractiveData requires a valid appName");
    }

    if (typeof url !== "string" || !url.length) {
      throw new Error("CustomInteractiveData requires a valid url");
    }

    if (typeof useLiveLayout !== "boolean") {
      throw new Error("CustomInteractiveData requires a valid boolean value for useLiveLayout");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("CustomInteractiveData requires a receivedMessage of the type InteractiveMessage");
    }

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("CustomInteractiveData requires a replyMessage of the type InteractiveMessage");
    }

    _this.replyMessage = replyMessage;
    _this.receivedMessage = receivedMessage;
    _this.appIcon = appIcon;
    _this.appId = appId;
    _this.appName = appName;
    _this.url = url;
    _this.useLiveLayout = useLiveLayout;
    return _this;
  }

  _createClass(CustomInteractiveData, [{
    key: "toJSON",
    value: function toJSON() {
      var replyMessage = this.replyMessage,
          receivedMessage = this.receivedMessage,
          appIcon = this.appIcon,
          appId = this.appId,
          appName = this.appName,
          url = this.url,
          useLiveLayout = this.useLiveLayout,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_custom_interactive_data',
        payload: {
          replyMessage: replyMessage,
          receivedMessage: receivedMessage,
          appIcon: appIcon,
          appId: appId,
          appName: appName,
          url: url,
          useLiveLayout: useLiveLayout
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return CustomInteractiveData;
}(_template.default);

var _default = CustomInteractiveData;
exports.default = _default;