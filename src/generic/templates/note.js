import Template from './template'

/**
 * Template with a piece of note
 * 
 * @category Templates
 * 
 * @property {string} note - Note to show
 * @example
 * const note = new Note('Red note')
 **/
class Note extends Template {

  /**
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
