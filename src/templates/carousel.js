import Template from './template'
import Card from './card'

/**
 * Template that displays a set of cards
 * @property {Card[]} cards - Set of cards
 * @example
 * const card1 = new Card({
 *   title: "Awesome title 1",
 *   subtitle: "Some subtitle 1",
 *   image: new Media("https://...")
 * })
 *
 * const card2 = new Card({
 *   title: "Awesome title 2",
 *   subtitle: "Some subtitle 2",
 *   image: new Media("https://...")
 * })
 *
 * const carousel = new Carousel()
 * carousel.addCard(card1)
 * carousel.addCard(card2)
 **/
class Carousel extends Template {

  /**
   * Add a card to the cards
   * @param {Card} - card
   * @return {Carousel}
   **/
  addCard(card) {
    if(!(card instanceof Card)) {
      throw new Error('addCard argument must be an instance of a Card')
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
      quickReplies
    } = this

    return {
      type: 'carousel',
      payload: {
        cards,
        quickReplies
      }
    }
  }
}

export default Carousel
