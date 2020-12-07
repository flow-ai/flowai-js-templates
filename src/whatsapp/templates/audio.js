import Template from '../../base/templates/template'

/**
 * Deliver an audio to a user.
 * 
 * @alias WhatsApp.Audio
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the audio
 * @property {string} url - URL to the audio
 * @example
 * const audio = new WhatsApp.Audio("https://...")
 **/
class Audio extends Template {

  /**
   * @param {object|string} opts - Options or shorthand a URL
   * @param {string} opts.url - Required
   **/
  constructor( opts ) {
    super()

    let url 

    if(typeof opts === 'string') {
      url = opts
    } else if(typeof opts === 'object') {
      url = opts.url
    }

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Audio url is mandatory')
    }

    this.url = url
  }

  toJSON() {
    const {
      url
    } = this

    return {
      type: 'whatsapp_audio',
      payload: {
        url
      }
    }
  }
}

export default Audio
