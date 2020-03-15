import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

describe("Template Phone Pause", () => {
  it("can create valid pause", () => {
    const pause = new Phone.Pause(2)
    expect(pause.seconds).to.equal(2)
  })
  
  it("can work with opts", () => {
    const pause = new Phone.Pause({ 
      seconds: 0.2
    })
    expect(pause.seconds).to.equal(0.2)
  })

  it("needs positive number of seconds", () => {
    expect(() => new Phone.Pause(-1)).to.throw(Error)
  })

  it("seconds needs to be a number", () => {
    expect(() => new Phone.Pause('1')).to.throw(Error)
  })
})
