/**
 * Apple Pay merchant data part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @property {string} identifier - Required. A unique identifier that represents a merchant for Apple Pay.
 * @property {string} displayName -  Required. A string of 64 or fewer UTF-8 characters containing the canonical name for your store, suitable for display. 
 * @property {string} countryCode - Required The merchant’s two-letter ISO 3166 country code
 * @property {string} currencyCode - Required. The three-letter ISO 4217 currency code for the payment.
 * @property {string[]} capabilities - Optional. An array of payment capabilities supported by the merchant. The array must include supports3DS, and may optionally include supportsCredit, supportsDebit, and supportsEMV
 * @property {string[]} supportedNetworks - Optional. An array of payment networks supported by the merchant. The array must include one or more of the following values: amex, discover, jcb, masterCard, privateLabel, or visa. 
 * 
 * @example
 * new Apple.PayMerchant({
 *   identifier: "abc",
 *   displayName: "Ny Super Store",
 *   countryCode: "us",
 *   currencyCode: "usd",
 *   capabilities: [
 *     'supports3DS',
 *     'supportsCredit',
 *     'supportsDebit'
 *   ],
 *   supportedNetworks:[
 *     "amex",
 *     "visa",
 *     "discover",
 *     "masterCard"
 *   ]
 * })
 **/
class PayMerchant {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Required. A unique identifier that represents a merchant for Apple Pay.
   * @param {string} opts.displayName -  Required. A string of 64 or fewer UTF-8 characters containing the canonical name for your store, suitable for display. 
   * @param {string} opts.countryCode - Required The merchant’s two-letter ISO 3166 country code
   * @param {string} opts.currencyCode - Required. The three-letter ISO 4217 currency code for the payment.
   * @param {string[]} opts.capabilities - Optional. An array of payment capabilities supported by the merchant. The array must include supports3DS, and may optionally include supportsCredit, supportsDebit, and supportsEMV
   * @param {string[]} opts.supportedNetworks - Optional. An array of payment networks supported by the merchant. The array must include one or more of the following values: amex, discover, jcb, masterCard, privateLabel, or visa. 
    **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a PayMerchant object we need all required data")
    }

    const {
      identifier,
      displayName,
      countryCode,
      currencyCode,
      capabilities,
      supportedNetworks
    } = opts

    if((typeof identifier !== "string" || !identifier.length)) {
      throw new Error("PayMerchant identifier is required")
    }
    if((typeof displayName !== "string" || !displayName.length)) {
      throw new Error("PayMerchant displayName is required")
    }
    if(typeof countryCode !== "string" || countryCode.length !== 2) {
      throw new Error("PayMerchant countryCode requires a two letter country code for the merchant")
    }
    if(typeof currencyCode !== "string" || currencyCode.length !== 3) {
      throw new Error("PayMerchant currencyCode requires a three letter currency code for the merchant")
    }
    if(typeof capabilities !== "undefined" && !Array.isArray(capabilities)) {
      throw new Error("PayMerchant capabilities should be an array of payment capabilities")
    }
    if(typeof supportedNetworks !== "undefined" && !Array.isArray(supportedNetworks)) {
      throw new Error("PayMerchant supportedNetworks should be an array of supported networks")
    }

    this.identifier = identifier
    this.displayName = displayName
    this.countryCode = countryCode
    this.currencyCode = currencyCode
    this.capabilities = capabilities || undefined
    this.supportedNetworks = supportedNetworks || undefined
  }

  toJSON() {
    const {
      identifier,
      displayName,
      countryCode,
      currencyCode,
      capabilities,
      supportedNetworks
    } = this

    return {
      identifier,
      displayName,
      countryCode,
      currencyCode,
      capabilities,
      supportedNetworks
    }
  }
}

export default PayMerchant