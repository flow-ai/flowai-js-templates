

/**
 * 
 * @category Whatsapp
 *
 * @property {string} type - type of the header (text, video, document or image)
 * @property {string} value - value of the header or link
 * @example
 * new Header({
 *  type: 'video',
 *  value: 'http://example.com'
 * })
 **/
class Header {
  /**
   * @param {string} opts.type - Required, type of the header
   * @param {string} opts.value - Required, value of the header
   * @param {string} opts.filename - Optional
   * @param {string} opts.providerName - Optional
   **/
  constructor({ type, value, filename, providerName }) {

    if(typeof type !== 'string' || type.length === 0){
      throw new Error('Header type is mandatory')
    }
    if(type !== 'image' && type !== 'document' && type !== 'text' && type !== 'video'){
      throw new Error('Header type is must be text, video, image or document')
    }
    if(typeof value !== 'string' || value.length === 0){
      throw new Error('Header value is mandatory')
    }

    this.type = type
    this.value = value
    this.filename = filename
    this.providerName = providerName
  }

  toJSON() {
    const {
      type,
      value,
      providerName,
      filename
    } = this

    if(type === 'text'){
      return {
        type,
        text: value
      }
    }

    if(providerName && filename){
      return {
        type,
        [type]: {
          link: value,
          provider: {
            name : providerName
          },
          filename
        }
      }
    }

    if(providerName){
      return {
        type,
        [type]: {
          link: value,
          provider: {
            name : providerName
          }
        }
      }
    }

    if(filename){
      return {
        type,
        [type]: {
          link: value,
          filename
        }
      }
    }

    return {
      type,
      [type]: {link: value}
    }
  }
}

export default Header
