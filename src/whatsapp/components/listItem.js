
/**
 * Item within a {@link ListItemSection} template
 * 
 * @category Generic
 * 
 * @property {string} title - Title of the list item
 * @property {string} description - Description
 **/
class ListItem {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.description - Required
   **/
  constructor({ title, description }) {
    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItem title is mandatory')
    }
    if(typeof description !== 'string' || description.length === 0) {
      throw new Error('ListItem description is mandatory')
    }

    this.title = title
    this.description = description
  }

  toJSON() {
    const {
      title,
      description
    } = this

    return {
      title,
      description
    }
  }
}

export default ListItem
