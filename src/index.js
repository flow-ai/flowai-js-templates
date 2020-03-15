
import Message from './message'

import Card from './templates/card'
import Text from './templates/text'
import Image from './templates/image'
import Video from './templates/video'
import Audio from './templates/audio'
import File from './templates/file'
import Buttons from './templates/buttons'
import Carousel from './templates/carousel'
import List from './templates/list'
import Location from './templates/location'
import Custom from './templates/custom'
import Action from './components/action'
import Button from './components/button'
import Media from './components/media'
import ListItem from './components/listItem'
import { Param } from './components/param'
import QuickReply from './components/quickReply'

// Phone templates
import Say from './templates/phone/say'
import Hangup from './templates/phone/hangup'
import Pause from './templates/phone/pause'
import Ask from './templates/phone/ask'
import Dial from './templates/phone/dial'

const Phone = {
  Say,
  Hangup,
  Pause,
  Ask,
  Dial
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

  Action,
  Button,
  Media,
  ListItem,
  Param,
  QuickReply,

  Phone
}
