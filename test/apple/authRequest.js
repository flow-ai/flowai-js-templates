import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Template Apple AuthRequest", () => {

  it("Throws error without options", () => {
    expect(() => new Apple.AuthRequest()).to.throw()
  })

  it("Can create auth request", () => {
    const authRequest = new Apple.AuthRequest({
      oauth2: new Apple.Oauth2({
        responseType: "code",
        scope: ["email", "profile"],
        state: "security_token",
        responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
        clientSecret: "client_secret"
      }),  
      receivedMessage: new Apple.InteractiveMessage({
        title: "Sign In to Business Chat Sandbox"
      }),
      replyMessage: new Apple.InteractiveMessage({
        title: "You are signed in!"
      })
    })

    expect(authRequest.oauth2.scope.length).to.equal(2)
    // console.info(JSON.stringify(authRequest, null, 2))
  })
})
