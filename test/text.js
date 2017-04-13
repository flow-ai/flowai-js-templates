import chai, { expect, assert } from 'chai'
import { Text } from '../src'

describe("Template Text", () => {
  it("Throws error without a speech", () => {
    expect(() => new Text({})).to.throw(Error)
  })

  it("can create with text", () => {
    const text = new Text({ text: "Awesome text"})
    expect(text.text).to.equal("Awesome text")
  })

  it("can create with string as text", () => {
    const text = new Text("Awesome text")
    expect(text.text).to.equal("Awesome text")
  })
})
