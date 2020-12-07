import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Document", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Document({})).to.throw(Error)
    })

    it("throws error without url", () => {
      expect(() => new WhatsApp.Document({ title: "Awesome document" })).to.throw(Error)
    })

    it("can create with url and title", () => {
      const document = new WhatsApp.Document({ title: "Awesome document", url: "https://some.url" })
      expect(document.title).to.equal("Awesome document")
      expect(document.url).to.equal("https://some.url")
    })

    it("can create with url, filename and title", () => {
      const document = new WhatsApp.Document({ 
        title: "Awesome document", 
        filename: "some_document.pdf", 
        url: "https://some.url" 
      })
      expect(document.title).to.equal("Awesome document")
      expect(document.filename).to.equal("some_document.pdf")
      expect(document.url).to.equal("https://some.url")
    })

    it("can create with shorthand", () => {
      const document = new WhatsApp.Document( "https://some.url" )
      expect(document.url).to.equal("https://some.url")
    })

    it("has a valid type in JSON", () => {
      expect(new WhatsApp.Document( "something" ).toJSON().type).to.equal("whatsapp_document")
    })
  })
})