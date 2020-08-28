/**
 * Component that represents an item inside a TimeSection
 * 
 * @memberof Apple
 * @category Components
 * 
 * @property {string} identifier - Field identifying the item
 * @property {float} duration - An integer representing the duration of the time slot, in seconds
 * @property {string} startTime - A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2017-05-26T08:27:55+00:00, 2017-05-26T08:27:55+0000, or 2017-05-26T08:27:55Z. The timezoneOffset, from the EventItem dictionary, determines whether the startTime is in a specific time zone or in the customer's current time zone
 **/
class TimeItem {
  /**
   * @param {object} opts - Collection of options
   * @param {float} opts.duration - Required duration of the time slot, in seconds
   * @param {string} opts.identifier - Optional Unique identifier
   * @param {string} opts.startTime - Required UTC date string
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a TimeItem you at least need a startTime")
    }

    const {
      duration,
      identifier,
      startTime
    } = opts

    const parsedDuration = parseInt(duration)
    if(isNaN(parsedDuration) || parsedDuration < 0) {
      throw new Error("Provided TimeItem duration must be a positive number")
    }
    this.duration = parsedDuration 

    if(typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided TimeItem identifier must be unique string")
    }

    if(typeof startTime !== "string" && !(startTime instanceof Date)) {
      throw new Error("TimeItem startTime is required and must be a valid UTC date time")
    }

    if(startTime instanceof Date) {
      this.startTime = startTime.toISOString()
    } else {
      this.startTime = startTime
    }
  }

  toJSON() {
    const {
      latitude,
      longitude,
      duration,
      style,
      startTime,
      substartTime
    } = this

    return {
      latitude,
      longitude,
      duration,
      style,
      startTime,
      substartTime
    }
  }
}

export default TimeItem