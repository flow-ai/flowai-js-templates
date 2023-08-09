import chai, { expect } from 'chai'
import RBM from '../../src/rbm'
import { Button, Action, ButtonTrigger } from '../../src'

describe("RBM", () => {
    describe("Template Card", () => {
        it("Throws error without a title", () => {
            expect(() => new RBM.Card({})).to.throw(Error)
        })

        it("can create with title and orientation", () => {
            const card = new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL"
            })
            expect(card.title).to.equal("Awesome title")
            expect(card.subtitle).to.equal(undefined)
            expect(card.media).to.equal(undefined)
        })

        it("thumbnail alignment needed for horizontal orientation (fail)", () => {
            const media = new RBM.Media({
                type: 'image',
                url: 'htpp://https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
                height: 'TALL'
            })
            expect(() => new RBM.Card({
                title: "Awesome title",
                cardOrientation: "HORIZONTAL",
                media: media
            })).to.throw(Error)
        })

        it("thumbnail alignment needed for horizontal orientation (success)", () => {
            const media = new RBM.Media({
                type: 'image',
                url: 'htpp://https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
                height: 'TALL'
            })
            const card = new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL",
                media: media,
                thumbnailImageAlignment: 'LEFT'
            })
        })

        it("cannot add invalid media", () => {
            expect(() => new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL",
                media: "Awesome media url",
            })).to.throw(Error)

            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            expect(() => card.media = "Awesome media url").to.throw(Error)
        })

        it("cannot add media", () => {
            const media = new RBM.Media({
                type: 'image',
                url: 'htpp://fakeurl',
                height: 'TALL'
            })
            const card = new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL",
                media
            })
            expect(card.title).to.equal("Awesome title")
            expect(card.subtitle).to.equal(undefined)
            expect(card.media).to.equal(media)
        })

        it("can add button", () => {
            const card = new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL"
            })
            const button = new Button({
                label: "Label",
                type: "url",
                value: "value"
            })
            card.addButton(button)
            expect(card.buttons.length).to.equal(1)
        })

        it("can add chained buttons", () => {

            const button1 = new Button({
                label: "Label",
                type: "url",
                value: "value"
            })

            const button2 = new Button({
                label: "Label",
                type: "url",
                value: "value"
            })

            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" }).addButton(button1).addButton(button2)
            expect(card.buttons.length).to.equal(2)
        })

        it("can have action", () => {
            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            const action = new Action({
                type: "url",
                value: "value"
            })
            card.action = action
            expect(card.action).to.equal(action)
        })

        it("can set fallback", () => {
            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            card.fallback = "fallback test"
            expect(card.fallback).to.equal("fallback test")
        })

        it("cannot add invalid action", () => {
            expect(() => new RBM.Card({
                title: "Awesome title",
                cardOrientation: "VERTICAL",
                action: "Awesome action"
            })).to.throw(Error)

            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            expect(() => card.action = "Awesome action").to.throw(Error)
        })

        it("can convert to JSON", () => {
            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            card.media = new RBM.Media({
                url: "Awesome media",
                type: "image",
                height: "SHORT"
            })
            const button = new Button({
                label: "Label",
                type: "url",
                value: "value"
            })
            card.addButton(button)

            const output = JSON.stringify(card)
        })

        it("can add ButtonTrigger", () => {
            const card = new RBM.Card({ title: "Awesome title", cardOrientation: "VERTICAL" })
            card.media = new RBM.Media({
                url: "Awesome media",
                type: "image",
                height: "SHORT"
            })
            const buttonTrigger = new ButtonTrigger({
                type: "event",
                value: "test-event"
            })
            const button = new Button({
                label: "Label",
                type: "url",
                value: "value",
                trigger: buttonTrigger
            })
            card.addButton(button)

            expect(card.buttons[0].trigger.type).to.equal('event')
            expect(card.buttons[0].trigger.value).to.equal('test-event')
        })

    })
})
