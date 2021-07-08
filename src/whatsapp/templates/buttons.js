import Template from '../../base/templates/template'
import Button from '../components/button'
import Header from '../components/header'

/**
 * A Whatsapp template that represents an array of {@link Buttonn}
 * 
 * @category Generic
 *
 * @property {string} body  - Required
 * @property {string} footer - Optional
 * @property {Header} header - Optional {@link Header}
 * @property {Array} buttons - Required
 * @example
 * const ButtonWA = new Templates.WhatsApp.Button({
 *              title: "Example title",
 *            })
 * const HeaderWA = new Templates.WhatsApp.Header({
 *              type: 'text',
 *              value: 'Example value'
 *            })
 *
 * const buttonsWA = new Templates.WhatsApp.List({body: 'Example body',
 *             header: HeaderWA,
 *             buttons: [ButtonWA]
 *           })
 **/
class Buttons extends Template {

  /**
   * @param {string} body  - Required
   * @param {string} footer - Optional
   * @param {Header} header - Optional {@link Header}
   * @param {Array} buttons - Required
   **/
  constructor({header, body, footer, buttons }) {
    super()

    if(typeof body !== 'string' || !body.length) {
      throw new Error('Buttons body is mandatory')
    }
    if(!buttons || !buttons.length) {
      throw new Error('Buttons are mandatory')
    }
    if(header && !(header instanceof Header)) {
      throw new Error('Buttons header must be Header object')
    }

    this.body = body
    this.footer = footer || undefined
    this.header = header || undefined
    this.buttons = buttons || []
  }

  /**
   * Add a button to the buttons
   * @param {Button} - button
   * @return {Buttons}
   **/
  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('Buttons addButton argument must be an instance of a Button')
    }
    this.buttons.push(button)

    return this
  }

  toJSON() {
    const {
      body,
      footer,
      header,
      buttons
    } = this

    const payload = {
      body: {
        text: body
      },
      action: {
        buttons
      },
      type: 'button'
    }

    if(header){
      payload.header = header
    }
    if(footer){
      payload.footer = {
        text: footer
      }
    }

    return {
      type: 'buttonsWA',
      payload
    }
  }
}

export default Buttons
