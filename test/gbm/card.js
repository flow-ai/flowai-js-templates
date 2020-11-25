import chai, { expect, assert } from 'chai'
import GBM from '../../src/gbm'

describe("GBM", () => {
  describe("Template Card", () => {

    it("Throws error without data", () => {
      expect(() => new GBM.Card()).to.throw(Error)
    })

    it("can create with title", () => {
      const card = new GBM.Card({ title: "Awesome title"})
      expect(card.title).to.equal("Awesome title")
      expect(card.description).to.equal(undefined)
      expect(card.media).to.equal(undefined)
    })

    it("cannot add invalid media", () => {
      expect(() => new GBM.Card({
        title: "Awesome title",
        media: "Awesome media url"
      })).to.throw(Error)

      const card = new GBM.Card({ title: "Awesome title"})
      expect(() => card.media = "Awesome media url").to.throw(Error)
    })

    it("can add media", () => {
      const media = new GBM.Media({
        fileUrl: 'htpp://fakeurl'
      })
      const card = new GBM.Card({
        title: "Awesome title",
        media
      })
      expect(card.title).to.equal("Awesome title")
      expect(card.description).to.equal(undefined)
      expect(card.media).to.equal(media)
    })

    it("cannot add invalid suggestion", () => {
      const card = new GBM.Card({ title: "Awesome title"})
      expect(() => card.addSuggestion()).to.throw(Error)
      expect(() => card.addSuggestion({})).to.throw(Error)
    })

    it("can add suggestion", () => {
      const card = new GBM.Card({ title: "Awesome title"})
      const suggestion = new GBM.Suggestion({
        text: "Label",
        type: "url",
        url: "https://foo.bar"
      })
      card.addSuggestion(suggestion)
      expect(card.suggestions.length).to.equal(1)
    })

    it("can add chained suggestions", () => {

      const suggestion1 = new GBM.Suggestion({
        text: "Label",
        type: "text",
        data: "value"
      })

      const suggestion2 = new GBM.Suggestion({
        text: "Label",
        type: "text",
        data: "value"
      })

      const card = new GBM.Card({ 
        title: "Awesome title"
      })
      .addSuggestion(suggestion1)
      .addSuggestion(suggestion2)

      expect(card.suggestions.length).to.equal(2)
    })

    it("can convert to JSON", () => {

      const suggestion = new GBM.Suggestion({
        text: "Label",
        type: "text",
        data: "value"
      })

      const card = new GBM.Card({ 
        title: "Awesome title"
      })

      card.media = new GBM.Media({
        fileUrl: "Awesome media",
        height: GBM.Media.HEIGHT.TALL
      })
      card.addSuggestion(suggestion)

      const output = JSON.stringify(card, null, 2)
    })
  })
})