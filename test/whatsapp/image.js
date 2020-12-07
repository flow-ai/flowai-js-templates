import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Image", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Image({})).to.throw(Error)
    })

    it("throws error without url", () => {
      expect(() => new WhatsApp.Image({ title: "Awesome image" })).to.throw(Error)
    })

    it("can create with url and title", () => {
      const image = new WhatsApp.Image({ title: "Awesome image", url: "https://some.url" })
      expect(image.title).to.equal("Awesome image")
      expect(image.url).to.equal("https://some.url")
    })

    it("can create with shorthand", () => {
      const image = new WhatsApp.Image( "https://some.url" )
      expect(image.url).to.equal("https://some.url")
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Image( "something" ).toJSON().type).to.equal("whatsapp_image")
    })
  })
})