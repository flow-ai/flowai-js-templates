/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location
 * @property {string} type - Type of quick reply, default is text
 **/
class QuickReply {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (or location)
   * @param {string} opts.value - Required, ignored if type is location
   **/
  constructor({ label, type, value }) {
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('QuickReply label is mandatory')
    }

    if(value && typeof value !== 'string') {
      throw new Error('QuickReply value must be as string')
    }

    if(typeof type !== 'string' || type.length === 0) {
      this.type = 'text'
    } else {
      this.type = type
    }

    this.value = value || label
    this.label = label
  }

  toJSON() {
    const {
      label,
      value,
      type
    } = this

    return {
      label,
      value,
      type
    }
  }
}

export default QuickReply
