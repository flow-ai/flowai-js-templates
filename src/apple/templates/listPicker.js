import Template from '../../generic/templates/template'
import InteractiveMessage from '../components/interactiveMessage'
import ListPickerSection from '../components/listPickerSection'

/**
 * Allow the customer to choose from a list of items
 * 
 * @memberof Apple
 * @category ListPicker
 * 
 * @property {array} sections - Required 1 or more ListPickerSection objects
 * @property {boolean} multipleSelection - Indicates whether the customer can make multiple selections across sections. Defaults to false
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the ListPicker window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * 
 * @example
 * const listPicker = new Apple.ListPicker({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Select products",
 *     subtitle: "Fresh and straight from the farm",
 *     style: "small"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Selected products",
 *     style: "small"
 *   }),
 *   sections: [
 *     new Apple.ListPickerSection({
 *       title: "Fruit",
 *       items: [
 *         new Apple.ListPickerItem({
 *           title: "Apple",
 *           subtitle: "Red and delicious"
 *         }),
 *         new Apple.ListPickerItem({
 *           title: "Orange",
 *           subtitle: "Vitamin C boost"
 *         })
 *       ]
 *     }),
 *     new Apple.ListPickerSection({
 *       title: "Veggies",
 *       items: [
 *         new Apple.ListPickerItem({
 *           title: "Lettuce",
 *           subtitle: "Crispy greens"
 *         }),
 *         new Apple.ListPickerItem({
 *           title: "Cucumber",
 *           subtitle: "Organic"
 *         })
 *       ]
 *     })
 *   ]
 * })
 **/
class ListPicker extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {array} opts.sections - An array of ListPickerSection objects 
  * @param {boolean} opts.multipleSelection - Indicates whether the customer can make multiple selections across sections. Defaults to false
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the ListPicker window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create a ListPicker you need to provide at least a title")
    }

    const {
      replyMessage,
      receivedMessage,
      sections,
      multipleSelection
    } = opts

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("ListPicker requires a replyMessage of the type InteractiveMessage")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("ListPicker requires a receivedMessage of the type InteractiveMessage")
    }

    if(Array.isArray(sections)) {
      for (let i = 0; i < sections.length; i++) {
        this.addSection(sections[i])
      }
    }

    if(typeof multipleSelection !== "boolean" && typeof multipleSelection !== "undefined") {
      throw new Error("ListPicker multipleSelection must be boolean value")
    }

    this.multipleSelection = multipleSelection
    this.replyMessage = replyMessage
    this.receivedMessage = receivedMessage
  }

  /**
   * Add a section to the sections
   * 
   * @param {ListPickerSection} - section
   * 
   * @return {ListPicker}
   **/
  addSection(section) {
    if(!(section instanceof ListPickerSection)) {
      throw new Error('ListPicker addSection argument must be an instance of a Apple.ListPickerSection')
    }

    if(!this.sections) {
      this.sections = []
    }

    this.sections.push(section)

    return this
  }

  toJSON() {
    const {
      replyMessage,
      receivedMessage,
      multipleSelection,
      sections,
      delay,
      fallback
    } = this

    return {
      type: 'apple_list_picker',
      payload: {
        replyMessage,
        receivedMessage,
        multipleSelection,
        sections
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default ListPicker