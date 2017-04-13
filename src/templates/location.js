import Template from './template'
import Action from '../components/action'

/**
 * Template with a location
 * @property {string} title - Describes the image
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {Action} action - Optional Action
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

    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title

    if(!lat) {
      throw new Error('Latitude is mandatory')
    }

    this.lat = lat

    if(!long) {
      throw new Error('Longitude is mandatory')
    }

    this.long = long

    this.action = action || undefined
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('action must be an instance of Action')
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
      quickReplies
    } = this

    return {
      type: 'location',
      payload: {
        title,
        lat,
        long,
        action,
        quickReplies
      }
    }
  }
}

export default Location
