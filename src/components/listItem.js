import Action from './action'
import Button from './button'
import Media from './media'

/**
 * Item within a List
 * @property {string} title - Title of the list item
 * @property {string} subtitle - Optional subtitle
 * @property {Media} image - Optional Media
 * @property {Action} action - Optional Action
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the list item
 **/
class ListItem {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {string} opts.image - Optional
   * @param {string} opts.action - Optional
   **/
  constructor({ title, subtitle, image, action }) {
    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title
    this.subtitle = subtitle || undefined
    this.image = image || undefined
    this.action = action || undefined
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

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('action must be an instance of Action')
    }

    this._action = action
  }

  get action() {
    return this._action
  }

  /**
   * Add a button to the list item
   * @param {Button} - button
   * @return {ListItem}
   **/
  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('addButton argument must be an instance of a Button')
    }

    if(!this.buttons) {
      this.buttons = []
    }

    this.buttons.push(button)

    return this
  }

  toJSON() {
    const {
      title,
      subtitle,
      image,
      action,
      buttons
    } = this

    return {
      title,
      subtitle,
      image,
      action,
      buttons
    }
  }
}

export default ListItem
