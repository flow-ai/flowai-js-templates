import Template from '../../generic/templates/template'

/**
 * Custom conversation system reply in Care
 *
 * @category Templates
 *
 * @property {string} type - type of message
 * @property {string} text - message to show

 * @example
 * const systemReply = new SystemReply({
 *    type: 'NOTIFICATION_SUCCESS',
 *    text: 'this is success message'
 * })
 **/
class SystemReply extends Template {

   /**
    * @param {string} opts.type - Required
    * @param {string} opts.text - Required

    **/
   constructor({type, text}) {
      super()


      if (typeof type !== 'string') {
         throw new Error('Type must be string')
      }

      this.type = type
      this.text = text
   }

   toJSON() {
      const {
         type,
         text
      } = this

      return {
         type: 'system_reply',
         payload: {
            type,
            text
         }
      }
   }
}

export default SystemReply
