

/**
 * 
 * @category Whatsapp
 *
 * @property {string} label - Label of the button
 * @example
 * new Button({
 *  label: 'Select'
 * })
 **/
class Button {
  /**
   * @param {string} opts.label - Required, label of the button
   **/
  constructor({ label }) {


    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory')
    }

    this.label = label
  }

  toJSON() {
    const {
      label
    } = this

    return {
      label
    }
  }
}

export default Button
