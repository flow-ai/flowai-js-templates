import QuickReply from '../components/quickReply'

/**
 * Base class of all response templates
 * @property {Number} delay - Optional delay in miliseconds for sending the response
 * @property {QuickReply[]} quickReplies - Optional list of QuickReplies
 * @abstract
 **/
class Template {

  /**
   * Define a delay for the response in miliseconds
   * @param {Number} delay - Required
   **/
  set delay(delay) {
    if(!(typeof delay === 'number')) {
      throw new Error('Delay must be a number')
    }

    if(delay < 0) {
      throw new Error('Delay must be positive number')
    }

    this._delay = delay
  }

  get delay() {
    return this._delay || 0
  }

  /**
   * Optional fallback speech
   * @param {String} fallback - Required
   **/
  set fallback(fallback) {
    if(!(typeof fallback === 'string') && fallback !== undefined) {
      throw new Error('Fallback must be a string or undefined')
    }
    this._fallback = fallback
  }

  get fallback() {
    return this._fallback || undefined
  }

  /**
   * Add a quick reply to the template
   * @param {QuickReply} quickReply - Required
   **/
  addQuickReply(quickReply) {
    if(!(quickReply instanceof QuickReply)) {
      throw new Error('addQuickReply argument must be an instance of a QuickReply')
    }

    if(!this.quickReplies) {
      this.quickReplies = []
    }
    this.quickReplies.push(quickReply)

    return this
  }
}

export default Template
