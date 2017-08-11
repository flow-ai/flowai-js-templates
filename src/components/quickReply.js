/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * @property {string} label - UI label
 * @property {string} value
 **/
class QuickReply {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (or location)
   * @param {string} opts.value - Required, ignored if type is location
   **/
  constructor({ label, type, value }) {
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('label is mandatory')
    }

    if((typeof value !== 'string' || value.length === 0) && type !== 'location') {
      throw new Error('value is mandatory')
    }

    if(typeof type !== 'string' || type.length === 0) {
      this.type = 'text'
    } else {
      this.type = type
    }

    this.value = value
    this.label = label
  }

  toJSON() {
    const {
      label,
      value
    } = this

    return {
      label,
      value
    }
  }
}

export default QuickReply
