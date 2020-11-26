import Template from './template'

/**
 * The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex interaction, or response.
 * 
 * @alias GBM.Text
 * 
 * @memberof GBM
 * @category Templates
 * 
 * @property {string} text - Text to show
 * @property {boolean} containsRichText - True by default, indicates that the message contains rich text. If the message contains invalid formatting, returns an error.
 * @example
 * const text = new GBM.Text('Want a free soda?')
 * text.addSuggestion(new GBM.Suggestion({
 *   label: 'Yes',
 *   data: 'yes'
 * }))
 * text.addSuggestion(new GBM.Suggestion({
 *   label: 'No',
 *   data: 'no'
 * }))
 * 
 * @example
 * const text = new GBM.Text('Hello, here is some **bold text**, *italicized text*, and a [link](https://www.google.com).')
 **/
class Text extends Template {

  /**
   * @param {object|string} opts - Collection of options or the text
   * @param {string} opts.text - Required
   * @param {boolean} opts.containsRichText - Optional
   **/
  constructor(opts) {
    super()

    let text = opts
    if(typeof text === 'object') {
      text = opts.text
    }

    if(typeof text !== 'string' || !text.length) {
      throw new Error('Text is mandatory')
    }
    this.containsRichText = containsRichText || true
    this.text = text
  }

  toJSON() {
    const {
      text,
      containsRichText,
      suggestions,
      delay,
      fallback
    } = this

    return {
      type: 'gbm_text',
      payload: {
        text,
        containsRichText,
        suggestions
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Text
