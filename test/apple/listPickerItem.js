import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Apple", () => {
  describe("Component Apple List picker item", () => {

    it("Throws error without a title", () => {
      expect(() => new Apple.ListPickerItem({})).to.throw(Error)
    })

    it("Can create a list picker item with minimal data", () => {
      const item = new Apple.ListPickerItem({
        title: "My title"
      })  

      expect(item.identifier).to.not.equal(undefined)
      expect(item.title).to.equal("My title")
    })


    it("Can create a list picker item with all data", () => {
      const item = new Apple.ListPickerItem({
        identifier: "a",
        image: "https://source.unsplash.com/random",
        order: 1,
        style: "default",
        title: "My title",
        subtitle: "Some description"
      })  

      expect(item.identifier).to.equal("a")
      expect(item.image).to.equal("https://source.unsplash.com/random")
      expect(item.order).to.equal(1)
      expect(item.style).to.equal("default")
      expect(item.title).to.equal("My title")
      expect(item.subtitle).to.equal("Some description")
    })

    it("can convert to JSON", () => {
      const item = new Apple.ListPickerItem({
        identifier: "a",
        image: "https://source.unsplash.com/random",
        order: 1,
        style: "default",
        title: "My title",
        subtitle: "Some description"
      })
      const output = JSON.stringify(item)
    })
  })
})