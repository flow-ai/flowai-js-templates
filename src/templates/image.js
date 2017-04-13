import Template from './template'
import Action from '../components/action'

/**
 * Template with a image
 * @property {string} title - Describes the image
 * @property {string} url - URL to the image
 * @property {Action} action - Optional Action
 **/
class Image extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || url.length === 0) {
      throw new Error('URL is mandatory')
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
      quickReplies
    } = this

    return {
      type: 'image',
      payload: {
        title,
        url,
        action,
        quickReplies
      }
    }
  }
}

export default Image
