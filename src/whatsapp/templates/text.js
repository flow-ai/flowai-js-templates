import Template from '../../base/templates/template'

/**
 * The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex inter or response.
 * 
 * @alias WhatsApp.Text
 * 
 * @memberof WhatsApp
 * @category Templates
 * 
 * @property {string} text - Text to show
 * @property {boolean} previewUrl - True by default, will render a preview if a URL is inside the text message
 * 
 * @example
 * const text = new WhatsApp.Text('Want a free soda?')
 * 
 * @example
 * const text = new WhatsApp.Text('Hello, here is some **bold text**, *italicized text*, and a https://www.google.com')
 **/
class Text extends Template {

  /**
   * @param {object|string} opts - Collection of options or the text
   * @param {string} opts.text - Required
   * @param {boolean} opts.previewUrl - Optional
   **/
  constructor(opts) {
    super()

    let text = opts
    let previewUrl = true
  
    if(typeof opts === 'object') {
      text = opts.text

      if(typeof opts.previewUrl === 'boolean') {
        previewUrl = opts.previewUrl
      }
    }

    if(typeof text !== 'string' || !text.length) {
      throw new Error('Text is mandatory')
    }
    
    this.previewUrl = previewUrl
    this.text = text
  }

  toJSON() {
    const {
      text,
      previewUrl,
      suggestions,
      delay,
      fallback
    } = this

    return {
      type: 'whatsapp_text',
      payload: {
        text,
        previewUrl,
        suggestions
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Text
