import ListItemSection from '../components/listItemSection'
import Button from '../components/button'
import Template from '../../base/templates/template'

/**
 * Template that displays a set of {@link ListItemSection} components
 * 
 * @category Generic
 * 
 * @property {ListItemSection[]} items - Set of list items
 * @example
 * const item1 = new ListItem({
 *   title: "40\" LED TV",
 *   subtitle: "Crystal clear screen",
 * })
 *
 * const item2 = new ListItem({
 *   title: "50\" LED TV",
 *   subtitle: "Big, bad and bold",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   }),
 *   action: new Action({
 *     type: 'webview',
 *     value: 'https://..'
 *   })
 * })
 *
 * const list = new List()
 * list.addItem(item1)
 * list.addItem(item2)
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
      header, body, footer, sections
    } = this

    const payload = {
      body: {
        text: body
      },
      sections
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
