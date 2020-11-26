import { parseParam, flattenParams } from '../../base/components/param'
import Auth from '../components/auth'

/**
 * A suggestion for the user to reply with a predefined text, trigger an event or initiate a native action like dialing a phone number
 * 
 * @memberof GBM
 * 
 * @category Components
 * 
 * @property {string} type - Type of suggestion, default is text (text, url, phone, live_agent, auth)
 * @property {string} text - Text that is shown in the suggested action. Maximum 25 characters.
 * @property {string} data - Value that is being send as the suggestion, empty if type is location
 * @property {string} url - URL to open in case it's a url type
 * @property {string} phoneNumber - phone number to dial in case of a phone type
 * @property {Auth} auth - phone number to dial in case of a phone type
 * @property {Base.Param[]} params - Optional parameters associated with the suggestion
 * 
 * @example
 * // Text suggestion
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Say hi",
 *   data: "Hello"
 * })
 * 
 * // With param
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Buy product",
 *   params: new Param('itemId', '332223323')
 * })
 * 
 * // With params
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "text",
 *   text: "Buy products",
 *   params: [
 *     new Param('itemId', '332223323'),
 *     new Param('itemId', '113432143')
 *   ]
 * })
 * 
 * // Short hand syntax
 * const textSuggestion = new GBM.Suggestion("yes")
 * 
 * // Event suggestion
 * const textSuggestion = new GBM.Suggestion({ 
 *   type: "event",
 *   text: "Main menu",
 *   data: "MAIN_MENU"
 * })
 * 
 * // Open URL suggestion
 * const urlSuggestion = new GBM.Suggestion({ 
 *   type: "url",
 *   text: "Open link",
 *   url: "https://foo.bar"
 * })
 * 
 * // Dial action
 * const dialSuggestion = new GBM.Suggestion({ 
 *   type: "phone",
 *   text: "Dial",
 *   phoneNumber: "+1234567890"
 * })
 * 
 * // Auth suggestion
 * const authSuggestion = new GBM.Suggestion({ 
 *   type: "auth",
 *   auth: new GBM.Auth({
 *     clientId: 'CLIENT_ID',
 *     codeChallenge: 'CODE_CHALLENGE',
 *     scopes: ['SCOPE']
 *   })
 * })
 * 
 * // Live agent suggestion
 * const liveAgentSuggestion = new GBM.Suggestion({ 
 *   type: "live_agent"
 * })
 * 
 * const text new GBM.Text("Make a suggestion")
 * text.addSuggestion(textSuggestion)
 * text.addSuggestion(urlSuggestion)
 * text.addSuggestion(authSuggestion)
 * text.addSuggestion(liveAgentSuggestion)
 **/
class Suggestion {
  /**
   * @param {string} opts.type - Required type, default is text (text, url, phone, live_agent, auth)
   * @param {string} opts.text - Required unless of type auth or live_agent
   * @param {string} opts.data - Optional data, required if type is text
   * @param {string} opts.url - Required if type is url 
   * @param {string} opts.phoneNumber - Required if type is phone
   * @param {Auth} opts.auth - Required if type is auth
   * @param {Base.Param|Base.Param[]} opts.params - Optional Param or array or Array of Params related to this Suggestion
   **/
  constructor(opts) {

    if(typeof opts === 'string') {
      this.type = 'text'
      this.text = opts
      this.data = opts
      return
    }

    const { 
      type, 
      text, 
      data, 
      url, 
      phoneNumber,
      auth,
      params 
    } = opts

    switch(type) {
      case 'event': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion event must be a valid string no longer then 25 characters')
        }
        if((typeof data !== 'string' || !data.length)) {
          throw new Error('Suggestion data must be a valid event name')
        }
        this.data = data
        break
      }
      case 'url': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof url !== 'string' || !url.length)) {
          throw new Error('Suggestion url must be a valid URL')
        }
        this.url = url
        break
      }
      case 'phone': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof phoneNumber !== 'string' || !phoneNumber.length)) {
          throw new Error('Suggestion phoneNumber must be a valid phone number')
        }
        this.phoneNumber = phoneNumber
        break
      }
      case 'auth': {
        if(!(auth instanceof Auth)) {
          throw new Error('Suggestion auth must be a valid GBM.Auth object')
        }
        this.auth = auth
        break
      }
      case 'live_agent': {
        break
      }
      default: {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof data === 'string' && !data.length)) {
          throw new Error('Suggestion data must be a valid string')
        }
        
        this.data = data || text
      }
    }

    this.type = type || 'text'
    this.text = text || undefined
    this.params = parseParam(params)
  }

  toJSON() {
    const {
      type, 
      text, 
      data, 
      url, 
      phoneNumber,
      auth,
      params
    } = this

    return {
      type, 
      text, 
      data, 
      url, 
      phoneNumber,
      auth,
      params: flattenParams(params)
    }
  }
}

export default Suggestion
