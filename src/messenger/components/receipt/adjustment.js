/**
 * Component used in {@link Receipt} templates
 * 
 * @memberof Messenger
 * @category Components
 * 
 * @property {string} name - Required, name of the adjustment.
 * @property {number} amount - Required, the amount of the adjustment.
 * 
 * @example
 * const adjustment = new Messenger.ReceiptAdjustment({
 *   name: "10% discount",
 *   amount: 4.95
 * })
 **/
class ReceiptAdjustment {

  /**
   * Describes a payment adjustments, such as discounts
   *
   * @param {object} opts - Required properties
   * @param {string} opts.name - Required, name of the adjustment.
   * @param {number} opts.amount - Required, the amount of the adjustment.
   **/
  constructor(opts = {}) {

    const {
      name,
      amount
    } = opts

    if(typeof name !== 'string' || !name.length) {
      throw new Error('ReceiptAdjustment name is mandatory')
    }

    if(typeof amount !== 'number') {
      throw new Error('ReceiptAdjustment amount is mandatory')
    }

    this.name = name
    this.amount = amount
  }

  toJSON() {
    const {
      name,
      amount
    } = this

    return {
      name,
      amount
    }
  }
}

export default ReceiptAdjustment
