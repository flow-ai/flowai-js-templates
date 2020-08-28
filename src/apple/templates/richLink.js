import Template from '../../generic/templates/template'
import ImageAsset from '../components/imageAsset'
import VideoAsset from '../components/videoAsset'

/**
 * Enhance the customer's experience by allowing them to preview inline content.
 * 
 * @memberof Apple
 * @property {string} title - Required title
 * @property {string} url - Required. URL to the linked web page
 * @property {array} assets - Required. List of media assets like images or videos
 * 
 * @example
 * const richLink = new Apple.RichLink({
 *   title: "Some news website",
 *   url: "https://www.mynewswebsite.corp",
 *   assets: [
 *     new Apple.ImageAsset({
 *       url: "https://source.unsplash.com/random",
 *       mimeType: "image/png"
 *     }),
 *     new Apple.VideoAsset({
 *       url: "https://somevideo",
 *       mimeType: "video/mp4"
 *     })
 *   ]
 * })
 **/
class RichLink extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.title - Required title
  * @param {string} opts.url - Required. URL to the linked web page
  * @param {array} opts.assets - Required. List of media assets like images or videos
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create a RichLink you need to provide at least a title and url")
    }

    const {
      title,
      url,
      assets
    } = opts

    if(Array.isArray(assets)) {
      for (let i = 0; i < assets.length; i++) {
        this.addAsset(assets[i])
      }
    }

    this.title = title
    this.url = url
  }

    /**
   * Add an asset to the list of media assets
   * 
   * @param {Asset} - asset
   * 
   * @return {RichLink}
   **/
  addAsset(asset) {
    if(!(asset instanceof ImageAsset) && !(asset instanceof VideoAsset)) {
      throw new Error('RichLink asset must be an instance of a Apple.ImageAsset or Apple.VideoAsset')
    }

    if(!this.assets) {
      this.assets = []
    }

    this.assets.push(asset)

    return this
  }

  toJSON() {
    const {
      title,
      url,
      assets,
      delay,
      fallback
    } = this

    return {
      type: 'apple.richLink',
      payload: {
        title,
        url,
        assets
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default  RichLink