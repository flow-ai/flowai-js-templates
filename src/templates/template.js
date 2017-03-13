import QuickReply from '../components/quickReply'

/**
 * Base class of all response templates
 * @property {QuickReply[]} quickReplies - Optional list of QuickReplies
 * @abstract
 **/
class Template {

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
  }
}

export default Template
