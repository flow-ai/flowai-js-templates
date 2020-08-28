import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Component Apple location item", () => {

  it("Throws error without a title", () => {
    expect(() => new Apple.LocationItem({})).to.throw(Error)
  })

  it("Throws error without a valid latitude, longitude", () => {
    expect(() => new Apple.LocationItem({ 
      title: "Some location",
      latitude: "null",
      longitude: 11
    })).to.throw(Error)

    expect(() => new Apple.LocationItem({ 
      title: "Some location",
      latitude: 11,
      longitude: true
    })).to.throw(Error)
  })

  it("Can create a location item with minimal data", () => {
    const item = new Apple.LocationItem({
      title: "Some location"
    })  

    expect(item.latitude).to.equal(undefined)
    expect(item.title).to.equal("Some location")
  })

  it("Can create a location item with all data", () => {
    const item = new Apple.LocationItem({
      latitude: 37.7725,
      longitude: -122.4311,
      radius: 100,
      title: "Some location"
    })  

    expect(item.latitude).to.equal(37.7725)
    expect(item.longitude).to.equal(-122.4311)
    expect(item.radius).to.equal(100)
    expect(item.title).to.equal("Some location")
  })

  it("can convert to JSON", () => {
    const item = new Apple.LocationItem({
      latitude: 37.7725,
      longitude: -122.4311,
      radius: 100,
      title: "Some location"
    })
    const output = JSON.stringify(item, null, 2)

    // console.info('output', output)
  })
})
