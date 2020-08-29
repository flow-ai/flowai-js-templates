/**
 * Component that represents a video asset used with a {@link RichLink} template
 * 
 * @memberof Apple
 * @category RichLink
 * 
 * @property {string} url - Required. URL to the video
 * @property {string} mimeType - Required. A string representing the format/type of the video; for example, video/mp4, video/mpeg
 **/
class VideoAsset {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.url - Required. URL to the video
   * @param {string} opts.mimeType - Required. The format/type of the video
  **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a VideoAsset you need a url and mimeType")
    }

    const {
      url,
      mimeType
    } = opts

    if(typeof url !== "string" || !url.length) {
      throw new Error("VideoAsset url is required")
    }

    if(typeof mimeType !== "string" || !mimeType.length) {
      throw new Error("VideoAsset mimeType is required")
    }

    this.url = url
    this.mimeType = mimeType
  }

  toJSON() {
    const {
      url,
      mimeType
    } = this

    return {
      type: 'video',
      url,
      mimeType
    }
  }
}

export default VideoAsset