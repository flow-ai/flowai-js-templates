import chai, { expect, assert } from 'chai'
import { Custom, QuickReply } from '../src'

describe("Template Custom", () => {
  it("Throws error without data", () => {
    expect(() => new Custom()).to.throw(Error)
  })

  it("cannot create with text", () => {
    expect(() => new Custom("Some JSON string")).to.throw(Error)
  })

  it("can create with object", () => {
    const custom = new Custom({
      something: 'Awesome text'
    })
    expect(custom.data.something).to.equal("Awesome text")
  })

  it("can create with quick reply", () => {
    const custom = new Custom({
      something: 'Awesome text'
    })
    custom.addQuickReply(new QuickReply({
      label: 'test',
      value: 'test'
    }))
    expect(custom.data.something).to.equal("Awesome text")
  })

  it("can convert to JSON", () => {
    const custom = new Custom({ something: "Awesome title"})
    custom.addQuickReply(new QuickReply({
      label: 'test',
      value: 'test'
    }))
    const output = JSON.stringify(custom)
    console.log(output)
  })
})
