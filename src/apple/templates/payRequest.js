import Template from '../../base/templates/template'
import InteractiveMessage from '../components/interactiveMessage'
import PayEndpoints from '../components/payEndpoints'
import PayMerchant from '../components/payMerchant'
import PayShippingMethod from '../components/payShippingMethod'
import PayLineItem from '../components/payLineItem'

/**
 * Apple Pay payment request
 * 
 * @memberof Apple
 * @category Apple Pay
 * 
 * @example
 * const payRequest = new Apple.PayRequest({
 *   merchant: new Apple.PayMerchant({
 *     identifier: "abc",
 *     displayName: "Ny Super Store",
 *     countryCode: "us",
 *     currencyCode: "usd",
 *     capabilities: [
 *       'supports3DS',
 *       'supportsCredit',
 *       'supportsDebit'
 *     ],
 *     supportedNetworks:[
 *       "amex",
 *       "visa",
 *       "discover",
 *       "masterCard"
 *     ]
 *   }),      
 *   shippingMethods: [
 *     new Apple.PayShippingMethod({    
 *       identifier: "FreeShip",
 *       label: "Free Shipping",
 *       detail: "Arrives in 5 to 7 days",
 *       amount: "0.00"
 *     })
 *   ],
 *   requiredBillingContactFields: [
 *     "post"
 *   ],
 *   requiredShippingContactFields: [
 *     "post",
 *     "phone",
 *     "email",
 *     "name"
 *   ],
 *   lineItems: [
 *     new Apple.PayLineItem({  
 *       amount: "59.00",
 *       label: "Halibut",
 *       type: "final"
 *     }),
 *     new Apple.PayLineItem({  
 *       amount: "4.99",
 *       label: "Shipping",
 *       type: "final"
 *     })
 *   ],
 *   total: new Apple.PayLineItem({
 *     amount: "63.99",
 *     label: "Sam's Fish",
 *     type: "final"
 *   }),
 *   supportedCountries: [
 *     "US",
 *     "CA"
 *   ],
 *   endpoints: new Apple.PayEndpoints({
 *     fallbackUrl: "https://my.example/fallback/",
 *     orderTrackingUrl: "https://my.example/orderTrackingUrl/",
 *     paymentGatewayUrl: "https://my.example/paymentGateway/",
 *     paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
 *     shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
 *     shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
 *   }),
 *   receivedMessage: new Apple.InteractiveMessage({
 *     style: "large",
 *     subtitle: "$63.99 at Sam's Fish",
 *     title: "Halibut"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Thank you for your order"
 *   })
 * })
 **/
class PayRequest extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {PayMerchant} opts.merchant - Required. All required data about the Apple Pay merchant
  * @param {PayEndpoints} opts.endpoints - Optional. Contains the endpoints for payment processing, contact updates, and order tracking
  * @param {PayLineItem[]} opts.lineItems - Optional. An array of line items explaining payments and additional charges.
  * @param {PayShippingMethod[]} opts.shippingMethods - An array that lists the available shipping methods. The Apple Pay payment sheet displays the first shipping method from the array as the default shipping method
  * @param {string[]} opts.requiredBillingContactFields - Optional. The list of the customer's required billing information needed to process the transaction.Require only the contact fields needed to process the payment. Requesting unnecessary fields adds complexity to the transaction, which can increase the chances of the customer canceling the payment request. Can be "postalAddress"
  * @param {string[]} opts.requiredShippingContactFields - Optional. The list of shipping or contact information required from the customer to fulfill the order. For example, if you need the customer's email or phone number
  * @param {PayLineItem} opts.total - Required. The total amount must be greater than zero to pass validation. The label, defined in the total dictionary, appears on the payment sheet and should be the doing-business-as name of the business
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the payment request window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer completed payment
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create an PayRequest you need to provide all required options")
    }

    const {
      merchant,
      endpoints,
      lineItems,
      shippingMethods,
      requiredBillingContactFields,
      requiredShippingContactFields,
      total,
      supportedCountries,
      receivedMessage,
      replyMessage
    } = opts

    if(!(merchant instanceof PayMerchant)) {
      throw new Error("PayRequest requires a merchant of the type PayMerchant")
    }

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("PayRequest requires a replyMessage of the type InteractiveMessage")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("PayRequest requires a receivedMessage of the type InteractiveMessage")
    }

    if(typeof endpoints !== "undefined" && !(endpoints instanceof PayEndpoints)) {
      throw new Error("PayRequest requires the endpoints property to be of the type PayEndpoints")
    }

    if(typeof supportedCountries !== "undefined" && !Array.isArray(supportedCountries)) {
      throw new Error("PayRequest requires the supportedCountries to be an array of two-letter country codes")
    }

    if(typeof requiredBillingContactFields !== "undefined" && !Array.isArray(requiredBillingContactFields)) {
      throw new Error("PayRequest requires the requiredBillingContactFields to be an array ")
    }

    if(typeof requiredShippingContactFields !== "undefined" && !Array.isArray(requiredShippingContactFields)) {
      throw new Error("PayRequest requires the requiredShippingContactFields to be an array ")
    }

    if(!(total instanceof PayLineItem)) {
      throw new Error("PayRequest requires a total of the type PayLineItem")
    }

    if(Array.isArray(lineItems)) {
      for (let i = 0; i < lineItems.length; i++) {
        this.addLineItem(lineItems[i])
      }
    }

    if(Array.isArray(shippingMethods)) {
      for (let i = 0; i < shippingMethods.length; i++) {
        this.addShippingMethod(shippingMethods[i])
      }
    }
    
    this.merchant = merchant
    this.endpoints = endpoints || undefined
    this.total = total
    this.supportedCountries = supportedCountries || undefined
    this.requiredBillingContactFields = requiredBillingContactFields || undefined
    this.requiredShippingContactFields = requiredShippingContactFields || undefined
    this.receivedMessage = receivedMessage
    this.replyMessage = replyMessage
  }

  /**
   * Add a {@link PayLineItem} to the list of lineItems
   * 
   * @param {PayLineItem} - item
   * 
   * @return {PayRequest}
   **/
  addLineItem(item) {
    if(!(item instanceof PayLineItem)) {
      throw new Error('PayRequest addLineItem argument must be an instance of a Apple.PayLineItem')
    }

    if(!this.lineItems) {
      this.lineItems = []
    }

    this.lineItems.push(item)

    return this
  }

   /**
   * Add a {@link PayShippingMethod} to the list of shippingMethods
   * 
   * @param {PayShippingMethod} - item
   * 
   * @return {PayRequest}
   **/
  addShippingMethod(method) {
    if(!(method instanceof PayShippingMethod)) {
      throw new Error('PayRequest addShippingMethod argument must be an instance of a Apple.PayShippingMethod')
    }

    if(!this.shippingMethods) {
      this.shippingMethods = []
    }

    this.shippingMethods.push(method)

    return this
  }
  
  toJSON() {
    const {
      merchant,
      endpoints,
      lineItems,
      shippingMethods,
      requiredBillingContactFields,
      requiredShippingContactFields,
      total,
      supportedCountries,
      receivedMessage,
      replyMessage,
      delay,
      fallback
    } = this

    return {
      type: 'apple_pay_request',
      payload: {
        merchant,
        endpoints,
        lineItems,
        shippingMethods,
        requiredBillingContactFields,
        requiredShippingContactFields,
        total,
        supportedCountries,
        receivedMessage,
        replyMessage
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default PayRequest