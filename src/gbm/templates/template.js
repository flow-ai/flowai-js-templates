import BaseTemplate from '../../base/templates/template'
import Suggestion from '../components/suggestion'

/**
 * Base class for all Messenger response templates
 * 
 * @category Templates
 * 
 * @property {Number} delay - Optional delay in milliseconds for sending the response
 * @property {RBM.Suggestion[]} suggestions - Optional list of {@link RBM.Suggestion} components
 * @abstract
 **/
class Template extends BaseTemplate {

  /**
   * Add a {@link RBM.Suggestion} to the template
   * @param {RBM.Suggestion} suggestion - Required
   **/
  addSuggestion(suggestion) {
    if(!(suggestion instanceof Suggestion)) {
      throw new Error('addSuggestion argument must be an instance of a Suggestion')
    }

    if(!this.suggestions) {
      this.suggestions = []
    }
    this.suggestions.push(suggestion)

    return this
  }
}

export default Template
