import chai, { expect, assert } from 'chai'
import { Apple } from '../../src'

describe("Apple", () => {
  describe("Component Apple oauth2", () => {

    it("Throws error without options", () => {
      expect(() => new Apple.Oauth2()).to.throw()
    })

    it("Can create auth request", () => {
      const oauth = new Apple.Oauth2({
        responseType: "code",
        scope: ["email", "profile"],
        state: "security_token",
        responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
        clientSecret: "client_secret"
      })

      expect(oauth.scope.length).to.equal(2)
      // console.info(JSON.stringify(authRequest, null, 2))
    })
  })
})