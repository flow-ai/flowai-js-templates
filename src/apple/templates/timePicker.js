import Template from '../../base/templates/template'
import InteractiveMessage from '../components/interactiveMessage'
import EventItem from '../components/eventItem'

/**
 * Allow the customer to schedule an appointment
 * 
 * @memberof Apple
 * @category TimePicker
 * 
 * @property {EventItem} event - Required. Represents the event to pick a time for
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the TimePicker window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * 
 * @example
 * const timePicker = new Apple.TimePicker({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Schedule an Appointment",
 *     subtitle: "We'll see you there!",
 *     style: "icon"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Your Appointment",
 *     style: "icon"
 *   }),
 *   event: new Apple.EventItem({
 *     title: "Some event",
 *     location: new Apple.LocationItem({
 *       latitude: 37.7725,
 *       longitude: -122.4311,
 *       radius: 100,
 *       title: "Some venue"
 *     }),
 *     timeslots: [
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T08:27:55+00:00"
 *       }),
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T09:27:55+00:00"
 *       }),
 *       new Apple.TimeItem({
 *         duration: 60,
 *         startTime: "2020-05-26T10:27:55+00:00"
 *       })
 *     ],
 *     timezoneOffset: 2
 *   })
 * })
 **/
class TimePicker extends Template {

  /**
  * @param {object} opts - Collection of options
  * @param {EventItem} opts.event - Represents the event to pick a time for
  * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the TimePicker window
  * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
  **/ 
  constructor(opts) {
    super()

    if(typeof opts !== "object") {
      throw new Error("To create a TimePicker you need to provide at least a title")
    }

    const {
      replyMessage,
      receivedMessage,
      event
    } = opts

    if(!(replyMessage instanceof InteractiveMessage)) {
      throw new Error("TimePicker requires a replyMessage of the type InteractiveMessage")
    }

    if(!(receivedMessage instanceof InteractiveMessage)) {
      throw new Error("TimePicker requires a receivedMessage of the type InteractiveMessage")
    }

    if(!(event instanceof EventItem)) {
      throw new Error("TimePicker requires a event of the type EventItem")
    }


    this.replyMessage = replyMessage
    this.receivedMessage = receivedMessage
    this.event = event
  }

  toJSON() {
    const {
      replyMessage,
      receivedMessage,
      event,
      delay,
      fallback
    } = this

    return {
      type: 'apple_time_picker',
      payload: {
        replyMessage,
        receivedMessage,
        event
      },
      delay: delay || undefined,
      fallback
    }
  }
}

export default TimePicker