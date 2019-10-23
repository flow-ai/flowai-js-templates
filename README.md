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
(function(payload,originator,done) {

  // Create a speech bubble
  const text = new Text("Hi there!")

  // Create a message with fallback text
  const message = new Message("Hi, there")
  message.addResponse(text)

  return message
})
```

##### Sending a single message with multiple responses
```js
(function(payload,originator,done) {

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
})
```

##### Sending back multiple messages
```js
(function(payload,originator,done) {

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
})
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

## Functions

<dl>
<dt><a href="#parseParam">parseParam()</a></dt>
<dd><p>Helper method to convert a list of params</p>
</dd>
<dt><a href="#flattenParams">flattenParams()</a></dt>
<dd><p>Helper method to convert params into the expected format</p>
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
<a name="parseParam"></a>

## parseParam()
Helper method to convert a list of params

**Kind**: global function  
<a name="flattenParams"></a>

## flattenParams()
Helper method to convert params into the expected format

**Kind**: global function  
