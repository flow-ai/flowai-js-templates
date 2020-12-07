import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template Location", () => {
    it("throws error without mandatory fields", () => {
      expect(() => new WhatsApp.Location({})).to.throw(Error)
    })

    it("throws error without lat, long", () => {
      expect(() => new WhatsApp.Location({ name: "Awesome location" })).to.throw(Error)
    })

    it("can create with lat, long and name", () => {
      const location = new WhatsApp.Location({ name: "Awesome location", lat: 12.3232121, long: 1.34433 })
      expect(location.name).to.equal("Awesome location")
      expect(location.lat).to.equal(12.3232121)
      expect(location.long).to.equal(1.34433)
    })
  })
})