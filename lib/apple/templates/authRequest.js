"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

var _interactiveMessage = _interopRequireDefault(require("../components/interactiveMessage"));

var _oauth = _interopRequireDefault(require("../components/oauth2"));

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
 * Authenticate a customer using the OAuth protocol
 * 
 * @memberof Apple
 * @category Authentication
 * 
 * @property {Oauth2} oauth2 - Required. Oauth2 collection of keys
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to start the authentication
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a authentication request, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer authenticates and returns a reply to the business.
 * 
 * @example
 * const authRequest = new Apple.AuthRequest({
 *   oauth2: new Apple.Oauth2({
 *     responseType: "code",
 *     scope: ["email", "profile"],
 *     state: "security_token",
 *     responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
 *     clientSecret: "client_secret"
 *   }),  
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Sign In to Business Chat Sandbox"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "You are signed in!"
 *   })
 * })
 **/
var AuthRequest = /*#__PURE__*/function (_Template) {
  _inherits(AuthRequest, _Template);

  var _super = _createSuper(AuthRequest);

  /**
  * @param {object} opts - Collection of options
  * @param {Oauth2} opts.oauth2 - Required. Oauth2 collection of keys
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the authentication request window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer authenticated
  **/
  function AuthRequest(opts) {
    var _this;

    _classCallCheck(this, AuthRequest);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create an AuthRequest you need to provide all required options");
    }

    var oauth2 = opts.oauth2,
        receivedMessage = opts.receivedMessage,
        replyMessage = opts.replyMessage;

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("AuthRequest requires a replyMessage of the type InteractiveMessage");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("AuthRequest requires a receivedMessage of the type InteractiveMessage");
    }

    if (!(oauth2 instanceof _oauth.default)) {
      throw new Error("AuthRequest requires a oauth2 property of the type Oauth2");
    }

    _this.oauth2 = oauth2;
    _this.receivedMessage = receivedMessage;
    _this.replyMessage = replyMessage;
    return _this;
  }

  _createClass(AuthRequest, [{
    key: "toJSON",
    value: function toJSON() {
      var replyMessage = this.replyMessage,
          receivedMessage = this.receivedMessage,
          oauth2 = this.oauth2,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_auth_request',
        payload: {
          replyMessage: replyMessage,
          receivedMessage: receivedMessage,
          oauth2: oauth2
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return AuthRequest;
}(_template.default);

var _default = AuthRequest;
exports.default = _default;