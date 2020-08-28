import Template from './template'
import ListItem from '../components/listItem'
import Button from '../components/button'

/**
 * Template that displays a set of list items
 * @property {ListItem[]} items - Set of list items
 * @example
 * const item1 = new ListItem({
 *   title: "40\" LED TV",
 *   subtitle: "Crystal clear screen",
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

  /**
   * Add a item to the items
   * @param {ListItem} - item
   * @return {List}
   **/
  addItem(item) {
    if(!(item instanceof ListItem)) {
      throw new Error('List addItem argument must be an instance of a ListItem')
    }

    if(item.featured) {
      this.items.splice(0, 0, item)
    } else {
      this.items.push(item)
    }

    return this
  }

  get items() {
    if(!this._items) {
      this._items = []
    }

    this._items = this._items.sort((a,b) => {
      if(a.featured && !b.featured) {
        return -1
      }
      if(!a.featured && b.featured) {
        return 1
      }

      return 0
    })

    return this._items
  }

  /**
   * Add a button to the list item
   * @param {Button} - button
   * @return {ListItem}
   **/
  addButton(button) {
    if(!(button instanceof Button)) {
      throw new Error('List addButton argument must be an instance of a Button')
    }

    if(!this.buttons) {
      this.buttons = []
    }

    this.buttons.push(button)

    return this
  }

  toJSON() {
    const {
      items,
      buttons,
      quickReplies,
      delay,
      fallback
    } = this

    return {
      type: 'list',
      payload: {
        items,
        buttons,
        quickReplies
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default List
