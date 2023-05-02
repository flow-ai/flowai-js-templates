import BaseMessage from '../base/message'
import Text from './templates/text'
import QuickReply from './components/quickReply'
import RBMQuickReply from '../rbm/components/quickReply'

/**
 * Inherits from {@link Base.Message}.
 * 
 * @category Message
 * 
 * @example
 * // Create a message with quick replies
 * const message = new Message("Want a cold beverage?")
 *  .addQuickReply(new QuickReply({
 *    label: 'Yes'
 *  }))
 *  .addQuickReply(new QuickReply({
 *    label: 'No'
 *  }))
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

  /**
   * A convenience method to add a RBM quick reply to the last response template of a Message
   * 
   * @param {RBMQuickReply} quickReply - Required
   * 
   * @example
   * const message = new Message("Put on some music please!")
   *  .addRBMQuickReply(new RBMQuickReply({
   *    "label": "test with code action",
   *    "type": "calendar_action",
   *    "title": "Party at Imran's",
   *    "description": "party tonight",
   *    "startTime": "2023-04-27T23:30",
   *    "endTime": "2023-04-28T04:30",
   *    "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
   *  }))
   *
   **/
  addRBMQuickReply(quickReply) {
    if(!(quickReply instanceof RBMQuickReply)) {
      throw new Error('addRBMQuickReply argument must be an instance of a RBMQuickReply')
    }

    const {
      fallback
    } = this


    const isFallbackArray = Array.isArray(fallback)

    if(!Array.isArray(this.responses) || !this.responses.length) {
      this.responses = (isFallbackArray) ? fallback.map(text => new Text(text)) : [new Text(fallback)]
    }

    this.responses[this.responses.length - 1].addRBMQuickReply(quickReply)

    return this
  }
}

export default Message
