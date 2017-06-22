import Action from './action'
import Button from './button'
import Media from './media'

/**
 * Item within a List
 * @property {string} title - Title of the list item
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional Media
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the list item
 * @property {bool} featured - Optional set this element to be featured in the List (default false)
 **/
class ListItem {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional
   * @param {Action} opts.action - Optional
   * @param {bool} opts.featured - Optional
   **/
  constructor({ title, subtitle, media, action, featured }) {
    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title
    this.subtitle = subtitle || undefined
    this.media = media || undefined
    this.action = action || undefined
    this.featured = featured || undefined
  }

  set media(media) {
    if(media && !(media instanceof Media)) {
      throw new Error('media must be an instance of Media')
    }

    this._media = media
  }

  get media() {
    return this._media
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
      media,
      action,
      buttons,
      featured
    } = this

    return {
      title,
      subtitle,
      media,
      action,
      buttons,
      featured
    }
  }
}

export default ListItem
