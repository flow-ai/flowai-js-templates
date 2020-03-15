import Template from '../template'

class Hangup extends Template {

  /**
   * Disconnect a phone call
   **/
  constructor() {
    super()
  }

  toJSON() {
    return {
      type: 'phone_hangup',
      payload: {}
    }
  }
}

export default Hangup
