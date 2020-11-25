import BaseTemplate from '../../base/templates/template'
import QuickReply from '../components/quickReply'

/**
 * Base class for all response templates
 * 
 * @category Templates
 * 
 * @property {Number} delay - Optional delay in milliseconds for sending the response
 * @property {QuickReply[]} quickReplies - Optional list of {@link QuickReply} components
 * @abstract
 **/
class Template extends BaseTemplate {

  /**
   * Add a {@link QuickReply} to the template
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
