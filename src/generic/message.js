import BaseMessage from '../base/message'
import Text from './templates/text'
import QuickReply from './components/quickReply'

/**
 * Representation of a message to a user. Contains a pronounceable fallback message and optional rich {@link Template} responses.
 * 
 * @category Message
 * 
 * @property {string} fallback - Pronounceable and represents the responses as a whole
 * @property {Template[]} responses - List of rich {@link Template} responses
 * @example
 * // Create a message without responses
 * // this will create a response
 * // when converted to JSON
 * const message = new Message('Hi there')
 *
 * // This also works for multiple text responses by adding an array of strings
 * const message = new Message(['Hi there', 'How can I help?'])
 **/
class Message extends BaseMessage {

  /**
   * A convenience method to add a quick reply to the last response template of a Message
   * 
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
}

export default Message
