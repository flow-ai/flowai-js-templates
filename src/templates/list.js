import Template from './template'
import ListItem from '../components/listItem'

/**
 * Template that displays a set of list items
 * @property {ListItem[]} items - Set of list items
 **/
class List extends Template {

  /**
   * Add a item to the items
   * @param {ListItem} - item
   * @return {List}
   **/
  addItem(item) {
    if(!(item instanceof ListItem)) {
      throw new Error('addListItem argument must be an instance of a ListItem')
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
      quickReplies
    } = this

    return {
      type: 'list',
      payload: {
        items,
        quickReplies
      }
    }
  }
}

export default List
