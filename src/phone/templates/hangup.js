import Template from '../../generic/templates/template'

/**
 * Disconnect
 * 
 * @memberof Phone
 * @category Templates
 * 
 * @example
 * const hangup = new Phone.Hangup()
 */
class Hangup extends Template {

  /**
   * Disconnect a phone call
   **/
  constructor() {
    super()
  }

  toJSON() {
    return {
      type: 'phone_hangup',
      payload: {}
    }
  }
}

export default Hangup
