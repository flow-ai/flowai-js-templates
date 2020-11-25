import Template from '../../base/templates/template'
import Suggestion from '../components/suggestion'
import Media from '../components/media'

/**
 * Send a related information, {@link GBM.Media} or {@link GBM.Suggestion} components
 * @alias GBM.Card
 * 
 * @memberof GBM
 * @category Templates
 * 
 * @property {string} title - Main title of the card
 * @property {string} description - Optional description
 * @property {Media} media - Optional {@link GBM.Media}
 * @property {Suggestion[]} suggestions - Optional set of {@link GBM.Suggestion} components
 * @example
 * const suggestion1 = new Suggestion({
 *   label: "Label",
 *   type: "url",
 *   url: "https://..."
 * })
 *
 * const suggestion2 = new Suggestion({
 *   label: "Label",
 *   type: "url",
 *   url: "https://..."
 *  })
 *
 * const card = new Card({
 *   title: "Awesome title",
 *   description: "Some description",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 * card.addSuggestion(suggestion1)
 * card.addSuggestion(suggestion2)
 **/
class Card extends Template {

  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.title - Optional
   * @param {string} opts.description - Optional
   * @param {GBM.Media} opts.media - Optional {@link GBM.Media}
   **/
  constructor({ title, description, media }) {
    super()

    this.title = title || undefined
    this.description = description || undefined
    this.media = media || undefined
  }

  set media(media) {
    if(media && !(media instanceof Media)) {
      throw new Error('Card media must be an instance of Media')
    }

    this._media = media
  }

  get media() {
    return this._media
  }

  /**
   * Add a suggestion to the card
   * @param {GBM.Suggestion} - suggestion
   * @return {GBM.Card}
   **/
  addSuggestion(suggestion) {
    if(!(suggestion instanceof Suggestion)) {
      throw new Error('Card addSuggestion argument must be an instance of a Suggestion')
    }

    if(!this.suggestions) {
      this.suggestions = []
    }

    this.suggestions.push(suggestion)

    return this
  }

  toJSON() {
    const {
      title,
      description,
      media,
      suggestions,
      delay,
      fallback
    } = this

    if( this.isShallow )  {
      return {
        title,
        description,
        media,
        suggestions
      }
    }

    return {
      type: 'gbm_card',
      payload: {
        title,
        description,
        media,
        suggestions
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Card
