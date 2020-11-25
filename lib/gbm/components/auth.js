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
 * The Authentication request suggestion prompts users to sign in to an OAuth 2.0-compliant application, passing authentication codes to confirm account data and enabling customized user experiences and detailed conversation flows. 
 * 
 * @memberof GBM
 * 
 * @category Authentication
 * 
 * @property {string} clientId - Required. The ID of the application that asks for authorization.
 * @property {string} codeChallenge - Required. Required. The code challenge used to exchange access tokens.
 * @property {string[]} scopes - Required. An array that specifies the scopes of the request.
 * 
 * @example
 * const suggestion = new GBM.Suggestion({
 *   type: 'auth',
 *   value: new GBM.Auth({
 *     clientId: 'CLIENT_ID',
 *     codeChallenge: 'CODE_CHALLENGE',
 *     scopes: ['SCOPE']
 *   })
 * })
 **/
var Auth = /*#__PURE__*/function () {
  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.clientId - Required. The ID of the application that asks for authorization.
  * @param {string} opts.codeChallenge - Required. Required. The code challenge used to exchange access tokens.
  * @param {string[]} opts.scopes - Required. An array that specifies the scopes of the request.
  **/
  function Auth(opts) {
    _classCallCheck(this, Auth);

    if (_typeof(opts) !== "object") {
      throw new Error("To create an Auth request you need to provide all required options");
    }

    var clientId = opts.clientId,
        codeChallenge = opts.codeChallenge,
        scopes = opts.scopes;

    if (Array.isArray(scopes)) {
      for (var i = 0; i < scopes.length; i++) {
        this.addScope(scopes[i]);
      }
    }

    if (typeof clientId !== "string" || !clientId.length) {
      throw new Error("Auth request requires a valid clientId");
    }

    if (typeof codeChallenge !== "string" || !codeChallenge.length) {
      throw new Error("Auth request requires a valid codeChallenge");
    }

    this.clientId = clientId;
    this.codeChallenge = codeChallenge;
  }
  /**
  * Add a scopes to the list of scopes
  * 
  * @param {string} - scopes
  * 
  * @return {Auth}
  **/


  _createClass(Auth, [{
    key: "addScope",
    value: function addScope(scopes) {
      if (typeof scopes !== "string" || !scopes.length) {
        throw new Error('Auth request scopes must be a valid string');
      }

      if (!this.scopes) {
        this.scopes = [];
      }

      this.scopes.push(scopes);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var clientId = this.clientId,
          codeChallenge = this.codeChallenge,
          scopes = this.scopes;
      return {
        clientId: clientId,
        codeChallenge: codeChallenge,
        scopes: scopes
      };
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports.default = _default;