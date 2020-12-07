import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Sticker", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Sticker({})).to.throw(Error)
    })

    it("throws error without stickerId", () => {
      expect(() => new WhatsApp.Sticker()).to.throw(Error)
    })

    it("can create with stickerId", () => {
      const sticker = new WhatsApp.Sticker({ stickerId: "12334222" })
      expect(sticker.stickerId).to.equal("12334222")
    })

    it("can create with shorthand", () => {
      const sticker = new WhatsApp.Sticker( "12334222" )
      expect(sticker.stickerId).to.equal("12334222")
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Sticker( "something" ).toJSON().type).to.equal("whatsapp_sticker")
    })
  })
})