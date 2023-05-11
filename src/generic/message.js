import BaseMessage from '../base/message'
import Text from './templates/text'
import QuickReply from './components/quickReply'
import SuggestedAction from '../rbm/components/suggestedAction'

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
   * A convenience method to add a Suggested Action to the last response template of a Message
   * 
   * @param {SuggestedAction} suggestedAction - Required
   * 
   * @example
   * const message = new Message("Put on some music please!")
   *  .addSuggestedAction(new SuggestedAction({
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
  addSuggestedAction(suggestedAction) {
    if(!(suggestedAction instanceof SuggestedAction)) {
      throw new Error('addSuggestedAction argument must be an instance of Suggested Action')
    }

    const {
      fallback
    } = this


    const isFallbackArray = Array.isArray(fallback)

    if(!Array.isArray(this.responses) || !this.responses.length) {
      this.responses = (isFallbackArray) ? fallback.map(text => new Text(text)) : [new Text(fallback)]
    }

    this.responses[this.responses.length - 1].addSuggestedAction(suggestedAction)

    return this
  }
}

export default Message
