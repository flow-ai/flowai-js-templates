import Template from '../../generic/templates/template'

/**
 * Products Template
 * 
 * @description
 * The product template can be used to render products that have been uploaded to Facebook catalog. Product details (image, title, price) will automatically be pulled from the product catalog.
 * 
 * @category Templates
 * 
 * @property {string[]} productIds - list of product IDs
 * 
 * @example
 * // Single product card
 * const product = new Messenger.Products('11232112332')
 * 
 * // Carousel of products
 * const product = new Messenger.Products(['11232112332', '23422224343])
 **/
class Products extends Template {

  /**
   * @param {string[]} productIds - Required
   **/
  constructor(productIds) {
    super()

    if (!Array.isArray(productIds) || !productIds.length) {
      throw new Error('productIds must be an array and contain at least one product ID')
    }

    this.productIds = productIds
  }

  toJSON() {
    const {
      productIds,
      delay,
      fallback
    } = this

    return {
      type: 'messenger_products',
      payload: {
        productIds
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Products
