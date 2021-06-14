import Template from '../../generic/templates/template'

/**
 * Send a message to a user
 *
 * @memberof Phone
 * @category Templates
 *
 * @property {string} speech - Text to speech
 * @property {string} url - URL to an audio file
 * @property {string} language - Optional language for text to speech
 * @property {string} voice -  Optional voice for text to speech
 *
 * @example
 * const say = new Phone.Say({
 *   speech: 'The weather is nice today!',
 *   language: 'en-GB'
 * })
 *
 **/
class Say extends Template {

   /**
    *
    * @param {Object} opts - Configuration
    * @param {string} opts.speech - Text to speech
    * @param {string} opts.url - URL to audio File
    * @param {string} opts.language - Optional language for text to speech
    * @param {string} opts.voice -  Optional voice for text to speech
    */
   constructor(opts) {
      super()

      if (typeof opts !== 'object') {
         throw new Error('Invalid argument provided. Property collection expected')
      }

      const {
         speech,
         url,
         language,
         voice
      } = opts

      // Either speech or URL needs to be provided
      if (speech === undefined && url === undefined) {
         throw new Error('Either speech or URL needs to be provided')
      }

      // Speech needs to be a string value
      if (speech !== undefined && typeof speech !== 'string') {
         throw new Error('Speech needs to be text')
      }

      // URL cannot be empty
      if (url !== undefined && (typeof url !== 'string' || !url.length)) {
         throw new Error('Invalid or empty url provided')
      }

      // Verify provided voice
      if (voice !== undefined && support.voices.indexOf(voice) === -1) {
         throw new Error(`Unsupported voice specified. You need to choose one of: '${support.voices.join(', ')}'`)
      }

      this.speech = speech || undefined
      this.url = url || undefined
      this.voice = voice || 'google'

      // Verify provided language
      if (language !== undefined) {
         if (this.voice === 'google' && support.languages.google.indexOf(language) === -1) {
            throw new Error(`Unsupported language provided. Google supports one of: '${support.languages.google.join(', ')}'`)
         }
      }

      this.language = language || undefined
   }

   toJSON() {
      const {
         speech,
         url,
         language,
         voice
      } = this

      return {
         type: 'phone_say',
         payload: {
            speech,
            url,
            language,
            voice
         }
      }
   }
}

/**
 * Basic support matrix
 * @ignore
 */
const support = {
   voices: [
      'google'
   ],
   languages: {
      google: [
         'FEMALE (af-ZA)',
         'FEMALE (ar-XA)',
         'MALE (ar-XA)',
         'FEMALE (bn-IN)',
         'MALE (bn-IN)',
         'FEMALE (bg-BG)',
         'FEMALE (ca-ES)',
         'FEMALE (yue-HK)',
         'MALE (yue-HK)',
         'FEMALE (cs-CZ)',
         'FEMALE (da-DK)',
         'MALE (da-DK)',
         'FEMALE (nl-NL)',
         'MALE (nl-NL)',
         'FEMALE (en-AU)',
         'MALE (en-AU)',
         'FEMALE (en-IN)',
         'MALE (en-IN)',
         'FEMALE (en-GB)',
         'MALE (en-GB)',
         'MALE (en-US)',
         'FEMALE (en-US)',
         'FEMALE (fil-PH)',
         'MALE (fil-PH)',
         'FEMALE (fi-FI)',
         'FEMALE (fr-CA)',
         'MALE (fr-CA)',
         'FEMALE (fr-FR)',
         'MALE (fr-FR)',
         'FEMALE (de-DE)',
         'MALE (de-DE)',
         'FEMALE (el-GR)',
         'FEMALE (gu-IN)',
         'MALE (gu-IN)',
         'FEMALE (hi-IN)',
         'MALE (hi-IN)',
         'FEMALE (hu-HU)',
         'FEMALE (is-IS)',
         'FEMALE (id-ID)',
         'MALE (id-ID)',
         'FEMALE (it-IT)',
         'MALE (it-IT)',
         'FEMALE (ja-JP)',
         'MALE (ja-JP)',
         'FEMALE (kn-IN)',
         'MALE (kn-IN)',
         'FEMALE (ko-KR)',
         'MALE (ko-KR)',
         'MALE (lv-LV)',
         'FEMALE (ml-IN)',
         'MALE (ml-IN)',
         'FEMALE (cmn-CN)',
         'MALE (cmn-CN)',
         'FEMALE (cmn-TW)',
         'MALE (cmn-TW)',
         'FEMALE (nb-NO)',
         'MALE (nb-NO)',
         'FEMALE (pl-PL)',
         'MALE (pl-PL)',
         'FEMALE (pt-BR)',
         'FEMALE (pt-PT)',
         'MALE (pt-PT)',
         'FEMALE (ro-RO)',
         'FEMALE (ru-RU)',
         'MALE (ru-RU)',
         'FEMALE (sr-RS)',
         'FEMALE (sk-SK)',
         'FEMALE (es-ES)',
         'MALE (es-ES)',
         'FEMALE (es-US)',
         'MALE (es-US)',
         'FEMALE (sv-SE)',
         'FEMALE (ta-IN)',
         'MALE (ta-IN)',
         'FEMALE (te-IN)',
         'MALE (te-IN)',
         'FEMALE (th-TH)',
         'FEMALE (tr-TR)',
         'MALE (tr-TR)',
         'FEMALE (uk-UA)',
         'FEMALE (vi-VN)',
         'MALE (vi-VN)'
      ]
   }
}

export default Say
