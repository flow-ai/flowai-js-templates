import chai, { expect, assert } from 'chai'
import GBM from '../../src/gbm'

describe("GBM", () => {
  describe("Template Media", () => {

    it("Throws error without data", () => {
      expect(() => new GBM.Media()).to.throw(Error)
    })

    it("Throws error on empty file URL", () => {
      expect(() => new GBM.Media({ fileUrl: '' })).to.throw(Error)
    })

    it("Throws error on empty thumbnail URL", () => {
      expect(() => new GBM.Media({ thumbnailUrl: '' })).to.throw(Error)
    })

    it("Throws error on empty alt text", () => {
      expect(() => new GBM.Media({ altText: '' })).to.throw(Error)
    })

    it("can create valid media", () => {
      const media = new GBM.Media({ 
        fileUrl: "https://somefile",
        thumbnailUrl: "https://somefilethumb",
        altText: "Some alt text",
        forceRefresh: true
      })
      expect(media.fileUrl).to.equal("https://somefile")
      expect(media.thumbnailUrl).to.equal("https://somefilethumb")
      expect(media.altText).to.equal("Some alt text")
      expect(media.forceRefresh).to.equal(true)
    })
  })
})