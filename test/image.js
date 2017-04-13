import chai, { expect, assert } from 'chai'
import { Image, Action } from '../src'

describe("Template Image", () => {
  it("throws error without mandatory fields", () => {
    expect(() => new Image({})).to.throw(Error)
  })

  it("throws error without url", () => {
    expect(() => new Image({ title: "Awesome image" })).to.throw(Error)
  })

  it("can create with url and title", () => {
    const image = new Image({ title: "Awesome image", url: "Cool" })
    expect(image.title).to.equal("Awesome image")
    expect(image.url).to.equal("Cool")
  })

  it("can create with action", () => {

    const action = new Action({ type: "url", value: "value" })
    const image = new Image({
      title: "Awesome image",
      url: "Cool",
      action
    })
    expect(image.title).to.equal("Awesome image")
    expect(image.url).to.equal("Cool")
    expect(image.action).to.equal(action)
  })

  it("cannot add invalid action", () => {
    expect(() => new Image({
      title: "Awesome title",
      url: "aa",
      action: "Awesome action"
    })).to.throw(Error)

    const image = new Image({ title: "Awesome title", url: "aa"})
    expect(() => image.action = "Awesome action").to.throw(Error)
  })
})
