import { parseParam } from '../../base/components/param'

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
  constructor({ title, description, postbackType, postbackValue, params, param }) {
    if(typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItem title is mandatory')
    }
    if(typeof description !== 'string' || description.length === 0) {
      throw new Error('ListItem description is mandatory')
    }

    this.title = title
    this.description = description
    this.postbackType = postbackType
    this.postbackValue = postbackValue
    this.params = parseParam(param || params)
  }

  toJSON() {
    const {
      title,
      description,
      postbackType,
      postbackValue,
      params
    } = this

    return {
      title,
      description,
      postbackType,
      postbackValue,
      params
    }
  }
}

export default ListItem
