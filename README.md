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
<dd><p>Button used in Card, Buttons templates etc.</p>
</dd>
<dt><a href="#Card">Card</a></dt>
<dd><p>Composed of an image attachment, short description and buttons to request input from the user.</p>
</dd>
</dl>

<a name="Button"></a>

## Button
Button used in Card, Buttons templates etc.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |

<a name="new_Button_new"></a>

### new Button(type, label, value)

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Enum, url, postback etc |
| label | <code>string</code> | Label of the label |
| value | <code>string</code> | URL, value tom postback |

<a name="Card"></a>

## Card
Composed of an image attachment, short description and buttons to request input from the user.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of button |
| label | <code>string</code> | Label of the button |
| value | <code>string</code> | Value of the button |

<a name="new_Card_new"></a>

### new Card(type, label, value)

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Enum, url, postback etc |
| label | <code>string</code> | Label of the label |
| value | <code>string</code> | URL, value tom postback |

