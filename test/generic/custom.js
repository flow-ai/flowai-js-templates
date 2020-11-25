import chai, { expect, assert } from 'chai'
import { Custom, QuickReply } from '../../src'

describe("Generic", () => {
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

    it("can create with quick reply without type", () => {
      const custom = new Custom({
        something: 'Awesome text'
      })
      custom.addQuickReply(new QuickReply({
        label: 'test'
      }))
      expect(custom.quickReplies[0].type).to.equal("text")
      expect(custom.quickReplies[0].value).to.equal("test")
      expect(custom.data.something).to.equal("Awesome text")
    })

    it("can create with quick reply with a type", () => {
      const custom = new Custom({
        something: 'Awesome text'
      })
      custom.addQuickReply(new QuickReply({
        label: 'test',
        type: 'location'
      }))

      expect(custom.quickReplies[0].type).to.equal("location")
      expect(custom.data.something).to.equal("Awesome text")
    })

    it("can convert to JSON", () => {
      const custom = new Custom({ something: "Awesome title"})
      custom.addQuickReply(new QuickReply({
        label: 'test',
        value: 'test 2'
      }))
      expect(custom.quickReplies[0].value).to.equal("test 2")
      const output = JSON.stringify(custom)
    })
  })
})