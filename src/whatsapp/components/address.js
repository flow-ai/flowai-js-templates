/**
 * Component used in a {@link WhatsApp.Contact} component
 * 
 * @memberof WhatsApp
 * @category Components
 * 
 * @property {string} type - Optional, type of address, must be HOME or WORK
 * @property {string} street - Optional, the street address
 * @property {string} city - Optional, the city name of the address.
 * @property {string} zip - Optional, the ZIP code of the address.
 * @property {string} state - Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
 * @property {string} country - Optional, full country name
 * @property {string} countryCode - Optional, the two-letter country abbreviation of the address.
 * 
 * @example
 * const address = new WhatsApp.Address({
 *   street: "1 Hacker Way",
 *   city: "Menlo Park",
 *   zip: "94025",
 *   state: "CA",
 *   country: "United States",
 *   countryCode: "US"
 * })
 **/
class Address {

  /**
   * The address of a contact
   *
   * @param {object} opts - Optional properties
   * @param {string} opts.type - Optional, type of address, must be HOME or WORK
   * @param {string} opts.street - Optional, the street address
   * @param {string} opts.city - Optional, the city name of the address
   * @param {string} opts.zip - Optional, the ZIP code of the address
   * @param {string} opts.state - Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses
   * @param {string} opts.country - Optional, full name of the country
   * @param {string} opts.countryCode - Optional, the two-letter country abbreviation of the address
   **/
  constructor(opts = {}) {

    const {
      type,
      street,
      city,
      zip,
      state,
      country,
      countryCode
    } = opts

    if(Object.keys(opts).length === 0) {
      throw new Error('Address requires at least one valid property like street, city, etc')
    }

    if(typeof type === 'string' && Address.Types.indexOf(type) === -1) {
      throw new Error('Address type must be either HOME or WORK')
    }

    if(typeof street === 'string' && street.length === 0) {
      throw new Error('Address street must be a valid string')
    }

    if(typeof city === 'string' && city.length === 0) {
      throw new Error('Address city must be a valid string')
    }

    if(typeof zip === 'string' && zip.length === 0) {
      throw new Error('Address zip must be a valid string')
    }

    if(typeof state === 'string' && state.length === 0) {
      throw new Error('Address state must be a valid string')
    }

    if(typeof country === 'string' && country.length === 0) {
      throw new Error('Address country code must be a valid string')
    }

    if(typeof countryCode === 'string' && countryCode.length !== 2) {
      throw new Error('Address country code must be a valid 2 letter country code')
    }

    this.type = type
    this.street = street
    this.city = city
    this.zip = zip
    this.state = state
    this.country = country
    this.countryCode = countryCode
  }

  toJSON() {
    const {
      type,
      street,
      city,
      zip,
      state,
      country,
      countryCode
    } = this

    return {
      type,
      street,
      city,
      zip,
      state,
      country,
      countryCode
    }
  }
}

Address.Types = [
  'HOME',
  'WORK'
]

export default Address
