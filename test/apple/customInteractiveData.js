import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Template Apple Custom Interactive Data", () => {

  it("Throws error without options", () => {
    expect(() => new Apple.CustomInteractiveData()).to.throw()
  })

  it("Can create sections", () => {
    const custom = new Apple.CustomInteractiveData({
      receivedMessage: new Apple.InteractiveMessage({
        title: "Select products",
        subtitle: "Fresh and straight from the farm",
        style: "small"
      }),
      replyMessage: new Apple.InteractiveMessage({
        title: "Selected products",
        style: "small"
      }),
      appId: "app-store-id",
      appName: "Name of the App",
      appIcon: "https://source.unsplash.com/random",
      useLiveLayout: false,
      url: "?data=passed-to-app&data2=more-data-passed-to-app"
    })

    expect(custom.receivedMessage.title).to.equal("Select products")
    expect(custom.replyMessage.title).to.equal("Selected products")
    expect(custom.appId).to.equal("app-store-id")
    expect(custom.appId).to.equal("app-store-id")
    expect(custom.appName).to.equal("Name of the App")
    expect(custom.appIcon).to.equal("https://source.unsplash.com/random")
    expect(custom.useLiveLayout).to.equal(false)
    expect(custom.url).to.equal("?data=passed-to-app&data2=more-data-passed-to-app")
  })
})
