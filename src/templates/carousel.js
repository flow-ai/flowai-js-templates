import Template from './template'
import Card from './card'

/**
 * Template that displays a set of cards
 * @property {Card[]} cards - Set of cards
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
   * @param {Array} cards - Optional
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
   * Add a card to the cards
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
      delay,
      fallback
    }
  }
}

export default Carousel
