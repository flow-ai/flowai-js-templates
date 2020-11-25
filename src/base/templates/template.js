/**
 * Base class for all response templates
 * 
 * @category Templates
 * 
 * @property {Number} delay - Optional delay in milliseconds for sending the response
 * @abstract
 **/
class Template {

  /**
   * Define a delay for the response in milliseconds
   * @param {Number} delay - Required
   **/
  set delay(delay) {
    if(!(typeof delay === 'number')) {
      throw new Error('Delay must be a number')
    }

    if(delay < 0) {
      throw new Error('Delay must be positive number')
    }

    this._delay = delay
  }

  get delay() {
    return this._delay || 0
  }

  /**
   * Optional fallback speech
   * @param {string} fallback - Required
   **/
  set fallback(fallback) {
    if(!(typeof fallback === 'string') && fallback !== undefined) {
      throw new Error('Fallback must be a string or undefined')
    }
    this._fallback = fallback
  }

  get fallback() {
    return this._fallback || undefined
  }
}

export default Template
