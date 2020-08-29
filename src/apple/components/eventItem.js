
import LocationItem from "./locationItem"
import TimeItem from "./timeItem"

/**
 * Component that represents an event inside a {@link TimePicker}
 * 
 * @memberof Apple
 * @category TimePicker
 * 
 * @property {string} identifier - Field identifying the item
 * @property {string} image - Optional URL to an image. The image should be a @3x image sized at 375 x 208 points (that is, 1125 x 624 pixels).
 * @property {LocationItem} location - Describes a location
 * @property {TimeItem[]} timeslots - A list of TimeItem objects 
 * @property {integer} timezoneOffset - An integer representing the number of minutes from GMT, specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.
 * @property {string} title - Required title
 **/
class EventItem {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Optional identifier
   * @param {string} opts.image - Optional URL to an image.
   * @param {TimeItem[]} opts.timeslots - Optional array of TimeItem objects 
   * @param {integer} opts.timezoneOffset - Optional integer representing the number of minutes from GMT
   * @param {string} opts.title - Required title
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a EventItem you at least need a title")
    }

    const {
      identifier,
      image,
      location,
      timeslots,
      timezoneOffset,
      title
    } = opts

    if(typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided EventItem identifier must be unique string")
    }

    if(typeof location !== "undefined" && !(location instanceof LocationItem)) {
      throw new Error('Provided location must be an instance of Apple.LocationItem')
    }

    if(Array.isArray(timeslots)) {
      for (let i = 0; i < timeslots.length; i++) {
        this.addTimeslot(timeslots[i])
      }
    }

    if(typeof timezoneOffset !== "undefined") {
      const parsedValue = parseInt(timezoneOffset)
      if(isNaN(parsedValue)) {
        throw new Error("Provided timezoneOffset must be an integer")
      }
      this.timezoneOffset = parsedValue 
    }

    if(typeof title !== "string") {
      throw new Error("EventItem title is required")
    }

    if(!title.length) {
      throw new Error("Provided EventItem title is empty")
    }

    this.identifier = identifier || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    this.image = image || undefined
    this.location = location || undefined
    this.title = title || undefined
  }

  /**
   * Add a TimeItem to the list of timeslots
   * 
   * @param {TimeItem} - item
   * 
   * @return {EventItem}
   **/
  addTimeslot(item) {
    if(!(item instanceof TimeItem)) {
      throw new Error('EventItem addTimeslot argument must be an instance of a Apple.TimeItem')
    }

    if(!this.timeslots) {
      this.timeslots = []
    }

    this.timeslots.push(item)

    return this
  }

  toJSON() {
    const {
      identifier,
      image,
      location,
      timeslots,
      timezoneOffset,
      title
    } = this

    return {
      identifier,
      image,
      location,
      timeslots,
      timezoneOffset,
      title
    }
  }
}

export default EventItem