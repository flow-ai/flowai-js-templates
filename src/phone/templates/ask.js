import Say from './say'

/**
 * Send a message to a user asking for input
 *
 * @memberof Phone
 * @category Templates
 *
 * @property {string} speech - Text to speech
 * @property {string} url - URL to an audio file
 * @property {string} expected - Optional, what kind of input to expect. Valid are speech or digits (default is speech)
 * @property {string} hints - Optional, expected words or sentences, comma separated (max 500 words)
 * @property {string} language - Optional language for text to speech
 * @property {string} voice -  Optional voice for text to speech
 * @property {number} timeout - Optional, number of seconds to wait for user input (default ) and send a repeat message
 * @property {number} repeat - Optional, number of times to ask again after user has not provided input (default 1, 0 is unlimited loop)
 * @property {string} finishOnKey - Optional, only when expecting digits, set a value that your caller can press to submit their digits.
 * @property {number} numDigits - Optional, only when expecting digits, set the number of digits you expect from your caller
 * @property {string} speechTimeout - Optional, only when expecting speech, sets the limit (in seconds) to wait before it stopping speech recognition
 * @example
 * const ask = new Phone.Ask({
 *   speech: 'Do you speak English?',
 *   language: 'en-GB',
 *   expected: 'speech',
 *   hints: 'yes,yeah,yup,yes I do,no,no not really,nope'
 * })
 *
 **/
class Ask extends Say {

   /**
    * Ask a user for input
    **/
   constructor(opts) {
      super(opts)

      const {
         hints,
         timeout,
         repeat,
         finishOnKey,
         numDigits,
         speechTimeout,
         preTone,
         postTone,
         tone
      } = opts

      let { expected } = opts

      if (expected === 'any') {
         expected = 'speech'
      }

      if (expected !== undefined && support.expected.indexOf(expected) === -1) {
         throw new Error(`Invalid "expected" provided. Needs to be one of: ${support.expected.join(', ')}`)
      }

      if (hints !== undefined && typeof hints !== 'string') {
         throw new Error(`hints needs to be a valid string`)
      }

      if (timeout !== undefined && (typeof timeout !== 'number' || timeout < 0)) {
         throw new Error(`timeout needs to be a positive number of seconds`)
      }

      if (repeat !== undefined && (typeof repeat !== 'number' || repeat < 0)) {
         throw new Error(`repeat needs to be a positive number`)
      }

      if (finishOnKey !== undefined && (typeof finishOnKey !== 'string' || (support.keys.indexOf(finishOnKey) === -1 && finishOnKey !== ''))) {
         throw new Error(`finishOnKey needs to one of the following ${support.keys.join(', ')} or ''`)
      }

      if (numDigits !== undefined && (typeof numDigits !== 'number' || numDigits < 0)) {
         throw new Error(`numDigits needs to be a positive number`)
      }

      if (speechTimeout !== undefined && (typeof speechTimeout !== 'number' || speechTimeout < 0)) {
         throw new Error(`speechTimeout needs to be a positive number`)
      }

      this.expected = expected || 'speech'
      this.hints = hints || undefined
      this.timeout = timeout || undefined
      this.repeat = repeat || 1
      this.finishOnKey = finishOnKey || undefined
      this.numDigits = numDigits || undefined
      this.speechTimeout = speechTimeout || undefined
      this.preTone = preTone
      this.postTone = postTone
      this.tone = tone
   }

   toJSON() {
      const {
         expected,
         hints,
         timeout,
         repeat,
         finishOnKey,
         numDigits,
         speechTimeout,
         preTone,
         postTone,
         tone
      } = this

      const _json = super.toJSON()
      return {
         type: 'phone_ask',
         payload: {
            ..._json.payload,
            expected,
            hints,
            timeout,
            repeat,
            finishOnKey,
            numDigits,
            speechTimeout,
            preTone,
            postTone,
            tone
         }
      }
   }
}

/**
 * Basic support matrix
 * @ignore
 */
const support = {
   expected: [
      'speech',
      'digits'
   ],
   keys: '0123456789#*'.split('')
}

export default Ask
