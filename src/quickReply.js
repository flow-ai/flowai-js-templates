
class QuickReply {
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
}

export default QuickReply
