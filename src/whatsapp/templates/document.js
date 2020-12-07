import Template from '../../base/templates/template'

/**
 * Deliver a document to a user.
 * 
 * @alias WhatsApp.Document
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the document
 * @property {string} filename - Filename of the document
 * @property {string} url - URL to the document
 * @example
 * const document = new WhatsApp.Document({
 *   title: "Awesome title",
 *   url: "https://..."
 * })
 * 
 * @example
 * const document = new WhatsApp.Document("https://...")
 **/
class Document extends Template {

  /**
   * @param {object|string} opts - Options or shorthand a URL
   * @param {string} opts.title - Optional
   * @param {string} opts.filename - Optional
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
        throw new Error('Document title must be a valid string')
      }
  
      this.title = opts.title || undefined

      if(typeof opts.filename === 'string' && !opts.filename.length) {
        throw new Error('Document filename must be a valid string')
      }
  
      this.filename = opts.filename || undefined
    }

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Document url is mandatory')
    }

    this.url = url
  }

  toJSON() {
    const {
      title,
      filename,
      url
    } = this

    return {
      type: 'whatsapp_document',
      payload: {
        title,
        filename,
        url
      }
    }
  }
}

export default Document
