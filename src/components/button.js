import { parseParam, flattenParams } from './param'

/**
 * Component used in Card, Buttons templates
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event)
 * @property {string} label - Label of the button
 * @property {string} value - Value of the button
 * @property {Param[]} params - Optional parameters associated with the button
 * @example
 * new Button({
 *  type: 'webview',
 *  label: 'More info'
 *  value: 'https://...'
 * })
 **/
class Button {
  /**
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value)
   * @param {Param|Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  constructor({ type, label, value, param }) {

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory')
    }
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory')
    }

    this.params = parseParam(param)
    this.type = type
    this.label = label
    this.value = value
  }

  toJSON() {
    const {
      type,
      label,
      value,
      params
    } = this

    return {
      type,
      label,
      value,
      params: flattenParams(params)
    }
  }
}

export default Button
