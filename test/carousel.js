import chai, { expect, assert } from 'chai'
import { Card, Carousel } from '../src'

describe("Template Carousel", () => {

  it("can add button", () => {
    const card = new Card({ title: "Awesome title"})
    const carousel = new Carousel()
    carousel.addCard(card)
    expect(carousel.cards.length).to.equal(1)
  })

  it("cannot add invalid action", () => {
    const carousel = new Carousel()
    expect(() => carousel.addCard("fake card")).to.throw(Error)
  })
})
