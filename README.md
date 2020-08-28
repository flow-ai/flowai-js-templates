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

# Class Reference

## Classes

<dl>
<dt><a href="#Action">Action</a></dt>
<dd><p>Default action used in Card, List and Buttons templates</p>
</dd>
<dt><a href="#Button">Button</a></dt>
<dd><p>Component used in Card, Buttons templates</p>
</dd>
<dt><a href="#ListItem">ListItem</a></dt>
<dd><p>Item within a List</p>
</dd>
<dt><a href="#Media">Media</a></dt>
<dd><p>Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.</p>
</dd>
<dt><a href="#Param">Param</a></dt>
<dd><p>Data related to a Button or Quick Reply</p>
</dd>
<dt><a href="#QuickReply">QuickReply</a></dt>
<dd><p>Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.</p>
</dd>
<dt><a href="#Message">Message</a></dt>
<dd><p>Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.</p>
</dd>
<dt><a href="#Audio">Audio</a></dt>
<dd><p>Template with audio</p>
</dd>
<dt><a href="#Buttons">Buttons</a></dt>
<dd><p>Template with a short description and buttons to request input from the user.</p>
</dd>
<dt><a href="#Card">Card</a></dt>
<dd><p>Template composed of a media attachment, short description and buttons to request input from the user.</p>
</dd>
<dt><a href="#Carousel">Carousel</a></dt>
<dd><p>Template that displays a set of cards</p>
</dd>
<dt><a href="#Custom">Custom</a></dt>
<dd><p>Template composed with your own data. Use this to create specific UI widgets or components to your app or web ui. Do remember we cannot convert these type of templates to channels like Messenger.</p>
</dd>
<dt><a href="#File">File</a></dt>
<dd><p>Template with a file</p>
</dd>
<dt><a href="#Image">Image</a></dt>
<dd><p>Template with a image</p>
</dd>
<dt><a href="#List">List</a></dt>
<dd><p>Template that displays a set of list items</p>
</dd>
<dt><a href="#Location">Location</a></dt>
<dd><p>Template with a location</p>
</dd>
<dt><a href="#Note">Note</a></dt>
<dd><p>Template with a piece of note</p>
</dd>
<dt><a href="#OTN">OTN</a></dt>
<dd><p>Template with an One-Time Notification</p>
</dd>
<dt><a href="#Template">Template</a></dt>
<dd><p>Base class of all response templates</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>Template with a piece of text</p>
</dd>
<dt><a href="#Video">Video</a></dt>
<dd><p>Template with a video</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#Phone">Phone</a> : <code>object</code></dt>
<dd><p>IVR bot specific reply actions</p>
</dd>
<dt><a href="#Apple">Apple</a> : <code>object</code></dt>
<dd><p>Apple Business API specific reply actions</p>
</dd>
</dl>

<a name="Action"></a>

## Action
Default action used in Card, List and Buttons templates

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of action (url, phone, postback, share, login, webview, event) |
| value | <code>string</code> | Value of the action |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the action |

<a name="new_Action_new"></a>

### new Action()

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this action |

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
<a name="Button"></a>

## Button
Component used in Card, Buttons templates

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button (url, phone, postback, share, login, webview, event) |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the button |

<a name="new_Button_new"></a>

### new Button()

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required, type of button (url, phone, postback, share, login, webview, event) |
| opts.label | <code>string</code> | Required, label of the button |
| opts.value | <code>string</code> | Required, value of the button (can be a URL or other string value) |
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this button |

**Example**  
```js
new Button({
 type: 'webview',
 label: 'More info'
 value: 'https://...'
})
```
<a name="ListItem"></a>

## ListItem
Item within a List

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of the list item |
| subtitle | <code>string</code> | Optional subtitle |
| media | [<code>Media</code>](#Media) | Optional Media |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of buttons |
| action | [<code>Action</code>](#Action) | Optional Action that is triggered when a user interacts with the list item |
| featured | <code>bool</code> | Optional set this element to be featured in the List (default false) |


* [ListItem](#ListItem)
    * [new ListItem()](#new_ListItem_new)
    * [.addButton(button)](#ListItem+addButton) ⇒ [<code>ListItem</code>](#ListItem)

<a name="new_ListItem_new"></a>

### new ListItem()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.media | [<code>Media</code>](#Media) | Optional |
| opts.action | [<code>Action</code>](#Action) | Optional |
| opts.featured | <code>bool</code> | Optional |

<a name="ListItem+addButton"></a>

### listItem.addButton(button) ⇒ [<code>ListItem</code>](#ListItem)
Add a button to the list item

**Kind**: instance method of [<code>ListItem</code>](#ListItem)  

| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

<a name="Media"></a>

## Media
Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to the media file |

<a name="new_Media_new"></a>

### new Media()

| Param | Type | Description |
| --- | --- | --- |
| opts.url | <code>string</code> | Required |
| opts.type | <code>string</code> | Required |

<a name="Param"></a>

## Param
Data related to a Button or Quick Reply

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Name of the parameter |
| value | <code>string</code> | Value of the parametet |

<a name="new_Param_new"></a>

### new Param()

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |

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
<a name="QuickReply"></a>

## QuickReply
Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label that is shown as a quick reply |
| value | <code>string</code> | Value that is being send as the quick reply, empty if type is location |
| type | <code>string</code> | Type of quick reply, default is text (text, location, user_email, user_phone_number, event) |
| params | [<code>Array.&lt;Param&gt;</code>](#Param) | Optional parameters associated with the quick reply |

<a name="new_QuickReply_new"></a>

### new QuickReply()

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.type | <code>string</code> | Optional type, default is text (text, location, user_email, user_phone_number, event) |
| opts.value | <code>string</code> | Required, ignored if type is location |
| opts.param | [<code>Param</code>](#Param) \| [<code>Array.&lt;Param&gt;</code>](#Param) | Optional Param or array or Array of Params related to this QuickReply |

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
<a name="Message"></a>

## Message
Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Pronounceable and represents the responses as a whole |
| responses | [<code>Array.&lt;Template&gt;</code>](#Template) | List of rich template responses |


* [Message](#Message)
    * [new Message(fallback, meta)](#new_Message_new)
    * [.addResponse(response, delay)](#Message+addResponse) ⇒ [<code>Message</code>](#Message)
    * [.addQuickReply(quickReply)](#Message+addQuickReply)

<a name="new_Message_new"></a>

### new Message(fallback, meta)

| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>string</code> | Required |
| meta | <code>Object</code> | Optional property list with data |

**Example**  
```js
// Create a message without responses
// this will create a response
// when converted to JSON
const message = new Message('Hi there')

// This also works for multiple text responses by adding an array of strings
const message = new Message(['Hi there', 'How can I help?'])
```
<a name="Message+addResponse"></a>

### message.addResponse(response, delay) ⇒ [<code>Message</code>](#Message)
Add a response

**Kind**: instance method of [<code>Message</code>](#Message)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>Template</code>](#Template) | response |
| delay | <code>Number</code> | Optional delay in miliseconds for sending the response |

<a name="Message+addQuickReply"></a>

### message.addQuickReply(quickReply)
A convienamnce method to add a quick reply to the last response template of a Message

**Kind**: instance method of [<code>Message</code>](#Message)  

| Param | Type | Description |
| --- | --- | --- |
| quickReply | [<code>QuickReply</code>](#QuickReply) | Required |

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
<a name="Audio"></a>

## Audio
Template with audio

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the audio |
| url | <code>string</code> | URL to the audio file |
| action | [<code>Action</code>](#Action) | Optional Action |

<a name="new_Audio_new"></a>

### new Audio()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

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
<a name="Buttons"></a>

## Buttons
Template with a short description and buttons to request input from the user.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the buttons |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of buttons |


* [Buttons](#Buttons)
    * [new Buttons()](#new_Buttons_new)
    * [.addButton(button)](#Buttons+addButton) ⇒ [<code>Button</code>](#Button)

<a name="new_Buttons_new"></a>

### new Buttons()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |

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
<a name="Buttons+addButton"></a>

### buttons.addButton(button) ⇒ [<code>Button</code>](#Button)
Add a button to the buttons

**Kind**: instance method of [<code>Buttons</code>](#Buttons)  

| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

<a name="Card"></a>

## Card
Template composed of a media attachment, short description and buttons to request input from the user.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the card |
| subtitle | <code>string</code> | Optional subtitle |
| media | [<code>Media</code>](#Media) | Optional Media |
| action | [<code>Action</code>](#Action) | Optional Action |
| buttons | [<code>Array.&lt;Button&gt;</code>](#Button) | Optional set of buttons |
| action | [<code>Action</code>](#Action) | Optional Action that is triggered when a user interacts with the card |


* [Card](#Card)
    * [new Card()](#new_Card_new)
    * [.addButton(button)](#Card+addButton) ⇒ [<code>Card</code>](#Card)

<a name="new_Card_new"></a>

### new Card()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.media | [<code>Media</code>](#Media) | Optional |
| opts.action | [<code>Action</code>](#Action) | Optional |

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
<a name="Card+addButton"></a>

### card.addButton(button) ⇒ [<code>Card</code>](#Card)
Add a button to the card

**Kind**: instance method of [<code>Card</code>](#Card)  

| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

<a name="Carousel"></a>

## Carousel
Template that displays a set of cards

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cards | [<code>Array.&lt;Card&gt;</code>](#Card) | Set of cards |


* [Carousel](#Carousel)
    * [new Carousel(cards)](#new_Carousel_new)
    * [.addCard(card)](#Carousel+addCard) ⇒ [<code>Carousel</code>](#Carousel)

<a name="new_Carousel_new"></a>

### new Carousel(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>Array</code> | Optional |

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
<a name="Carousel+addCard"></a>

### carousel.addCard(card) ⇒ [<code>Carousel</code>](#Carousel)
Add a card to the cards

**Kind**: instance method of [<code>Carousel</code>](#Carousel)  

| Param | Type | Description |
| --- | --- | --- |
| card | [<code>Card</code>](#Card) | card |

<a name="Custom"></a>

## Custom
Template composed with your own data. Use this to create specific UI widgets or components to your app or web ui. Do remember we cannot convert these type of templates to channels like Messenger.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Data tailored to your use case |

<a name="new_Custom_new"></a>

### new Custom(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Required |

**Example**  
```js
const custom = new Custom({
  title: 'Big screen TV',
  brand: 'Awesome Elec.',
  catId: 35633123322,
  prices: {
    'EURO': 1800,
    'DOLLAR': '2400'
  }
})
// You can still add quick replies
// to these type of componentz
custom.addQuickReply(new QuickReply({
  label: 'Order now',
  value: 'order 35633123322'
}))
```
<a name="File"></a>

## File
Template with a file

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the file |
| url | <code>string</code> | URL to the file |
| action | [<code>Action</code>](#Action) | Optional Action |

<a name="new_File_new"></a>

### new File()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

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
<a name="Image"></a>

## Image
Template with a image

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
| url | <code>string</code> | URL to the image |
| action | [<code>Action</code>](#Action) | Optional Action |

<a name="new_Image_new"></a>

### new Image()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

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
<a name="List"></a>

## List
Template that displays a set of list items

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | Set of list items |


* [List](#List)
    * [.addItem(item)](#List+addItem) ⇒ [<code>List</code>](#List)
    * [.addButton(button)](#List+addButton) ⇒ [<code>ListItem</code>](#ListItem)

<a name="List+addItem"></a>

### list.addItem(item) ⇒ [<code>List</code>](#List)
Add a item to the items

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>ListItem</code>](#ListItem) | item |

<a name="List+addButton"></a>

### list.addButton(button) ⇒ [<code>ListItem</code>](#ListItem)
Add a button to the list item

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| button | [<code>Button</code>](#Button) | button |

<a name="Location"></a>

## Location
Template with a location

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
| lat | <code>string</code> | Latitude |
| long | <code>string</code> | Longitude |
| action | [<code>Action</code>](#Action) | Optional Action |

<a name="new_Location_new"></a>

### new Location()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.lat | <code>string</code> | Required |
| opts.long | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

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
<a name="Note"></a>

## Note
Template with a piece of note

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| note | <code>string</code> | Note to show |

<a name="new_Note_new"></a>

### new Note()

| Param | Type | Description |
| --- | --- | --- |
| opts.note | <code>string</code> | Required |

**Example**  
```js
const note = new Note('Red note')
```
<a name="OTN"></a>

## OTN
Template with an One-Time Notification

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | title of the OTN |
| tag | <code>string</code> | tag that will be assigned to actor when this OTN is called |

<a name="new_OTN_new"></a>

### new OTN(title, tag)

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Required |
| tag | <code>string</code> | Optional |

**Example**  
```js
const otn = new OTN('When keyboards are available', 'keyboard')
```
<a name="Template"></a>

## *Template*
Base class of all response templates

**Kind**: global abstract class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | Optional delay in miliseconds for sending the response |
| quickReplies | [<code>Array.&lt;QuickReply&gt;</code>](#QuickReply) | Optional list of QuickReplies |


* *[Template](#Template)*
    * *[.delay](#Template+delay)*
    * *[.fallback](#Template+fallback)*
    * *[.addQuickReply(quickReply)](#Template+addQuickReply)*

<a name="Template+delay"></a>

### *template.delay*
Define a delay for the response in miliseconds

**Kind**: instance property of [<code>Template</code>](#Template)  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | Required |

<a name="Template+fallback"></a>

### *template.fallback*
Optional fallback speech

**Kind**: instance property of [<code>Template</code>](#Template)  

| Param | Type | Description |
| --- | --- | --- |
| fallback | <code>String</code> | Required |

<a name="Template+addQuickReply"></a>

### *template.addQuickReply(quickReply)*
Add a quick reply to the template

**Kind**: instance method of [<code>Template</code>](#Template)  

| Param | Type | Description |
| --- | --- | --- |
| quickReply | [<code>QuickReply</code>](#QuickReply) | Required |

<a name="Text"></a>

## Text
Template with a piece of text

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to show |

<a name="new_Text_new"></a>

### new Text()

| Param | Type | Description |
| --- | --- | --- |
| opts.text | <code>string</code> | Required |

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
<a name="Video"></a>

## Video
Template with a video

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the video |
| url | <code>string</code> | URL to the video |
| action | [<code>Action</code>](#Action) | Optional Action |

<a name="new_Video_new"></a>

### new Video()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

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
<a name="Phone"></a>

## Phone : <code>object</code>
IVR bot specific reply actions

**Kind**: global namespace  

* [Phone](#Phone) : <code>object</code>
    * [~Ask](#Phone.Ask)
        * [new Ask()](#new_Phone.Ask_new)
    * [~Dial](#Phone.Dial)
        * [new Dial()](#new_Phone.Dial_new)
    * [~Hangup](#Phone.Hangup)
        * [new Hangup()](#new_Phone.Hangup_new)
    * [~Pause](#Phone.Pause)
        * [new Pause()](#new_Phone.Pause_new)
    * [~Say](#Phone.Say)
        * [new Say(opts)](#new_Phone.Say_new)

<a name="Phone.Ask"></a>

### Phone~Ask
Send a message to a user asking for input

**Kind**: inner class of [<code>Phone</code>](#Phone)  
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

<a name="new_Phone.Ask_new"></a>

#### new Ask()
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
<a name="Phone.Dial"></a>

### Phone~Dial
Dial a number and forward the call

**Kind**: inner class of [<code>Phone</code>](#Phone)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| phoneNumber | <code>string</code> | The number of phoneNumber to delay |

<a name="new_Phone.Dial_new"></a>

#### new Dial()

| Param | Type | Description |
| --- | --- | --- |
| opts.phoneNumber | <code>string</code> | Required |

**Example**  
```js
const pause = new Dial(0.2)
```
<a name="Phone.Hangup"></a>

### Phone~Hangup
Disconnect

**Kind**: inner class of [<code>Phone</code>](#Phone)  
<a name="new_Phone.Hangup_new"></a>

#### new Hangup()
Disconnect a phone call

**Example**  
```js
const hangup = new Phone.Hangup()
```
<a name="Phone.Pause"></a>

### Phone~Pause
Pause a moment during the call

**Kind**: inner class of [<code>Phone</code>](#Phone)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| seconds | <code>float</code> | The number of seconds to delay |

<a name="new_Phone.Pause_new"></a>

#### new Pause()

| Param | Type | Description |
| --- | --- | --- |
| opts.seconds | <code>number</code> | Required |

**Example**  
```js
const pause = new Phone.Pause(0.2)
```
<a name="Phone.Say"></a>

### Phone~Say
Send a message to a user

**Kind**: inner class of [<code>Phone</code>](#Phone)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| speech | <code>string</code> | Text to speech |
| url | <code>string</code> | URL to an audio file |
| language | <code>string</code> | Optional language for text to speech |
| voice | <code>string</code> | Optional voice for text to speech |

<a name="new_Phone.Say_new"></a>

#### new Say(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | Configuration |
| opts.speech | <code>string</code> | Text to speech |
| opts.url | <code>string</code> | URL to audio File |
| opts.language | <code>string</code> | Optional language for text to speech |
| opts.voice | <code>string</code> | Optional voice for text to speech |

**Example**  
```js
const say = new Phone.Say({
  speech: "The weather is nice today!",
  language: "en-GB"
})
```
<a name="Apple"></a>

## Apple : <code>object</code>
Apple Business API specific reply actions

**Kind**: global namespace  

* [Apple](#Apple) : <code>object</code>
    * [~EventItem](#Apple.EventItem)
        * [new EventItem(opts)](#new_Apple.EventItem_new)
        * [.addTimeslot(item)](#Apple.EventItem+addTimeslot) ⇒ <code>EventItem</code>
    * [~ImageAsset](#Apple.ImageAsset)
        * [new ImageAsset(url, mimeType)](#new_Apple.ImageAsset_new)
    * [~InteractiveMessage](#Apple.InteractiveMessage)
        * [new InteractiveMessage(opts)](#new_Apple.InteractiveMessage_new)
    * [~ListPickerItem](#Apple.ListPickerItem)
        * [new ListPickerItem(opts)](#new_Apple.ListPickerItem_new)
    * [~ListPickerSection](#Apple.ListPickerSection)
        * [new ListPickerSection(opts)](#new_Apple.ListPickerSection_new)
        * [.addItem(item)](#Apple.ListPickerSection+addItem) ⇒ <code>ListPickerSection</code>
    * [~LocationItem](#Apple.LocationItem)
        * [new LocationItem(opts)](#new_Apple.LocationItem_new)
    * [~TimeItem](#Apple.TimeItem)
        * [new TimeItem(opts)](#new_Apple.TimeItem_new)
    * [~VideoAsset](#Apple.VideoAsset)
        * [new VideoAsset(url, mimeType)](#new_Apple.VideoAsset_new)
    * [~CustomInteractiveData](#Apple.CustomInteractiveData)
        * [new CustomInteractiveData(opts)](#new_Apple.CustomInteractiveData_new)
    * [~ListPicker](#Apple.ListPicker)
        * [new ListPicker(opts)](#new_Apple.ListPicker_new)
        * [.addSection(section)](#Apple.ListPicker+addSection) ⇒ <code>ListPicker</code>
    * [~RichLink](#Apple.RichLink)
        * [new RichLink(opts)](#new_Apple.RichLink_new)
        * [.addAsset(asset)](#Apple.RichLink+addAsset) ⇒ <code>RichLink</code>
    * [~TimePicker](#Apple.TimePicker)
        * [new TimePicker(opts)](#new_Apple.TimePicker_new)

<a name="Apple.EventItem"></a>

### Apple~EventItem
Component that represents an event inside a TimePicker

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| image | <code>string</code> | Optional URL to an image. The image should be a @3x image sized at 375 x 208 points (that is, 1125 x 624 pixels). |
| location | <code>LocationItem</code> | Describes a location |
| timeslots | <code>array</code> | A list of TimeItem objects |
| timezoneOffset | <code>integer</code> | An integer representing the number of minutes from GMT, specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location. |
| title | <code>string</code> | Required title |


* [~EventItem](#Apple.EventItem)
    * [new EventItem(opts)](#new_Apple.EventItem_new)
    * [.addTimeslot(item)](#Apple.EventItem+addTimeslot) ⇒ <code>EventItem</code>

<a name="new_Apple.EventItem_new"></a>

#### new EventItem(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Optional identifier |
| opts.image | <code>string</code> | Optional URL to an image. |
| opts.timeslots | <code>array</code> | Optional array of TimeItem objects |
| opts.timezoneOffset | <code>integer</code> | Optional integer representing the number of minutes from GMT |
| opts.title | <code>string</code> | Required title |

<a name="Apple.EventItem+addTimeslot"></a>

#### eventItem.addTimeslot(item) ⇒ <code>EventItem</code>
Add a TimeItem to the list of timeslots

**Kind**: instance method of [<code>EventItem</code>](#Apple.EventItem)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>TimeItem</code> | item |

<a name="Apple.ImageAsset"></a>

### Apple~ImageAsset
Component that represents a image asset

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the image |
| mimeType | <code>string</code> | Required. A string representing the format/type of the image; for example, image/jpeg, image/png |

<a name="new_Apple.ImageAsset_new"></a>

#### new ImageAsset(url, mimeType)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the image |
| mimeType | <code>string</code> | Required. The format/type of the image |

<a name="Apple.InteractiveMessage"></a>

### Apple~InteractiveMessage
Message that renders in a bubble either shown as the received message that allows a customer to open a List or time picker. Or as a reply message that is shown after a customer makes a selection,

**Kind**: inner class of [<code>Apple</code>](#Apple)  
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

<a name="new_Apple.InteractiveMessage_new"></a>

#### new InteractiveMessage(opts)

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

<a name="Apple.ListPickerItem"></a>

### Apple~ListPickerItem
Component that represents an item inside a ListPickerSection

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| image | <code>string</code> | Optional URL to a 30x30 image |
| order | <code>number</code> | Optional integer representing the ordinal position for the item |
| style | <code>string</code> | Optional item style. Defaults to default |
| title | <code>string</code> | Required title |
| subtitle | <code>string</code> | Optional subtitle |

<a name="new_Apple.ListPickerItem_new"></a>

#### new ListPickerItem(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.identifier | <code>string</code> | Optional Unique identifier |
| opts.image | <code>string</code> | Optional URL to a 30x30 image |
| opts.order | <code>Number</code> | Optional integer representing the ordinal position for the item |
| opts.style | <code>string</code> | Optional item style. Defaults to default |
| opts.title | <code>string</code> | Required title |
| opts.subtitle | <code>string</code> | Optional subtitle |

<a name="Apple.ListPickerSection"></a>

### Apple~ListPickerSection
Component that represents a section inside a ListPicker

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | A list of ListPickerItem objects |
| multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections within the section. Defaults to false |
| order | <code>Number</code> | An integer containing the ordinal position for the section |
| title | <code>string</code> | Required title |


* [~ListPickerSection](#Apple.ListPickerSection)
    * [new ListPickerSection(opts)](#new_Apple.ListPickerSection_new)
    * [.addItem(item)](#Apple.ListPickerSection+addItem) ⇒ <code>ListPickerSection</code>

<a name="new_Apple.ListPickerSection_new"></a>

#### new ListPickerSection(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.items | <code>array</code> | An array of ListPickerItem objects |
| opts.multipleSelection | <code>boolean</code> | Indicates whether the customer can make multiple selections within the section. Defaults to false |
| opts.order | <code>Number</code> | An integer containing the ordinal position for the section |
| opts.title | <code>string</code> | Required title |

<a name="Apple.ListPickerSection+addItem"></a>

#### listPickerSection.addItem(item) ⇒ <code>ListPickerSection</code>
Add a list item to the section

**Kind**: instance method of [<code>ListPickerSection</code>](#Apple.ListPickerSection)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>ListPickerItem</code> | item |

<a name="Apple.LocationItem"></a>

### Apple~LocationItem
Component that represents an item inside a LocationSection

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| latitude | <code>float</code> | A double representing the latitude of the location |
| longitude | <code>float</code> | A double representing the longitude of the location |
| radius | <code>float</code> | A double representing the location radius, in meters. Business Chat ignores this field when latitude and longitude are missing or empty. |
| title | <code>string</code> | Required title |

<a name="new_Apple.LocationItem_new"></a>

#### new LocationItem(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.latitude | <code>float</code> | Latitude of the location |
| opts.longitude | <code>float</code> | Longitude of the location |
| opts.radius | <code>float</code> | A double representing the location radius in meters |
| opts.title | <code>string</code> | Required title |

<a name="Apple.TimeItem"></a>

### Apple~TimeItem
Component that represents an item inside a TimeSection

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | Field identifying the item |
| duration | <code>float</code> | An integer representing the duration of the time slot, in seconds |
| startTime | <code>string</code> | A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2017-05-26T08:27:55+00:00, 2017-05-26T08:27:55+0000, or 2017-05-26T08:27:55Z. The timezoneOffset, from the EventItem dictionary, determines whether the startTime is in a specific time zone or in the customer's current time zone |

<a name="new_Apple.TimeItem_new"></a>

#### new TimeItem(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.duration | <code>float</code> | Required duration of the time slot, in seconds |
| opts.identifier | <code>string</code> | Optional Unique identifier |
| opts.startTime | <code>string</code> | Required UTC date string |

<a name="Apple.VideoAsset"></a>

### Apple~VideoAsset
Component that represents a video asset

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the video |
| mimeType | <code>string</code> | Required. A string representing the format/type of the video; for example, video/mp4, video/mpeg |

<a name="new_Apple.VideoAsset_new"></a>

#### new VideoAsset(url, mimeType)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required. URL to the video |
| mimeType | <code>string</code> | Required. The format/type of the video |

<a name="Apple.CustomInteractiveData"></a>

### Apple~CustomInteractiveData
Provide a unique user experience with custom interactive messages

**Kind**: inner class of [<code>Apple</code>](#Apple)  
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

<a name="new_Apple.CustomInteractiveData_new"></a>

#### new CustomInteractiveData(opts)

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
<a name="Apple.ListPicker"></a>

### Apple~ListPicker
Allow the customer to choose from a list of items

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sections | <code>array</code> | Required 1 or more ListPickerSection objects |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the ListPicker window |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business. |


* [~ListPicker](#Apple.ListPicker)
    * [new ListPicker(opts)](#new_Apple.ListPicker_new)
    * [.addSection(section)](#Apple.ListPicker+addSection) ⇒ <code>ListPicker</code>

<a name="new_Apple.ListPicker_new"></a>

#### new ListPicker(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.sections | <code>array</code> | An array of ListPickerSection objects |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the ListPicker window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer made a choice |

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
<a name="Apple.ListPicker+addSection"></a>

#### listPicker.addSection(section) ⇒ <code>ListPicker</code>
Add a section to the sections

**Kind**: instance method of [<code>ListPicker</code>](#Apple.ListPicker)  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>ListPickerSection</code> | section |

<a name="Apple.RichLink"></a>

### Apple~RichLink
Enhance the customer's experience by allowing them to preview inline content.

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Required title |
| url | <code>string</code> | Required. URL to the linked web page |
| assets | <code>array</code> | Required. List of media assets like images or videos |


* [~RichLink](#Apple.RichLink)
    * [new RichLink(opts)](#new_Apple.RichLink_new)
    * [.addAsset(asset)](#Apple.RichLink+addAsset) ⇒ <code>RichLink</code>

<a name="new_Apple.RichLink_new"></a>

#### new RichLink(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.title | <code>string</code> | Required title |
| opts.url | <code>string</code> | Required. URL to the linked web page |
| opts.assets | <code>array</code> | Required. List of media assets like images or videos |

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
<a name="Apple.RichLink+addAsset"></a>

#### richLink.addAsset(asset) ⇒ <code>RichLink</code>
Add an asset to the list of media assets

**Kind**: instance method of [<code>RichLink</code>](#Apple.RichLink)  

| Param | Type | Description |
| --- | --- | --- |
| asset | <code>Asset</code> | asset |

<a name="Apple.TimePicker"></a>

### Apple~TimePicker
Allow the customer to schedule an appointment

**Kind**: inner class of [<code>Apple</code>](#Apple)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>EventItem</code> | Required. Represents the event to pick a time for |
| receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the TimePicker window |
| replyMessage | <code>InteractiveMessage</code> | Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business. |

<a name="new_Apple.TimePicker_new"></a>

#### new TimePicker(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | Collection of options |
| opts.event | <code>EventItem</code> | Represents the event to pick a time for |
| opts.receivedMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown to the customer to open the TimePicker window |
| opts.replyMessage | <code>InteractiveMessage</code> | Required. Message bubble that is shown when the customer made a choice |

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
