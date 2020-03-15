import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

describe("Template Phone Dial", () => {
  it("can create valid dial action", () => {
    const pause = new Phone.Dial('+1234567890')
    expect(pause.phoneNumber).to.equal('+1234567890')
  })
  
  it("can work with opts", () => {
    const pause = new Phone.Dial({ 
      phoneNumber: '+1234567890'
    })
    expect(pause.phoneNumber).to.equal('+1234567890')
  })

  it("Phone number is mandatory", () => {
    expect(() => new Phone.Dial('')).to.throw(Error)
  })

  it("phoneNumber needs to be a number", () => {
    expect(() => new Phone.Dial(true)).to.throw(Error)
  })
})
