import { nanoid } from 'nanoid'

import ButtonTrigger from '../components/buttonTrigger'
import { parseParam, flattenParams } from '../../base/components/param'

/**
 * Render a button inside {@link Card} or {@link Buttons} templates. Unlike {@link QuickReply} templates, by default a button will remain on the screen even after a user presses them.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event, flow, step)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 * @property {Base.Param[]} params - Optional parameters associated with the button
 * @property {ButtonTrigger} trigger - Optional {@link ButtonTrigger} for specific type of button
 * @example
 * new Button({
 *  type: 'webview',
 *  label: 'More info'
 *  value: 'https://...',
 *  trigger: new ButtonTrigger({
 *    type: 'event',
 *    value: 'Event to Trigger'
 *  })
 * })
 **/
class Button {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event, flow, step)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value)
   * @param {string} opts.id - Optional, id of the button. If not passed will be automatically generated
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  constructor({ type, label, value, param, newTab, params, id, trigger }) {

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory')
    }
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory')
    }

    const isTriggerValid = trigger instanceof ButtonTrigger && trigger.isValidTrigger()
    if (trigger && !isTriggerValid) {
      throw new Error(`Invalid Trigger type ${trigger instanceof ButtonTrigger}`)
    } else if (trigger && isTriggerValid && type !== 'url' && type !== 'phone') {
      throw new Error(`Additional Button Triggers are applicable only to Buttons of type \'url\' or \'phone\', got ${type}`)
    }

    this.id = id

    if (!this.id) {
      this.id = `b${nanoid(8)}`
    }

    this.params = parseParam(param || params)
    this.type = type
    this.label = label
    this.value = value
    this.newTab = Boolean(newTab)
    this.trigger = trigger
  }

  addTrigger(trigger) {
    const isTriggerValid = trigger instanceof ButtonTrigger && trigger.isValidTrigger()
    if (trigger && !isTriggerValid) {
      throw new Error(`Invalid Trigger type ${trigger instanceof ButtonTrigger}`)
    } else if (trigger && isTriggerValid && this.type !== 'url' && this.type !== 'phone') {
      throw new Error(`Additional Button Triggers are applicable only to Buttons of type \'url\' or \'phone\', got ${type}`)
    }

    this.trigger = trigger
  }

  static generateId() {
    return `b${nanoid(8)}`
  }

  toJSON() {
    const {
      type,
      label,
      value,
      newTab,
      params,
      id,
      trigger
    } = this

    return {
      type,
      label,
      value,
      newTab,
      params: flattenParams(params),
      id,
      trigger
    }
  }
}

export default Button
