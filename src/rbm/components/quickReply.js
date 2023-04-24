import { parseParam, flattenParams } from '../../base/components/param'

/**
 * Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.
 * 
 * @category RBM
 * 
 * @property {string} label - Label that is shown as a quick reply
 * @property {string} value - Value that is being send as the quick reply, empty if type is location or calendar action
 * @property {string} type - Type of quick reply, default is text (text, location, user_email, user_phone_number, event, flow, step)
 * @property {Base.Param[]} params - Optional parameters associated with the quick reply
 *
 * @example
 * const text = new Text('We have a 40" screen for sale. Want to preorder it?')
 * text.addQuickReply(new QuickReply({
 *   label: '👍',
 *   value: 'Yes'
 * }))
 * text.addQuickReply(new QuickReply({
 *   label: '👎',
 *   value: 'No'
 * }))
 **/
class QuickReply {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.type - Optional type, default is text (text, location, user_email, user_phone_number, event, flow, step)
   * @param {string} opts.value - Required, ignored if type is location or calendar action (not for calendar action)
   * @param {boolean} opts.auto - Optional, flag for auto reply
   * @param {string} opts.stepId - Optional, step link for auto reply
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this QuickReply
   **/
  constructor({ label, type, value, param, params, auto, stepId, title, description, startTime, endTime, timezone}) {

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

    this.params = parseParam(param || params)
    this.value = value || label
    this.label = label
    this.title = title
    this.description = description
    this.startTime = startTime
    this.endTime = endTime
    this.timezone = timezone
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
      params
    } = this

    return {
      label,
      value,
      type,
      title,
      description,
      startTime,
      endTime,
      timezone,
      params: flattenParams(params),
      ...(auto && stepId ? { auto, stepId } : {})
    }
  }
}

export default QuickReply