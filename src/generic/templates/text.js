import Template from './template'

/**
 * The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex interaction, or response.
 * 
 * @category Generic
 * 
 * @property {string} text - Text to show
 * @example
 * const text = new Text('Want a free soda?')
 * text.addQuickReply(new QuickReply({
 *   label: 'Yes',
 *   value: 'yes'
 * }))
 * text.addQuickReply(new QuickReply({
 *   label: 'No',
 *   value: 'no'
 * }))
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

    if(typeof text !== 'string' || !text.length) {
      throw new Error('Text is mandatory')
    }

    this.text = text
  }

  toJSON() {
    const {
      text,
      quickReplies,
      expirationTime,
      delay,
      fallback,
      citations
    } = this

    return {
      type: 'text',
      payload: {
        text,
        quickReplies,
        expirationTime,
        citations
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Text
