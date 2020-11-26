/**
 * Base class for all response templates
 * 
 * @alias Base.Template
 * 
 * @category Templates
 * 
 * @abstract
 **/
class Template {

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
