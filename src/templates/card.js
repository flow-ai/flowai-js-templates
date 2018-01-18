import Template from './template'
import Action from '../components/action'
import Button from '../components/button'
import Media from '../components/media'

/**
 * Template composed of a media attachment, short description and buttons to request input from the user.
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional Media
 * @property {Action} action - Optional Action
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the card
 * @example
 * const button1 = new Button({
 *   label: "Label",
 *   type: "url",
 *   value: "https://..."
 * })
 *
 * const button2 = new Button({
 *   label: "Label",
 *   type: "url",
 *   value: "https://..."
 *  })
 *
 * const card = new Card({
 *   title: "Awesome title",
 *   subtitle: "Some subtitle",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 * card.addButton(button1)
 * card.addButton(button2)
 **/
class Card extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional
   * @param {Action} opts.action - Optional
   **/
  constructor({ title, subtitle, media, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Card title is mandatory')
    }

    this.title = title
    this.subtitle = subtitle || undefined
    this.media = media || undefined
    this.action = action || undefined
  }

  set media(media) {
    if(media && !(media instanceof Media)) {
      throw new Error('Card media must be an instance of Media')
    }

    this._media = media
  }

  get media() {
    return this._media
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('Card action must be an instance of Action')
    }

    this._action = action
  }

  get action() {
    return this._action
  }

  /**
   * Add a button to the card
   * @param {Button} - button
   * @return {Card}
   **/
  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('Card addButton argument must be an instance of a Button')
    }

    if(!this.buttons) {
      this.buttons = []
    }

    this.buttons.push(button)

    return this
  }

  toJSON() {
    const {
      title,
      subtitle,
      media,
      action,
      buttons,
      quickReplies,
      delay
    } = this

    if( this.isShallow )  {
      return {
        title,
        subtitle,
        media,
        action,
        buttons,
        quickReplies
      }
    }

    return {
      type: 'card',
      payload: {
        title,
        subtitle,
        media,
        action,
        buttons,
        quickReplies
      },
      delay
    }
  }
}

export default Card
