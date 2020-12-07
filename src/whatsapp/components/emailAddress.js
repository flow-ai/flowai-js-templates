/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} type - Optional, type of email address, must be HOME or WORK
 * @property {string} email - Required, valid email address
 * 
 * @example
 * const email = new WhatsApp.EmailAddress({
 *   email: "email@some.fake.org"
 * })
 * 
 * @example
 * // Shorthand
 * const email = new WhatsApp.EmailAddress("email@some.fake.org")
 **/
class EmailAddress {

  /**
   * The email address of as contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of email address, must be HOME or WORK
   * @param {string} opts.email - Required, valid email address
   **/
  constructor(opts) {

    let email
    if(typeof opts === 'string') {
      email = opts
    } else {
      const {
        type
      } = opts

      email = opts.email

      if(typeof type === 'string' && EmailAddress.Types.indexOf(type) === -1) {
        throw new Error('EmailAddress type must be either HOME or WORK')
      }
      this.type = type
    }
    
    if(typeof email !== 'string' || email.length === 0) {
      throw new Error(`EmailAddress email ${email} must be a valid email address`)
    }

    this.email = email
  }

  toJSON() {
    const {
      type,
      email
    } = this

    return {
      type,
      email
    }
  }
}

EmailAddress.Types = [
  'HOME',
  'WORK'
]

export default EmailAddress
