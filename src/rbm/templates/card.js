import Template from '../../generic/templates/template'
import Action from '../../generic/components/action'
import Button from '../../generic/components/button'
import Media from '../components/media'

/**
 * A RBM template that can be a combination of a {@link Media} attachment, short description or {@link Button} components to request input from a user.
 * 
 * @category RBM
 * 
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional {@link Media}
 * @property {string} cardOrientation - Required
 * @property {string} thumbnailImageAlignment - Required for horizontal orientation 
 * @property {Action} action - Optional {@link Action}
 * @property {Button[]} buttons - Optional set of {@link Button} components
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
 * const rbm_card_vr = new Card({
 *   title: "Awesome title",
 *   subtitle: "Some subtitle",
 *   cardOrientation: "VERTICAL" 
 *   media: new Media({
 *    url: "https://...",
 *    type: "image",
 *    height: "TALL"
 *   })
 * })
 * card.addButton(button1)
 * card.addButton(button2)
 * 
 * const rbm_card_hr = new Card({
 *   title: "Awesome title",
 *   subtitle: "Some subtitle",
 *   cardOrientation: "HORIZONTAL",
 *   thumbnailImageAlignment: "LEFT", 
 *   media: new Media({
 *    url: "https://...",
 *    type: "image",
 *    height: "TALL"
 *   })
 * })
 * card.addButton(button1)
 * card.addButton(button2)
 **/
class Card extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional {@link Media}
   * @param {string} opts.cardOrientation - Required
   * @param {string} opts.thumbnailImageAlignment - Required for horizontal orientation
   * @param {Action} opts.action - Optional {@link Action}
   **/
  constructor({ title, subtitle, media, cardOrientation, thumbnailImageAlignment, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Card title is mandatory')
    }

    if(typeof cardOrientation !== 'string' || !cardOrientation.length){
      throw new Error('Card orientation is mandatory')
    }

    if(cardOrientation === 'HORIZONTAL' && (typeof thumbnailImageAlignment !== 'string' || !thumbnailImageAlignment.length)){
      throw new Error('Thumbnail alignment is mandatory for horizontal orientation')
    }

    this.title = title
    this.subtitle = subtitle || undefined
    this.media = media || undefined
    this.cardOrientation = cardOrientation
    this.thumbnailImageAlignment = thumbnailImageAlignment || undefined
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
      cardOrientation,
      thumbnailImageAlignment,
      action,
      buttons,
      quickReplies,
      delay,
      fallback
    } = this

    if( this.isShallow )  {
      return {
        title,
        subtitle,
        media,
        cardOrientation,
        thumbnailImageAlignment,
        action,
        buttons,
        quickReplies
      }
    }

    return {
      type: 'rbm_card',
      payload: {
        title,
        subtitle,
        media,
        cardOrientation,
        thumbnailImageAlignment,
        action,
        buttons,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Card
