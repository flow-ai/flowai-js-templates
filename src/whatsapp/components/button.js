import { nanoid } from 'nanoid'

import { parseParam } from '../../base/components/param'

/**
 *
 * @category Whatsapp
 *
 * @property {string} title - title of the button
 * @example
 * new Button({
 *  title: 'Select',
 *  type: 'event',
 *  value: 'NICE_EVENT'
 * })
 **/
class Button {
   /**
    * @param {object} opts
    * @param {string} opts.title - Required, title of the button
    * @param {string} opts.type - Required, type of the button (text, event, flow or step)
    * @param {string} opts.value - Required, value of payload to be sent back to the server when customer clicks the buttons
    * @param {string} opts.id - Optional, id of the button. If not passed will be automatically generated
    * @param {Param} opts.param - Optional, parameter to pass to the button
    * @param {Array<Param>} opts.params - Optional, parameters to pass to the button
    **/
   constructor({ title, type, value, param, params, id }) {


      if (typeof title !== 'string' || title.length === 0) {
         throw new Error('Button title is mandatory')
      }
      if (typeof type !== 'string' || type.length === 0) {
         throw new Error('Button type is mandatory')
      }
      if (type && (type !== 'text' && type !== 'event' && type !== 'flow' && type !== 'step')) {
         throw new Error('Type should be text, event, flow or step')
      }
      if (typeof value !== 'string' || value.length === 0) {
         throw new Error('Button value is mandatory')
      }

      this.id = id

      if (!this.id) {
         this.id = `b${nanoid(8)}`
      }

      this.title = title
      this.params = parseParam(param || params)
      this.type = type
      this.value = value
   }

   static generateId() {
      return `b${nanoid(8)}`
    }

   toJSON() {
      const {
         title,
         type,
         value,
         params,
         id
      } = this

      return {
         type: 'reply',
         reply: {
            title,
            type,
            value,
            params,
            id
         }
      }
   }
}

export default Button
