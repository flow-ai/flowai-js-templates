import Template from './template'
import Card from './card'

/**
 * Template that displays a set of cards
 * @property {Card[]} cards - Set of cards
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
