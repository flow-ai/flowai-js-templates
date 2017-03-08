
/**
 * Button used in Card, Buttons templates etc.
 * @class
 * @property {string} type - Type of button
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 **/
class Button {
  /**
   * @param {string} type - Enum, url, postback etc
   * @param {string} label - Label of the label
   * @param {string} value - URL, value tom postback
   * @constructor
   **/
  constructor({ type, label, value }) {

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('type is mandatory')
    }
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('label is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('value is mandatory')
    }

    this.type = type
    this.label = label
    this.value = value
  }
}

export default Button
