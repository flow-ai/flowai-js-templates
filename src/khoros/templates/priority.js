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

      if (typeof priority !== 'number' && Number.isNaN(priority)) {
         throw new Error('Priority value is mandatory')
      } else {
         priority = +priority
      }

      if (priority < 0 || priority > 5) {
         throw new Error('Priority can\'t be less than 0 and higher than 5')
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
