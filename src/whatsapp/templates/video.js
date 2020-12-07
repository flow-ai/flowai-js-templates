import Template from '../../base/templates/template'

/**
 * Deliver a video to a user.
 * 
 * @alias WhatsApp.Video
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the video
 * @property {string} url - URL to the video
 * @example
 * const video = new WhatsApp.Video({
 *   title: "Awesome title",
 *   url: "https://..."
 * })
 * 
 * @example
 * const image = new WhatsApp.Video("https://...")
 **/
class Video extends Template {

  /**
   * @param {object|string} opts - Options or shorthand a URL
   * @param {string} opts.title - Optional
   * @param {string} opts.url - Required
   **/
  constructor( opts ) {
    super()

    let url 

    if(typeof opts === 'string') {
      url = opts
    } else if(typeof opts === 'object') {
      url = opts.url

      if(typeof opts.title === 'string' && !opts.title.length) {
        throw new Error('Video title must be a valid string')
      }
  
      this.title = opts.title || undefined
    }

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Video url is mandatory')
    }

    this.url = url
  }

  toJSON() {
    const {
      title,
      url
    } = this

    return {
      type: 'whatsapp_video',
      payload: {
        title,
        url
      }
    }
  }
}

export default Video
