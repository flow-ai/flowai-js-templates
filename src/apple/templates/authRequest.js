import Template from '../../generic/templates/template'
import InteractiveMessage from '../components/interactiveMessage'

/**
 * Pass a customer's authentication data to a business by using the OAuth protocol
 * 
 * @memberof Apple
 * 
 * @property {string} clientSecret - Required. The secret provisioned by the authorization server
 * @property {string} responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
 * @property {string} responseType - Required. Indicates the type of authentication request
 * @property {string[]} scope - Required. Array of scopes that describe the granted access for read and write
 * @property {string} state - Required. Indicates the state of the authentication request
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to start the authentication
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a authentication request, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer authenticates and returns a reply to the business.
 * 
 * @example
 * const authRequest = new Apple.AuthRequest({
 *   responseType: "code",
 *   scope: ["email", "profile"],
 *   state: "security_token",
 *   responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
 *   clientSecret: "client_secret",
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Sign In to Business Chat Sandbox"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "You are signed in!"
 *   })
 * })
 **/
class AuthRequest extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.clientSecret - Required. The secret provisioned by the authorization server
  * @param {string} opts.responseEncryptionKey - Required. The Base64-encoded public key that encrypts the access token returned in the response
  * @param {string} opts.responseType - Required. Indicates the type of authentication request
  * @param {string[]} opts.scope - Required. Array of scopes that describe the granted access for read and write
  * @param {string} opts.state - Required. Indicates the state of the authentication request
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the authentication request window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer authenticated
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create an AuthRequest you need to provide all required options")
    }

    const {
      clientSecret,
      responseEncryptionKey,
      responseType,
      scope,
      state,
      receivedMessage,
      replyMessage
    } = opts

    if(Array.isArray(scope)) {
      for (let i = 0; i < scope.length; i++) {
        this.addScope(scope[i])
      }
    }

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("AuthRequest requires a replyMessage of the type InteractiveMessage")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("AuthRequest requires a receivedMessage of the type InteractiveMessage")
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
    this.receivedMessage = receivedMessage
    this.replyMessage = replyMessage
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
      replyMessage,
      receivedMessage,
      clientSecret,
      responseEncryptionKey,
      responseType,
      scope,
      state,
      delay,
      fallback
    } = this

    return {
      type: 'apple_authenticate',
      payload: {
        replyMessage,
        receivedMessage,
        clientSecret,
        responseEncryptionKey,
        responseType,
        scope,
        state
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default AuthRequest