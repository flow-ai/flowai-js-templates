import Template from '../../base/templates/template'

/**
 * Deliver a sticker to a user
 * 
 * @alias WhatsApp.Sticker
 * 
 * @category WhatsApp
 * 
 * @property {string} title - Describes the sticker
 * @property {string} stickerId - ID to the sticker
 * @example
 * const sticker = new WhatsApp.Sticker("121233212321")
 **/
class Sticker extends Template {

  /**
   * @param {object|string} opts - Options or shorthand a ID
   * @param {string} opts.stickerId - Required
   **/
  constructor( opts ) {
    super()

    let stickerId 

    if(typeof opts === 'string') {
      stickerId = opts
    } else if(typeof opts === 'object') {
      stickerId = opts.stickerId
    }

    if(typeof stickerId !== 'string' || !stickerId.length) {
      throw new Error('Sticker stickerId is mandatory')
    }

    this.stickerId = stickerId
  }

  toJSON() {
    const {
      stickerId
    } = this

    return {
      type: 'whatsapp_sticker',
      payload: {
        stickerId
      }
    }
  }
}

export default Sticker
