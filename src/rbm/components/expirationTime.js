/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of expiration either specific_date or ttl
 * @property {string} expireTime - The specific date time
 * @property {string} ttl - The ttl
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
  constructor({ type, expireTime, ttl }) {
    this.type = type
    this.expireTime = expireTime
    this.ttl = ttl
  }

  toJSON() {
    const {
      type,
      expireTime,
      ttl
    } = this

    return {
      type,
      expireTime,
      ttl
    }
  }
}

export default ExpirationTime
