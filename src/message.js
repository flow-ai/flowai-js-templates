import Template from './templates/template'

/**
 * Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.
 * @property {string} fallback - Pronounceable and represents the responses as a whole
 * @property {Template[]} responses - List of rich template responses
 **/
class Message {

  /**
   * @param {string} fallback - Required
   **/
  constructor(fallback){
    if(typeof fallback !== 'string' || fallback.length === 0) {
      throw new Error('fallback is mandatory and must be a string')
    }
    this.fallback = fallback
  }

  /**
   * Add a response
   * @param {Template} - response
   **/
  addResponse(response) {
    if(!(response instanceof Template)) {
      throw new Error('addResponse argument must be an instance of a Template')
    }

    if(!this.responses) {
      this.responses = []
    }

    this.responses.push(response)
  }
}

export default Message
