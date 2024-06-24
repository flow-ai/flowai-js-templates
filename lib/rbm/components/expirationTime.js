"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of expiration either specific_date or ttl
 * @property {string} expireTime - The specific date time
 * @property {string} ttl - The ttl
 * @property {string} expireSuccessTriggerType - The trigger type which is triggered for server event TTL_EXPIRATION_REVOKED
 * @property {string} expireSuccessTriggerValue - The trigger value which is triggered for server event TTL_EXPIRATION_REVOKED
 * @property {string} expireFailTriggerType - The trigger type which is triggered for server event TTL_EXPIRATION_REVOKED_FAILED
 * @property {string} expireFailTriggerValue - The trigger value which is triggered for server event TTL_EXPIRATION_REVOKED_FAILED
 * @example
 * const text = new Text('We have a 40" screen for sale. Want to preorder it?')
 * text.addExpiration(new Expiration({
 *   type: 'ttl',
 *   ttl: '4s'
 * }))
* text.addExpiration(new Expiration({
 *   type: 'specific_date',
 *   expireTime: '2014-10-02T15:01:23Z'
 * }))
 **/
var ExpirationTime = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.expireTime
   * @param {string} opts.ttl
   **/
  function ExpirationTime(_ref) {
    var type = _ref.type,
        expireTime = _ref.expireTime,
        ttl = _ref.ttl,
        expireSuccessTriggerType = _ref.expireSuccessTriggerType,
        expireSuccessTriggerValue = _ref.expireSuccessTriggerValue,
        expireFailTriggerType = _ref.expireFailTriggerType,
        expireFailTriggerValue = _ref.expireFailTriggerValue;

    _classCallCheck(this, ExpirationTime);

    this.type = type;
    this.expireTime = expireTime;
    this.ttl = ttl;
    this.expireSuccessTriggerType = expireSuccessTriggerType, this.expireSuccessTriggerValue = expireSuccessTriggerValue, this.expireFailTriggerType = expireFailTriggerType, this.expireFailTriggerValue = expireFailTriggerValue;
  }

  _createClass(ExpirationTime, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          expireTime = this.expireTime,
          ttl = this.ttl,
          expireSuccessTriggerType = this.expireSuccessTriggerType,
          expireSuccessTriggerValue = this.expireSuccessTriggerValue,
          expireFailTriggerType = this.expireFailTriggerType,
          expireFailTriggerValue = this.expireFailTriggerValue;
      return {
        type: type,
        expireTime: expireTime,
        ttl: ttl,
        expireSuccessTriggerType: expireSuccessTriggerType,
        expireSuccessTriggerValue: expireSuccessTriggerValue,
        expireFailTriggerType: expireFailTriggerType,
        expireFailTriggerValue: expireFailTriggerValue
      };
    }
  }]);

  return ExpirationTime;
}();

var _default = ExpirationTime;
exports.default = _default;