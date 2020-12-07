/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} type - Optional, type of website, must be HOME or WORK
 * @property {string} url - Required, valid URL
 * 
 * @example
 * const url = new WhatsApp.WebsiteAddress({
 *   url: "https://www.fake.org"
 * })
 * 
 * @example
 * // Shorthand
 * const url = new WhatsApp.WebsiteAddress("https://www.fake.org")
 **/
class WebsiteAddress {

  /**
   * The website URL of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of website, must be HOME or WORK
   * @param {string} opts.url - Required, valid URL
   **/
  constructor(opts) {

    let url
    if(typeof opts === 'string') {
      url = opts
    } else {
      const {
        type
      } = opts

      url = opts.url

      if(typeof type === 'string' && WebsiteAddress.Types.indexOf(type) === -1) {
        throw new Error('WebsiteAddress type must be either HOME or WORK')
      }
      this.type = type
    }
    
    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`WebsiteAddress url ${url} must be a valid url`)
    }

    this.url = url
  }

  toJSON() {
    const {
      type,
      url
    } = this

    return {
      type,
      url
    }
  }
}

WebsiteAddress.Types = [
  'HOME',
  'WORK'
]

export default WebsiteAddress
