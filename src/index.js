/** 
 * @namespace Generic
 * @description 
 * IVR bot specific reply templates
 **/
import Generic from './generic'

/** 
 * @namespace Phone
 * @description 
 * IVR bot specific reply templates
 **/
import Phone from './phone'

/** 
 * @namespace Messenger
 * @description 
 * Facebook Messenger specific reply templates
 **/
import Messenger from './messenger'

/** 
 * @namespace Apple
 * @description 
 * Apple Business API specific reply templates
 **/
import Apple from './apple'

/** 
 * @namespace GBM
 * @description 
 * Google Business Messages specific reply templates
 **/
import GBM from './gbm'

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
  GBM
}
