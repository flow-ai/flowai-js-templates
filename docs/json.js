const fs = require('fs'),
      {
        Message,
        Text,
        Card,
        Button,
        Media,
        Audio,
        Carousel,
        Custom,
        File,
        Image,
        List,
        ListItem,
        Location,
        Action,
        Video,
        Buttons,
        Param,
        QuickReply,
        Phone
      } = require('../lib')

const doc = {
  _lines: [],
  write: (obj) => {
    if(typeof obj === 'object') {
      doc._lines.push('```json\n' + JSON.stringify(obj, null, ' ') + '\n```')
    } else if(typeof obj === 'string') {
      doc._lines.push(obj)
    }
  },
  output: (dest) => {
    fs.writeFile(dest, doc._lines.join('\n\n'), 'utf8', (err) => {
      if (err) {
        return console.error(err)
      }
    })
  }
}

// Prelude
doc.write('# JSON Response Templates')
doc.write('The flowai-js-templates package provides helper classes to easily create response templates and messages.')
doc.write('It\'s not mandatory to use it and only available for Node.js and JavaScript at the moment. Underneath the surface these templates transform to simple JSON data.')
doc.write('This document provides examples of these JSON messages. It\'s use case is usually in combination with a Webhook integration.')

// - Webhook
doc.write('## Webhooks and code action')
doc.write('Webhooks and code actions can send messages to users by replying with structured JSON data.')

doc.write('### Simple reply')
const message = new Message("Hi there")
doc.write({
  verifyToken: '55e52581-9a75-4073-933f-983a630ad4df',
  messages: [message]
})

doc.write('#### Structure')
doc.write('- `verifyToken` is mandatory and can be found within the Flow.ai Webhook configuration')
doc.write('- `messages` optional list with reply messages')
doc.write('- `events` optional list with names of events to trigger')

// - card
doc.write('### Advanced reply')
doc.write('The following example shows sending back an example weather report.')
doc.write('Along with a rich card response we send a fallback text that is read on speech only devices')
doc.write('This example does not only send back a message, but will also trigger a flow with an event called `TRIGGER_EVENT_NAME`')

const button1 = new Button({
  label: "Forecast for today",
  type: "url",
  value: "https://weatherforcastexample.com"
})

const button2 = new Button({
  label: "Weather this week",
  type: "url",
  value: "https://weatherforcastexample.com/week"
})

const card = new Card({
  title: "Weather report",
  subtitle: "Cloudy with a max temperature of 20∘ celcius",
  media: new Media({
    url: "http://weatherforcastexample/today.png",
    type: "image"
  })
})
.addButton(button1)
.addButton(button2)

card.delay = 1000

const message1 = new Message("Today it's cloudy with a max temperature of 20 degrees celcius")
message1.addResponse(card)

doc.write({
  verifyToken: '55e52581-9a75-4073-933f-983a630ad4df',
  messages: [message1],
  events: [{
    name: 'TRIGGER_EVENT_NAME'
  }]
})

// Messages
doc.write('## Message')
doc.write('Response templates are part of a message. The following is an example of a simple message that has a single text response')

doc.write(new Message("Hi there"))

// Messages
doc.write('### Response template')

const text = new Text('Want a free soda?')
text.addQuickReply(new QuickReply({
  label: 'Yes',
  value: 'yes'
}))
text.addQuickReply(new QuickReply({
  label: 'No',
  value: 'no'
}))
doc.write(text)

doc.write('#### Structure')
doc.write('- `fallback` mandatory message that represents the entire message')
doc.write('- `responses` array that contains at least one response template')

doc.write('### Templates')
doc.write('The following templates are supported')

doc.write('#### Audio')
doc.write(new Audio({
  title: "Awesome somng",
  url: "https://example.com/awesomesong.mp3",
  action: new Action({
    type: 'url',
    value: 'https://example.com/awesomesong/info'
  })
}))

doc.write('#### Buttons')
doc.write(new Buttons("Vintage bikes and more")
  .addButton(new Button({
    label: "View website",
    type: "url",
    value: "http://example.com"
  }))
  .addButton(new Button({
    label: "Special offers",
    type: "postback",
    value: "Show me special offers"
  })))

doc.write('#### Card')
doc.write(card)

doc.write('#### Carousel')

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
doc.write(carousel)

doc.write('#### Custom')
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

doc.write(custom)

doc.write('#### File')
const file = new File({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
doc.write(file)

doc.write('#### Image')
const image = new Image({
  title: "Pretty picture",
  url: "https://...",
  action: new Action({
    type: 'event',
    value: 'ORDER',
    param: new Param('productId', '12e2-22342-aasd2')
  })
})
doc.write(image)

doc.write('#### List')

const item1 = new ListItem({
  title: "40\" LED TV",
  subtitle: "Crystal clear screen",
  media: new Media({
    url: "https://...",
    type: "image"
  }),
  action: new Action({
    type: 'webview',
    value: 'https://..'
  })
})

const item2 = new ListItem({
  title: "50\" LED TV",
  subtitle: "Big, bad and bold",
  media: new Media({
    url: "https://...",
    type: "image"
  }),
  action: new Action({
    type: 'webview',
    value: 'https://..'
  })
})

const list = new List()
list.addItem(item1)
list.addItem(item2)
doc.write(list)

doc.write('#### Location')

const location = new Location({
  title: "Infinite Loop 1",
  lat: "37.331860",
  long: "-122.030248",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
doc.write(location)


doc.write('#### Video')
const video = new Video({
  title: "Awesome title",
  url: "https://...",
  action: new Action({
    type: 'url',
    value: 'https://...'
  })
})
doc.write(video)

doc.write('### Params')
doc.write('Buttons and QuickReplies can have various actions. They can open a URL, trigger a postback or event.')
doc.write('When these are triggered with the type event or postback you can also send data to be used further on in your code.')

const productParam = new Param('itemId', '332223323')
const buttonsWithParams = new Buttons("Longboard Droprace ($150)")
  .addButton(new Button({
    label: 'Show details',
    type: 'event',
    value: 'PRODUCT_DETAILS',
    param: productParam
  }))
  .addButton(new Button({
    label: 'Find store',
    type: 'event',
    value: 'FIND_STORE_BY_PRODUCT',
    param: productParam
  }))

doc.write(new Message("Longboard Droprace, $150, black").addResponse(buttonsWithParams))

doc.write('Or with QuickReplies:')
const shopId = new Param('shopId', '33211233')
const productId = new Param('productId', '123443211')
doc.write(new Message("Want a cold beverage?")
 .addQuickReply(new QuickReply({
   label: 'Yes',
   type: 'event',
   value: 'PRODUCT_ORDER',
   param: [shopId, productId]
 }))
 .addQuickReply(new QuickReply({
   label: 'No'
 })))


doc.write('## Phone')
doc.write('Specific templates for phone responses.')

doc.write('### Say')

doc.write(new Phone.Say({
  speech: "The time is ..."
}))

doc.output('JSON.md')
