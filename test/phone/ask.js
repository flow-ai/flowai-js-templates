import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

describe("Phone", () => {
  describe("Template Phone Ask", () => {
    
    it("Throws error without a speech or url", () => {
      expect(() => new Phone.Ask({})).to.throw(Error)
    })

    it("can create with speech", () => {
      const ask = new Phone.Ask({ speech: "Awesome text"})
      expect(ask.speech).to.equal("Awesome text")
      expect(ask.voice).to.equal("alice")
      expect(ask.language).to.equal(undefined)
    })

    it("can create with url", () => {
      const ask = new Phone.Ask({ url: "https://someurl"})
      expect(ask.url).to.equal("https://someurl")
    })

    it("can create with valid voice", () => {
      const ask = new Phone.Ask({ 
        speech: "¿Hablas español?",
        voice: "man"
      })
      expect(ask.voice).to.equal("man")
    })

    it("cannot create with invalid voice", () => {
      expect(() => new Phone.Ask({ 
        speech: "¿Hablas español?",
        voice: "female"
      })).to.throw(Error)
    })

    it("can create with valid alice language", () => {
      const ask = new Phone.Ask({ 
        speech: "Spreek je Nederlands?",
        language: "nl-NL",
        voice: "alice"
      })
      expect(ask.language).to.equal("nl-NL")
    })

    it("cannot create with an invalid alice language", () => {
      expect(() => new Phone.Ask({ 
        speech: "Spreek je Nederlands?",
        language: "nl-NL",
        voice: "man"
      })).to.throw(Error)
    })

    it("can create with valid other language", () => {
      const ask = new Phone.Ask({ 
        speech: "Do you speak English?",
        language: "en",
        voice: "man"
      })
      expect(ask.language).to.equal("en")
    })

    it("cannot create with an invalid other language", () => {
      expect(() => new Phone.Ask({ 
        speech: "Spreek je Nederlands?",
        language: "nl",
        voice: "man"
      })).to.throw(Error)
    })

    it("can convert to JSON", () => {
      const json = new Phone.Ask({ 
        speech: "Do you speak English?",
        language: "en",
        voice: "man"
      }).toJSON()
    })

    it("will accept valid finish on key values", () => {
      const ask = new Phone.Ask({ 
        speech: "Some question",
        finishOnKey: '6'
      })
      expect(ask.finishOnKey).to.equal("6")
    })

    it("will not accept invalid finish on key values", () => {
      expect(() => new Phone.Ask({ 
        speech: "Some question",
        finishOnKey: 'a'
      })).to.throw(Error)
    })

    it("will accept valid number of digits", () => {
      const ask = new Phone.Ask({ 
        speech: "Some question",
        numDigits: 2
      })
      expect(ask.numDigits).to.equal(2)
    })

    it("will not accept invalid numDigits values", () => {
      expect(() => new Phone.Ask({ 
        speech: "Some question",
        numDigits: -2
      })).to.throw(Error)
    })

    it("will accept valid speech timeout", () => {
      const ask = new Phone.Ask({ 
        speech: "Some question",
        speechTimeout: 2
      })
      expect(ask.speechTimeout).to.equal(2)
    })

    it("will not accept invalid speech timeout values", () => {
      expect(() => new Phone.Ask({ 
        speech: "Some question",
        speechTimeout: -2
      })).to.throw(Error)
    })

    it("will accept valid speech model values", () => {
      const ask = new Phone.Ask({ 
        speech: "Some question",
        speechModel: 'numbers_and_commands'
      })
      expect(ask.speechModel).to.equal("numbers_and_commands")
    })

    it("will not accept invalid speech model values", () => {
      expect(() => new Phone.Ask({ 
        speech: "Some question",
        speechModel: 'a'
      })).to.throw(Error)
    })
  })
})