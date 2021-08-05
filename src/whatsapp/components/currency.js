
/**
 *
 * @category Whatsapp
 *
 * @property {string} fallback_value
 * @property {number} code
 * @property {number} amount_1000
 **/
class Currency {
  /**
   * @param {string} opts.fallback_value
   * @param {number} opts.code
   * @param {number} opts.amount_1000
   **/
  constructor({ fallback_value, code, amount_1000 }) {

    if(typeof fallback_value !== 'string' || fallback_value.length === 0){
      throw new Error('Fallback is mandatory')
    }
    if(typeof code !== 'string' || code.length === 0){
      throw new Error('Code is mandatory')
    }
    if(typeof amount_1000 !== 'string' || amount_1000.length === 0){
      throw new Error('Amount is mandatory')
    }

    this.fallback_value = fallback_value
    this.code = code
    this.amount_1000 = amount_1000
  }

  toJSON() {
    const {
      fallback_value,
      code,
      amount_1000,
    } = this

    return {
      type: 'currency',
      currency: {
        fallback_value,
        code,
        amount_1000,
      }
    }
  }
}

export default Currency
