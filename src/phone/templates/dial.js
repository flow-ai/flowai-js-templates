import Template from '../../generic/templates/template'

/**
 * Dial a number and forward the call
 * 
 * @memberof Phone
 * @category Templates
 * 
 * @property {string} phoneNumber - The number of phoneNumber to delay
 * @example
 * const pause = new Dial(0.2)
 **/
class Dial extends Template {

  /**
   * @param {string} opts.phoneNumber - Required
   **/
  constructor(opts) {
    super()

    let phoneNumber = opts
    if(typeof phoneNumber === 'object') {
      phoneNumber = opts.phoneNumber
    }

    if(typeof phoneNumber !== 'string' || !phoneNumber.length) {
      throw new Error('Phone number is mandatory')
    }

    this.phoneNumber = phoneNumber
  }

  toJSON() {
    const {
      phoneNumber
    } = this

    return {
      type: 'phone_dial',
      payload: {
        phoneNumber
      }
    }
  }
}

export default Dial
