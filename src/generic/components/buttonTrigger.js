/**
 * Attach an optional trigger that can be applied to a {@link Button} if the type of the button is either 'url' or 'phone'.
 * 
 * @category Generic
 * 
 * @property {string} type - Type of button trigger (event, flow)
 * @property {string} value - Value of the event/flow to be triggered
 * @example
 * new ButtonTrigger({
 *  type: 'event',
 *  value: 'event-to-trigger'
 * })
 **/
class ButtonTrigger {
  /**
   * @param {object} opts - Required properties
   * @param {string} opts.type - Required, type of additional trigger (event, flow)
   * @param {string} opts.value - Required, name of the event/flow to be triggered
   **/
  constructor({ type, value }) {
    if (typeof type !== 'string' || type.trim().length === 0) {
        throw new Error('Invalid type')
    } else if (type !== 'event' && type !== 'flow') {
        throw new Error('\'type\' can be only \'event\' or \'flow\'')
    }

    if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error('Invalid type')
    }

    this.type = type
    this.value = value
  }

  isValidTrigger() {
    if (typeof this.type !== 'string' || this.type.trim().length === 0) {
        return false
    }
    if (typeof this.value !== 'string' || this.value.trim().length === 0) {
        return false
    }
    return true
  }

  toJSON() {
    const {
      type,
      value
    } = this

    return {
      type,
      value
    }
  }
}

export default ButtonTrigger
