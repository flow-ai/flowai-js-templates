/**
 *
 * @category Whatsapp
 *
 * @property {string} type - Containing the content of the message. Values: text, currency, date_time, image, document, video
 * {video: {link: 'http://example.com'}}
 **/
import DateTime from "./dateTime";
import Currency from "./currency";
import Media from "./media";

class Parameter {
  /**
   * @param {Media} opts.type - Required. Can also be Currency || DateTime || string
   **/
  constructor({ type }) {
    if(!(type instanceof Media) && !(type instanceof Currency) && !(type instanceof DateTime) && !(typeof type !== 'string')){
      throw new Error('Type of parameter must be media, currency or date time')
    }

    this.type = type
  }


  toJSON() {
    const {
      type,
    } = this

    if(typeof type === 'string'){
      return {
        type: 'text',
        text: type
      }
    }

    if(type instanceof Media){
      return {
        type: [type.type],
        [type.type]: {link: type.url}
      }
    }

    return {
      type,
    }
  }
}

export default Parameter
