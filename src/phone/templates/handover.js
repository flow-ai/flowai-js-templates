import Template from '../../generic/templates/template'

/**
 * Put call into a waiting queue and play music
 *
 * @memberof Phone
 * @category Templates
 *
 * @property {string} url - Url to music to play
 * @example
 * const handover = new Handover('https://example.com/queue-music.mp3')
 **/
class Handover extends Template {

   /**
    * @param {string} opts.url - Required
    **/
   constructor(opts) {
      super()

      let url = opts
      if (typeof url === 'object') {
         url = opts.url
      }

      if (url && typeof url !== 'string') {
         throw new Error('Url should be string')
      }

      this.url = url
   }

   toJSON() {
      const {
         url
      } = this

      return {
         type: 'phone_handover',
         payload: {
            url
         }
      }
   }
}

export default Handover
