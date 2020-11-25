import chai, { expect, assert } from 'chai'
import { Messenger } from '../../src'

describe("Messenger", () => {
  describe("Template Messenger Receipt", () => {

    describe("Receipt components", () => {
      it("can create valid Receipt address", () => {
        const address = new Messenger.ReceiptAddress({
          street1: "1 Hacker Way",
          street2: "2nd floor",
          city: "Menlo Park",
          postalCode: "94025",
          state: "CA",
          country: "US"
        })
        expect(address.street1).to.equal('1 Hacker Way')
        expect(address.street2).to.equal('2nd floor')
        expect(address.city).to.equal('Menlo Park')
        expect(address.postalCode).to.equal('94025')
        expect(address.state).to.equal('CA')
        expect(address.country).to.equal('US')
      })

      it("will throw on empty Receipt address", () => {
        expect(() => new Messenger.ReceiptAddress()).to.throw(Error)
      })

      it("can create valid Receipt summary", () => {
        const summary = new Messenger.ReceiptSummary({
          subtotal: 75.00,
          shippingCost: 4.95,
          totalTax: 6.19,
          totalCost: 56.14
        })
        expect(summary.subtotal).to.equal(75)
        expect(summary.shippingCost).to.equal(4.95)
        expect(summary.totalTax).to.equal(6.19)
        expect(summary.totalCost).to.equal(56.14)
      })

      it("will throw on empty Receipt summary", () => {
        expect(() => new Messenger.ReceiptSummary()).to.throw(Error)
      })

      it("can create valid Receipt adjustment", () => {
        const adjustment = new Messenger.ReceiptAdjustment({
          name: "10% discount",
          amount: 4.95
        })
        expect(adjustment.name).to.equal("10% discount")
        expect(adjustment.amount).to.equal(4.95)
      })

      it("will throw on empty Receipt adjustment", () => {
        expect(() => new Messenger.ReceiptAdjustment()).to.throw(Error)
      })

      it("can create valid Receipt element", () => {
        const element = new Messenger.ReceiptElement({
          title: "Classic White T-Shirt",
          subtitle: "100% Soft and Luxurious Cotton",
          quantity: 2,
          price: 49.95,
          currency: "USD",
          imageUrl: "http://petersapparel.parseapp.com/img/whiteshirt.png"
        })
        expect(element.title).to.equal("Classic White T-Shirt")
        expect(element.subtitle).to.equal("100% Soft and Luxurious Cotton")
        expect(element.quantity).to.equal(2)
        expect(element.price).to.equal(49.95)
        expect(element.currency).to.equal("USD")
        expect(element.imageUrl).to.equal("http://petersapparel.parseapp.com/img/whiteshirt.png")
      })

      it("will throw on empty Receipt element", () => {
        expect(() => new Messenger.ReceiptElement()).to.throw(Error)
      })
    })
    describe("Receipt template", () => {
      it("can create valid Receipt element", () => {
        const receipt = new Messenger.Receipt({
          recipientName: "Stephane Crozatier",
          orderNumber: "12345678902",
          currency: "USD",
          paymentMethod: "Visa 2345",
          orderUrl: "http://petersapparel.parseapp.com/order?order_id=123456",
          timestamp: "1428444852",
          address: new Messenger.ReceiptAddress({
            street1: "1 Hacker Way",
            street2: "2nd floor",
            city: "Menlo Park",
            postalCode: "94025",
            state: "CA",
            country: "US"
          }),
          summary: new Messenger.ReceiptSummary({
            subtotal: 75.00,
            shippingCost: 4.95,
            totalTax: 6.19,
            totalCost: 56.14
          }),
          adjustments: [
            new Messenger.ReceiptAdjustment({
              name: "New Customer Discount",
              amount: 20
            }),
            new Messenger.ReceiptAdjustment({
              name: "$10 Off Coupon",
              amount: 10
            })
          ],
          elements: [
            new Messenger.ReceiptElement({
              title: "Classic White T-Shirt",
              subtitle: "100% Soft and Luxurious Cotton",
              quantity: 2,
              price: 29.95,
              currency: "USD",
              imageUrl: "http://petersapparel.parseapp.com/img/whiteshirt.png"
            }),
            new Messenger.ReceiptElement({
              title: "Classic Gray T-Shirt",
              subtitle: "100% Soft and Luxurious Cotton",
              quantity: 2,
              price: 49.95,
              currency: "USD",
              imageUrl: "http://petersapparel.parseapp.com/img/grayshirt.png"
            })
          ]
        })

        expect(receipt.recipientName).to.equal("Stephane Crozatier")
        expect(receipt.orderUrl).to.equal("http://petersapparel.parseapp.com/order?order_id=123456")
      })
    })
  })
})