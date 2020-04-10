import Template from '../../generic/templates/template'

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
