import Template from '../../base/templates/template'

/**
 * Send or display a location on a map to a user
 * 
 * @alias WhatsApp.Location
 * 
 * @memberof WhatsApp
 * @category Templates
 * 
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {string} name - Name of the location
 * @property {string} address - Address of the location. Only displayed if name is present.
 * @example
 * const location = new WhatsApp.Location({
 *   lat: "37.331860",
 *   long: "-122.030248",
 *   name: "HQ",
 *   address: "Infinite Loop 1"
 * })
 **/
class Location extends Template {

  /**
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.name - Optional
   * @param {string} opts.address - Optional 
   **/
  constructor( { lat, long, name, address }) {
    super()

    if(typeof name === 'string' && !name.length) {
      throw new Error('Location name must be a valid string')
    }

    this.name = name

    if(typeof address === 'string' && !address.length) {
      throw new Error('Location address must be a valid string')
    }

    this.address = address

    if(!lat) {
      throw new Error('Location latitude is mandatory')
    }

    this.lat = lat

    if(!long) {
      throw new Error('Location longitude is mandatory')
    }

    this.long = long
  }


  toJSON() {
    const {
      lat,
      long,
      name,
      address,
      fallback
    } = this

    return {
      type: 'whatsapp_location',
      payload: {
        lat,
        long,
        name,
        address
      },
      fallback
    }
  }
}

export default Location
