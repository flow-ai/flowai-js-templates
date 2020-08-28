/**
 * Message that renders in a bubble either shown as the received message that allows a customer to open a List or time picker. Or as a reply message that is shown after a customer makes a selection,
 * 
 * @memberof Apple
 * 
 * @property {string} title - The main title shown in the header of the message bubble
 * @property {string} subtitle - The subtitle that appears under the main title in the received message bubble
 * @property {string} secondarySubtitle - A right-aligned title. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} tertiarySubtitle - A right-aligned subtitle. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} image - Optional URL to a 30x30 image
 * @property {string} imageTitle - The attached image's title. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} imageSubtitle - The attached image's subtitle. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} style - A style that controls the size of the view rendered by Live Layout can be icon, small, large. The default is icon. 
 **/
class InteractiveMessage {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.title - Required title
   * @param {string} opts.subtitle - Optional subtitle
   * @param {string} opts.secondarySubtitle - A right-aligned title
   * @param {string} opts.tertiarySubtitle - A right-aligned subtitle
   * @param {string} opts.image - Optional URL to a 30x30 image
   * @param {string} opts.imageTitle - The image's title
   * @param {string} opts.imageSubtitle - The image's subtitle
   * @param {string} opts.style - A style that controls the size of the view
   **/
  constructor(opts) {
    if(typeof opts !== "object") {
      throw new Error("To create a InteractiveMessage you at least need a title")
    }

    const {
      title,
      subtitle,
      secondarySubtitle,
      tertiarySubtitle,
      image,
      imageTitle,
      imageSubtitle,
      style
    } = opts

    if(typeof title !== "string") {
      throw new Error("InteractiveMessage title is required")
    }

    this.title = title
    this.subtitle = subtitle
    this.secondarySubtitle = secondarySubtitle
    this.tertiarySubtitle = tertiarySubtitle
    this.image = image
    this.imageTitle = imageTitle
    this.imageSubtitle = imageSubtitle
    this.style = style
  }

  toJSON() {
    const {
      title,
      subtitle,
      secondarySubtitle,
      tertiarySubtitle,
      image,
      imageTitle,
      imageSubtitle,
      style
    } = this

    return {
      title,
      subtitle,
      secondarySubtitle,
      tertiarySubtitle,
      image,
      imageTitle,
      imageSubtitle,
      style
    }
  }
}

export default InteractiveMessage