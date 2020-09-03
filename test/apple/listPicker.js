import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Template Apple List picker", () => {

  it("Throws error without options", () => {
    expect(() => new Apple.ListPicker()).to.throw()
  })

  it("Can create sections", () => {
    const listPicker = new Apple.ListPicker({
      receivedMessage: new Apple.InteractiveMessage({
        title: "Select products",
        subtitle: "Fresh and straight from the farm",
        style: "small"
      }),
      replyMessage: new Apple.InteractiveMessage({
        title: "Selected products",
        style: "small"
      }),
      multipleSelection: true,
      sections: [
        new Apple.ListPickerSection({
          title: "Fruit",
          items: [
            new Apple.ListPickerItem({
              title: "Apple",
              subtitle: "Red and delicious"
            }),
            new Apple.ListPickerItem({
              title: "Orange",
              subtitle: "Vitamin C boost"
            })
          ]
        }),
        new Apple.ListPickerSection({
          title: "Veggies",
          items: [
            new Apple.ListPickerItem({
              title: "Lettuce",
              subtitle: "Crispy greens"
            }),
            new Apple.ListPickerItem({
              title: "Cucumber",
              subtitle: "Organic"
            })
          ]
        })
      ]
    })
    
    expect(listPicker.sections.length).to.equal(2)
    expect(listPicker.multipleSelection).to.equal(true)
    //console.info(JSON.stringify(listPicker, null, 2))
  })
})
