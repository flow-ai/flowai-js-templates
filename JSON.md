# JSON Response Templates

The flowai-js-templates package provides helper classes to easily create response templates and messages.

It's not mandatory to use it and only available for Node.js and JavaScript at the moment. Underneath the surface these templates transform to simple JSON data.

This document provides examples of these JSON messages. It's use case is usually in combination with a Webhook integration.

## Webhooks

Webhooks can send messages to users by replying with structured JSON data.

### Simple reply

```json
{
 "verifyToken": "55e52581-9a75-4073-933f-983a630ad4df",
 "messages": [
  {
   "fallback": "Hi there",
   "responses": [
    {
     "type": "text",
     "payload": {
      "text": "Hi there"
     },
     "delay": 0
    }
   ]
  }
 ]
}
```

#### Structure

- `verifyToken` is mandatory and can be found within the Flow.ai Webhook configuration

- `messages` optional list with reply messages

- `events` optional list with names of events to trigger

### Advanced reply

The following example shows sending back an exmple weather report.

Along with a rich card response we send a fallback text that is read on speech only devices

This example does not only send back a message, but will also trigger a flow with an event called `TRIGGER_EVENT_NAME`

```json
{
 "verifyToken": "55e52581-9a75-4073-933f-983a630ad4df",
 "messages": [
  {
   "fallback": "Today it's cloudy with a max temperature of 20 degrees celcius",
   "responses": [
    {
     "type": "card",
     "payload": {
      "title": "Weather report",
      "subtitle": "Cloudy with a max temperature of 20∘ celcius",
      "media": {
       "url": "http://weatherforcastexample/today.png",
       "type": "image"
      },
      "buttons": [
       {
        "type": "url",
        "label": "Forecast for today",
        "value": "https://weatherforcastexample.com"
       },
       {
        "type": "url",
        "label": "Weather this week",
        "value": "https://weatherforcastexample.com/week"
       }
      ]
     },
     "delay": 0
    }
   ]
  }
 ],
 "events": [
  {
   "name": "TRIGGER_EVENT_NAME"
  }
 ]
}
```

## Message

Response templates are part of a message. The following is an example of a simple message that has a single text response

```json
{
 "fallback": "Hi there",
 "responses": [
  {
   "type": "text",
   "payload": {
    "text": "Hi there"
   },
   "delay": 0
  }
 ]
}
```

### Response template

```json
{
 "type": "text",
 "payload": {
  "text": "Want a free soda?",
  "quickReplies": [
   {
    "label": "Yes",
    "value": "yes",
    "type": "text"
   },
   {
    "label": "No",
    "value": "no",
    "type": "text"
   }
  ]
 },
 "delay": 0
}
```

#### Structure

- `fallback` mandatory message that represents the entire message

- `responses` array that contains at least one response template

### Templates

The following templates are supported

#### Audio

```json
{
 "type": "audio",
 "payload": {
  "title": "Awesome somng",
  "url": "https://example.com/awesomesong.mp3",
  "action": {
   "type": "url",
   "value": "https://example.com/awesomesong/info"
  }
 },
 "delay": 0
}
```

#### Buttons

```json
{
 "type": "buttons",
 "payload": {
  "title": "Vintage bikes and more",
  "buttons": [
   {
    "type": "url",
    "label": "View website",
    "value": "http://example.com"
   },
   {
    "type": "postback",
    "label": "Special offers",
    "value": "Show me special offers"
   }
  ]
 },
 "delay": 0
}
```

#### Card

```json
{
 "type": "card",
 "payload": {
  "title": "Weather report",
  "subtitle": "Cloudy with a max temperature of 20∘ celcius",
  "media": {
   "url": "http://weatherforcastexample/today.png",
   "type": "image"
  },
  "buttons": [
   {
    "type": "url",
    "label": "Forecast for today",
    "value": "https://weatherforcastexample.com"
   },
   {
    "type": "url",
    "label": "Weather this week",
    "value": "https://weatherforcastexample.com/week"
   }
  ]
 },
 "delay": 0
}
```

#### Carousel

```json
{
 "type": "carousel",
 "payload": {
  "cards": [
   {
    "title": "Awesome title 1",
    "subtitle": "Some subtitle 1",
    "media": {
     "url": "https://...",
     "type": "image"
    }
   },
   {
    "title": "Awesome title 2",
    "subtitle": "Some subtitle 2",
    "media": {
     "url": "https://...",
     "type": "image"
    }
   }
  ]
 },
 "delay": 0
}
```

#### Custom

```json
{
 "type": "custom",
 "payload": {
  "title": "Big screen TV",
  "brand": "Awesome Elec.",
  "catId": 35633123322,
  "prices": {
   "EURO": 1800,
   "DOLLAR": "2400"
  },
  "quickReplies": [
   {
    "label": "Order now",
    "value": "order 35633123322",
    "type": "text"
   }
  ]
 },
 "delay": 0
}
```

#### File

```json
{
 "type": "file",
 "payload": {
  "title": "Awesome title",
  "url": "https://...",
  "action": {
   "type": "url",
   "value": "https://..."
  }
 },
 "delay": 0
}
```

#### Image

```json
{
 "type": "image",
 "payload": {
  "title": "Awesome title",
  "url": "https://...",
  "action": {
   "type": "url",
   "value": "https://..."
  }
 },
 "delay": 0
}
```

#### List

```json
{
 "type": "list",
 "payload": {
  "items": [
   {
    "title": "40\" LED TV",
    "subtitle": "Crystal clear screen",
    "media": {
     "url": "https://...",
     "type": "image"
    },
    "action": {
     "type": "webview",
     "value": "https://.."
    }
   },
   {
    "title": "50\" LED TV",
    "subtitle": "Big, bad and bold",
    "media": {
     "url": "https://...",
     "type": "image"
    },
    "action": {
     "type": "webview",
     "value": "https://.."
    }
   }
  ]
 },
 "delay": 0
}
```

#### Location

```json
{
 "type": "location",
 "payload": {
  "title": "Infinite Loop 1",
  "lat": "37.331860",
  "long": "-122.030248",
  "action": {
   "type": "url",
   "value": "https://..."
  }
 },
 "delay": 0
}
```

#### Video

```json
{
 "type": "video",
 "payload": {
  "title": "Awesome title",
  "url": "https://...",
  "action": {
   "type": "url",
   "value": "https://..."
  }
 },
 "delay": 0
}
```