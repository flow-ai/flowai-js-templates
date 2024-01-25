import { parseParam, flattenParams } from '../../base/components/param'
import QuickReply from '../../generic/components/quickReply'

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category RBM
 * 
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location or calendar action
 * @property {string} type - Type of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {string} quickReplyId - Id of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {Base.Param[]} params - Optional parameters associated with the quick reply
 * @property {Base.Param[]} tags - Optional tags associated with the quick reply
 *
 * @example
 * const text = new Text('We have a 40" screen for sale. Want to preorder it?')
 * text.addSuggestedAction(new SuggestedAction({
 *    "label": "test with code action",
 *    "type": "calendar_action",
 *    "title": "Party at Imran's",
 *    "description": "party tonight",
 *    "startTime": "2023-04-27T23:30",
 *    "endTime": "2023-04-28T04:30",
 *    "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
 * }))
 **/
class SuggestedAction extends QuickReply {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (text, location, user_email, user_phone_number, event, flow, step)
   * @param {string} opts.value - Required, ignored if type is location or calendar action (not for calendar action)
   * @param {string} opts.quickReplyId - Required
   * @param {boolean} opts.auto - Optional, flag for auto reply
   * @param {string} opts.stepId - Optional, step link for auto reply
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this QuickReply
   * @param {Base.Param|Base.Param[]} opts.tags - Optional Tags or array or Array of Tags related to this QuickReply 
   **/
  constructor({ label, type, value, param, params, tags, auto, stepId, title, description, startTime, endTime, timezone, quickReplyId }) {
    super({ label, type, value, param, params, tags, auto, stepId, quickReplyId })
    if(type === 'text' && (typeof label !== 'string' || !label.length)) {
      throw new Error('QuickReply label when it has the type text must be as string')
    }

    if(value && typeof value !== 'string') {
      throw new Error('QuickReply value must be as string')
    }

    if(typeof type !== 'string' || type.length === 0) {
      this.type = 'text'
    } else {
      this.type = type
    }

    if (auto && stepId) {
      this.auto = auto
      this.stepId = stepId
    }

    this.params = parseParam(param || params || [])
    this.tags = parseParam(tags || [])
    this.value = value || label
    this.label = label
    this.title = title
    this.description = description
    this.startTime = startTime
    this.endTime = endTime
    this.timezone = timezone
    this.quickReplyId = quickReplyId
  }

  toJSON() {
    const {
      label,
      value,
      type,
      auto,
      stepId,
      title,
      description,
      startTime,
      endTime,
      timezone,
      params,
      tags,
      quickReplyId
    } = this

    return {
      label,
      value,
      type,
      quickReplyId,
      title,
      description,
      startTime,
      endTime,
      timezone,
      params: flattenParams(params || []),
      tags: flattenParams(tags || []),
      ...(auto && stepId ? { auto, stepId } : {})
    }
  }
}

export default SuggestedAction