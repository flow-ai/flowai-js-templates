/**
 * Component that represents a selectable item inside a {@link ListPickerSection}
 * 
 * @memberof Apple
 * @category ListPicker
 * 
 * @property {string} identifier - Field identifying the item
 * @property {string} image - Optional URL to a 30x30 image
 * @property {number} order - Optional integer representing the ordinal position for the item
 * @property {string} style - Optional item style. Defaults to default
 * @property {string} title - Required title
 * @property {string} subtitle - Optional subtitle
 **/
class ListPickerItem {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Optional Unique identifier
   * @param {string} opts.image - Optional URL to a 30x30 image
   * @param {Number} opts.order - Optional integer representing the ordinal position for the item
   * @param {string} opts.style - Optional item style. Defaults to default
   * @param {string} opts.title - Required title
   * @param {string} opts.subtitle - Optional subtitle
   **/
  constructor(opts) {
    if(typeof opts !== "object") {
      throw new Error("To create a ListPickerItem you at least need a title")
    }

    const {
      identifier,
      image,
      order,
      style,
      title,
      subtitle
    } = opts

    if(typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided ListPickerItem identifier must be unique string")
    }

    if(order !== undefined && typeof order !== "number") {
      throw new Error("Provided ListPickerItem order must be number")
    }

    if(typeof title !== "string") {
      throw new Error("ListPickerItem title is required")
    }

    if(!title.length) {
      throw new Error("Provided ListPickerItem title is empty")
    }

    this.identifier = identifier || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    this.image = image || undefined
    this.order = order || undefined
    this.style = style || undefined
    this.title = title || undefined
    this.subtitle = subtitle || undefined
  }

  toJSON() {
    const {
      identifier,
      image,
      order,
      style,
      title,
      subtitle
    } = this

    return {
      identifier,
      image,
      order,
      style,
      title,
      subtitle
    }
  }
}

export default ListPickerItem