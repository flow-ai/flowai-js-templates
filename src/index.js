import Message from './generic/message'

import Card from './generic/templates/card'
import Text from './generic/templates/text'
import Image from './generic/templates/image'
import Video from './generic/templates/video'
import Audio from './generic/templates/audio'
import File from './generic/templates/file'
import Buttons from './generic/templates/buttons'
import Carousel from './generic/templates/carousel'
import List from './generic/templates/list'
import Location from './generic/templates/location'
import Custom from './generic/templates/custom'
import Note from './generic/templates/note'
import Action from './generic/components/action'
import Button from './generic/components/button'
import Media from './generic/components/media'
import ListItem from './generic/components/listItem'
import { Param } from './generic/components/param'
import QuickReply from './generic/components/quickReply'

import Say from './phone/templates/say'
import Hangup from './phone/templates/hangup'
import Pause from './phone/templates/pause'
import Ask from './phone/templates/ask'
import Dial from './phone/templates/dial'
import Handover from './phone/templates/handover'

/**
 * @namespace
 * @description
>>>>>>> master
 * IVR bot specific reply templates
 **/
import Generic from './generic'

/** 
 * @namespace Phone
 * @description 
 * IVR bot specific reply templates
 **/
import Phone from './phone'
const Phone = {
   Say,
   Hangup,
   Pause,
   Ask,
   Dial,
   Handover
}

/** 
 * @namespace Messenger
 * @description 
 * Facebook Messenger specific reply templates
 **/
import Messenger from './messenger'


/**
 * @namespace
 * @description
 * Apple Business API specific reply templates
 **/
const Apple = {
   ImageAsset,
   VideoAsset,
   RichLink,
   ListPicker,
   ListPickerSection,
   ListPickerItem,
   TimePicker,
   InteractiveMessage,
   LocationItem,
   EventItem,
   TimeItem,
   CustomInteractiveData,
   AuthRequest,
   Oauth2,
   PayRequest,
   PayEndpoints,
   PayMerchant,
   PayLineItem,
   PayShippingMethod
}

/** 
 * @namespace GBM
 * @description 
 * Google Business Messages specific reply templates
 **/
import GBM from './gbm'


/** 
 * @namespace WhatsApp
 * @description 
 * Google Business Messages specific reply templates
 **/
import WhatsApp from './whatsapp'

/**
 * @namespace
 * @description
 * Facebook Messenger specific reply templates
 **/
const Messenger = {
   OTN,
   Products,
   Receipt,
   ReceiptAddress,
   ReceiptAdjustment,
   ReceiptElement,
   ReceiptSummary
}


// Twitter templates
import PublicReply from './twitter/templates/publicReply'

/**
 * @namespace
 * @description
 * Twitter specific reply templates
 */
const Twitter = {
   PublicReply
}

// Khoros templates
import Priority from './khoros/templates/priority'

const Khoros = {
   Priority
}


const {
  Message,
  Text,
  Card,
  Image,
  Video,
  Audio,
  File,
  Buttons,
  Carousel,
  List,
  Location,
  Custom,
  Note,
  Action,
  Button,
  Media,
  ListItem,
  Param,
  QuickReply
} = Generic

export {
  Message,
  Text,
  Card,
  Image,
  Video,
  Audio,
  File,
  Buttons,
  Carousel,
  List,
  Location,
  Custom,
  Note,
  Action,
  Button,
  Media,
  ListItem,
  Param,
  QuickReply,
  Generic,
  Phone,
  Apple,
  Messenger,
  GBM,
  WhatsApp,
  Twitter,
  Khoros
}
