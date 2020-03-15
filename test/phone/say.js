import chai, { expect, assert } from 'chai'
import { Phone } from '../../src'

describe("Template Phone Say", () => {
  
  it("Throws error without a speech or url", () => {
    expect(() => new Phone.Say({})).to.throw(Error)
  })

  it("can create with speech", () => {
    const say = new Phone.Say({ speech: "Awesome text"})
    expect(say.speech).to.equal("Awesome text")
    expect(say.voice).to.equal("alice")
    expect(say.language).to.equal(undefined)
  })

  it("can create with url", () => {
    const say = new Phone.Say({ url: "https://someurl"})
    expect(say.url).to.equal("https://someurl")
  })

  it("can create with valid voice", () => {
    const say = new Phone.Say({ 
      speech: "¿Hablas español?",
      voice: "man"
    })
    expect(say.voice).to.equal("man")
  })

  it("cannot create with invalid voice", () => {
    expect(() => new Phone.Say({ 
      speech: "¿Hablas español?",
      voice: "female"
    })).to.throw(Error)
  })

  it("can create with valid alice language", () => {
    const say = new Phone.Say({ 
      speech: "Spreek je Nederlands?",
      language: "nl-NL",
      voice: "alice"
    })
    expect(say.language).to.equal("nl-NL")
  })

  it("cannot create with an invalid alice language", () => {
    expect(() => new Phone.Say({ 
      speech: "Spreek je Nederlands?",
      language: "nl-NL",
      voice: "man"
    })).to.throw(Error)
  })

  it("can create with valid other language", () => {
    const say = new Phone.Say({ 
      speech: "Do you speak English?",
      language: "en",
      voice: "man"
    })
    expect(say.language).to.equal("en")
  })

  it("cannot create with an invalid other language", () => {
    expect(() => new Phone.Say({ 
      speech: "Spreek je Nederlands?",
      language: "nl",
      voice: "man"
    })).to.throw(Error)
  })
})
