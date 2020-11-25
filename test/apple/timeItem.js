import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Apple", () => {
  describe("Component Apple time item", () => {

    it("Throws error without a startTime, duration or identifier", () => {
      expect(() => new Apple.TimeItem({})).to.throw(Error)
    })

    it("Throws error without a valid duration", () => {
      expect(() => new Apple.TimeItem({ 
        duration: "null",
        startTime: Date.now()
      })).to.throw(Error)

      expect(() => new Apple.TimeItem({ 
        duration: true,
        startTime: "2017-05-26T08:27:55+00:00"
      })).to.throw(Error)
    })

    it("Throws error without a valid startTime", () => {
      expect(() => new Apple.TimeItem({ 
        duration: 600,
        startTime: null
      })).to.throw(Error)

      expect(() => new Apple.TimeItem({ 
        duration: 120,
        startTime: 200
      })).to.throw(Error)
    })

    it("Can create a time item with minimal data", () => {
      const item = new Apple.TimeItem({
        duration: 2000,
        startTime: "2017-05-26T08:27:55+00:00"
      })  

      expect(item.duration).to.equal(2000)
      expect(item.startTime).to.equal("2017-05-26T08:27:55+00:00")
    })

    it("Can create a time item with startTime as date object", () => {
      const item = new Apple.TimeItem({
        duration: 2000,
        startTime: new Date()
      })  

      expect(item.duration).to.equal(2000)
      expect(item.startTime).to.not.equal(undefined)
    })

    it("can convert to JSON", () => {
      const item = new Apple.TimeItem({
        duration: 2000,
        startTime: new Date()
      })
      const output = JSON.stringify(item, null, 2)

      // console.info('output', output)
    })
  })
})