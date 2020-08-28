import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Component Apple List picker section", () => {

  it("Throws error without a title", () => {
    expect(() => new Apple.ListPickerSection({})).to.throw(Error)
  })

  it("Can create a list picker section with minimal data", () => {
    const section = new Apple.ListPickerSection({
      title: "My title"
    })  
    expect(section.title).to.equal("My title")
    expect(section.multipleSelection).to.equal(undefined)
  })

  it("Can create a list picker section with all data", () => {
    const section = new Apple.ListPickerSection({
      multipleSelection: true,
      order: 1,
      title: "My title",
      items: [
        new Apple.ListPickerItem({
          title: "Item 1"
        }),
        new Apple.ListPickerItem({
          title: "Item 2"
        })
      ]
    })  

    expect(section.multipleSelection).to.equal(true)
    expect(section.order).to.equal(1)
    expect(section.title).to.equal("My title")
    expect(section.items.length).to.equal(2)
  })

  it("can convert to JSON", () => {
    const section = new Apple.ListPickerSection({
      multipleSelection: true,
      order: 1,
      title: "My title",
      items: [
        new Apple.ListPickerItem({
          title: "Item 1"
        }),
        new Apple.ListPickerItem({
          title: "Item 2"
        })
      ]
    })
    const output = JSON.stringify(section, null, 2)
    // console.info('output', output)
  })
})
