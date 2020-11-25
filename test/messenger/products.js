import chai, { expect, assert } from 'chai'
import { Messenger } from '../../src'

describe("Messenger", () => {
  describe("Template Messenger Products", () => {

    it("can create valid Products template", () => {
      const products = new Messenger.Products(['1234567890'])
      expect(products.productIds[0]).to.equal('1234567890')
    })
    
    it("Product IDs is mandatory", () => {
      expect(() => new Messenger.Products([])).to.throw(Error)
    })

    it("Product IDs need to be an array", () => {
      expect(() => new Messenger.Products(true)).to.throw(Error)
    })
  })
})