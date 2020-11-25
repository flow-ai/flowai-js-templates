
/**
 * The Authentication request suggestion prompts users to sign in to an OAuth 2.0-compliant application, passing authentication codes to confirm account data and enabling customized user experiences and detailed conversation flows. 
 * 
 * @alias GBM.Auth
 * 
 * @memberof GBM
 * 
 * @category Authentication
 * 
 * @property {string} clientId - Required. The ID of the application that asks for authorization.
 * @property {string} codeChallenge - Required. Required. The code challenge used to exchange access tokens.
 * @property {string[]} scopes - Required. An array that specifies the scopes of the request.
 * 
 * @example
 * const suggestion = new GBM.Suggestion({
 *   type: 'auth',
 *   auth: new GBM.Auth({
 *     clientId: 'CLIENT_ID',
 *     codeChallenge: 'CODE_CHALLENGE',
 *     scopes: ['SCOPE']
 *   })
 * })
 **/
class Auth {

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.clientId - Required. The ID of the application that asks for authorization.
  * @param {string} opts.codeChallenge - Required. Required. The code challenge used to exchange access tokens.
  * @param {string[]} opts.scopes - Required. An array that specifies the scopes of the request.
  **/ 
  constructor(opts) {

    if(typeof opts !== "object") {
      throw new Error("To create an Auth request you need to provide all required options")
    }

    const {
      clientId,
      codeChallenge,
      scopes
    } = opts

    if(Array.isArray(scopes)) {
      for (let i = 0; i < scopes.length; i++) {
        this.addScope(scopes[i])
      }
    }

    if(typeof clientId !== "string" || !clientId.length) {
      throw new Error("Auth request requires a valid clientId")
    }

    if(typeof codeChallenge !== "string" || !codeChallenge.length) {
      throw new Error("Auth request requires a valid codeChallenge")
    }

    this.clientId = clientId
    this.codeChallenge = codeChallenge
  }

    /**
   * Add a scopes to the list of scopes
   * 
   * @param {string} - scopes
   * 
   * @return {Auth}
   **/
  addScope(scopes) {
    if(typeof scopes !== "string" || !scopes.length) {
      throw new Error('Auth request scopes must be a valid string')
    }

    if(!this.scopes) {
      this.scopes= []
    }

    this.scopes.push(scopes)

    return this
  }

  toJSON() {
    const {
      clientId,
      codeChallenge,
      scopes
    } = this

    return {
      clientId,
      codeChallenge,
      scopes
    }
  }
}

export default Auth