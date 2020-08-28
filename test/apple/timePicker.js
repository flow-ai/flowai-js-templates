import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Template Apple Time picker", () => {

  it("Throws error without options", () => {
    expect(() => new Apple.TimePicker()).to.throw()
  })

  it("Can create sections", () => {
    const timePicker = new Apple.TimePicker({
      receivedMessage: new Apple.InteractiveMessage({
        title: "Schedule an Appointment",
        subtitle: "We'll see you there!",
        style: "icon"
      }),
      replyMessage: new Apple.InteractiveMessage({
        title: "Your Appointment",
        style: "icon"
      }),
      event: new Apple.EventItem({
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
    })

    expect(timePicker.event.title).to.equal("Some event")
    //console.info(JSON.stringify(timePicker, null, 2))
  })
})
