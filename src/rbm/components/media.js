/**
 * Component that represents a URL to an image, video or audio file. Used within generic templates like {@link Card} and {@link Image}.
 * 
 * @category RBM
 * 
 * @property {string} url - URL to the media file
 **/
class Media {
  /**
   * @param {string} opts.url - Required
   * @param {string} opts.type - Required
   * @param {string} opts.height - Required for Vertical layout
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
      thumbnailUrl,
      height
    } = opts

    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`url is mandatory for a Media component`)
    }

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error(`type is mandatory for a Media component`)
    }
    
    if (type === 'video' && thumbnailUrl && typeof thumbnailUrl !== 'string') {
      throw new Error('thumbnail should be of type string for a video')
    }

    if(type === 'video' && thumbnailUrl && thumbnailUrl.length && !/^https?:\/\//.test(thumbnailUrl)) {
      throw new Error('video thumbnail should be valid url')
    }

    this.thumbnailUrl = thumbnailUrl

    this.url = url
    this.type = type

    this.height = height || undefined
  }

  toJSON() {
    const {
      url,
      type,
      thumbnailUrl,
      height
    } = this

    return {
      url,
      type,
      thumbnailUrl,
      height
    }
  }
}

export default Media
