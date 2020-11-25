import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Apple", () => {
  describe("Template Apple PayRequest", () => {

    it("Throws error without options", () => {
      expect(() => new Apple.PayRequest()).to.throw()
    })

    it("Can create pay request", () => {
      const payRequest = new Apple.PayRequest({
        merchant: new Apple.PayMerchant({
          identifier: "abc",
          displayName: "Ny Super Store",
          countryCode: "us",
          currencyCode: "usd",
          capabilities: [
            'supports3DS',
            'supportsCredit',
            'supportsDebit'
          ],
          supportedNetworks:[
            "amex",
            "visa",
            "discover",
            "masterCard"
          ]
        }),      
        shippingMethods: [
          new Apple.PayShippingMethod({    
            identifier: "FreeShip",
            label: "Free Shipping",
            detail: "Arrives in 5 to 7 days",
            amount: "0.00"
          })
        ],
        requiredBillingContactFields: [
          "post"
        ],
        requiredShippingContactFields: [
          "post",
          "phone",
          "email",
          "name"
        ],
        lineItems: [
          new Apple.PayLineItem({  
            amount: "59.00",
            label: "Halibut",
            type: "final"
          }),
          new Apple.PayLineItem({  
            amount: "4.99",
            label: "Shipping",
            type: "final"
          })
        ],
        total: new Apple.PayLineItem({
          amount: "63.99",
          label: "Sam's Fish",
          type: "final"
        }),
        supportedCountries: [
          "US",
          "CA"
        ],
        endpoints: new Apple.PayEndpoints({
          fallbackUrl: "https://my.example/fallback/",
          orderTrackingUrl: "https://my.example/orderTrackingUrl/",
          paymentGatewayUrl: "https://my.example/paymentGateway/",
          paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
          shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
          shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
        }),
        receivedMessage: new Apple.InteractiveMessage({
          style: "large",
          subtitle: "$63.99 at Sam's Fish",
          title: "Halibut"
        }),
        replyMessage: new Apple.InteractiveMessage({
          title: "Thank you for your order"
        })
      })

      expect(payRequest.merchant.supportedNetworks[1]).to.equal("visa")
      expect(payRequest.lineItems[1].type).to.equal("final")
      expect(payRequest.supportedCountries[1]).to.equal("CA")
      expect(payRequest.shippingMethods[0].identifier).to.equal("FreeShip")
      expect(payRequest.requiredBillingContactFields[0]).to.equal("post")
      expect(payRequest.endpoints.paymentMethodUpdateUrl).to.equal("https://my.example/paymentMethodUpdate/")
      expect(payRequest.total.amount).to.equal("63.99")
      //console.info(JSON.stringify(payRequest, null, 2))
    })
  })
})