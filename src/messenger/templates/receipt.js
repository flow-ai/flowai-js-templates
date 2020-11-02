import Template from '../../generic/templates/template'
import ReceiptElement from '../components/receipt/element'
import ReceiptAddress from '../components/receipt/address'
import ReceiptAdjustment from '../components/receipt/adjustment'
import ReceiptSummary from '../components/receipt/summary'

/**
 * Receipt Template
 * 
 * @description
 * The receipt template allows you to send an order confirmation. The template may include an order summary, payment details, and shipping information.
 * 
 * @category Templates
 * 
 * @property {boolean} sharable - Optional, set to true to enable the native share button in Messenger for the template message. Defaults to false.
 * @property {string} recipientName - Required, the recipient's name.
 * @property {string} merchantName - Optional, the merchant's name. If present this is shown as logo text.
 * @property {string} orderNumber - Required, the order number. Must be unique.
 * @property {string} currency - Required,  currency of the payment.
 * @property {string} paymentMethod - Required, the payment method used. Providing enough information for the customer to decipher which payment method and account they used is recommended. This can be a custom string, such as, "Visa 1234".
 * @property {string} timestamp - Optional, timestamp of the order in seconds.
 * @property {ReceiptElement[]} elements - Optional, array of a maximum of 100 element objects that describe items in the order. Sort order of the elements is not guaranteed.
 * @property {ReceiptAddress} address - Optional, the shipping address of the order.
 * @property {ReceiptSummary} summary - Optional, the payment summary. See summary.
 * @property {ReceiptAdjustment[]} adjustments - Optional, an array of payment objects that describe payment adjustments, such as discounts.
 * 
 * @example
 * // Create a receipt
 * const receipt = new Messenger.Receipt({
 *   recipientName: "Stephane Crozatier",
 *   orderNumber: "12345678902",
 *   currency: "USD",
 *   paymentMethod: "Visa 2345",
 *   orderUrl: "http://petersapparel.parseapp.com/order?order_id=123456",
 *   timestamp: "1428444852",
 *   address: new Messenger.ReceiptAddress({
 *     street1: "1 Hacker Way",
 *     street2: "2nd floor",
 *     city: "Menlo Park",
 *     postalCode: "94025",
 *     state: "CA",
 *     country: "US"
 *   }),
 *   summary: new Messenger.ReceiptSummary({
 *     subtotal: 75.00,
 *     shippingCost: 4.95,
 *     totalTax: 6.19,
 *     totalCost: 56.14
 *   }),
 *   adjustments: [
 *     new Messenger.ReceiptAdjustment({
 *       name: "New Customer Discount",
 *       amount: 20
 *     }),
 *     new Messenger.ReceiptAdjustment({
 *       name: "$10 Off Coupon",
 *       amount: 10
 *     })
 *   ],
 *   elements: [
 *     new Messenger.ReceiptElement({
 *       title: "Classic White T-Shirt",
 *       subtitle: "100% Soft and Luxurious Cotton",
 *       quantity: 2,
 *       price: 29.95,
 *       currency: "USD",
 *       imageUrl: "http://petersapparel.parseapp.com/img/whiteshirt.png"
 *     }),
 *     new Messenger.ReceiptElement({
 *       title: "Classic Gray T-Shirt",
 *       subtitle: "100% Soft and Luxurious Cotton",
 *       quantity: 2,
 *       price: 49.95,
 *       currency: "USD",
 *       imageUrl: "http://petersapparel.parseapp.com/img/grayshirt.png"
 *     })
 *   ]
 * })
 **/
class Receipt extends Template {

  /**
   * Create a Receipt template
   **/
  constructor(opts) {
    super(opts)

    const {
      sharable,
      recipientName,
      merchantName,
      orderNumber,
      orderUrl,
      currency,
      paymentMethod,
      timestamp,
      elements,
      address,
      summary,
      adjustments
    } = opts

    if(sharable !== undefined && typeof sharable !== 'boolean') {
      throw new Error(`sharable needs to be a boolean value`)
    }

    if(recipientName === undefined || typeof recipientName !== 'string') {
      throw new Error(`recipientName needs to be a valid string`)
    }

    if(merchantName !== undefined && typeof merchantName !== 'string') {
      throw new Error(`merchantName needs to be a valid string`)
    }

    if(orderNumber === undefined || typeof orderNumber !== 'string') {
      throw new Error(`orderNumber needs to be a valid string`)
    }

    if(orderUrl === undefined || typeof orderUrl !== 'string') {
      throw new Error(`orderUrl needs to be a valid string`)
    }

    if(currency === undefined || typeof currency !== 'string') {
      throw new Error(`currency needs to be a valid string`)
    }

    if(currency.length > 3 || currency.length < 2) {
      throw new Error(`currency must be provided as for example USD or EUR`)
    }

    if(paymentMethod === undefined || typeof paymentMethod !== 'string') {
      throw new Error(`paymentMethod needs to be a valid string`)
    }

    if(timestamp !== undefined && typeof timestamp !== 'string') {
      throw new Error(`timestamp needs to be a valid string`)
    }

    if(elements !== undefined && !Array.isArray(elements)) {
      throw new Error(`elements needs to be an array`)
    }

    if(address !== undefined && typeof address !== 'object') {
      throw new Error(`address needs to be a valid object`)
    }

    if(summary === undefined || typeof summary !== 'object') {
      throw new Error(`summary needs to be provided`)
    }

    if(adjustments !== undefined && !Array.isArray(adjustments)) {
      throw new Error(`adjustments needs to be an array`)
    }

    this.sharable = sharable || false
    this.recipientName = recipientName
    this.merchantName = merchantName || undefined
    this.orderNumber = orderNumber
    this.orderUrl = orderUrl
    this.currency = currency 
    this.paymentMethod = paymentMethod
    this.timestamp = timestamp || undefined
    this.elements = elements
    this.address = address || undefined
    this.summary = summary 
    this.adjustments = adjustments || undefined
  }

  toJSON() {
    const {
      delay,
      fallback,

      sharable,
      recipientName,
      merchantName,
      orderNumber,
      orderUrl,
      currency,
      paymentMethod,
      timestamp,
      elements,
      address,
      summary,
      adjustments
    } = this

    return {
      type: 'receipt',
      payload: {
        sharable,
        recipientName,
        merchantName,
        orderNumber,
        orderUrl,
        currency,
        paymentMethod,
        timestamp,
        elements,
        address,
        summary,
        adjustments
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Receipt
