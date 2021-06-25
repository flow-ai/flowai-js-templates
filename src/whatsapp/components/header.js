

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
   **/
  constructor({ type, value }) {

    if(typeof type !== 'string' || type.length === 0){
      throw new Error('Header type is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0){
      throw new Error('Header type is mandatory')
    }
    if(type !== 'image' && type !== 'document' && type !== 'text' && type !== 'video'){
      throw new Error('Header type is must be text, video, image or document')
    }

    this.type = type
    this.value = value
  }

  toJSON() {
    const {
      type,
      value
    } = this

    if(type === 'text'){
      return {
        text: value
      }
    }

    return {
      [type]: {link: value}
    }
  }
}

export default Header
