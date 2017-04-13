import Template from './template'
import Button from '../components/button'
import Media from '../components/media'

/**
 * Template with a short description and buttons to request input from the user.
 * @property {string} title - Main title of the buttons
 * @property {Button[]} buttons - Optional set of buttons
 **/
class Buttons extends Template {

  /**
   * @param {string} opts.title - Required
   **/
  constructor({ title }) {
    super()

    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory')
    }

    this.title = title
  }

  /**
   * Add a button to the buttons
   * @param {Button} - button
   * @return {Button}
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
      buttons,
      quickReplies
    } = this

    return {
      type: 'buttons',
      payload: {
        title,
        buttons,
        quickReplies
      }
    }
  }
}

export default Buttons
