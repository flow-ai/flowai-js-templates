import Template from './template'
import Action from '../components/action'

/**
 * Send or display a location on a map to a user. Optionally add an {@link Action} to perform when the user interacts with the location. Note: only supported on some channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the location
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {Action} action - Optional {@link Action}
 * @example
 * const location = new Location({
 *   title: "Infinite Loop 1",
 *   lat: "37.331860",
 *   long: "-122.030248",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Location extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, lat, long, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Location title is mandatory')
    }

    this.title = title

    if(!lat) {
      throw new Error('Location latitude is mandatory')
    }

    this.lat = lat

    if(!long) {
      throw new Error('Location longitude is mandatory')
    }

    this.long = long

    this.action = action || undefined
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('Location action must be an instance of Action')
    }

    this._action = action
  }

  get action() {
    return this._action
  }

  toJSON() {
    const {
      title,
      lat,
      long,
      action,
      quickReplies,
      expirationTime,
      delay,
      fallback
    } = this

    return {
      type: 'location',
      payload: {
        title,
        lat,
        long,
        action,
        quickReplies,
        expirationTime
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Location
