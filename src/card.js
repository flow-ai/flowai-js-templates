import Template from './template'
import Button from './button'
import Media from './media'

/**
 * Composed of an image attachment, short description and buttons to request input from the user.
 * @property {string} type - Type of button
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 **/
class Card extends Template {

  /**
   * @param {string} type - Enum, url, postback etc
   * @param {string} label - Label of the label
   * @param {string} value - URL, value tom postback
   * @constructor
   **/
  constructor({ title, subtitle, image }) {
    super()

    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title
    this.subtitle = subtitle || undefined
    this.image = image || undefined
  }

  set image(image) {
    if(image && !(image instanceof Media)) {
      throw new Error('image must be an instance of Media')
    }

    this._image = image
  }

  get image() {
    return this._image
  }

  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('addButton must be an instance of a Button')
    }

    if(!this.buttons) {
      this.buttons = []
    }

    this.buttons.push(button)
  }

  toJSON() {
    const {
      title,
      subtitle,
      image,
      action,
      buttons,
      quickReplies
    } = this

    return JSON.stringify({
      title,
      subtitle,
      image,
      action,
      buttons,
      quickReplies
    })
  }
}

export default Card
