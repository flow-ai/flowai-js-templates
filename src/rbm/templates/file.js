import Template from '../../generic/templates/template'
import Action from '../../generic/components/action'

/**
 * Deliver a file to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the file. Note: This is not supported on all channels.
 * 
 * @category RBM
 * 
 * @property {string} url - URL to the file
 * @property {Action} action - Optional Action
 * @example
 * const file = new File({
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class File extends Template {

  /**
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional {@link Action}
   **/
  constructor( { url, action }) {
    super()

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
      url,
      action,
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'rbm_file',
      payload: {
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
