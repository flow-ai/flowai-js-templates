import Template from './template'
import Action from '../components/action'

/**
 * Template that delivers a file to view or download
 * 
 * @category Templates
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
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional {@link Action}
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('File title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('File url is mandatory')
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
      delay,
      fallback
    } = this

    return {
      type: 'file',
      payload: {
        title,
        url,
        action,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default File
