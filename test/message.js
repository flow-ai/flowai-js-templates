import chai, { expect, assert } from 'chai'
import { Message } from '../src'
import Template from '../src/templates/template'

describe("Message", () => {
  it("Throws error without a fallback", () => {
    expect(() => new Message()).to.throw(Error)
  })

  it("can create with fallback", () => {
    const message = new Message("Awesome")
    expect(message.fallback).to.equal("Awesome")
    expect(message.responses).to.equal(undefined)
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

  it("to JSON without response will add one", () => {
    const message = new Message("Awesome")

    const parsed = JSON.parse(JSON.stringify(message))
    expect(parsed.responses.length === 1)
  })
})
