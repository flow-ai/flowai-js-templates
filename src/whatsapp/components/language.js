
/**
 *
 * @category Whatsapp
 *
 * @property {string} policy - The language policy the message should follow. Default: deterministic
 * @property {string} code - The code of the language or locale to use. Accepts both language and language_locale formats (e.g., en and en_US).
 **/
class Language {
  /**
   * @param {string} opts.policy - Required, policy of the language
   * @param {string} opts.code - Required, code of the language
   **/
  constructor({ policy, code }) {
    const codePattern = /^[a-z]{2}_[A-Z]{2}$/

    if(typeof policy !== 'string' || policy.length === 0){
      throw new Error('Policy is mandatory')
    }
    if(typeof code !== 'string' || code.length === 0){
      throw new Error('Code is mandatory')
    }
    if(!codePattern.test(code)){
      throw new Error('Code should be in format your-language_locale-code')
    }
    
    this.policy = policy
    this.code = code
  }

  toJSON() {
    const {
      code,
      policy
    } = this

    return {
      code,
      policy,
    }
  }
}

export default Language
