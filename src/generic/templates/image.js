import Template from './template'
import Action from '../components/action'

/**
 * Deliver an image to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the image. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the image
 * @property {string} url - URL to the image
 * @property {Action} action - Optional Action
 * @example
 * const image = new Image({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Image extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional {@link Action}
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Image title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Image url is mandatory')
    }

    this.url = url

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
      url,
      action,
      quickReplies,
      expirationTime,
      delay,
      fallback
    } = this

    return {
      type: 'image',
      payload: {
        title,
        url,
        action,
        quickReplies,
        expirationTime
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Image
