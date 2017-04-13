# The flow.ai Javascript Response Templates
Easy helper classes to create rich [flow.ai](https://flow.ai) response templates like cards, buttons and locations.

Reponse templates allow developers to render widgets at channels that support this like Facebook Messenger or the flow.ai Web client.

## What can you do?

* No need to write error prone JSON
* Full support for all template types

## Getting started
All classes are available for usage with Flow.ai Cloud functions.

### Install
When you want to send rich responses using a webhook, install the library with NPM.

```bash
npm install --save flowai-js-templates
```

### Usage
When writing a Cloud function there is no need to require or import anything.

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
<dt><a href="#QuickReply">QuickReply</a></dt>
<dd><p>Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.</p>
</dd>
<dt><a href="#Buttons">Buttons</a></dt>
<dd><p>Template with a short description and buttons to request input from the user.</p>
</dd>
<dt><a href="#Card">Card</a></dt>
<dd><p>Template composed of an image attachment, short description and buttons to request input from the user.</p>
</dd>
<dt><a href="#Carousel">Carousel</a></dt>
<dd><p>Template that displays a set of cards</p>
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
</dl>

<a name="Action"></a>

## Action
Default action used in Card, List and Buttons templates

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of action (url, postback etc) |
| value | <code>string</code> | Value of the action |

<a name="new_Action_new"></a>

### new Action()

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |

<a name="Button"></a>

## Button
Component used in Card, Buttons templates

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button (url, postback etc) |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |

<a name="new_Button_new"></a>

### new Button()

| Param | Type | Description |
| --- | --- | --- |
| opts.type | <code>string</code> | Required |
| opts.label | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |

<a name="ListItem"></a>

## ListItem
Item within a List

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of the list item |
| subtitle | <code>string</code> | Optional subtitle |
| image | <code>[Media](#Media)</code> | Optional Media |
| action | <code>[Action](#Action)</code> | Optional Action |
| buttons | <code>[Array.&lt;Button&gt;](#Button)</code> | Optional set of buttons |
| action | <code>[Action](#Action)</code> | Optional Action that is triggered when a user interacts with the list item |


* [ListItem](#ListItem)
    * [new ListItem()](#new_ListItem_new)
    * [.addButton(button)](#ListItem+addButton) ⇒ <code>[ListItem](#ListItem)</code>

<a name="new_ListItem_new"></a>

### new ListItem()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.image | <code>string</code> | Optional |
| opts.action | <code>string</code> | Optional |

<a name="ListItem+addButton"></a>

### listItem.addButton(button) ⇒ <code>[ListItem](#ListItem)</code>
Add a button to the list item

**Kind**: instance method of <code>[ListItem](#ListItem)</code>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>[Button](#Button)</code> | button |

<a name="Media"></a>

## Media
Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to the media file |

<a name="new_Media_new"></a>

### new Media(url)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Required |

<a name="QuickReply"></a>

## QuickReply
Component placed on any Template. Represents a shortcut for a user to reply with. Ideal for yes / no type of questions.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | UI label |
| value | <code>string</code> |  |

<a name="new_QuickReply_new"></a>

### new QuickReply()

| Param | Type | Description |
| --- | --- | --- |
| opts.label | <code>string</code> | Required |
| opts.value | <code>string</code> | Required |

<a name="Buttons"></a>

## Buttons
Template with a short description and buttons to request input from the user.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the buttons |
| buttons | <code>[Array.&lt;Button&gt;](#Button)</code> | Optional set of buttons |


* [Buttons](#Buttons)
    * [new Buttons()](#new_Buttons_new)
    * [.addButton(button)](#Buttons+addButton) ⇒ <code>[Button](#Button)</code>

<a name="new_Buttons_new"></a>

### new Buttons()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |

<a name="Buttons+addButton"></a>

### buttons.addButton(button) ⇒ <code>[Button](#Button)</code>
Add a button to the buttons

**Kind**: instance method of <code>[Buttons](#Buttons)</code>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>[Button](#Button)</code> | button |

<a name="Card"></a>

## Card
Template composed of an image attachment, short description and buttons to request input from the user.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Main title of the card |
| subtitle | <code>string</code> | Optional subtitle |
| image | <code>[Media](#Media)</code> | Optional Media |
| action | <code>[Action](#Action)</code> | Optional Action |
| buttons | <code>[Array.&lt;Button&gt;](#Button)</code> | Optional set of buttons |
| action | <code>[Action](#Action)</code> | Optional Action that is triggered when a user interacts with the card |


* [Card](#Card)
    * [new Card()](#new_Card_new)
    * [.addButton(button)](#Card+addButton) ⇒ <code>[Card](#Card)</code>

<a name="new_Card_new"></a>

### new Card()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.image | <code>string</code> | Optional |
| opts.action | <code>string</code> | Optional |

<a name="Card+addButton"></a>

### card.addButton(button) ⇒ <code>[Card](#Card)</code>
Add a button to the card

**Kind**: instance method of <code>[Card](#Card)</code>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>[Button](#Button)</code> | button |

<a name="Carousel"></a>

## Carousel
Template that displays a set of cards

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cards | <code>[Array.&lt;Card&gt;](#Card)</code> | Set of cards |

<a name="Carousel+addCard"></a>

### carousel.addCard(card) ⇒ <code>[Carousel](#Carousel)</code>
Add a card to the cards

**Kind**: instance method of <code>[Carousel](#Carousel)</code>  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>[Card](#Card)</code> | card |

<a name="Image"></a>

## Image
Template with a image

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Describes the image |
| url | <code>string</code> | URL to the image |
| action | <code>[Action](#Action)</code> | Optional Action |

<a name="new_Image_new"></a>

### new Image()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.url | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

<a name="List"></a>

## List
Template that displays a set of list items

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>[Array.&lt;ListItem&gt;](#ListItem)</code> | Set of list items |

<a name="List+addItem"></a>

### list.addItem(item) ⇒ <code>[List](#List)</code>
Add a item to the items

**Kind**: instance method of <code>[List](#List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>[ListItem](#ListItem)</code> | item |

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
| action | <code>[Action](#Action)</code> | Optional Action |

<a name="new_Location_new"></a>

### new Location()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.lat | <code>string</code> | Required |
| opts.long | <code>string</code> | Required |
| opts.action | <code>string</code> | Optional |

<a name="Template"></a>

## *Template*
Base class of all response templates

**Kind**: global abstract class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| quickReplies | <code>[Array.&lt;QuickReply&gt;](#QuickReply)</code> | Optional list of QuickReplies |

<a name="Template+addQuickReply"></a>

### *template.addQuickReply(quickReply)*
Add a quick reply to the template

**Kind**: instance method of <code>[Template](#Template)</code>  

| Param | Type | Description |
| --- | --- | --- |
| quickReply | <code>[QuickReply](#QuickReply)</code> | Required |

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

