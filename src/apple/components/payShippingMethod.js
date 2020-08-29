/**
 * Apple Pay shipping method part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 *
 * @property {string} identifier - Required. A client-defined value used to identify this shipping method
 * @property {string} amount - Required. The nonnegative cost associated with this shipping method
 * @property {string} label -  Required. A short description of the shipping method
 * @property {string} type - Required A value that indicates whether the line item is "final" or "pending"
 * 
 * @example
 * new Apple.PayShippingMethod({
 *   identifier: "in_store_pickup",
 *   amount: "59.00",
 *   label: "Halibut",
 *   detail: "final"
 * })
 **/
class PayShippingMethod {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Required. A client-defined value used to identify this shipping method
   * @param {string} opts.amount - Required. The nonnegative cost associated with this shipping method
   * @param {string} opts.label -  Required. A short description of the shipping method
   * @param {string} opts.detail - Additional description of the shipping method
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a PayShippingMethod object we need all required data")
    }

    const {
      identifier,
      amount,
      label,
      detail
    } = opts

    if((typeof identifier !== "string" || !identifier.length)) {
      throw new Error("PayShippingMethod identifier is required")
    }
    if((typeof amount !== "string" || !amount.length)) {
      throw new Error("PayShippingMethod amount is required")
    }
    if((typeof label !== "string" || !label.length)) {
      throw new Error("PayShippingMethod label is required")
    }
    if(typeof detail !== "string" || !detail.length) {
      throw new Error("PayShippingMethod detail is required")
    }

    this.identifier = identifier
    this.amount = amount
    this.label = label
    this.detail = detail
  }

  toJSON() {
    const {
      identifier,
      amount,
      label,
      detail
    } = this

    return {
      identifier,
      amount,
      label,
      detail
    }
  }
}

export default PayShippingMethod