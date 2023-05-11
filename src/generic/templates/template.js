import BaseTemplate from '../../base/templates/template'
import QuickReply from '../components/quickReply'
import SuggestedAction from '../../rbm/components/suggestedAction'
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
   * Add a {@link SuggestedAction} to the template
   * @param {SuggestedAction} suggestedAction - Required
   **/
  addSuggestedAction(suggestedAction) {
    if(!(suggestedAction instanceof SuggestedAction)) {
      throw new Error('addRBMQuickReply argument must be an instance of a RBMQuickReply')
    }

    if(!this.quickReplies) {
      this.quickReplies = []
    }
    this.quickReplies.push(suggestedAction)

    return this
  }
}

export default Template
