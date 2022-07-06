import Template from './template'
import Action from '../components/action'

/**
 * Deliver a video to a user or show a video player. Optionally you can specify an {@link Action} to perform when a user interacts with the video. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the video
 * @property {string} url - URL to the video
 * @property {Action} action - Optional {@link Action}
 * @example
 * const video = new Video({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Video extends Template {

  /**
   * @param {object} opts
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   * @param {string} opts.thumbnailUrl - Optional
   **/
  constructor( { title, url, action, thumbnailUrl }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Video title is mandatory')
    }

    if (thumbnailUrl && typeof thumbnailUrl !== 'string') {
      throw new Error('Thumbnail should be of type string')
    }

    if (thumbnailUrl && thumbnailUrl.length && !/^https?:\/\//.test(thumbnailUrl)) {
      throw new Error('Thumbnail should be valid url')
    }

    this.thumbnailUrl = thumbnailUrl

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Video url is mandatory')
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
      fallback,
      thumbnailUrl
    } = this

    return {
      type: 'video',
      payload: {
        title,
        url,
        action,
        quickReplies,
        thumbnailUrl
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Video
