import { parseParam, flattenParams } from '../../base/components/param'

/**
 * Component used in {@link Card}, {@link Buttons} templates
 * 
 * @category Components
 * 
 * @property {string} type - Type of button (url, phone, postback, share, login, webview, event)
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
   * @param {string} opts.type - Required, type of button (url, phone, postback, share, login, webview, event)
   * @param {string} opts.label - Required, label of the button
   * @param {string} opts.value - Required, value of the button (can be a URL or other string value)
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this button
   **/
  constructor({ type, label, value, param, params }) {

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Button type is mandatory')
    }
    if(typeof label !== 'string' || label.length === 0) {
      throw new Error('Button label is mandatory')
    }
    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Button value is mandatory')
    }

    this.params = parseParam(param || params)
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
