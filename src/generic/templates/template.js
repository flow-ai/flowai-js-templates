import BaseTemplate from '../../base/templates/template'
import QuickReply from '../components/quickReply'
import RBMQuickReply from '../../rbm/components/quickReply'

/**
 * Base class for all generic response templates
 * 
 * @category Generic
 * 
 * @property {QuickReply[]} quickReplies - Optional list of {@link QuickReply} components
 * @abstract
 **/
class Template extends BaseTemplate {

  /**
   * Define a delay for the response in milliseconds
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

  /**
   * Add a {@link RBMQuickReply} to the template
   * @param {RBMQuickReply} quickReply - Required
   **/
  addRBMQuickReply(quickReply) {
    if(!(quickReply instanceof RBMQuickReply)) {
      throw new Error('addRBMQuickReply argument must be an instance of a RBMQuickReply')
    }

    if(!this.quickReplies) {
      this.quickReplies = []
    }
    this.quickReplies.push(quickReply)

    return this
  }
}

export default Template
