
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

    if(typeof policy !== 'string' || policy.length === 0){
      throw new Error('Policy is mandatory')
    }
    if(typeof code !== 'string' || code.length === 0){
      throw new Error('Code is mandatory')
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
