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

/**
 * Helper method to convert a list of params
 **/
const parseParam = param => {

  const params = []

  const isArray = Array.isArray(param),
        isParam = (param instanceof Param),
        isObject = (typeof param === 'object')
  
  if(param && !isParam && !isObject && !isArray) {
    throw new Error('param should be an instance of Param or an array of Param instances')
  }

  if(isParam) {
    params.push(param)
  } else if(isArray) {
    for (let i = 0; i < param.length; i++) {
      if(param[i] instanceof Param) {
        params.push(param[i])
      } else if(typeof param[i] === 'object') {
        const {
          label,
          value
        } = param[i] 

        if(label && value) {
          params.push(new Param({ 
            label, 
            value 
          }))
        }
      } else {
        throw new Error('any item inside a param array should be an instance of Param or an object')
      }
    }
  } else if(isObject && param.label && param.value) {
    params.push(new Param(param))
  }

  return !!params.length ? params : undefined
}

/**
 * Helper method to convert params into the expected format
 **/
const flattenParams = params => {
  if(!Array.isArray(params)) {
    return
  }

  const data = {}

  for (let i = 0; i < params.length; i++) {
    const {
      label,
      value
    } = params[i]

    if(!data[label]) {
      data[label] = []
    }

    data[label].push({ value })
  }

  return data
}

export { Param, parseParam, flattenParams }
