# The Flow.ai JavaScript Response Templates

Easy helper classes to create rich [flow.ai](https://flow.ai) response templates like cards, buttons and locations.

Reponse templates allow developers to render widgets at channels that support this like Facebook Messenger or the flow.ai Web client.

## What can you do?

* No need to write error prone [JSON](JSON.md)
* Full support for all template types

## Getting started

All classes are available for usage with Flow.ai Cloud functions. When you want to send rich responses using a webhook, install the library with NPM.

### Install

```bash
npm install --save flowai-js-templates
```

### Usage

When using Flow.ai [cloud code](https://docs.flow.ai/features/cloud-functions.html) there is no need to require or import anything.

```js
const { Card } = require('flowai-js-templates')

const card = new Card({
  title: "Cookie factory",
  subtitle: "Infinite lane 23"
})
```

### Sending back rich messages

You can send back rich messages in 3 different ways

#### Cloud code

Within a [cloud code](https://docs.flow.ai/features/cloud-functions.html) function you can directly send back messages by returning them from your function.

##### Sending a single message with a single response

```js
async payload=> {

  // Create a generic speech bubble
  const text = new Text("Hi there!")

  // Create a generic message with fallback text
  const message = new Message("Hi, there")
  message.addResponse(text)

  return message
}
```

##### Sending a single message with multiple responses

```js
async payload=> {

  // Create a generic speech bubble
  const text = new Text("Hi there!")

  // Create a Google Business Messages specific card
  const card = new GBM.Card({
    title: "Cookie factory",
    description: "Infinite lane 23"
  })

  return new Message("Hi, the address of the Cookie factory is Infinite lane 23")
          .addResponse(text)
          .addResponse(card)
}
```

##### Sending back multiple messages

```js
async payload=> {

  // Create a generic speech bubble
  const text = new Text("Hi there!")

  // Create a generic card
  const card = new Card({
    title: "Cookie factory",
    subtitle: "Infinite lane 23"
  })

  return [
    new Message("Hi, there").addResponse(text),
    new Message("the address of the Cookie factory is Infinite lane 23").addResponse(card)
  ]
}
```

## Channel specific

We support a number of generic components that render on most channels. For example a `Card` element works for both Facebook Messenger and the Flow.ai Web Widget. 

However, there are specific components as well for channels like Apple Business Chat or an IVR Bot. 

You can create and send these as well. The following example shows how to create and send a Time Picker for Apple Business chat.

```js
async payload=> {
  const timePicker = new Apple.TimePicker({
    receivedMessage: new Apple.InteractiveMessage({
      title: "Schedule an Appointment",
      subtitle: "We'll see you there!",
      style: "icon"
    }),
    replyMessage: new Apple.InteractiveMessage({
      title: "Your Appointment",
      style: "icon"
    }),
    event: new Apple.EventItem({
      title: "Some event",
      location: new Apple.LocationItem({
        latitude: 37.7725,
        longitude: -122.4311,
        radius: 100,
        title: "Some venue"
      }),
      timeslots: [
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T08:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T09:27:55+00:00"
        }),
        new Apple.TimeItem({
          duration: 60,
          startTime: "2020-05-26T10:27:55+00:00"
        })
      ],
      timezoneOffset: 2
    })
  })

  return new Message('Time picker').addResponse(timePicker)
}
```

For a complete overview of all reply actions see the [Flow.ai documentation](https://flow.ai/docs/integrations/overview) site.


---

# Reply Templates Reference

Each reply being sent is part of a message.

<a name="Base.Message"></a>

## Base.Message

The base representation of a message to a user. Contains a pronounceable fallback message and optional rich [Template](#Template) responses.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Pronounceable and represents the responses as a whole |
| responses | [<code>Array.&lt;Template&gt;</code>](#Base.Template) | List of rich [Template](#Base.Template) responses |

### new Message(fallback, meta)

**Example**  
```js
// Create a message without responses
// this will create a response
// when converted to JSON
const message = new Message('Hi there')

// This also works for multiple text responses by adding an array of strings
const message = new Message(['Hi there', 'How can I help?'])
```

| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Required |
| meta | <code>Object</code> | Optional property list with data |

### *message*.addResponse(response)

Add a response


| Param | Type | Description |
| --- | --- | --- |
| response | [<code>Template</code>](#Base.Template) | response |


---

# Generic

We provide a collection of generic message templates that can be sent to any messaging channel. These generic templates are transformed into specific channel counter parts. They provide a convenient way to reply with a single message to multiple channels.

<a name="Message"></a>

## Message

Inherits from [Message](#Base.Message).

### *message*.addQuickReply(quickReply)

A convenience method to add a quick reply to the last response template of a Message

**Example**  
```js
const message = new Message("Want a cold beverage?")
 .addQuickReply(new QuickReply({
   label: 'Yes'
 }))
 .addQuickReply(new QuickReply({
   label: 'No'
 }))
```

| Param | Type | Description |
| --- | --- | --- |
| quickReply | [<code>QuickReply</code>](#QuickReply) | Required |


<a name="Text"></a>

## Text

The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex interaction, or response.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to show |

### new Text()

**Example**  
```js
const text = new Text('Want a free soda?')
text.addQuickReply(new QuickReply({
  label: 'Yes',
  value: 'yes'
}))
text.addQuickReply(new QuickReply({
  label: 'No',
  value: 'no'
}))
```

| Param | Type | Description |
| --- | --- | --- |
| opts.text | <code>string</code> | Required |


<a name="Image"></a>

## Image

Deliver an image to a user. Optionally you can specify an [Action](#Action) to perform when a user interacts with the image. Note: This is not supported on all channels.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
| url | <code>string</code> | URL to the image |
| action | [<code>Action</code>](#Action) | Optional Action |

### new Image()

**Example**  
```js
const image = new Image({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional [Action](#Action) |


<a name="File"></a>

## File

Deliver a file to a user. Optionally you can specify an [Action](#Action) to perform when a user interacts with the file. Note: This is not supported on all channels.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the file |
| url | <code>string</code> | URL to the file |
| action | [<code>Action</code>](#Action) | Optional Action |

### new File()

**Example**  
```js
const file = new File({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional [Action](#Action) |


<a name="Video"></a>

## Video

Deliver a video to a user or show a video player. Optionally you can specify an [Action](#Action) to perform when a user interacts with the video. Note: This is not supported on all channels.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the video |
| url | <code>string</code> | URL to the video |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### new Video(opts)

**Example**  
```js
const video = new Video({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> |  |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |
| opts.thumbnailUrl | <code>string</code> | Optional |


<a name="Audio"></a>

## Audio

Send an audio file or show an audio player to a user. Optionally you can specify an [Action](#Action) to perform when a user interacts with the audio. Note: This is not supported on all channels.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the audio |
| url | <code>string</code> | URL to the audio file |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### new Audio()

**Example**  
```js
// Generic audio
const audio = new Audio({
  title: "Name of the song",
  url: "https://..."
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |


<a name="Location"></a>

## Location

Send or display a location on a map to a user. Optionally add an [Action](#Action) to perform when the user interacts with the location. Note: only supported on some channels.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the location |
| lat | <code>string</code> | Latitude |
| long | <code>string</code> | Longitude |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### new Location()

**Example**  
```js
const location = new Location({
  title: "Infinite Loop 1",
  lat: "37.331860",
  long: "-122.030248",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.lat | <code>string</code> | Required |
| opts.long | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |


<a name="Buttons"></a>

## Buttons

Generic template with an optional short description and list of [Button](#Button) components to request input from a user

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the buttons |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of buttons |

### new Buttons()

**Example**  
```js
const buttons = new Buttons("Vintage bikes and more")
buttons.addButton(new Button({
 label: "View website",
 type: "url",
 value: "..."
}))
buttons.addButton(new Button({
 label: "Special offers",
 type: "postback",
 value: "Show me special offers"
}))
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |

### new Buttons(body, footer, header, buttons)

**Example**  
```js
const ButtonWA = new Templates.WhatsApp.Button({
             title: "Example title",
           })
const HeaderWA = new Templates.WhatsApp.Header({
             type: 'text',
             value: 'Example value'
           })

const buttonsWA = new Templates.WhatsApp.List({body: 'Example body',
            header: HeaderWA,
            buttons: [ButtonWA]
          })
```

| Param | Type | Description |
| --- | --- | --- |
| body | <code>string</code> | Required |
| footer | <code>string</code> | Optional |
| header | [<code>Header</code>](#Header) | Optional [Header](#Header) |
| buttons | <code>Array</code> | Required |

### *buttons*.addButton(button)

Add a button to the buttons


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

### *buttons*.addButton(button)

Add a button to the buttons


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |


<a name="Card"></a>

## Card

A generic template that can be a combination of a [Media](#Media) attachment, short description or [Button](#Button) components to request input from a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the card |
| subtitle | <code>string</code> | Optional subtitle |
| media | [<code>Media</code>](#Media) | Optional [Media](#Media) |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of [Button](#Button) components |
| action | [<code>Action</code>](#Action) | Optional Action that is triggered when a user interacts with the card |

### new Card()

**Example**  
```js
const button1 = new Button({
  label: "Label",
  type: "url",
  value: "https://..."
})

const button2 = new Button({
  label: "Label",
  type: "url",
  value: "https://..."
 })

const card = new Card({
  title: "Awesome title",
  subtitle: "Some subtitle",
  media: new Media({
   url: "https://...",
   type: "image"
  })
})
card.addButton(button1)
card.addButton(button2)
```

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.media | [<code>Media</code>](#Media) | Optional [Media](#Media) |
| opts.action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### *card*.addButton(button)

Add a button to the card


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |


<a name="Carousel"></a>

## Carousel

Template that renders a set of generic [Card](#Card) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cards | [<code>Array.&lt;Card&gt;</code>](#Card) | Set of [Card](#Card) templates |

### new Carousel(cards)

**Example**  
```js
const card1 = new Card({
  title: "Awesome title 1",
  subtitle: "Some subtitle 1",
  media: new Media({
   url: "https://...",
   type: "image"
  })
})

const card2 = new Card({
  title: "Awesome title 2",
  subtitle: "Some subtitle 2",
  media: new Media({
   url: "https://...",
   type: "image"
  })
})

const carousel = new Carousel()
carousel.addCard(card1)
carousel.addCard(card2)
```
**Example**  
```js
// Short hand
const card1 = new Card({
  title: "Awesome title 1",
  subtitle: "Some subtitle 1",
  media: new Media({
   url: "https://...",
   type: "image"
  })
})

const card2 = new Card({
  title: "Awesome title 2",
  subtitle: "Some subtitle 2",
  media: new Media({
   url: "https://...",
   type: "image"
  })
})

const carousel = new Carousel([card1, card2])
```

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>Array</code> | Optional list of [Card](#Card) templates |

### *carousel*.addCard(card)

Add a [Card](#Card) to the list of cards


| Param | Type | Description |
| --- | --- | --- |
| card | [<code>Card</code>](#Card) | card |


<a name="List"></a>

## List

Template that displays a set of [ListItem](#ListItem) components

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | Set of list items |

### *list*.addItem(item)

Add a [ListItem](#ListItem) to the list of items


| Param | Type | Description |
| --- | --- | --- |
| item | [<code>ListItem</code>](#ListItem) | [ListItem](#ListItem) |

### *list*.addButton(button)

Add a [Button](#Button) to the list of buttons


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

### *list*.addItem(item)

Add a [ListItemSection](#ListItemSection) to the list of items


| Param | Type | Description |
| --- | --- | --- |
| item | [<code>ListItemSection</code>](#ListItemSection) | [ListItemSection](#ListItemSection) |


<a name="ListItem"></a>

## ListItem

Item within a [List](#List) template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of the list item |
| subtitle | <code>string</code> | Optional subtitle |
| media | [<code>Media</code>](#Media) | Optional Media |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of buttons |
| action | [<code>Action</code>](#Action) | Optional Action that is triggered when a user interacts with the list item |
| featured | <code>bool</code> | Optional set this element to be featured in the List (default false) |

### new ListItem()


| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.media | [<code>Media</code>](#Media) | Optional |
| opts.action | [<code>Action</code>](#Action) | Optional |
| opts.featured | <code>bool</code> | Optional |

### new ListItem()


| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.description | <code>string</code> | Required |

### *listItem*.addButton(button)

Add a button to the list item


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |


<a name="Action"></a>

## Action

Attach an action that is performed when a user interacts with a generic [Card](#Card), [List](#List) or [Buttons](#Buttons) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of action (url, phone, postback, share, login, webview, event) |
| value | <code>string</code> | Value of the action |
| params | [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional parameters associated with the action |

### new Action()

**Example**  
```js
const image = new Image({
  ...
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |
| opts.param | [<code>Param</code>](#Base.Param) \| [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional Param or array or Array of Params related to this action |


<a name="Button"></a>

## Button

Render a button inside [Card](#Card) or [Buttons](#Buttons) templates. Unlike [QuickReply](#QuickReply) templates, by default a button will remain on the screen even after a user presses them.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button (url, phone, postback, share, login, webview, event) |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |
| params | [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional parameters associated with the button |

### new Button(opts)

**Example**  
```js
new Button({
 type: 'webview',
 label: 'More info'
 value: 'https://...'
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Required properties |
| opts.type | <code>string</code> | Required, type of button (url, phone, postback, share, login, webview, event) |
| opts.label | <code>string</code> | Required, label of the button |
| opts.value | <code>string</code> | Required, value of the button (can be a URL or other string value) |
| opts.id | <code>string</code> | Optional, id of the button. If not passed will be automatically generated |
| opts.param | [<code>Param</code>](#Base.Param) \| [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional Param or array or Array of Params related to this button |

### new Button(opts)

**Example**  
```js
new Button({
 title: 'Select',
 type: 'event',
 value: 'NICE_EVENT'
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> |  |
| opts.title | <code>string</code> | Required, title of the button |
| opts.type | <code>string</code> | Required, type of the button (text or event) |
| opts.value | <code>string</code> | Required, value of payload to be sent back to the server when customer clicks the buttons |
| opts.param | <code>Param</code> | Optional, parameter to pass to the button |
| opts.params | <code>Array.&lt;Param&gt;</code> | Optional, parameters to pass to the button |


<a name="Media"></a>

## Media

Component that represents a URL to an image, video or audio file. Used within generic templates like [Card](#Card) and [Image](#Image).

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to the media file |

### new Media()


| Param | Type | Description |
| --- | --- | --- |
| opts.url | <code>string</code> | Required |
| opts.type | <code>string</code> | Required |

### new Media()


| Param | Type | Description |
| --- | --- | --- |
| opts.url | <code>string</code> | Required |
| opts.type | <code>string</code> | Required |


<a name="QuickReply"></a>

## QuickReply

Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label that is shown as a quick reply |
| value | <code>string</code> | Value that is being send as the quick reply, empty if type is location |
| type | <code>string</code> | Type of quick reply, default is text (text, location, user_email, user_phone_number, event) |
| params | [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional parameters associated with the quick reply |

### new QuickReply()

**Example**  
```js
const text = new Text('We have a 40" screen for sale. Want to preorder it?')
text.addQuickReply(new QuickReply({
  label: '👍',
  value: 'Yes'
}))
text.addQuickReply(new QuickReply({
  label: '👎',
  value: 'No'
}))
```

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.type | <code>string</code> | Optional type, default is text (text, location, user_email, user_phone_number, event) |
| opts.value | <code>string</code> | Required, ignored if type is location |
| opts.auto | <code>boolean</code> | Optional, flag for auto reply |
| opts.stepId | <code>string</code> | Optional, step link for auto reply |
| opts.param | [<code>Param</code>](#Base.Param) \| [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional Param or array or Array of Params related to this QuickReply |


---

# Messenger

These reply templates are specific to the Messenger integration. They are not supported by other channels.

<a name="Messenger.Products"></a>

## Messenger.Products

Products Template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productIds | <code>Array.&lt;string&gt;</code> | list of product IDs |

### new Products(productIds)

The product template can be used to render products that have been uploaded to Facebook catalog. Product details (image, title, price) will automatically be pulled from the product catalog.

**Example**  
```js
// Single product card
const product = new Messenger.Products('11232112332')

// Carousel of products
const product = new Messenger.Products(['11232112332', '23422224343])
```

| Param | Type | Description |
| --- | --- | --- |
| productIds | <code>Array.&lt;string&gt;</code> | Required |


<a name="Messenger.OTN"></a>

## Messenger.OTN

One-Time Notification Request Template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | title of the OTN |
| tag | <code>string</code> | tag that will be assigned to actor when this OTN is called |

### new OTN(title, tag)

The One-Time Notification request template template will be rendered and once the user clicks the Notify Me button, a special OTNR trigger is called. The specific user can now be reached for a follow up message after the 24hr period.

**Example**  
```js
const otn = new Messenger.OTN('When keyboards are available', 'keyboard')
```

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Required title for the request |
| tag | <code>string</code> | Optional tag name to apply when a user accepts the OTNR |


<a name="Messenger.Receipt"></a>

## Messenger.Receipt

Receipt Template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sharable | <code>boolean</code> | Optional, set to true to enable the native share button in Messenger for the template message. Defaults to false. |
| recipientName | <code>string</code> | Required, the recipient's name. |
| merchantName | <code>string</code> | Optional, the merchant's name. If present this is shown as logo text. |
| orderNumber | <code>string</code> | Required, the order number. Must be unique. |
| currency | <code>string</code> | Required,  currency of the payment. |
| paymentMethod | <code>string</code> | Required, the payment method used. Providing enough information for the customer to decipher which payment method and account they used is recommended. This can be a custom string, such as, "Visa 1234". |
| timestamp | <code>string</code> | Optional, timestamp of the order in seconds. |
| elements | <code>Array.&lt;ReceiptElement&gt;</code> | Optional, array of a maximum of 100 element objects that describe items in the order. Sort order of the elements is not guaranteed. |
| address | <code>ReceiptAddress</code> | Optional, the shipping address of the order. |
| summary | <code>ReceiptSummary</code> | Optional, the payment summary. See summary. |
| adjustments | <code>Array.&lt;ReceiptAdjustment&gt;</code> | Optional, an array of payment objects that describe payment adjustments, such as discounts. |

### new Receipt()

The receipt template allows you to send an order confirmation. The template may include an order summary, payment details, and shipping information.

**Example**  
```js
// Create a receipt
const receipt = new Messenger.Receipt({
  recipientName: "Stephane Crozatier",
  orderNumber: "12345678902",
  currency: "USD",
  paymentMethod: "Visa 2345",
  orderUrl: "http://petersapparel.parseapp.com/order?order_id=123456",
  timestamp: "1428444852",
  address: new Messenger.ReceiptAddress({
    street1: "1 Hacker Way",
    street2: "2nd floor",
    city: "Menlo Park",
    postalCode: "94025",
    state: "CA",
    country: "US"
  }),
  summary: new Messenger.ReceiptSummary({
    subtotal: 75.00,
    shippingCost: 4.95,
    totalTax: 6.19,
    totalCost: 56.14
  }),
  adjustments: [
    new Messenger.ReceiptAdjustment({
      name: "New Customer Discount",
      amount: 20
    }),
    new Messenger.ReceiptAdjustment({
      name: "$10 Off Coupon",
      amount: 10
    })
  ],
  elements: [
    new Messenger.ReceiptElement({
      title: "Classic White T-Shirt",
      subtitle: "100% Soft and Luxurious Cotton",
      quantity: 2,
      price: 29.95,
      currency: "USD",
      imageUrl: "http://petersapparel.parseapp.com/img/whiteshirt.png"
    }),
    new Messenger.ReceiptElement({
      title: "Classic Gray T-Shirt",
      subtitle: "100% Soft and Luxurious Cotton",
      quantity: 2,
      price: 49.95,
      currency: "USD",
      imageUrl: "http://petersapparel.parseapp.com/img/grayshirt.png"
    })
  ]
})
```

<a name="Messenger.ReceiptElement"></a>

## Messenger.ReceiptElement

Component used in [Receipt](Receipt) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Required, the name to display for the item. |
| subtitle | <code>string</code> | Optional, a brief item description |
| quantity | <code>number</code> | Optional, the quantity of the item purchased. |
| price | <code>number</code> | Required, the price of the item. For free items, '0' is allowed. |
| currency | <code>string</code> | Optional, the currency of the item price. |
| imageUrl | <code>string</code> | Optional, the URL of an image to be displayed with the item. |

### new ReceiptElement(opts)

The shipping element of an order

**Example**  
```js
const element = new Messenger.ReceiptElement({
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Required properties |
| opts.title | <code>string</code> | Required, the name to display for the item. |
| opts.subtitle | <code>string</code> | Optional, a brief item description |
| opts.quantity | <code>number</code> | Optional, the quantity of the item purchased. |
| opts.price | <code>number</code> | Required, the price of the item. For free items, '0' is allowed. |
| opts.currency | <code>string</code> | Optional, the currency of the item price. |
| opts.imageUrl | <code>string</code> | Optional, the URL of an image to be displayed with the item. |


<a name="Messenger.ReceiptAddress"></a>

## Messenger.ReceiptAddress

Component used in [Receipt](Receipt) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| street1 | <code>string</code> | Required, the street address, line 1. |
| street2 | <code>string</code> | Optional, the street address, line 2. |
| city | <code>string</code> | Required, the city name of the address. |
| postalCode | <code>string</code> | Required, the postal code of the address. |
| state | <code>string</code> | Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses. |
| country | <code>string</code> | Required, the two-letter country abbreviation of the address. |

### new ReceiptAddress(opts)

The shipping address of an order

**Example**  
```js
const address = new Messenger.ReceiptAddress({
  street1: "1 Hacker Way",
  street2: "2nd floor",
  city: "Menlo Park",
  postalCode: "94025",
  state: "CA",
  country: "US"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Required properties |
| opts.street1 | <code>string</code> | Required, the street address, line 1. |
| opts.street2 | <code>string</code> | Optional, the street address, line 2. |
| opts.city | <code>string</code> | Required, the city name of the address. |
| opts.postalCode | <code>string</code> | Required, the postal code of the address. |
| opts.state | <code>string</code> | Required, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses. |
| opts.country | <code>string</code> | Required, the two-letter country abbreviation of the address. |


<a name="Messenger.ReceiptSummary"></a>

## Messenger.ReceiptSummary

Component used in [Receipt](Receipt) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| subtotal | <code>number</code> | Optional, the sub-total of the order. |
| shippingCost | <code>number</code> | Optional, the shipping cost of the order. |
| totalTax | <code>number</code> | Optional, the tax of the order. |
| totalCost | <code>number</code> | Required, the total cost of the order, including sub-total, shipping, and tax. |

### new ReceiptSummary(opts)

The shipping summary of an order

**Example**  
```js
const summary = new Messenger.ReceiptSummary({
  subtotal: 75.00,
  shippingCost: 4.95,
  totalTax: 6.19,
  totalCost: 56.14
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Required properties |
| opts.subtotal | <code>number</code> | Optional, the sub-total of the order. |
| opts.shippingCost | <code>number</code> | Optional, the shipping cost of the order. |
| opts.totalTax | <code>number</code> | Optional, the tax of the order. |
| opts.totalCost | <code>number</code> | Required, the total cost of the order, including sub-total, shipping, and tax. |


<a name="Messenger.ReceiptAdjustment"></a>

## Messenger.ReceiptAdjustment

Component used in [Receipt](Receipt) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Required, name of the adjustment. |
| amount | <code>number</code> | Required, the amount of the adjustment. |

### new ReceiptAdjustment(opts)

Describes a payment adjustments, such as discounts

**Example**  
```js
const adjustment = new Messenger.ReceiptAdjustment({
  name: "10% discount",
  amount: 4.95
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Required properties |
| opts.name | <code>string</code> | Required, name of the adjustment. |
| opts.amount | <code>number</code> | Required, the amount of the adjustment. |


--- 

# Phone

These reply templates are specific to the Twilio voice integration. They are not supported by other channels.

<a name="Phone.Ask"></a>

## Phone.Ask

Send a message to a user asking for input

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| speech | <code>string</code> | Text to speech |
| url | <code>string</code> | URL to an audio file |
| expected | <code>string</code> | Optional, what kind of input to expect. Valid are speech or digits (default is speech) |
| hints | <code>string</code> | Optional, expected words or sentences, comma separated (max 500 words) |
| language | <code>string</code> | Optional language for text to speech |
| voice | <code>string</code> | Optional voice for text to speech |
| timeout | <code>number</code> | Optional, number of seconds to wait for user input (default ) and send a repeat message |
| repeat | <code>number</code> | Optional, number of times to ask again after user has not provided input (default 1, 0 is unlimited loop) |
| finishOnKey | <code>string</code> | Optional, only when expecting digits, set a value that your caller can press to submit their digits. |
| numDigits | <code>number</code> | Optional, only when expecting digits, set the number of digits you expect from your caller |
| speechTimeout | <code>string</code> | Optional, only when expecting speech, sets the limit (in seconds) to wait before it stopping speech recognition |

### new Ask()

Ask a user for input

**Example**  
```js
const ask = new Phone.Ask({
  speech: 'Do you speak English?',
  language: 'en-GB',
  expected: 'speech',
  hints: 'yes,yeah,yup,yes I do,no,no not really,nope'
})
```

<a name="Phone.Say"></a>

## Phone.Say

Play an audio file or send a text message to a user that is transformed to speech

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| speech | <code>string</code> | The text transformed to speech Send a message to a user |
| speech | <code>string</code> | Text to speech |
| url | <code>string</code> | URL to an audio file |
| language | <code>string</code> | Optional language for text to speech |
| voice | <code>string</code> | Optional voice for text to speech |

### new Say(opts)

**Example**  
```js
const say = new Phone.Say({
  speech: 'The weather is nice today!',
  language: 'en-GB'
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | Configuration |
| opts.speech | <code>string</code> | Text to speech |
| opts.url | <code>string</code> | URL to audio File |
| opts.language | <code>string</code> | Optional language for text to speech |
| opts.voice | <code>string</code> | Optional voice for text to speech |


<a name="Phone.Pause"></a>

## Phone.Pause

Pause a moment during the call

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| seconds | <code>float</code> | The number of seconds to delay |

### new Pause()

**Example**  
```js
const pause = new Phone.Pause(0.2)
```

| Param | Type | Description |
| --- | --- | --- |
| opts.seconds | <code>number</code> | Required |


<a name="Phone.Dial"></a>

## Phone.Dial

Dial a number and forward the call

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| phoneNumber | <code>string</code> | The number of phoneNumber to delay |

### new Dial()

**Example**  
```js
const pause = new Dial(0.2)
```

| Param | Type | Description |
| --- | --- | --- |
| opts.phoneNumber | <code>string</code> | Required |


<a name="Phone.Hangup"></a>

## Phone.Hangup

Disconnect

### new Hangup()

Disconnect a phone call

**Example**  
```js
const hangup = new Phone.Hangup()
```

--- 

# Apple Business Chat (Preview)

These reply templates are specific to the Apple Business Chat integration. They are not supported by other channels.

<a name="Apple.RichLink"></a>

## Apple.RichLink

Enhance the customer's experience by allowing them to preview inline content.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Required title |
| url | <code>string</code> | Required. URL to the linked web page |
| assets | <code>array</code> | Required. List of assets like [ImageAsset](ImageAsset) or [VideoAsset](VideoAsset) |

### new RichLink(opts)

**Example**  
```js
const richLink = new Apple.RichLink({
  title: "Some news website",
  url: "https://www.mynewswebsite.corp",
  assets: [
    new Apple.ImageAsset({
      url: "https://source.unsplash.com/random",
      mimeType: "image/png"
    }),
    new Apple.VideoAsset({
      url: "https://somevideo",
      mimeType: "video/mp4"
    })
  ]
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.title | <code>string</code> | Required title |
| opts.url | <code>string</code> | Required. URL to the linked web page |
| opts.assets | <code>array</code> | Required. List of assets like [ImageAsset](ImageAsset) or [VideoAsset](VideoAsset) |

### *richLink*.addAsset(asset)

Add an asset to the list of media assets


| Param | Type | Description |
| --- | --- | --- |
| asset | <code>Asset</code> | asset |


<a name="Apple.ImageAsset"></a>

## Apple.ImageAsset

Component that represents an image asset used with a [RichLink](RichLink) template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the image |
| mimeType | <code>string</code> | Required. A string representing the format/type of the image; for example, image/jpeg, image/png |

### new ImageAsset(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.url | <code>string</code> | Required. URL to the image |
| opts.mimeType | <code>string</code> | Required. The format/type of the image |


<a name="Apple.VideoAsset"></a>

## Apple.VideoAsset

Component that represents a video asset used with a [RichLink](RichLink) template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the video |
| mimeType | <code>string</code> | Required. A string representing the format/type of the video; for example, video/mp4, video/mpeg |

### new VideoAsset(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.url | <code>string</code> | Required. URL to the video |
| opts.mimeType | <code>string</code> | Required. The format/type of the video |


---

<a name="Apple.ListPicker"></a>

## Apple.ListPicker

Allow the customer to choose from a list of items

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sections | <code>array</code> | Required 1 or more ListPickerSection objects |
| multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections across sections. Defaults to false |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the ListPicker window |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business. |

### new ListPicker(opts)

**Example**  
```js
const listPicker = new Apple.ListPicker({
  receivedMessage: new Apple.InteractiveMessage({
    title: "Select products",
    subtitle: "Fresh and straight from the farm",
    style: "small"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "Selected products",
    style: "small"
  }),
  sections: [
    new Apple.ListPickerSection({
      title: "Fruit",
      items: [
        new Apple.ListPickerItem({
          title: "Apple",
          subtitle: "Red and delicious"
        }),
        new Apple.ListPickerItem({
          title: "Orange",
          subtitle: "Vitamin C boost"
        })
      ]
    }),
    new Apple.ListPickerSection({
      title: "Veggies",
      items: [
        new Apple.ListPickerItem({
          title: "Lettuce",
          subtitle: "Crispy greens"
        }),
        new Apple.ListPickerItem({
          title: "Cucumber",
          subtitle: "Organic"
        })
      ]
    })
  ]
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.sections | <code>array</code> | An array of ListPickerSection objects |
| opts.multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections across sections. Defaults to false |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the ListPicker window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer made a choice |

### *listPicker*.addSection(section)

Add a section to the sections


| Param | Type | Description |
| --- | --- | --- |
| section | <code>ListPickerSection</code> | section |


<a name="Apple.ListPickerSection"></a>

## Apple.ListPickerSection

Component that groups a list of [ListPickerItem](ListPickerItem) objects and is part of a [ListPicker](ListPicker)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;ListPickerItem&gt;</code> | A list of [ListPickerItem](ListPickerItem) objects |
| multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections within the section. Defaults to false |
| order | <code>Number</code> | An integer containing the ordinal position for the section |
| title | <code>string</code> | Required title |

### new ListPickerSection(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.items | <code>Array.&lt;ListPickerItem&gt;</code> | An array of [ListPickerItem](ListPickerItem) objects |
| opts.multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections within the section. Defaults to false |
| opts.order | <code>Number</code> | An integer containing the ordinal position for the section |
| opts.title | <code>string</code> | Required title |

### *listPickerSection*.addItem(item)

Add a list item to the section

**Example**  
```js
const section = new Apple.ListPickerSection({
  title: "Fruit"
})
section.addItem(new Apple.ListPickerItem({
  title: "Apples"
}))
section.addItem(new Apple.ListPickerItem({
  title: "Oranges"
}))
```

| Param | Type | Description |
| --- | --- | --- |
| item | <code>ListPickerItem</code> | item |


<a name="Apple.ListPickerItem"></a>

## Apple.ListPickerItem

Component that represents a selectable item inside a [ListPickerSection](ListPickerSection)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| image | <code>string</code> | Optional URL to a 30x30 image |
| order | <code>number</code> | Optional integer representing the ordinal position for the item |
| style | <code>string</code> | Optional item style. Defaults to default |
| title | <code>string</code> | Required title |
| subtitle | <code>string</code> | Optional subtitle |

### new ListPickerItem(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Optional Unique identifier |
| opts.image | <code>string</code> | Optional URL to a 30x30 image |
| opts.order | <code>Number</code> | Optional integer representing the ordinal position for the item |
| opts.style | <code>string</code> | Optional item style. Defaults to default |
| opts.title | <code>string</code> | Required title |
| opts.subtitle | <code>string</code> | Optional subtitle |


---

<!--<a name="Apple.TimePicker"></a>

## Apple.TimePicker

Allow the customer to schedule an appointment

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>EventItem</code> | Required. Represents the event to pick a time for |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the TimePicker window |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business. |

### new TimePicker(opts)

**Example**  
```js
const timePicker = new Apple.TimePicker({
  receivedMessage: new Apple.InteractiveMessage({
    title: "Schedule an Appointment",
    subtitle: "We'll see you there!",
    style: "icon"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "Your Appointment",
    style: "icon"
  }),
  event: new Apple.EventItem({
    title: "Some event",
    location: new Apple.LocationItem({
      latitude: 37.7725,
      longitude: -122.4311,
      radius: 100,
      title: "Some venue"
    }),
    timeslots: [
      new Apple.TimeItem({
        duration: 60,
        startTime: "2020-05-26T08:27:55+00:00"
      }),
      new Apple.TimeItem({
        duration: 60,
        startTime: "2020-05-26T09:27:55+00:00"
      }),
      new Apple.TimeItem({
        duration: 60,
        startTime: "2020-05-26T10:27:55+00:00"
      })
    ],
    timezoneOffset: 2
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.event | <code>EventItem</code> | Represents the event to pick a time for |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the TimePicker window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer made a choice |

-->

<!--<a name="Apple.EventItem"></a>

## Apple.EventItem

Component that represents an event inside a [TimePicker](TimePicker)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| image | <code>string</code> | Optional URL to an image. The image should be a @3x image sized at 375 x 208 points (that is, 1125 x 624 pixels). |
| location | <code>LocationItem</code> | Describes a location |
| timeslots | <code>Array.&lt;TimeItem&gt;</code> | A list of TimeItem objects |
| timezoneOffset | <code>integer</code> | An integer representing the number of minutes from GMT, specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location. |
| title | <code>string</code> | Required title |

### new EventItem(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Optional identifier |
| opts.image | <code>string</code> | Optional URL to an image. |
| opts.timeslots | <code>Array.&lt;TimeItem&gt;</code> | Optional array of TimeItem objects |
| opts.timezoneOffset | <code>integer</code> | Optional integer representing the number of minutes from GMT |
| opts.title | <code>string</code> | Required title |

### *eventItem*.addTimeslot(item)

Add a TimeItem to the list of timeslots


| Param | Type | Description |
| --- | --- | --- |
| item | <code>TimeItem</code> | item |

-->

<!--<a name="Apple.TimeItem"></a>

## Apple.TimeItem

Component that represents an item inside a [TimePicker](TimePicker)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| duration | <code>float</code> | An integer representing the duration of the time slot, in seconds |
| startTime | <code>string</code> | A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2017-05-26T08:27:55+00:00, 2017-05-26T08:27:55+0000, or 2017-05-26T08:27:55Z. The timezoneOffset, from the EventItem dictionary, determines whether the startTime is in a specific time zone or in the customer's current time zone |

### new TimeItem(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.duration | <code>float</code> | Required duration of the time slot, in seconds |
| opts.identifier | <code>string</code> | Optional Unique identifier |
| opts.startTime | <code>string</code> | Required UTC date string |

-->

<!--<a name="Apple.LocationItem"></a>

## Apple.LocationItem

Component that represents a location inside a [TimePicker](TimePicker)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| latitude | <code>float</code> | A double representing the latitude of the location |
| longitude | <code>float</code> | A double representing the longitude of the location |
| radius | <code>float</code> | A double representing the location radius, in meters. Business Chat ignores this field when latitude and longitude are missing or empty. |
| title | <code>string</code> | Required title |

### new LocationItem(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.latitude | <code>float</code> | Latitude of the location |
| opts.longitude | <code>float</code> | Longitude of the location |
| opts.radius | <code>float</code> | A double representing the location radius in meters |
| opts.title | <code>string</code> | Required title |

-->

<!------->

<a name="Apple.AuthRequest"></a>

## Apple.AuthRequest

Authenticate a customer using the OAuth protocol

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| oauth2 | <code>Oauth2</code> | Required. Oauth2 collection of keys |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to start the authentication |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a authentication request, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer authenticates and returns a reply to the business. |

### new AuthRequest(opts)

**Example**  
```js
const authRequest = new Apple.AuthRequest({
  oauth2: new Apple.Oauth2({
    responseType: "code",
    scope: ["email", "profile"],
    state: "security_token",
    responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
    clientSecret: "client_secret"
  }),  
  receivedMessage: new Apple.InteractiveMessage({
    title: "Sign In to Business Chat Sandbox"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "You are signed in!"
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.oauth2 | <code>Oauth2</code> | Required. Oauth2 collection of keys |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the authentication request window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer authenticated |


<a name="Apple.Oauth2"></a>

## Apple.Oauth2

Keys for the OAuth2 authentication request used with a [AuthRequest](AuthRequest)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| clientSecret | <code>string</code> | Required. The secret provisioned by the authorization server |
| responseEncryptionKey | <code>string</code> | Required. The Base64-encoded public key that encrypts the access token returned in the response |
| responseType | <code>string</code> | Required. Indicates the type of authentication request |
| scope | <code>Array.&lt;string&gt;</code> | Required. Array of scopes that describe the granted access for read and write |
| state | <code>string</code> | Required. Indicates the state of the authentication request |

### new Oauth2(opts)

**Example**  
```js
const authRequest = new Apple.AuthRequest({
  oauth2: new Apple.Oauth2({
    responseType: "code",
    scope: ["email", "profile"],
    state: "security_token",
    responseEncryptionKey: "BFz948MTG3OQ0Q69 <truncated>",
    clientSecret: "client_secret"
  }),  
  receivedMessage: new Apple.InteractiveMessage({
    title: "Sign In to Business Chat Sandbox"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "You are signed in!"
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.clientSecret | <code>string</code> | Required. The secret provisioned by the authorization server |
| opts.responseEncryptionKey | <code>string</code> | Required. The Base64-encoded public key that encrypts the access token returned in the response |
| opts.responseType | <code>string</code> | Required. Indicates the type of authentication request |
| opts.scope | <code>Array.&lt;string&gt;</code> | Required. Array of scopes that describe the granted access for read and write |
| opts.state | <code>string</code> | Required. Indicates the state of the authentication request |

### *oauth2*.addScope(scope)

Add a scope to the list of scopes


| Param | Type | Description |
| --- | --- | --- |
| scope | <code>string</code> | scope |


<!------->

<!--<a name="Apple.PayRequest"></a>

## Apple.PayRequest

Apple Pay payment request

### new PayRequest(opts)

**Example**  
```js
const payRequest = new Apple.PayRequest({
  merchant: new Apple.PayMerchant({
    identifier: "abc",
    displayName: "Ny Super Store",
    countryCode: "us",
    currencyCode: "usd",
    capabilities: [
      'supports3DS',
      'supportsCredit',
      'supportsDebit'
    ],
    supportedNetworks:[
      "amex",
      "visa",
      "discover",
      "masterCard"
    ]
  }),      
  shippingMethods: [
    new Apple.PayShippingMethod({    
      identifier: "FreeShip",
      label: "Free Shipping",
      detail: "Arrives in 5 to 7 days",
      amount: "0.00"
    })
  ],
  requiredBillingContactFields: [
    "post"
  ],
  requiredShippingContactFields: [
    "post",
    "phone",
    "email",
    "name"
  ],
  lineItems: [
    new Apple.PayLineItem({  
      amount: "59.00",
      label: "Halibut",
      type: "final"
    }),
    new Apple.PayLineItem({  
      amount: "4.99",
      label: "Shipping",
      type: "final"
    })
  ],
  total: new Apple.PayLineItem({
    amount: "63.99",
    label: "Sam's Fish",
    type: "final"
  }),
  supportedCountries: [
    "US",
    "CA"
  ],
  endpoints: new Apple.PayEndpoints({
    fallbackUrl: "https://my.example/fallback/",
    orderTrackingUrl: "https://my.example/orderTrackingUrl/",
    paymentGatewayUrl: "https://my.example/paymentGateway/",
    paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
    shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
    shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
  }),
  receivedMessage: new Apple.InteractiveMessage({
    style: "large",
    subtitle: "$63.99 at Sam's Fish",
    title: "Halibut"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "Thank you for your order"
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.merchant | <code>PayMerchant</code> | Required. All required data about the Apple Pay merchant |
| opts.endpoints | <code>PayEndpoints</code> | Optional. Contains the endpoints for payment processing, contact updates, and order tracking |
| opts.lineItems | <code>Array.&lt;PayLineItem&gt;</code> | Optional. An array of line items explaining payments and additional charges. |
| opts.shippingMethods | <code>Array.&lt;PayShippingMethod&gt;</code> | An array that lists the available shipping methods. The Apple Pay payment sheet displays the first shipping method from the array as the default shipping method |
| opts.requiredBillingContactFields | <code>Array.&lt;string&gt;</code> | Optional. The list of the customer's required billing information needed to process the transaction.Require only the contact fields needed to process the payment. Requesting unnecessary fields adds complexity to the transaction, which can increase the chances of the customer canceling the payment request. Can be "postalAddress" |
| opts.requiredShippingContactFields | <code>Array.&lt;string&gt;</code> | Optional. The list of shipping or contact information required from the customer to fulfill the order. For example, if you need the customer's email or phone number |
| opts.total | <code>PayLineItem</code> | Required. The total amount must be greater than zero to pass validation. The label, defined in the total dictionary, appears on the payment sheet and should be the doing-business-as name of the business |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the payment request window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer completed payment |

### *payRequest*.addLineItem(item)

Add a [PayLineItem](PayLineItem) to the list of lineItems


| Param | Type | Description |
| --- | --- | --- |
| item | <code>PayLineItem</code> | item |

### *payRequest*.addShippingMethod(method)

Add a [PayShippingMethod](PayShippingMethod) to the list of shippingMethods


| Param | Type | Description |
| --- | --- | --- |
| method | <code>PayShippingMethod</code> | item |

-->

<!--<a name="Apple.PayMerchant"></a>

## Apple.PayMerchant

Apple Pay merchant data part of a [PayRequest](PayRequest)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Required. A unique identifier that represents a merchant for Apple Pay. |
| displayName | <code>string</code> | Required. A string of 64 or fewer UTF-8 characters containing the canonical name for your store, suitable for display. |
| countryCode | <code>string</code> | Required The merchant’s two-letter ISO 3166 country code |
| currencyCode | <code>string</code> | Required. The three-letter ISO 4217 currency code for the payment. |
| capabilities | <code>Array.&lt;string&gt;</code> | Optional. An array of payment capabilities supported by the merchant. The array must include supports3DS, and may optionally include supportsCredit, supportsDebit, and supportsEMV |
| supportedNetworks | <code>Array.&lt;string&gt;</code> | Optional. An array of payment networks supported by the merchant. The array must include one or more of the following values: amex, discover, jcb, masterCard, privateLabel, or visa. |

### new PayMerchant(opts)

**Example**  
```js
new Apple.PayMerchant({
  identifier: "abc",
  displayName: "Ny Super Store",
  countryCode: "us",
  currencyCode: "usd",
  capabilities: [
    'supports3DS',
    'supportsCredit',
    'supportsDebit'
  ],
  supportedNetworks:[
    "amex",
    "visa",
    "discover",
    "masterCard"
  ]
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Required. A unique identifier that represents a merchant for Apple Pay. |
| opts.displayName | <code>string</code> | Required. A string of 64 or fewer UTF-8 characters containing the canonical name for your store, suitable for display. |
| opts.countryCode | <code>string</code> | Required The merchant’s two-letter ISO 3166 country code |
| opts.currencyCode | <code>string</code> | Required. The three-letter ISO 4217 currency code for the payment. |
| opts.capabilities | <code>Array.&lt;string&gt;</code> | Optional. An array of payment capabilities supported by the merchant. The array must include supports3DS, and may optionally include supportsCredit, supportsDebit, and supportsEMV |
| opts.supportedNetworks | <code>Array.&lt;string&gt;</code> | Optional. An array of payment networks supported by the merchant. The array must include one or more of the following values: amex, discover, jcb, masterCard, privateLabel, or visa. |

-->

<!--<a name="Apple.PayShippingMethod"></a>

## Apple.PayShippingMethod

Apple Pay shipping method part of a [PayRequest](PayRequest)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Required. A client-defined value used to identify this shipping method |
| amount | <code>string</code> | Required. The nonnegative cost associated with this shipping method |
| label | <code>string</code> | Required. A short description of the shipping method |
| type | <code>string</code> | Required A value that indicates whether the line item is "final" or "pending" |

### new PayShippingMethod(opts)

**Example**  
```js
new Apple.PayShippingMethod({
  identifier: "in_store_pickup",
  amount: "59.00",
  label: "Halibut",
  detail: "final"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Required. A client-defined value used to identify this shipping method |
| opts.amount | <code>string</code> | Required. The nonnegative cost associated with this shipping method |
| opts.label | <code>string</code> | Required. A short description of the shipping method |
| opts.detail | <code>string</code> | Additional description of the shipping method |

-->

<!--<a name="Apple.PayLineItem"></a>

## Apple.PayLineItem

Apple Pay line item part of a [PayRequest](PayRequest)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | Required. The monetary amount of the line item |
| label | <code>string</code> | Required. A short, localized description of the line item |
| type | <code>string</code> | Required A value that indicates whether the line item is "final" or "pending" |

### new PayLineItem(opts)

**Example**  
```js
new Apple.PayLineItem({
  amount: "59.00",
  label: "Halibut",
  type: "final"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.amount | <code>string</code> | Required. The monetary amount of the line item |
| opts.label | <code>string</code> | Required. A short, localized description of the line item |
| opts.type | <code>string</code> | Required A value that indicates whether the line item is "final" or "pending" |

-->

<!--<a name="Apple.PayEndpoints"></a>

## Apple.PayEndpoints

Apple Pay payment request endpoints part of a [PayRequest](PayRequest)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fallbackUrl | <code>string</code> | Optional. A URL that opens in a web browser so the customer can complete the purchase if their device is unable to make payments using Apple Pay. |
| orderTrackingUrl | <code>string</code> | Optional. Called by Business Chat after completing the order; provides you with an opportunity to update the order information in your system. |
| paymentGatewayUrl | <code>string</code> | Optional. Called by Flow.ai to process the payment through the payment provider. |
| paymentMethodUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes the payment method. |
| shippingContactUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes their shipping address information. |
| shippingMethodUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes the shipping method. |

### new PayEndpoints(opts)

**Example**  
```js
new Apple.PayEndpoints({
  fallbackUrl: "https://my.example/fallback/",
  orderTrackingUrl: "https://my.example/orderTrackingUrl/",
  paymentGatewayUrl: "https://my.example/paymentGateway/",
  paymentMethodUpdateUrl: "https://my.example/paymentMethodUpdate/",
  shippingContactUpdateUrl: "https://my.example/shippingContactUpdate/",
  shippingMethodUpdateUrl: "https://my.example/shippingMethodUpdate/"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.fallbackUrl | <code>string</code> | Optional. A URL that opens in a web browser so the customer can complete the purchase if their device is unable to make payments using Apple Pay. |
| opts.orderTrackingUrl | <code>string</code> | Optional. Called by Business Chat after completing the order; provides you with an opportunity to update the order information in your system. |
| opts.paymentGatewayUrl | <code>string</code> | Optional. Called by Flow.ai to process the payment through the payment provider. |
| opts.paymentMethodUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes the payment method. |
| opts.shippingContactUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes their shipping address information. |
| opts.shippingMethodUpdateUrl | <code>string</code> | Optional. Called by Apple Pay when the customer changes the shipping method. |

-->

<!------->

<a name="Apple.CustomInteractiveData"></a>

## Apple.CustomInteractiveData

Provide a unique user experience with custom interactive messages

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appIcon | <code>string</code> | Required. URL to an image representing the app icon of the iMessage extension |
| appId | <code>string</code> | Required. The App Store identifier of the iMessage extension. |
| appName | <code>string</code> | Required. The name of the iMessage extension |
| url | <code>string</code> | Required. A URL string containing data that the Messages app sends to the iMessage extension |
| useLiveLayout | <code>bool</code> | Required. Determines whether the Messages app should use Live Layout |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the CustomInteractiveData window |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business. |

### new CustomInteractiveData(opts)

**Example**  
```js
const custom = new Apple.CustomInteractiveData({
  receivedMessage: new Apple.InteractiveMessage({
    title: "Select products",
    subtitle: "Fresh and straight from the farm",
    style: "small"
  }),
  replyMessage: new Apple.InteractiveMessage({
    title: "Selected products",
    style: "small"
  }),
  appId: "app-store-id",
  appName: "Name of the App",
  appIcon: "https://source.unsplash.com/random",
  useLiveLayout: false,
  url: "?data=passed-to-app&data2=more-data-passed-to-app"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.appIcon | <code>string</code> | Required. URL to an image representing the app icon of the iMessage extension |
| opts.appId | <code>string</code> | Required. The App Store identifier of the iMessage extension. |
| opts.appName | <code>string</code> | Required. The name of the iMessage extension |
| opts.url | <code>string</code> | Required. A URL string containing data that the Messages app sends to the iMessage extension |
| opts.useLiveLayout | <code>bool</code> | Required. Determines whether the Messages app should use Live Layout |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the CustomInteractiveData window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer made a choice |


---

<a name="Apple.InteractiveMessage"></a>

## Apple.InteractiveMessage

Message that renders in a bubble either shown as the received message that allows a customer to open for example a [ListPicker](ListPicker), [TimePicker](TimePicker) or [PayRequest](PayRequest). Or as a reply message that is shown after a customer makes a selection,

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The main title shown in the header of the message bubble |
| subtitle | <code>string</code> | The subtitle that appears under the main title in the received message bubble |
| secondarySubtitle | <code>string</code> | A right-aligned title. Limited to 512 characters. Only custom interactive messages support this. |
| tertiarySubtitle | <code>string</code> | A right-aligned subtitle. Limited to 512 characters. Only custom interactive messages support this. |
| image | <code>string</code> | Optional URL to a 30x30 image |
| imageTitle | <code>string</code> | The attached image's title. Limited to 512 characters. Only custom interactive messages support this. |
| imageSubtitle | <code>string</code> | The attached image's subtitle. Limited to 512 characters. Only custom interactive messages support this. |
| style | <code>string</code> | A style that controls the size of the view rendered by Live Layout can be icon, small, large. The default is icon. |

### new InteractiveMessage(opts)


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.title | <code>string</code> | Required title |
| opts.subtitle | <code>string</code> | Optional subtitle |
| opts.secondarySubtitle | <code>string</code> | A right-aligned title |
| opts.tertiarySubtitle | <code>string</code> | A right-aligned subtitle |
| opts.image | <code>string</code> | Optional URL to a 30x30 image |
| opts.imageTitle | <code>string</code> | The image's title |
| opts.imageSubtitle | <code>string</code> | The image's subtitle |
| opts.style | <code>string</code> | A style that controls the size of the view |


--- 

# Google Business Messages (Preview)

These reply templates are specific to the Google Business Messages integration. They are not supported by other channels.

<a name="GBM.Text"></a>

## GBM.Text

The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex interaction, or response.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to show |
| containsRichText | <code>boolean</code> | True by default, indicates that the message contains rich text. If the message contains invalid formatting, returns an error. |

### new Text(opts)

**Example**  
```js
const text = new GBM.Text('Want a free soda?')
text.addSuggestion(new GBM.Suggestion({
  label: 'Yes',
  data: 'yes'
}))
text.addSuggestion(new GBM.Suggestion({
  label: 'No',
  data: 'no'
}))
```
**Example**  
```js
const text = new GBM.Text('Hello, here is some **bold text**, *italicized text*, and a [link](https://www.google.com).')
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Collection of options or the text |
| opts.text | <code>string</code> | Required |
| opts.containsRichText | <code>boolean</code> | Optional |


<a name="GBM.Card"></a>

## GBM.Card

Send a related information, [Media](#GBM.Media) or [Suggestion](#GBM.Suggestion) components

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the card |
| description | <code>string</code> | Optional description |
| media | [<code>Media</code>](#GBM.Media) | Optional [Media](#GBM.Media) |
| suggestions | [<code>Array.&lt;Suggestion&gt;</code>](#GBM.Suggestion) | Optional set of [Suggestion](#GBM.Suggestion) components |

### new Card(opts)

**Example**  
```js
const suggestion1 = new GBM.Suggestion({
  label: "Label",
  type: "url",
  url: "https://..."
})

const suggestion2 = new GBM.Suggestion({
  label: "Label",
  type: "url",
  url: "https://..."
 })

const card = new GBM.Card({
  title: "Awesome title",
  description: "Some description",
  media: new GBM.Media({
   url: "https://...",
   type: "image"
  })
})
card.addSuggestion(suggestion1)
card.addSuggestion(suggestion2)
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.title | <code>string</code> | Optional |
| opts.description | <code>string</code> | Optional |
| opts.media | [<code>Media</code>](#GBM.Media) | Optional [Media](#GBM.Media) |

### *card*.addSuggestion(suggestion)

Add a suggestion to the card


| Param | Type | Description |
| --- | --- | --- |
| suggestion | [<code>Suggestion</code>](#GBM.Suggestion) | suggestion |


<a name="GBM.Carousel"></a>

## GBM.Carousel

Template that displays a set of [Card](#GBM.Card) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cardWidth | <code>string</code> | The width of the cards in the carousel, SMALL, MEDIUM or CARD_WIDTH_UNSPECIFIED |
| cards | [<code>Array.&lt;Card&gt;</code>](#GBM.Card) | Set of [Card](#GBM.Card) templates |

### new Carousel(opts)

**Example**  
```js
const card1 = new GBM.Card({
  title: "Awesome title 1",
  description: "Some description 1",
  media: new GBM.Media({
   fileUrl: "https://..."
  })
})

const card2 = new GBM.Card({
  title: "Awesome title 2",
  description: "Some description 2",
  media: new GBM.Media({
   fileUrl: "https://...",
  })
})

const carousel = new GBM.Carousel()
carousel.addCard(card1)
carousel.addCard(card2)
```
**Example**  
```js
// Short hand

const carousel = new GBM.Carousel([
  new GBM.Card({
    title: "Awesome title 1",
    description: "Some description 1",
    media: new GBM.Media({
     fileUrl: "https://..."
    })
  }),
  new GBM.Card({
    title: "Awesome title 2",
    description: "Some description 2",
    media: new GBM.Media({
     fileUrl: "https://..."
    })
  })
])
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| [<code>Array.&lt;Card&gt;</code>](#GBM.Card) | Collection of options or shorthand for a collection of [Card](#GBM.Card) templates |
| opts.cardWidth | <code>string</code> | Optional. Width of the cards in the carousel |
| opts.cards | [<code>Array.&lt;Card&gt;</code>](#GBM.Card) | Optional list of [Card](#GBM.Card) templates |

### *carousel*.addCard(card)

Add a [Card](#GBM.Card) to the list of cards


| Param | Type | Description |
| --- | --- | --- |
| card | [<code>Card</code>](#GBM.Card) | Card to add to the carousel |


<a name="GBM.Suggestion"></a>

## GBM.Suggestion

A suggestion for the user to reply with a predefined text, trigger an event or initiate a native action like dialing a phone number

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of suggestion, default is text (text, url, phone, live_agent, auth) |
| text | <code>string</code> | Text that is shown in the suggested action. Maximum 25 characters. |
| data | <code>string</code> | Value that is being send as the suggestion, empty if type is location |
| url | <code>string</code> | URL to open in case it's a url type |
| phoneNumber | <code>string</code> | phone number to dial in case of a phone type |
| auth | <code>Auth</code> | phone number to dial in case of a phone type |
| params | [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional parameters associated with the suggestion |

### new Suggestion()

**Example**  
```js
// Text suggestion
const textSuggestion = new GBM.Suggestion({ 
  type: "text",
  text: "Say hi",
  data: "Hello"
})

// With param
const textSuggestion = new GBM.Suggestion({ 
  type: "text",
  text: "Buy product",
  params: new Param('itemId', '332223323')
})

// With params
const textSuggestion = new GBM.Suggestion({ 
  type: "text",
  text: "Buy products",
  params: [
    new Param('itemId', '332223323'),
    new Param('itemId', '113432143')
  ]
})

// Short hand syntax
const textSuggestion = new GBM.Suggestion("yes")

// Event suggestion
const textSuggestion = new GBM.Suggestion({ 
  type: "event",
  text: "Main menu",
  data: "MAIN_MENU"
})

// Open URL suggestion
const urlSuggestion = new GBM.Suggestion({ 
  type: "url",
  text: "Open link",
  url: "https://foo.bar"
})

// Dial action
const dialSuggestion = new GBM.Suggestion({ 
  type: "phone",
  text: "Dial",
  phoneNumber: "+1234567890"
})

// Auth suggestion
const authSuggestion = new GBM.Suggestion({ 
  type: "auth",
  auth: new GBM.Auth({
    clientId: 'CLIENT_ID',
    codeChallenge: 'CODE_CHALLENGE',
    scopes: ['SCOPE']
  })
})

// Live agent suggestion
const liveAgentSuggestion = new GBM.Suggestion({ 
  type: "live_agent"
})

const text new GBM.Text("Make a suggestion")
text.addSuggestion(textSuggestion)
text.addSuggestion(urlSuggestion)
text.addSuggestion(authSuggestion)
text.addSuggestion(liveAgentSuggestion)
```

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required type, default is text (text, url, phone, live_agent, auth) |
| opts.text | <code>string</code> | Required unless of type auth or live_agent |
| opts.data | <code>string</code> | Optional data, required if type is text |
| opts.url | <code>string</code> | Required if type is url |
| opts.phoneNumber | <code>string</code> | Required if type is phone |
| opts.auth | <code>Auth</code> | Required if type is auth |
| opts.params | [<code>Param</code>](#Base.Param) \| [<code>Array.&lt;Param&gt;</code>](#Base.Param) | Optional Param or array or Array of Params related to this Suggestion |


<a name="GBM.Auth"></a>

## GBM.Auth

The Authentication request suggestion prompts users to sign in to an OAuth 2.0-compliant application, passing authentication codes to confirm account data and enabling customized user experiences and detailed conversation flows.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Required. The ID of the application that asks for authorization. |
| codeChallenge | <code>string</code> | Required. Required. The code challenge used to exchange access tokens. |
| scopes | <code>Array.&lt;string&gt;</code> | Required. An array that specifies the scopes of the request. |

### new Auth(opts)

**Example**  
```js
const suggestion = new GBM.Suggestion({
  type: 'auth',
  auth: new GBM.Auth({
    clientId: 'CLIENT_ID',
    codeChallenge: 'CODE_CHALLENGE',
    scopes: ['SCOPE']
  })
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.clientId | <code>string</code> | Required. The ID of the application that asks for authorization. |
| opts.codeChallenge | <code>string</code> | Required. Required. The code challenge used to exchange access tokens. |
| opts.scopes | <code>Array.&lt;string&gt;</code> | Required. An array that specifies the scopes of the request. |

### *auth*.addScope(scopes)

Add a scopes to the list of scopes


| Param | Type | Description |
| --- | --- | --- |
| scopes | <code>string</code> | scopes |


<a name="GBM.Media"></a>

## GBM.Media

A media file within a rich  [Card](#GBM.Card)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| height | <code>string</code> | Optional. The height of the media within a rich card. SHORT = 112 DP. MEDIUM = 168 DP. TALL = 264 DP. Not available for rich card carousels when the card width is set to SMALL. |
| fileUrl | <code>string</code> | Required. Publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. Maximum 5 MB. Supported content types: image/jpeg, image/jpg, image/png |
| thumbnailUrl | <code>string</code> | Optional. Publicly reachable URL of the thumbnail. If you don't provide a thumbnail URL, the platform displays a blank placeholder thumbnail until the user's device downloads the file. Maximum 25 KB. Supported content types: image/jpeg, image/jpg, image/png |
| forceRefresh | <code>string</code> | Optional. If set, the platform fetches the file and thumbnail from the specified URLs, even if the platform has cached copies of the file (and/or of the thumbnail). |
| altText | <code>string</code> | Optional. Text describing the details about the media for accessibility purposes. |

### new Media()


| Param | Type | Description |
| --- | --- | --- |
| opts.height | <code>string</code> | Optional |
| opts.fileUrl | <code>string</code> | Required |
| opts.thumbnailUrl | <code>string</code> | Optional |
| opts.forceRefresh | <code>bool</code> | Optional |
| opts.forceRefresh | <code>bool</code> | Optional |


--- 

# WhatsApp (Preview)

These reply templates are specific to the WhatsApp integration. They are not supported by other channels.

<a name="WhatsApp.Text"></a>

## WhatsApp.Text

The simplest messages are made of text. Text messages are best suited to communicate information without the need for visuals, complex inter or response.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to show |
| previewUrl | <code>boolean</code> | True by default, will render a preview if a URL is inside the text message |

### new Text(opts)

**Example**  
```js
const text = new WhatsApp.Text('Want a free soda?')
```
**Example**  
```js
const text = new WhatsApp.Text('Hello, here is some **bold text**, *italicized text*, and a https://www.google.com')
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Collection of options or the text |
| opts.text | <code>string</code> | Required |
| opts.previewUrl | <code>boolean</code> | Optional |


<a name="WhatsApp.Audio"></a>

## WhatsApp.Audio

Deliver an audio to a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the audio |
| url | <code>string</code> | URL to the audio |

### new Audio(opts)

**Example**  
```js
const audio = new WhatsApp.Audio("https://...")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Options or shorthand a URL |
| opts.url | <code>string</code> | Required |


<a name="WhatsApp.Document"></a>

## WhatsApp.Document

Deliver a document to a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the document |
| filename | <code>string</code> | Filename of the document |
| url | <code>string</code> | URL to the document |

### new Document(opts)

**Example**  
```js
const document = new WhatsApp.Document({
  title: "Awesome title",
  url: "https://..."
})
```
**Example**  
```js
const document = new WhatsApp.Document("https://...")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Options or shorthand a URL |
| opts.title | <code>string</code> | Optional |
| opts.filename | <code>string</code> | Optional |
| opts.url | <code>string</code> | Required |


<a name="WhatsApp.Image"></a>

## WhatsApp.Image

Deliver an image to a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
| url | <code>string</code> | URL to the image |

### new Image(opts)

**Example**  
```js
const image = new WhatsApp.Image({
  title: "Awesome title",
  url: "https://..."
})
```
**Example**  
```js
const image = new WhatsApp.Image("https://...")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Options or shorthand a URL |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |


<a name="WhatsApp.Video"></a>

## WhatsApp.Video

Deliver a video to a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the video |
| url | <code>string</code> | URL to the video |

### new Video(opts)

**Example**  
```js
const video = new WhatsApp.Video({
  title: "Awesome title",
  url: "https://..."
})
```
**Example**  
```js
const image = new WhatsApp.Video("https://...")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Options or shorthand a URL |
| opts.title | <code>string</code> | Optional |
| opts.url | <code>string</code> | Required |


<a name="WhatsApp.Sticker"></a>

## WhatsApp.Sticker

Deliver a sticker to a user

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the sticker |
| stickerId | <code>string</code> | ID to the sticker |

### new Sticker(opts)

**Example**  
```js
const sticker = new WhatsApp.Sticker("121233212321")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Options or shorthand a ID |
| opts.stickerId | <code>string</code> | Required |


<a name="WhatsApp.Location"></a>

## WhatsApp.Location

Send or display a location on a map to a user

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lat | <code>string</code> | Latitude |
| long | <code>string</code> | Longitude |
| name | <code>string</code> | Name of the location |
| address | <code>string</code> | Address of the location. Only displayed if name is present. |

### new Location()

**Example**  
```js
const location = new WhatsApp.Location({
  lat: "37.331860",
  long: "-122.030248",
  name: "HQ",
  address: "Infinite Loop 1"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.lat | <code>string</code> | Required |
| opts.long | <code>string</code> | Required |
| opts.name | <code>string</code> | Optional |
| opts.address | <code>string</code> | Optional |


<a name="WhatsApp.Contacts"></a>

## WhatsApp.Contacts

Send one ore more [Contact](#WhatsApp.Contact) to a user.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| contacts | [<code>Array.&lt;Contact&gt;</code>](#WhatsApp.Contact) | One ore more contacts |

### new Contacts(contacts)

**Example**  
```js
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
```

| Param | Type | Description |
| --- | --- | --- |
| contacts | [<code>Array.&lt;Contact&gt;</code>](#WhatsApp.Contact) | Required |


## components

<a name="WhatsApp.Contact"></a>

## WhatsApp.Contact

Component used in a [Contacts](#WhatsApp.Contacts) template

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | [<code>Name</code>](#WhatsApp.Name) | Optional, full contact name |
| organization | [<code>Organization</code>](#WhatsApp.Organization) | Optional, contact organization information |
| addresses | [<code>Array.&lt;Address&gt;</code>](#WhatsApp.Address) | Optional, or more contact addresses |
| birthday | <code>string</code> | Optional, contact date or birth in ISO format |
| emails | [<code>Array.&lt;EmailAddress&gt;</code>](#WhatsApp.EmailAddress) | Optional, or more contact email addresses |
| phones | [<code>Array.&lt;PhoneNumber&gt;</code>](#WhatsApp.PhoneNumber) | Optional, or more contact phone numbers |
| urls | [<code>Array.&lt;WebsiteAddress&gt;</code>](#WhatsApp.WebsiteAddress) | Optional, or more URLs |

### new Contact(opts)

A WhatsApp contact to share

**Example**  
```js
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
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Optional properties |
| opts.name | [<code>Name</code>](#WhatsApp.Name) | Optional, full contact name |
| opts.organization | [<code>Organization</code>](#WhatsApp.Organization) | Optional, contact organization information |
| opts.addresses | [<code>Array.&lt;Address&gt;</code>](#WhatsApp.Address) | Optional, or more contact addresses |
| opts.birthday | <code>string</code> | Optional, contact date or birth in ISO format |
| opts.emails | [<code>Array.&lt;EmailAddress&gt;</code>](#WhatsApp.EmailAddress) | Optional, or more contact email addresses |
| opts.phones | [<code>Array.&lt;PhoneNumber&gt;</code>](#WhatsApp.PhoneNumber) | Optional, or more contact phone numbers |
| opts.urls | [<code>Array.&lt;WebsiteAddress&gt;</code>](#WhatsApp.WebsiteAddress) | Optional, or more URLs |


<a name="WhatsApp.Address"></a>

## WhatsApp.Address

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Optional, type of address, must be HOME or WORK |
| street | <code>string</code> | Optional, the street address |
| city | <code>string</code> | Optional, the city name of the address. |
| zip | <code>string</code> | Optional, the ZIP code of the address. |
| state | <code>string</code> | Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses. |
| country | <code>string</code> | Optional, full country name |
| countryCode | <code>string</code> | Optional, the two-letter country abbreviation of the address. |

### new Address(opts)

The address of a contact

**Example**  
```js
const address = new WhatsApp.Address({
  street: "1 Hacker Way",
  city: "Menlo Park",
  zip: "94025",
  state: "CA",
  country: "United States",
  countryCode: "US"
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Optional properties |
| opts.type | <code>string</code> | Optional, type of address, must be HOME or WORK |
| opts.street | <code>string</code> | Optional, the street address |
| opts.city | <code>string</code> | Optional, the city name of the address |
| opts.zip | <code>string</code> | Optional, the ZIP code of the address |
| opts.state | <code>string</code> | Optional, the state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses |
| opts.country | <code>string</code> | Optional, full name of the country |
| opts.countryCode | <code>string</code> | Optional, the two-letter country abbreviation of the address |


<a name="WhatsApp.EmailAddress"></a>

## WhatsApp.EmailAddress

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Optional, type of email address, must be HOME or WORK |
| email | <code>string</code> | Required, valid email address |

### new EmailAddress(opts)

The email address of as contact

**Example**  
```js
const email = new WhatsApp.EmailAddress({
  email: "email@some.fake.org"
})
```
**Example**  
```js
// Shorthand
const email = new WhatsApp.EmailAddress("email@some.fake.org")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Optional properties |
| opts.type | <code>string</code> | Optional, type of email address, must be HOME or WORK |
| opts.email | <code>string</code> | Required, valid email address |


<a name="WhatsApp.Name"></a>

## WhatsApp.Name

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formattedName | <code>string</code> | Required, valid full name of a contact |
| firstName | <code>string</code> | Optional, first name of a contact |
| lastName | <code>string</code> | Optional, last name of a contact |
| middleName | <code>string</code> | Optional, middle name of a contact |
| suffix | <code>string</code> | Optional, name suffix of a contact |
| prefix | <code>string</code> | Optional, name prefix of a contact |

### new Name(opts)

The full name of a contact

**Example**  
```js
const name = new WhatsApp.Name({
  formattedName: "Jane Doo",
  firstName: "Jane",
  lastName: "Doo",
  middleName: "Van"
})
```
**Example**  
```js
// Shorthand
const name = new WhatsApp.Name("Jane Doo")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Optional properties, or name for shorthand |
| opts.formattedName | <code>string</code> | Required, valid name contact |
| opts.firstName | <code>string</code> | Optional, first name of a contact |
| opts.lastName | <code>string</code> | Optional, last name of a contact |
| opts.middleName | <code>string</code> | Optional, middle name of a contact |
| opts.suffix | <code>string</code> | Optional, name suffix of a contact |
| opts.prefix | <code>string</code> | Optional, name prefix of a contact |


<a name="WhatsApp.Organization"></a>

## WhatsApp.Organization

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| company | <code>string</code> | Optional, name of the contact's company |
| department | <code>string</code> | Optional, department name of a contact |
| title | <code>string</code> | Optional, contact's business title |

### new Organization(opts)

Contact organization information

**Example**  
```js
const organization = new WhatsApp.Organization({
  company: "WhatsApp",
  department: "Design",
  title: "Manager"
})
```
**Example**  
```js
// Shorthand
const organization = new WhatsApp.Organization("WhatsApp")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> \| <code>string</code> | Optional properties, or company name for shorthand |
| opts.company | <code>string</code> | Optional, name of the contact's company |
| opts.department | <code>string</code> | Optional, department name of a contact |
| opts.title | <code>string</code> | Optional, contact's business title |


<a name="WhatsApp.PhoneNumber"></a>

## WhatsApp.PhoneNumber

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Optional, type of phone number, must be HOME or WORK |
| phone | <code>string</code> | Required, valid phone number |

### new PhoneNumber(opts)

The phone number of a contact

**Example**  
```js
const phone = new WhatsApp.PhoneNumber({
  phone: "+1 (940) 555-1234"
})
```
**Example**  
```js
// Shorthand
const phone = new WhatsApp.PhoneNumber("+1 (940) 555-1234")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Optional properties |
| opts.type | <code>string</code> | Optional, type of phone number, must be HOME or WORK |
| opts.phone | <code>string</code> | Required, valid phone number |


<a name="WhatsApp.WebsiteAddress"></a>

## WhatsApp.WebsiteAddress

Component used in a [Contact](#WhatsApp.Contact) component

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Optional, type of website, must be HOME or WORK |
| url | <code>string</code> | Required, valid URL |

### new WebsiteAddress(opts)

The website URL of a contact

**Example**  
```js
const url = new WhatsApp.WebsiteAddress({
  url: "https://www.fake.org"
})
```
**Example**  
```js
// Shorthand
const url = new WhatsApp.WebsiteAddress("https://www.fake.org")
```

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Optional properties |
| opts.type | <code>string</code> | Optional, type of website, must be HOME or WORK |
| opts.url | <code>string</code> | Required, valid URL |


---

# Base classes

For reference, these are some core classes the generic and specific templates inherit from.

<a name="Base.Param"></a>

## Base.Param

Data related to a generic [Button](#Button), [QuickReply](#QuickReply) or specific components like [Suggestion](#GBM.Suggestion)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Name of the parameter |
| value | <code>string</code> | Value of the parameter |

### new Param()

**Example**  
```js
// Render a generic Button that triggers an event with a Param
const param = new Param('itemId', '332223323')
const button = new Button({
 label: 'More info',
 type: 'event',
 value: 'MORE_INFO',
 param
})
```
**Example**  
```js
// Render a generic QuickReply that triggers an event with Params
const shopId = new Param('shopId', '33211233')
const productId = new Param('productId', '123443211')
const quickReply = new QuickReply({
 label: 'Product details',
 type: 'event',
 value: 'PRODUCT_DETAILS',
 param: [shopId, productId]
})
```
**Example**  
```js
// Render a generic Image that has an action that sets params 
const image = new Image({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'event',
    value: 'ORDER',
    param: new Param('productId', '12e2-22342-aasd2')
  })
})
```
**Example**  
```js
// Generate an RBM suggestion that includes a param
const textSuggestion = new GBM.Suggestion({ 
  type: "text",
  text: "Buy product",
  params: new Param('itemId', '332223323')
})
```

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |


<a name="Base.Template"></a>

## Base.Template

Base class for all response templates

### **template*.fallback*

Optional fallback speech


| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Required |


<a name="Base.Text"></a>

## Base.Text

Base template for text

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to show |

### new Text()

**Example**  
```js
const text = new Text('Want a free soda?')
```

| Param | Type | Description |
| --- | --- | --- |
| opts.text | <code>string</code> | Required |

