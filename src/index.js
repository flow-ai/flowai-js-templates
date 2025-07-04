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
import { Param } from './base/components/param'
import QuickReply from './generic/components/quickReply'
import Handover from './generic/templates/handover'
import ButtonTrigger from './generic/components/buttonTrigger'
import Webview from './generic/templates/webview'

import Say from './phone/templates/say'
import Hangup from './phone/templates/hangup'
import Pause from './phone/templates/pause'
import Ask from './phone/templates/ask'
import Dial from './phone/templates/dial'
import PhoneHandover from './phone/templates/handover'

/**
 * @namespace
 * @description
 * IVR bot specific reply templates
 **/
import Generic from './generic'

// Apple templates
import ImageAsset from './apple/components/imageAsset'
import VideoAsset from './apple/components/videoAsset'
import InteractiveMessage from './apple/components/interactiveMessage'
import LocationItem from './apple/components/locationItem'
import EventItem from './apple/components/eventItem'
import TimeItem from './apple/components/timeItem'
import ListPickerSection from './apple/components/listPickerSection'
import ListPickerItem from './apple/components/listPickerItem'
import RichLink from './apple/templates/richLink'
import ListPicker from './apple/templates/listPicker'
import TimePicker from './apple/templates/timePicker'
import CustomInteractiveData from './apple/templates/customInteractiveData'
import Oauth2 from './apple/components/oauth2'
import AuthRequest from './apple/templates/authRequest'
import PayRequest from './apple/templates/payRequest'
import PayEndpoints from './apple/components/payEndpoints'
import PayMerchant from './apple/components/payMerchant'
import PayLineItem from './apple/components/payLineItem'
import PayShippingMethod from './apple/components/payShippingMethod'


// Messenger templates
import OTN from './messenger/templates/otn'
import Products from './messenger/templates/products'
import Receipt from './messenger/templates/receipt'
import ReceiptAddress from './messenger/components/receipt/address'
import ReceiptAdjustment from './messenger/components/receipt/adjustment'
import ReceiptElement from './messenger/components/receipt/element'
import ReceiptSummary from './messenger/components/receipt/summary'
import PublicFbReply from './messenger/templates/publicReply'

//Line templates
import Sticker from './line/templates/sticker'

// Workflows templates
import AgentText from './workflows/templates/agentText'

/** 
 * @namespace Phone
 * @description 
 * IVR bot specific reply templates
 **/
const Phone = {
   Say,
   Hangup,
   Pause,
   Ask,
   Dial,
   Handover: PhoneHandover
}

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
 * @namespace RBM
 * @description 
 * Google Business Messages specific reply templates
 **/
import RBM from './rbm'


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
   PublicFbReply,
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
import { SystemReply } from './khoros'

const Khoros = {
   Priority,
   SystemReply
}

const Line = {
   Sticker
}

/**
 * @namespace Workflows
 * @description Workflows specific reply templates
 **/
const Workflows = {
   AgentText
}

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
  Handover,
  Action,
  Button,
  ButtonTrigger,
  Media,
  ListItem,
  Param,
  QuickReply,
  Generic,
  Phone,
  Apple,
  Messenger,
  GBM,
  RBM,
  WhatsApp,
  Twitter,
  Khoros,
  Line,
  Workflows,
  Webview
}
