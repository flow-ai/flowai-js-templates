import Template from './template'
import Action from '../components/action'

/**
 * Send an audio file or show an audio player to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the audio. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the audio
 * @property {string} url - URL to the audio file
 * @property {Action} action - Optional {@link Action}
 * @example
 * // Generic audio
 * const audio = new Audio({
 *   title: "Name of the song",
 *   url: "https://..."
 * })
 **/
class Audio extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Audio title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Audio url is mandatory')
    }

    this.url = url

    this.action = action || undefined
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('Audio action must be an instance of Action')
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
      type: 'audio',
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

export default Audio
