import Template from './template'

/**
 * Template with a piece of text
 * @property {string} text - Text to show
 **/
class Text extends Template {

  /**
   * @param {string} opts.text - Required
   **/
  constructor(opts) {
    super()

    let text = opts
    if(typeof text === 'object') {
      text = opts.text
    }

    if(typeof text !== 'string' || text.length === 0) {
      throw new Error('Text is mandatory')
    }

    this.text = text
  }

  toJSON() {
    const {
      text,
      quickReplies
    } = this

    return {
      type: 'text',
      payload: {
        text,
        quickReplies
      }
    }
  }
}

export default Text
