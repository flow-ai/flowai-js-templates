import { parseParam, flattenParams } from '../../base/components/param'

/**
 * Default action used in {@link Card}, {@link List} and {@link Buttons} templates
 * 
 * @category Components
 * 
 * @property {string} type - Type of action (url, phone, postback, share, login, webview, event)
 * @property {string} value - Value of the action
 * @property {Base.Param[]} params - Optional parameters associated with the action
 **/
class Action {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.value - Required
   * @param {Base.Param|Base.Param[]} opts.param - Optional Param or array or Array of Params related to this action
   * @example
   * const image = new Image({
   *   ...
   *   action: new Action({
   *     type: 'url',
   *     value: 'https://...'
   *   })
   * })
   **/
  constructor({ type, value, param }) {

    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Action value is mandatory')
    }

    this.value = value

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('Action type is mandatory')
    }

    this.type = type

    this.params = parseParam(param)
  }

  toJSON() {
    const {
      type,
      value,
      params
    } = this

    return {
      type,
      value,
      params: flattenParams(params)
    }
  }
}

export default Action
