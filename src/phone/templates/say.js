import Template from '../../base/templates/template'

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
 *   speech: "The weather is nice today!",
 *   language: "en-GB"
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

    if(typeof opts !== 'object') {
      throw new Error('Invalid argument provided. Property collection expected')
    }
    
    const {
      speech,
      url,
      language,
      voice
    } = opts
    
    // Either speech or URL needs to be provided
    if(speech === undefined && url === undefined) {
      throw new Error('Either speech or URL needs to be provided')
    }

    // Speech needs to be a string value
    if(speech !== undefined && typeof speech !== 'string') {
      throw new Error('Speech needs to be text')
    }

    // URL cannot be empty
    if(url !== undefined && (typeof url !== 'string' || !url.length)) {
      throw new Error('Invalid or empty url provided')
    }

    // Verify provided voice
    if(voice !== undefined && support.voices.indexOf(voice) === -1) {
      throw new Error(`Unsupported voice specified. You need to choose one of: "${support.voices.join(', ')}"`)
    }

    this.speech = speech || undefined
    this.url = url || undefined
    this.voice = voice || 'alice'
    
    // Verify provided language
    if(language !== undefined) {
      if(this.voice === 'alice' && support.languages.alice.indexOf(language) === -1) {
        throw new Error(`Unsupported language provided. Alice supports one of: "${support.languages.alice.join(', ')}"`)
      } else if (this.voice === 'polly' && support.languages.polly.indexOf(language) === -1) {
        throw new Error(`Unsupported language provided. Polly supports one of: "${support.languages.polly.join(', ')}"`)
      } else if(this.voice !== 'alice' && this.voice !== 'polly' && support.languages.other.indexOf(language) === -1) {
        throw new Error(`Unsupported language provided. You need to choose one of "${support.languages.other.join(', ')}"`)
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
    'alice',
    'man',
    'woman',
    'polly'
  ],
  languages: {
    alice: [
      'da-DK', 
      'de-DE', 
      'en-AU', 
      'en-CA',
      'en-GB',
      'en-IN',
      'en-US',
      'ca-ES',
      'es-ES',
      'es-MX',
      'fi-FI',
      'fr-CA',
      'fr-FR',
      'it-IT',
      'ja-JP',
      'ko-KR',
      'nb-NO',
      'nl-NL',
      'pl-PL',
      'pt-BR',
      'pt-PT',
      'ru-RU',
      'sv-SE',
      'zh-CN',
      'zh-HK',
      'zh-TW'
    ],
    polly: [
      'Polly.Mads',
      'Polly.Naja',
      'Polly.Lotte',
      'Polly.Ruben',
      'Polly.Nicole',
      'Polly.Russell',
      'Polly.Amy',
      'Polly.Brian',
      'Polly.Emma',
      'Polly.Amy-Neural',
      'Polly.Emma-Neural',
      'Polly.Brian-Neural',
      'Polly.Raveena',
      'Polly.Ivy',
      'Polly.Joanna',
      'Polly.Joey',
      'Polly.Justin',
      'Polly.Kendra',
      'Polly.Kimberly',
      'Polly.Matthew',
      'Polly.Salli',
      'Polly.Ivy-Neural',
      'Polly.Joanna-Neural*',
      'Polly.Kendra-Neural',
      'Polly.Kimberly-Neural',
      'Polly.Salli-Neural',
      'Polly.Joey-Neural',
      'Polly.Justin-Neural',
      'Polly.Matthew-Neural*',
      'Polly.Geraint',
      'Polly.Celine',
      'Polly.Mathieu',
      'Polly.Chantal',
      'Polly.Hans',
      'Polly.Marlene',
      'Polly.Vicki',
      'Polly.Dora',
      'Polly.Karl',
      'Polly.Carla',
      'Polly.Giorgio',
      'Polly.Mizuki',
      'Polly.Takumi',
      'Polly.Liv',
      'Polly.Jacek',
      'Polly.Jan',
      'Polly.Ewa',
      'Polly.Maja',
      'Polly.Ricardo',
      'Polly.Vitoria',
      'Polly.Camila-Neural',
      'Polly.Cristiano',
      'Polly.Ines',
      'Polly.Carmen',
      'Polly.Maxim',
      'Polly.Tatyana',
      'Polly.Conchita',
      'Polly.Enrique',
      'Polly.Miguel',
      'Polly.Penelope',
      'Polly.Lupe-Neural',
      'Polly.Astrid',
      'Polly.Filiz',
      'Polly.Gwyneth'
    ],
    other: [
      'en', 
      'en-gb', 
      'es', 
      'fr',
      'de'
    ]
  }
}

export default Say
