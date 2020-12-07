import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Text", () => {
    it("Throws error without a speech", () => {
      expect(() => new WhatsApp.Text({})).to.throw(Error)
    })

    it("can create with text", () => {
      const text = new WhatsApp.Text({ text: "Awesome text"})
      expect(text.text).to.equal("Awesome text")
      expect(text.previewUrl).to.equal(true)
    })

    it("can create with string as text", () => {
      const text = new WhatsApp.Text("Awesome text")
      expect(text.text).to.equal("Awesome text")
      expect(text.previewUrl).to.equal(true)
    })

    it("can create with containsRichText", () => {
      const text = new WhatsApp.Text({ text: "Awesome text", previewUrl: false })
      expect(text.text).to.equal("Awesome text")
      expect(text.previewUrl).to.equal(false)
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Text( "something" ).toJSON().type).to.equal("whatsapp_text")
    })
  })
})