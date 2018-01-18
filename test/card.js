import chai, { expect, assert } from 'chai'
import { Card, Button, Media, Action } from '../src'

describe("Template Card", () => {
  it("Throws error without a title", () => {
    expect(() => new Card({})).to.throw(Error)
  })

  it("can create with title", () => {
    const card = new Card({ title: "Awesome title"})
    expect(card.title).to.equal("Awesome title")
    expect(card.subtitle).to.equal(undefined)
    expect(card.media).to.equal(undefined)
  })

  it("cannot add invalid media", () => {
    expect(() => new Card({
      title: "Awesome title",
      media: "Awesome media url"
    })).to.throw(Error)

    const card = new Card({ title: "Awesome title"})
    expect(() => card.media = "Awesome media url").to.throw(Error)
  })

  it("cannot add  media", () => {
    const media = new Media({
      type: 'image',
      url: 'htpp://fakeurl'
    })
    const card = new Card({
      title: "Awesome title",
      media
    })
    expect(card.title).to.equal("Awesome title")
    expect(card.subtitle).to.equal(undefined)
    expect(card.media).to.equal(media)
  })

  it("cannot add invalid button", () => {
    const card = new Card({ title: "Awesome title"})
    expect(() => card.addButton()).to.throw(Error)
    expect(() => card.addButton({})).to.throw(Error)
  })

  it("can add button", () => {
    const card = new Card({ title: "Awesome title"})
    const button = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })
    card.addButton(button)
    expect(card.buttons.length).to.equal(1)
  })

  it("can add chained buttons", () => {

    const button1 = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })

    const button2 = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })

    const card = new Card({ title: "Awesome title"}).addButton(button1).addButton(button2)
    expect(card.buttons.length).to.equal(2)
  })

  it("can have action", () => {
    const card = new Card({ title: "Awesome title"})
    const action = new Action({
      type: "url",
      value: "value"
    })
    card.action = action
    expect(card.action).to.equal(action)
  })

  it("cannot add invalid action", () => {
    expect(() => new Card({
      title: "Awesome title",
      action: "Awesome action"
    })).to.throw(Error)

    const card = new Card({ title: "Awesome title"})
    expect(() => card.action = "Awesome action").to.throw(Error)
  })

  it("can convert to JSON", () => {
    const card = new Card({ title: "Awesome title"})
    card.media = new Media({
      url: "Awesome media",
      type: "image"
    })
    const button = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })
    card.addButton(button)

    const output = JSON.stringify(card)
    console.log(output)
  })
})
