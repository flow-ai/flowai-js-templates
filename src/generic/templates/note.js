import Template from './template'

/**
 * Send an internal note to a customer service agent that is not shown to a user. This can only be used in combination with a reply {@link Message}
 * 
 * @category Generic
 * 
 * @property {string} note - The text content of the note
 * 
 * @example
 * const note = new Note('Red note')
 **/
class Note extends Template {

  /**
   * @param {string|object} opts - Required. The note or a collection of options
   * @param {string} opts.note - Required
   **/
  constructor(opts) {
    super()

    let note = opts
    if(typeof note === 'object') {
      note = opts.note
    }

    if(typeof note !== 'string' || !note.length) {
      throw new Error('Note is mandatory')
    }

    this.note = note
  }

  toJSON() {
    const {
      note,
      delay,
      fallback
    } = this

    return {
      type: 'note',
      payload: {
        note
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default Note
