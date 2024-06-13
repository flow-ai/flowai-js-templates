import Template from './template'
import Action from '../components/action'

/**
 * Deliver a file to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the file. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the file
 * @property {string} url - URL to the file
 * @property {Action} action - Optional Action
 * @example
 * const file = new File({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class File extends Template {

  /**
   * @param {string} opts.title - Optional
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional {@link Action}
   **/
  constructor( { title, url, action }) {
    super()
    
    if(typeof url !== 'string' || !url.length) {
      throw new Error('File url is mandatory')
    }
    
    this.title = title
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
      type: 'file',
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

export default File
