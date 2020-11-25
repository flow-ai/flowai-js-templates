/**
 * Component used in {@link Receipt} templates
 * 
 * @memberof Messenger 
 * @category Components
 * 
 * @property {number} subtotal - Optional, the sub-total of the order.
 * @property {number} shippingCost - Optional, the shipping cost of the order.
 * @property {number} totalTax - Optional, the tax of the order.
 * @property {number} totalCost - Required, the total cost of the order, including sub-total, shipping, and tax.
 * 
 * @example
 * const summary = new Messenger.ReceiptSummary({
 *   subtotal: 75.00,
 *   shippingCost: 4.95,
 *   totalTax: 6.19,
 *   totalCost: 56.14
 * })
 **/
class ReceiptSummary {

  /**
   * The shipping summary of an order
   *
   * @param {object} opts - Required properties
   * @param {number} opts.subtotal - Optional, the sub-total of the order.
   * @param {number} opts.shippingCost - Optional, the shipping cost of the order.
   * @param {number} opts.totalTax - Optional, the tax of the order.
   * @param {number} opts.totalCost - Required, the total cost of the order, including sub-total, shipping, and tax.
   **/
  constructor(opts = {}) {

    const {
      subtotal,
      shippingCost,
      totalTax,
      totalCost
    } = opts

    if(subtotal !== undefined && typeof subtotal !== 'number') {
      throw new Error(`subtotal needs to be a valid number`)
    }

    if(shippingCost !== undefined && typeof shippingCost !== 'number') {
      throw new Error(`shippingCost needs to be a valid number`)
    }

    if(totalTax !== undefined && typeof totalTax !== 'number') {
      throw new Error(`totalTax needs to be a valid number`)
    }

    if(typeof totalCost !== 'number') {
      throw new Error('ReceiptSummary totalCost is mandatory')
    }

    this.subtotal = subtotal
    this.shippingCost = shippingCost
    this.totalTax = totalTax
    this.totalCost = totalCost
  }

  toJSON() {
    const {
      subtotal,
      shippingCost,
      totalTax,
      totalCost
    } = this

    return {
      subtotal,
      shippingCost,
      totalTax,
      totalCost
    }
  }
}

export default ReceiptSummary
