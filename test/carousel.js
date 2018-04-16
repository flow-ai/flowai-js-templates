import chai, { expect, assert } from 'chai'
import { Card, Carousel } from '../src'

describe("Template Carousel", () => {

  it("can add card", () => {
    const card = new Card({ title: "Awesome title"})
    const carousel = new Carousel()
    carousel.addCard(card)
    expect(carousel.cards.length).to.equal(1)
  })

  it("can add array of cards", () => {
    const card1 = new Card({ title: "Awesome title 1"})
    const card2 = new Card({ title: "Awesome title 2"})
    const carousel = new Carousel([card1, card2])
    expect(carousel.cards.length).to.equal(2)
  })

  it("cannot add invalid card", () => {
    const carousel = new Carousel()
    expect(() => carousel.addCard("fake card")).to.throw(Error)
  })
})
