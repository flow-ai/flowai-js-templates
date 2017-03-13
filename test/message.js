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

    const message = new Message("Awesome")
    message.addResponse(response)

    expect(message.responses.length).to.equal(1)
  })
})
