/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} formattedName - Required, valid full name of a contact
 * @property {string} firstName - Optional, first name of a contact
 * @property {string} lastName - Optional, last name of a contact
 * @property {string} middleName - Optional, middle name of a contact
 * @property {string} suffix - Optional, name suffix of a contact
 * @property {string} prefix - Optional, name prefix of a contact
 * 
 * @example
 * const name = new WhatsApp.Name({
 *   formattedName: "Jane Doo",
 *   firstName: "Jane",
 *   lastName: "Doo",
 *   middleName: "Van"
 * })
 * 
 * @example
 * // Shorthand
 * const name = new WhatsApp.Name("Jane Doo")
 **/
class Name {

  /**
   * The full name of a contact
   *
   * @param {object|string} opts - Optional properties, or name for shorthand
   * @param {string} opts.formattedName - Required, valid name contact
   * @param {string} opts.firstName - Optional, first name of a contact
   * @param {string} opts.lastName - Optional, last name of a contact
   * @param {string} opts.middleName - Optional, middle name of a contact
   * @param {string} opts.suffix - Optional, name suffix of a contact
   * @param {string} opts.prefix - Optional, name prefix of a contact
   **/
  constructor(opts) {

    let formattedName
    if(typeof opts === 'string') {
      formattedName = opts
    } else {
      formattedName = opts.formattedName

      const {
        firstName,
        lastName,
        middleName,
        suffix,
        prefix
      } = opts

      if(typeof firstName === 'string' && firstName.length === 0) {
        throw new Error('Name first name must be a valid string')
      }
      this.firstName = firstName

      if(typeof lastName === 'string' && lastName.length === 0) {
        throw new Error('Name last name must be a valid string')
      }
      this.lastName = lastName

      if(typeof middleName === 'string' && middleName.length === 0) {
        throw new Error('Name middle name must be a valid string')
      }
      this.middleName = middleName

      if(typeof suffix === 'string' && suffix.length === 0) {
        throw new Error('Name suffix must be a valid string')
      }
      this.suffix = suffix

      if(typeof prefix === 'string' && prefix.length === 0) {
        throw new Error('Name prefix must be a valid string')
      }
      this.prefix = prefix
    }
    
    if(typeof formattedName !== 'string' || formattedName.length === 0) {
      throw new Error(`Name formatted name ${formattedName} must be a valid name`)
    }

    this.formattedName = formattedName
  }

  toJSON() {
    const {
      formattedName,
      firstName,
      lastName,
      middleName,
      suffix,
      prefix
    } = this

    return {
      formattedName,
      firstName,
      lastName,
      middleName,
      suffix,
      prefix
    }
  }
}

export default Name
