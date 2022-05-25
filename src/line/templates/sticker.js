import Template from '../../base/templates/template'

/**
 * Template with a sticker
 * @property {Number} packageId - The ID of the Sticker Package
 * @property {Number} stickerId - The ID of the Sticker
 * @example
 * const image = new Sticker({
 *   packageId: 123,
 *   stickerId: 12345
 * })
 **/
class Sticker extends Template {

  /**
   * @param {Number} opts.packageId - Required
   * @param {Number} opts.stickerId - Required
   **/
  constructor({ packageId, stickerId }) {
    super()

    if(typeof packageId !== 'number') {
      throw new Error('Package ID is mandatory')
    }
    if(packageId < 0) {
        throw new Error('Package ID must be positive number')
    }
    this.packageId = packageId

    if(typeof stickerId !== 'number') {
      throw new Error('Sticker ID is mandatory')
    }
    if(stickerId < 0) {
        throw new Error('Sticker ID must be positive number')
    }
    this.stickerId = stickerId
  }

  toJSON() {
    const {
      packageId,
      stickerId,
      fallback
    } = this

    return {
      type: 'sticker',
      payload: {
        packageId,
        stickerId
      },
      fallback
    }
  }
}

export default Sticker
