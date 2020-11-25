import chai, { expect, assert } from 'chai'
import { Message, QuickReply } from '../../src'
import Template from '../../src/generic/templates/template'

describe("Web", () => {
  describe("Message", () => {
    it("Throws error without a fallback", () => {
      expect(() => new Message()).to.throw(Error)
    })

    it("can create with fallback", () => {
      const message = new Message("Awesome")
      expect(message.fallback).to.equal("Awesome")
      expect(message.responses).to.equal(undefined)
    })

    it("can create with metasdata", () => {
      const message = new Message("Awesome", { tag: "abc"})
      expect(message.meta.tag).to.equal("abc")
    })

    it("can create with responses", () => {

      const response = new Template()

      const message = new Message("Awesome").addResponse(response)

      expect(message.responses.length).to.equal(1)
    })

    it("can convert to JSON with response", () => {
      const response = new Template()
      const message = new Message("Awesome").addResponse(response)

      const parsed = JSON.parse(JSON.stringify(message))
      expect(parsed.responses.length === 1)
    })

    it("can convert to JSON with responses", () => {
      const response1 = new Template()
      const response2 = new Template()
      const message = new Message("Awesome").addResponse(response1).addResponse(response2)

      const parsed = JSON.parse(JSON.stringify(message))
      expect(parsed.responses.length === 2)
    })

    it("can convert to JSON with meta", () => {
      const message = new Message("Awesome", { tag: "abc" })

      const parsed = JSON.parse(JSON.stringify(message))
      expect(message.meta.tag === "abc")
    })

    it("to JSON without response will add one", () => {
      const message = new Message("Awesome")

      const parsed = JSON.parse(JSON.stringify(message))
      expect(parsed.responses.length === 1)
    })

    it("create with array results in responses", () => {
      const message = new Message(["Awesome", "Stuff"])

      const parsed = JSON.parse(JSON.stringify(message))

      expect(parsed.responses.length === 2)
      expect(parsed.fallback).to.equal("Awesome, Stuff")
    })

    it("no join with ',' if ending period, exclamation mark, or question mark ", () => {
      const message = new Message(["Awesome?", "Stuff"])

      const parsed = JSON.parse(JSON.stringify(message))

      expect(parsed.responses.length === 2)
      expect(parsed.fallback).to.equal("Awesome? Stuff")
    })

    it("must be a string array", () => {
      expect(() => new Message([null, undefined, "string"])).to.throw(Error)
    })

    it("by default delay is 0", () => {
      const message = new Message("Awesome")
      const response1 = new Template()
      message.addResponse(response1)
      expect(message.responses[0].delay === 0)
    })

    it("can define a delay with addResponse", () => {
      const message = new Message("Awesome")
      const response1 = new Template()
      message.addResponse(response1, 2000)
      expect(message.responses[0].delay === 2000)
    })

    it("can define a delay inside response", () => {
      const message = new Message("Awesome")
      const response1 = new Template()
      response1.delay = 2000
      message.addResponse(response1)

      expect(message.responses[0].delay === 2000)
    })

    it("cannot define a negative delay", () => {
      const message = new Message("Awesome")

      const response1 = new Template()
      message.addResponse(response1)

      expect(() => message.responses[0].delay = -2000).to.throw(Error)
    })

    it("can add QuickReply to a Message", () => {
      const message = new Message("Awesome")
        .addQuickReply(new QuickReply({
          label: 'test1'
        }))
        .addQuickReply(new QuickReply({
          label: 'test2'
        }))

      expect(message.responses[0].quickReplies.length === 2)
    })

    it("can add QuickReply to a Message", () => {
      const message = new Message(["Awesome", "Sure"])
        .addQuickReply(new QuickReply({
          label: 'test1'
        }))
        .addQuickReply(new QuickReply({
          label: 'test2'
        }))

      expect(message.responses[1].quickReplies.length === 2)
    })
  })
})