/**
 * Default action used in Card, List and Buttons templates
 * @property {string} type - Type of action (url, postback etc)
 * @property {string} value - Value of the action
 **/
class Action {
  /**
   * @param {string} opts.type - Required
   * @param {string} opts.value - Required
   **/
  constructor({ type, value }) {

    if(typeof value !== 'string' || value.length === 0) {
      throw new Error('Value is mandatory')
    }

    this.value = value

    if(typeof type !== 'string' || type.length === 0) {
      throw new Error('type is mandatory')
    }

    this.type = type
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

export default Action
