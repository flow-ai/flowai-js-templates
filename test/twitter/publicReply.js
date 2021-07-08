import chai, { expect, assert } from 'chai'
import { Twitter } from '../../src'

describe("Template Reply", () => {
  it("Throws error without a text", () => {
    expect(() => new Twitter.PublicReply({})).to.throw(Error)
  })

  it("can create with reply", () => {
    const reply = new Twitter.PublicReply({ text: "Awesome reply text"})
    expect(reply.text).to.equal("Awesome reply text")
  })

  it("can create with string as text", () => {
    const reply = new Twitter.PublicReply("Awesome text")
    expect(reply.text).to.equal("Awesome text")
  })
})
