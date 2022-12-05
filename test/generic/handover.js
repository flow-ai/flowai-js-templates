import chai, { expect, assert } from 'chai'
import { Handover } from '../../src'

describe("Generic", () => {
  describe("Handover", () => {
    it("can create with all params", () => {
      const handover = new Handover({
        resetContext: true,
        indefinitePause: true,
        minutesToPause: 0,
        secondsToPause: 0,
        setBotToPause: true,
        additionalInfo: "Additional info for flow 'foo'"
       })
      expect(handover.resetContext).to.equal(true)
      expect(handover.indefinitePause).to.equal(true)
      expect(handover.minutesToPause).to.equal(0)
      expect(handover.minutesToPause).to.equal(0)
      expect(handover.setBotToPause).to.equal(true)
      expect(handover.additionalInfo).to.equal("Additional info for flow 'foo'")
    })

    it("can create with part of params", () => {
      const handover = new Handover({
        resetContext: false,
        indefinitePause: false,
        setBotToPause: true,
      })
      expect(handover.resetContext).to.equal(false)
      expect(handover.indefinitePause).to.equal(false)
      expect(handover.setBotToPause).to.equal(true)
    })

    it("throws error without a required params", () => {
      expect(() => new Handover({})).to.throw(Error)
      expect(() => new Handover({ resetContext: true })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: true
      })).to.throw(Error)
    })

    it("throws error with wrong types", () => {
      expect(() => new Handover({ resetContext: 'foo' })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: 'foo'
      })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: true,
        minutesToPause: '101'
      })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: true,
        minutesToPause: 101,
        secondsToPause: '101'
      })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: true,
        minutesToPause: 101,
        secondsToPause: 101,
        setBotToPause: 'foo'
      })).to.throw(Error)
      expect(() => new Handover({
        resetContext: true,
        indefinitePause: true,
        minutesToPause: 101,
        secondsToPause: 101,
        setBotToPause: true,
        additionalInfo: 90
      })).to.throw(Error)
    })
  })
})