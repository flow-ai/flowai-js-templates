"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Pass a customer's authentication data to a business by using the OAuth protocol
 * 
 * @memberof Apple
 * @category Templates
 * 
 * @property {string} clientSecret - Required. The secret provisioned by the authorization server
 * @property {string} responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
 * @property {string} responseType - Required. Indicates the type of authentication request
 * @property {string[]} scope - Required. Array of scopes that describe the granted access for read and write
 * @property {string} state - Required. Indicates the state of the authentication request
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to start the authentication
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a authentication request, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer authenticates and returns a reply to the business.
 * 
 * @example
 * const authRequest = new Apple.AuthRequest({
 *   responseType: "code",
 *   scope: ["email", "profile"],
 *   state: "security_token",
 *   responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
 *   clientSecret: "client_secret",
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
  * @param {string} opts.clientSecret - Required. The secret provisioned by the authorization server
  * @param {string} opts.responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
  * @param {string} opts.responseType - Required. Indicates the type of authentication request
  * @param {string[]} opts.scope - Required. Array of scopes that describe the granted access for read and write
  * @param {string} opts.state - Required. Indicates the state of the authentication request
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

    var clientSecret = opts.clientSecret,
        responseEncryptionKey = opts.responseEncryptionKey,
        responseType = opts.responseType,
        scope = opts.scope,
        state = opts.state,
        receivedMessage = opts.receivedMessage,
        replyMessage = opts.replyMessage;

    if (Array.isArray(scope)) {
      for (var i = 0; i < scope.length; i++) {
        _this.addScope(scope[i]);
      }
    }

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("AuthRequest requires a replyMessage of the type InteractiveMessage");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("AuthRequest requires a receivedMessage of the type InteractiveMessage");
    }

    if (typeof clientSecret !== "string" || !clientSecret.length) {
      throw new Error("AuthRequest requires a valid clientSecret");
    }

    if (typeof responseEncryptionKey !== "string" || !responseEncryptionKey.length) {
      throw new Error("AuthRequest requires a valid responseEncryptionKey");
    }

    if (typeof responseType !== "string" || !responseType.length) {
      throw new Error("AuthRequest requires a valid responseType");
    }

    if (typeof state !== "string" || !state.length) {
      throw new Error("AuthRequest requires a valid state");
    }

    _this.clientSecret = clientSecret;
    _this.responseEncryptionKey = responseEncryptionKey;
    _this.responseType = responseType;
    _this.state = state;
    _this.receivedMessage = receivedMessage;
    _this.replyMessage = replyMessage;
    return _this;
  }
  /**
  * Add a scope to the list of scopes
  * 
  * @param {string} - scope
  * 
  * @return {AuthRequest}
  **/


  _createClass(AuthRequest, [{
    key: "addScope",
    value: function addScope(scope) {
      if (typeof scope !== "string" || !scope.length) {
        throw new Error('AuthRequest scope must be a valid string');
      }

      if (!this.scope) {
        this.scope = [];
      }

      this.scope.push(scope);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var replyMessage = this.replyMessage,
          receivedMessage = this.receivedMessage,
          clientSecret = this.clientSecret,
          responseEncryptionKey = this.responseEncryptionKey,
          responseType = this.responseType,
          scope = this.scope,
          state = this.state,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_authenticate',
        payload: {
          replyMessage: replyMessage,
          receivedMessage: receivedMessage,
          clientSecret: clientSecret,
          responseEncryptionKey: responseEncryptionKey,
          responseType: responseType,
          scope: scope,
          state: state
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