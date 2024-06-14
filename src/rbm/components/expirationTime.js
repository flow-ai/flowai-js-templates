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
class ExpirationTime {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.expireTime
   * @param {string} opts.ttl
   **/
  constructor({ type, expireTime, ttl, expireSuccessTriggerType, expireSuccessTriggerValue, expireFailTriggerType, expireFailTriggerValue }) {
    this.type = type
    this.expireTime = expireTime
    this.ttl = ttl
    this.expireSuccessTriggerType = expireSuccessTriggerType,
    this.expireSuccessTriggerValue = expireSuccessTriggerValue,
    this.expireFailTriggerType = expireFailTriggerType,
    this.expireFailTriggerValue = expireFailTriggerValue
  }

  toJSON() {
    const {
      type,
      expireTime,
      ttl,
      expireSuccessTriggerType,
      expireSuccessTriggerValue,
      expireFailTriggerType,
      expireFailTriggerValue
    } = this

    return {
      type,
      expireTime,
      ttl,
      expireSuccessTriggerType,
      expireSuccessTriggerValue,
      expireFailTriggerType,
      expireFailTriggerValue
    }
  }
}

export default ExpirationTime
