/**
 * Component that represents a image asset
 * 
 * @memberof Apple
 * @category Components
 * 
 * @property {string} url - Required. URL to the image
 * @property {string} mimeType - Required. A string representing the format/type of the image; for example, image/jpeg, image/png
 **/
class ImageAsset {
  /**
   * @param {string} url - Required. URL to the image
   * @param {string} mimeType - Required. The format/type of the image
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create an ImageAsset you need a url and mimeType")
    }

    const {
      url,
      mimeType
    } = opts

    if(typeof url !== "string" || !url.length) {
      throw new Error("ImageAsset url is required")
    }

    if(typeof mimeType !== "string" || !mimeType.length) {
      throw new Error("ImageAsset mimeType is required")
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
      type: 'image',
      url,
      mimeType
    }
  }
}

export default ImageAsset