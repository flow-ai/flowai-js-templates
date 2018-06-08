/**
 * Data related to a Button or Quick Reply
 * @property {string} label - Name of the parameter
 * @property {string} value - Value of the parametet
 * @example
 * // Render a Button that triggers an event with a Param
 * const param = new Param('itemId', '332223323')
 * const button = new Button({
 *  label: 'More info',
 *  type: 'event',
 *  value: 'MORE_INFO',
 *  param
 * })
 * @example
 * // Render a QuickReply that triggers an event with Params
 * const shopId = new Param('shopId', '33211233')
 * const productId = new Param('productId', '123443211')
 * const quickReply = new QuickReply({
 *  label: 'Product details',
 *  type: 'event',
 *  value: 'PRODUCT_DETAILS',
 *  param: [shopId, productId]
 * })
 * @example
 * const image = new Image({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'event',
 *     value: 'ORDER',
 *     param: new Param('productId', '12e2-22342-aasd2')
 *   })
 * })
 **/
class Param {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.label - Required
   * @param {string} opts.value - Required
   **/
  constructor(first, second) {

    let label, value
    if(first && typeof first === 'object') {
      label = first.label
      value = first.value
    } else {
      label = first
      value = second
    }

    if(!label || typeof label !== 'string' || !label.length) {
      throw new Error('Param label should be a valid string')
    }

    this.label = label
    this.value = value
  }

  toJSON() {
    const {
      label,
      value
    } = this

    return {
      label,
      value
    }
  }
}

const parseParam = param => {

  const params = []

  if(param && !(param instanceof Param) && !Array.isArray(param)) {
    throw new Error('param should be an instance of Param or an array of Param instances')
  }

  if(Array.isArray(param)) {
    for (let i = 0; i < param.length; i++) {
      if(!(param[i] instanceof Param)) {
        throw new Error('any item inside a param array should be an instance of Param')
      }

      const idx = params.findIndex(p => param[i].label === p.label)
      if(idx === -1) {
        params.push(param[i])
      } else {
        params[idx] = param[i]
      }
    }
  } else if(param) {
    params.push(param)
  }

  return !!params.length ? params : undefined
}

export { Param, parseParam }
