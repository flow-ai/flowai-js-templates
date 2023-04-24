import { nanoid } from 'nanoid'

import { parseParam, flattenParams } from '../../base/components/param'

/**
 * Render a button inside {@link Card} or {@link Buttons} templates. Unlike {@link QuickReply} templates, by default a button will remain on the screen even after a user presses them.
 * 
 * @category RBM
 * 
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event, flow, step)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 * @property {Base.Param[]} params - Optional parameters associated with the button
 * @example
 * new Button({
 *  type: 'webview',
 *  label: 'More info'
 *  value: 'https://...'
 * })
 **/
class Button {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event, flow, step)
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value) (not for calendar action)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.id - Optional, id of the button. If not passed will be automatically generated
   * @param {string} opts.title - Required
   * @param {string} opts.description - Optional
   * @param {string} opts.startTime - Required
   * @param {string} opts.endTime - Required
   * @param {string} opts.timezone - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  constructor({ type, label, value, param, newTab, params, id, title, description, startTime, endTime, timezone}) {

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory')
    }
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory')
    }

    this.id = id

    if (!this.id) {
      this.id = `b${nanoid(8)}`
    }

    this.params = parseParam(param || params)
    this.type = type
    this.label = label
    this.value = value
    this.title = title
    this.description = description
    this.startTime = startTime
    this.endTime = endTime
    this.timezone = timezone
    this.newTab = Boolean(newTab)
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
      title,
      description,
      startTime,
      endTime,
      timezone,
      params,
      id
    } = this

    return {
      type,
      label,
      value,
      newTab,
      title,
      description,
      startTime,
      endTime,
      timezone,
      params: flattenParams(params),
      id
    }
  }
}

export default Button