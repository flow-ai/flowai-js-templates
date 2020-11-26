import Template from './template'
import Button from '../components/button'

/**
 * Generic template with an optional short description and list of {@link Button} components to request input from a user
 * 
 * @category Generic
 * 
 * @property {string} title - Main title of the buttons
 * @property {Button[]} buttons - Optional set of buttons
 * @example
 * const buttons = new Buttons("Vintage bikes and more")
 * buttons.addButton(new Button({
 *  label: "View website",
 *  type: "url",
 *  value: "..."
 * }))
 * buttons.addButton(new Button({
 *  label: "Special offers",
 *  type: "postback",
 *  value: "Show me special offers"
 * }))
 **/
class Buttons extends Template {

  /**
   * @param {string} opts.title - Required
   **/
  constructor(title) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Buttons title is mandatory')
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
      throw new Error('Buttons addButton argument must be an instance of a Button')
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
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'buttons',
      payload: {
        title,
        buttons,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Buttons
