import Template from '../../generic/templates/template'

/**
 * Template with a public reply to mention
 * 
 * @category Templates
 * 
 * @property {string} reply - Text to reply to mention
 * @example
 * const publicReply = new PublicReply('Could you DM us your order number please?')
 **/
class PublicReply extends Template {

  /**
   * @param {string} opts.reply - Required
   **/
  constructor(opts) {
    super()

    let reply = opts
    if(typeof reply === 'object') {
      reply = opts.reply
    }

    if(typeof reply !== 'string' || !reply.length) {
      throw new Error('Reply is mandatory')
    }

    this.reply = reply
  }

  toJSON() {
    const {
      reply,
      delay,
      fallback
    } = this

    return {
      type: 'twitter_public_reply',
      payload: {
        reply
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default PublicReply
