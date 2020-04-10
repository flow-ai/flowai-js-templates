import Template from './templates/template'
import Text from './templates/text'
import QuickReply from './components/quickReply'


/**
 * Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.
 * @property {string} fallback - Pronounceable and represents the responses as a whole
 * @property {Template[]} responses - List of rich template responses
 * @example
 * // Create a message without responses
 * // this will create a response
 * // when converted to JSON
 * const message = new Message('Hi there')
 *
 * // This also works for multiple text responses by adding an array of strings
 * const message = new Message(['Hi there', 'How can I help?'])
 **/
class Message {

  /**
   * @param {string} fallback - Required
   * @param {Object} metadata - Optional property list with data
   **/
  constructor(fallback, metadata){
    if((typeof fallback !== 'string' && !Array.isArray(fallback)) || fallback.length === 0) {
      throw new Error('fallback is mandatory and must be a string or string array')
    }

    if(Array.isArray(fallback)) {
      for (var i = 0; i < fallback.length; i++) {
        if(typeof fallback[i] !== 'string') {
          throw new Error('fallback array argument can only contain strings')
        }
      }
    }

    this.fallback = fallback

    if(typeof metadata === 'object') {
      this.metadata = metadata
    }
  }

  /**
   * Add a response
   * @param {Template} - response
   * @param {Number} delay - Optional delay in miliseconds for sending the response
   * @return {Message}
   **/
  addResponse(response, delay) {
    if(!(response instanceof Template)) {
      throw new Error('addResponse argument must be an instance of a Template')
    }

    if(typeof d === 'number') {
      response.delay = delay
    }

    if(!this.responses) {
      this.responses = []
    }

    this.responses.push(response)

    return this
  }

  /**
   * A convienamnce method to add a quick reply to the last response template of a Message
   * @param {QuickReply} quickReply - Required
   *
   * @example
   * const message = new Message("Want a cold beverage?")
   *  .addQuickReply(new QuickReply({
   *    label: 'Yes'
   *  }))
   *  .addQuickReply(new QuickReply({
   *    label: 'No'
   *  }))
   **/
  addQuickReply(quickReply) {
    if(!(quickReply instanceof QuickReply)) {
      throw new Error('addQuickReply argument must be an instance of a QuickReply')
    }

    const {
      fallback
    } = this


    const isFallbackArray = Array.isArray(fallback)

    if(!Array.isArray(this.responses) || !this.responses.length) {
      this.responses = (isFallbackArray) ? fallback.map(text => new Text(text)) : [new Text(fallback)]
    }

    this.responses[this.responses.length - 1].addQuickReply(quickReply)

    return this
  }

  toJSON() {
    const {
      fallback,
      responses,
      metadata
    } = this

    const isFallbackArray = Array.isArray(fallback)

    let parsedFallback = fallback
    if(isFallbackArray) {
      let combine = ', '
      for (let i = 0; i < fallback.length; i++) {
        if(/[.!?]$/.test(fallback[i])) {
          combine = ' '
          break
        }
      }
      parsedFallback = fallback.join(combine)
    }

    if(!Array.isArray(responses) || !responses.length) {
      return {
        fallback: parsedFallback,
        responses: (isFallbackArray) ? fallback.map(text => new Text(text)) : [new Text(fallback)]
      }
    }

    return {
      fallback: parsedFallback,
      responses,
      metadata
    }
  }
}

export default Message
