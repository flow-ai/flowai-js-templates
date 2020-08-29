/**
 * Apple Pay line item part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @property {string} amount - Required. The monetary amount of the line item
 * @property {string} label -  Required. A short, localized description of the line item
 * @property {string} type - Required A value that indicates whether the line item is "final" or "pending"
 * 
 * @example
 * new Apple.PayLineItem({
 *   amount: "59.00",
 *   label: "Halibut",
 *   type: "final"
 * })
 **/
class PayLineItem {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.amount - Required. The monetary amount of the line item
   * @param {string} opts.label -  Required. A short, localized description of the line item
   * @param {string} opts.type - Required A value that indicates whether the line item is "final" or "pending"
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a PayLineItem object we need all required data")
    }

    const {
      amount,
      label,
      type
    } = opts

    if((typeof amount !== "string" || !amount.length)) {
      throw new Error("PayLineItem amount is required")
    }
    if((typeof label !== "string" || !label.length)) {
      throw new Error("PayLineItem label is required")
    }
    if(typeof type !== "string" || !type.length) {
      throw new Error("PayLineItem type  is required")
    }

    this.amount = amount
    this.label = label
    this.type = type
  }

  toJSON() {
    const {
      amount,
      label,
      type
    } = this

    return {
      amount,
      label,
      type
    }
  }
}

export default PayLineItem