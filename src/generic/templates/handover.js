import Template from './template'

/**
 * Transferring the chat to an agent
 *
 * @category Generic
 *
 * @property {bool} opts.resetContext - Context reset
 * @property {bool} opts.indefinitePause - Setting a pause for the bot until the chat is closed by the agent
 * @property {number} opts.minutesToPause - The number of minutes for which the bot will stop working
 * @property {number} opts.secondsToPause - The number of seconds for which the bot will stop working
 * @property {bool} opts.setBotToPause - Setting a bot pause
 * @property {string} opts.additionalInfo - Additional info
 * @example
 * const handover = new Handover({
 *    resetContext: true
 *    indefinitePause: true
 *    minutesToPause: 0
 *    secondsToPause: 0
 *    setBotToPause: true
 *    additionalInfo: "Handovered at flow 'foo'"
 * })
 **/
class Handover extends Template {

   /**
    * @param {bool} opts.resetContext - Context reset
    * @param {bool} opts.indefinitePause - Setting a pause for the bot until the chat is closed by the agent
    * @param {number} opts.minutesToPause -The number of minutes for which the bot will stop working
    * @param {number} opts.secondsToPause -  The number of seconds for which the bot will stop working
    * @param {bool} opts.setBotToPause - Setting a bot pause: ;
    * @param {string} opts.additionalInfo - Additional info
    **/
   constructor(opts) {
      super()

      if (typeof opts !== 'object') {
         throw new Error('Options should be a an object')
      }

      let { resetContext, indefinitePause, minutesToPause, secondsToPause, setBotToPause, additionalInfo } = opts

      if (typeof resetContext !== 'boolean') {
         throw new Error('Reset context should be a boolean')
      }

      this.resetContext = resetContext

      if (typeof indefinitePause !== 'boolean') {
         throw new Error('Indefinite pause should be a boolean')
      }

      this.indefinitePause = indefinitePause

      if (minutesToPause && typeof minutesToPause !== 'number') {
         throw new Error('Minutes to pause should be a number')
      }

      this.minutesToPause = minutesToPause

      if (secondsToPause && typeof secondsToPause !== 'number') {
         throw new Error('Seconds to pause should be a number')
      }

      this.secondsToPause = secondsToPause

      if (typeof setBotToPause !== 'boolean') {
         throw new Error('Set bot to pause should be a boolean')
      }

      this.setBotToPause = setBotToPause

      if (additionalInfo && typeof additionalInfo !== 'string') {
         throw new Error('Additional info should be a string')
      }

      this.additionalInfo = additionalInfo
   }

   toJSON() {
      const {
         resetContext,
         indefinitePause,
         minutesToPause,
         secondsToPause,
         setBotToPause,
         additionalInfo
      } = this

      return {
         type: 'handover',
         payload: {
            resetContext,
            indefinitePause,
            minutesToPause,
            secondsToPause,
            setBotToPause,
            additionalInfo
         }
      }
   }
}

export default Handover
