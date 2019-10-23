import chai, { expect, assert } from 'chai'
import { Action, Param, Button, QuickReply } from '../src'

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


  it("adding the same param in a list results in 2 params", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param, param]
    })

    expect(button.params.length).to.equal(2)
  })

  it("adding the same param labels in a list results in 2 params", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')

    const button = new Button({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(button.params.length).to.equal(2)
    expect(button.params[1].value).to.equal('d')
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


  it("adding the same param in a list results in 2 params", () => {
    const param = new Param('a', 'b')
    expect(param.label).to.equal("a")
    expect(param.value).to.equal("b")

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param, param]
    })

    expect(reply.params.length).to.equal(2)
  })

  it("adding the same param labels in a list results in 2 params", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')

    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [param1, param2]
    })

    expect(reply.params.length).to.equal(2)
    expect(reply.params[1].value).to.equal('d')
  })

  it("will convert to correct JSON", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')
    const param3 = new Param('b', 'c')
    const reply = new QuickReply({
      label: 'Buy',
      type: 'postback',
      value: 'do this',
      param: [
        param1,
        param2,
        param3
      ]
    })

    const json = JSON.stringify(reply)

    expect(json).to.equal('{"label":"Buy","value":"do this","type":"postback","params":{"a":[{"value":"b"},{"value":"d"}],"b":[{"value":"c"}]}}')
  })

  it("will convert to correct JSON with actions", () => {
    const param1 = new Param('a', 'b')
    const param2 = new Param('a', 'd')
    const param3 = new Param('b', 'c')
    const action = new Action({
      type: 'postback',
      value: 'do this',
      param: [
        param1,
        param2,
        param3
      ]
    })

    const json = JSON.stringify(action)
    expect(json).to.equal('{"type":"postback","value":"do this","params":{"a":[{"value":"b"},{"value":"d"}],"b":[{"value":"c"}]}}')
  })

  it("will create a single params inside quick reply", () => {
    const data = {
      type: 'text',
      label: 'Yes',
      param: {
        label: 'productId',
        value: '1234'
      }
    }

    const reply = new QuickReply(data)

    expect(reply.params.length).to.equal(1)
  })

  it("will create lists of params inside quick reply", () => {
    const data = {
      type: 'text',
      label: 'Yes',
      param: [{
        label: 'productId',
        value: '1234'
      }, {}]
    }

    const reply = new QuickReply(data)

    expect(reply.params.length).to.equal(1)
  })

  it("will be forgiving with empty quick reply", () => {
    const data = {
      type: 'text',
      label: 'Yes',
      param: {
        label: 'productId'
      }
    }

    const reply = new QuickReply(data)

    expect(reply.params).to.equal(undefined)
  })
})
