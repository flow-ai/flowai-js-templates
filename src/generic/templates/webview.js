import Template from './template'
import Action from '../components/action'
import ButtonTrigger from '../components/buttonTrigger'
import { nanoid } from 'nanoid'
/**
 * Deliver an image to a user. Optionally you can specify an {@link Action} to perform when a user interacts with the image. Note: This is not supported on all channels.
 * 
 * @category Generic
 * 
 * @property {string} label - Describes the image
 * @property {string} url - URL to the image
 * @property {ButtonTrigger} trigger - Optional {@link ButtonTrigger} for specific type of button
 * @example
 * const image = new Image({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Webview extends Template {

  /**
   * @param {string} opts.label - Required
   * @param {string} opts.url - Required
   **/
  constructor( { label, url, id, trigger }) {
    super()

    if(typeof label !== 'string' || !label.length) {
      throw new Error('Webview label is mandatory')
    }

    this.label = label

    if(typeof url !== 'string' || !url.length) {
      throw new Error('Webview url is mandatory')
    }

    
    this.trigger = trigger
    this.id = id

    if (!this.id) {
      this.id = `b${nanoid(8)}`
    }
    this.url = url

  }

  toJSON() {
    const {
      label,
      url,
      id,
      trigger
    } = this

    return {
      type: 'webview',
      payload: {
        label,
        url,
        id,
        trigger
      }
    }
  }
}

export default Webview
