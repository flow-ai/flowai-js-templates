/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * @property {string} label - UI label
 * @property {string} value
 **/
class QuickReply {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.value - Required
   **/
  constructor({ label, value }) {
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('label is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('value is mandatory')
    }

    this.label = label
    this.value = value
  }
  
  toJSON() {
    const {
      type,
      value
    } = this

    return {
      type,
      value
    }
  }
}

export default QuickReply
