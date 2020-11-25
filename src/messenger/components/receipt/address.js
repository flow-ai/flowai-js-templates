/**
 * Component used in {@link Receipt} templates
 * 
 * @memberof Messenger
 * @category Components
 * 
 * @property {string} street1 - Required, the street address, line 1.
 * @property {string} street2 - Optional, the street address, line 2.
 * @property {string} city - Required, the city name of the address.
 * @property {string} postalCode - Required, the postal code of the address.
 * @property {string} state - Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
 * @property {string} country - Required, the two-letter country abbreviation of the address.
 * 
 * @example
 * const address = new Messenger.ReceiptAddress({
 *   street1: "1 Hacker Way",
 *   street2: "2nd floor",
 *   city: "Menlo Park",
 *   postalCode: "94025",
 *   state: "CA",
 *   country: "US"
 * })
 **/
class ReceiptAddress {

  /**
   * The shipping address of an order
   *
   * @param {object} opts - Required properties
   * @param {string} opts.street1 - Required, the street address, line 1.
   * @param {string} opts.street2 - Optional, the street address, line 2.
   * @param {string} opts.city - Required, the city name of the address.
   * @param {string} opts.postalCode - Required, the postal code of the address.
   * @param {string} opts.state - Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
   * @param {string} opts.country - Required, the two-letter country abbreviation of the address.
   **/
  constructor(opts = {}) {

    const {
      street1,
      street2,
      city,
      postalCode,
      state,
      country
    } = opts

    if(typeof street1 !== 'string' || street1.length === 0) {
      throw new Error('ReceiptAddress street1 is mandatory')
    }

    if(typeof city !== 'string' || city.length === 0) {
      throw new Error('ReceiptAddress city is mandatory')
    }

    if(typeof postalCode !== 'string' || postalCode.length === 0) {
      throw new Error('ReceiptAddress postalCode is mandatory')
    }

    if(typeof state !== 'string' || state.length === 0) {
      throw new Error('ReceiptAddress state is mandatory')
    }

    if(typeof country !== 'string' || country.length === 0) {
      throw new Error('ReceiptAddress country is mandatory')
    }

    this.street1 = street1
    this.street2 = street2
    this.city = city
    this.postalCode = postalCode
    this.state = state
    this.country = country
  }

  toJSON() {
    const {
      street1,
      street2,
      city,
      postalCode,
      state,
      country
    } = this

    return {
      street1,
      street2,
      city,
      postalCode,
      state,
      country
    }
  }
}

export default ReceiptAddress
