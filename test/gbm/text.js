import chai, { expect, assert } from 'chai'
import { GBM } from '../../src'

describe("GBM", () => {
  describe("Template Text", () => {
    it("Throws error without a speech", () => {
      expect(() => new GBM.Text({})).to.throw(Error)
    })

    it("can create with text", () => {
      const text = new GBM.Text({ text: "Awesome text"})
      expect(text.text).to.equal("Awesome text")
    })

    it("can create with string as text", () => {
      const text = new GBM.Text("Awesome text")
      expect(text.text).to.equal("Awesome text")
    })

    it("can add suggestions", () => {
      const text = new GBM.Text("Awesome text")
      text.addSuggestion(new GBM.Suggestion("Yes"))
      text.addSuggestion(new GBM.Suggestion("No"))
      expect(text.suggestions.length).to.equal(2)
    })

    it("can add suggestions shorthand", () => {
      const text = new GBM.Text("Awesome text")
        .addSuggestion(new GBM.Suggestion("Yes"))
      expect(text.suggestions.length).to.equal(1)
    })
  })
})