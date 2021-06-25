
import uuid from 'uuid/v4'
/**
 * 
 * @category Whatsapp
 *
 * @property {string} title - title of the button
 * @example
 * new Button({
 *  title: 'Select'
 * })
 **/
class Button {
  /**
   * @param {string} opts.title - Required, title of the button
   **/
  constructor({ title }) {


    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Button title is mandatory')
    }

    this.title = title
  }

  toJSON() {
    const {
      title
    } = this

    return {
      type: 'reply',
      reply:{
        title,
        id: uuid()
      }
    }
  }
}

export default Button
