# The flow.ai Javascript Response Templates
Easy helper to create [flow.ai](https://flow.ai) templates like cards, buttons and locations.

Templates allow developers to render widgets at channels that support this like Facebook Messenger or the flow.ai Web client.

## What can you do?

*	Reduce code and formatting errors
* Full support for all template types
* No need to use JSON

# Reference
## Classes

<dl>
<dt><a href="#Button">Button</a></dt>
<dd><p>Component used in Card, Buttons templates</p>
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
<dt><a href="#Template">Template</a></dt>
<dd><p>Base class of all response templates</p>
</dd>
</dl>

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
| opts.type | <code>string</code> | Requiresd |
| opts.label | <code>string</code> | Requiresd |
| opts.value | <code>string</code> | Requiresd |

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
    * [.addButton(button)](#Buttons+addButton)

<a name="new_Buttons_new"></a>

### new Buttons()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |

<a name="Buttons+addButton"></a>

### buttons.addButton(button)
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
| buttons | <code>[Array.&lt;Button&gt;](#Button)</code> | Optional set of buttons |
| action | <code>Action</code> | Optional Action that is triggered when a user interacts with the card |


* [Card](#Card)
    * [new Card()](#new_Card_new)
    * [.addButton(button)](#Card+addButton)

<a name="new_Card_new"></a>

### new Card()

| Param | Type | Description |
| --- | --- | --- |
| opts.title | <code>string</code> | Required |
| opts.subtitle | <code>string</code> | Optional |
| opts.image | <code>string</code> | Optional |

<a name="Card+addButton"></a>

### card.addButton(button)
Add a button to the card

**Kind**: instance method of <code>[Card](#Card)</code>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>[Button](#Button)</code> | button |

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

