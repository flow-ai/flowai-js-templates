import chai, { expect, assert } from 'chai'
import { Button, ButtonTrigger, Param } from '../../src'

describe("Generic", () => {
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

    it("can create with a trigger", () => {
      const buttonTrigger = new ButtonTrigger({
        type: 'event',
        value: 'value'
      })
      const button = new Button({
        type: 'url',
        label: 'Label',
        value: 'https://google.com',
        trigger: buttonTrigger
      })
      expect(button.trigger.type).to.equal('event')
      expect(button.trigger.value).to.equal('value')
    })

    it("cannot create with trigger if button type is anything except 'url' or 'phone'", () => {
      const buttonTrigger = new ButtonTrigger({
        type: 'event',
        value: 'value'
      })
      expect(() => new Button({
        type: 'postback',
        label: 'Label',
        value: 'Message to send',
        trigger: buttonTrigger
      })).to.throw(Error)
    })

  })
})