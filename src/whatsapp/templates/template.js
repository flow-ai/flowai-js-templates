import Template from '../../base/templates/template'
import Language from "../components/language";
import Component from "../components/component";


/**
 * A Whatsapp template that represents an array of {@link Buttonn}
 * 
 * @category Generic
 *
 * @property {string} namespace  - Required
 * @property {string} name - Required
 * @property {Language} language - Required {@link Language}
 * @property {Array} components - Optional
 * @example
     const language = new WhatsApp.Language({
                 policy: "deterministic",
                   code: "en",
                 })
     const currency = new WhatsApp.Currency({
                    fallback_value: "$100.99",
                    code: "USD",
                    amount_1000: 100990
                 })
     const component = new WhatsApp.Components({
                   type: 'body',
                   parameters: [currency]
                 })
     const buttonTemplate = new WhatsApp.ButtonTemplate({
                     sub_type: 'url',
                     index: 0,
                     type: 'text',
                    text: 'http://example.com'
                 })
     const button = new WhatsApp.Components({
                   type: 'button',
                   button: buttonTemplate
                 })

     const template = new WhatsApp.Template({
            namespace: "your-namespace",
            name: "your-template-name",
            language: language,
            components: [ button, component ]})``
 **/
class TemplateWA extends Template {

  /**
   * @param {string} namespace  - Required
   * @param {string} name - Required
   * @param {Language} language - Required {@link Language}
   * @param {Array} components - Optional Array of  {@link Component}
   **/
  constructor({namespace, name, language, components }) {
    super()

    if(typeof namespace !== 'string' || namespace.length === 0){
      throw new Error('Namespace is mandatory')
    }
    if(typeof name !== 'string' || name.length === 0){
      throw new Error('Name is mandatory')
    }
    if(!(language instanceof Language)){
      throw new Error('Language must be instance of Language object')
    }



    this.namespace = namespace
    this.name = name
    this.language = language
    this.components = components || []
  }


  toJSON() {
    const {
      namespace,
      name,
      language,
      components,
      fallback,
      delay
    } = this


    return {
      type: 'whatsapp_template',
      payload: {
        namespace,
        name,
        language,
        components
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default TemplateWA
