import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Component Apple event item", () => {

  it("Throws error without a title", () => {
    expect(() => new Apple.EventItem({})).to.throw(Error)
  })

  it("Throws error without a valid location", () => {
    expect(() => new Apple.EventItem({ 
      title: "Some event",
      location: {}
    })).to.throw(Error)
  })

  it("Can create a event item with minimal data", () => {
    const item = new Apple.EventItem({
      title: "Some event",
      location: new Apple.LocationItem({
        title: "Some venue"
      }),
      timeslots: [
        new Apple.TimeItem({
          duration: 60,
          startTime: "2017-05-26T08:27:55+00:00"
        })
      ],
      timezoneOffset: 2
    })  

    expect(item.title).to.equal("Some event")
    expect(item.location.title).to.equal("Some venue")
    expect(item.timezoneOffset).to.equal(2)
    expect(item.timeslots.length).to.equal(1)
  })

  it("Can create a event item with all data", () => {
    const item = new Apple.EventItem({
      title: "Some event",
      location: new Apple.LocationItem({
        latitude: 37.7725,
        longitude: -122.4311,
        radius: 100,
        title: "Some venue"
      }),
      timeslots: [
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T08:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T09:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T10:27:55+00:00"
        })
      ],
      timezoneOffset: 2
    })  

    expect(item.title).to.equal("Some event")
    expect(item.location.latitude).to.equal(37.7725)
    expect(item.location.longitude).to.equal(-122.4311)
    expect(item.timeslots.length).to.equal(3)
    expect(item.timezoneOffset).to.equal(2)
  })

  it("can convert to JSON", () => {
    const item = new Apple.EventItem({
      title: "Some event",
      location: new Apple.LocationItem({
        latitude: 37.7725,
        longitude: -122.4311,
        radius: 100,
        title: "Some venue"
      }),
      timeslots: [
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T08:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T09:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T10:27:55+00:00"
        })
      ],
      timezoneOffset: 2
    })  
    const output = JSON.stringify(item, null, 2)

    // console.info('output', output)
  })
})
