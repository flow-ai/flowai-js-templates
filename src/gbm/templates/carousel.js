import Template from '../../base/templates/template'
import Card from './card'

/**
 * Template that displays a set of {@link GBM.Card} templates
 * @alias GBM.Carousel
 * 
 * @memberof GBM
 * @category Templates
 * 
 * @property {string} cardWidth - The width of the cards in the carousel, SMALL, MEDIUM or CARD_WIDTH_UNSPECIFIED
 * @property {GBM.Card[]} cards - Set of {@link GBM.Card} templates
 * 
 * @example
 * const card1 = new GBM.Card({
 *   title: "Awesome title 1",
 *   description: "Some description 1",
 *   media: new GBM.Media({
 *    fileUrl: "https://..."
 *   })
 * })
 *
 * const card2 = new GBM.Card({
 *   title: "Awesome title 2",
 *   description: "Some description 2",
 *   media: new GBM.Media({
 *    fileUrl: "https://...",
 *   })
 * })
 *
 * const carousel = new GBM.Carousel()
 * carousel.addCard(card1)
 * carousel.addCard(card2)
 *
 * @example
 * // Short hand
 *
 * const carousel = new GBM.Carousel([
 *   new GBM.Card({
 *     title: "Awesome title 1",
 *     description: "Some description 1",
 *     media: new GBM.Media({
 *      fileUrl: "https://..."
 *     })
 *   }),
 *   new GBM.Card({
 *     title: "Awesome title 2",
 *     description: "Some description 2",
 *     media: new GBM.Media({
 *      fileUrl: "https://..."
 *     })
 *   })
 * ])
 **/
class Carousel extends Template {

  /**
   * @param {object|GBM.Card[]} opts - Collection of options or shorthand for a collection of {@link GBM.Card} templates
   * @param {string} opts.cardWidth - Optional. Width of the cards in the carousel
   * @param {GBM.Card[]} opts.cards - Optional list of {@link GBM.Card} templates
   **/
  constructor(opts) {
    super()

    if(!opts) {
      return
    }

    const cards = Array.isArray(opts) ? opts : Array.isArray(opts.cards) ? opts.cards : []
    for (let i = 0; i < cards.length; i++) {
      this.addCard(cards[i])
    }

    if(opts && opts.cardWidth && Carousel.CardWidth.indexOf(opts.cardWidth)) {
      this.cardWidth = opts.cardWidth
    }
  }

  /**
   * Add a {@link GBM.Card} to the list of cards
   * @param {GBM.Card} - Card to add to the carousel
   * @return {GBM.Carousel}
   **/
  addCard(card) {
    if(!(card instanceof Card)) {
      throw new GBM.Error('Carousel addCard argument must be an instance of a Card')
    }

    if(!this.cards) {
      this.cards = []
    }

    // Simple way to hack
    card.isShallow = true

    this.cards.push(card)

    return this
  }

  toJSON() {
    const {
      cards,
      cardWidth,
      delay,
      fallback
    } = this

    return {
      type: 'gbm_carousel',
      payload: {
        cards,
        cardWidth
      },
      delay: delay || undefined,
      fallback
    }
  }
}

Carousel.CardWidth = [
  'CARD_WIDTH_UNSPECIFIED',
  'SMALL',
  'MEDIUM'
]

export default Carousel
