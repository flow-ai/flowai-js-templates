/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} type - Optional, type of phone number, must be HOME or WORK
 * @property {string} phone - Required, valid phone number
 * 
 * @example
 * const phone = new WhatsApp.PhoneNumber({
 *   phone: "+1 (940) 555-1234"
 * })
 * 
 * @example
 * // Shorthand
 * const phone = new WhatsApp.PhoneNumber("+1 (940) 555-1234")
 **/
class PhoneNumber {

  /**
   * The phone number of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of phone number, must be HOME or WORK
   * @param {string} opts.phone - Required, valid phone number
   **/
  constructor(opts) {

    let phone
    if(typeof opts === 'string') {
      phone = opts
    } else {
      const {
        type
      } = opts

      phone = opts.phone

      if(typeof type === 'string' && PhoneNumber.Types.indexOf(type) === -1) {
        throw new Error('PhoneNumber type must be either HOME or WORK')
      }
      this.type = type
    }
    
    if(typeof phone !== 'string' || phone.length === 0) {
      throw new Error(`PhoneNumber ${phone} must be a valid phone number`)
    }

    this.phone = phone
  }

  toJSON() {
    const {
      type,
      phone
    } = this

    return {
      type,
      phone
    }
  }
}

PhoneNumber.Types = [
  'HOME',
  'WORK'
]

export default PhoneNumber
