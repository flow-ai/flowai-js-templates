import Template from '../../generic/templates/template'

/**
 * Pause a moment during the call
 * @property {float} seconds - The number of seconds to delay
 * @example
 * const pause = new Pause(0.2)
 **/
class Pause extends Template {

  /**
   * @param {number} opts.seconds - Required
   **/
  constructor(opts) {
    super()

    let seconds = opts
    if(typeof seconds === 'object') {
      seconds = opts.seconds
    }

    if(typeof seconds !== 'number' || seconds < 0) {
      throw new Error('Seconds need to be a positive number')
    }

    this.seconds = seconds
  }

  toJSON() {
    const {
      seconds
    } = this

    return {
      type: 'phone_pause',
      payload: {
        seconds
      }
    }
  }
}

export default Pause
