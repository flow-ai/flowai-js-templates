import Template from '../../generic/templates/template'

/**
 * Template with an One-Time Notification
 * @property {string} title - title of the OTN
 * @property {string} tag - tag that will be assigned to actor when this OTN is called
 * @example
 * const otn = new OTN('When keyboards are available', 'keyboard')
 **/
class OTN extends Template {

  /**
   * @param {string} title - Required
   * @param {string} tag - Optional
   **/
  constructor({ title, tag }) {
    super()

    let otnTitle = title

    if (typeof otnTitle !== 'string' || !otnTitle.length) {
      throw new Error('Title is mandatory')
    }

    if (otnTitle.length > 65) {
      throw new Error('Title length should be less or equal 65 symbols')
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
