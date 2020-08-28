
const ListPickerItem = require("./listPickerItem")

/**
 * Component that represents a section inside a ListPicker
 * 
 * @memberof Apple
 * @property {array} items - A list of ListPickerItem objects 
 * @property {boolean} multipleSelection - Indicates whether the customer can make multiple selections within the section. Defaults to false
 * @property {Number} order - An integer containing the ordinal position for the section
 * @property {string} title - Required title
 **/
class ListPickerSection {

 /**
  * @param {object} opts - Collection of options
  * @param {array} opts.items - An array of ListPickerItem objects 
  * @param {boolean} opts.multipleSelection - Indicates whether the customer can make multiple selections within the section. Defaults to false
  * @param {Number} opts.order - An integer containing the ordinal position for the section
  * @param {string} opts.title - Required title
  **/
  constructor(opts) {

    if(typeof opts !== "object") {
      throw new Error("To create a ListPickerSection you at least need a title")
    }

    const {
      items,
      multipleSelection,
      order,
      title
    } = opts

    if(order !== undefined && typeof order !== "number") {
      throw new Error("Provided ListPickerSection order must be number")
    }

    if(typeof title !== "string") {
      throw new Error("ListPickerSection title is required")
    }

    if(!title.length) {
      throw new Error("Provided ListPickerSection title is empty")
    }

    if(multipleSelection != undefined && typeof multipleSelection !== "boolean") {
      throw new Error("ListPickerSection multipleSelection must be a boolean, true or false")
    }

    if(Array.isArray(items)) {
      for (let i = 0; i < items.length; i++) {
        this.addItem(items[i])
      }
    }

    this.order = order || undefined
    this.title = title || undefined
    this.multipleSelection = multipleSelection || undefined
  }

  /**
   * Add a list item to the section
   * 
   * @param {ListPickerItem} - item
   * 
   * @return {ListPickerSection}
   **/
  addItem(item) {
    if(!(item instanceof ListPickerItem)) {
      throw new Error('ListPickerSection addItem argument must be an instance of a Apple.ListPickerItem')
    }

    if(!this.items) {
      this.items = []
    }

    this.items.push(item)

    return this
  }

  toJSON() {
    const {
      items,
      order,
      title
    } = this

    return {
      items,
      order,
      title
    }
  }
}

export default  ListPickerSection