import Template from '../../base/templates/template'
import InteractiveMessage from '../components/interactiveMessage'
import Oauth2 from '../components/oauth2'

/**
 * Authenticate a customer using the OAuth protocol
 * 
 * @memberof Apple
 * @category Authentication
 * 
 * @property {Oauth2} oauth2 - Required. Oauth2 collection of keys
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to start the authentication
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a authentication request, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer authenticates and returns a reply to the business.
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
class AuthRequest extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {Oauth2} opts.oauth2 - Required. Oauth2 collection of keys
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the authentication request window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer authenticated
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create an AuthRequest you need to provide all required options")
    }

    const {
      oauth2,
      receivedMessage,
      replyMessage
    } = opts

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("AuthRequest requires a replyMessage of the type InteractiveMessage")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("AuthRequest requires a receivedMessage of the type InteractiveMessage")
    }

    if(!(oauth2 instanceof Oauth2)) {
      throw new Error("AuthRequest requires a oauth2 property of the type Oauth2")
    }
    
    this.oauth2 = oauth2
    this.receivedMessage = receivedMessage
    this.replyMessage = replyMessage
  }

  toJSON() {
    const {
      replyMessage,
      receivedMessage,
      oauth2,
      delay,
      fallback
    } = this

    return {
      type: 'apple_auth_request',
      payload: {
        replyMessage,
        receivedMessage,
        oauth2
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default AuthRequest