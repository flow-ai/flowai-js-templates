import chai, { expect, assert } from 'chai'
import { Param } from '../src'

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

})
