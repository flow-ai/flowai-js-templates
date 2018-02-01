import Template from './template'

/**
 * Template composed with your own data. Use this to create specific UI widgets or components to your app or web ui. Do remember we cannot convert these type of templates to channels like Messenger.
 * @property {object} data - Data tailored to your use case
 * @example
 * const custom = new Custom({
 *   title: 'Big screen TV',
 *   brand: 'Awesome Elec.',
 *   catId: 35633123322,
 *   prices: {
 *     'EURO': 1800,
 *     'DOLLAR': '2400'
 *   }
 * })
 * // You can still add quick replies
 * // to these type of componentz
 * custom.addQuickReply(new QuickReply({
 *   label: 'Order now',
 *   value: 'order 35633123322'
 * }))
 **/
class Custom extends Template {

  /**
   * @param {object} data - Required
   **/
  constructor(data) {
    super()

    if(typeof data !== 'object') {
      throw new Error('Custom data is mandatory')
    }

    this.data = data
  }

  toJSON() {
    const {
      data,
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'custom',
      payload: Object.assign(data, {
        quickReplies
      }),
      delay,
      fallback
    }
  }
}

export default Custom
