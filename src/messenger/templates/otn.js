import Template from '../../base/templates/template'

/**
 * One-Time Notification Request Template
 * 
 * @description
 * The One-Time Notification request template template will be rendered and once the user clicks the Notify Me button, a special OTNR trigger is called. The specific user can now be reached for a follow up message after the 24hr period.
 *
 * @memberof Messenger 
 * @category Templates
 * 
 * @property {string} title - title of the OTN
 * @property {string} tag - tag that will be assigned to actor when this OTN is called
 * @example
 * const otn = new Messenger.OTN('When keyboards are available', 'keyboard')
 **/
class OTN extends Template {

  /**
   * @param {string} title - Required title for the request
   * @param {string} tag - Optional tag name to apply when a user accepts the OTNR
   **/
  constructor({ title, tag }) {
    super()

    let otnTitle = title

    if (typeof otnTitle !== 'string' || !otnTitle.length) {
      throw new Error('Title is mandatory')
    }

    if (otnTitle.length > 65) {
      throw new Error('Title length should be less or equal to 65 symbols')
    }

    this.title = otnTitle
    this.tag = tag
  }

  toJSON() {
    const {
      title,
      tag,
      delay,
      fallback
    } = this

    return {
      type: 'messenger_otn',
      payload: {
        title,
        tag
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default OTN
