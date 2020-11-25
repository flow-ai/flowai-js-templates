/**
 * A media file within a rich  {@link GBM.Card}
 * 
 * @alias GBM.Media
 * 
 * @memberof GBM
 * @category Components
 * 
 * @property {string} height - Optional. The height of the media within a rich card. SHORT = 112 DP. MEDIUM = 168 DP. TALL = 264 DP. Not available for rich card carousels when the card width is set to SMALL.
 * @property {string} fileUrl - Required. Publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. Maximum 5 MB. Supported content types: image/jpeg, image/jpg, image/png
 * @property {string} thumbnailUrl - Optional. Publicly reachable URL of the thumbnail. If you don't provide a thumbnail URL, the platform displays a blank placeholder thumbnail until the user's device downloads the file. Maximum 25 KB. Supported content types: image/jpeg, image/jpg, image/png
 * @property {string} forceRefresh - Optional. If set, the platform fetches the file and thumbnail from the specified URLs, even if the platform has cached copies of the file (and/or of the thumbnail).
 * @property {string} altText - Optional. Text describing the details about the media for accessibility purposes.
 **/
class Media {
  /**
   * @param {string} opts.height - Optional
   * @param {string} opts.fileUrl - Required
   * @param {string} opts.thumbnailUrl - Optional
   * @param {bool} opts.forceRefresh - Optional
   * @param {bool} opts.forceRefresh - Optional
   **/
  constructor(opts) {
    if(!opts) {
      throw new Error(`You should provide a fileUrl for a Media component`)
    }

    const {
      fileUrl,
      thumbnailUrl,
      forceRefresh,
      altText
    } = opts

    if(typeof fileUrl !== 'string' || !fileUrl.length) {
      throw new Error(`The Media component fileUrl is required and must be a valid URL`)
    }

    if(typeof thumbnailUrl === 'string' && !fileUrl.length) {
      throw new Error(`The Media component thumbnailUrl must be a valid URL`)
    }

    if(typeof altText === 'string' && !altText.length) {
      throw new Error(`Media alt text must be a valid string`)
    }

    this.fileUrl = fileUrl
    this.thumbnailUrl = thumbnailUrl || undefined
    this.forceRefresh = forceRefresh || false
    this.altText = altText || undefined
  }

  toJSON() {
    const {
      fileUrl,
      thumbnailUrl,
      forceRefresh,
      altText
    } = this

    return {
      fileUrl,
      thumbnailUrl,
      forceRefresh,
      altText
    }
  }
}

Media.HEIGHT = {
  HEIGHT_UNSPECIFIED: 'HEIGHT_UNSPECIFIED',
  SHORT: 'SHORT',
  MEDIUM: 'MEDIUM',
  TALL: 'TALL'
}

export default Media
