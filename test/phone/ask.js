import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

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
})
