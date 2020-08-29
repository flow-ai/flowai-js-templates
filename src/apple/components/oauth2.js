
/**
 * Keys for the OAuth2 authentication request used with a {@link AuthRequest}
 * 
 * @memberof Apple
 * @category Authentication
 * 
 * @property {string} clientSecret - Required. The secret provisioned by the authorization server
 * @property {string} responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
 * @property {string} responseType - Required. Indicates the type of authentication request
 * @property {string[]} scope - Required. Array of scopes that describe the granted access for read and write
 * @property {string} state - Required. Indicates the state of the authentication request
 * 
 * @example
 * const authRequest = new Apple.AuthRequest({
 *   oauth2: new Apple.Oauth2({
 *     responseType: "code",
 *     scope: ["email", "profile"],
 *     state: "security_token",
 *     responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
 *     clientSecret: "client_secret"
 *   }),  
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Sign In to Business Chat Sandbox"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "You are signed in!"
 *   })
 * })
 **/
class Oauth2 {

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.clientSecret - Required. The secret provisioned by the authorization server
  * @param {string} opts.responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
  * @param {string} opts.responseType - Required. Indicates the type of authentication request
  * @param {string[]} opts.scope - Required. Array of scopes that describe the granted access for read and write
  * @param {string} opts.state - Required. Indicates the state of the authentication request
  **/ 
  constructor(opts) {

    if(typeof opts !== "object") {
      throw new Error("To create an AuthRequest you need to provide all required options")
    }

    const {
      clientSecret,
      responseEncryptionKey,
      responseType,
      scope,
      state
    } = opts

    if(Array.isArray(scope)) {
      for (let i = 0; i < scope.length; i++) {
        this.addScope(scope[i])
      }
    }

    if(typeof clientSecret !== "string" || !clientSecret.length) {
      throw new Error("AuthRequest requires a valid clientSecret")
    }

    if(typeof responseEncryptionKey !== "string" || !responseEncryptionKey.length) {
      throw new Error("AuthRequest requires a valid responseEncryptionKey")
    }

    if(typeof responseType !== "string" || !responseType.length) {
      throw new Error("AuthRequest requires a valid responseType")
    }

    if(typeof state !== "string" || !state.length) {
      throw new Error("AuthRequest requires a valid state")
    }

    this.clientSecret = clientSecret
    this.responseEncryptionKey = responseEncryptionKey
    this.responseType = responseType
    this.state = state
  }

    /**
   * Add a scope to the list of scopes
   * 
   * @param {string} - scope
   * 
   * @return {AuthRequest}
   **/
  addScope(scope) {
    if(typeof scope !== "string" || !scope.length) {
      throw new Error('AuthRequest scope must be a valid string')
    }

    if(!this.scope) {
      this.scope= []
    }

    this.scope.push(scope)

    return this
  }

  toJSON() {
    const {
      clientSecret,
      responseEncryptionKey,
      responseType,
      scope,
      state
    } = this

    return {
      clientSecret,
      responseEncryptionKey,
      responseType,
      scope,
      state
    }
  }
}

export default Oauth2