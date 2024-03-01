/**
 * Component that represents a URL to an image, video or audio file. Used within generic templates like {@link Card} and {@link Image}.
 * 
 * @category Generic
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
      type,
      thumbnailUrl
    } = opts

    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`url is mandatory for a Media component`)
    }

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error(`type is mandatory for a Media component`)
    }

    if (type === 'video' && thumbnailUrl && typeof thumbnailUrl !== 'string') {
      throw new Error('Thumbnail should be of type string')
    }

    if(type === 'video' && thumbnailUrl && thumbnailUrl.length && !/^https?:\/\//.test(thumbnailUrl) && !/{{([^}]*)}}/.test(thumbnailUrl)) {
      throw new Error('Thumbnail should be valid url or a param')
    }

    this.thumbnailUrl = thumbnailUrl

    this.url = url
    this.type = type
  }

  toJSON() {
    const {
      url,
      type,
      thumbnailUrl
    } = this

    return {
      url,
      type,
      thumbnailUrl
    }
  }
}

export default Media
