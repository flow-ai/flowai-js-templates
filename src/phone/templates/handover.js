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

      if (typeof opts !== 'object') {
         throw new Error('Options should be an object')
      }

      const url = opts.url

      if (url && typeof url !== 'string') {
         throw new Error('Url should be string')
      }

      let repeat = opts.repeat

      if (repeat < 1) {
         throw new Error('Repeat can\'t be less than 1')
      }

      if (!repeat || isNaN(repeat)) {
         repeat = 10
      }

      this.url = url
      this.repeat = repeat
   }

   toJSON() {
      const {
         url,
         repeat
      } = this

      return {
         type: 'phone_handover',
         payload: {
            url,
            repeat
         }
      }
   }
}

export default Handover
