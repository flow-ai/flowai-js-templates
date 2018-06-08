import chai, { expect, assert } from 'chai'
import { Param, Button, QuickReply } from '../src'

describe("Component param", () => {
  it("throws error on empty", () => {
    expect(() => new Param()).to.throw(Error)
  })

  it("throws error when no mandatory fields", () => {
    expect(() => new Param({})).to.throw(Error)
  })

  it("throws error when label field is empty", () => {
    expect(() => new Param({ label: null})).to.throw(Error)
  })

  it("throws error when label empty", () => {
    expect(() => new Param({ label: null})).to.throw(Error)
  })

  it("throws error when label empty", () => {
    expect(() => new Param('')).to.throw(Error)
  })

  it("can create with label value", () => {
    const param = new Param({
      label: 'a',
      value: 'b'
    })
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")
  })

  it("can create with regular constructor", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")
  })

  it("can add to button", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param
    })

    expect(button.params.length).to.equal(1)
  })

  it("can add to button as a list", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('c', 'd')

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(button.params.length).to.equal(2)
  })


  it("adding the same param in a list results in 1 param", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param, param]
    })

    expect(button.params.length).to.equal(1)
  })

  it("adding the same param labels in a list results in 1 param", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(button.params.length).to.equal(1)
    expect(button.params[0].value).to.equal('d')
  })

  it("can add to reply", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param
    })

    expect(reply.params.length).to.equal(1)
  })

  it("can add to reply as a list", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('c', 'd')

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(reply.params.length).to.equal(2)
  })


  it("adding the same param in a list results in 1 param", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param, param]
    })

    expect(reply.params.length).to.equal(1)
  })

  it("adding the same param labels in a list results in 1 param", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(reply.params.length).to.equal(1)
    expect(reply.params[0].value).to.equal('d')
  })

})
