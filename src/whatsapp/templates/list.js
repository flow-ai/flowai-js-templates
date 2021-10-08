import ListItemSection from '../components/listItemSection'
import Template from '../../base/templates/template'
import Header from '../components/header'

/**
 * Template that displays a set of {@link ListItemSection} components
 * 
 * @category Generic
 * 
 * @property {ListItemSection[]} footer - Set of list items
 * @property {string} body  - Required
 * @property {string} header  - Optional
 * @property {string} buttonText  - Required
 * @property {string} footer  - Optional
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
    if(!sections) {
      throw new Error('List sections argument must be an array of List items')
    }
    if(header && !(header instanceof Header)) {
      throw new Error('List header must be Header object')
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
    this.sections.push(item)
    return this
  }

  get items() {
    return this.sections
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
      payload.header = header
    }
    if(footer){
      payload.footer = {
        text: footer
      }
    }

    return {
      type: 'whatsapp_list',
      payload
    }
  }
}

export default List
