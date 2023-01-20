import chai, { expect, assert } from 'chai'
import RBM from '../../src/rbm'

describe("RBM", () => {
  describe("Template Carousel", () => {
    it("can add card", () => {
      const card = new RBM.Card({ title: "Awesome title", cardOrientation: 'VERTICAL'})
      const carousel = new RBM.Carousel()
      carousel.addCard(card)
      expect(carousel.cards.length).to.equal(1)
    })

    it("can add array of cards", () => {
      const card1 = new RBM.Card({ title: "Awesome title 1", cardOrientation: 'VERTICAL'})
      const card2 = new RBM.Card({ title: "Awesome title 2", cardOrientation: 'VERTICAL'})
      const carousel = new RBM.Carousel
      carousel.addCard(card1)
      carousel.addCard(card2)
      expect(carousel.cards.length).to.equal(2)
    })

    it("cannot add invalid card", () => {
      const carousel = new RBM.Carousel()
      expect(() => carousel.addCard("fake card")).to.throw(Error)
    })
  })
})