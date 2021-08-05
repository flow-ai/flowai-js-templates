
import Parameter from "./parameter";

/**
 *
 * @category Whatsapp
 *
 * @property {string} type - Required.
 * @property {string} subtype - Optional. Used when type is set to button.
 * @property {string} parameters - Array containing the content of the message. Values: text, currency, date_time, image, document, video
 * {type: {video: {link: 'http://example.com'}}}
 **/
class Component {
  /**
   * @param {string} opts.type - Required.
   * @param {string} opts.subtype - Optional. Used when type is set to button.
   **/
  constructor({ type, subtype }) {
    if(!type){
      throw new Error('Type is mandatory')
    }

    this.type = type
    this.subtype = subtype
    this.parameters = []
  }

  addParameter(param) {
    if(!(type instanceof Parameter)){
      throw new Error('Type of parameter must be media, currency or date time')
    }
    this.parameters.push(param)
    return this
  }

  toJSON() {
    const {
      type,
      subtype,
      parameters,
    } = this


    return {
      type,
      subtype,
      parameters,
    }
  }
}

export default Component
