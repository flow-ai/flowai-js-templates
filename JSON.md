# JSON Response Templates

The flowai-js-templates package provides helper classes to easily create response templates and messages.

It's not mandatory to use it and only available for Node.js and JavaScript at the moment. Underneath the surface these templates transform to simple JSON data.

This document provides examples of these JSON messages. It's use case is usually in combination with a Webhook integration.

## Webhooks and code action

Webhooks and code actions can send messages to users by replying with structured JSON data.

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
     }
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

The following example shows sending back an example weather report.

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
        "value": "https://weatherforcastexample.com",
        "newTab": false,
        "id": "bWx6KWegc"
       },
       {
        "type": "url",
        "label": "Weather this week",
        "value": "https://weatherforcastexample.com/week",
        "newTab": false,
        "id": "bHr9Uanme"
       }
      ]
     },
     "delay": 1000
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
   }
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
    "type": "text",
    "params": {},
    "tags": {}
   },
   {
    "label": "No",
    "value": "no",
    "type": "text",
    "params": {},
    "tags": {}
   }
  ]
 }
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
 }
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
    "value": "http://example.com",
    "newTab": false,
    "id": "bj9SDbFis"
   },
   {
    "type": "postback",
    "label": "Special offers",
    "value": "Show me special offers",
    "newTab": false,
    "id": "bJuzgjZmF"
   }
  ]
 }
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
    "value": "https://weatherforcastexample.com",
    "newTab": false,
    "id": "bWx6KWegc"
   },
   {
    "type": "url",
    "label": "Weather this week",
    "value": "https://weatherforcastexample.com/week",
    "newTab": false,
    "id": "bHr9Uanme"
   }
  ]
 },
 "delay": 1000
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
 }
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
    "type": "text",
    "params": {},
    "tags": {}
   }
  ]
 }
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
 }
}
```

#### Image

```json
{
 "type": "image",
 "payload": {
  "title": "Pretty picture",
  "url": "https://...",
  "action": {
   "type": "event",
   "value": "ORDER",
   "params": {
    "productId": [
     {
      "value": "12e2-22342-aasd2"
     }
    ]
   }
  }
 }
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
 }
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
 }
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
 }
}
```

### Params

Buttons and QuickReplies can have various actions. They can open a URL, trigger a postback or event.

When these are triggered with the type event or postback you can also send data to be used further on in your code.

```json
{
 "fallback": "Longboard Droprace, $150, black",
 "responses": [
  {
   "type": "buttons",
   "payload": {
    "title": "Longboard Droprace ($150)",
    "buttons": [
     {
      "type": "event",
      "label": "Show details",
      "value": "PRODUCT_DETAILS",
      "newTab": false,
      "params": {
       "itemId": [
        {
         "value": "332223323"
        }
       ]
      },
      "id": "bM2LZ4-Wz"
     },
     {
      "type": "event",
      "label": "Find store",
      "value": "FIND_STORE_BY_PRODUCT",
      "newTab": false,
      "params": {
       "itemId": [
        {
         "value": "332223323"
        }
       ]
      },
      "id": "brhbOtpRG"
     }
    ]
   }
  }
 ]
}
```

Or with QuickReplies:

```json
{
 "fallback": "Want a cold beverage?",
 "responses": [
  {
   "type": "text",
   "payload": {
    "text": "Want a cold beverage?",
    "quickReplies": [
     {
      "label": "Yes",
      "value": "PRODUCT_ORDER",
      "type": "event",
      "params": {
       "shopId": [
        {
         "value": "33211233"
        }
       ],
       "productId": [
        {
         "value": "123443211"
        }
       ]
      },
      "tags": {}
     },
     {
      "label": "No",
      "value": "No",
      "type": "text",
      "params": {},
      "tags": {}
     }
    ]
   }
  }
 ]
}
```

## Phone

Specific templates for phone responses.

### Say

```json
{
 "type": "phone_say",
 "payload": {
  "speech": "The time is ...",
  "voice": "google"
 }
}
```