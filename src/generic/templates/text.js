import Template from './template'

/**
 * Template with a piece of text
 * 
 * @category Templates
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
      delay,
      fallback
    } = this

    return {
      type: 'text',
      payload: {
        text,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Text
