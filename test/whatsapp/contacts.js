import chai, { expect, assert } from 'chai'
import { WhatsApp } from '../../src'

describe("WhatsApp", () => {
  describe("Template WhatsApp Contact", () => {

    describe("Contact components", () => {

      describe("Address", () => {
        it("can create a valid contact address", () => {
          const address = new WhatsApp.Address({
            type: 'HOME',
            street: "1 Hacker Way",
            city: "Menlo Park",
            zip: "94025",
            state: "CA",
            country: "United States",
            countryCode: "US"
          })
          expect(address.type).to.equal('HOME')
          expect(address.street).to.equal('1 Hacker Way')
          expect(address.city).to.equal('Menlo Park')
          expect(address.zip).to.equal('94025')
          expect(address.state).to.equal('CA')
          expect(address.country).to.equal('United States')
          expect(address.countryCode).to.equal('US')
        })

        it("will throw on an empty address", () => {
          expect(() => new WhatsApp.Address()).to.throw(Error)
        })
      })
      describe("Email Address", () => {
        it("can create a valid email address", () => {
          const email = new WhatsApp.EmailAddress({
            type: 'WORK',
            email: "email@some.fake.org"
          })
          expect(email.type).to.equal('WORK')
          expect(email.email).to.equal('email@some.fake.org')
        })

        it("can create a valid email address using shorthand", () => {
          const email = new WhatsApp.EmailAddress("email@some.fake.org")
          expect(email.email).to.equal('email@some.fake.org')
        })

        it("will throw on empty email address", () => {
          expect(() => new WhatsApp.EmailAddress()).to.throw(Error)
        })
      })

      describe("Phone number", () => {

        it("can create a valid phone number", () => {
          const phone = new WhatsApp.PhoneNumber({
            type: 'WORK',
            phone: "+1 (940) 555-1234"
          })
          expect(phone.type).to.equal('WORK')
          expect(phone.phone).to.equal('+1 (940) 555-1234')
        })

        it("can create a valid phone number using shorthand", () => {
          const phone = new WhatsApp.PhoneNumber("+1 (940) 555-1234")
          expect(phone.phone).to.equal('+1 (940) 555-1234')
        })

        it("will throw on empty phone number", () => {
          expect(() => new WhatsApp.PhoneNumber()).to.throw(Error)
        })
      })

      describe("Website address", () => {
        it("can create a valid website address", () => {
          const website = new WhatsApp.WebsiteAddress({
            type: 'WORK',
            url: "https://www.some.fake.org"
          })
          expect(website.type).to.equal('WORK')
          expect(website.url).to.equal('https://www.some.fake.org')
        })

        it("can create a valid website address using shorthand", () => {
          const website = new WhatsApp.WebsiteAddress("https://www.some.fake.org")
          expect(website.url).to.equal('https://www.some.fake.org')
        })

        it("will throw on empty website address", () => {
          expect(() => new WhatsApp.WebsiteAddress()).to.throw(Error)
        })
      })

      describe("Name", () => {
        it("can create a valid contact name", () => {
          const name = new WhatsApp.Name({
            formattedName: "Jane Doo",
            firstName: "Jane",
            lastName: "Doo",
            middleName: "Van"
          })
          expect(name.formattedName).to.equal('Jane Doo')
          expect(name.firstName).to.equal('Jane')
          expect(name.lastName).to.equal('Doo')
          expect(name.middleName).to.equal('Van')
        })

        it("can create a valid contact name using shorthand", () => {
          const name = new WhatsApp.Name("John Smith")
          expect(name.formattedName).to.equal('John Smith')
        })

        it("will throw on empty contact name", () => {
          expect(() => new WhatsApp.Name()).to.throw(Error)
        })
      })

      describe("Organization", () => {
        it("can create a valid contact organization", () => {
          const organization = new WhatsApp.Organization({
            company: "WhatsApp",
            department: "Design",
            title: "Manager"
          })
          expect(organization.company).to.equal('WhatsApp')
          expect(organization.department).to.equal('Design')
          expect(organization.title).to.equal('Manager')
        })

        it("can create a valid contact organization using shorthand", () => {
          const organization = new WhatsApp.Organization("WhatsApp")
          expect(organization.company).to.equal('WhatsApp')
        })

        it("will throw on empty contact organization", () => {
          expect(() => new WhatsApp.Organization()).to.throw(Error)
        })
      })

      describe("Contact", () => {
        it("can create a valid contact", () => {
          const contact = new WhatsApp.Contact({
            name: new WhatsApp.Name({
              formattedName: "Jane Doo",
              firstName: "Jane",
              lastName: "Doo",
              middleName: "Van"
            }),
            birthday: "2000-08-18",
            organization: new WhatsApp.Organization({
              company: "WhatsApp",
              department: "Design",
              title: "Manager"
            }),
            addresses: [
              new WhatsApp.Address({
                type: 'HOME',
                street: "1 Hacker Way",
                city: "Menlo Park",
                zip: "94025",
                state: "CA",
                country: "United States",
                countryCode: "US"
              })
            ],
            emails: [
              new WhatsApp.EmailAddress({
                type: 'WORK',
                email: "email@some.fake.org"
              })
            ],
            phones: [
              new WhatsApp.PhoneNumber({
                type: 'WORK',
                phone: "+1 (940) 555-1234"
              })
            ],
            urls: [
              new WhatsApp.WebsiteAddress({
                type: 'WORK',
                url: "https://www.some.fake.org"
              })
            ]
          })
          expect(contact.name.formattedName).to.equal('Jane Doo')
          expect(contact.birthday).to.equal('2000-08-18')
          expect(contact.organization.company).to.equal('WhatsApp')
          expect(contact.addresses[0].street).to.equal('1 Hacker Way')
          expect(contact.emails[0].email).to.equal('email@some.fake.org')
          expect(contact.phones[0].phone).to.equal('+1 (940) 555-1234')
          expect(contact.urls[0].url).to.equal('https://www.some.fake.org')
        })

        it("will throw on an empty address", () => {
          expect(() => new WhatsApp.Contact()).to.throw(Error)
        })
      })
    })
    describe("Contacts template", () => {
      it("can create a valid contacts template", () => {
        const contacts = new WhatsApp.Contacts([
          new WhatsApp.Contact({
            name: new WhatsApp.Name({
              formattedName: "Jane Doo",
              firstName: "Jane",
              lastName: "Doo",
              middleName: "Van"
            }),
            birthday: "2000-08-18",
            organization: new WhatsApp.Organization({
              company: "WhatsApp",
              department: "Design",
              title: "Manager"
            }),
            addresses: [
              new WhatsApp.Address({
                type: 'HOME',
                street: "1 Hacker Way",
                city: "Menlo Park",
                zip: "94025",
                state: "CA",
                country: "United States",
                countryCode: "US"
              })
            ],
            emails: [
              new WhatsApp.EmailAddress({
                type: 'WORK',
                email: "email@some.fake.org"
              })
            ],
            phones: [
              new WhatsApp.PhoneNumber({
                type: 'WORK',
                phone: "+1 (940) 555-1234"
              })
            ],
            urls: [
              new WhatsApp.WebsiteAddress({
                type: 'WORK',
                url: "https://www.some.fake.org"
              })
            ]
          })
        ])
        expect(contacts.contacts[0].name.formattedName).to.equal('Jane Doo')
        expect(contacts.contacts[0].birthday).to.equal('2000-08-18')
        expect(contacts.contacts[0].organization.company).to.equal('WhatsApp')
        expect(contacts.contacts[0].addresses[0].street).to.equal('1 Hacker Way')
        expect(contacts.contacts[0].emails[0].email).to.equal('email@some.fake.org')
        expect(contacts.contacts[0].phones[0].phone).to.equal('+1 (940) 555-1234')
        expect(contacts.contacts[0].urls[0].url).to.equal('https://www.some.fake.org')
      })

      it("will throw on an empty address", () => {
        expect(() => new WhatsApp.Contacts()).to.throw(Error)
      })
    })
  })
})