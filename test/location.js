import chai, { expect, assert } from 'chai'
import { Location, Action } from '../src'

describe("Template Location", () => {
  it("throws error without mandatory fields", () => {
    expect(() => new Location({})).to.throw(Error)
  })

  it("throws error without lat, long", () => {
    expect(() => new Location({ title: "Awesome location" })).to.throw(Error)
  })

  it("can create with lat, long and title", () => {
    const location = new Location({ title: "Awesome location", lat: 12.3232121, long: 1.34433 })
    expect(location.title).to.equal("Awesome location")
    expect(location.lat).to.equal(12.3232121)
    expect(location.long).to.equal(1.34433)
  })

  it("can create with action", () => {
    const action = new Action({ type: "url", value: "value" })
    const location = new Location({
      title: "Awesome location",
      lat: 12.3232121,
      long: 1.34433,
      action
    })
    expect(location.title).to.equal("Awesome location")
    expect(location.action).to.equal(action)
  })

  it("cannot add invalid action", () => {
    expect(() => new Location({
      title: "Awesome title",
      lat: 12.3232121,
      long: 1.34433,
      action: "Awesome action"
    })).to.throw(Error)

    const location = new Location({
      title: "Awesome title",
      lat: 12.3232121,
      long: 1.34433
    })
    expect(() => location.action = "Awesome action").to.throw(Error)
  })
})
