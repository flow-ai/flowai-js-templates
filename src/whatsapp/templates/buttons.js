import Template from '../../base/templates/template'
import Button from '../components/button'

/**
 * A Whatsapp template that represents an array of {@link Buttonn}
 * 
 * @category Generic
 * 
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional {@link Media}
 * @property {Action} action - Optional {@link Action}
 * @property {Button[]} buttons - Optional set of {@link Button} components
 * @property {Action} action - Optional Action that is triggered when a user interacts with the card
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
