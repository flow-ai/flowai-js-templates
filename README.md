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

  // Create a speech bubble
  const text = new Text("Hi there!")

  // Create a message with fallback text
  const message = new Message("Hi, there")
  message.addResponse(text)

  return message
}
```

##### Sending a single message with multiple responses

```js
async payload=> {

  // Create a speech bubble
  const text = new Text("Hi there!")

  // Create a card
  const card = new Card({
    title: "Cookie factory",
    subtitle: "Infinite lane 23"
  })

  return new Message("Hi, the address of the Cookie factory is Infinite lane 23")
          .addResponse(text)
          .addResponse(card)
}
```

##### Sending back multiple messages

```js
async payload=> {

  // Create a speech bubble
  const text = new Text("Hi there!")

  // Create a card
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

<a name="Message"></a>

## Message

Representation of a message to a user. Contains a pronounceable fallback message and optional rich [Template](#Template) responses.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Pronounceable and represents the responses as a whole |
| responses | [<code>Array.&lt;Template&gt;</code>](#Template) | List of rich [Template](#Template) responses |

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

### *message*.addResponse(response, delay)

Add a response


| Param | Type | Description |
| --- | --- | --- |
| response | [<code>Template</code>](#Template) | response |
| delay | <code>Number</code> | Optional delay in miliseconds for sending the response |

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


---

# Generic Response Templates Reference

There are a number of generic templates that are supported by multiple messaging channels

<a name="Text"></a>

## Text

Template with a piece of text

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

Template to show an image

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

Template that delivers a file to view or download

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

Template with a video

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the video |
| url | <code>string</code> | URL to the video |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### new Video()

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
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |


<a name="Audio"></a>

## Audio

Template that sends an audio file or shows an audio player

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the audio |
| url | <code>string</code> | URL to the audio file |
| action | [<code>Action</code>](#Action) | Optional [Action](#Action) |

### new Audio()

**Example**  
```js
const audio = new Audio({
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
| opts.action | <code>string</code> | Optional |


<a name="Location"></a>

## Location

Template to show a location

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
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

Template with a short description and [Button](#Button) components to request input from the user

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

### *buttons*.addButton(button)

Add a button to the buttons


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |


<a name="Card"></a>

## Card

Template composed of a media attachment, short description and [Button](#Button) components to request input from the user.

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

Template that displays a set of [Card](#Card) templates

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

### *listItem*.addButton(button)

Add a button to the list item


| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |


---

<a name="Action"></a>

## Action

Default action used in [Card](#Card), [List](#List) and [Buttons](#Buttons) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of action (url, phone, postback, share, login, webview, event) |
| value | <code>string</code> | Value of the action |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the action |

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
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this action |


<a name="Button"></a>

## Button

Component used in [Card](#Card), [Buttons](#Buttons) templates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button (url, phone, postback, share, login, webview, event) |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the button |

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
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this button |


<a name="Media"></a>

## Media

Component that represents a URL to an image, video or audio file. Used with templates like [Card](#Card) and [Image](#Image).

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to the media file |

### new Media()


| Param | Type | Description |
| --- | --- | --- |
| opts.url | <code>string</code> | Required |
| opts.type | <code>string</code> | Required |


<a name="Param"></a>

## Param

Data related to a [Button](#Button) or [QuickReply](#QuickReply)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Name of the parameter |
| value | <code>string</code> | Value of the parametet |

### new Param()

**Example**  
```js
// Render a Button that triggers an event with a Param
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
// Render a QuickReply that triggers an event with Params
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

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |


<a name="QuickReply"></a>

## QuickReply

Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label that is shown as a quick reply |
| value | <code>string</code> | Value that is being send as the quick reply, empty if type is location |
| type | <code>string</code> | Type of quick reply, default is text (text, location, user_email, user_phone_number, event) |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the quick reply |

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
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this QuickReply |


---

# Messenger Templates Reference

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

Create a Receipt template

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

# Phone Templates Reference

<a name="Phone.Ask"></a>

## Phone.Ask

Send a message to a user asking for input

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| speech | <code>string</code> | Text to speech |
| url | <code>string</code> | URL to an audio file |
| expected | <code>string</code> | Optional, what kind of input to expect. Valid are speech, digits or any (default is any) |
| hints | <code>string</code> | Optional, expected words or sentences, comma separated (max 500 words) |
| language | <code>string</code> | Optional language for text to speech |
| voice | <code>string</code> | Optional voice for text to speech |
| timeout | <code>number</code> | Optional, number of seconds to wait for user input (default ) and send a repeat message |
| repeat | <code>number</code> | Optional, number of times to ask again after user has not provided input (default 1, 0 is unlimited loop) |
| profanityFilter | <code>boolean</code> | Optional, filter profanity from any received input |
| finishOnKey | <code>string</code> | Optional, only when expecting digits, set a value that your caller can press to submit their digits. |
| numDigits | <code>number</code> | Optional, only when expecting digits, set the number of digits you expect from your caller |
| speechTimeout | <code>string</code> | Optional, only when expecting speech, sets the limit (in seconds) to wait before it stopping speech recognition |
| speechModel | <code>string</code> | Optional, only when expecting speech, specify a specific speech model. Options: default, numbers_and_commands and phone_call. |

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

Send a message to a user

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| speech | <code>string</code> | Text to speech |
| url | <code>string</code> | URL to an audio file |
| language | <code>string</code> | Optional language for text to speech |
| voice | <code>string</code> | Optional voice for text to speech |

### new Say(opts)

**Example**  
```js
const say = new Phone.Say({
  speech: "The weather is nice today!",
  language: "en-GB"
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

# Apple Business Chat Templates Reference (Preview)


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

# Google Business Messages Templates Reference (Preview)

<a name="GBM.Card"></a>

## GBM.Card

Send a related information, [Media](#GBM.Media) or [Suggestion](#GBM.Suggestion) components

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the card |
| description | <code>string</code> | Optional description |
| media | [<code>Media</code>](#Media) | Optional [Media](#GBM.Media) |
| suggestions | <code>Array.&lt;Suggestion&gt;</code> | Optional set of [Suggestion](#GBM.Suggestion) components |

### new Card(opts)

**Example**  
```js
const suggestion1 = new Suggestion({
  label: "Label",
  type: "url",
  url: "https://..."
})

const suggestion2 = new Suggestion({
  label: "Label",
  type: "url",
  url: "https://..."
 })

const card = new Card({
  title: "Awesome title",
  description: "Some description",
  media: new Media({
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

A suggestion for the user to reply with specified text or initiates a native action on the device.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of suggestion, default is text (text, url, phone, live_agent, auth) |
| text | <code>string</code> | Text that is shown in the suggested action. Maximum 25 characters. |
| data | <code>string</code> | Value that is being send as the suggestion, empty if type is location |
| url | <code>string</code> | URL to open in case it's a url type |
| phoneNumber | <code>string</code> | phone number to dial in case of a phone type |
| auth | <code>Auth</code> | phone number to dial in case of a phone type |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the suggestion |

### new Suggestion()


| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required type, default is text (text, url, phone, live_agent, auth) |
| opts.text | <code>string</code> | Required unless of type auth or live_agent |
| opts.data | <code>string</code> | Optional data, required if type is text |
| opts.url | <code>string</code> | Required if type is url |
| opts.phoneNumber | <code>string</code> | Required if type is phone |
| opts.auth | <code>Auth</code> | Required if type is auth |
| opts.params | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this Suggestion |


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

