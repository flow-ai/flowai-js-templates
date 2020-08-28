import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Template Apple RichLink", () => {

  it("Throws error without options", () => {
    expect(() => new Apple.RichLink()).to.throw()
  })

  it("Can create rich link", () => {
    const richLink = new Apple.RichLink({
      title: "Some news website",
      url: "https://www.mynewswebsite.corp",
      assets: [
        new Apple.ImageAsset({
          url: "https://source.unsplash.com/random",
          mimeType: "image/png"
        }),
        new Apple.VideoAsset({
          url: "https://somevideo",
          mimeType: "video/mp4"
        })
      ]
    })

    expect(richLink.assets.length).to.equal(2)
    // console.info(JSON.stringify(richLink, null, 2))
  })
})
