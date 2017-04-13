/**
 * Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.
 * @class
 * @property {string} url - URL to the media file
 **/
class Media {
  /**
   * @param {string} url - Required
   **/
  constructor(url) {
    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`url is mandatory ${url}`)
    }
    this.url = url
  }

  toJSON() {
    const {
      url
    } = this

    return url
  }
}

export default Media
