import chai, { expect, assert } from 'chai'
import { Line } from '../src'

describe("Template Sticker", () => {
  it("throws error without mandatory fields", () => {
    expect(() => new Line.Sticker({})).to.throw(Error)
  })

  it("throws error without packageId", () => {
    expect(() => new Line.Sticker({ stickerId: 12345 })).to.throw(Error)
  })

  it("throws error without stickerId", () => {
    expect(() => new Line.Sticker({ packageId: 12345 })).to.throw(Error)
  })

  it("can create with packageId and stickerId", () => {
    const sticker = new Line.Sticker({ packageId: 12345, stickerId: 67890 })
    expect(sticker.packageId).to.equal(12345)
    expect(sticker.stickerId).to.equal(67890)
  })
})
