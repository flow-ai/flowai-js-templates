/**
 * Apple Pay payment request endpoints part of a {@link PayRequest}
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @property {string} fallbackUrl - Optional. A URL that opens in a web browser so the customer can complete the purchase if their device is unable to make payments using Apple Pay.
 * @property {string} orderTrackingUrl - Optional. Called by Business Chat after completing the order; provides you with an opportunity to update the order information in your system.
 * @property {string} paymentGatewayUrl - Optional. Called by Flow.ai to process the payment through the payment provider.
 * @property {string} paymentMethodUpdateUrl - Optional. Called by Apple Pay when the customer changes the payment method.
 * @property {string} shippingContactUpdateUrl - Optional. Called by Apple Pay when the customer changes their shipping address information.
 * @property {string} shippingMethodUpdateUrl - Optional. Called by Apple Pay when the customer changes the shipping method.
 * 
 * @example
 * new Apple.PayEndpoints({
 *   fallbackUrl: "https://my.example/fallback/",
 *   orderTrackingUrl: "https://my.example/orderTrackingUrl/",
 *   paymentGatewayUrl: "https://my.example/paymentGateway/",
 *   paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
 *   shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
 *   shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
 * })
 **/
class PayEndpoints {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.fallbackUrl - Optional. A URL that opens in a web browser so the customer can complete the purchase if their device is unable to make payments using Apple Pay.
   * @param {string} opts.orderTrackingUrl - Optional. Called by Business Chat after completing the order; provides you with an opportunity to update the order information in your system.
   * @param {string} opts.paymentGatewayUrl - Optional. Called by Flow.ai to process the payment through the payment provider.
   * @param {string} opts.paymentMethodUpdateUrl - Optional. Called by Apple Pay when the customer changes the payment method.
   * @param {string} opts.shippingContactUpdateUrl - Optional. Called by Apple Pay when the customer changes their shipping address information.
   * @param {string} opts.shippingMethodUpdateUrl - Optional. Called by Apple Pay when the customer changes the shipping method.
   **/
  constructor(opts) {
    
    if(typeof opts !== "object") {
      throw new Error("To create a PayEndpoints object we require a set of URLs")
    }

    const {
      fallbackUrl,
      orderTrackingUrl,
      paymentGatewayUrl,
      paymentMethodUpdateUrl,
      shippingContactUpdateUrl,
      shippingMethodUpdateUrl
    } = opts

    if(typeof fallbackUrl !== "undefined" && (typeof fallbackUrl !== "string" || !fallbackUrl.length)) {
      throw new Error("PayEndpoints fallbackUrl is required")
    }
    if(typeof orderTrackingUrl !== "undefined" && (typeof orderTrackingUrl !== "string" || !orderTrackingUrl.length)) {
      throw new Error("PayEndpoints orderTrackingUrl is required")
    }
    if(typeof paymentGatewayUrl !== "undefined" && (typeof paymentGatewayUrl !== "string" || !paymentGatewayUrl.length)) {
      throw new Error("PayEndpoints paymentGatewayUrl is required")
    }
    if(typeof paymentMethodUpdateUrl !== "undefined" && (typeof paymentMethodUpdateUrl !== "string" || !paymentMethodUpdateUrl.length)) {
      throw new Error("PayEndpoints paymentMethodUpdateUrl is required")
    }
    if(typeof shippingContactUpdateUrl !== "undefined" && (typeof shippingContactUpdateUrl !== "string" || !shippingContactUpdateUrl.length)) {
      throw new Error("PayEndpoints shippingContactUpdateUrl is required")
    }
    if(typeof shippingMethodUpdateUrl !== "undefined" && (typeof shippingMethodUpdateUrl !== "string" || !shippingMethodUpdateUrl.length)) {
      throw new Error("PayEndpoints shippingMethodUpdateUrl is required")
    }

    this.fallbackUrl = fallbackUrl
    this.orderTrackingUrl = orderTrackingUrl
    this.paymentGatewayUrl = paymentGatewayUrl
    this.paymentMethodUpdateUrl = paymentMethodUpdateUrl
    this.shippingContactUpdateUrl = shippingContactUpdateUrl
    this.shippingMethodUpdateUrl = shippingMethodUpdateUrl
  }

  toJSON() {
    const {
      fallbackUrl,
      orderTrackingUrl,
      paymentGatewayUrl,
      paymentMethodUpdateUrl,
      shippingContactUpdateUrl,
      shippingMethodUpdateUrl
    } = this

    return {
      fallbackUrl,
      orderTrackingUrl,
      paymentGatewayUrl,
      paymentMethodUpdateUrl,
      shippingContactUpdateUrl,
      shippingMethodUpdateUrl
    }
  }
}

export default PayEndpoints