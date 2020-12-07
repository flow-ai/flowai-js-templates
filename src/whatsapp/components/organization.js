/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} company - Optional, name of the contact's company
 * @property {string} department - Optional, department name of a contact
 * @property {string} title - Optional, contact's business title
 * 
 * @example
 * const organization = new WhatsApp.Organization({
 *   company: "WhatsApp",
 *   department: "Design",
 *   title: "Manager"
 * })
 * 
 * @example
 * // Shorthand
 * const organization = new WhatsApp.Organization("WhatsApp")
 **/
class Organization {

  /**
   * Contact organization information
   *
   * @param {object|string} opts - Optional properties, or company name for shorthand
   * @param {string} opts.company - Optional, name of the contact's company
   * @param {string} opts.department - Optional, department name of a contact
   * @param {string} opts.title - Optional, contact's business title
   **/
  constructor(opts) {

    let company
    if(typeof opts === 'string') {
      company = opts
    } else {
      company = opts.company

      const {
        department,
        title
      } = opts

      if(typeof department === 'string' && department.length === 0) {
        throw new Error('Organization department name must be a valid string')
      }
      this.department = department

      if(typeof title === 'string' && title.length === 0) {
        throw new Error('Organization title must be a valid string')
      }
      this.title = title
    }
    
    if(typeof company !== 'string' || company.length === 0) {
      throw new Error(`Organization company name ${company} must be a valid string`)
    }

    this.company = company
  }

  toJSON() {
    const {
      company,
      department,
      title
    } = this

    return {
      company,
      department,
      title
    }
  }
}

export default Organization