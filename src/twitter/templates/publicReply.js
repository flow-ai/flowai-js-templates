import Template from '../../generic/templates/template'

/**
 * Template with a public reply to mention
 * 
 * @category Templates
 * 
 * @property {string} text - Text to reply to mention
 * @example
 * const publicReply = new PublicReply('Could you DM us your order number please?')
 **/
class PublicReply extends Template {

  /**
   * @param {string} opts.reply - Required
   **/
  constructor(opts) {
    super()

    let text = opts
    if(typeof text === 'object') {
      text = opts.text
    }

    if(typeof text !== 'string' || !text.length) {
      throw new Error('Text of reply is mandatory')
    }

    this.text = text
  }

  toJSON() {
    const {
      text,
      delay,
      fallback
    } = this

    return {
      type: 'twitter_public_reply',
      payload: {
        text
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default PublicReply
