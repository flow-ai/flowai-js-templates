import ListItemSection from '../components/listItemSection'
import Template from '../../base/templates/template'

/**
 * Template that displays a set of {@link ListItemSection} components
 * 
 * @category Generic
 * 
 * @property {ListItemSection[]} items - Set of list items
 * @example
 * const listItemWA1 = new Templates.WhatsApp.ListItem({
 *             title: "Example title",
 *             description: 'Example subtitle'
 *          })
 * const listItemWA2 = new Templates.WhatsApp.ListItem({
 *             title: "Example title",
 *             description: 'Example subtitle'
 *           })
 * const listItemSection = new Templates.WhatsApp.ListItemSection({
 *             title: "Example section",
 *             rows: [listItemWA1, listItemWA2]
 *           })
 * const listWA = new Templates.WhatsApp.List({body: 'Example body', buttonText: 'Example confirm', sections: [listItemSection]})
 **/
class List extends Template {

  constructor( {header, buttonText, body, footer, sections} ) {
    super()
    if(typeof body !== 'string' || body.length === 0) {
      throw new Error('List body is mandatory')
    }
    if(typeof buttonText !== 'string' || buttonText.length === 0) {
      throw new Error('List buttonText is mandatory')
    }
    if(!sections || !sections.length) {
      throw new Error('List sections argument must be an array of List items')
    }
    for(let i = 0; i < sections.length; i++){
      if(!(sections[i] instanceof ListItemSection)) {
        throw new Error('ListItemSection rows argument must be an array of List items')
      }
    }
    this.header = header || undefined
    this.button = buttonText
    this.body = body
    this.footer = footer
    this.sections = sections
  }
  /**
   * Add a {@link ListItemSection} to the list of items
   * @param {ListItemSection} - {@link ListItemSection}
   * @return {List}
   **/
  addItem(item) {
    if(!(item instanceof ListItemSection)) {
      throw new Error('List addItem argument must be an instance of a ListItem')
    }
    this.items.push(item)
    return this
  }

  get items() {
    return this._items
  }


  toJSON() {
    const {
      header, body, footer, sections, button
    } = this

    const payload = {
      body: {
        text: body
      },
      action: {
        button,
        sections
      },
      type: 'list'
    }

    if(header){
      payload.header = {
        type: 'text',
        text: header
      }
    }
    if(footer){
      payload.footer = {
        text: footer
      }
    }


    return {
      type: 'listWA',
      payload
    }
  }
}

export default List
