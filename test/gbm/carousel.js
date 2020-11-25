import chai, { expect, assert } from 'chai'
import GBM from '../../src/gbm'

describe("GBM", () => {
  describe("Template Carousel", () => {

    it("can add card", () => {
      const card = new GBM.Card({ title: "Awesome title"})
      const carousel = new GBM.Carousel()
      carousel.addCard(card)
      expect(carousel.cards.length).to.equal(1)
    })

    it("can add array of cards", () => {
      const card1 = new GBM.Card({ title: "Awesome title 1"})
      const card2 = new GBM.Card({ title: "Awesome title 2"})
      const carousel = new GBM.Carousel([card1, card2])
      expect(carousel.cards.length).to.equal(2)
    })

    it("can add array of cards in regular opts", () => {
      const card1 = new GBM.Card({ title: "Awesome title 1"})
      const card2 = new GBM.Card({ title: "Awesome title 2"})
      const carousel = new GBM.Carousel({
        cardWidth: 'MEDIUM',
        cards: [card1, card2]
      })
      expect(carousel.cards.length).to.equal(2)
      expect(carousel.cardWidth).to.equal('MEDIUM')
    })

    it("cannot add invalid card", () => {
      const carousel = new GBM.Carousel()
      expect(() => carousel.addCard("fake card")).to.throw(Error)
    })
  })
})