import Template from '../../base/templates/template'

/**
 * Deliver an image to a user.
 * 
 * @alias WhatsApp.Image
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the image
 * @property {string} url - URL to the image
 * @example
 * const image = new WhatsApp.Image({
 *   title: "Awesome title",
 *   url: "https://..."
 * })
 * 
 * @example
 * const image = new WhatsApp.Image("https://...")
 **/
class Image extends Template {

  /**
   * @param {object|string} opts - Options or shorthand a URL
   * @param {string} opts.title - Required
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
        throw new Error('Image title must be a valid string')
      }
  
      this.title = opts.title || undefined
    }

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Image url is mandatory')
    }

    this.url = url
  }

  toJSON() {
    const {
      title,
      url
    } = this

    return {
      type: 'whatsapp_image',
      payload: {
        title,
        url
      }
    }
  }
}

export default Image
