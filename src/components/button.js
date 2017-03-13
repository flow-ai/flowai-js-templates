/**
 * Component used in Card, Buttons templates
 * @property {string} type - Type of button (url, postback etc)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 **/
class Button {
  /**
   * @param {string} opts.type - Requiresd
   * @param {string} opts.label - Requiresd
   * @param {string} opts.value - Requiresd
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
