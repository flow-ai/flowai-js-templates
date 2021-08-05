
/**
 *
 * @category Whatsapp
 *
 * @property {string} sub_type - Type of button being created.
 * @property {string} index - Position index of the button. You can have up to 3 buttons using index values of 0-2.
 * @property {string} type - Required, type of the button
 * @property {string} payload - payload of the button (for quick replies)
 * @property {string} text - text of the button (for url buttons)
 **/
class ButtonTemplate {
  /**
   * @param {string} opts.sub_type - Required, Type of button being created
   * @param {string} opts.index - Required, Position index of the button
   * @param {string} opts.type - Required, type of the button
   * @param {string} opts.payload - payload of the button (Required for quick replies)
   * @param {string} opts.text - text of the button (Required for url buttons)
   **/
  constructor({ sub_type, index, type, payload, text }) {

    if(typeof sub_type !== 'string' || sub_type.length === 0){
      throw new Error('Sub type is mandatory')
    }
    if(typeof index !== 'string' || index.length === 0){
      throw new Error('Index is mandatory')
    }
    if(typeof type !== 'string' || type.length === 0){
      throw new Error('Type is mandatory')
    }
    this.sub_type = sub_type
    this.index = index
    this.type = type
    this.payload = payload
    this.text = text
  }

  toJSON() {
    const {
      sub_type,
      index,
      type,
      payload,
      text,
    } = this

    return {
      sub_type,
      index,
      parameters: {
        type,
        payload,
        text,
      }
    }
  }
}

export default ButtonTemplate
