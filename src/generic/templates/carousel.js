import Template from './template'
import Card from './card'

/**
 * Template that renders a set of generic {@link Card} templates
 * 
 * @category Generic
 * 
 * @property {Card[]} cards - Set of {@link Card} templates
 * @example
 * const card1 = new Card({
 *   title: "Awesome title 1",
 *   subtitle: "Some subtitle 1",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const card2 = new Card({
 *   title: "Awesome title 2",
 *   subtitle: "Some subtitle 2",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const carousel = new Carousel()
 * carousel.addCard(card1)
 * carousel.addCard(card2)
 *
 * @example
 * // Short hand
 * const card1 = new Card({
 *   title: "Awesome title 1",
 *   subtitle: "Some subtitle 1",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const card2 = new Card({
 *   title: "Awesome title 2",
 *   subtitle: "Some subtitle 2",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const carousel = new Carousel([card1, card2])
 **/
class Carousel extends Template {

  /**
   * @param {Array} cards - Optional list of {@link Card} templates
   **/
  constructor(cards) {
    super()

    if(Array.isArray(cards)) {
      for (let i = 0; i < cards.length; i++) {
        this.addCard(cards[i])
      }
    }
  }

  /**
   * Add a {@link Card} to the list of cards
   * @param {Card} - card
   * @return {Carousel}
   **/
  addCard(card) {
    if(!(card instanceof Card)) {
      throw new Error('Carousel addCard argument must be an instance of a Card')
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
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'carousel',
      payload: {
        cards,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Carousel
