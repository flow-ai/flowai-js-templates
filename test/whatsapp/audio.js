import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Audio", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Audio({})).to.throw(Error)
    })

    it("throws error without url", () => {
      expect(() => new WhatsApp.Audio()).to.throw(Error)
    })

    it("can create with url", () => {
      const audio = new WhatsApp.Audio({ url: "https://some.url" })
      expect(audio.url).to.equal("https://some.url")
    })

    it("can create with shorthand", () => {
      const audio = new WhatsApp.Audio( "https://some.url" )
      expect(audio.url).to.equal("https://some.url")
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Audio( "something" ).toJSON().type).to.equal("whatsapp_audio")
    })
  })
})