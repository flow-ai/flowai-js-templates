import { parseParam, flattenParams } from '../../base/components/param'
import Auth from '../components/auth'

/**
 * A suggestion for the user to reply with specified text or initiates a native action on the device.
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
 * @property {Param[]} params - Optional parameters associated with the suggestion
 * 
 **/
class Suggestion {
  /**
   * @param {string} opts.type - Required type, default is text (text, url, phone, live_agent, auth)
   * @param {string} opts.text - Required unless of type auth or live_agent
   * @param {string} opts.data - Optional data, required if type is text
   * @param {string} opts.url - Required if type is url 
   * @param {string} opts.phoneNumber - Required if type is phone
   * @param {Auth} opts.auth - Required if type is auth
   * @param {Param|Param[]} opts.params - Optional Param or array or Array of Params related to this Suggestion
   **/
  constructor(opts) {
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
      case 'text': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof data !== 'string' || !data.length)) {
          throw new Error('Suggestion data must be a valid string')
        }
        break
      }
      case 'url': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof url !== 'string' || !url.length)) {
          throw new Error('Suggestion url must be a valid URL')
        }
        break
      }
      case 'phone': {
        if((typeof text !== 'string' || !text.length || text.length > 25)) {
          throw new Error('Suggestion text must be a valid string no longer then 25 characters')
        }
        if((typeof phoneNumber !== 'string' || !phoneNumber.length)) {
          throw new Error('Suggestion phoneNumber must be a valid phone number')
        }
        break
      }
      case 'auth': {
        if(!(auth instanceof Auth)) {
          throw new Error('Suggestion auth must be a valid GBM.Auth object')
        }
        break
      }
      case 'live_agent': {
        break
      }
      default: {
        throw new Error('Unknown suggestion type')
      }
    }

    this.type = type
    this.text = text || undefined
    this.data = data || undefined
    this.url = url || undefined
    this.phoneNumber = phoneNumber || undefined
    this.auth = auth || undefined
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
