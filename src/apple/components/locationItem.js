/**
 * Component that represents a location inside a {@link TimePicker}
 * 
 * @memberof Apple
 * @category TimePicker
 * 
 * @property {float} latitude - A double representing the latitude of the location
 * @property {float} longitude - A double representing the longitude of the location
 * @property {float} radius - A double representing the location radius, in meters. Business Chat ignores this field when latitude and longitude are missing or empty.
 * @property {string} title - Required title
 **/
class LocationItem {
  /**
   * @param {object} opts - Collection of options
   * @param {float} opts.latitude - Latitude of the location
   * @param {float} opts.longitude - Longitude of the location
   * @param {float} opts.radius - A double representing the location radius in meters
   * @param {string} opts.title - Required title
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a LocationItem you at least need a title")
    }

    const {
      latitude,
      longitude,
      radius,
      title
    } = opts

    if(typeof latitude !== "undefined") {
      const parsedValue = parseFloat(latitude)
      if(isNaN(parsedValue)) {
        throw new Error("Provided latitude must be a float")
      }
      this.latitude = parsedValue 
    }

    if(typeof longitude !== "undefined") {
      const parsedValue = parseFloat(longitude)
      if(isNaN(parsedValue)) {
        throw new Error("Provided longitude must be a float")
      }
      this.longitude = parsedValue 
    }

    if(typeof radius !== "undefined") {
      const parsedValue = parseFloat(radius)
      if(isNaN(parsedValue)) {
        throw new Error("Provided radius must be a float")
      }
      this.radius = parsedValue 
    }

    if(typeof title !== "string") {
      throw new Error("LocationItem title is required")
    }

    if(!title.length) {
      throw new Error("Provided LocationItem title is empty")
    }

    this.title = title || undefined
  }

  toJSON() {
    const {
      latitude,
      longitude,
      radius,
      style,
      title,
      subtitle
    } = this

    return {
      latitude,
      longitude,
      radius,
      style,
      title,
      subtitle
    }
  }
}

export default LocationItem