import chai, { expect, assert } from 'chai'
import { List, ListItem, Button, Media, Action } from '../src'

describe("Template List", () => {

  it("can add list item", () => {
    const item = new ListItem({ title: "Awesome title"})
    const list = new List()
    list.addItem(item)
    expect(list.items.length).to.equal(1)
  })

  it("cannot add invalid list item", () => {
    const list = new List()
    expect(() => list.addItem("fake item")).to.throw(Error)
  })

  it("ListItem throws error without a title", () => {

    expect(() => new ListItem({})).to.throw(Error)
  })

  it("ListItem can create with title", () => {
    const item = new ListItem({ title: "Awesome title"})
    expect(item.title).to.equal("Awesome title")
    expect(item.subtitle).to.equal(undefined)
    expect(item.image).to.equal(undefined)
  })

  it("ListItem cannot add invalid image", () => {
    expect(() => new ListItem({
      title: "Awesome title",
      image: "Awesome image url"
    })).to.throw(Error)

    const item = new ListItem({ title: "Awesome title"})
    expect(() => item.image = "Awesome image url").to.throw(Error)
  })

  it("ListItem cannot add invalid button", () => {
    const item = new ListItem({ title: "Awesome title"})
    expect(() => item.addButton()).to.throw(Error)
    expect(() => item.addButton({})).to.throw(Error)
  })

  it("ListItem can add button", () => {
    const item = new ListItem({ title: "Awesome title"})
    const button = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })
    item.addButton(button)
    expect(item.buttons.length).to.equal(1)
  })

  it("ListItem can have action", () => {
    const item = new ListItem({ title: "Awesome title"})
    const action = new Action({
      type: "url",
      value: "value"
    })
    item.action = action
    expect(item.action).to.equal(action)
  })

  it("ListItem cannot add invalid action", () => {
    expect(() => new ListItem({
      title: "Awesome title",
      action: "Awesome action"
    })).to.throw(Error)

    const item = new ListItem({ title: "Awesome title"})
    expect(() => item.action = "Awesome action").to.throw(Error)
  })

  it("ListItem can convert to JSON", () => {
    const item = new ListItem({ title: "Awesome title"})
    item.image = new Media("Awesome image")
    const button = new Button({
      label: "Label",
      type: "url",
      value: "value"
    })
    item.addButton(button)

    const output = JSON.stringify(item)
  })
})
