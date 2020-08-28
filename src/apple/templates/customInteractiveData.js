import Template from '../../generic/templates/template'
import InteractiveMessage from '../components/interactiveMessage'
import EventItem from '../components/eventItem'

/**
 * Provide a unique user experience with custom interactive messages
 * 
 * @memberof Apple
 * @property {string} appIcon - Required. URL to an image representing the app icon of the iMessage extension
 * @property {string} appId - Required. The App Store identifier of the iMessage extension. 
 * @property {string} appName - Required. The name of the iMessage extension
 * @property {string} url - Required. A URL string containing data that the Messages app sends to the iMessage extension
 * @property {bool} useLiveLayout - Required. Determines whether the Messages app should use Live Layout
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the CustomInteractiveData window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * 
 * @example
 * const custom = new Apple.CustomInteractiveData({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Select products",
 *     subtitle: "Fresh and straight from the farm",
 *     style: "small"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Selected products",
 *     style: "small"
 *   }),
 *   appId: "app-store-id",
 *   appName: "Name of the App",
 *   appIcon: "https://source.unsplash.com/random",
 *   useLiveLayout: false,
 *   url: "?data=passed-to-app&data2=more-data-passed-to-app"
 * })
 **/
class CustomInteractiveData extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.appIcon - Required. URL to an image representing the app icon of the iMessage extension
  * @param {string} opts.appId - Required. The App Store identifier of the iMessage extension. 
  * @param {string} opts.appName - Required. The name of the iMessage extension
  * @param {string} opts.url - Required. A URL string containing data that the Messages app sends to the iMessage extension
  * @param {bool} opts.useLiveLayout - Required. Determines whether the Messages app should use Live Layout
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the CustomInteractiveData window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create a CustomInteractiveData you need to provide at least a title")
    }

    const {
      replyMessage,
      receivedMessage,
      appIcon,
      appId,
      appName,
      url,
      useLiveLayout
    } = opts

    if(typeof appIcon !== "string" || !appIcon.length) {
      throw new Error("CustomInteractiveData requires a valid appIcon")
    }

    if(typeof appId !== "string" || !appId.length) {
      throw new Error("CustomInteractiveData requires a valid appId")
    }

    if(typeof appName !== "string" || !appName.length) {
      throw new Error("CustomInteractiveData requires a valid appName")
    }

    if(typeof url !== "string" || !url.length) {
      throw new Error("CustomInteractiveData requires a valid url")
    }

    if(typeof useLiveLayout !== "boolean") {
      throw new Error("CustomInteractiveData requires a valid boolean value for useLiveLayout")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("CustomInteractiveData requires a receivedMessage of the type InteractiveMessage")
    }

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("CustomInteractiveData requires a replyMessage of the type InteractiveMessage")
    }
    
    this.replyMessage = replyMessage
    this.receivedMessage = receivedMessage
    this.appIcon = appIcon
    this.appId = appId
    this.appName = appName
    this.url = url
    this.useLiveLayout =  useLiveLayout
  }

  toJSON() {
    const {
      replyMessage,
      receivedMessage,
      appIcon,
      appId,
      appName,
      url,
      useLiveLayout,
      delay,
      fallback
    } = this

    return {
      type: 'apple.customInteractiveData',
      payload: {
        replyMessage,
        receivedMessage,
        appIcon,
        appId,
        appName,
        url,
        useLiveLayout
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default  CustomInteractiveData