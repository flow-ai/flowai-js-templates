import Template from './template'

/**
 * Base template for text
 * 
 * @alias Base.Text
 * 
 * @category Templates
 * 
 * @property {string} text - Text to show
 * @example
 * const text = new Text('Want a free soda?')
 **/
class Text extends Template {

  /**
   * @param {string} opts.text - Required
   **/
  constructor(opts) {
    super()

    let text = opts
    if(typeof text === 'object') {
      text = opts.text
    }

    if(typeof text !== 'string' || !text.length) {
      throw new Error('Text is mandatory')
    }

    this.text = text
  }

  toJSON() {
    const {
      text,
      delay,
      fallback
    } = this

    return {
      type: 'text',
      payload: {
        text
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Text
