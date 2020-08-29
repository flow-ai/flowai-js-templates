"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Keys for the OAuth2 authentication request used with a {@link AuthRequest}
 * 
 * @memberof Apple
 * @category Authentication
 * 
 * @property {string} clientSecret - Required. The secret provisioned by the authorization server
 * @property {string} responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
 * @property {string} responseType - Required. Indicates the type of authentication request
 * @property {string[]} scope - Required. Array of scopes that describe the granted access for read and write
 * @property {string} state - Required. Indicates the state of the authentication request
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
var Oauth2 = /*#__PURE__*/function () {
  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.clientSecret - Required. The secret provisioned by the authorization server
  * @param {string} opts.responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
  * @param {string} opts.responseType - Required. Indicates the type of authentication request
  * @param {string[]} opts.scope - Required. Array of scopes that describe the granted access for read and write
  * @param {string} opts.state - Required. Indicates the state of the authentication request
  **/
  function Oauth2(opts) {
    _classCallCheck(this, Oauth2);

    if (_typeof(opts) !== "object") {
      throw new Error("To create an AuthRequest you need to provide all required options");
    }

    var clientSecret = opts.clientSecret,
        responseEncryptionKey = opts.responseEncryptionKey,
        responseType = opts.responseType,
        scope = opts.scope,
        state = opts.state;

    if (Array.isArray(scope)) {
      for (var i = 0; i < scope.length; i++) {
        this.addScope(scope[i]);
      }
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

    this.clientSecret = clientSecret;
    this.responseEncryptionKey = responseEncryptionKey;
    this.responseType = responseType;
    this.state = state;
  }
  /**
  * Add a scope to the list of scopes
  * 
  * @param {string} - scope
  * 
  * @return {AuthRequest}
  **/


  _createClass(Oauth2, [{
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
      var clientSecret = this.clientSecret,
          responseEncryptionKey = this.responseEncryptionKey,
          responseType = this.responseType,
          scope = this.scope,
          state = this.state;
      return {
        clientSecret: clientSecret,
        responseEncryptionKey: responseEncryptionKey,
        responseType: responseType,
        scope: scope,
        state: state
      };
    }
  }]);

  return Oauth2;
}();

var _default = Oauth2;
exports.default = _default;