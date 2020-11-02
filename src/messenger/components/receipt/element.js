/**
 * Component used in {@link Receipt} templates
 * 
 * @category Components
 * 
 * @property {string} title - Required, the name to display for the item.
 * @property {string} subtitle - Optional, a brief item description
 * @property {number} quantity - Optional, the quantity of the item purchased.
 * @property {number} price - Required, the price of the item. For free items, '0' is allowed.
 * @property {string} currency - Optional, the currency of the item price.
 * @property {string} imageUrl - Optional, the URL of an image to be displayed with the item.
 * 
 * @example
 * const element = new Messenger.ReceiptElement({
 * })
 **/
class ReceiptElement {

  /**
   * The shipping element of an order
   *
   * @param {object} opts - Required properties
   * @param {string} opts.title - Required, the name to display for the item.
   * @param {string} opts.subtitle - Optional, a brief item description
   * @param {number} opts.quantity - Optional, the quantity of the item purchased.
   * @param {number} opts.price - Required, the price of the item. For free items, '0' is allowed.
   * @param {string} opts.currency - Optional, the currency of the item price.
   * @param {string} opts.imageUrl - Optional, the URL of an image to be displayed with the item.
   **/
  constructor(opts = {}) {

    const {
      title,
      subtitle,
      quantity,
      price,
      currency,
      imageUrl
    } = opts

    if(typeof title !== 'string' || !title.length) {
      throw new Error('ReceiptElement title is mandatory')
    }

    if(subtitle !== undefined && typeof subtitle !== 'string') {
      throw new Error(`ReceiptElement subtitle needs to be a valid string`)
    }

    if(quantity !== undefined && typeof quantity !== 'number') {
      throw new Error(`ReceiptElement quantity needs to be a valid number`)
    }

    if(typeof price !== 'number') {
      throw new Error('ReceiptElement price is mandatory')
    }

    if(currency !== undefined && typeof currency !== 'string') {
      throw new Error(`ReceiptElement currency needs to be a valid string`)
    }

    if(imageUrl !== undefined && typeof imageUrl !== 'string') {
      throw new Error(`ReceiptElement imageUrl needs to be a valid string`)
    }

    this.title = title
    this.subtitle = subtitle
    this.quantity = quantity
    this.price = price
    this.currency = currency
    this.imageUrl = imageUrl
  }

  toJSON() {
    const {
      title,
      subtitle,
      quantity,
      price,
      currency,
      imageUrl
    } = this

    return {
      title,
      subtitle,
      quantity,
      price,
      currency,
      imageUrl
    }
  }
}

export default ReceiptElement