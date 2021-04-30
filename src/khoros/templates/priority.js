import Template from '../../generic/templates/template'

/**
 * Custom conversation priority in Care
 *
 * @category Templates
 *
 * @property {number} priority - Priority to set
 * @example
 * const priority = new Priority(5)
 **/
class Priority extends Template {

   /**
    * @param {number} opts - Required
    **/
   constructor(opts) {
      super()

      let priority = opts

      if (typeof priority === 'object') {
         priority = opts.priority
      }

      if (typeof priority !== 'number' || !Number.isNaN(priority)) {
         throw new Error('Priority value is mandatory')
      }

      this.priority = priority
   }

   toJSON() {
      const {
         priority
      } = this

      return {
         type: 'khoros_priority',
         payload: {
            priority
         }
      }
   }
}

export default Priority
