import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Video", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Video({})).to.throw(Error)
    })

    it("throws error without url", () => {
      expect(() => new WhatsApp.Video({ title: "Awesome video" })).to.throw(Error)
    })

    it("can create with url and title", () => {
      const video = new WhatsApp.Video({ title: "Awesome video", url: "https://some.url" })
      expect(video.title).to.equal("Awesome video")
      expect(video.url).to.equal("https://some.url")
    })

    it("can create with shorthand", () => {
      const video = new WhatsApp.Video( "https://some.url" )
      expect(video.url).to.equal("https://some.url")
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Video( "something" ).toJSON().type).to.equal("whatsapp_video")
    })
  })
})