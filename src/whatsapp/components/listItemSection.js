
import ListItem from "./listItem";

/**
 * Item within a {@link List} template
 * 
 * @category Generic
 * 
 * @property {string} title - Title of the list item
 * @property {string} rows - rows of list items
 **/
class ListItemSection {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.rows - Required
   **/
  constructor({ title, rows }) {
    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItemSection title is mandatory')
    }
    if(!rows || !rows.length) {
      throw new Error('ListItemSection rows argument must be an array of List items')
    }
    for(let i = 0; i < rows.length; i++){
      if(!(rows[i] instanceof ListItem)) {
        throw new Error('ListItemSection rows argument must be an array of List items')
      }
    }

    this.title = title
    this.items = rows
  }

  /**
   * Add a {@link ListItem} to the list of items
   * @param {ListItem} - {@link ListItem}
   * @return {List}
   **/
  addItem(row) {
    if(!(row instanceof ListItem)) {
      throw new Error('List addItem argument must be an instance of a ListItem')
    }
    this.items.push(row)
    return this
  }

  get rows() {
    return this.items
  }

  toJSON() {
    const {
      title,
      items
    } = this

    return {
      title,
      items
    }
  }
}

export default ListItemSection
