/**
 * Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.
 * 
 * @category Components
 * 
 * @property {string} url - URL to the media file
 **/
class Media {
  /**
   * @param {string} opts.url - Required
   * @param {string} opts.type - Required
   **/
  constructor(opts) {
    if(!opts) {
      throw new Error(`You should provide an url and type for a Media component`)
    }
    if(typeof opts === 'string') {
      throw new Error(`You should provide an url and type not a string for a Media component`)
    }

    const {
      url,
      type
    } = opts

    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`url is mandatory for a Media component`)
    }

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error(`type is mandatory for a Media component`)
    }

    this.url = url
    this.type = type
  }

  toJSON() {
    const {
      url,
      type
    } = this

    return {
      url,
      type
    }
  }
}

export default Media
