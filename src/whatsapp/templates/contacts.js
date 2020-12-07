import Template from '../../base/templates/template'

/**
 * Send one ore more {@link WhatsApp.Contact} to a user.
 * 
 * @alias WhatsApp.Contacts
 * 
 * @category WhatsApp
 * 
 * @property {WhatsApp.Contact[]} contacts - One ore more contacts
 * 
 * @example
 * const contacts = new WhatsApp.Contacts([
 *   new WhatsApp.Contact({
 *     name: new WhatsApp.Name({
 *       formattedName: "Jane Doo",
 *       firstName: "Jane",
 *       lastName: "Doo",
 *       middleName: "Van"
 *     }),
 *     birthday: "2000-08-18",
 *     organization: new WhatsApp.Organization({
 *       company: "WhatsApp",
 *       department: "Design",
 *       title: "Manager"
 *     }),
 *     addresses: [
 *       new WhatsApp.Address({
 *         type: 'HOME',
 *         street: "1 Hacker Way",
 *         city: "Menlo Park",
 *         zip: "94025",
 *         state: "CA",
 *         country: "United States",
 *         countryCode: "US"
 *       })
 *     ],
 *     emails: [
 *       new WhatsApp.EmailAddress({
 *         type: 'WORK',
 *         email: "email@some.fake.org"
 *       })
 *     ],
 *     phones: [
 *       new WhatsApp.PhoneNumber({
 *         type: 'WORK',
 *         phone: "+1 (940) 555-1234"
 *       })
 *     ],
 *     urls: [
 *       new WhatsApp.WebsiteAddress({
 *         type: 'WORK',
 *         url: "https://www.some.fake.org"
 *       })
 *     ]
 *   })
 * ])
 **/
class Contacts extends Template {

  /**
   * @param {WhatsApp.Contact[]} contacts - Required
   **/
  constructor( contacts ) {
    super()

    if(!Array.isArray(contacts) || !contacts.length) {
      throw new Error('Contacts requires at least one WhatsApp.Contact')
    }
    this.contacts = contacts
  }

  toJSON() {
    const {
      contacts
    } = this

    return {
      type: 'whatsapp_contacts',
      payload: {
        contacts
      }
    }
  }
}

export default Contacts
