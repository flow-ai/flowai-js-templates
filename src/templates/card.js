import Template from './template'
import Button from '../components/button'
import Media from '../components/media'

/**
 * Template composed of an image attachment, short description and buttons to request input from the user.
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} image - Optional Media
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the card
 **/
class Card extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {string} opts.image - Optional
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

  /**
   * Add a button to the card
   * @param {Button} - button
   **/
  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('addButton argument must be an instance of a Button')
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
