
import uuid from 'uuid/v4'
/**
 * 
 * @category Whatsapp
 *
 * @property {string} title - title of the button
 * @example
 * new Button({
 *  title: 'Select',
 *  type: 'event',
 *  value: 'NICE_EVENT'
 * })
 **/
class Button {
  /**
   * @param {object} opts
   * @param {string} opts.title - Required, title of the button
   * @param {string} opts.type - Required, type of the button (text or event)
   * @param {string} opts.value - Required, value of payload to be sent back to the server when customer clicks the buttons
   * @param {Param} opts.param - Optional, parameter to pass to the button
   * @param {Array<Param>} - Optional, parameters to pass to the button
   **/
  constructor({ title, type, value, param, params }) {


    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('Button title is mandatory')
    }
    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory')
    }

    this.title = title
    this.params = parseParam(param || params)
    this.type = type
    this.value = value
  }

  toJSON() {
    const {
      title,
      type,
      value,
      params
    } = this

    return {
      type: 'reply',
      reply:{
        title,
        type,
        value,
        params,
        id: uuid()
      }
    }
  }
}

export default Button
