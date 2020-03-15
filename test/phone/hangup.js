import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

describe("Template Phone Hangup", () => {
  
  it("can create", () => {
    const hangup = new Phone.Hangup()
    expect(hangup).to.not.equal(undefined)
  })
})
