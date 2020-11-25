import chai, { expect, assert } from 'chai'
import GBM from '../../src/gbm'
import Auth from '../../src/gbm/components/auth'

describe("GBM", () => {
  describe("Template Suggestion", () => {

    it("Throws error without data", () => {
      expect(() => new GBM.Suggestion()).to.throw(Error)
    })

    it("Throws on unknown type", () => {
      expect(() => new GBM.Suggestion({ type: 'unknown_type' })).to.throw(Error)
    })

    describe("Text suggestion", () => {
      it("Throws error when text type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'text' })).to.throw(Error)
      })

      it("Throws error when text has no data", () => {
        expect(() => new GBM.Suggestion({ type: 'text', text: 'something' })).to.throw(Error)
      })

      it("can create valid text suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "text",
          text: "Say hi",
          data: "Hello"
        })
        expect(suggestion.type).to.equal("text")
        expect(suggestion.text).to.equal("Say hi")
        expect(suggestion.data).to.equal("Hello")
      })
    })

    describe("URL suggestion", () => {
      it("Throws error when url type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'url' })).to.throw(Error)
      })

      it("Throws error when url has no url", () => {
        expect(() => new GBM.Suggestion({ type: 'url', text: 'something' })).to.throw(Error)
      })

      it("can create valid text suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "url",
          text: "Open link",
          url: "https://foo.bar"
        })
        expect(suggestion.type).to.equal("url")
        expect(suggestion.text).to.equal("Open link")
        expect(suggestion.url).to.equal("https://foo.bar")
      })
    })

    describe("Phone suggestion", () => {
      it("Throws error when phone type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'phone' })).to.throw(Error)
      })

      it("Throws error when phone has no phoneNumber", () => {
        expect(() => new GBM.Suggestion({ type: 'phone', text: 'something' })).to.throw(Error)
      })

      it("can create valid text suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "phone",
          text: "Dial",
          phoneNumber: "+1234567890"
        })
        expect(suggestion.type).to.equal("phone")
        expect(suggestion.text).to.equal("Dial")
        expect(suggestion.phoneNumber).to.equal("+1234567890")
      })
    })

    describe("Auth suggestion", () => {
      it("Throws error when auth type has no auth object", () => {
        expect(() => new GBM.Suggestion({ type: 'auth' })).to.throw(Error)
      })

      it("Throws error when auth has no valid auth object", () => {
        expect(() => new GBM.Suggestion({ type: 'auth', auth: {} })).to.throw(Error)
      })

      it("can create valid auth suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "auth",
          auth: new GBM.Auth({
            clientId: 'CLIENT_ID',
            codeChallenge: 'CODE_CHALLENGE',
            scopes: ['SCOPE']
          })
        })
        expect(suggestion.type).to.equal("auth")
        expect(suggestion.auth.clientId).to.equal("CLIENT_ID")
      })
    })

    describe("Live Agent suggestion", () => {

      it("can create valid live agent suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "live_agent"
        })
        expect(suggestion.type).to.equal("live_agent")
      })
    })
  })
})