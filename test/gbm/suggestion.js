import chai, { expect, assert } from 'chai'
import { GBM, Param } from '../../src'

describe("GBM", () => {
  describe("Template Suggestion", () => {

    it("Throws error without data", () => {
      expect(() => new GBM.Suggestion()).to.throw(Error)
    })

    it("By default created a Text suggestion", () => {
      const suggestion = new GBM.Suggestion("Yes")
      expect(suggestion.type).to.equal("text")
      expect(suggestion.text).to.equal("Yes")
      expect(suggestion.data).to.equal("Yes")
    })

    it("By default created a Text suggestion with only text", () => {
      const suggestion = new GBM.Suggestion({ text: "Yes" })
      expect(suggestion.type).to.equal("text")
      expect(suggestion.text).to.equal("Yes")
      expect(suggestion.data).to.equal("Yes")
    })

    it("By default created a Text suggestion if data is different", () => {
      const suggestion = new GBM.Suggestion({ 
        text: "Yes",
        data: "Yes I want a coke"
      })
      expect(suggestion.type).to.equal("text")
      expect(suggestion.text).to.equal("Yes")
      expect(suggestion.data).to.equal("Yes I want a coke")
    })

    it("can create valid text suggestion with a param", () => {
      const suggestion = new GBM.Suggestion({ 
        type: "text",
        text: "Buy product",
        params: new Param('itemId', '332223323')
      })
      expect(suggestion.params.length).to.equal(1)
    })

    it("can create valid text suggestion with params", () => {
      const suggestion = new GBM.Suggestion({ 
        type: "text",
        text: "Buy products",
        params: [
          new Param('itemId', '332223323'),
          new Param('itemId', '113432143')
        ]
      })
      expect(suggestion.params.length).to.equal(2)
    })

    describe("Text suggestion", () => {
      it("Throws error when text type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'text' })).to.throw(Error)
      })

      it("can create valid text suggestion without data", () => {
        expect(() => new GBM.Suggestion()).to.throw(Error)
        const suggestion = new GBM.Suggestion({ 
          type: 'text', 
          text: 'something' 
        })
        expect(suggestion.type).to.equal("text")
        expect(suggestion.text).to.equal("something")
        expect(suggestion.data).to.equal("something")
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

    describe("Event suggestion", () => {
      it("Throws error when event type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'event' })).to.throw(Error)
      })

      it("Throws error when event has no data", () => {
        expect(() => new GBM.Suggestion({ type: 'event', text: 'something' })).to.throw(Error)
      })

      it("can create valid event suggestion", () => {
        const suggestion = new GBM.Suggestion({ 
          type: "event",
          text: "Main menu",
          data: "MAIN_MENU"
        })
        expect(suggestion.type).to.equal("event")
        expect(suggestion.text).to.equal("Main menu")
        expect(suggestion.data).to.equal("MAIN_MENU")
      })
    })

    describe("URL suggestion", () => {
      it("Throws error when url type has no text", () => {
        expect(() => new GBM.Suggestion({ type: 'url' })).to.throw(Error)
      })

      it("Throws error when url has no url", () => {
        expect(() => new GBM.Suggestion({ type: 'url', text: 'something' })).to.throw(Error)
      })

      it("can create valid url suggestion", () => {
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

      it("can create valid phone suggestion", () => {
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